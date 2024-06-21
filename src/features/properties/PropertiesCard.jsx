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
			setProperties(
				data.filter(
					(property) => property.availability !== "Unavailable"
				)
			);
		} catch (err) {
			alert("Unable to fetch properties.");
			console.log(err.message);
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
