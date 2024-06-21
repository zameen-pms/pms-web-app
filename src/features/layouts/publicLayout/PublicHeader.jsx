import { NavLink, useNavigate } from "react-router-dom";
import {
	StyledPublicHeader,
	StyledPublicLogo,
	StyledPublicNav,
} from "./PublicLayout.styled";
import Button from "../../ui/button/Button";
import { MdClose, MdMenu } from "react-icons/md";
import { useState } from "react";

const PublicHeader = () => {
	const navigate = useNavigate();
	const [navOpen, setNavOpen] = useState(false);

	const toggleNav = () => setNavOpen(!navOpen);

	const redirect = (to) => {
		setNavOpen(false);
		navigate(to);
	};

	return (
		<StyledPublicHeader>
			<StyledPublicLogo>
				<NavLink to="/">Zameen Management</NavLink>
			</StyledPublicLogo>
			<StyledPublicNav $open={navOpen}>
				<MdClose onClick={toggleNav} />
				<p onClick={() => redirect("/properties")}>Properties</p>
				<Button onClick={() => redirect("/tenants")}>
					Tenant Portal
				</Button>
			</StyledPublicNav>
			<MdMenu onClick={toggleNav} className="menu-icon" />
		</StyledPublicHeader>
	);
};

export default PublicHeader;
