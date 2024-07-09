import { useState } from "react";
import Button from "../ui/button/Button";
import Input from "../ui/input/Input";
import { StyledAuthForm } from "./auth.styled";
import { Link } from "react-router-dom";

const SignInModal = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();
		try {
			console.log({ email, password });
		} catch (err) {
			alert("Unable to sign in");
		}
	};

	return (
		<StyledAuthForm onSubmit={handleSubmit}>
			<div className="column">
				<h2>Sign In</h2>
				<p>Hi, welcome back!</p>
			</div>
			<Input
				value={email}
				onChange={(e) => setEmail(e.target.value)}
				label="Email"
				type="email"
				required
			/>
			<Input
				value={password}
				onChange={(e) => setPassword(e.target.value)}
				label="Password"
				type="password"
				required
			/>
			<Link to="/forgot-password">Forgot Password?</Link>
			<Button type="submit">Sign In</Button>
		</StyledAuthForm>
	);
};

export default SignInModal;
