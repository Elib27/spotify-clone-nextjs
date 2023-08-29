import { render, screen } from '@testing-library/react'

import Page404 from '@/pages/404'

describe('404 page', () => {
  it('should render the 404 page title', () => {
    render(<Page404 />)
    expect(screen.getByRole('heading', { name: /Page introuvable/i })).toBeInTheDocument();
  })
  it('should render the home link button with the correct link', () => {
    render(<Page404 />)
    expect(screen.getByRole('link', { name: /Accueil/i })).toHaveAttribute('href', '/');
  })
})