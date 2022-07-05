import React, { useState, useEffect } from 'react';
import Filter from './Filter';
import { getAllData } from "../../firebaseFunctions.js";
import { useLocation } from "react-router-dom";

export default function FilterLogic(props) {
  const [toggle, setToggle] = useState(null);
  const location = useLocation();

  useEffect(() => {
    // If no toggles, wait for user to select a toggle
    if (toggle === null) props.setCurrent(null);
    else {
      // If toggle selected, download data for that toggle.
      getAllData(props.setData, props.data, props.setCurrent, props.setLoad, toggle)
    }
  }, [toggle]);

  useEffect(() => {
    let p = location.pathname;
    if (p.includes("/tags/")) {
      let split = p.split("/")
      setToggle(split[split.length - 1]);
    }
  }, [location]);

  return (
    <div className='filter-area'>
      <p>Click a button to find tips in that category. Click a tip to get more details.</p>
      <Filter toggle={toggle} setToggle={setToggle} />
    </div>
  )
}