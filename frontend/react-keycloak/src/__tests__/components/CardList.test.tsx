import React from 'react'
import { render } from '@testing-library/react'
import { CardList } from '../../components/CardList'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { Card } from '../../constants'
import cards from '../../redux/reducers/cards'

test('render CardList component', async () => {
  const cardList = {
    cards: [{ id: 0, title: 'test title', desc: 'test desc', status: 'test status' } as Card]
  }

  // @ts-ignore TODO: reducerの指定でtypeが一致しないと出るが、テストは実行可能
  const store = createStore(cards, cardList)

  const result = render(
    <Provider store={store}>
      <CardList/>
    </Provider>
  )

  const expectedHTML = `
    <div class="card">
        <h2>0 - test title</h2>
        <p>test desc</p>
        <p>test status</p>
    </div>
  `.replace(/\s*</gi, '\<').trimEnd()

  expect(result.getByTestId('card-list').innerHTML).toContain(expectedHTML)
})

