import React from 'react'
import ExtraInfo from '../flip/ExtraInfo';

export default function GridModal(props) {  
  return (
    <div className='tile-modal' key={props.idProp}>
      <img alt='close button' className='close' src="./cross.png" onClick={() => props.setShowModal(false)}/>
      <h3>{props.Description}</h3>
      <p className="detail">{props.Detailed}</p>
      <ExtraInfo {...props}/>
    </div>
  )
}
