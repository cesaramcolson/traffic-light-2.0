import React from "react";

const TrafficLight = () => {
	return (
		<div className="container">
			<div className="pole"></div>
			<div className="structure">
				<div className="light red"></div>
				<div className="light yellow"></div>
				<div className="light green"></div>
			</div>
		</div>
	);
};

export default TrafficLight;
