import './Sources.css';

export function Sources() {
  const sources = [
    { id: 1, text: 'Ferrero S.p.A. (2024). Официальная декларация состава продукта Kinder Surprise.' },
    { id: 2, text: 'ГОСТ 31783-2012. Шоколад. Общие технические условия.' },
    { id: 3, text: 'Belitz H.-D., Grosch W., Schieberle P. (2009). Food Chemistry. 4th ed. Springer.' },
    { id: 4, text: 'Beckett S.T. (2008). The Science of Chocolate. 2nd ed. Royal Society of Chemistry.' },
    { id: 5, text: 'СанПиН 2.3.2.1078-01. Гигиенические требования к качеству пищевых продуктов.' },
  ];

  return (
    <section id="sources" className="card sources">
      <h2>
        <span className="comment">//</span>
        Список использованных источников
      </h2>
      <ol className="sources-list">
        {sources.map((s) => (
          <li key={s.id}>
            <span className="src-num">[{s.id}]</span>
            <span className="src-text">{s.text}</span>
          </li>
        ))}
      </ol>
    </section>
  );
}