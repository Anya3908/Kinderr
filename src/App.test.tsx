import { render, screen } from '@testing-library/react'
import App from './App'

test('renders header component', () => {
  render(<App />)
  // Ищем любой элемент с классом header
  const headerElement = document.querySelector('.header')
  expect(headerElement).toBeInTheDocument()
})

test('renders main sections', () => {
  render(<App />)
  const mainElement = document.querySelector('.main')
  expect(mainElement).toBeInTheDocument()
})