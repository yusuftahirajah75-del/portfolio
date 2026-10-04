import React from 'react';
import { GraduationCap, BookOpen, Calendar, MapPin, Award } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

export default function Education() {
  const { education } = portfolioData;

  return (
    <section id="education" className="section section-divider" aria-label="Academic Journey and Technical Training">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">
            <GraduationCap size={12} />
            <span>Academic Foundations</span>
          </span>
          <h2 className="section-title">Education & Continuous Learning</h2>
          <p className="section-subtitle">
            Rigorous undergraduate computer science study combined with continuous hands-on full-stack engineering training.
          </p>
        </div>

        <div className="timeline">
          {education.map((item, idx) => (
            <div key={idx} className="timeline-item">
              <div className="timeline-dot" aria-hidden="true"></div>
              <div className="timeline-content">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: 'var(--space-2)', marginBottom: 'var(--space-2)' }}>
                  <div>
                    <h3 className="timeline-title">{item.degree}</h3>
                    <div className="timeline-inst">{item.institution}</div>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)', fontSize: 'var(--text-xs)', color: 'var(--accent-cyan)', fontFamily: 'var(--font-mono)' }}>
                    <Calendar size={14} />
                    <span>{item.period}</span>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)', fontSize: 'var(--text-xs)', color: 'var(--text-muted)', marginBottom: 'var(--space-4)' }}>
                  <MapPin size={13} />
                  <span>{item.location}</span>
                  <span>•</span>
                  <span style={{ color: 'var(--text-secondary)' }}>{item.status}</span>
                </div>

                {item.academicNotes && (
                  <p style={{ fontSize: 'var(--text-sm)', color: 'var(--text-secondary)', marginBottom: 'var(--space-4)', lineHeight: 1.6 }}>
                    {item.academicNotes}
                  </p>
                )}

                {item.coursework && item.coursework.length > 0 && (
                  <div>
                    <div style={{ fontSize: 'var(--text-xs)', fontWeight: 600, fontFamily: 'var(--font-mono)', color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: 'var(--space-2)' }}>
                      Relevant Academic Coursework
                    </div>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--space-2)' }}>
                      {item.coursework.map((course, cIdx) => (
                        <span key={cIdx} className="tech-tag">
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
