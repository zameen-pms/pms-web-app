import { Helmet } from "react-helmet-async";
import HomeHero from "../../features/home/HomeHero";
import { URL } from "../../constants";
import HomeServices from "../../features/home/HomeServices";
import { useRef } from "react";
import HomeForm from "../../features/home/HomeForm";

const HomePage = () => {
	const formRef = useRef();

	const handleClick = () => {
		formRef.current.scrollIntoView({ behavior: "smooth" });
	};

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
			<HomeHero onClick={handleClick} />
			<HomeServices />
			<HomeForm ref={formRef} />
		</>
	);
};

export default HomePage;
