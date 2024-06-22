import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import getPropertyById from "../../features/api/properties/getPropertyById";
import Loader from "../../features/ui/loader/Loader";
import PropertyInfo from "../../features/properties/PropertyInfo";

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

	return (
		<section className="padding">
			{property ? <PropertyInfo property={property} /> : <Loader />}
		</section>
	);
};

export default Property;
