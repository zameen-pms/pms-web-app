import { Helmet } from "react-helmet-async";
import ModalWrapper from "../../features/ui/modalWrapper/ModalWrapper";
import { URL } from "../../constants";
import ForgotPasswordModal from "../../features/auth/ForgotPasswordModal";

const ForgotPassword = () => {
	return (
		<>
			<Helmet>
				<title>Forgot Password - Zameen Management</title>
				<meta
					name="description"
					content="Enter your email to receieve a reset-password link."
				/>
				<meta
					property="og:title"
					content="Forgot Password - Zameen Management"
				/>
				<meta
					property="og:description"
					content="Enter your email to receieve a reset-password link."
				/>
				<meta property="og:url" content={`${URL}/forgot-password`} />
			</Helmet>
			<ModalWrapper>
				<ForgotPasswordModal />
			</ModalWrapper>
		</>
	);
};

export default ForgotPassword;
