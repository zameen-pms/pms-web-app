import { Outlet } from "react-router-dom";
import PublicHeader from "./PublicHeader";
import { StyledPublicBody } from "./PublicLayout.styled";
import PublicFooter from "./PublicFooter";

const PublicLayout = () => {
	return (
		<>
			<PublicHeader />
			<StyledPublicBody>
				<Outlet />
			</StyledPublicBody>
			<PublicFooter />
		</>
	);
};

export default PublicLayout;
