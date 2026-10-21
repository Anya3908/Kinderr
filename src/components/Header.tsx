export function Header() {
  return (
    <header className="header">
      <pre className="banner" aria-label="Hello Pages">
{String.raw` _  _ ___ _    _    ___    ___  _  ___ ___ ___
| || | __| |  | |  / _ \  | _ \/_\ / __| __/ __|
| __ | _|| |__| |_| (_) | |  _/ _ \ (_ | _|\__ \
|_||_|___|____|____\___/  |_|/_/ \_\___|___|___/`}
      </pre>
      <p className="tagline">
        <span className="prompt">$</span> deploy --target github-pages
        <span className="caret" aria-hidden="true" />
      </p>
    </header>
  )
}