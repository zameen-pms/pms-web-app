import { v4 } from "uuid";
import { StyledInput } from "./Input.styled";

const Input = ({ label, required, type, id, ...rest }) => {
	const inputId = id || v4();

	return (
		<StyledInput>
			{label && (
				<label htmlFor={inputId}>
					{label}
					<span>{required ? "*" : ""}</span>
				</label>
			)}
			<input
				type={type || "text"}
				id={inputId}
				required={required}
				{...rest}
			/>
		</StyledInput>
	);
};

export default Input;
