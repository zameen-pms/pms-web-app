import { Helmet } from "react-helmet-async";
import HomeHero from "../../features/home/HomeHero";
import { URL } from "../../constants";

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
			<HomeHero />
		</>
	);
};

export default HomePage;
