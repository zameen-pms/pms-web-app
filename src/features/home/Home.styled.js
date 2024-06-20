import styled from "styled-components";

export const StyledHero = styled.div`
	width: 100%;
	height: 100%;
	background: whitesmoke;
	align-items: center;
	justify-content: center;
	background-image: url("https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2");
	background-position: center;
	background-attachment: fixed;
	background-size: cover;

	div.hero-wrapper {
		width: 100%;
		height: 100%;
		background-color: rgba(0, 0, 0, 0.4);
		display: flex;
		flex-direction: column;
		gap: 1.5rem;
		align-items: center;
		justify-content: center;
		color: white;
		backdrop-filter: blur(8px);
		-webkit-backdrop-filter: blur(8px);
		text-align: center;
		padding: 2rem;

		h1 {
			font-size: 50px;
		}

		p {
			font-size: 20px;
		}

		@media (max-width: 760px) {
			h1 {
				font-size: 32px;
			}

			p {
				font-size: 18px;
			}
		}
	}
`;
