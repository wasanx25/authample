import React from 'react'
import ReactDOM from 'react-dom'
import { act } from '@testing-library/react'
import UserTable from '../../components/UserTable'
import moxios from 'moxios'

test('request test', async () => {
  const users = [
    {
      id: 1,
      name: 'aaa bbb',
      username: 'cccccc',
      company: {
        name: 'ddd company'
      }
    }
  ]
  moxios.install()
  moxios.stubRequest('https://jsonplaceholder.typicode.com/users?limit=10', {
    status: 200,
    response: users
  })

  let container = document.createElement('div')

  await act(async() => {
    ReactDOM.render(<UserTable/>, container);
  })

  const thead = container.querySelector('thead')!
  expect(thead.querySelector('tr > th:nth-child(1)')!.textContent).toBe('Id')
  expect(thead.querySelector('tr > th:nth-child(2)')!.textContent).toBe('Name')
  expect(thead.querySelector('tr > th:nth-child(3)')!.textContent).toBe('Username')
  expect(thead.querySelector('tr > th:nth-child(4)')!.textContent).toBe('Company')

  const tbody = container.querySelector('tbody')!
  expect(tbody.querySelector('tr > td:nth-child(1)')!.textContent).toBe('1')
  expect(tbody.querySelector('tr > td:nth-child(2)')!.textContent).toBe('aaa bbb')
  expect(tbody.querySelector('tr > td:nth-child(3)')!.textContent).toBe('cccccc')
  expect(tbody.querySelector('tr > td:nth-child(4)')!.textContent).toBe('ddd company')
})
