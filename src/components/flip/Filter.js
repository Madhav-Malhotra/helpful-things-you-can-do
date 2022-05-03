import React, { useState } from 'react'

export default function Filter(props) {
  const [toggle, setToggle] = useState(null);

  const toggleFilter = (e) => {
    const newToggle = e.target.id;

    // Disable toggle
    if (toggle && newToggle === toggle) {
      setToggle(null);
      props.setTips(props.data);
      toggleStyles('');
    }
    else {
      setToggle(newToggle); toggleStyles(newToggle);

      let selectedCards = [];
      // Change selected cards
      for (let tip of props.data) {
        if (tip.Tags.includes(newToggle)) {
          selectedCards.push(tip);
        }
      }
      props.setTips(selectedCards);
    }
  };

  return (
    <div id="filter-toggle-group" className='filter'>
      <button onClick={toggleFilter} id="Relationships">Relationships</button>
      <button onClick={toggleFilter} id="Work">Work</button>
      <button onClick={toggleFilter} id="Problem-Solving">Problem-Solving</button>
      <button onClick={toggleFilter} id="Health">Health</button>
      <button onClick={toggleFilter} id="Reflections">Reflections</button>
    </div>
  )
}

function toggleStyles(id) {
  const group = document.getElementById('filter-toggle-group');

  for (let el of group.children) {
    if (el.id === id) el.className = 'active';
    else el.className = '';
  }
}