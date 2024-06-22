import { MdClose } from "react-icons/md";
import useOutsideClick from "../../hooks/UseOutsideClick";
import { StyledModal } from "./Modal.styled";

const Modal = ({ children, onOutsideClick }) => {
	const ref = useOutsideClick(onOutsideClick);

	return (
		<StyledModal>
			<div ref={ref} className="modal-content">
				{children}
				<MdClose onClick={onOutsideClick} className="modal-close" />
			</div>
		</StyledModal>
	);
};

export default Modal;
