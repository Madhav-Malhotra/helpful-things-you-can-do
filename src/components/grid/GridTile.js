import React, { useState } from 'react';
import Review from '../flip/Review';
import TagsComponent from '../flip/Tags';
import GridModal from './GridModal';

export default function GridTile(props) {
  const {Name, Description, Tags, ReviewNumber, Rating, Detailed, Example, RelatedLinks} = props.data;
  const [showModal, setShowModal] = useState(false);

  const clickHandler = () => {
    setShowModal(true);
  }

  return (
    <>
    <div className='col-sm-12 col-md-6 col-lg-4 tile' id={Name} onClick={clickHandler}>
      <h1>{Name}</h1>
      <h3>{Description}</h3>
      <TagsComponent TagsData={Tags}/>
      <Review ReviewNumber={ReviewNumber} Rating={Rating} />
    </div>
    {showModal ? 
      <GridModal Detailed={Detailed} Example={Example} RelatedLinks={RelatedLinks} Description={Description}/> 
      : null}
    </>
  )
}
