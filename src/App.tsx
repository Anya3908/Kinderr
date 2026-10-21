import { HashRouter, Routes, Route, Link } from 'react-router-dom'
import { Header } from './components/Header'
import { About } from './components/About'

function Home() {
  return (
    <>
      <div className="card">
        <h2>Анализ продукта</h2>
        <p>Здесь представлены основные результаты нашего исследования.</p>
        {/* Сюда вы можете добавить остальные карточки с анализом */}
      </div>
      <div className="card">
        <h2>Навигация</h2>
        <Link to="/about" className="btn-link">Перейти к литературе и деталям →</Link>
      </div>
    </>
  )
}

export default function App() {
  return (
    <HashRouter>
      <div className="app">
        <Header />
        <main className="main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>
        <footer className="footer">
          <p>© 2026 Kinder Joy Analysis</p>
        </footer>
      </div>
    </HashRouter>
  )
}