import { Navigate, Route, Routes } from "react-router-dom";
import Application from "./Application";
import ApplicationsPay from "./ApplicationsPay";

const ApplicationsHome = () => {
	return (
		<Routes>
			<Route path="pay" element={<ApplicationsPay />} />
			<Route path=":propertyId" element={<Application />} />
			<Route path="*" element={<Navigate to="/" />} />
		</Routes>
	);
};

export default ApplicationsHome;
