import React from 'react'
import { render } from '@testing-library/react'
import UserTable from './UserTable'

test('renders Text', () => {
  const { getByText } = render(<UserTable />)
  const linkElement = getByText(/Name/i)
  expect(linkElement).toBeInTheDocument()
})
