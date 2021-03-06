import React, { useState, useEffect } from 'react'
import GridTile from './GridTile';
import GridModal from './GridModal';
import { useSearchParams } from 'react-router-dom';

export default function GridView(props) {
  const [modalID, setModalID] = useState(null);
  const search = useSearchParams()[0];

  useEffect(() => {
    const id = search.get("id")
    if (id && modalID != id) setModalID(id);
  }, [search])

  // Show all tiles
  let tiles = [];
  for (let i of props.tips) {
    tiles.push(<GridTile data={i} key={i.id} setModalID={setModalID}/>);
  }

  // If ID, then retrieve data for that modal
  let modalData = {};
  if (modalID) {
    for (let i of props.tips) {
      if (i.id === modalID) {
        const { Description, ReviewNumber, Rating, Detailed, Example, RelatedLinks, id} = i;
        modalData = {Detailed, Example, RelatedLinks, Description, setModalID, idProp: id, Rating, ReviewNumber};
      }
    }
  }

  return (
    <div className='row grid-view'>
      {Object.keys(modalData).length > 0 ? <GridModal {...modalData} /> : null}
      {tiles}
    </div>
  )
}
