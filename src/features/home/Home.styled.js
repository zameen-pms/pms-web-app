import styled from "styled-components";

export const StyledHero = styled.main`
	width: 100%;
	height: 100vh;
	background: linear-gradient(
			90deg,
			rgba(255, 84, 73, 0.9) 0%,
			rgba(108, 99, 255, 0.9) 100%
		),
		url("images/building-bg.jpg") center/cover no-repeat;

	.content {
		width: 800px;
		padding: 1rem;
		padding-top: 15vh;
		margin: 0 auto;
		color: white;
		display: flex;
		flex-direction: column;
		gap: 20px;
		text-align: center;

		h1 {
			font-size: 45px;
			letter-spacing: 0.25px;
		}

		p {
			color: #c8d6e5;
			font-size: 22px;
		}
	}

	.handshake-img {
		position: absolute;
		bottom: 0;
		left: 0;
		width: 40vw;
		height: auto;
	}

	.property-img {
		position: absolute;
		bottom: 0;
		right: 0;
		max-width: 100%;
		width: 30vw;
		height: auto;
	}

	@media (max-width: 800px) {
		.content {
			width: 100%;
			padding: 2rem;
			padding-top: 15vh;

			h1 {
				font-size: 35px;
			}

			p {
				font-size: 18px;
			}
		}
	}

	@media (max-width: 600px) {
		.content {
			width: 100%;
			padding: 1rem;
			padding-top: 15vh;

			h1 {
				font-size: 30px;
			}
		}
	}
`;

export const HomeSection = styled.section`
	background-color: #ecf0f1;
	width: 100%;
	padding: 50px;
	display: flex;
	flex-direction: column;
	gap: 1rem;

	h2 {
		font-size: 35px;
	}

	p {
		font-size: 18px;
	}

	.center-text {
		width: 800px;
		margin: 0 auto;
		display: flex;
		flex-direction: column;
		gap: 1rem;
		text-align: center;
	}

	.home-grid {
		margin: 0 auto;
		margin-top: 1rem;
		width: 1080px;
		display: grid;
		grid-template-columns: 1fr 1fr 1fr;
		gap: 1rem;
	}

	@media (max-width: 1300px) {
		padding: 1rem;
		margin-top: 0;

		.home-grid {
			width: 100%;
		}
	}

	@media (max-width: 1080px) {
		.home-grid {
			grid-template-columns: 1fr 1fr;
		}
	}

	@media (max-width: 800px) {
		h2 {
			font-size: 30px;
		}

		.center-text {
			width: 100%;
			padding: 1rem;
		}
	}
`;

export const ServiceCard = styled.div`
	border: 1px solid var(--primary);
	padding: 15px;
	border-radius: 10px;
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 1rem;
	text-align: center;

	svg {
		width: 100px;
		height: 100px;
		color: var(--primary);
	}

	h4 {
		font-size: 18px;
		color: var(--primary);
	}

	p {
		font-size: 1rem;
	}

	@media (max-width: 800px) {
		svg {
			width: 50px;
			height: 50px;
		}

		p {
			font-size: 14px;
		}
	}
`;
