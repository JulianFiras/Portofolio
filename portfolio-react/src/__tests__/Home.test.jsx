import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import Home from '../pages/Home'

test('renders home hero text', () => {
  render(
    <MemoryRouter>
      <Home />
    </MemoryRouter>
  )
  expect(screen.getByText(/Halo, Saya/i)).toBeInTheDocument()
})

