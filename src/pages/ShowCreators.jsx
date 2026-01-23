import React, { useState, useEffect } from 'react'
import { supabase } from '../client.js'
import CreatorCard from '../components/CreatorCard.jsx'
import { Link } from 'react-router-dom'

function ShowCreators() {
  const [creators, setCreators] = useState([])

  useEffect(() => {
    fetchCreators()
  }, [])

  async function fetchCreators() {
    let { data } = await supabase.from('creators').select('*')
    setCreators(data)
  }

  return (
    <div>
      <h1>CreatorVerse</h1>
      <Link to="/add">
        <button>Add Creator</button>
      </Link>
      {creators.length === 0 && <p>No creators yet!</p>}
      {creators.map(c => (
        <CreatorCard key={c.id} creator={c} />
      ))}
    </div>
  )
}

export default ShowCreators
