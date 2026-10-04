import React from 'react';
import { Compass, CheckCircle2 } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

export default function EngineeringApproach() {
  const { engineeringPhilosophy } = portfolioData;

  return (
    <section id="philosophy" className="section section-divider" aria-label="Engineering Philosophy and Approach">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">
            <Compass size={12} />
            <span>Engineering Principles</span>
          </span>
          <h2 className="section-title">How I Build Software</h2>
          <p className="section-subtitle">
            These are not claims of mastery, but disciplined working principles I follow on every feature, bug fix, and architectural decision.
          </p>
        </div>

        <div className="philosophy-grid">
          {engineeringPhilosophy.map((item) => (
            <div key={item.id} className="philosophy-card">
              <span className="philosophy-num">Principle {item.number}</span>
              <h3 className="philosophy-title">{item.title}</h3>
              <p className="philosophy-desc">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
