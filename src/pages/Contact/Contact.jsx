import React, { useContext, useEffect, useState } from "react";
import Button from "../../components/Button/Button";
import GlobalContext from "../../Context/GlobalContext";
import socials from "../../utils/socials";
import contactBanner from "../../images/contact.svg";
import emailjs from "emailjs-com";
import "./contact.scss";

const Contact = () => {
	const { setHeaderStyle } = useContext(GlobalContext);
	useEffect(() => {
		setHeaderStyle({
			color: "var(--white)",
		});
	}, [setHeaderStyle]);

	const [user, setUser] = useState({
		name: "",
		email: "",
		message: "",
	});
	const handleChange = (e) => {
		const { name, value } = e.target;
		setUser((p) => ({ ...p, [name]: value }));
	};
	const handleSubmit = (e) => {
		e?.preventDefault();
		emailjs
			.sendForm(
				process.env.REACT_APP_SERVICE,
				process.env.REACT_APP_TEMPLATE,
				e.target,
				process.env.REACT_APP_USER
			)
			.then((res) => console.log(res))
			.catch((err) => console.log(err));
		setUser({
			name: "",
			email: "",
			message: "",
		});
	};
	return (
		<main className="contact">
			<section className="contact-container" data-aos="zoom-in">
				<div className="contact-left">
					<h1>Get In Touch</h1>
					<form className="contact-form" onSubmit={handleSubmit}>
						<input
							type="text"
							placeholder="Type your full name"
							required
							name="name"
							value={user.name}
							onChange={handleChange}
						/>
						<input
							type="email"
							placeholder="Email Address"
							required
							name="email"
							value={user.email}
							onChange={handleChange}
						/>
						<textarea
							type="text"
							placeholder="Type your message here"
							required
							rows={5}
							name="message"
							value={user.message}
							onChange={handleChange}
						></textarea>
						<Button
							type="submit"
							text="Send Message"
							variant="outline"
							color="black"
						/>
					</form>
				</div>
				<div className="contact-right">
					<div
						className="contact-right-top"
						style={{ backgroundImage: `url(${contactBanner})` }}
					></div>
					<div className="contact-right-bottom">
						{socials.map((social, id) => (
							<a
								href={social.link}
								title={social.text + "/"}
								className="contact-social"
								key={id}
							>
								<div>{social.icon}</div>
								<span>{social.username}</span>
							</a>
						))}
					</div>
				</div>
			</section>
		</main>
	);
};

export default Contact;
