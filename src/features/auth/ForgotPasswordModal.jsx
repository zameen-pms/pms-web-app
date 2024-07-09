import { useState } from "react";
import { StyledAuthForm } from "./auth.styled";
import Input from "../ui/input/Input";
import Button from "../ui/button/Button";

const ForgotPasswordModal = () => {
	const [email, setEmail] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();
		try {
			console.log({ email });
		} catch (err) {
			alert("Unable to send reset password link.");
		}
	};
	return (
		<StyledAuthForm onSubmit={handleSubmit}>
			<div className="column">
				<h2>Forgot Your Password?</h2>
				<p>Enter your email address to recieve a link.</p>
			</div>
			<Input
				value={email}
				onChange={(e) => setEmail(e.target.value)}
				label="Email"
				type="email"
				required
			/>
			<Button type="submit">Send Link</Button>
		</StyledAuthForm>
	);
};

export default ForgotPasswordModal;
