import { StyledButton } from "./Button.styled";

const Button = ({ fill, children, ...rest }) => {
	return (
		<StyledButton $outline={!fill} {...rest}>
			{children}
		</StyledButton>
	);
};

export default Button;
