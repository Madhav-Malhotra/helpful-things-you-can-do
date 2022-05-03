import React, { useState } from "react";
import Card from "./Card.js";

export default function FlipView(props) {
  const [num, setNum] = useState(0);
  const { data } = props;
  const id = `Tip ${num+1} / ${data.length}`;

  const handleNewTip = (i) => {
    let index = num+i;
    if (index >= data.length) index = 0;
    if (index < 0) index = data.length - 1;
    setNum(index);
  };

  return (
    <div className="Flip row">
      <img className="arrow" onClick={() => handleNewTip(-1)} src="./leftArrow.png" alt="Previous tip"/>
      <Card {...data[num]} id={id}/>
      <img className="arrow" onClick={() => handleNewTip(1)} src="./rightArrow.png" alt="Next tip"/>
    </div>
  )
}
