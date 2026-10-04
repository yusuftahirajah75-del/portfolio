import React, { useEffect } from 'react';
import { X, ExternalLink, Github, CheckCircle2, AlertCircle, GitBranch, Layers, Server, Shield, Code2, Cpu } from 'lucide-react';

export default function CaseStudyModal({ project, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [onClose]);

  if (!project) return null;
  const { caseStudy } = project;

  return (
    <div className="modal-backdrop" onClick={onClose} role="dialog" aria-modal="true" aria-labelledby="modal-title">
      <div className="modal-dialog" onClick={(e) => e.stopPropagation()}>
        {/* Header */}
        <div className="modal-header">
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)', marginBottom: 'var(--space-1)' }}>
              <span className={`badge badge-status-${project.status.toLowerCase().replace(/_/g, '-')}`}>
                {project.status}
              </span>
              <span style={{ fontSize: 'var(--text-xs)', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
                Role: {project.role}
              </span>
            </div>
            <h3 id="modal-title" style={{ fontSize: 'var(--text-xl)', fontWeight: 800, color: 'var(--text-heading)' }}>
              {project.title}
            </h3>
          </div>
          <button onClick={onClose} className="modal-close-btn" aria-label="Close Case Study Modal">
            <X size={20} />
          </button>
        </div>

        {/* Modal Body */}
        <div className="modal-body">
          {/* One-Line Value Proposition & Summary */}
          <div>
            <p style={{ fontStyle: 'italic', color: 'var(--accent-cyan)', fontSize: 'var(--text-sm)', fontWeight: 600, marginBottom: 'var(--space-2)' }}>
              "{project.tagline}"
            </p>
            <p style={{ fontSize: 'var(--text-sm)', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
              {project.summary}
            </p>
          </div>

          {/* Key Features Section */}
          {project.keyFeatures && project.keyFeatures.length > 0 && (
            <div style={{ background: 'var(--bg-secondary)', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-md)', padding: 'var(--space-4)' }}>
              <div style={{ fontSize: 'var(--text-xs)', fontWeight: 700, fontFamily: 'var(--font-mono)', color: 'var(--text-heading)', textTransform: 'uppercase', marginBottom: 'var(--space-2)' }}>
                Verified Key Features
              </div>
              <ul className="evidence-list" style={{ fontSize: 'var(--text-xs)', marginBottom: 0 }}>
                {project.keyFeatures.map((feat, fIdx) => (
                  <li key={fIdx}>{feat}</li>
                ))}
              </ul>
            </div>
          )}

          {/* Problem & Solution Context */}
          {caseStudy && (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 'var(--space-4)' }}>
              <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-md)', padding: 'var(--space-4)' }}>
                <h4 style={{ fontSize: 'var(--text-sm)', fontWeight: 700, color: 'var(--text-heading)', marginBottom: 'var(--space-2)', display: 'flex', alignItems: 'center', gap: 'var(--space-2)' }}>
                  <AlertCircle size={16} color="var(--accent-amber)" />
                  <span>The Real Problem</span>
                </h4>
                <p style={{ fontSize: 'var(--text-xs)', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                  {caseStudy.problem}
                </p>
              </div>

              <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-md)', padding: 'var(--space-4)' }}>
                <h4 style={{ fontSize: 'var(--text-sm)', fontWeight: 700, color: 'var(--text-heading)', marginBottom: 'var(--space-2)', display: 'flex', alignItems: 'center', gap: 'var(--space-2)' }}>
                  <CheckCircle2 size={16} color="var(--accent-emerald)" />
                  <span>The Engineered Solution</span>
                </h4>
                <p style={{ fontSize: 'var(--text-xs)', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                  {caseStudy.solution}
                </p>
              </div>
            </div>
          )}

          {/* Collaborative Responsibility Breakdown (if applicable) */}
          {caseStudy && caseStudy.teamVsIndividual && (
            <div style={{ background: 'var(--bg-secondary)', border: '1px solid var(--border-default)', borderRadius: 'var(--radius-md)', padding: 'var(--space-5)' }}>
              <h4 style={{ fontSize: 'var(--text-sm)', fontWeight: 700, color: 'var(--text-heading)', marginBottom: 'var(--space-3)', display: 'flex', alignItems: 'center', gap: 'var(--space-2)' }}>
                <GitBranch size={16} color="var(--accent-cyan)" />
                <span>Collaborative Responsibility Breakdown</span>
              </h4>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 'var(--space-4)' }}>
                <div>
                  <div style={{ fontSize: 'var(--text-xs)', fontWeight: 700, color: 'var(--accent-cyan)', marginBottom: 'var(--space-1)' }}>
                    My Verified Modules (Yusuf)
                  </div>
                  <p style={{ fontSize: 'var(--text-xs)', color: 'var(--text-secondary)', margin: 0 }}>
                    {caseStudy.teamVsIndividual.myResponsibility}
                  </p>
                </div>
                <div>
                  <div style={{ fontSize: 'var(--text-xs)', fontWeight: 700, color: 'var(--text-muted)', marginBottom: 'var(--space-1)' }}>
                    Team Shared Modules
                  </div>
                  <p style={{ fontSize: 'var(--text-xs)', color: 'var(--text-secondary)', margin: 0 }}>
                    {caseStudy.teamVsIndividual.teamResponsibility}
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* My Personal Contribution */}
          {caseStudy && caseStudy.myContribution && (
            <div>
              <h4 style={{ fontSize: 'var(--text-sm)', fontWeight: 700, color: 'var(--text-heading)', marginBottom: 'var(--space-3)', display: 'flex', alignItems: 'center', gap: 'var(--space-2)' }}>
                <Server size={16} color="var(--accent-cyan)" />
                <span>My Specific Implementation Tasks</span>
              </h4>
              <ul className="evidence-list" style={{ fontSize: 'var(--text-xs)' }}>
                {Array.isArray(caseStudy.myContribution) ? (
                  caseStudy.myContribution.map((item, i) => <li key={i}>{item}</li>)
                ) : (
                  <li>{caseStudy.myContribution}</li>
                )}
              </ul>
            </div>
          )}

          {/* Engineering Challenges & Solutions */}
          {caseStudy && caseStudy.engineeringChallenges && caseStudy.engineeringChallenges.length > 0 && (
            <div>
              <h4 style={{ fontSize: 'var(--text-sm)', fontWeight: 700, color: 'var(--text-heading)', marginBottom: 'var(--space-3)', display: 'flex', alignItems: 'center', gap: 'var(--space-2)' }}>
                <Cpu size={16} color="var(--accent-amber)" />
                <span>Key Technical Challenges & How I Solved Them</span>
              </h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
                {caseStudy.engineeringChallenges.map((ch, idx) => (
                  <div key={idx} style={{ background: 'var(--code-bg)', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-sm)', padding: 'var(--space-3)' }}>
                    <div style={{ fontSize: 'var(--text-xs)', fontWeight: 700, color: 'var(--accent-amber)', marginBottom: 'var(--space-1)' }}>
                      Challenge: {ch.challenge}
                    </div>
                    <div style={{ fontSize: 'var(--text-xs)', color: 'var(--text-secondary)' }}>
                      Solution: {ch.solution}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Tech Stack Pills */}
          <div>
            <div style={{ fontSize: 'var(--text-xs)', fontWeight: 600, fontFamily: 'var(--font-mono)', color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: 'var(--space-2)' }}>
              Verified Technology Stack
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--space-2)' }}>
              {project.technologies.map((t, idx) => (
                <span key={idx} className="tech-tag">{t}</span>
              ))}
            </div>
          </div>

          {/* Footer Actions */}
          <div style={{ display: 'flex', gap: 'var(--space-4)', paddingTop: 'var(--space-4)', borderTop: '1px solid var(--border-subtle)', flexWrap: 'wrap' }}>
            {project.liveUrl ? (
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-sm">
                <span>View Live Deployment</span>
                <ExternalLink size={14} />
              </a>
            ) : null}

            {project.repoUrl && !project.repoUrl.includes('[VERIFY') ? (
              <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" className="btn btn-secondary btn-sm">
                <Github size={14} />
                <span>View GitHub Repository</span>
              </a>
            ) : null}

            <button onClick={onClose} className="btn btn-outline btn-sm">
              Close Details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
