import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import getPropertyById from "../../features/api/properties/getPropertyById";
import Loader from "../../features/ui/loader/Loader";
import ApplicationForm from "../../features/applications/ApplicationForm";
import { appObject } from "../../features/applications/ApplicationConstants";
import { v4 } from "uuid";
import createUser from "../../features/api/user/createUser";
import createApplication from "../../features/api/applications/createApplication";
import { getAddress } from "../../features/utils/utils";
import getUsers from "../../features/api/user/getUsers";

const Application = () => {
	const { propertyId } = useParams();
	const navigate = useNavigate();
	const [property, setProperty] = useState(null);
	const [app, setApp] = useState(appObject);
	const [loading, setLoading] = useState(false);

	const fetchProperty = async () => {
		try {
			setLoading(true);
			const { data } = await getPropertyById(propertyId);
			setProperty(data);
		} catch (err) {
			alert("Unable to fetch property. Redirecting...");
			navigate("/");
		} finally {
			setLoading(false);
		}
	};

	useEffect(() => {
		fetchProperty();
	}, []);

	const checkUserExists = async (email) => {
		try {
			const { data } = await getUsers({ email });
			return data.length === 0 ? false : data[0];
		} catch (err) {
			console.log(err.message);
		}
	};

	const handleSubmit = async () => {
		if (app.incomeFiles?.length === 0) {
			alert("Please upload at least one proof on income.");
		}
		try {
			let user = await checkUserExists(app.applicant.email);
			if (!user) {
				const userBody = {
					role: "Tenant",
					firstName: app.applicant.firstName,
					lastName: app.applicant.lastName,
					email: app.applicant.email,
					password: v4(),
					status: "Disabled",
				};
				const { data } = await createUser(userBody);
				user = data;
			}

			const applicationBody = {
				property: propertyId,
				user: user._id,
				...app,
				additionalComments: app?.additionalComments || "N/A",
				questions: app?.questions || "N/A",
			};
			await createApplication(applicationBody);

			alert(
				"Your application has been submitted! You will be redirected to the payment page."
			);
			navigate("/applications/pay");
		} catch (err) {
			alert("An error occured when trying to submit you application.");
		}
	};

	if (!property) return <Loader />;

	return (
		<section className="padding column gap-2">
			<h2>{getAddress(property.address)}: Rental Application</h2>
			<ApplicationForm
				app={app}
				setApp={setApp}
				canEdit={true}
				handleSubmit={handleSubmit}
				loading={loading}
			/>
		</section>
	);
};

export default Application;
