import { useParams } from "react-router-dom";

const Property = () => {
	const { propertyId } = useParams();
	return <div>{propertyId}</div>;
};

export default Property;
