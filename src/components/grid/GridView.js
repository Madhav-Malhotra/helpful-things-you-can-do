import React from 'react'
import GridTile from './GridTile';

export default function GridView(props) {
  let tiles = [];
  for (let i of props.tips) {
    tiles.push(<GridTile data={i} key={i.Name}/>);
  }

  return (
    <div className='row grid-view'>
      {tiles}
    </div>
  )
}
