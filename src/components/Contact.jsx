import React, { useState } from 'react';
import { Mail, Github, Linkedin, Send, CheckCircle2, AlertCircle, ArrowUpRight, Copy, Check } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

export default function Contact() {
  const { contact } = portfolioData;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [status, setStatus] = useState({
    submitted: false,
    error: '',
    copied: false
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(contact.email);
    setStatus({ ...status, copied: true });
    setTimeout(() => {
      setStatus((prev) => ({ ...prev, copied: false }));
    }, 3000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic Validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatus({ ...status, error: 'Please fill in all required fields.' });
      return;
    }

    // Honest direct action: generate mailto link with prefilled content
    const mailtoSubject = encodeURIComponent(
      formData.subject.trim() || `Portfolio Inquiry from ${formData.name}`
    );
    const mailtoBody = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );

    const mailtoUrl = `mailto:${contact.email}?subject=${mailtoSubject}&body=${mailtoBody}`;
    window.location.href = mailtoUrl;

    setStatus({
      submitted: true,
      error: '',
      copied: false
    });
  };

  return (
    <section id="contact" className="section section-divider" aria-label="Contact Yusuf Tahir Ajah">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">
            <Mail size={12} />
            <span>Direct Communication</span>
          </span>
          <h2 className="section-title">{contact.headline}</h2>
          <p className="section-subtitle">
            {contact.subheadline}
          </p>
        </div>

        <div className="contact-grid">
          {/* Left Column: Direct Channels */}
          <div className="contact-info">
            {/* Email Card with 1-click Copy */}
            <div className="contact-channel-card" style={{ cursor: 'pointer' }} onClick={handleCopyEmail}>
              <div className="channel-icon">
                <Mail size={22} />
              </div>
              <div className="channel-detail" style={{ flexGrow: 1 }}>
                <h4>Email Address</h4>
                <p>{contact.email}</p>
              </div>
              <button
                type="button"
                className="btn btn-icon btn-sm"
                aria-label="Copy Email Address"
                title="Copy Email Address"
              >
                {status.copied ? <Check size={16} color="var(--accent-emerald)" /> : <Copy size={16} />}
              </button>
            </div>

            {/* GitHub Card */}
            <a
              href={contact.github}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-channel-card"
              aria-label="Visit Yusuf's GitHub"
            >
              <div className="channel-icon">
                <Github size={22} />
              </div>
              <div className="channel-detail" style={{ flexGrow: 1 }}>
                <h4>GitHub Profile</h4>
                <p>github.com/yusuftahirajah75-del</p>
              </div>
              <ArrowUpRight size={18} color="var(--text-muted)" />
            </a>

            {/* LinkedIn Card */}
            <a
              href={contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-channel-card"
              aria-label="Visit Yusuf's LinkedIn"
            >
              <div className="channel-icon">
                <Linkedin size={22} />
              </div>
              <div className="channel-detail" style={{ flexGrow: 1 }}>
                <h4>LinkedIn Network</h4>
                <p>linkedin.com/in/tahir-yusuf-817012331</p>
              </div>
              <ArrowUpRight size={18} color="var(--text-muted)" />
            </a>

            {/* Recruiter Availability Note */}
            <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-md)', padding: 'var(--space-4)', fontSize: 'var(--text-xs)', color: 'var(--text-secondary)' }}>
              <div style={{ fontWeight: 700, color: 'var(--text-heading)', marginBottom: 'var(--space-1)' }}>
                Interview Availability
              </div>
              {contact.availabilityNotice}
            </div>
          </div>

          {/* Right Column: Accessible Contact Dispatch Form */}
          <form className="contact-form" onSubmit={handleSubmit} noValidate>
            <h3 style={{ fontSize: 'var(--text-lg)', fontWeight: 700, color: 'var(--text-heading)' }}>
              Send a Direct Message
            </h3>

            {status.error && (
              <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)', background: 'rgba(244, 63, 94, 0.1)', border: '1px solid rgba(244, 63, 94, 0.3)', borderRadius: 'var(--radius-md)', padding: 'var(--space-3)', color: 'var(--accent-rose)', fontSize: 'var(--text-xs)' }}>
                <AlertCircle size={16} />
                <span>{status.error}</span>
              </div>
            )}

            {status.submitted && (
              <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)', background: 'var(--accent-emerald-subtle)', border: '1px solid var(--accent-emerald-border)', borderRadius: 'var(--radius-md)', padding: 'var(--space-3)', color: 'var(--accent-emerald)', fontSize: 'var(--text-xs)' }}>
                <CheckCircle2 size={16} />
                <span>Email client opened! You can also email directly at {contact.email}.</span>
              </div>
            )}

            <div className="form-group">
              <label htmlFor="name" className="form-label">
                Your Name <span style={{ color: 'var(--accent-rose)' }}>*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleInputChange}
                className="form-input"
                placeholder="e.g. Sarah Jenkins"
              />
            </div>

            <div className="form-group">
              <label htmlFor="email" className="form-label">
                Your Email <span style={{ color: 'var(--accent-rose)' }}>*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleInputChange}
                className="form-input"
                placeholder="e.g. s.jenkins@company.com"
              />
            </div>

            <div className="form-group">
              <label htmlFor="subject" className="form-label">
                Subject (Optional)
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleInputChange}
                className="form-input"
                placeholder="e.g. Junior Full-Stack Developer Opportunity"
              />
            </div>

            <div className="form-group">
              <label htmlFor="message" className="form-label">
                Message <span style={{ color: 'var(--accent-rose)' }}>*</span>
              </label>
              <textarea
                id="message"
                name="message"
                required
                value={formData.message}
                onChange={handleInputChange}
                className="form-textarea"
                placeholder="Share role details, team context, or a project collaboration idea..."
              ></textarea>
            </div>

            <div className="form-notice">
              Note: Submitting dispatches your message directly via your email client to <code>{contact.email}</code>. No third-party tracking or simulated transmission.
            </div>

            <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
              <Send size={16} />
              <span>Send Message</span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
