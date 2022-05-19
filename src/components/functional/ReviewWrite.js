import React, { useState } from 'react';
import { submitReview } from "../../firebaseFunctions.js" ;

export default function ReviewWrite(props) {
  const [ ratingLeft, setRatingLeft ] = useState();

  const handleInput = (e) => {
    const val = e.target.value;
    if (val >= 1 && val <= 5) setRatingLeft(val);
  }
  
  const updateRating = () => submitReview(ratingLeft, props.idProp, props.Rating, props.ReviewNumber);

  return (
    <div className='leave-review'>
      <input type="number" min="1" max="5" step="1" placeholder='1 (low) - 5 (high)'
      onChange={handleInput} />
      <button className='btn btn-inverse' onClick={updateRating}>
        Submit
      </button>
    </div>
  )
}
