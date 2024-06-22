import { useNavigate, useParams } from "react-router-dom";
import PropertyGallery from "../../features/properties/PropertyGallery";
import { useEffect, useState } from "react";
import getPropertyById from "../../features/api/properties/getPropertyById";
import Loader from "../../features/ui/loader/Loader";

const Property = () => {
	const { propertyId } = useParams();
	const [property, setProperty] = useState(null);
	const navigate = useNavigate();

	const fetchProperty = async () => {
		try {
			const { data } = await getPropertyById(propertyId);
			setProperty(data);
		} catch (err) {
			alert("Unable to fetch property. Redirecting...");
			navigate("/properties");
		}
	};

	useEffect(() => {
		fetchProperty();
	}, []);

	if (!property) {
		return (
			<section className="padding">
				<Loader />
			</section>
		);
	}

	return (
		<section className="padding">
			{property?.images?.length > 0 && (
				<PropertyGallery images={property.images} />
			)}
		</section>
	);
};

export default Property;
