import { Helmet } from "react-helmet-async";
import ModalWrapper from "../../features/ui/modalWrapper/ModalWrapper";
import { URL } from "../../constants";
import SetPasswordModal from "../../features/auth/SetPasswordModal";

const SetPassword = () => {
	return (
		<>
			<Helmet>
				<title>Set Password - Zameen Management</title>
				<meta name="description" content="Reset your password." />
				<meta
					property="og:title"
					content="Set Password - Zameen Management"
				/>
				<meta
					property="og:description"
					content="Reset your password."
				/>
				<meta property="og:url" content={`${URL}/set-password`} />
			</Helmet>
			<ModalWrapper>
				<SetPasswordModal />
			</ModalWrapper>
		</>
	);
};

export default SetPassword;
