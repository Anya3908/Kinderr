import { HashRouter, Routes, Route, Link } from 'react-router-dom'
import { Header } from './components/Header'
import { About } from './components/About'
import { Editions } from './components/Editions'
import { EditionDetails } from './components/EditionDetails'

function Home() {
  return (
    <div className="page">
      <div className="card">
        <h2>Комплексный анализ кондитерского изделия</h2>
        <p>
          Данное исследование посвящено анализу состава, физико-химических свойств и пищевой ценности 
          кондитерского изделия <strong>Kinder Joy</strong>. В работе рассмотрены особенности 
          молочного и шоколадного компонентов, а также их влияние на вкусовые качества продукта.
        </p>

        <h3>1. Аннотация</h3>
        <p>
          В ходе работы были изучены органолептические показатели и химический состав. 
          Основное внимание уделено соотношению какао-масла и молочных жиров.
        </p>

        <h3>2. Физико-химические характеристики</h3>
        <table className="sci-table">
          <thead>
            <tr>
              <th>Параметр</th>
              <th>Значение</th>
              <th>Примечание</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="param">Энергетическая ценность</td>
              <td className="value">574 ккал / 100г</td>
              <td>высокая</td>
            </tr>
            <tr>
              <td className="param">Белки</td>
              <td className="value">7.4 г</td>
              <td>молочный протеин</td>
            </tr>
            <tr>
              <td className="param">Жиры</td>
              <td className="value">36.7 г</td>
              <td>какао-масло + растительные</td>
            </tr>
            <tr>
              <td className="param">Углеводы</td>
              <td className="value">53.5 г</td>
              <td>сахароза + лактоза</td>
            </tr>
          </tbody>
        </table>
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