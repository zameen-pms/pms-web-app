import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/home";
import PublicLayout from "./features/layouts/publicLayout";
import PropertiesHome from "./pages/properties";
import ContactHome from "./pages/contact";
import OwnersHome from "./pages/owners";

const App = () => {
	return (
		<Routes>
			{/* public routes */}
			<Route path="/" element={<PublicLayout />}>
				<Route index element={<HomePage />} />
				<Route path="properties/*" element={<PropertiesHome />} />
				<Route path="contact/*" element={<ContactHome />} />
				<Route path="owners/*" element={<OwnersHome />} />
			</Route>

			{/* private routes */}
		</Routes>
	);
};

export default App;
