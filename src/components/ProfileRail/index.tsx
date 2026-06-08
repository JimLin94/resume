'use client';

import Image from 'next/image';
import { MapPin, Mail, Clock, Download } from 'lucide-react';
import { PROFILE_IMG_PATH, PDF_PATH, LINKEDIN_URL } from '@constants/config';
import './styles.css';

const NAV_ITEMS = [
  { id: 'home', label: 'Home', idx: '01' },
  { id: 'about', label: 'About', idx: '02' },
  { id: 'skills', label: 'Skills', idx: '03' },
  { id: 'experience', label: 'Experience', idx: '04' },
];

interface ProfileRailProps {
  activeSection: string;
  onNavClick: (id: string) => void;
}

export default function ProfileRail({ activeSection, onNavClick }: ProfileRailProps) {
  return (
    <aside className="rail">
      <div className="profile">
        <div className="profile-inner">
          <Image
            className="avatar"
            src={PROFILE_IMG_PATH}
            alt="Jim Lin"
            width={92}
            height={92}
            priority
          />
          <div className="name">Jim Lin</div>
          <div className="role-pill">
            <span className="dot" />
            Front-end Developer
          </div>

          <div className="facts">
            <div className="fact">
              <MapPin size={16} />
              <span>Taipei, Taiwan</span>
            </div>
            <div className="fact">
              <Mail size={16} />
              <span>jimlin7694@gmail.com</span>
            </div>
            <div className="fact">
              <Clock size={16} />
              <span>Available for senior / staff roles</span>
            </div>
          </div>

          <nav className="rail-nav">
            {NAV_ITEMS.map(({ id, label, idx }) => (
              <a
                key={id}
                href={`#${id}`}
                className={activeSection === id ? 'active' : ''}
                onClick={(e) => { e.preventDefault(); onNavClick(id); }}
              >
                <span className="idx">{idx}</span>
                {label}
              </a>
            ))}
          </nav>

          <div className="rail-cta">
            <a className="btn btn-accent" href={PDF_PATH} download>
              <Download size={17} />
              Download CV
            </a>
            <a
              className="btn btn-ghost"
              href={LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect x="2" y="9" width="4" height="12" />
                <circle cx="4" cy="4" r="2" />
              </svg>
              Let&apos;s connect
            </a>
          </div>
        </div>
      </div>
    </aside>
  );
}
