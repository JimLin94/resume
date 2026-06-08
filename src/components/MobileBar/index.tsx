'use client';

import { Home, User, Code2, Briefcase, Download } from 'lucide-react';
import { PDF_PATH } from '@constants/config';
import './styles.css';

const NAV_ITEMS = [
  { id: 'home', label: 'Home', Icon: Home },
  { id: 'about', label: 'About', Icon: User },
  { id: 'skills', label: 'Skills', Icon: Code2 },
  { id: 'experience', label: 'Work', Icon: Briefcase },
] as const;

interface MobileBarProps {
  activeSection: string;
  onNavClick: (id: string) => void;
}

export default function MobileBar({ activeSection, onNavClick }: MobileBarProps) {
  return (
    <nav className="mbar" aria-label="Sections">
      {NAV_ITEMS.map(({ id, label, Icon }) => (
        <a
          key={id}
          href={`#${id}`}
          className={activeSection === id ? 'active' : ''}
          aria-label={label}
          onClick={(e) => { e.preventDefault(); onNavClick(id); }}
        >
          <Icon size={21} />
          <span>{label}</span>
        </a>
      ))}
      <a href={PDF_PATH} download className="cv" aria-label="Download CV">
        <Download size={17} />
        <span>CV</span>
      </a>
    </nav>
  );
}
