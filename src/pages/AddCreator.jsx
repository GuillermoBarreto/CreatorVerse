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
    // Trim whitespace: without this, a name of only spaces passes the
    // `required` check and gets stored as a blank creator.
    const trimmedName = name.trim()
    const trimmedUrl = url.trim()
    const trimmedDescription = description.trim()
    if (!trimmedName || !trimmedUrl || !trimmedDescription) {
      alert('Please fill in the name, URL, and description.')
      return
    }
    const { error } = await supabase.from('creators').insert([{ name: trimmedName, url: trimmedUrl, description: trimmedDescription, imageURL: imageURL.trim() || null }])
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
        <label htmlFor="name">Name</label>
        <input id="name" placeholder="Name" value={name} onChange={e => setName(e.target.value)} required /><br/>
        <label htmlFor="url">URL</label>
        <input id="url" type="url" placeholder="https://" value={url} onChange={e => setUrl(e.target.value)} required /><br/>
        <label htmlFor="description">Description</label>
        <textarea id="description" placeholder="Description" value={description} onChange={e => setDescription(e.target.value)} required /><br/>
        <label htmlFor="imageURL">Image URL (optional)</label>
        <input id="imageURL" type="url" placeholder="https://" value={imageURL} onChange={e => setImageURL(e.target.value)} /><br/>
        <button type="submit">Add</button>
      </form>
    </div>
  )
}

export default AddCreator
