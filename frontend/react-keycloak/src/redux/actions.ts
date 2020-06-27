import { ADD_CARD, RECEIVE_CARDS, MOVE_CARD } from './actionTypes'
import { AxiosResponse } from 'axios'

let nextCardId = 0

export const addCard = (title: string, desc: string) => ({
  type: ADD_CARD,
  payload: {
    id: ++nextCardId,
    title,
    desc
  }
})

export const moveCard = (id: number, status: string) => ({
  type: MOVE_CARD,
  payload: {
    id,
    status
  }
})

export const receiveCards = (response: AxiosResponse) => ({
  type: RECEIVE_CARDS,
  cards: response.data
})
