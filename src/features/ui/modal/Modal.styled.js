import styled from "styled-components";

export const StyledModal = styled.div`
	position: fixed;
	left: 0;
	top: 0;
	width: 100vw;
	height: 100vh;
	background: rgba(0, 0, 0, 0.8);
	backdrop-filter: blur(8px);
	-webkit-backdrop-filter: blur(8px);
	color: white;
	display: flex;
	align-items: center;
	justify-content: center;

	svg.modal-close {
		color: white;
		position: fixed;
		top: 2rem;
		right: 2rem;
		width: 40px;
		height: 40px;
		cursor: pointer;
	}
`;
