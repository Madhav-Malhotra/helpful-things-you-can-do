import React, { useState } from 'react';

export default function Card(props) {
  const [detail, setDetail] = useState(false);
  let content;
  console.log(props.Detailed);

  if (!detail) {
    content = (<div>
      <h1>{props.Name}</h1>
      <h3>{props.Description}</h3>
      <p>{JSON.stringify(props.Tags).replace(/[\[\]"]/g, '')}</p>
      {props.ReviewNumber ? <p>User rating: {props.Rating}/5 ({props.ReviewNumber})</p> : ""}
    </div>);
  } else {
    content = (<div>
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
