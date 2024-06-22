import styled from "styled-components";

export const StyledPropertiesCard = styled.div`
	background: var(--gray);
	border-radius: 16px;
	padding: 2rem;
	display: flex;
	flex-direction: column;
	gap: 1rem;

	@media (max-width: 650px) {
		padding: 1rem;
	}
`;

export const StyledPropertyCard = styled.div`
	padding: 1.5rem;
	background-color: white;
	width: 100%;
	border-radius: 1rem;
	display: flex;
	flex-direction: row;
	align-items: stretch;
	gap: 2rem;
	box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
	cursor: pointer;
	transition: all 0.25s ease-in-out;

	&:hover {
		box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
			rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
			rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
	}

	.card-image {
		width: 400px;
		min-height: 200px;
		background: gray;
		border-radius: 0.5rem;
		display: flex;
		justify-content: center;
		align-items: center;

		img {
			width: 100%;
			height: auto;
			border-radius: 0.5rem;
		}

		svg {
			color: white;
			width: 100px;
			height: 100px;
		}
	}

	.card-body {
		flex-grow: 1;
		display: flex;
		flex-direction: column;
		justify-content: space-between;

		.card-body-header {
			font-size: 22px;
			display: flex;
			flex-direction: row;
			align-items: flex-start;
			justify-content: space-between;

			@media (max-width: 1200px) {
				font-size: 18px;
			}

			@media (max-width: 650px) {
				font-size: 1rem;
			}
		}
	}

	.card-icon {
		background: var(--primary-shade);
		display: flex;
		flex-direction: row;
		align-items: center;
		gap: 0.5rem;
		padding: 0.25rem 0.5rem;
		border-radius: 8px;

		svg {
			width: 20px;
			height: 20px;
			color: var(--primary);
		}

		p {
			font-size: 14px;
		}
	}

	@media (max-width: 1000px) {
		flex-direction: column;

		.card-image {
			width: 100%;
		}

		.card-body {
			gap: 2rem;
		}
	}

	@media (max-width: 650px) {
		padding: 0.5rem;
	}
`;

export const StyledCardPill = styled.div`
	background: ${(props) => props.$color};
	color: white;
	font-weight: 600;
	font-size: 12px;
	letter-spacing: 0.5px;
	border-radius: 6px;
	padding: 0.25rem 0.5rem;
	position: absolute;
	top: 1rem;
	left: 1rem;
`;

export const StyledPropertyGallery = styled.div`
	width: 100%;
	display: flex;
	flex-direction: row;
	align-items: stretch;
	gap: 0.5rem;

	img {
		width: 100%;
		height: 100%;
		border-radius: 8px;
		object-fit: cover;
		cursor: pointer;
		transition: all 0.2s ease-in-out;

		&:hover {
			box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
				rgba(0, 0, 0, 0.12) 0px -12px 30px,
				rgba(0, 0, 0, 0.12) 0px 4px 6px,
				rgba(0, 0, 0, 0.17) 0px 12px 13px,
				rgba(0, 0, 0, 0.09) 0px -3px 5px;
		}
	}

	.gallery-main {
		flex: 1;
	}

	.gallery-carousel {
		flex: 1;
		display: grid;
		grid-template-columns: 1fr 1fr;
		grid-gap: 0.5rem;

		.gallery-more {
			background-color: var(--primary-shade);
			height: 100%;
			border-radius: 8px;
			color: var(--primary);
			display: flex;
			align-items: center;
			justify-content: center;
			font-size: 30px;
			font-weight: 500;
			cursor: pointer;
			transition: all 0.2s ease-in-out;

			&:hover {
				box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
					rgba(0, 0, 0, 0.12) 0px -12px 30px,
					rgba(0, 0, 0, 0.12) 0px 4px 6px,
					rgba(0, 0, 0, 0.17) 0px 12px 13px,
					rgba(0, 0, 0, 0.09) 0px -3px 5px;
			}
		}
	}
`;

export const StyledPropertyModal = styled.div`
	background-color: white;
	display: flex;
	align-items: center;
	gap: 1rem;
	padding: 1rem;
	border-radius: 8px;

	svg {
		width: 40px;
		height: 40px;
		cursor: pointer;
		background-color: black;
		border-radius: 20px;
		color: white;
		padding: 0.5rem;
	}

	img {
		height: 75vh;
		width: auto;
		border-radius: 8px;
	}

	p {
		color: black;
		font-weight: 500;
		font-size: 20px;
	}
`;
