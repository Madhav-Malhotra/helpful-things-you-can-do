import React from 'react'

export default function ReviewRead(props) {
  return (
    <div className='review'>
      <p>User rating: {props.Rating}/5 ({props.ReviewNumber})</p>
    </div>
  )
}
