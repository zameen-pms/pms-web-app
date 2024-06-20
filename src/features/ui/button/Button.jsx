import { StyledButton } from "./Button.styled";

const Button = ({ fill, loading, onClick, children, ...rest }) => {
	const handleClick = () => {
		if (!onClick || loading) return;
		onClick();
	};

	return (
		<StyledButton
			onClick={handleClick}
			$loading={loading || false}
			$outline={!fill}
			{...rest}
		>
			{loading ? "Loading..." : children}
		</StyledButton>
	);
};

export default Button;
