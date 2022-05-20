import React, {useState} from 'react'
import ReviewWrite from './ReviewWrite.js';

export default function ExtraInfo(props) {
  const [showExamples, setShowExamples] = useState(false);
  const [showReview, setShowReview] = useState(false);

  let links;
  if (props.RelatedLinks) {
    links = props.RelatedLinks.map(l => 
      (<li key={l.link}>
        <a target="_blank" rel="noreferrer" href={`${l.link}`}>{l.text}</a>
      </li>) 
    );
  }

  const toggleExample = () => setShowExamples(!showExamples);
  const toggleRating = () => setShowReview(!showReview);

  return (
    <div className='extra-info'>
      {/* Show examples button */}
      {props.Example ?
        <button className='btn btn-inverse' onClick={toggleExample}>
          {!showExamples ? "Show example" : "Hide Example"}
        </button>
      : null}

      {/* Leave Rating button
      <button className='btn btn-inverse' onClick={toggleRating}>
        {!showReview ? "Sign In to Give Rating" : "Hide Rating"}
      </button> */}

      {/* Show examples or Rating */}
      {showExamples ? <p className='example'>{props.Example}</p> : null}
      {/* {showReview ? <ReviewWrite idProp={props.idProp} Rating={props.Rating} ReviewNumber={props.ReviewNumber}/> : null} */}

      {links ? <p>Related Info</p> : null}
      {links}
    </div>
  )
}
