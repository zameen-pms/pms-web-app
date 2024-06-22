import { useEffect, useState } from "react";
import { StyledPill, StyledPropertyCard } from "./Properties.styled";
import { useNavigate } from "react-router-dom";
import { formatNumber, getAddress, getImageUrl } from "../utils/utils";
import { MdBed, MdLocationOn, MdBathtub, MdOpenInFull } from "react-icons/md";

const PropertyCard = ({ property }) => {
	const [color, setColor] = useState("");
	const navigate = useNavigate();

	useEffect(() => {
		if (property.availability === "Available") {
			setColor("#27ae60");
		} else if (property.availability === "Occupied") {
			setColor("#2980b9");
		} else {
			setColor("#e74c3c");
		}
	}, [property]);

	const handleClick = () => navigate(`/properties/${property._id}`);

	return (
		<StyledPropertyCard onClick={handleClick}>
			<img src={getImageUrl(property.images[0])} alt="Property" />
			<StyledPill $color={color}>{property.availability}</StyledPill>
			<div className="card-body">
				<div className="row align-center justify-sb">
					<div className="card-address">
						<MdLocationOn />
						<p>{getAddress(property.address)}</p>
					</div>
					<h3>${formatNumber(property.general.rent)}</h3>
				</div>
				<div className="row align-center justify-sb">
					<div className="card-spec">
						<MdBed />
						<p>{property.general.beds} beds</p>
					</div>
					<div className="card-spec">
						<MdBathtub />
						<p>{property.general.baths} baths</p>
					</div>
					<div className="card-spec">
						<MdOpenInFull />
						<p>{formatNumber(property.general.sqft)} ft²</p>
					</div>
				</div>
			</div>
		</StyledPropertyCard>
	);
};

export default PropertyCard;
