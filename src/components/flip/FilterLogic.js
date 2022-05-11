import React, { useState, useEffect } from 'react';
import Filter from './Filter';

export default function FilterLogic(props) {
  const [toggle, setToggle] = useState(null);

  useEffect(() => {
    // If no toggles show all
    if (toggle === null) props.setTips(props.data);
    else { 
      let selectedCards = [];
      // Change selected tips
      for (let tip of props.data) {
        if (tip.Tags.includes(toggle)) {
          selectedCards.push(tip);
        }
      }
      props.setTips(selectedCards);
    }
  }, [toggle, props.setTips]);

  return (
    <Filter toggle={toggle} setToggle={setToggle} />
  )
}
