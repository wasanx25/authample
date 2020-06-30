import { useDispatch, useSelector } from 'react-redux'
import React, { useEffect } from 'react'
import { Card } from '../constants'
import axios from 'axios'
import { receiveCards } from '../redux/actions'

interface RootState {
  cards: Card[]
}

export const CardList = () => {
  const cards = useSelector((state: RootState) => state.cards)
  const dispatch = useDispatch()

  useEffect(() => {
    axios.get('/authample/cards').then(response => {
      dispatch(receiveCards(response))
    })
  }, [])

  return (
    <div>
      <ul data-testid={'card-list'}>
        {cards.length === 0 ? 'Not Found' : cards.map((card, index) => {
          return (
            <li key={index}>
              {card.id} - title: {card.title} desc: {card.desc} status: {card.status}
            </li>
          )
        })}
      </ul>
    </div>
  )
}
