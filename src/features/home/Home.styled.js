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
		gap: 2rem;
		text-align: center;

		h1 {
			font-size: 45px;
			letter-spacing: 0.25px;
		}

		p {
			color: white;
			font-size: 22px;
			line-height: 2rem;
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
		}
	}

	@media (max-width: 600px) {
		height: 100vh;

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
	background-color: var(--off-white);
	width: 100%;
	padding: 100px 50px;

	h2 {
		font-size: 35px;
		font-weight: 400;
	}

	p {
		font-size: 18px;
	}

	.center-text {
		width: 1080px;
		margin: 0 auto;
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
	}

	.home-grid {
		margin: 3rem auto 0 auto;
		width: 1080px;
		display: grid;
		grid-template-columns: 1fr 1fr 1fr;
		gap: 1rem;
	}

	@media (max-width: 1300px) {
		padding: 2rem;
		margin-top: 0;

		.center-text {
			width: 100%;
		}

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
		.home-grid {
			grid-template-columns: 1fr;
		}

		h2 {
			font-size: 28px;
		}
	}
`;

export const ServiceCard = styled.div`
	border: 1px solid lightgray;
	padding: 15px;
	border-radius: 10px;
	background: white;

	svg {
		width: 35px;
		height: 35px;
		padding: 5px;
		background: #f2f2f4;
		border-radius: 5px;
		color: var(--primary);
	}

	h4 {
		font-size: 24px;
		font-weight: 400;
		margin-top: 3rem;
	}

	p {
		font-size: 14px;
		line-height: 21px;
		color: var(--gray);
		margin-top: 1rem;
	}

	@media (max-width: 800px) {
		svg {
			width: 50px;
			height: 50px;
		}

		h4 {
			margin-top: 1rem;
			font-size: 20px;
		}
	}
`;

export const StyledHomeForm = styled.div`
	background: white;
	padding: 100px 50px;

	h2 {
		font-size: 35px;
		font-weight: 400;
	}

	p {
		font-size: 18px;
	}

	.center-text {
		width: 1080px;
		margin: 0 auto;
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
	}

	@media (max-width: 1300px) {
		padding: 2rem;
		margin-top: 0;

		.center-text {
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
	}
`;

export const ConsulationForm = styled.form`
	margin: 3rem auto 0 auto;
	padding: 1.5rem;
	width: 1080px;
	border-radius: 10px;
	display: flex;
	flex-direction: column;
	gap: 2rem;
	box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;

	.message {
		background: var(--primary);
		padding: 1rem;
		display: flex;
		justify-content: center;
		align-items: center;
		color: white;
		border-radius: 5px;
	}

	@media (max-width: 1300px) {
		width: 100%;
	}

	@media (max-width: 600px) {
		box-shadow: none;
		padding: 0;
	}
`;
