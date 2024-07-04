import { Outlet } from "react-router-dom";
import PublicHeader from "./PublicHeader";
import { StyledPublicBody, StyledPublicLayout } from "./PublicLayout.styled";
import PublicFooter from "./PublicFooter";

const PublicLayout = () => {
	return (
		<>
			<StyledPublicLayout>
				<PublicHeader />
				<StyledPublicBody>
					<Outlet />
				</StyledPublicBody>
			</StyledPublicLayout>
			<PublicFooter />
		</>
	);
};

export default PublicLayout;
