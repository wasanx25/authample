import React from 'react'
import { render } from '@testing-library/react'
import App from '../App'

test('renders routing link list', () => {
  const result = render(<App />)
  const expectedHTML = `
    <ul>
      <li><a href="/">Home</a></li>
      <li><a href="/about">About</a></li>
      <li><a href="/users">Users</a></li>
      <li><a href="/cards">Cards</a></li>
    </ul>
  `.replace(/\s*</gi, '\<').trimEnd()

  expect(result.container.innerHTML).toContain(expectedHTML)
})
