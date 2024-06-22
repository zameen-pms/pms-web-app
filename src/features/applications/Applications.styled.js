import styled from "styled-components";

export const StyledApplicationFiles = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1rem;
	margin-bottom: 2rem;
`;

export const ApplicationFile = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	gap: 1rem;
	border: 1px solid var(--primary);
	padding: 0.5rem 1rem;
	border-radius: 6px;
	width: min-content;

	p {
		font-size: 14px;
		color: var(--primary);
		font-weight: 500;
		margin-bottom: 0 !important;
		white-space: nowrap;
	}

	svg {
		color: black;
		width: 30px;
		height: 30px;
		cursor: pointer;
		transition: all 0.25s ease-in-out;

		&:hover {
			color: #e74c3c;
		}
	}
`;

export const ApplicationFilesButton = styled.div``;
