import React, { useState, useEffect } from "react";
import Nav from "./Nav";
import CardContainer from "./CardContainer/CardContainer";

import hogs from "../porkers_data";
import NewPigForm from "./NewPigForm/NewPigForm";

function App() {
  const [showGreased, setShowGreased] = useState(false);
  const [sortBy, setSortBy] = useState("");
  const [hogData, setHogData] = useState(hogs)
  

  function handleSetShowGreased() {
    setShowGreased(!showGreased);
  }

  function handleSetSort(e) {
    setSortBy(e.target.textContent);
  }

  function handleFormSubmit(){

  }

  return (
    <div className="App">
      <Nav
        handleSetShowGreased={handleSetShowGreased}
        handleSetSort={handleSetSort}
      />
	  <NewPigForm handleFormSubmit={handleFormSubmit}/>
      <CardContainer showGreased={showGreased} hogData={hogData} sortBy={sortBy}/>
    </div>
  );
}

export default App;
