import styled from "styled-components";

export const StyledTextbox = styled.div`
	display: flex;
	flex-direction: column;

	label {
		font-size: 14px;
		letter-spacing: 0.2px;
		color: gray;

		span {
			color: var(--primary);
		}
	}

	textarea {
		outline: none;
		font-size: 1rem;
		font-weight: 300;
		padding: 0.5rem;
		border: 1px solid var(--text-gray);
		border-radius: 4px;
		height: 7.5rem;
		resize: none;

		&:focus,
		&:active {
			border-color: var(--primary);
		}
	}
`;
