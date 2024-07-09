import { Navigate, Route, Routes } from "react-router-dom";
import SignIn from "./SignIn";
import ForgotPassword from "./ForgotPassword";
import SetPassword from "./SetPassword";

const AuthHome = () => {
	return (
		<Routes>
			<Route path="sign-in" element={<SignIn />} />
			<Route path="forgot-password" element={<ForgotPassword />} />
			<Route path="set-password" element={<SetPassword />} />f
			<Route path="*" element={<Navigate to="/" />} />
		</Routes>
	);
};

export default AuthHome;
