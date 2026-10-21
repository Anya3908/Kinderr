export function About() {
  return (
    <section className="card">
      <h2>
        <span className="comment">//</span> about
      </h2>
      <p>
        Этот сайт автоматически деплоится на{' '}
        <strong>GitHub Pages</strong> при push в <code>main</code>.
        Сборка, тесты и публикация выполняются в{' '}
        <strong>GitHub Actions</strong>.
      </p>
      <p className="hint">
        <span className="comment">#</span> гейтинг:{' '}
        <code>needs: ci</code> — deploy стартует только после зелёного CI.
      </p>
    </section>
  )
}
