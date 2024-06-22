import { StyledPropertyGallery } from "./Properties.styled";
import { URL } from "../../constants";
import PropertyImagesModal from "./PropertyImagesModal";
import { useState } from "react";

const PropertyGallery = ({ images }) => {
	const [showGalleryModal, setShowGalleryModal] = useState(false);
	const [enlargedImages, setEnlargedImages] = useState([images[0]]);

	const handleImageClick = () => {
		setEnlargedImages(images);
		setShowGalleryModal(true);
	};

	return (
		<>
			<StyledPropertyGallery>
				<div className="gallery-main">
					<img
						onClick={handleImageClick}
						src={`${URL}/assets/url/${images[0]}`}
						alt="Property Image"
					/>
				</div>
				<div className="gallery-carousel">
					{images.length > 1 && (
						<img
							onClick={handleImageClick}
							src={`${URL}/assets/url/${images[1]}`}
							alt="Property"
						/>
					)}
					{images.length > 2 && (
						<img
							onClick={handleImageClick}
							src={`${URL}/assets/url/${images[2]}`}
							alt="Property"
						/>
					)}
					{images.length > 3 && (
						<img
							onClick={handleImageClick}
							src={`${URL}/assets/url/${images[3]}`}
							alt="Property"
						/>
					)}
					{images.length > 4 && (
						<div
							onClick={handleImageClick}
							className="gallery-more"
						>
							<img
								src={`${URL}/assets/url/${images[0]}`}
								alt="Property"
							/>
							<div className="blur">View All Images</div>
						</div>
					)}
				</div>
			</StyledPropertyGallery>
			{showGalleryModal && enlargedImages.length > 0 && (
				<PropertyImagesModal
					images={enlargedImages}
					setShowGalleryModal={setShowGalleryModal}
				/>
			)}
		</>
	);
};

export default PropertyGallery;
