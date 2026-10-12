import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { supabase } from '../client.js'

function ViewCreator() {
  const { id } = useParams()
  const [creator, setCreator] = useState(null)
  const [loadError, setLoadError] = useState(false)

  useEffect(() => {
    let isMounted = true

    async function fetchCreator() {
      const { data, error } = await supabase.from('creators').select('*').eq('id', id).single()
      // The component may have unmounted while the request was in flight.
      if (!isMounted) return
      if (error) {
        console.error('Failed to load creator:', error)
        setLoadError(true)
        return
      }
      setCreator(data)
    }

    fetchCreator()

    return () => {
      isMounted = false
    }
    // Refetch when the route id changes so the page never shows a stale creator.
  }, [id])

  if (loadError) return <p>Sorry, that creator could not be found.</p>
  if (!creator) return <p>Loading...</p>

  return (
    <div>
      <h1>{creator.name}</h1>
      <p>{creator.description}</p>
      {creator.imageURL && <img src={creator.imageURL} alt={creator.name} width="200" />}
      {/* Only render the link when a URL exists, like CreatorCard does: a
          missing url would render an anchor with no href, which goes nowhere
          and confuses screen readers. */}
      {creator.url && (
        <p><a href={creator.url} target="_blank" rel="noopener noreferrer">Visit Creator</a></p>
      )}
      <p>
        <Link to={`/edit/${creator.id}`}>Edit</Link>
        {' | '}
        <Link to="/">Back</Link>
      </p>
    </div>
  )
}

export default ViewCreator

