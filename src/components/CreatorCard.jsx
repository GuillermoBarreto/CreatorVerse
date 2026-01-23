import React from 'react'
import { Link } from 'react-router-dom'

function CreatorCard({ creator }) {
  return (
    <div style={{ border: '1px solid #ccc', padding: '10px', margin: '10px' }}>
      <h3>{creator.name}</h3>
      <p>{creator.description}</p>
      {creator.imageURL && <img src={creator.imageURL} alt={creator.name} width="100" />}
      <p>
        <a href={creator.url} target="_blank">Visit</a>
      </p>
      <Link to={`/creator/${creator.id}`}>View</Link>
      {' | '}
      <Link to={`/edit/${creator.id}`}>Edit</Link>
    </div>
  )
}

export default CreatorCard
