import React, { useState } from "react";
import { data } from "./processedData.js";
import Card from "./components/Card.js";
import './App.css';

function App() {
  const [num, setNum] = useState(0);

  const handleNewTip = () => setNum(num+1);

  return (
    <div className="App">
      <Card {...data[num]} />
      <button onClick={handleNewTip}>New Tip</button>
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