import React, {useEffect, useState} from "react";

const TrafficLight = () => {
	const [color, setColor] = useState("red")

	const colors = ["red", "yellow", "green"];

	useEffect(() => {
		const interval = setInterval(() => {
			const currentColor = colors.indexOf(color);
			const nextColor = (currentColor + 1) % colors.length;
			setColor(colors[nextColor])
		}, 3000);

		return () => clearInterval(interval);
	}, [color])

	return (
		<div className="container">
			<div className="pole"></div>
			<div className="structure">
				<div onClick={() => setColor("red")} className={"light red" + (color === "red" ? " glow-red" : "")}></div>
				<div onClick={() => setColor("yellow")} className={"light yellow" + (color === "yellow" ? " glow-yellow" : "")}></div>
				<div onClick={() => setColor("green")} className={"light green" + (color === "green" ? " glow-green" : "")}></div>
			</div>
			<div>
                <button className="btn btn-warning mt-3 ms-2">Add Purple</button>
            </div>
		</div>
	);
};

export default TrafficLight;
