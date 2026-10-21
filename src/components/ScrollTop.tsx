import { useState, useEffect } from 'react';
import './ScrollTop.css';

export function ScrollTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const goTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <button
      className={`scroll-top ${visible ? 'scroll-top--visible' : ''}`}
      onClick={goTop}
      aria-label="Наверх"
    >
      <span className="arrow-up">↑</span>
      <span className="scroll-label">top</span>
    </button>
  );
}