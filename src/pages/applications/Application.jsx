import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import getPropertyById from "../../features/api/properties/getPropertyById";
import Loader from "../../features/ui/loader/Loader";
import ApplicationForm from "../../features/applications/ApplicationForm";
import { getAddress } from "../../features/utils/utils";
import { useDispatch, useSelector } from "react-redux";
import {
	getApplication,
	setApplication,
	setCanEdit,
	setIsLoading,
} from "../../features/store/applicationSlice";
import createApplication from "../../features/api/applications/createApplication";
import createUser from "../../features/api/user/createUser";
import { v4 } from "uuid";
import getUsers from "../../features/api/user/getUsers";
import { APPLICATION_MODEL, MANAGER_URL, WEBAPP_URL } from "../../constants";
import { render } from "@react-email/components";
import ApplicationEmail from "../../../emails/ApplicationEmail";
import sendEmail from "../../features/api/email/sendEmail";
import AppSubmissionEmail from "../../../emails/AppSubmissionEmail";

const Application = () => {
	const { propertyId } = useParams();
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const application = useSelector(getApplication);
	const [property, setProperty] = useState(null);

	const fetchProperty = async () => {
		try {
			const { data } = await getPropertyById(propertyId);
			setProperty(data);
		} catch (err) {
			alert("There was an error. Redirecting...");
			navigate("/");
		}
	};

	useEffect(() => {
		fetchProperty();
		dispatch(setApplication(APPLICATION_MODEL));
		dispatch(setCanEdit(true));
	}, []);

	const createApplicant = async () => {
		try {
			const { personal } = application;
			const { email, firstName, lastName } = personal;

			const { data: users } = await getUsers({ email });

			if (users.length === 0) {
				const { data: user } = await createUser({
					email,
					password: v4(),
					role: "Tenant",
					firstName,
					lastName,
					status: "Disabled",
				});
				return user;
			}
			return users[0];
		} catch (err) {
			console.log(err);
		}
	};

	const submitApplication = async (user) => {
		try {
			const { data: submittedApplication } = await createApplication({
				...application,
				property: propertyId,
				user: user._id,
			});
			return submittedApplication;
		} catch (err) {
			alert("We are unable to submit your application at this time.");
			console.log(err);
		}
	};

	const emailManagers = async (user, application) => {
		try {
			const { data: users } = await getUsers({ role: "Manager" });
			const recipients = users.map((user) => user?.email);

			const address = getAddress(property.address);
			const url = `${MANAGER_URL}/applications/${application._id}`;

			const body = render(
				<ApplicationEmail
					address={address}
					applicant={`${user.firstName} ${user.lastName}`}
					url={url}
				/>
			);

			await sendEmail({
				subject: `Application: ${address}`,
				body,
				recipients,
			});
		} catch (err) {
			console.log(err);
		}
	};

	const emailApplicant = async (user, application) => {
		try {
			const { firstName: name, email } = user;
			const address = getAddress(property.address);
			const url = `${WEBAPP_URL}/applications/view/${application.token}`;

			const body = render(
				<AppSubmissionEmail name={name} address={address} url={url} />
			);

			await sendEmail({
				subject: `Application for ${address}`,
				body,
				recipients: [email],
			});
		} catch (err) {
			console.log(err);
		}
	};

	const handleSubmit = async () => {
		if (!confirm("Are you sure you're ready to submit?")) return;
		try {
			dispatch(setIsLoading(true));

			const user = await createApplicant();
			const submittedApplication = await submitApplication(user);
			await emailManagers(user, submittedApplication);
			await emailApplicant(user, submittedApplication);

			alert(
				"Your application has been submitted! A link to view your application has been sent to your email."
			);
			navigate("/applications/pay");
		} catch (err) {
			console.log(err);
			alert(
				"Unable to submit your application at this time. We apologize for the inconvenience."
			);
		} finally {
			dispatch(setIsLoading(false));
		}
	};

	if (!property) return <Loader />;

	return (
		<section className="padding column gap-2">
			<h2>{getAddress(property.address)}: Rental Application</h2>
			<ApplicationForm onSubmit={handleSubmit} />
		</section>
	);
};

export default Application;
