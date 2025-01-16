import React, {useEffect, useState} from "react";

const initialColors = ["red", "yellow", "green"];

const TrafficLight = () => {
	const [colors, setColors] = useState(initialColors);
	const [color, setColor] = useState("red")

	useEffect(() => {
		const interval = setInterval(() => {
			const currentColor = initialColors.indexOf(color);
			const nextColor = (currentColor + 1) % initialColors.length;
			setColor(initialColors[nextColor])
		}, 3000);

		return () => clearInterval(interval);
	}, [color, colors])

	const addPurple = () => {
		if (!colors.includes("purple")) {
			setColors ([...colors, "purple"]);
		}
	};

	return (
		<div className="container">
			<div className="pole"></div>
			<div className="structure">
				<div onClick={() => setColor("red")} className={"light red" + (color === "red" ? " glow-red" : "")}></div>
				<div onClick={() => setColor("yellow")} className={"light yellow" + (color === "yellow" ? " glow-yellow" : "")}></div>
				<div onClick={() => setColor("green")} className={"light green" + (color === "green" ? " glow-green" : "")}></div>
				{colors.includes("purple") && (
					<div onClick={() => setColor("purple")} className={"light purple" + (color === "purple" ? " glow-purple" : "")}></div>
				)}
			</div>
			<div>
                <button className="btn btn-warning mt-3 ms-2" onClick={addPurple}>Add Purple</button>
            </div>
		</div>
	);
};

export default TrafficLight;
