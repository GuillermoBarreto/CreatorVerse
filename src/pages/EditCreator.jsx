import React, { useEffect, useState } from 'react'
import { supabase } from '../client.js'
import { useParams, useNavigate } from 'react-router-dom'

function EditCreator() {
  const { id } = useParams()
  const navigate = useNavigate()
  const [creator, setCreator] = useState({ name: '', url: '', description: '', imageURL: '' })

  useEffect(() => {
    fetchCreator()
  }, [])

  async function fetchCreator() {
    const { data } = await supabase.from('creators').select('*').eq('id', id).single()
    setCreator(data)
  }

  async function handleUpdate(e) {
    e.preventDefault()
    await supabase.from('creators').update({
      name: creator.name,
      url: creator.url,
      description: creator.description,
      imageURL: creator.imageURL
    }).eq('id', id)
    navigate('/')
  }

  async function handleDelete() {
    await supabase.from('creators').delete().eq('id', id)
    navigate('/')
  }

  return (
    <div>
      <h1>Edit Creator</h1>
      <form onSubmit={handleUpdate}>
        <input value={creator.name} onChange={e => setCreator({...creator, name: e.target.value})} required /><br/>
        <input value={creator.url} onChange={e => setCreator({...creator, url: e.target.value})} required /><br/>
        <textarea value={creator.description} onChange={e => setCreator({...creator, description: e.target.value})} required /><br/>
        <input value={creator.imageURL} onChange={e => setCreator({...creator, imageURL: e.target.value})} /><br/>
        <button type="submit">Update</button>
      </form>
      <button onClick={handleDelete} style={{ background: 'red', color: 'white' }}>Delete</button>
    </div>
  )
}

export default EditCreator
