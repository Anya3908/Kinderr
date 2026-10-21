import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import App from './App'

describe('App', () => {
  it('renders the header', () => {
    render(<App />)
    // Проверяем главный заголовок (h1)
    expect(
      screen.getByRole('heading', { level: 1 })
    ).toBeInTheDocument()
  })

  it('renders the about section', () => {
    render(<App />)
    // Проверяем, что секция "about" отрендерилась
    expect(
      screen.getByRole('heading', { level: 2, name: /about/i })
    ).toBeInTheDocument()
  })

  it('renders the projects list', () => {
    render(<App />)
    // Проверяем наличие хотя бы одного элемента списка
    const listItems = screen.getAllByRole('listitem')
    expect(listItems.length).toBeGreaterThan(0)
  })
})