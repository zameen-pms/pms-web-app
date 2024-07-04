import { Helmet } from "react-helmet-async";
import PropertiesCard from "../../features/properties/PropertiesCard";
import { URL } from "../../constants";

const Properties = () => {
	return (
		<>
			<Helmet>
				<title>Properties - Zameen Management</title>
				<meta
					name="description"
					content="View properties available for rent."
				/>
				<meta
					property="og:title"
					content="Properties - Zameen Management"
				/>
				<meta
					property="og:description"
					content="View properties available for rent."
				/>
				<meta property="og:url" content={`${URL}/properties`} />
			</Helmet>
			<section className="padding column gap-1">
				<h2>Properties for Rent</h2>
				<PropertiesCard />
			</section>
		</>
	);
};

export default Properties;
