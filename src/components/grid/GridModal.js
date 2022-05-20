import React from 'react'
import ExtraInfo from '../functional/ExtraInfo';

export default function GridModal(props) {  
  
  return (
    <div className='tile-modal' id={props.idProp} key={props.idProp}>
      <img alt='close button' className='close-modal-button' src="./cross.png" onClick={() => props.setModalID}/>
      <h3>{props.Description}</h3>
      <p className="detail">{props.Detailed}</p>
      <ExtraInfo {...props}/>
    </div>
  )
}
