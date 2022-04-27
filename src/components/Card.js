import React, { useState } from 'react';
import Review from './Review';
import Tags from './Tags';

export default function Card(props) {
  const [detail, setDetail] = useState(false);
  let content;

  if (!detail) {
    content = (<div>
      <h1>{props.Name}</h1>
      <h3>{props.Description}</h3>
      <Tags Tags={props.Tags}/>
      <Review ReviewNumber={props.ReviewNumber} Rating={props.Rating} />
    </div>);
  } else {
    content = (<div>
      <h3>{props.Description}</h3>
      <p className="detail">{props.Detailed}</p>
    </div>)
  }

  return (
    <div className='Card'>
      {content}
      <button onClick={() => setDetail(!detail)}>{detail ? "Hide Details" : "Show Details"}</button>
    </div>
  )
}
