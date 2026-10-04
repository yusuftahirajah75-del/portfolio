import React, { useState } from 'react';
import { Cpu, CheckCircle, ArrowRight, ExternalLink, Code2 } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

export default function SkillEvidence() {
  const [selectedSkill, setSelectedSkill] = useState(null);

  // Map project IDs to Project Objects
  const getProject = (id) => portfolioData.projects.find((p) => p.id === id);

  return (
    <section id="skills" className="section section-divider" aria-label="Technical Skills and Evidence Mapping">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">
            <Cpu size={12} />
            <span>Evidence-Driven Capabilities</span>
          </span>
          <h2 className="section-title">Technical Stack Connected to Real Code</h2>
          <p className="section-subtitle">
            No arbitrary percentages or fake mastery bars. Click any skill below to inspect the verified repositories and production systems where it was actively written and tested.
          </p>
        </div>

        <div className="skills-container">
          {/* Left Column: Categorized Skill Matrix */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-6)' }}>
            {portfolioData.skillCategories.map((cat, i) => (
              <div key={i} className="skills-category-card">
                <h3 className="skills-cat-title">
                  <Code2 size={16} color="var(--accent-cyan)" />
                  <span>{cat.category}</span>
                </h3>

                <div className="skills-pills">
                  {cat.skills.map((skill, sIdx) => {
                    const isSelected = selectedSkill && selectedSkill.name === skill.name;
                    return (
                      <button
                        key={sIdx}
                        onClick={() => setSelectedSkill(skill)}
                        className={`skill-interactive-btn ${isSelected ? 'active' : ''}`}
                        aria-pressed={isSelected}
                      >
                        <span>{skill.name}</span>
                        <span style={{ fontSize: '0.68rem', opacity: 0.6, background: 'var(--bg-tertiary)', padding: '1px 5px', borderRadius: '4px' }}>
                          {skill.usedIn.length}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>

          {/* Right Column: Dynamic Evidence Inspector Box */}
          <div>
            <div
              style={{
                background: 'var(--bg-card)',
                border: '1px solid var(--border-default)',
                borderRadius: 'var(--radius-lg)',
                padding: 'var(--space-6)',
                position: 'sticky',
                top: '90px',
                boxShadow: 'var(--shadow-md)'
              }}
            >
              {selectedSkill ? (
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 'var(--space-3)' }}>
                    <span className="badge badge-status-completed">Active Inspection</span>
                    <span style={{ fontSize: 'var(--text-xs)', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
                      {selectedSkill.usedIn.length} Verified Repositories
                    </span>
                  </div>

                  <h3 style={{ fontSize: 'var(--text-xl)', fontWeight: 800, color: 'var(--accent-cyan)', marginBottom: 'var(--space-2)' }}>
                    {selectedSkill.name}
                  </h3>
                  <p style={{ fontSize: 'var(--text-xs)', color: 'var(--text-secondary)', marginBottom: 'var(--space-5)' }}>
                    This technology was utilized in the following inspected codebases:
                  </p>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
                    {selectedSkill.usedIn.map((projId) => {
                      const proj = getProject(projId);
                      if (!proj) return null;
                      return (
                        <div
                          key={projId}
                          style={{
                            background: 'var(--bg-secondary)',
                            border: '1px solid var(--border-subtle)',
                            borderRadius: 'var(--radius-md)',
                            padding: 'var(--space-4)'
                          }}
                        >
                          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 'var(--space-1)' }}>
                            <span style={{ fontWeight: 700, fontSize: 'var(--text-sm)', color: 'var(--text-heading)' }}>
                              {proj.title}
                            </span>
                            <span className={`badge badge-status-${proj.status.toLowerCase().replace(/_/g, '-')}`} style={{ fontSize: '0.65rem' }}>
                              {proj.status}
                            </span>
                          </div>
                          <p style={{ fontSize: 'var(--text-xs)', color: 'var(--text-secondary)', marginBottom: 'var(--space-3)' }}>
                            {proj.summary}
                          </p>
                          <div style={{ display: 'flex', gap: 'var(--space-3)' }}>
                            {proj.repoUrl && !proj.repoUrl.includes('[VERIFY') && (
                              <a
                                href={proj.repoUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{ fontSize: 'var(--text-xs)', color: 'var(--accent-cyan)', display: 'inline-flex', alignItems: 'center', gap: '4px' }}
                              >
                                <span>Inspect Repo</span>
                                <ExternalLink size={12} />
                              </a>
                            )}
                            {proj.liveUrl && (
                              <a
                                href={proj.liveUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{ fontSize: 'var(--text-xs)', color: 'var(--accent-emerald)', display: 'inline-flex', alignItems: 'center', gap: '4px' }}
                              >
                                <span>Open Live Demo</span>
                                <ExternalLink size={12} />
                              </a>
                            )}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              ) : (
                <div style={{ textAlign: 'center', padding: 'var(--space-8) var(--space-4)' }}>
                  <Cpu size={40} color="var(--accent-cyan)" style={{ margin: '0 auto var(--space-3) auto', opacity: 0.7 }} />
                  <h4 style={{ fontSize: 'var(--text-base)', fontWeight: 700, color: 'var(--text-heading)', marginBottom: 'var(--space-2)' }}>
                    Interactive Skill Inspector
                  </h4>
                  <p style={{ fontSize: 'var(--text-xs)', color: 'var(--text-secondary)', maxWidth: '300px', margin: '0 auto' }}>
                    Select any skill or tool from the left matrix to reveal the verified projects where it is implemented in actual code.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
