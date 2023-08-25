import { render, screen } from '@testing-library/react'

import Login from '../../../pages/login'

describe('Login', () => {
  it('renders the login', () => {
    render(<Login />)

    const heading = screen.getByRole('heading', {
      name: /Spotify Clone by BAS Eliot/,
    })

    expect(heading).toBeInTheDocument()
  })
})