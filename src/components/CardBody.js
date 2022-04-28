import React from 'react';
import Review from './Review';
import Tags from './Tags';

export default function CardBody(props) {
  const {showDetail, Name, Description, Tags, ReviewNumber, Rating, Detailed} = props;
  let content;

  if (!showDetail) {
    content = (<div>
      <h1>{Name}</h1>
      <h3>{Description}</h3>
      {/* This has an issue <Tags Tags={Tags}/> */}
      <Review ReviewNumber={ReviewNumber} Rating={Rating} />
    </div>);
  } else {
    content = (<div>
      <h3>{Description}</h3>
      <p className="detail">{Detailed}</p>
    </div>)
  }

  return (
    <div>
      {content}
    </div>
  )
}
