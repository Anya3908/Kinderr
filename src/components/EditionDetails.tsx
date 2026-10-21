import { useParams, Link } from 'react-router-dom'

// Здесь мы описываем подробности для каждого выпуска
const detailsData: Record<string, { title: string; image: string; text: string[] }> = {
  'star-wars': {
    title: 'Kinder Joy: Звёздные войны',
    image: '/images/star-wars.jpg',
    text: [
      'Специальная коллекционная серия, выпущенная в честь выхода новой трилогии культовой саги. Внутри каждого яйца вас ждет не только любимый шоколад, но и уникальная фигурка одного из героев.',
      'Коллекция включает в себя 12 уникальных персонажей, среди которых Люк Скайуокер, Дарт Вейдер, Рей и Кайло Рен. Фигурки выполнены из высококачественного пластика и детализированы до мельчайших подробностей.',
      'Эта серия стала настоящим хитом среди коллекционеров и фанатов вселенной Star Wars. Успейте собрать их всех!'
    ]
  },
  'unicorn': {
    title: 'Kinder Сюрприз: Мир единорогов',
    image: '/images/unicorn.jpg',
    text: [
      'Волшебная серия для любителей магии и сказок. В этой коллекции собраны самые милые и волшебные существа — единороги, пегасы и другие обитатели радужного мира.',
      'Каждая игрушка имеет яркую окраску и переливается на солнце. Внутри вы можете найти фигурки с блестками, а также миниатюрные аксессуары: волшебные палочки, короны и облачка.',
      'Погрузитесь в атмосферу волшебства вместе с Kinder Сюрприз!'
    ]
  },
  'giraffe': {
    title: 'Kinder Сюрприз: Natocooks',
    image: '/images/giraffe.jpg',
    text: [
      'Серия, посвященная удивительному миру дикой природы и заповеднику Natocooks. Главными героями этой коллекции стали очаровательные жирафы и их друзья из саванны.',
      'Внутри шоколадного яйца вы найдете фигурки животных, которые можно собирать в мини-зоопарк. Игрушки разработаны совместно с защитниками природы, чтобы научить детей заботиться об окружающем мире.',
      'Добрые и милые персонажи принесут радость и взрослым, и детям.'
    ]
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