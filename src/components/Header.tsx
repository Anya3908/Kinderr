import { useState, useEffect } from 'react';
import './Header.css';

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <header className={`header ${scrolled ? 'header--scrolled' : ''}`}>
      <div className="header-top">
        <pre className="banner" aria-hidden="true">{`
 ███╗   ██╗ █████╗ ██╗   ██╗██╗  ████████╗
 ████╗  ██║██╔══██╗██║   ██║██║  ╚══██╔══╝
 ██╔██╗ ██║███████║██║   ██║██║     ██║   
 ██║╚██╗██║██══██║██║   ██║██║     ██║   
 ██║ ╚████║██║  ██║╚██████╔╝███████╗██║   
 ╚═╝  ╚═══╝╚═╝  ╚═╝ ╚═════╝ ══════╝╚═╝   
`}</pre>
        <p className="tagline">
          <span className="prompt">~/kinder</span>
          <span>научно-исследовательский портал</span>
          <span className="caret" aria-hidden="true" />
        </p>
      </div>

      <nav className="nav">
        {['about', 'projects', 'science', 'composition', 'sources'].map((id) => (
          <button key={id} className="nav-link" onClick={() => scrollTo(id)}>
            <span className="nav-num">0{id.slice(0, 1).toUpperCase()}{id.slice(1)}</span>
          </button>
        ))}
      </nav>
    </header>
  );
}