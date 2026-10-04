import React from 'react';
import { Briefcase, Calendar, MapPin, CheckCircle } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

export default function Experience() {
  const { experience } = portfolioData;

  return (
    <section id="experience" className="section section-divider" aria-label="Selected Engineering Experience">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">
            <Briefcase size={12} />
            <span>Practical Background</span>
          </span>
          <h2 className="section-title">Selected Engineering Experience</h2>
          <p className="section-subtitle">
            Truthfully categorized hands-on experience spanning product initiatives, collaborative team repos, and open-source contributions.
          </p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-8)' }}>
          {experience.map((exp, idx) => (
            <div
              key={idx}
              style={{
                background: 'var(--bg-card)',
                border: '1px solid var(--border-default)',
                borderRadius: 'var(--radius-lg)',
                padding: 'var(--space-8)',
                boxShadow: 'var(--shadow-sm)'
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: 'var(--space-4)', marginBottom: 'var(--space-4)' }}>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)', marginBottom: 'var(--space-1)' }}>
                    <h3 style={{ fontSize: 'var(--text-xl)', fontWeight: 800, color: 'var(--text-heading)' }}>
                      {exp.role}
                    </h3>
                    <span className="badge badge-status-completed" style={{ fontSize: '0.68rem' }}>
                      {exp.type}
                    </span>
                  </div>
                  <div style={{ fontSize: 'var(--text-base)', color: 'var(--accent-cyan)', fontWeight: 600 }}>
                    {exp.organization}
                  </div>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 'var(--space-1)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)', fontSize: 'var(--text-xs)', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
                    <Calendar size={14} />
                    <span>{exp.period}</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)', fontSize: 'var(--text-xs)', color: 'var(--text-muted)' }}>
                    <MapPin size={14} />
                    <span>{exp.location}</span>
                  </div>
                </div>
              </div>

              <p style={{ fontSize: 'var(--text-sm)', color: 'var(--text-secondary)', marginBottom: 'var(--space-5)', lineHeight: 1.6 }}>
                {exp.description}
              </p>

              <div>
                <h4 style={{ fontSize: 'var(--text-xs)', fontWeight: 700, fontFamily: 'var(--font-mono)', color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: 'var(--space-3)' }}>
                  Key Engineering Deliverables
                </h4>
                <ul className="evidence-list" style={{ fontSize: 'var(--text-sm)' }}>
                  {exp.highlights.map((h, hIdx) => (
                    <li key={hIdx}>{h}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
