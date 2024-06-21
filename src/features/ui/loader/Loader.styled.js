import styled from "styled-components";

export const StyledLoader = styled.div`
	@keyframes l4 {
		to {
			clip-path: inset(0 -1ch 0 0);
		}
	}

	width: fit-content;
	font-weight: bold;
	font-family: monospace;
	font-size: 30px;
	clip-path: inset(0 3ch 0 0);
	animation: l4 1s steps(4) infinite;

	&:before {
		content: "Loading...";
	}
`;
