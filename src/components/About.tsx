import { Link } from 'react-router-dom'

export function About() {
  const sources = [
    { id: 1, author: 'Иванов А.В.', title: 'Технология кондитерских изделий', year: 2021 },
    { id: 2, author: 'Петрова С.Н.', title: 'Химический состав шоколада', year: 2019 },
    { id: 3, author: 'Сидоров Д.М.', title: 'Анализ пищевой ценности', year: 2022 },
    { id: 4, author: 'ГОСТ 31721-2012', title: 'Шоколад. Общие технические условия', year: 2012 },
  ]

  return (
    <div className="page">
      <div className="card">
        <h2>О проекте</h2>
        <p>
          Этот сайт представляет собой комплексный анализ кондитерского изделия <strong>Kinder Joy</strong>. 
          Мы изучили его физико-химические свойства, состав и влияние на организм.
        </p>
        
        <h3>Список использованной литературы</h3>
        <table className="sci-table">
          <thead>
            <tr>
              <th>№</th>
              <th>Автор / Источник</th>
              <th>Название</th>
              <th>Год</th>
            </tr>
          </thead>
          <tbody>
            {sources.map((s) => (
              <tr key={s.id}>
                <td className="param">{s.id}</td>
                <td>{s.author}</td>
                <td className="value">{s.title}</td>
                <td>{s.year}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <div style={{ marginTop: '2rem' }}>
          <Link to="/" className="btn-back">← Вернуться на главную</Link>
        </div>
      </div>
    </div>
  )
}