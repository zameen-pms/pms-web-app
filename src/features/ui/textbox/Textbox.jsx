import { v4 } from "uuid";
import { StyledTextbox } from "./Textbox.styled";

const Textbox = ({ label, required, id, ...rest }) => {
	const inputId = id || v4();

	return (
		<StyledTextbox>
			{label && (
				<label htmlFor={inputId}>
					{label}
					<span>{required ? "*" : ""}</span>
				</label>
			)}
			<textarea id={inputId} {...rest} />
		</StyledTextbox>
	);
};

export default Textbox;
