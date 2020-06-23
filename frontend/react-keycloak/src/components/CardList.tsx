import {  useSelector } from 'react-redux'
import React from 'react'
import { Card } from '../constants'

interface RootState {
  cards: Card[]
}

export const CardList = () => {
  const cards = useSelector((state: RootState) => state.cards)

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
