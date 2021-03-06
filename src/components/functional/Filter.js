import React from 'react';
import { useNavigate } from "react-router-dom";

const btnClass = "btn btn-inverse";

export default function Filter({ toggle, setToggle }) {
  const nav = useNavigate();

  const group = document.getElementById('filter-toggle-group');
  if (group) {
    if (toggle === null && group) toggleStyles('', group); 
    else toggleStyles(toggle, group);
  }

  const toggleFilter = (e) => {
    const newToggle = e.target.id;

    // Disable toggle
    if (toggle && newToggle === toggle) {
      setToggle(null); nav("/");
    } else {
      setToggle(newToggle); nav(`/tags/${newToggle}`);
    }    
  };

  return (
    <div id="filter-toggle-group" className='filter-toggle-group'>
      <button className={btnClass} onClick={toggleFilter} id="Relationships">Relationships</button>
      <button className={btnClass} onClick={toggleFilter} id="Productivity">Productivity</button>
      <button className={btnClass} onClick={toggleFilter} id="Problem-Solving">Problem-Solving</button>
      <button className={btnClass} onClick={toggleFilter} id="Health">Health</button>
      <button className={btnClass} onClick={toggleFilter} id="Reflections">Reflections</button>
    </div>
  )
}

function toggleStyles(id, group) {
  for (let el of group.children) {
    if (el.id === id) el.className += ' active';
    else el.className = btnClass;
  }
}