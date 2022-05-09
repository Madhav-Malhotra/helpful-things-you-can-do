import React, {useState} from 'react'

export default function ExtraInfo(props) {
  const [showExamples, setShowExamples] = useState(false);

  let links;
  if (props.RelatedLinks) {
    links = props.RelatedLinks.map(l => 
      (<li key={l.link}>
        <a target="_blank" rel="noreferrer" href={`${l.link}`}>{l.text}</a>
      </li>) 
    );
  }

  const toggleExample = () => setShowExamples(!showExamples);

  return (
    <div className='extra-info'>
      {props.Example ? <>
        <button className='btn btn-inverse' onClick={toggleExample}>
          {!showExamples ? "Show example" : "Hide Example"}
        </button>
        {showExamples ? <p className='example'>{props.Example}</p> : null}
      </> : null}

      {links ? <p>Related Info</p> : null}
      {links}
    </div>
  )
}
