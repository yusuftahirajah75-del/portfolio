import React from 'react';
import { CheckCircle2, Code2, Search, GitBranch, ShieldCheck, GraduationCap } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

export default function RecruiterQuickView() {
  const { whyConsiderMe } = portfolioData;

  const getIcon = (name) => {
    switch (name) {
      case 'Code2': return <Code2 size={24} color="var(--accent-cyan)" />;
      case 'Search': return <Search size={24} color="var(--accent-emerald)" />;
      case 'GitBranch': return <GitBranch size={24} color="var(--accent-amber)" />;
      case 'ShieldCheck': return <ShieldCheck size={24} color="var(--accent-violet)" />;
      case 'GraduationCap': return <GraduationCap size={24} color="var(--accent-rose)" />;
      default: return <CheckCircle2 size={24} color="var(--accent-cyan)" />;
    }
  };

  return (
    <section className="section section-divider" aria-label="Recruiter Evaluation Summary">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">
            <CheckCircle2 size={12} />
            <span>Recruiter Quick View</span>
          </span>
          <h2 className="section-title">Why Consider Me for Your Engineering Team?</h2>
          <p className="section-subtitle">
            A concise summary of my software engineering capabilities, work habits, and team readiness.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 'var(--space-6)' }}>
          {whyConsiderMe.map((item, idx) => (
            <div
              key={idx}
              style={{
                background: 'var(--bg-card)',
                border: '1px solid var(--border-default)',
                borderRadius: 'var(--radius-lg)',
                padding: 'var(--space-6)',
                display: 'flex',
                flexDirection: 'column',
                gap: 'var(--space-3)'
              }}
            >
              <div style={{ width: '48px', height: '48px', borderRadius: 'var(--radius-md)', background: 'var(--bg-secondary)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                {getIcon(item.icon)}
              </div>
              <h3 style={{ fontSize: 'var(--text-lg)', fontWeight: 700, color: 'var(--text-heading)' }}>
                {item.title}
              </h3>
              <p style={{ fontSize: 'var(--text-sm)', color: 'var(--text-secondary)', lineHeight: 1.6, margin: 0 }}>
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
