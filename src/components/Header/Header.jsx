import React, { useContext } from "react";
import { Link } from "react-router-dom";
import GlobalContext from "../../Context/GlobalContext";
import favicon from "../../images/favicon.png";
import navLinks from "../../utils/navigation";
import "./header.scss";

const Header = () => {
	const { headerStyle, breakpoint } = useContext(GlobalContext);
	return (
		<header className="header" style={headerStyle}>
			<Link className="header-left" to="/">
				<div className="header-left-image">
					<img src={favicon} alt="FORCE-IIITU" />
				</div>
				<div className="header-left-content">
					<span className="header-left-content__name">Product Management</span>
					<span className="header-left-content__subtitle">
					Empowering Leaders, Building Futures
					</span>
				</div>
			</Link>
			{!(breakpoint("mobile") || breakpoint("tab")) && (
				<div className="header-right">
					<nav className="header-right-nav header-nav">
						<ul className="header-nav-ul">
							{navLinks.map((navLink, id) => (
								<li key={id}>
									<Link to={navLink.link}>
										{navLink.text}
									</Link>
								</li>
							))}
						</ul>
					</nav>
				</div>
			)}
		</header>
	);
};

export default Header;
