import { Helmet } from "react-helmet-async";
import SignInModal from "../../features/auth/SignInModal";
import ModalWrapper from "../../features/ui/modalWrapper/ModalWrapper";
import { URL } from "../../constants";

const SignIn = () => {
	return (
		<>
			<Helmet>
				<title>Sign In - Zameen Management</title>
				<meta
					name="description"
					content="Sign in to your tenant portal."
				/>
				<meta
					property="og:title"
					content="Sign In - Zameen Management"
				/>
				<meta
					property="og:description"
					content="Sign in to your tenant portal."
				/>
				<meta property="og:url" content={`${URL}/sign-in`} />
			</Helmet>
			<ModalWrapper>
				<SignInModal />
			</ModalWrapper>
		</>
	);
};

export default SignIn;
