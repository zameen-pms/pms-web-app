import { useEffect, useState } from "react";
import Loader from "../ui/loader/Loader";
import getProperties from "../api/properties/getProperties";
import { StyledPropertiesCard } from "./Properties.styled";
import PropertyCard from "./PropertyCard";

const PropertiesCard = () => {
	const [properties, setProperties] = useState(null);

	const fetchProperties = async () => {
		try {
			const { data } = await getProperties();

			const availableProperties = data.filter(
				(property) => property.availability === "Available"
			);
			const occupiedProperties = data.filter(
				(property) => property.availability === "Occupied"
			);

			setProperties([...availableProperties, ...occupiedProperties]);
		} catch (err) {
			alert("Unable to fetch properties.");
		}
	};

	useEffect(() => {
		fetchProperties();
	}, []);

	if (!properties) return <Loader />;

	return (
		<StyledPropertiesCard>
			{properties.map((property) => (
				<PropertyCard key={property._id} property={property} />
			))}
		</StyledPropertiesCard>
	);
};

export default PropertiesCard;
