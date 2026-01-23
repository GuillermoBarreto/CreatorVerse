import React, { useState, useEffect } from 'react'
import { supabase } from '../client.js'
import CreatorCard from '../components/CreatorCard.jsx'
import { Link } from 'react-router-dom'

function ShowCreators() {
  const [creators, setCreators] = useState([]) // <-- default to []

  useEffect(() => {
    fetchCreators()
  }, [])

  async function fetchCreators() {
    const { data, error } = await supabase.from('creators').select('*')
    if (error) {
      console.log('Supabase error:', error)
      setCreators([])  // <-- prevent null crash
    } else {
      setCreators(data)
    }
  }

  async function handleDelete(id) {
    await supabase.from('creators').delete().eq('id', id)
    fetchCreators()
  }

  return (
    <div>
      <h1>CreatorVerse</h1>
      <Link to="/add">Add Creator</Link>
      {creators.length === 0 && <p>No creators yet!</p>}
      <div>
        {creators.map(c => (
          <CreatorCard key={c.id} creator={c} onDelete={handleDelete} />
        ))}
      </div>
    </div>
  )
}

export default ShowCreators  // <-- default export
