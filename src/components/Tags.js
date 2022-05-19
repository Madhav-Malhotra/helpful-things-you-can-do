import React from 'react'

export default function Tags(props) {
  return (
    <div className='tags'>
      <p>{JSON.stringify(props.TagsData).replace(/[[\]"]/g, '')}</p>
    </div>
  )
}
