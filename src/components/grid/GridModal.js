import React from 'react'
import ExtraInfo from '../functional/ExtraInfo';
import { useSearchParams } from "react-router-dom";

export default function GridModal(props) { 
  const setSearch = useSearchParams()[1];
 
  const handleClose = () => {
    props.setModalID(null);
    setSearch({});
  }

  return (
    <div className='tile-modal' id={props.idProp} key={props.idProp}>
      <img alt='close button' className='close-modal-button' src="/cross.png" onClick={handleClose}/>
      <h3>{props.Description}</h3>
      <p className="detail">{props.Detailed.replaceAll("\\n","\n")}</p>
      <ExtraInfo {...props}/>
    </div>
  )
}
