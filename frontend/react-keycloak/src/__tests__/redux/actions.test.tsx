import { addCard, moveCard, receiveCards } from '../../redux/actions'
import { ADD_CARD, MOVE_CARD, RECEIVE_CARDS } from '../../redux/actionTypes'
import { AxiosResponse } from 'axios'
import { Card } from '../../constants'

test('addCard actions', () => {
  const title = 'test title'
  const desc = 'test desc'

  const expectedAction = {
    type: ADD_CARD,
    payload: {
      id: 1,
      title,
      desc
    }
  }

  expect(addCard(title, desc)).toEqual(expectedAction)
})

test('moveCard actions', () => {
  const id = 1
  const status = 'test status'

  const expectedAction = {
    type: MOVE_CARD,
    payload: {
      id,
      status
    }
  }

  expect(moveCard(id, status)).toEqual(expectedAction)
})

test('receiveCards actions', () => {
  const response = {
    data: {
      id: 1,
      title: 'test title',
      desc: 'test desc',
      status: 'test status'
    }
  } as AxiosResponse<Card>

  const expectedAction = {
    type: RECEIVE_CARDS,
    cards: response.data
  }

  expect(receiveCards(response)).toEqual(expectedAction)
})
