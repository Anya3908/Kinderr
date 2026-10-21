export function Header() {
  return (
    <header className="header">
      <pre className="banner" aria-label="Hello Pages">
{String.raw`Kinder joy`}
      </pre>
      <p className="tagline">
        <span className="prompt">$</span> deploy --target github-pages
        <span className="caret" aria-hidden="true" />
      </p>
    </header>
  )
}
