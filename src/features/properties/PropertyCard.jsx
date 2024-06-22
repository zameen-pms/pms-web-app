import { useEffect, useState } from "react";
import { StyledCardPill, StyledPropertyCard } from "./Properties.styled";
import { MdBathtub, MdBed, MdHouse, MdStraighten } from "react-icons/md";
import { formatNumber, getAddress } from "../utils/utils";
import { useNavigate } from "react-router-dom";
import { URL } from "../../constants";

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

	return (
		<StyledPropertyCard
			onClick={() => navigate(`/properties/${property._id}`)}
		>
			<div className="card-image">
				{property?.images?.length > 0 ? (
					<img src={`${URL}/assets/url/${property.images[0]}`} />
				) : (
					<MdHouse />
				)}
				<StyledCardPill $color={color}>
					{property.availability}
				</StyledCardPill>
			</div>
			<div className="card-body">
				<div className="column gap-1">
					<div className="card-body-header">
						<p className="light">{getAddress(property.address)}</p>
						<p className="bold nowrap">
							Rent: ${formatNumber(property.general.rent)}
						</p>
					</div>
				</div>
				<div className="row align-center gap-05">
					<div className="card-icon">
						<MdBed />
						<p>{property.general.beds}</p>
					</div>
					<div className="card-icon">
						<MdBathtub />
						<p>{property.general.baths}</p>
					</div>
					<div className="card-icon">
						<MdStraighten />
						<p>{formatNumber(property.general.sqft)} ft²</p>
					</div>
				</div>
			</div>
		</StyledPropertyCard>
	);
};

export default PropertyCard;
