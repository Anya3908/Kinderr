import { Link } from 'react-router-dom'

const editions = [
  {
    id: 'star-wars',
    title: 'Kinder Joy: Звёздные войны',
    desc: 'Специальная серия с игрушками по мотивам легендарной саги.',
    image: '/images/star-wars.jpg',
  },
  {
    id: 'unicorn',
    title: 'Kinder Сюрприз: Мир единорогов',
    desc: 'Волшебная коллекция с единорогами и другими сказочными существами.',
    image: '/images/unicorn.jpg',
  },
  {
    id: 'giraffe',
    title: 'Kinder Сюрприз: Natocooks',
    desc: 'Серия с милыми жирафами и персонажами из мира животных.',
    image: '/images/giraffe.jpg',
  }
]

export function Editions() {
  return (
    <div className="editions-section">
      <h2 className="section-title">Коллекция выпусков</h2>
      <div className="editions-grid">
        {editions.map((item) => (
          <div className="edition-card" key={item.id}>
            <div className="edition-image-wrap">
              {/* Добавил обработку, если картинки пока нет */}
              <img 
                src={item.image} 
                alt={item.title} 
                className="edition-image" 
                onError={(e) => {
                  // Если картинка не найдена, ставим заглушку
                  (e.target as HTMLImageElement).src = 'https://placehold.co/400x300/fff0e6/ff7b54?text=Нет+фото';
                }}
              />
            </div>
            <div className="edition-content">
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
              <Link to={`/edition/${item.id}`} className="btn-card">
                Подробнее
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}