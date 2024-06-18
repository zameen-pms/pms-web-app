import { Outlet } from "react-router-dom";
import PublicHeader from "./PublicHeader";

const PublicLayout = () => {
	return (
		<>
			<PublicHeader />
			<Outlet />
		</>
	);
};

export default PublicLayout;
