import React, { useState } from "react";
import { getIcon, getLink } from "../../utils";
import userFallback from "../../images/user.svg";
import "./card.scss";
const Card = ({ image, name, title, socials }) => {
	const [userImage, setUserImage] = useState(image);

	return (
		<div className="card">
			<img
				className="profile-img"
				src={userImage}
				onError={() => setUserImage(userFallback)}
				alt={name}
				loading="lazy"
			/>
			<div className="text-content">
				<p className="name">{name}</p>
				<p className="post">{title}</p>
			</div>
			<div className="social-icons">
				{socials?.map(
					(social, id) =>
						social.username && (
							<a
								href={getLink(social.service, social.username)}
								title={`${social.service}/${social.username}`}
								key={id}
								target="_blank"
								rel="noreferrer"
							>
								{getIcon(social.service)}
							</a>
						)
				)}
			</div>
		</div>
	);
};

export default Card;
