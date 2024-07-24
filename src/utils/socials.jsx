import React from "react";
import { GitHub, Instagram, Linkedin, Mail } from "react-feather";

const socials = [
	{
		link: "https://www.instagram.com/pm_club_iit/",
		icon: <Instagram />,
		text: "Instagram",
		username: "pm_club_iit",
		linkText: "instagram",
	},
	{
		link: "https://www.linkedin.com/company/iit-product-management-club/",
		icon: <Linkedin />,
		text: "LinkedIn",
		username: "pm_club_iit",
		linkText: "linkedin",
	},
	{
		link: "https://github.com/iitpm-club",
		icon: <GitHub />,
		text: "GitHub",
		username: "pm_club_iit",
		linkText: "github",
	},
	{
		link: "mailto:sdas31@hawk.iit.edu",
		icon: <Mail />,
		text: "Email",
		username: "sdas31@hawk.iit.edu",
		linkText: "IIT Email",
	},
];

export default socials;
