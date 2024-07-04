import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import getPropertyById from "../../features/api/properties/getPropertyById";
import Loader from "../../features/ui/loader/Loader";
import PropertyInfo from "../../features/properties/PropertyInfo";
import { Helmet } from "react-helmet-async";
import { getAddress, getImageUrl } from "../../features/utils/utils";

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

	if (!property) return <Loader />;

	return (
		<>
			<Helmet>
				<title>{`${property.address.street} - Zameen Management`}</title>
				<meta
					name="description"
					content={`Property details for ${getAddress(
						property.address
					)}`}
				/>
				<meta
					property="og:title"
					content={`${property.address.street} - Zameen Management`}
				/>
				<meta
					property="og:description"
					content={`Property details for ${getAddress(
						property.address
					)}`}
				/>
				{property.images.length > 0 && (
					<meta
						property="og:image"
						content={`${getImageUrl(property.images[0].key)}`}
					/>
				)}
				<meta
					property="og:url"
					content={`${URL}/properties/${propertyId}`}
				/>
			</Helmet>
			<section className="padding">
				<PropertyInfo property={property} />
			</section>
		</>
	);
};

export default Property;
