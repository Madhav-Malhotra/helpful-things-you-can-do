import React, { useState } from "react";
import { data } from "./processedData.js";
import Card from "./components/Card.js";
import './App.css';

function App() {
  const [num, setNum] = useState(0);

  const handleNewTip = (i) => {
    let index = num+i;
    if (index >= data.length) index = 0;
    if (index < 0) index = data.length - 1;
    setNum(index);
  };

  return (
    <div className="App">
      <img className="arrow" onClick={() => handleNewTip(-1)} src="./leftArrow.png" />
      <Card {...data[num]} />
      <img className="arrow" onClick={() => handleNewTip(1)} src="./rightArrow.png" />
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