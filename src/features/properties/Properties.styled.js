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
	background-color: white;

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

export const StyledPropertyInfo = styled.section`
	display: grid;
	grid-template-columns: 3fr 2fr;
	grid-gap: 2rem;

	@media (max-width: 1200px) {
		grid-template-columns: 1fr;
	}

	@media (max-width: 1080px) {
		grid-template-columns: 1fr;
		grid-gap: 1rem;
	}
`;

export const PropertyInfoCard = styled.div`
	background: white;
	padding: 1rem;
	border-radius: 16px;
	box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
	height: min-content;
`;

export const StyledPropertyImageGallery = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1rem;

	img {
		height: 500px;
		width: auto;
		object-fit: cover;
		border-radius: 4px;
	}

	svg {
		background: black;
		color: white;
		width: 40px;
		height: 40px;
		border-radius: 20px;
		padding: 0.5rem;
		cursor: pointer;
	}

	@media (max-width: 1080px) {
		img {
			width: 100%;
			height: auto;
		}
	}
`;
