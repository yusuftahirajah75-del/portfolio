import React, { useState, useEffect } from 'react';
import { Sun, Moon, Menu, X, Shield, FileText } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

export default function Navbar({ currentTheme, toggleTheme }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  // Track active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'flagship', 'projects', 'skills', 'philosophy', 'education', 'contact'];
      const scrollPos = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#about', label: 'About', id: 'about' },
    { href: '#flagship', label: 'Flagship', id: 'flagship' },
    { href: '#projects', label: 'Projects', id: 'projects' },
    { href: '#skills', label: 'Skills & Evidence', id: 'skills' },
    { href: '#philosophy', label: 'How I Build', id: 'philosophy' },
    { href: '#education', label: 'Education', id: 'education' },
    { href: '#contact', label: 'Contact', id: 'contact' }
  ];

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  const hasResume = Boolean(portfolioData.personal.resumeUrl && portfolioData.personal.resumeUrl.trim());

  return (
    <header className="navbar" role="banner">
      <div className="container nav-container">
        {/* Brand Logo */}
        <a href="#hero" className="nav-brand" aria-label="Yusuf Tahir Ajah - Home">
          <div className="brand-icon" aria-hidden="true">
            <Shield size={20} />
          </div>
          <div className="brand-text">
            <span className="brand-name">{portfolioData.personal.name}</span>
            <span className="brand-role">{portfolioData.personal.title}</span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="nav-links" aria-label="Main Navigation">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              className={`nav-link ${activeSection === link.id ? 'active' : ''}`}
              aria-current={activeSection === link.id ? 'true' : undefined}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Actions: Theme Toggle, Resume & Mobile Button */}
        <div className="nav-actions">
          {hasResume && (
            <a
              href={portfolioData.personal.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline btn-sm"
              aria-label="Download Yusuf's Resume"
            >
              <FileText size={14} />
              <span>Resume</span>
            </a>
          )}

          <button
            onClick={toggleTheme}
            className="theme-toggle-btn"
            aria-label={`Switch to ${currentTheme === 'dark' ? 'light' : 'dark'} mode`}
            title={`Switch to ${currentTheme === 'dark' ? 'light' : 'dark'} mode`}
          >
            {currentTheme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="mobile-menu-btn"
            aria-label={isMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isMenuOpen && (
        <div className="mobile-drawer" role="navigation" aria-label="Mobile Navigation">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              className={`nav-link ${activeSection === link.id ? 'active' : ''}`}
              onClick={handleLinkClick}
            >
              {link.label}
            </a>
          ))}
          {hasResume ? (
            <a
              href={portfolioData.personal.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary btn-sm"
              onClick={handleLinkClick}
            >
              <FileText size={14} />
              <span>Download Resume</span>
            </a>
          ) : (
            <a
              href="#contact"
              className="btn btn-secondary btn-sm"
              onClick={handleLinkClick}
            >
              Request Resume via Email
            </a>
          )}
        </div>
      )}
    </header>
  );
}
