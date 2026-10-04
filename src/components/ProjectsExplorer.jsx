import React, { useState } from 'react';
import { Layers, Github, ExternalLink, BookOpen, CheckCircle, Clock, Users, Shield, Server, ArrowRight, Code2 } from 'lucide-react';
import { portfolioData } from '../data/portfolio';
import CaseStudyModal from './CaseStudyModal';

export default function ProjectsExplorer() {
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [activeModalProject, setActiveModalProject] = useState(null);

  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'fullstack', label: 'Full-Stack Systems' },
    { id: 'backend', label: 'Backend APIs' },
    { id: 'security', label: 'Security & Trust' },
    { id: 'collaborative', label: 'Collaborative / Team' }
  ];

  const filteredProjects = portfolioData.projects.filter((p) => {
    if (selectedFilter === 'all') return true;
    return p.category === selectedFilter;
  });

  return (
    <section id="projects" className="section section-divider" aria-label="Verified Software Engineering Projects">
      <div className="container">
        {/* Header */}
        <div className="section-header">
          <span className="section-tag">
            <Layers size={12} />
            <span>Verified Portfolio</span>
          </span>
          <h2 className="section-title">Production & Full-Stack Projects</h2>
          <p className="section-subtitle">
            Every project below represents verified code written, tested, and inspected—with clearly stated personal contributions and zero fabricated claims.
          </p>
        </div>

        {/* Filter Bar */}
        <div className="filter-tabs" role="tablist" aria-label="Filter Projects">
          {filters.map((tab) => (
            <button
              key={tab.id}
              role="tab"
              aria-selected={selectedFilter === tab.id}
              className={`filter-btn ${selectedFilter === tab.id ? 'active' : ''}`}
              onClick={() => setSelectedFilter(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Projects Grid following Project Card Standard */}
        <div className="projects-grid">
          {filteredProjects.map((project) => (
            <div key={project.id} className="project-card">
              {/* Card Top: Status & Role */}
              <div className="project-card-top">
                <span className={`badge badge-status-${project.status.toLowerCase().replace(/_/g, '-')}`}>
                  {project.status}
                </span>
                <span className="project-role-badge">{project.role}</span>
              </div>

              {/* Project Name & One-Line Value Proposition */}
              <h3 className="project-card-title">{project.title}</h3>
              <p className="project-card-tagline" style={{ fontSize: 'var(--text-xs)', color: 'var(--accent-cyan)', fontWeight: 600, marginBottom: 'var(--space-3)' }}>
                {project.tagline}
              </p>

              {/* Problem & Solution Summary */}
              <p className="project-card-desc">
                {project.summary}
              </p>

              {/* Personal Contribution Box */}
              {project.caseStudy && project.caseStudy.myContribution && (
                <div style={{ background: 'var(--bg-secondary)', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-sm)', padding: 'var(--space-3) var(--space-4)', marginBottom: 'var(--space-4)', fontSize: 'var(--text-xs)' }}>
                  <div style={{ fontWeight: 700, color: 'var(--text-heading)', marginBottom: 'var(--space-1)', display: 'flex', alignItems: 'center', gap: 'var(--space-1)' }}>
                    <Code2 size={13} color="var(--accent-emerald)" />
                    <span>My Verified Contribution:</span>
                  </div>
                  <p style={{ color: 'var(--text-secondary)', margin: 0, lineHeight: 1.5 }}>
                    {Array.isArray(project.caseStudy.myContribution)
                      ? project.caseStudy.myContribution[0]
                      : project.caseStudy.myContribution}
                  </p>
                </div>
              )}

              {/* Key Features (Standard Item) */}
              {project.keyFeatures && (
                <div style={{ marginBottom: 'var(--space-4)' }}>
                  <div style={{ fontSize: '0.72rem', fontWeight: 600, fontFamily: 'var(--font-mono)', color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: 'var(--space-2)' }}>
                    Key Features
                  </div>
                  <ul className="evidence-list" style={{ fontSize: '0.78rem', marginBottom: 0 }}>
                    {project.keyFeatures.slice(0, 2).map((feat, fIdx) => (
                      <li key={fIdx} style={{ paddingLeft: '1rem' }}>{feat}</li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Technology Stack Tags */}
              <div className="project-card-tech" style={{ marginTop: 'auto', marginBottom: 'var(--space-5)' }}>
                {project.technologies.slice(0, 4).map((tech, idx) => (
                  <span key={idx} className="tech-tag">
                    {tech}
                  </span>
                ))}
                {project.technologies.length > 4 && (
                  <span className="tech-tag" style={{ opacity: 0.7 }}>
                    +{project.technologies.length - 4} more
                  </span>
                )}
              </div>

              {/* Card Bottom Actions */}
              <div className="project-card-actions">
                <button
                  onClick={() => setActiveModalProject(project)}
                  className="btn btn-primary btn-sm"
                  aria-label={`View full technical case study for ${project.title}`}
                >
                  <BookOpen size={14} />
                  <span>Case Study</span>
                </button>

                <div style={{ display: 'flex', gap: 'var(--space-2)' }}>
                  {project.repoUrl && !project.repoUrl.includes('[VERIFY') && (
                    <a
                      href={project.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-icon btn-sm"
                      aria-label={`GitHub Repository for ${project.title}`}
                      title="View GitHub Repository"
                    >
                      <Github size={14} />
                    </a>
                  )}

                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-icon btn-sm"
                      aria-label={`Live Demo for ${project.title}`}
                      title="Launch Live Application"
                    >
                      <ExternalLink size={14} />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Case Study Modal */}
      {activeModalProject && (
        <CaseStudyModal
          project={activeModalProject}
          onClose={() => setActiveModalProject(null)}
        />
      )}
    </section>
  );
}
