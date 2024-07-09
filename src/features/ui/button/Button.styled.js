import styled from "styled-components";

export const StyledButton = styled.button`
	padding: 0.75rem 1.5rem;
	font-weight: 500;
	font-size: 1rem;
	letter-spacing: -0.1px;
	border-radius: 8px;
	outline: none;
	cursor: ${(props) => (props.$loading ? "not-allowed" : "pointer")};
	border: 2px solid var(--primary);
	background: ${(props) => (props.$outline ? "none" : "var(--primary)")};
	color: ${(props) => (props.$outline ? "var(--primary)" : "white")};
	transition: all 0.25s ease-in-out;
	white-space: nowrap;
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;

	&:hover {
		background: var(--primary);
		color: white;
	}
`;
