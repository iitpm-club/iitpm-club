import React, { useContext, useEffect } from "react";
import Button from "../../components/Button/Button";
import man from "../../images/man.svg";
import teamwork from "../../images/teamwork.svg";
import socials from "../../utils/socials";
import "./home.scss";
import Dots from "../../images/Dots";
import { ArrowRight } from "react-feather";
import Row, { Col } from "../../Layout/Responsive";
import Card from "../../components/Card/Card";
import GlobalContext from "../../Context/GlobalContext";
import { office } from "../../utils/team";
import progothon from "../../images/progothon-intro-bg.jpg";
import progothonIcon from "../../images/progothon-icon.png";
import MaterialIcons from "../../components/MaterialIcons";

const Home = () => {
	const { setHeaderStyle, breakpoint } = useContext(GlobalContext);
	useEffect(() => {
		setHeaderStyle({ color: "var(--white)" });
	}, [setHeaderStyle]);

	let team = [...office];

	return (
		<main className="home">
			<section className="home-hero">
				<div
					className="home-hero-image"
					style={{ backgroundImage: `url(${man})` }}
				></div>
				<div className="home-hero-content">
					<span
						className="home-hero-content__h1"
						data-aos="fade-right"
					>
						Product Management Club
					</span>
					<span
						className="home-hero-content__h2"
						data-aos="fade-right"
					>
						Empowering Leaders, Building Futures
					</span>
					<span
						className="home-hero-content__buttons"
						data-aos="zoom-in"
					>
						<Button
							text="Know More"
							color="light-blue"
							link="/about"
						/>
						<Button
							text="Contact Us"
							color="light-blue"
							variant="outline"
							link="/contact"
						/>
					</span>
					<div
						className="home-hero-content-socials"
						data-aos="fade-up"
					>
						{socials.map((social, id) => (
							<a
								href={social.link}
								title={social.text + "/" + social.username}
								target="_blank"
								rel="noreferrer"
								key={id}
							>
								{social.icon}
							</a>
						))}
					</div>
				</div>
				<button
					className="home-hero-scroll-btn"
					onClick={() => {
						window.scrollTo(0, 2 * window.innerHeight);
					}}
				>
					<MaterialIcons>expand_more</MaterialIcons>
				</button>
			</section>
			<section className="home-about">
				<Dots className="home-about-topimg" />
				<div className="home-about-head" data-aos="fade-right">
					<h1>
						Who we are?
						<Dots fill="#A1BDE0" className="home-about-head-dots" />
					</h1>
				</div>
				<div className="home-about-content">

					<p>
					Welcome to the Product Management Club at Illinois Institute of Technology!
We are a dedicated community of aspiring product managers and enthusiasts, committed
to fostering a culture of innovation and excellence. <br /> <br />
Our objective is to provide a 
comprehensive platform for members to learn, collaborate, and grow in the dynamic field of product management.
Through engaging workshops, insightful seminars, and hands-on projects, we aim to equip our members with the
essential skills and knowledge to excel. Join us to connect with industry professionals, gain valuable experience,
and embark on a journey to become leaders in product management
					</p>
				</div>
			</section>
			<section
				className="home-progothon"
				style={{
					backgroundImage: `url(${progothon})`,
				}}
			>
				<div
					className="home-about-head home-progothon-head"
					data-aos="fade-right"
				>
					<h1 style={{ color: "var(--indigo-100)" }}>Prog-o-Thon</h1>
					{!breakpoint("mobile") && (
						<Button
							variant="outline"
							text={
								<>
									Visit Page <ArrowRight />
								</>
							}
							link="/event/progothon"
							color="light-blue"
						/>
					)}
				</div>
				<div className="home-progothon-body">
					<div className="home-progothon-body-container">
						<div
							className="home-progothon-body-left"
							style={{ backgroundImage: `url(${progothonIcon})` }}
						></div>
						<div className="home-progothon-body-right">
							<h2>Experience</h2>
							<h2>Open Source</h2>
							<span>For the Students, By the students</span>
							<Button
								text="Visit the Website"
								icon="chevron_right"
								variant="outline"
								link="/event/progothon"
								color="light-blue"
							/>
						</div>
					</div>
				</div>
			</section>
			<section className="home-about">
				<Dots className="home-about-topimg" />
				<div className="home-about-head" data-aos="fade-left">
					<h1>
						What we do?
						<Dots fill="#A1BDE0" className="home-about-head-dots" />
					</h1>
				</div>
				<div className="home-about-content">

					<p>
					At the Product Management Club at Illinois Institute of Technology, we focus on empowering our members through 
					practical learning and professional development. We organize a variety of activities including interactive workshops, 
					expert-led seminars, and real-world projects to enhance your product management skills. Our hands-on approach ensures 
					that you gain valuable experience in prioritization, strategy, and execution. We also provide exclusive networking 
					opportunities and mentorship programs to help you connect with industry leaders and navigate your career path 
					effectively. Join us to develop your expertise and make a meaningful impact in the field of product management.
					</p>
				</div>
			</section>
			<section className="home-team">
				<div
					className="home-about-head home-team-head"
					data-aos="fade-right"
				>
					<h1 style={{ color: "var(--indigo-100)" }}>Our Team</h1>
					<Button
						variant="outline"
						text={
							<>
								View All <ArrowRight />
							</>
						}
						link="/team"
						color="light-blue"
					/>
				</div>
				<div className="home-team-body">
					<Row>
						{team.map((person, id) => (
							<Col lg={33} md={50} sm={100} key={id}>
								<Card {...person} />
							</Col>
						))}
					</Row>
				</div>
			</section>
			<section className="home-about">
				<Dots className="home-about-topimg" />
				<div className="home-about-head" data-aos="fade-right">
					<h1>
						Why should you join us?
						<Dots fill="#A1BDE0" className="home-about-head-dots" />
					</h1>
				</div>
				<div className="home-about-content">
					<ul className="home-about-content-ul">
			<li><strong>Hands-On Experience:</strong> Gain practical knowledge through real-world projects and interactive workshops.</li>
			<br />
			<li ><strong>Industry Insights:</strong> Learn from experts and stay updated on the latest trends and techniques in product management.</li>
			<br />
			<li><strong>Networking Opportunities:</strong> Connect with industry leaders.</li>
			<br />
			<li><strong>Mentorship Programs:</strong> Receive guidance and support.</li>
			<br />
			<li><strong>Career Advancement:</strong> Enhance your skills and portfolio.</li>
			<br />
			<li><strong>Community Engagement:</strong> Be part of a vibrant community of like-minded individuals passionate about product management.</li>

					</ul>
					{!(breakpoint("mobile") || breakpoint("tab")) && (
						<img
							src={teamwork}
							alt="Team Work"
							className="home-about-content-joinimg"
						/>
					)}
				</div>
			</section>
		</main>
	);
};

export default Home;
