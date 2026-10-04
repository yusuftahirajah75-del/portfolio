import React from 'react';
import { User, Sparkles, BookOpen, Target, CheckCircle2, ShieldCheck, Code, Award, Server } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

export default function About() {
  const { about, personal } = portfolioData;

  return (
    <section id="about" className="section section-divider" aria-label="About Yusuf Tahir Ajah">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">
            <User size={12} />
            <span>Engineering Background</span>
          </span>
          <h2 className="section-title">Who I Am & How I Build</h2>
          <p className="section-subtitle">
            A developer who values clear system architecture, thoughtful debugging, and defensive engineering practices.
          </p>
        </div>

        <div className="hero-grid" style={{ alignItems: 'start' }}>
          {/* Left Column: Narrative paragraphs */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
            {about.summary.map((paragraph, idx) => (
              <p key={idx} style={{ fontSize: 'var(--text-base)', lineHeight: 1.7, color: 'var(--text-secondary)' }}>
                {paragraph}
              </p>
            ))}

            <div style={{ marginTop: 'var(--space-4)', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 'var(--space-4)' }}>
              <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-md)', padding: 'var(--space-4)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)', color: 'var(--accent-cyan)', fontWeight: 600, fontSize: 'var(--text-sm)', marginBottom: 'var(--space-2)' }}>
                  <BookOpen size={16} />
                  <span>Currently Learning</span>
                </div>
                <p style={{ fontSize: 'var(--text-xs)', color: 'var(--text-secondary)', margin: 0, lineHeight: 1.5 }}>
                  {about.currentLearning}
                </p>
              </div>

              <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-md)', padding: 'var(--space-4)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)', color: 'var(--accent-emerald)', fontWeight: 600, fontSize: 'var(--text-sm)', marginBottom: 'var(--space-2)' }}>
                  <Target size={16} />
                  <span>Career Objective</span>
                </div>
                <p style={{ fontSize: 'var(--text-xs)', color: 'var(--text-secondary)', margin: 0, lineHeight: 1.5 }}>
                  {about.careerGoal}
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Verified Engineering Competencies & Fact Sheet */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-6)' }}>
            {/* Core Competencies Box */}
            <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border-default)', borderRadius: 'var(--radius-lg)', padding: 'var(--space-6)', boxShadow: 'var(--shadow-sm)' }}>
              <div style={{ fontSize: 'var(--text-base)', fontWeight: 700, color: 'var(--text-heading)', marginBottom: 'var(--space-4)', display: 'flex', alignItems: 'center', gap: 'var(--space-2)' }}>
                <ShieldCheck size={18} color="var(--accent-cyan)" />
                <span>Verified Full-Stack Capabilities</span>
              </div>
              <ul className="evidence-list" style={{ fontSize: 'var(--text-sm)' }}>
                <li><strong>Full-Stack Architecture:</strong> React SPAs paired with production-ready Express APIs (TypeScript & JavaScript).</li>
                <li><strong>Relational DB Engineering:</strong> Schema normalization, migrations (Prisma & raw SQL), and connection pooling in PostgreSQL.</li>
                <li><strong>Defensive Security:</strong> Boundary validation via Zod/Joi, bcrypt password hashing, and HTTP-only cookie JWT auth.</li>
                <li><strong>Payment & Integration APIs:</strong> Cryptographic HMAC Paystack webhook listeners and CSV settlement reconciliation.</li>
                <li><strong>Collaborative Git Hygiene:</strong> Branch conventions, PR code reviews, and isolated feature deliverables.</li>
              </ul>
            </div>

            {/* Quick Fact Sheet */}
            <div style={{ background: 'var(--bg-secondary)', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-lg)', padding: 'var(--space-5)' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-4)' }}>
                <div>
                  <div style={{ fontSize: 'var(--text-xs)', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>UNIVERSITY</div>
                  <div style={{ fontSize: 'var(--text-sm)', fontWeight: 700, color: 'var(--text-heading)' }}>FUDMA</div>
                  <div style={{ fontSize: 'var(--text-xs)', color: 'var(--text-secondary)' }}>Computer Science ('28)</div>
                </div>
                <div>
                  <div style={{ fontSize: 'var(--text-xs)', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>SPECIALIZATION</div>
                  <div style={{ fontSize: 'var(--text-sm)', fontWeight: 700, color: 'var(--accent-cyan)' }}>Full-Stack Web</div>
                  <div style={{ fontSize: 'var(--text-xs)', color: 'var(--text-secondary)' }}>Backend & Relational DBs</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
