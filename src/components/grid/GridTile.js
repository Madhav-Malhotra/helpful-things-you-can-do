import React, { useState } from 'react';
import ReviewRead from '../functional/ReviewRead.js';
import TagsComponent from '../Tags';
import GridModal from './GridModal';

export default function GridTile(props) {
  const {Name, Description, Tags, ReviewNumber, Rating, Detailed, Example, RelatedLinks, id} = props.data;
  const [showModal, setShowModal] = useState(false);
  const ModalProps = {Detailed, Example, RelatedLinks, Description, setShowModal, idProp: id, Rating, ReviewNumber};

  const clickHandler = () => setShowModal(true);

  return (
    <>
    <div className='col-sm-12 col-md-6 col-lg-4 tile' key={id} onClick={clickHandler}>
      <h1>{Name}</h1>
      <h3>{Description}</h3>
      <TagsComponent TagsData={Tags}/>
      <ReviewRead ReviewNumber={ReviewNumber} Rating={Rating} />
    </div>
    {showModal ? <GridModal {...ModalProps}/> : null}
    </>
  )
}
