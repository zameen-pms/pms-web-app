import React from "react";
import { StyledHero } from "./Home.styled";
import Button from "../ui/button/Button";

const HomeHero = () => {
	return (
		<StyledHero>
			<img className="handshake-img" src="/images/handshake.svg" />
			<img className="property-img" src="/images/property.svg" />
			<div className="content">
				<h1>
					<span className="underline">End-to-End</span> Property
					Management,
					<br />
					Stress-Free Ownership.
				</h1>
				<p>
					At Zameen Management, we handle{" "}
					<span className="bold underline">every</span> aspect of your
					property, from rent collection to maintenance, ensuring you
					enjoy <span className="bold underline">hassle-free</span>{" "}
					ownership and{" "}
					<span className="bold underline">optimized earnings</span>.
				</p>
				<Button fill style={{ margin: "0 auto" }}>
					Free Consultation
				</Button>
			</div>
		</StyledHero>
	);
};

export default HomeHero;
