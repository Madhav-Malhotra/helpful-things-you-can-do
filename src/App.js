import React, { useState } from "react";
import Filter from "./components/Filter";
import FlipView from "./components/FlipView.js";
import { data } from "./processedData.js";
import './App.css';

function App() {
  const [ tips, setTips ] = useState(data);

  return (
    <div className="App">
      <Filter data={data} setTips={setTips}/>
      <FlipView data={tips}/>
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