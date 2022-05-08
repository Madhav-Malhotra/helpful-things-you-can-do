import React from 'react'

export default function GridModal(props) {
  return (
    <div className='tile-modal' id={props.Name}>
      <h3>{props.Description}</h3>
      <p className="detail">{props.Detailed}</p>
    </div>
  )
}
