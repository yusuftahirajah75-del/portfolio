import React from 'react';
import { ArrowUp, ShieldCheck, Heart } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer" role="contentinfo">
      <div className="container">
        <div className="footer-content">
          <div>
            <div style={{ fontWeight: 700, color: 'var(--text-heading)', marginBottom: 'var(--space-1)' }}>
              {portfolioData.personal.name}
            </div>
            <div>
              {portfolioData.personal.title} — Built with technical honesty and evidence-based engineering.
            </div>
          </div>

          <div className="footer-status">
            <span className="pulse-dot" style={{ background: 'var(--accent-emerald)', width: '6px', height: '6px' }}></span>
            <span>100% Repository-Verified Claims</span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-4)' }}>
            <span style={{ fontSize: 'var(--text-xs)', color: 'var(--text-muted)' }}>
              © {currentYear} Yusuf Tahir Ajah
            </span>
            <button
              onClick={scrollToTop}
              className="btn btn-icon btn-sm"
              aria-label="Scroll to top of page"
              title="Return to top"
            >
              <ArrowUp size={16} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
