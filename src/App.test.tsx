import { render, screen } from '@testing-library/react'
import App from './App'

test('App renders header with title', () => {
  render(<App />)
  // Ищем текст, который точно есть в Header
  const titleElement = screen.getByText(/научно-исследовательский портал/i)
  expect(titleElement).toBeInTheDocument()
})

test('App renders main content', () => {
  render(<App />)
  // Проверяем, что есть секция с научным анализом
  const scienceElement = screen.getByText(/Комплексный анализ/i)
  expect(scienceElement).toBeInTheDocument()
})

test('App renders footer', () => {
  render(<App />)
  const footerElement = screen.getByText(/status: deployed/i)
  expect(footerElement).toBeInTheDocument()
})