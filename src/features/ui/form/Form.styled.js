import styled from "styled-components";

export const StyledForm = styled.form`
	background-color: white;
	padding: 1rem;
	border-radius: 8px;
	box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;

	h3 {
		color: var(--primary);
		margin-bottom: 1rem;
		font-weight: 500;
		letter-spacing: 0.5px;
	}

	h5 {
		color: black;
		font-weight: 600;
		font-size: 12px;
		margin-bottom: 0.25rem;
	}

	p {
		color: gray;
		font-weight: 300;
		font-size: 1rem;
		margin-bottom: 0.5rem;
	}

	button {
		border: 1px solid var(--primary);
		color: var(--primary);
		font-size: 14px;
		font-weight: 500;
		letter-spacing: -0.1px;
		width: min-content;
		white-space: nowrap;
		background: white;
		transition: all 0.25s ease-in-out;
		cursor: pointer;
		padding: 0.5rem 0.75rem;
		border-radius: 4px;

		&:hover {
			background-color: var(--primary);
			color: white;
		}
	}
`;

export const GridRow = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
	gap: 1rem;
	margin-bottom: 2rem;

	&:last-child {
		margin-bottom: 0;
	}

	div {
		width: 100%;
	}
`;
