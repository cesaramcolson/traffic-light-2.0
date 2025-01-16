import React, {useState} from "react";

const TrafficLight = () => {
	const [color, setColor] = useState("red")

	return (
		<div className="container">
			<div className="pole"></div>
			<div className="structure">
				<div onClick={() => setColor("red")} className={"light red" + (color === "red" ? " glow-red" : "")}></div>
				<div onClick={() => setColor("yellow")} className={"light yellow" + (color === "yellow" ? " glow-yellow" : "")}></div>
				<div onClick={() => setColor("green")} className={"light green" + (color === "green" ? " glow-green" : "")}></div>
			</div>
		</div>
	);
};

export default TrafficLight;
