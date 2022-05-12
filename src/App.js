import React, { useState, useEffect } from "react";
import FilterLogic from "./components/flip/FilterLogic";
import GridView from "./components/grid/GridView";
import Navbar from "./components/grid/Navbar";
import { getAllData } from "./firebaseInit.js";

function App() {
  const [ tips, setTips ] = useState();
  const [ data, setData ] = useState();
  
  useEffect(() => getAllData(setData), []); // Get permanent data first time
  useEffect(() => setTips(data), [data]); // If perm data changes, update local

  return (
    <div className="App">
      <Navbar />
      {data ? <FilterLogic data={data} setTips={setTips}/> : <p className="loading">Loading...</p>}
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