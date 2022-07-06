import React from 'react'
import ExtraInfo from '../functional/ExtraInfo';
import { useSearchParams } from "react-router-dom";

export default function GridModal(props) { 
  const setSearch = useSearchParams()[1];
 
  const handleClose = () => {
    props.setModalID(null);
    setSearch({});
  }
  const handleCopy = () => {
    navigator.clipboard.writeText(window.location.href);
    alert("Copied URL!");
  }

  return (
    <div className='tile-modal' id={props.idProp} key={props.idProp}>
      <div className='modal-toolbar'>
        <img alt='Copy URL' title="Copy URL" className='copy-modal-button' src="/img/link.png" onClick={handleCopy}/>
        <img alt='Close modal' title="Hide details" className='close-modal-button' src="/img/cross.png" onClick={handleClose}/>
      </div>
      <h3>{props.Description}</h3>
      <p className="detail">{props.Detailed.replaceAll("\\n","\n")}</p>
      <ExtraInfo {...props}/>
    </div>
  )
}
