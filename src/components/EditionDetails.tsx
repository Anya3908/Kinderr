import { useParams, Link } from 'react-router-dom'

// Здесь мы описываем подробности для каждого выпуска
const detailsData: Record<string, { title: string; image: string; text: string[] }> = {
  'star-wars': {
    title: 'Kinder Joy: Звёздные войны',
    image: `${import.meta.env.BASE_URL}images/star-wars.jpg`,
    text: [ /* ... */ ]
  },
  'unicorn': {
    title: 'Kinder Сюрприз: Мир единорогов',
    image: `${import.meta.env.BASE_URL}images/unicorn.jpg`,
    text: [ /* ... */ ]
  },
  'giraffe': {
    title: 'Kinder Сюрприз: Natocooks',
    image: `${import.meta.env.BASE_URL}images/giraffe.jpg`,
    text: [ /* ... */ ]
  }
}

export function EditionDetails() {
  const { id } = useParams<{ id: string }>()
  const data = id ? detailsData[id] : null

  if (!data) {
    return (
      <div className="card" style={{ textAlign: 'center' }}>
        <h2>Выпуск не найден</h2>
        <Link to="/" className="btn-link" style={{ marginTop: '1rem', display: 'inline-block' }}>Вернуться на главную</Link>
      </div>
    )
  }

  return (
    <div className="edition-page">
      <div className="edition-card-full">
        <div className="edition-hero">
          <img 
            src={data.image} 
            alt={data.title} 
            className="edition-hero-img" 
            onError={(e) => {
              (e.target as HTMLImageElement).src = 'https://placehold.co/600x400/fff0e6/ff7b54?text=Нет+фото';
            }}
          />
        </div>
        <div className="edition-body">
          <h1>{data.title}</h1>
          {data.text.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
          <div style={{ marginTop: '2rem', textAlign: 'center' }}>
            <Link to="/" className="btn-link">← Назад ко всем выпускам</Link>
          </div>
        </div>
      </div>
    </div>
  )
}