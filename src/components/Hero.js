import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Code, Download, Eye, X } from 'lucide-react';

const Hero = () => {
  const [typedText, setTypedText] = useState('');
  const [showResume, setShowResume] = useState(false);
  const roles = ['Web Developer', 'Hardware Enthusiast', 'Mobile App Developer'];
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

      {/* Resume Modal */}
      {showResume && (
        <div 
          className="cert-modal-overlay"
          onClick={closeResume}
        >
          <div className="cert-modal cert-modal-minimal" onClick={(e) => e.stopPropagation()}>
            <button className="cert-modal-close" onClick={closeResume}>
              <X size={20} />
            </button>
            
            <div className="cert-modal-content cert-modal-content-minimal">
              {/* Only PDF Viewer */}
              <div className="cert-viewer cert-viewer-fullscreen">
                <iframe
                  src="/certificates/resume.pdf#view=FitH&toolbar=0&navpanes=0&scrollbar=0"
                  className="cert-iframe"
                  title="Resume"
                />
              </div>

              {/* Only Action Buttons */}
              <div className="cert-modal-actions cert-modal-actions-minimal">
                <a 
                  href="/certificates/resume.pdf"
                  download="Pravin_PT_Resume.pdf"
                  className="btn btn-primary"
                >
                  <Download size={18} />
                  Download
                </a>
                <a 
                  href="/certificates/resume.pdf"
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn btn-secondary"
                >
                  <Eye size={18} />
                  Open in New Tab
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Hero;
