import {  useSelector } from 'react-redux'
import React from 'react'
import { Card } from '../constants'
import styles from './CardList.module.css'

interface RootState {
  cards: Card[]
}

export const CardList = () => {
  const cards = useSelector((state: RootState) => state.cards)

  return (
    <div>
      <div data-testid={'card-list'}>
        {cards.length === 0 ? 'Not Found' : cards.map((card, index) => {
          return (
            <div className={styles.card} key={index}>
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
