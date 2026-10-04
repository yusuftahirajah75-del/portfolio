import React, { useState } from 'react';
import {
  Shield,
  ExternalLink,
  Github,
  CheckCircle,
  AlertTriangle,
  Server,
  Database,
  Layers,
  Terminal,
  Activity,
  ChevronRight,
  Code
} from 'lucide-react';
import { portfolioData } from '../data/portfolio';

export default function FlagshipCaseStudy() {
  const project = portfolioData.projects.find((p) => p.id === 'trustos');
  const [activeTab, setActiveTab] = useState('architecture');

  if (!project) return null;
  const { caseStudy } = project;

  return (
    <section id="flagship" className="section section-divider" aria-label="Flagship Project: TrustOS Intelligence">
      <div className="container">
        {/* Section Heading */}
        <div className="section-header">
          <span className="section-tag">
            <Shield size={12} />
            <span>Flagship Technical Showcase</span>
          </span>
          <h2 className="section-title">TrustOS Intelligence</h2>
          <p className="section-subtitle">
            Africa's Digital Trust & Scam Intelligence SaaS Platform — Verified Architecture & Production Evidence.
          </p>
        </div>

        {/* Master Flagship Showcase Card */}
        <div className="flagship-card">
          {/* Top Panel: Summary, Role & Verified Live Preview */}
          <div className="flagship-top">
            <div>
              <div className="flagship-meta">
                <span className="badge badge-status-completed">
                  <CheckCircle size={12} />
                  <span>{project.status}</span>
                </span>
                <span className="project-role-badge">Role: {project.role}</span>
              </div>

              <h3 className="flagship-title">{project.title}</h3>
              <p className="flagship-tagline">{project.tagline}</p>
              <p className="flagship-desc">{project.summary}</p>

              {/* Technologies */}
              <div className="project-card-tech" style={{ marginBottom: 'var(--space-6)' }}>
                {project.technologies.map((tech, i) => (
                  <span key={i} className="tech-tag">
                    {tech}
                  </span>
                ))}
              </div>

              {/* Verified Links */}
              <div style={{ display: 'flex', gap: 'var(--space-4)', flexWrap: 'wrap' }}>
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary"
                    aria-label="Visit TrustOS Live Web Demo"
                  >
                    <span>Launch Live Demo</span>
                    <ExternalLink size={16} />
                  </a>
                )}

                {project.repoUrl && (
                  <a
                    href={project.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-secondary"
                    aria-label="View TrustOS GitHub Repository"
                  >
                    <Github size={16} />
                    <span>View Repository</span>
                  </a>
                )}
              </div>
            </div>

            {/* Live UI Screenshot Showcase */}
            <div className="flagship-preview-wrap">
              <img
                src={project.image}
                alt="TrustOS Intelligence Live Dashboard and Scan Results"
                className="flagship-img"
                onError={(e) => {
                  e.target.style.display = 'none';
                }}
              />
              <div className="flagship-preview-badge">
                <span>Verified Render Deployment</span>
              </div>
            </div>
          </div>

          {/* Interactive Case Study Navigation Tabs */}
          <div style={{ background: 'var(--bg-tertiary)', padding: 'var(--space-3) var(--space-8)', borderBottom: '1px solid var(--border-default)', display: 'flex', gap: 'var(--space-3)', flexWrap: 'wrap' }}>
            <button
              onClick={() => setActiveTab('architecture')}
              className={`filter-btn ${activeTab === 'architecture' ? 'active' : ''}`}
            >
              System Architecture & Flow
            </button>
            <button
              onClick={() => setActiveTab('contribution')}
              className={`filter-btn ${activeTab === 'contribution' ? 'active' : ''}`}
            >
              My Engineering Contributions
            </button>
            <button
              onClick={() => setActiveTab('challenges')}
              className={`filter-btn ${activeTab === 'challenges' ? 'active' : ''}`}
            >
              Debugging & Challenges
            </button>
            <button
              onClick={() => setActiveTab('tests')}
              className={`filter-btn ${activeTab === 'tests' ? 'active' : ''}`}
            >
              Automated Tests & Evidence
            </button>
            <button
              onClick={() => setActiveTab('roadmap')}
              className={`filter-btn ${activeTab === 'roadmap' ? 'active' : ''}`}
            >
              Implemented vs. Planned
            </button>
          </div>

          {/* Tab 1: Architecture Diagram & Flow */}
          {activeTab === 'architecture' && (
            <div className="architecture-box">
              <div className="arch-header">
                <div>
                  <h4 className="arch-title">Multi-Signal Trust Engine Architecture</h4>
                  <p style={{ fontSize: 'var(--text-xs)', color: 'var(--text-secondary)', margin: 0 }}>
                    How verification requests flow from client applications to persistent relational records.
                  </p>
                </div>
                <span className="badge badge-status-prototype">High-Density Pipeline</span>
              </div>

              <div className="arch-flow-grid">
                {caseStudy.architecture.flow.map((node) => (
                  <div key={node.step} className="arch-node">
                    <span className="arch-node-step">Stage {node.step}</span>
                    <span className="arch-node-name">{node.name}</span>
                    <span className="arch-node-desc">{node.desc}</span>
                  </div>
                ))}
              </div>

              <div style={{ marginTop: 'var(--space-6)', background: 'var(--code-bg)', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-md)', padding: 'var(--space-4)', fontSize: 'var(--text-xs)', fontFamily: 'var(--font-mono)', color: 'var(--text-secondary)' }}>
                <span style={{ color: 'var(--accent-cyan)' }}>// Scoring Pipeline:</span> score = riskScorer.evaluate([urlSignals, emailSignals, phoneSignals, regionalScamDB, tenantBaselines])
              </div>
            </div>
          )}

          {/* Tab 2: My Contributions */}
          {activeTab === 'contribution' && (
            <div className="flagship-tabs-content">
              <h4 style={{ fontSize: 'var(--text-lg)', fontWeight: 700, color: 'var(--text-heading)', marginBottom: 'var(--space-4)' }}>
                What I Personally Engineered
              </h4>
              <div className="evidence-grid">
                <div className="evidence-card">
                  <h5 className="evidence-card-title">
                    <Server size={18} color="var(--accent-cyan)" />
                    <span>Backend & Scoring Engine</span>
                  </h5>
                  <ul className="evidence-list">
                    <li>Designed modular analyzer files (`urlAnalyzer.js`, `emailAnalyzer.js`, `phoneAnalyzer.js`, `regionalIntelligence.js`).</li>
                    <li>Built composite risk scoring algorithm computing scores from 0 to 100 with dynamic threat levels (Low, Moderate, High, Severe).</li>
                    <li>Configured API key generation and hashed verification using Node.js crypto and bcrypt.</li>
                  </ul>
                </div>

                <div className="evidence-card">
                  <h5 className="evidence-card-title">
                    <Database size={18} color="var(--accent-emerald)" />
                    <span>PostgreSQL & Security</span>
                  </h5>
                  <ul className="evidence-list">
                    <li>Authored 6 sequential schema migrations and seed scripts for regional fraud vectors and test fixtures.</li>
                    <li>Secured endpoints using Helmet HTTP headers, IP-based express-rate-limiters, and Zod body validation.</li>
                    <li>Integrated JWT cookie authentication for web portal users alongside bearer tokens for developer API clients.</li>
                  </ul>
                </div>
              </div>
            </div>
          )}

          {/* Tab 3: Debugging & Challenges */}
          {activeTab === 'challenges' && (
            <div className="flagship-tabs-content">
              <h4 style={{ fontSize: 'var(--text-lg)', fontWeight: 700, color: 'var(--text-heading)', marginBottom: 'var(--space-4)' }}>
                Real Technical Challenges & Debugging
              </h4>
              <div className="evidence-grid">
                {caseStudy.engineeringChallenges.map((item, idx) => (
                  <div key={idx} className="evidence-card">
                    <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)', color: 'var(--accent-amber)', fontWeight: 600, fontSize: 'var(--text-sm)', marginBottom: 'var(--space-2)' }}>
                      <AlertTriangle size={16} />
                      <span>Technical Hurdle</span>
                    </div>
                    <p style={{ fontSize: 'var(--text-sm)', color: 'var(--text-primary)', fontWeight: 600, marginBottom: 'var(--space-3)' }}>
                      {item.challenge}
                    </p>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)', color: 'var(--accent-emerald)', fontWeight: 600, fontSize: 'var(--text-sm)', marginBottom: 'var(--space-2)' }}>
                      <CheckCircle size={16} />
                      <span>Implemented Solution</span>
                    </div>
                    <p style={{ fontSize: 'var(--text-sm)', color: 'var(--text-secondary)' }}>
                      {item.solution}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Tab 4: Automated Tests & Testing Evidence */}
          {activeTab === 'tests' && (
            <div className="flagship-tabs-content">
              <h4 style={{ fontSize: 'var(--text-lg)', fontWeight: 700, color: 'var(--text-heading)', marginBottom: 'var(--space-4)' }}>
                Automated Test Suite Verification
              </h4>
              <div className="evidence-card">
                <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)', marginBottom: 'var(--space-3)', color: 'var(--accent-cyan)' }}>
                  <Terminal size={18} />
                  <span style={{ fontWeight: 700, fontSize: 'var(--text-sm)' }}>Jest & Supertest Test Artifacts</span>
                </div>
                <p style={{ fontSize: 'var(--text-sm)', color: 'var(--text-secondary)', marginBottom: 'var(--space-4)' }}>
                  TrustOS includes both unit tests for scoring heuristics and integration tests for multi-tenant isolation:
                </p>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 'var(--space-3)' }}>
                  {caseStudy.testingEvidence.map((testStr, i) => (
                    <div key={i} style={{ background: 'var(--code-bg)', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-sm)', padding: 'var(--space-3)', fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: 'var(--text-primary)' }}>
                      {testStr}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Tab 5: Implemented vs Planned Roadmap */}
          {activeTab === 'roadmap' && (
            <div className="flagship-tabs-content">
              <h4 style={{ fontSize: 'var(--text-lg)', fontWeight: 700, color: 'var(--text-heading)', marginBottom: 'var(--space-4)' }}>
                Truthful Distinction: Implemented vs. Planned
              </h4>
              <div className="evidence-grid">
                <div className="evidence-card" style={{ borderLeft: '3px solid var(--accent-emerald)' }}>
                  <h5 className="evidence-card-title" style={{ color: 'var(--accent-emerald)' }}>
                    <CheckCircle size={18} />
                    <span>Implemented Today (Live & Verified)</span>
                  </h5>
                  <ul className="evidence-list">
                    {caseStudy.implementedVsPlanned.implemented.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                </div>

                <div className="evidence-card" style={{ borderLeft: '3px solid var(--accent-amber)' }}>
                  <h5 className="evidence-card-title" style={{ color: 'var(--accent-amber)' }}>
                    <Activity size={18} />
                    <span>Future Roadmap (Planned)</span>
                  </h5>
                  <ul className="evidence-list">
                    {caseStudy.implementedVsPlanned.planned.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
