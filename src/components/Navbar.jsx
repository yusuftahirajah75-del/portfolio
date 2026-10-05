import React, { useState, useEffect } from 'react';
import { Sun, Moon, Menu, X, FileText, Download } from 'lucide-react';
import { portfolioData } from '../data/portfolio';
import TMonogram from './TMonogram';

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

  // Keyboard accessibility: Close mobile drawer on Escape key press
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isMenuOpen]);

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
        {/* Brand Logo with T Monogram */}
        <a href="#hero" className="nav-brand" aria-label="Tahir - Home">
          <div className="brand-icon-wrapper" aria-hidden="true">
            <TMonogram size={36} />
          </div>
          <div className="brand-text">
            <span className="brand-name">Tahir</span>
            <span className="brand-role">Junior Full-Stack Dev</span>
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

        {/* Actions: Theme Toggle, Resume & Mobile Hamburger Button */}
        <div className="nav-actions">
          {hasResume && (
            <a
              href={portfolioData.personal.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline btn-sm nav-resume-desktop"
              aria-label="View Tahir's Resume in a new browser tab"
              title="View Tahir's Resume"
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
            aria-controls="mobile-nav-drawer"
          >
            {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Backdrop */}
      {isMenuOpen && (
        <div
          className="mobile-drawer-backdrop"
          onClick={() => setIsMenuOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Mobile Navigation Drawer */}
      {isMenuOpen && (
        <div
          id="mobile-nav-drawer"
          className="mobile-drawer"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile Navigation Menu"
        >
          <div className="mobile-drawer-links">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                className={`mobile-nav-link ${activeSection === link.id ? 'active' : ''}`}
                onClick={handleLinkClick}
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="mobile-drawer-footer">
            {hasResume ? (
              <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-2)' }}>
                <a
                  href={portfolioData.personal.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline btn-sm mobile-resume-btn"
                  onClick={handleLinkClick}
                  aria-label="View Tahir's Resume in a new browser tab"
                >
                  <FileText size={16} />
                  <span>View Resume</span>
                </a>
                <a
                  href={portfolioData.personal.resumeUrl}
                  download="Yusuf_Tahir_Ajah_Resume.pdf"
                  className="btn btn-primary btn-sm mobile-resume-btn"
                  onClick={handleLinkClick}
                  aria-label="Download Tahir's Resume PDF"
                >
                  <Download size={16} />
                  <span>Download Resume</span>
                </a>
              </div>
            ) : (
              <a
                href="#contact"
                className="btn btn-secondary btn-sm mobile-resume-btn"
                onClick={handleLinkClick}
              >
                Request Resume via Email
              </a>
            )}
          </div>
        </div>
      )}
    </header>
  );
}
