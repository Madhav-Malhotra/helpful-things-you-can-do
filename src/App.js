import React, { useState, useEffect } from "react";
import FilterLogic from "./components/flip/FilterLogic";
import GridView from "./components/grid/GridView";
import Navbar from "./components/grid/Navbar";
import { getAllData } from "./firebaseInit.js";

function App() {
  const [ tips, setTips ] = useState();
  const data = getAllData(setTips);

  return (
    <div className="App">
      <Navbar />
      <FilterLogic data={data} setTips={setTips}/>
      {tips ? <GridView tips={tips} /> : null}
    </div>
  );
}

export default App;

/* 
STUFF TO DO 
- Get frameworks data
- Get react-router and setup pages
- Create navbar
- Create footer
- Create card
- Create grid
- Create sort / search functionality
- Add upvotes to cards
*/