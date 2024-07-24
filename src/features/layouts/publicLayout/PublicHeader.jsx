import { Link, useNavigate } from "react-router-dom";
import { StyledPublicHeader } from "./PublicLayout.styled";
import { MdArrowForwardIos, MdClose, MdMenu } from "react-icons/md";
import { useState } from "react";

const navItems = [
	{
		name: "Properties",
		to: "/properties",
	},
];

const PublicHeader = () => {
	const navigate = useNavigate();
	const [isNavOpen, setIsNavOpen] = useState(false);

	const handleNavigate = (to) => {
		setIsNavOpen(false);
		navigate(to);
	};

	return (
		<StyledPublicHeader $open={isNavOpen}>
			<Link to="/" className="logo">
				<img src="/images/web-logo.svg" alt="Zameen Management LLC" />
			</Link>
			<nav>
				<div className="menu-close">
					<MdClose
						className="menu-icon"
						onClick={() => setIsNavOpen(false)}
					/>
				</div>
				{navItems.map((navItem, index) => (
					<p key={index} onClick={() => handleNavigate(navItem.to)}>
						{navItem.name}
						<MdArrowForwardIos />
					</p>
				))}
				<button
					onClick={() => handleNavigate("/services")}
					className="header-button"
				>
					Work With Us
				</button>
			</nav>
			<MdMenu className="menu-icon" onClick={() => setIsNavOpen(true)} />
		</StyledPublicHeader>
	);
};

export default PublicHeader;
