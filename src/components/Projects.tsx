const projects = [
  { name: 'go-cli', desc: 'публикация бинарников в Releases' },
  { name: 'go-gui', desc: 'Fyne + MSYS2 + 3 раннера' },
  { name: 'hello-pages', desc: 'деплой на GitHub Pages' },
]

export function Projects() {
  return (
    <section className="card">
      <h2>
        <span className="comment">//</span> projects
      </h2>
      <ul className="listing">
        {projects.map((p) => (
          <li key={p.name}>
            <span className="arrow">›</span>{' '}
            <span className="name">{p.name}</span>
            <span className="sep"> — </span>
            <span className="desc">{p.desc}</span>
          </li>
        ))}
      </ul>
    </section>
  )
}
