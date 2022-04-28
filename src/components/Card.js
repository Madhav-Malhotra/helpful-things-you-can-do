import React, { useEffect, useState } from 'react';
import CardBody from './CardBody';
import ExtraInfo from './ExtraInfo';

export default function Card(props) {
  const [showDetail, setShowDetail] = useState(false);
  const {Name, Description, Tags, ReviewNumber, Rating, RelatedLinks, Example, Detailed} = props;
  const info = {Name, Description, Tags, ReviewNumber, Rating, showDetail, Detailed};

  const toggle = () => setShowDetail(d => !d);
  useEffect(toggle, [props.Detailed]);

  return (
    <div className='info-holder'>
      <div className='Card'>
        <CardBody {...info}/>
        <button onClick={toggle}>{showDetail ? "Hide Details" : "Show Details"}</button>
      </div>
      {showDetail ? <ExtraInfo RelatedLinks={RelatedLinks} Example={Example}/> : null}
    </div>
  )
}
