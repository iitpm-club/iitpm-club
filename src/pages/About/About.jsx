import React, { useContext, useEffect } from "react";
import GlobalContext from "../../Context/GlobalContext";
import Dots from "../../images/Dots";
import teamwork from "../../images/teamwork.svg";
import Accordian from "../../Layout/Accordian/Accordian";
import faqs from "../../utils/FAQ";
import rules from "../../utils/rules";
import "./about.scss";

const About = () => {
	const { setHeaderStyle, breakpoint } = useContext(GlobalContext);
	useEffect(() => {
		setHeaderStyle({
			color: "var(--black)",
		});
	}, [setHeaderStyle]);
	return (
		<main className="home">
			<div
				style={{
					height: "var(--head-height)",
					minHeight: "var(--head-height)",
				}}
			></div>
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
to fostering a culture of innovation and excellence. Our objective is to provide a 
comprehensive platform for members to learn, collaborate, and grow in the dynamic field of product management.
Through engaging workshops, insightful seminars, and hands-on projects, we aim to equip our members with the
essential skills and knowledge to excel. Join us to connect with industry professionals, gain valuable experience,
and embark on a journey to become leaders in product management
					</p>
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
			<section className="home-about">
				<Dots className="home-about-topimg" />
				<div className="home-about-head" data-aos="fade-right">
					<h1>
						Events
						<Dots fill="#A1BDE0" className="home-about-head-dots" />
					</h1>
				</div>
				<div className="home-about-content">
					<p>
						Product management always organizes many events in different areas.
						Some of the events are given below:
					</p>
					<ul className="home-about-content-ul">
						<li>Workshops</li>
						<li>Career guidance sessions</li>
						<li>Resume reviews</li>
						<li>Coding Events</li>
						<li>Hackathons</li>
					</ul>
				</div>
			</section>
			<section className="home-about">
				<Dots className="home-about-topimg" />
				<div className="home-about-head" data-aos="fade-left">
					<h1>
						Workshops
						<Dots fill="#A1BDE0" className="home-about-head-dots" />
					</h1>
				</div>
				<div className="home-about-content">
					<p>
						We regularly organize workshops over different stacks
						that will be helpful in your entire college life, that
						will cover tech, non-tech and professional events.
					</p>
					<ul className="home-about-content-ul">
						<li>Web Development</li>
						<li>Android Development</li>
						<li>Flutter Development</li>
						<li>React</li>
						<li>Resume Building</li>
						<li>Git and Github</li>
					</ul>
				</div>
			</section>
			<section className="home-about">
				<Dots className="home-about-topimg" />
				<div className="home-about-head" data-aos="fade-right">
					<h1>
						Team Work
						<Dots fill="#A1BDE0" className="home-about-head-dots" />
					</h1>
				</div>
				<div className="home-about-content">
					<p>
						Product management club is all about learning and working as a team. We
						provide equal opportunity while working in a team and it
						is a great experience for everyone.
					</p>
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
			<li><strong>Community Engagement:</strong> Be part of a vibrant community <br/> of like-minded individuals passionate about product <br/>management.</li>

					</ul>
					{!(breakpoint("mobile") || breakpoint("tab")) && (
						<img
							src={teamwork}
							data-aos="zoom-in"
							alt="Team Work"
							className="home-about-content-joinimg"
						/>
					)}
				</div>
			</section>
			
			
		</main>
	);
};

export default About;
