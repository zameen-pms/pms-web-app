import { Outlet } from "react-router-dom";
import PublicHeader from "./PublicHeader";
import { StyledPublicBody, StyledPublicLayout } from "./PublicLayout.styled";

const PublicLayout = () => {
	return (
		<StyledPublicLayout>
			<PublicHeader />
			<StyledPublicBody>
				<Outlet />
			</StyledPublicBody>
		</StyledPublicLayout>
	);
};

export default PublicLayout;
