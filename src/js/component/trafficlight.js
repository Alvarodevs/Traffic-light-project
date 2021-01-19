import React, { useState } from "react";

export function Trafficlight() {
	const [light, setLight] = useState("");
	//console.log(light);

	var redLightSelection = "";
	if (light == "red") redLightSelection = "selected";

	var orangeLightSelection = "";
	if (light == "orange") orangeLightSelection = "selected";

	var greenLightSelection = "";
	if (light == "green") greenLightSelection = "selected";

	return (
		<div className="maincontainer container">
			<div
				className={"red circle " + redLightSelection}
				onClick={() => setLight("red")}
			/>
			<div
				className={"orange circle " + orangeLightSelection}
				onClick={() => setLight("orange")}
			/>
			<div
				className={"green circle " + greenLightSelection}
				onClick={() => setLight("green")}
			/>
		</div>
	);
}
