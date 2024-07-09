import styled from "styled-components";

export const StyledAuthForm = styled.form`
	width: 500px;
	display: flex;
	flex-direction: column;
	gap: 1rem;

	h2 {
		font-size: 36px;
		font-weight: 400;
		letter-spacing: -0.2px;
	}

	a {
		text-align: end;
		color: var(--primary);
	}

	@media (max-width: 500px) {
		width: 100%;
	}
`;
