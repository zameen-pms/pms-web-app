import { MdArrowBack, MdArrowForward } from "react-icons/md";
import Modal from "../ui/modal/Modal";
import { useState } from "react";
import { URL } from "../../constants";
import { StyledPropertyModal } from "./Properties.styled";

const PropertyImagesModal = ({ images, setShowGalleryModal }) => {
	const [index, setIndex] = useState(0);

	const handleNext = (increment) => {
		let newIndex = index + increment;
		if (newIndex < 0) newIndex = images.length - 1;
		if (newIndex >= images.length) newIndex = 0;
		setIndex(newIndex);
	};

	return (
		<Modal onOutsideClick={() => setShowGalleryModal(false)}>
			<StyledPropertyModal>
				<MdArrowBack onClick={() => handleNext(-1)} />
				<div className="column gap-1 align-center">
					<img
						src={`${URL}/assets/url/${images[index]}`}
						alt="Property Image"
					/>
					<p>{`${index + 1} / ${images.length}`}</p>
				</div>
				<MdArrowForward onClick={() => handleNext(1)} />
			</StyledPropertyModal>
		</Modal>
	);
};

export default PropertyImagesModal;
