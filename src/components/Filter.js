import React from 'react'

export default function Filter(props) {
  const toggled = {Relationships: false, Work: false, "Problem-Solving": false, Health: false, Reflections: false};

  const toggleFilter = (e) => {
    // Flip local toggle
    let selectedCards = []; let activeToggles = []; const button = e.target.id;
    toggled[button] = !toggled[button];
    for (let key in toggled) {
      if (toggled[key]) activeToggles.push(key);
    }

    // If no toggles
    if (activeToggles.length === 0) {
      props.setTips(props.data);
      return;
    }

    // Change selected cards
    for (let tip of props.data) {
      for (let toggle of activeToggles) {
        if (tip.Tags.includes(toggle)) {
          selectedCards.push(tip);
        }
      }
    }
    props.setTips(selectedCards);
  };

  return (
    <div className='filter'>
      <button onClick={toggleFilter} id="Relationships">Relationships</button>
      <button onClick={toggleFilter} id="Work">Work</button>
      <button onClick={toggleFilter} id="Problem-Solving">Problem-Solving</button>
      <button onClick={toggleFilter} id="Health">Health</button>
      <button onClick={toggleFilter} id="Reflections">Reflections</button>
    </div>
  )
}
