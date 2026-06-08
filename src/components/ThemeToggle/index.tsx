'use client';

import { useEffect, useState } from 'react';
import { Sun, Moon } from 'lucide-react';
import './styles.css';

export default function ThemeToggle() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    const stored = document.documentElement.getAttribute('data-theme');
    if (stored === 'dark') setTheme('dark');
  }, []);

  const toggle = () => {
    const next = theme === 'dark' ? 'light' : 'dark';
    setTheme(next);
    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem('jl-theme', next);
  };

  return (
    <div className="toolbar">
      <button className="ico-btn" onClick={toggle} aria-label="Toggle theme">
        {theme === 'dark' ? <Sun size={19} /> : <Moon size={19} />}
      </button>
    </div>
  );
}
