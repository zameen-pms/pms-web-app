import styled from "styled-components";

export const StyledInput = styled.div`
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

	input {
		outline: none;
		font-size: 1rem;
		font-weight: 300;
		padding: 0.5rem;
		border: 1px solid var(--text-gray);
		border-radius: 4px;

		&:focus,
		&:active {
			border-color: var(--primary);
		}
	}
`;
