import { StyledForm } from "./Form.styled";

const Form = ({ onSubmit, children }) => {
	const handleSubmit = (e) => {
		e.preventDefault();
		onSubmit && onSubmit();
	};

	return <StyledForm onSubmit={handleSubmit}>{children}</StyledForm>;
};

export default Form;
