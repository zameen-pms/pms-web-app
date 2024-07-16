import styled from "styled-components";

export const StyledPublicHeader = styled.header`
	width: 100%;
	height: 100px;
	padding: 0 2rem;
	background-color: var(--primary-dark);
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;

	.menu-icon {
		display: none;
		color: white;
		width: 40px;
		height: 40px;
		cursor: pointer;

		@media (max-width: 1080px) {
			display: block;
		}
	}
`;

export const StyledPublicBody = styled.section`
	min-height: calc(100vh - 100px);
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
