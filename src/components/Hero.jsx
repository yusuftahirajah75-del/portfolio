import React from 'react';
import { ArrowRight, Github, Linkedin, Mail, CheckCircle, Terminal, FileText } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

export default function Hero() {
  const { personal } = portfolioData;
  const hasResume = Boolean(personal.resumeUrl && personal.resumeUrl.trim());

  return (
    <section id="hero" className="section hero-section" aria-label="Introduction & Overview">
      <div className="container">
        <div className="hero-grid">
          {/* Left Column: Core Positioning & Identity */}
          <div className="hero-content">
            {/* Real-Time Availability Indicator */}
            <div className="hero-availability-pill" role="status">
              <span className="pulse-dot" aria-hidden="true"></span>
              <span>{personal.availability.label}</span>
            </div>

            {/* Greeting */}
            <h1 className="hero-name">
              <span className="hero-title-gradient">Hi, I'm Tahir 👋</span>
            </h1>

            {/* Professional Title & Full Name */}
            <div className="hero-role-tagline" aria-label="Professional Title">
              {personal.name} — {personal.title}
            </div>

            {/* Supporting Positioning Copy */}
            <p className="hero-bio">
              {personal.positioningStatement}
            </p>

            {/* Hero CTAs */}
            <div className="hero-actions">
              <a href="#flagship" className="btn btn-primary" aria-label="Explore Flagship Project Case Study">
                <span>View Flagship Project</span>
                <ArrowRight size={16} />
              </a>

              <a href="#projects" className="btn btn-secondary" aria-label="Explore All Verified Projects">
                <span>Explore All Projects</span>
              </a>

              {hasResume && (
                <a
                  href={personal.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline"
                  aria-label="Download Official Resume"
                >
                  <FileText size={16} />
                  <span>Download Resume</span>
                </a>
              )}

              <a href="#contact" className="btn btn-outline" aria-label="Contact Tahir">
                <span>Contact Me</span>
              </a>
            </div>

            {/* Verified External Social & Code Channels */}
            <div className="hero-socials">
              <a
                href={personal.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hero-social-link"
                aria-label="Tahir's GitHub Profile"
              >
                <Github size={16} />
                <span>GitHub</span>
              </a>

              <a
                href={personal.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hero-social-link"
                aria-label="Tahir's LinkedIn Profile"
              >
                <Linkedin size={16} />
                <span>LinkedIn</span>
              </a>

              <a
                href={`mailto:${personal.email}`}
                className="hero-social-link"
                aria-label="Send Email to Tahir"
              >
                <Mail size={16} />
                <span className="hero-email-text">{personal.email}</span>
              </a>
            </div>
          </div>

          {/* Right Column: Profile Picture & Engineering Console */}
          <div className="hero-visual-column">
            {/* Verified Profile Card with Vertical Portrait */}
            <div className="hero-profile-card">
              <div className="profile-img-container">
                <img
                  src={personal.avatarUrl}
                  alt="Yusuf Tahir Ajah - Junior Full-Stack Developer"
                  className="hero-profile-img"
                  onError={(e) => {
                    // Fallback to previous photo if ajah.png fails
                    e.target.src = '/images/yusuf-photo.jpg';
                  }}
                />
                <div className="profile-overlay-badge">
                  <span className="pulse-dot" style={{ background: '#10b981' }}></span>
                  <span>Verified Full-Stack Developer</span>
                </div>
              </div>
            </div>

            {/* Engineering Command Center Console */}
            <div className="hero-console" role="region" aria-label="Engineering Profile Specifications">
              <div className="console-header">
                <div className="console-dots" aria-hidden="true">
                  <span className="console-dot dot-red"></span>
                  <span className="console-dot dot-yellow"></span>
                  <span className="console-dot dot-green"></span>
                </div>
                <div className="console-title">
                  <Terminal size={14} />
                  <span>tahir_spec_sheet.json</span>
                </div>
              </div>

              <div className="console-body">
                <div className="console-spec-item">
                  <span className="console-label">Target Role</span>
                  <span className="console-val highlight">Junior Full-Stack Web Dev</span>
                </div>

                <div className="console-spec-item">
                  <span className="console-label">Primary Stack</span>
                  <span className="console-val mono">React + Express + PostgreSQL</span>
                </div>

                <div className="console-spec-item">
                  <span className="console-label">Core Backends</span>
                  <span className="console-val mono">Node.js, Express, Prisma, Mongo</span>
                </div>

                <div className="console-spec-item">
                  <span className="console-label">Verified Projects</span>
                  <span className="console-val highlight" style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                    <CheckCircle size={14} color="#10b981" /> 8 Production Codebases
                  </span>
                </div>

                <div className="console-spec-item">
                  <span className="console-label">Location</span>
                  <span className="console-val">Nigeria (Remote / Global)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
