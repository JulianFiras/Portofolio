import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import Home from '../pages/Home'

test('renders home hero text', () => {
  render(
    <MemoryRouter>
      <Home />
    </MemoryRouter>
  )
  // cari teks "Halo, Saya" di halaman
  expect(screen.getByText(/Halo, Saya/i)).toBeInTheDocument()
})

