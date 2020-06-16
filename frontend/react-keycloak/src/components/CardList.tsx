import { useDispatch, useSelector } from 'react-redux'
import { addCard } from '../redux/actions'
import React from 'react'
import { Card } from '../constants'

interface RootState {
  cards: Card[]
}

export const CardList = () => {
  const cards = useSelector((state: RootState) => state.cards)
  const dispatch = useDispatch()

  return (
    <div>
      <button onClick={() => dispatch(addCard('a', 'b'))}>
        Add
      </button>
      <div>
        {cards.length === 0 ? 'Not Found' : cards.map((card, index) => {
          return (
            <div key={index}>
              <h2>{card.id} - {card.title}</h2>
              <p>{card.desc}</p>
              <p>{card.status}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}
