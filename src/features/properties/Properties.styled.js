import styled from "styled-components";

export const StyledPropertiesCard = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr 1fr;
	grid-gap: 2rem;

	@media (max-width: 1400px) {
		grid-template-columns: 1fr 1fr;
		grid-gap: 1rem;
	}

	@media (max-width: 900px) {
		grid-template-columns: 1fr;
	}
`;

export const StyledPropertyCard = styled.div`
	display: flex;
	flex-direction: column;
	border-radius: 6px;
	box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
	cursor: pointer;
	transition: all 0.25s ease-in-out;

	&:hover {
		box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
			rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
			rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
	}

	& img {
		width: 100%;
		height: 300px;
		object-fit: cover;
		object-position: center;
		border-top-left-radius: 6px;
		border-top-right-radius: 6px;
	}

	.card-body {
		display: flex;
		flex-direction: column;
		gap: 1rem;
		padding: 1rem;

		.card-address {
			display: flex;
			align-items: center;
			gap: 0.25rem;
			color: var(--text-gray);

			svg {
				width: 20px;
				height: 20px;
			}

			p {
				color: gray;
				letter-spacing: 0.1px;
			}
		}

		.card-spec {
			display: flex;
			flex-direction: row;
			align-items: center;
			gap: 0.5rem;

			svg {
				color: var(--primary);
				background: whitesmoke;
				border-radius: 4px;
				padding: 0.25rem;
				width: 26px;
				height: 26px;
			}
		}
	}
`;

export const StyledPill = styled.p`
	position: absolute;
	top: 1rem;
	left: 1rem;
	background: ${(props) => props.$color};
	width: min-content;
	white-space: nowrap;
	font-size: 14px;
	font-weight: 500 !important;
	letter-spacing: 0.5px;
	color: white !important;
	padding: 3px 6px;
	border-radius: 4px;
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

			div.blur {
				position: absolute;
				top: 0;
				left: 0;
				width: 100%;
				height: 100%;
				background: rgba(0, 0, 0, 0.3);
				backdrop-filter: blur(8px);
				-webkit-backdrop-filter: blur(8px);
				border-radius: 8px;
				display: flex;
				justify-content: center;
				align-items: center;
				color: white;
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
