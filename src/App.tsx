import { HashRouter, Routes, Route, Link } from 'react-router-dom'
import { Header } from './components/Header'
import { About } from './components/About'
import { Editions } from './components/Editions'
import { EditionDetails } from './components/EditionDetails' // Импорт новой страницы

function Home() {
  return (
    <div className="page">
      <div className="card">
        <h2>Комплексный анализ кондитерского изделия</h2>
        {/* ... ваш текст и таблица ... */}
        <p>Данное исследование посвящено анализу состава...</p>
      </div>

      <Editions />

      <div className="btn-center-wrap">
        <Link to="/about" className="btn-link btn-large">О проекте</Link>
      </div>
    </div>
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
            {/* Добавляем маршрут для подробностей */}
            <Route path="/edition/:id" element={<EditionDetails />} />
          </Routes>
        </main>
        <footer className="footer">
          <p>© 2026 Kinder Joy Analysis</p>
        </footer>
      </div>
    </HashRouter>
  )
}