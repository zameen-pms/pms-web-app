import styled from "styled-components";

export const StyledPublicHeader = styled.header`
	width: 100%;
	height: 75px;
	background: var(--dark-gray);
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 0 2rem;
	position: relative;

	.logo {
		img {
			height: 50px;
			width: auto;
		}
	}

	nav {
		display: flex;
		flex-direction: row;
		align-items: center;
		gap: 24px;
		background: var(--dark-gray);
		transition: all 0.25s ease-in;

		.menu-close {
			position: fixed;
			left: 0;
			top: 0;
			width: 100vw;
			height: 50px;
			display: ${(props) => (props.$open ? "flex" : "none")};
			flex-direction: row;
			justify-content: flex-end;
			align-items: center;
			padding: 0 2rem;
		}

		p {
			color: white;
			font-weight: 300;
			cursor: pointer;
			display: flex;
			align-items: center;
			justify-content: space-between;

			&:hover {
				font-weight: 400;
			}

			svg {
				display: none;
				color: var(--gray);
				width: 1rem;
				height: 1rem;
			}
		}

		.header-button {
			font-size: 14px;
			color: white;
			background: var(--primary);
			border: none;
			outline: none;
			border-radius: 5px;
			padding: 0.75rem 1.5rem;
			cursor: pointer;
			transition: all 0.25s ease-in-out;
			white-space: nowrap;

			&:hover {
				box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;
				scale: 1.03;
			}
		}

		@media (max-width: 900px) {
			position: fixed;
			top: 0;
			left: ${(props) => (props.$open ? "0" : "100vw")};
			width: 100vw;
			height: 100vh;
			z-index: 10;
			flex-direction: column;
			align-items: flex-end;
			padding: calc(75px + 2rem) 2rem 0 2rem;

			p {
				background: white;
				color: black;
				border: 1px solid var(--gray);
				width: 100%;
				padding: 1rem;
				border-radius: 5px;

				svg {
					display: block;
				}
			}

			.header-button {
				width: 100%;
				display: flex;
				justify-content: center;
				align-items: center;
				padding: 1rem;
			}
		}
	}

	.menu-icon {
		width: 30px;
		height: 30px;
		color: var(--primary);
		cursor: pointer;
		display: none;

		@media (max-width: 900px) {
			display: block;
		}
	}
`;

export const StyledPublicBody = styled.section`
	flex-grow: 1;
	min-height: calc(100vh - 75px);
	overflow: auto;
`;

export const StyledPublicLogo = styled.h1`
	font-size: 30px;

	a {
		text-decoration: none;
		color: white;
	}
`;

export const StyledPublicNav = styled.nav`
	display: flex;
	flex-direction: row;
	align-items: center;
	gap: 1.5rem;
	background-color: var(--primary-dark);
	transition: all 0.25s ease-in-out;

	p {
		font-size: 1rem;
		color: white;
		cursor: pointer;
		font-weight: 500;

		&:hover {
			text-decoration: underline;
		}
	}

	svg {
		display: none;
	}

	@media (max-width: 1080px) {
		position: fixed;
		left: ${(props) => (props.$open ? "0" : "100%")};
		top: 0;
		width: 100%;
		height: 100vh;
		flex-direction: column;
		z-index: 1000;
		padding: 2rem;

		p {
			font-size: 28px;
		}

		button {
			font-size: 28px !important;
		}

		svg {
			display: block;
			width: 40px;
			height: 40px;
			color: white;
			align-self: flex-end;
			cursor: pointer;
		}
	}
`;

export const StyledPublicFooter = styled.footer`
	width: 100%;
	background: var(--primary-dark);
	color: white;
	padding: 2rem;
`;
