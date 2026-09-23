import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { supabase } from '../client.js'

function ViewCreator() {
  const { id } = useParams()
  const [creator, setCreator] = useState(null)
  const [loadError, setLoadError] = useState(false)

  useEffect(() => {
    fetchCreator()
  }, [])

  async function fetchCreator() {
    const { data, error } = await supabase.from('creators').select('*').eq('id', id).single()
    if (error) {
      console.error('Failed to load creator:', error)
      setLoadError(true)
      return
    }
    setCreator(data)
  }

  if (loadError) return <p>Sorry, that creator could not be found.</p>
  if (!creator) return <p>Loading...</p>

  return (
    <div>
      <h1>{creator.name}</h1>
      <p>{creator.description}</p>
      {creator.imageURL && <img src={creator.imageURL} alt={creator.name} width="200" />}
      <p><a href={creator.url} target="_blank">Visit Creator</a></p>
      <Link to={`/edit/${creator.id}`}><button>Edit</button></Link>
      <Link to="/"><button>Back</button></Link>
    </div>
  )
}

export default ViewCreator
