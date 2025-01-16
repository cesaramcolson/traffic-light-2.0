import React, {useEffect, useState} from "react";

const initialColors = ["red", "yellow", "green"];

const TrafficLight = () => {
	const [colors, setColors] = useState(initialColors);
	const [color, setColor] = useState("red")

	useEffect(() => {
		const interval = setInterval(() => {
			const currentColor = colors.indexOf(color);
			const nextColor = (currentColor + 1) % colors.length;
			setColor(colors[nextColor])
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
				{colors.map((c) => (
					<div
					key={c}
					onClick={() => setColor(c)}
					className={`light ${c} ${color === c ? `glow-${c}` : ""}`}
					>
					</div>
				))}
			</div>
			<div>
                <button className="btn btn-warning mt-3 ms-2" onClick={addPurple}>Add Purple</button>
            </div>
		</div>
	);
};

export default TrafficLight;
