import { useRef } from "react";
import { Helmet } from "react-helmet-async";
import HomeHero from "../../features/home/HomeHero";
import HomeServices from "../../features/home/HomeServices";
import HomeForm from "../../features/home/HomeForm";

const ServicesHome = () => {
	const formRef = useRef();

	const handleClick = () => {
		formRef.current.scrollIntoView({ behavior: "smooth" });
	};

	return (
		<>
			<Helmet>
				<title>Zameen Management | Services</title>
				<meta
					name="description"
					content="We provide end-to-end property management with an investor-first mindset."
				/>
				<meta
					property="og:title"
					content="Zameen Management | Services"
				/>
				<meta
					property="og:description"
					content="We provide end-to-end property management with an investor-first mindset."
				/>
				<meta property="og:url" content={`${URL}/services`} />
			</Helmet>

			<HomeHero onClick={handleClick} />
			<HomeServices />
			<HomeForm ref={formRef} />
		</>
	);
};

export default ServicesHome;
