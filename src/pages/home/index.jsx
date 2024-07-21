import { Helmet } from "react-helmet-async";
import { URL } from "../../constants";
import { Navigate } from "react-router-dom";

const HomePage = () => {
	return (
		<>
			<Helmet>
				<title>Zameen Management</title>
				<meta
					name="description"
					content="Your one-stop-shop for property management in Southwest Missouri."
				/>
				<meta property="og:title" content="Zameen Management" />
				<meta
					property="og:description"
					content="Your one-stop-shop for property management in Southwest Missouri."
				/>
				<meta property="og:url" content={`${URL}`} />
			</Helmet>

			<Navigate to="/services" />
		</>
	);
};

export default HomePage;
