import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import RecruiterSnapshot from './components/RecruiterSnapshot';
import About from './components/About';
import FlagshipCaseStudy from './components/FlagshipCaseStudy';
import ProjectsExplorer from './components/ProjectsExplorer';
import SkillEvidence from './components/SkillEvidence';
import EngineeringApproach from './components/EngineeringApproach';
import Experience from './components/Experience';
import Education from './components/Education';
import RecruiterQuickView from './components/RecruiterQuickView';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem('yusuf_portfolio_theme');
    if (saved) return saved;
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches
      ? 'light'
      : 'dark';
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('yusuf_portfolio_theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <div className="portfolio-app">
      {/* Navigation */}
      <Navbar currentTheme={theme} toggleTheme={toggleTheme} />

      {/* Main Landmark for Accessibility */}
      <main id="main-content">
        <Hero />
        <RecruiterSnapshot />
        <About />
        <FlagshipCaseStudy />
        <ProjectsExplorer />
        <SkillEvidence />
        <EngineeringApproach />
        <Experience />
        <Education />
        <RecruiterQuickView />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
