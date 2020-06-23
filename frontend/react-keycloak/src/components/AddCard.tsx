import { useDispatch } from 'react-redux'
import { addCard } from '../redux/actions'
import React, { useState } from 'react'

export const AddCard = () => {
  const dispatch = useDispatch()
  const [title, setTitle] = useState('')
  const [desc, setDesc] = useState('')

  const handleSubmit = () => {
    dispatch(addCard(title, desc))
    setTitle('')
    setDesc('')
  }

  return (
    <div>
      <label htmlFor='card-title'>Title</label>
      <input type='text' value={title} onChange={(e) => setTitle(e.target.value)} />

      <label htmlFor='card-desc'>Desc</label>
      <input type='text' value={desc} onChange={(e) => setDesc(e.target.value)} />

      <input type='button' value='submit' onClick={handleSubmit}/>
    </div>
  )
}
