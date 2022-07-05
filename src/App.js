import React, { useState } from "react";
import FilterLogic from "./components/functional/FilterLogic";
import GridView from "./components/grid/GridView";
import Navbar from "./components/Navbar";

function App() {
  const [ current, setCurrent ] = useState();
  const [ data, setData ] = useState({});
  const [load, setLoad] = useState(false);

  return (
    <div className="App">
      <Navbar />
      <FilterLogic data={data} setData={setData} setCurrent={setCurrent} setLoad={setLoad}/>
      {load ? <p className="loading">Loading...</p> : null}
      {current ? <GridView tips={current} /> : null}
    </div>
  );
}

export default App;

/* 
STUFF TO DO 
- Get react-router and setup pages
- Create footer
- Create sort / search functionality
- Add upvotes to cards
*/