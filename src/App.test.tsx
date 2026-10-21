import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import App from './App'

describe('App', () => {
  it('renders the banner header', () => {
    render(<App />)
    expect(
      screen.getByLabelText(/hello pages/i)
    ).toBeInTheDocument()
  })

  it('renders the about section', () => {
    render(<App />)
    expect(
      screen.getByRole('heading', { level: 2, name: /about/i })
    ).toBeInTheDocument()
    expect(screen.getAllByText(/GitHub Pages/i).length).toBeGreaterThan(0)
  })

  it('renders the projects list', () => {
    render(<App />)
    expect(screen.getByText(/go-cli/i)).toBeInTheDocument()
    expect(screen.getByText(/go-gui/i)).toBeInTheDocument()
    expect(screen.getByText(/hello-pages/i)).toBeInTheDocument()
  })
})
