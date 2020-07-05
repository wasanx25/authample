import { useDispatch } from 'react-redux'
import { addCard } from '../redux/actions'
import React, { useState } from 'react'
import 'bulma/css/bulma.css'
import axios from 'axios'

export const AddCard = () => {
  const dispatch = useDispatch()
  const [title, setTitle] = useState('')
  const [desc, setDesc] = useState('')

  const handleSubmit = () => {
    axios.post('/authample/cards', {
      title: title,
      desc: desc,
      status: 'todo'
    }).then(response => {
      console.log(response)
    })
    dispatch(addCard(title, desc))
    setTitle('')
    setDesc('')
  }

  return (
    <div>
      <div className='field'>
        <label className='label'>Title</label>
        <div className='control'>
          <input className='input' type='text' value={title} onChange={(e) => setTitle(e.target.value)} />
        </div>
      </div>

      <div className='field'>
        <label className='label'>Desc</label>
        <div className='control'>
          <input className='input' type='text' value={desc} onChange={(e) => setDesc(e.target.value)} />
        </div>
      </div>

      <div className='field'>
        <div className='control'>
          <input className='button is-primary' type='button' value='submit' onClick={handleSubmit}/>
        </div>
      </div>
    </div>
  )
}
