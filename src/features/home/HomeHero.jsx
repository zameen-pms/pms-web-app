import React from "react";
import { StyledHero } from "./Home.styled";
import Button from "../ui/button/Button";
import { useNavigate } from "react-router-dom";

const HomeHero = () => {
	const navigate = useNavigate();

	return (
		<StyledHero>
			<div className="hero-wrapper">
				<h1>Professional Property Management</h1>
				<p>Find your next home in Joplin, Missouri</p>
				<Button onClick={() => navigate("properties")} fill>
					View Available Properties
				</Button>
			</div>
		</StyledHero>
	);
};

export default HomeHero;
