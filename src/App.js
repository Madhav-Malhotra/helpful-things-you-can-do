import React, { useState } from "react";
import Filter from "./components/flip/Filter";
import GridView from "./components/grid/GridView";
import Navbar from "./components/grid/Navbar";
import { data } from "./processedData.js";

function App() {
  const [ tips, setTips ] = useState(data);

  return (
    <div className="App">
      <Navbar />
      <Filter data={data} setTips={setTips}/>
      <GridView tips={tips} />
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