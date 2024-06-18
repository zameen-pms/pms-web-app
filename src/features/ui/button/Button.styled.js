import styled from "styled-components";

export const StyledButton = styled.button`
	padding: 0.5rem 1.5rem;
	font-weight: 550;
	font-size: 1rem;
	letter-spacing: 0.3px;
	border-radius: 100px;
	outline: none;
	cursor: pointer;
	border: 2px solid var(--primary-red);
	background: ${(props) => (props.$outline ? "none" : "var(--primary-red)")};
	color: ${(props) => (props.$outline ? "var(--primary-red)" : "white")};
	transition: all 0.25s ease-in-out;
	white-space: nowrap;

	&:hover {
		background: var(--primary-red);
		color: white;
	}
`;
