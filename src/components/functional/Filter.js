import React from 'react';

const btnClass = "btn btn-inverse";

export default function Filter({ toggle, setToggle }) {
  const toggleFilter = (e) => {
    const newToggle = e.target.id;

    // Disable toggle
    if (toggle && newToggle === toggle) {
      setToggle(null); toggleStyles('');
    } else {
      setToggle(newToggle); toggleStyles(newToggle);
    }
  };

  return (
    <div id="filter-toggle-group" className='filter'>
      <button className={btnClass} onClick={toggleFilter} id="Relationships">Relationships</button>
      <button className={btnClass} onClick={toggleFilter} id="Work">Work</button>
      <button className={btnClass} onClick={toggleFilter} id="Problem-Solving">Problem-Solving</button>
      <button className={btnClass} onClick={toggleFilter} id="Health">Health</button>
      <button className={btnClass} onClick={toggleFilter} id="Reflections">Reflections</button>
    </div>
  )
}

function toggleStyles(id) {
  const group = document.getElementById('filter-toggle-group');

  for (let el of group.children) {
    if (el.id === id) el.className += ' active';
    else el.className = btnClass;
  }
}