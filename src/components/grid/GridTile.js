import React from 'react';
import ReviewRead from '../functional/ReviewRead.js';
import TagsComponent from '../Tags';

export default function GridTile(props) {
  const {Name, Description, Tags, ReviewNumber, Rating, id} = props.data;
  const onTileClick = (e) => props.setModalID(e.currentTarget.id);

  return (
    <>
    <div className='col-sm-12 col-md-6 col-lg-4 tile' key={id} id={id} onClick={onTileClick}>
      <h1>{Name}</h1>
      <h3>{Description}</h3>
      <TagsComponent TagsData={Tags}/>
      <ReviewRead ReviewNumber={ReviewNumber} Rating={Rating} />
    </div>
    </>
  )
}
