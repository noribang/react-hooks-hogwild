import React, { useState, useEffect } from "react";
import Nav from "./Nav";
import CardContainer from "./CardContainer/CardContainer";

import hogs from "../porkers_data";
console.log(hogs)

function App() {
	/* STATE HOGDATA */
	const [hogData, setHogData] = useState(hogs);

	const [] = useState();

	return (
		<div className="App">
			<Nav />
			<CardContainer hogData={hogData} />
		</div>
	);
}

export default App;
