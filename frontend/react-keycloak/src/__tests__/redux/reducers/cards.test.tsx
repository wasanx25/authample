import cards from '../../../redux/reducers/cards'
import { ADD_CARD, MOVE_CARD, RECEIVE_CARDS } from '../../../redux/actionTypes'

test('add card reducers test', () => {
  const reducer = cards(undefined, {type: ADD_CARD, payload: { id: 1, title: 'test title', desc: 'test desc' }})
  expect(reducer).toEqual(
    [
      {
        id: 0,
        title: '',
        desc: '',
        status: ''
      },
      {
        id: 1,
        title: 'test title',
        desc: 'test desc'
      }
    ])
})

test('move card reducers test', () => {
  const reducer = cards(undefined, {type: MOVE_CARD, payload: { id: 0, status: 'done' }})
  expect(reducer).toEqual(
    [
      {
        id: 0,
        title: '',
        desc: '',
        status: 'done'
      }
    ])
})

test('receive cards reducers test', () => {
  const reducer = cards(undefined, {type: RECEIVE_CARDS, cards: [{ id: 1, title: 'test title', desc: 'test desc', status: 'todo' }]})
  expect(reducer).toEqual(
    [
      {
        id: 1,
        title: 'test title',
        desc: 'test desc',
        status: 'todo'
      }
    ])
})
