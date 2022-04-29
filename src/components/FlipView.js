import React, { useState } from "react";
import Card from "./Card.js";

export default function FlipView(props) {
  const [num, setNum] = useState(0);
  const { data } = props;

  const handleNewTip = (i) => {
    let index = num+i;
    if (index >= data.length) index = 0;
    if (index < 0) index = data.length - 1;
    setNum(index);
  };

  return (
    <div className="Flip">
      <img className="arrow" onClick={() => handleNewTip(-1)} src="./leftArrow.png" />
      <Card {...data[num]} />
      <img className="arrow" onClick={() => handleNewTip(1)} src="./rightArrow.png" />
    </div>
  )
}
