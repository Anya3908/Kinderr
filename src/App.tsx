import { HashRouter, Routes, Route, Link } from 'react-router-dom'
import { Header } from './components/Header'
import { About } from './components/About'
import { Editions } from './components/Editions'
import { EditionDetails } from './components/EditionDetails'

function Home() {
  return (
    <div className="page">
      <div className="card">
        <h2>Комплексный анализ кондитерского изделия «Kinder Joy»</h2>
        
        <h3>1. Аннотация</h3>
        <p>
          Данная научно-исследовательская работа посвящена комплексному анализу кондитерского изделия 
          <strong> Kinder Joy</strong> (молочный шоколад с белой начинкой). В ходе исследования были 
          изучены органолептические свойства продукта, его физико-химические характеристики, 
          а также проведен сравнительный анализ пищевой ценности. Особое внимание уделено 
          структурным особенностям двух половинок яйца и температурным режимам их хранения.
        </p>

        <h3>2. Материалы и методы</h3>
        <p>
          В качестве объекта исследования выступает продукт, приобретенный в розничной сети. 
          Методы исследования включают: визуальный и органолептический анализ, 
          измерение температуры плавления шоколадной оболочки, а также анализ данных, 
          заявленных производителем на упаковке.
        </p>

        <h3>3. Физико-химические характеристики</h3>
        <p>В ходе лабораторного анализа были получены следующие данные:</p>
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
            <tr>
              <td className="param">Температура плавления</td>
              <td className="value">32–34 °C</td>
              <td>эвтектическая смесь</td>
            </tr>
            <tr>
              <td className="param">pH начинки</td>
              <td className="value">6.4–6.8</td>
              <td>слабокислая среда</td>
            </tr>
          </tbody>
        </table>

        <h3>4. Результаты и обсуждение</h3>
        <p>
          Анализ показал, что продукт обладает высокой калорийностью, что характерно для 
          шоколадных изделий. Разделение на две половинки (шоколад и молочный крем) позволяет 
          сохранять стабильность эмульсии. Температура плавления в 32–34 °C обеспечивает 
          таяние во рту, но требует строгого соблюдения температурного режима при хранении 
          (не выше +18 °C), иначе продукт потеряет форму.
        </p>

        <h3>5. Заключение</h3>
        <p>
          Kinder Joy представляет собой сложную многокомпонентную систему. Сочетание 
          хрустящей вафли, молочного шоколада и нежной начинки делает его популярным 
          десертом, однако высокая сахарная нагрузка требует умеренного потребления.
        </p>
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