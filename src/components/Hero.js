import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Code, Download, Eye, X } from 'lucide-react';

const roles = ['Web Developer', 'Hardware Enthusiast'];

const Hero = () => {
  const [typedText, setTypedText] = useState('');
  const [showResume, setShowResume] = useState(false);
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const openResume = () => {
    setShowResume(true);
    document.body.style.overflow = 'hidden';
  };

  const closeResume = () => {
    setShowResume(false);
    document.body.style.overflow = 'unset';
  };

  useEffect(() => {
    const currentRole = roles[roleIndex];
    const typingSpeed = isDeleting ? 50 : 100;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setTypedText(currentRole.substring(0, typedText.length + 1));
        if (typedText === currentRole) {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        setTypedText(currentRole.substring(0, typedText.length - 1));
        if (typedText === '') {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [typedText, isDeleting, roleIndex]);

  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="hero-content">
          <h1 className="hero-title">
            Hi, I'm <span className="gradient-text">Pravin PT</span>
          </h1>
          <h2 className="hero-subtitle">
            {typedText}
            <span className="typing-cursor"></span>
          </h2>
          <p className="hero-description">
            I build exceptional digital experiences that make people's lives easier.
            Passionate about creating elegant solutions to complex problems.
          </p>
          <div className="hero-buttons">
            <button className="btn btn-primary" onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}>
              <Code size={20} />
              View My Work
            </button>
            <button className="btn btn-secondary" onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}>
              <Mail size={20} />
              Contact Me
            </button>
          </div>
          <div className="resume-buttons">
            <a href="/certificates/resume.pdf" download="Pravin_PT_Resume.pdf" className="btn btn-resume">
              <Download size={20} />
              Download Resume
            </a>
            <button onClick={openResume} className="btn btn-resume-outline">
              <Eye size={20} />
              View Resume
            </button>
          </div>
          <div className="social-links">
            <a href="https://github.com/pravin-4620" target="_blank" rel="noopener noreferrer" className="social-link">
              <Github size={24} />
            </a>
            <a href="https://www.linkedin.com/in/pravin-pt-8879a72a4/" target="_blank" rel="noopener noreferrer" className="social-link">
              <Linkedin size={24} />
            </a>
            <a href="mailto:pravinsurya2905@gmail.com" className="social-link">
              <Mail size={24} />
            </a>
          </div>
        </div>
      </div>

      {/* Resume Viewer Modal - Split Panel */}
      {showResume && (
        <div className="doc-viewer-overlay" onClick={closeResume}>
          <div className="doc-viewer-panel" onClick={(e) => e.stopPropagation()}>

            {/* Left: Info Panel */}
            <div className="doc-info-panel">
              <div className="doc-info-header">
                <div className="doc-info-icon">
                  <Eye size={28} />
                </div>
                <span className="doc-info-badge">Resume</span>
              </div>

              <h2 className="doc-info-title">Pravin PT</h2>
              <p className="doc-info-issuer">Full Stack Developer</p>

              <div className="doc-info-meta">
                <div className="doc-meta-row">
                  <Mail size={15} />
                  <span>pravinsurya2905@gmail.com</span>
                </div>
                <div className="doc-meta-row">
                  <Github size={15} />
                  <span>github.com/pravin-4620</span>
                </div>
              </div>

              <p className="doc-info-description">
                Passionate Full Stack Developer with hands-on experience in building responsive web applications and robust backend systems.
              </p>

              <div className="doc-skills">
                <p className="doc-skills-label">Core Skills</p>
                <div className="doc-skills-list">
                  {['React', 'Node.js', 'MongoDB', 'Express', 'Python', 'Docker'].map((s, i) => (
                    <span key={i} className="doc-skill-tag">{s}</span>
                  ))}
                </div>
              </div>

              <div className="doc-info-actions">
                <a
                  href="/certificates/resume.pdf"
                  download="Pravin_PT_Resume.pdf"
                  className="doc-btn doc-btn-primary"
                >
                  <Download size={16} /> Download PDF
                </a>
                <a
                  href="/certificates/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="doc-btn doc-btn-outline"
                >
                  <Eye size={16} /> Open in Tab
                </a>
              </div>
            </div>

            {/* Right: PDF Viewer */}
            <div className="doc-pdf-panel">
              <div className="doc-pdf-topbar">
                <span className="doc-pdf-filename">Pravin_PT_Resume.pdf</span>
                <button className="doc-close-btn" onClick={closeResume}>
                  <X size={18} />
                </button>
              </div>
              <iframe
                src="/certificates/resume.pdf#view=FitH&toolbar=0&navpanes=0&scrollbar=0"
                className="doc-pdf-frame"
                title="Resume"
              />
            </div>

          </div>
        </div>
      )}
    </section>
  );
};

export default Hero;
