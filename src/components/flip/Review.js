import React from 'react'

export default function Review(props) {
  let content;

  if (props.ReviewNumber) {
    if (props.Mode === 'write') {
      content = null;
    } else {
      content = (<p>User rating: {props.Rating}/5 ({props.ReviewNumber})</p>);
    }
  }

  return (
    <div className='review'>
      {content}
    </div>
  )
}
