import React, { useState } from 'react'
import { supabase } from '../client.js'
import { useNavigate } from 'react-router-dom'

function AddCreator() {
  const [name, setName] = useState('')
  const [url, setUrl] = useState('')
  const [description, setDescription] = useState('')
  const [imageURL, setImageURL] = useState('')
  const navigate = useNavigate()

  async function handleSubmit(e) {
    e.preventDefault()
    const { error } = await supabase.from('creators').insert([{ name, url, description, imageURL }])
    if (error) {
      console.error('Failed to add creator:', error)
      alert('Could not add creator. Please try again.')
      return
    }
    navigate('/')
  }

  return (
    <div>
      <h1>Add Creator</h1>
      <form onSubmit={handleSubmit}>
        <input placeholder="Name" value={name} onChange={e => setName(e.target.value)} required /><br/>
        <input placeholder="URL" value={url} onChange={e => setUrl(e.target.value)} required /><br/>
        <textarea placeholder="Description" value={description} onChange={e => setDescription(e.target.value)} required /><br/>
        <input placeholder="Image URL (optional)" value={imageURL} onChange={e => setImageURL(e.target.value)} /><br/>
        <button type="submit">Add</button>
      </form>
    </div>
  )
}

export default AddCreator
