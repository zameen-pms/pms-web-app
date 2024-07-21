import { Navigate, Route, Routes } from "react-router-dom";
import PublicLayout from "./features/layouts/publicLayout";
import PropertiesHome from "./pages/properties";
import ApplicationsHome from "./pages/applications";
import AuthHome from "./pages/auth";
import ServicesHome from "./pages/services";
import HomePage from "./pages/home";

const App = () => {
	return (
		<Routes>
			{/* public routes */}
			<Route path="/" element={<PublicLayout />}>
				<Route index element={<HomePage />} />
				<Route path="applications/*" element={<ApplicationsHome />} />
				<Route path="properties/*" element={<PropertiesHome />} />
				<Route path="services/*" element={<ServicesHome />} />
				<Route path="/*" element={<AuthHome />} />
				<Route path="*" element={<Navigate to="/" />} />
			</Route>

			{/* private routes */}
		</Routes>
	);
};

export default App;
