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
    const { data, error } = await supabase.from('creators').select('*').eq('id', id).single()
    if (error) {
      console.error('Failed to load creator:', error)
      alert('Could not load this creator.')
      navigate('/')
      return
    }
    setCreator(data)
  }

  async function handleUpdate(e) {
    e.preventDefault()
    const { error } = await supabase.from('creators').update({
      name: creator.name,
      url: creator.url,
      description: creator.description,
      imageURL: creator.imageURL
    }).eq('id', id)
    if (error) {
      console.error('Failed to update creator:', error)
      alert('Could not update creator. Please try again.')
      return
    }
    navigate('/')
  }

  async function handleDelete() {
    if (!window.confirm('Delete this creator?')) return
    const { error } = await supabase.from('creators').delete().eq('id', id)
    if (error) {
      console.error('Failed to delete creator:', error)
      alert('Could not delete creator. Please try again.')
      return
    }
    navigate('/')
  }

  return (
    <div>
      <h1>Edit Creator</h1>
      <form onSubmit={handleUpdate}>
        <label htmlFor="edit-name">Name</label>
        <input id="edit-name" value={creator.name} onChange={e => setCreator({...creator, name: e.target.value})} required /><br/>
        <label htmlFor="edit-url">URL</label>
        <input id="edit-url" type="url" value={creator.url} onChange={e => setCreator({...creator, url: e.target.value})} required /><br/>
        <label htmlFor="edit-description">Description</label>
        <textarea id="edit-description" value={creator.description} onChange={e => setCreator({...creator, description: e.target.value})} required /><br/>
        <label htmlFor="edit-image-url">Image URL (optional)</label>
        <input id="edit-image-url" type="url" value={creator.imageURL} onChange={e => setCreator({...creator, imageURL: e.target.value})} /><br/>
        <button type="submit">Update</button>
      </form>
      <button onClick={handleDelete} style={{ background: 'red', color: 'white' }}>Delete</button>
    </div>
  )
}

export default EditCreator
