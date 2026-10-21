import './Composition.css';

export function Composition() {
  const data = [
    { param: 'Энергетическая ценность', value: '574 ккал / 100г', note: 'высокая' },
    { param: 'Белки', value: '7.4 г', note: 'молочный протеин' },
    { param: 'Жиры', value: '36.7 г', note: 'какао-масло + растительные' },
    { param: 'Углеводы', value: '53.5 г', note: 'сахароза + лактоза' },
    { param: 'Температура плавления', value: '32–34 °C', note: 'эвтектическая смесь' },
    { param: 'pH начинки', value: '6.4–6.8', note: 'слабокислая среда' },
  ];

  return (
    <section id="composition" className="card composition">
      <h2>
        <span className="comment">//</span>
        Таблица 1. Физико-химические характеристики
      </h2>
      <div className="table-wrap">
        <table className="sci-table">
          <thead>
            <tr>
              <th>Параметр</th>
              <th>Значение</th>
              <th>Примечание</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, i) => (
              <tr key={i}>
                <td className="param">{row.param}</td>
                <td className="value">{row.value}</td>
                <td className="note">{row.note}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="hint">* Данные приведены согласно декларации производителя (Ferrero, 2024).</p>
    </section>
  );
}