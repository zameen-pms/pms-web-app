import { MdArrowBack, MdArrowForward } from "react-icons/md";
import { StyledPropertyImageGallery } from "./Properties.styled";
import { useState } from "react";
import useGetImageUrl from "../hooks/useGetImageUrl";

const PropertyImageGallery = ({ images }) => {
	const [index, setIndex] = useState(0);
	const imageUrl = useGetImageUrl(images[index]?.key, [images, index]);

	const changeIndex = (increment) => {
		let newIndex = index + increment;
		if (newIndex < 0) setIndex(images.length - 1);
		else if (newIndex >= images.length) setIndex(0);
		else setIndex(newIndex);
	};

	return (
		<StyledPropertyImageGallery>
			{imageUrl && <img src={imageUrl} alt="Property" />}
			{images[index].description && (
				<p className="description">{images[index].description}</p>
			)}
			<div className="row align-center justify-sb">
				<MdArrowBack onClick={() => changeIndex(-1)} />
				<p>
					{index + 1} / {images.length}
				</p>
				<MdArrowForward onClick={() => changeIndex(1)} />
			</div>
		</StyledPropertyImageGallery>
	);
};

export default PropertyImageGallery;
