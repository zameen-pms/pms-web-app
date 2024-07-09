import { useState } from "react";
import { StyledAuthForm } from "./auth.styled";
import Button from "../ui/button/Button";
import Input from "../ui/input/Input";
import { Navigate, useSearchParams } from "react-router-dom";

const SetPasswordModal = () => {
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");
	const [searchParams] = useSearchParams();
	const token = searchParams.get("token");

	if (!token) return <Navigate to="/" />;

	const handleSubmit = (e) => {
		e.preventDefault();
		try {
			console.log({ password, confirmPassword });
		} catch (err) {
			alert("Unable to set new password.");
		}
	};

	return (
		<StyledAuthForm onSubmit={handleSubmit}>
			<div className="column">
				<h2>Reset Password</h2>
				<p>Enter a new password</p>
			</div>
			<Input
				value={password}
				onChange={(e) => setPassword(e.target.value)}
				label="Password"
				type="password"
				required
			/>
			<Input
				value={confirmPassword}
				onChange={(e) => setConfirmPassword(e.target.value)}
				label="Confirm Password"
				type="password"
				required
			/>
			<Button type="submit">Set Password</Button>
		</StyledAuthForm>
	);
};

export default SetPasswordModal;
