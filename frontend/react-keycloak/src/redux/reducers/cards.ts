import { ADD_CARD, RECEIVE_CARDS, MOVE_CARD } from '../actionTypes'
import { Card } from '../../constants'

const initialState = [
  {
    id: 0,
    title: '',
    desc: '',
    status: ''
  } as Card
]

interface AddCardAction {
  type: typeof ADD_CARD,
  payload: {
    id: number,
    title: string,
    desc: string
  }
}

interface MoveCardAction {
  type: typeof MOVE_CARD,
  payload: {
    id: number,
    status: string
  }
}

interface ReceiveCardsAction {
  type: typeof RECEIVE_CARDS,
  cards: Card[]
}

type CardAction = AddCardAction | MoveCardAction | ReceiveCardsAction

export default function (state = initialState, action: CardAction) {
  switch (action.type) {
    case ADD_CARD:
      return [...state, action.payload]
    case MOVE_CARD:
      const {id, status} = action.payload
      return state.map(card => {
        if (card.id === id) {
          return {...card, status: status}
        }
        return card
      })
    case RECEIVE_CARDS:
      return action.cards
    default:
      return state
  }
}
