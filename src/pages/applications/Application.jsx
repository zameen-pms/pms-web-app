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
import { APPLICATION_MODEL } from "../../constants";

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
			alert("Unable to fetch property. Redirecting...");
			navigate("/");
		}
	};

	useEffect(() => {
		fetchProperty();
		dispatch(setApplication(APPLICATION_MODEL));
		dispatch(setCanEdit(true));
	}, []);

	const handleSubmit = async () => {
		if (!confirm("Are you sure you're ready to submit?")) return;
		try {
			dispatch(setIsLoading(true));

			const { personal } = application;
			const { email, firstName, lastName } = personal;

			const { data: users } = await getUsers({ email });
			let user;
			if (users.length === 0) {
				const { data } = createUser({
					email,
					password: v4(),
					role: "Tenant",
					firstName,
					lastName,
					status: "Disabled",
				});
				user = data;
			} else {
				user = users[0];
			}

			await createApplication({
				...application,
				property: propertyId,
				user: user._id,
			});

			alert(
				"Your application has been submitted! A link to view your application has been sent to your email."
			);
			navigate("/applications/pay");
		} catch (err) {
			console.log(err.message);
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
