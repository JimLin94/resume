'use client';

import { useEffect, useState, useCallback } from 'react';

import ProfileRail from '@components/ProfileRail';
import Hero from '@components/Hero';
import About from '@components/About';
import Skills from '@components/Skills';
import Experience from '@components/Experience';
import Footer from '@components/Footer';
import MobileBar from '@components/MobileBar';
import ThemeToggle from '@components/ThemeToggle';

import defaultConsole from '@utils/defaultConsole';

const SECTIONS = ['home', 'about', 'skills', 'experience'] as const;
type Section = (typeof SECTIONS)[number];

export default function App() {
  const [activeSection, setActiveSection] = useState<Section>('home');

  const handleNavClick = useCallback((id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  }, []);

  useEffect(() => {
    defaultConsole();

    const spy = () => {
      const y = window.scrollY + 140;
      let current: Section = 'home';
      for (const id of SECTIONS) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= y) current = id;
      }
      setActiveSection(current);
    };

    window.addEventListener('scroll', spy, { passive: true });
    spy();
    return () => window.removeEventListener('scroll', spy);
  }, []);

  return (
    <>
      <ThemeToggle />
      <div className="shell">
        <ProfileRail activeSection={activeSection} onNavClick={handleNavClick} />
        <main className="content">
          <section id="home">
            <Hero />
          </section>
          <section id="about">
            <About />
          </section>
          <section id="skills">
            <Skills />
          </section>
          <section id="experience">
            <Experience />
          </section>
          <Footer />
        </main>
      </div>
      <MobileBar activeSection={activeSection} onNavClick={handleNavClick} />
    </>
  );
}
