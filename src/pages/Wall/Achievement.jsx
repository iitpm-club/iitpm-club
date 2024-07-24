import React from "react";
import "./wall.scss";

function Achievement({ title, image, participants }) {
	return (
		<div className="mainContainer">
			<div className="thecard">
				{/* front */}
				<div className="front">
					<img src={image} alt={title} />
					<h1>{title}</h1>

					<p> Click/Hover to Reveal the Winners List!</p>
				</div>

				{/* back */}
				<div className="back">
					{/* row */}
					{participants.map((person, id) => (
						<div className="row" key={id}>
							<p className="name">{person}</p>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}

export default Achievement;
