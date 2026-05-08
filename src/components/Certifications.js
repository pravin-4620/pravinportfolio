import React, { useState } from 'react';
import { Award, Calendar, ChevronLeft, ChevronRight, Download, Eye } from 'lucide-react';

const Certifications = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slideDir, setSlideDir] = useState('next');
  const [animKey, setAnimKey] = useState(0);

  const certifications = [
    {
      id: 1,
      title: 'Full Stack Web Development',
      issuer: 'Udemy',
      date: 'September 2024',
      credentialId: 'UC-FULLSTACK-2024',
      file: '/certificates/fullstack.pdf',
      description: 'Completed comprehensive full-stack web development certification covering modern technologies.',
      skills: ['React', 'Node.js', 'MongoDB', 'Express'],
    },
    {
      id: 2,
      title: 'React - The Complete Guide',
      issuer: 'Udemy',
      date: 'October 2023',
      credentialId: 'UC-REACT-456789',
      file: '/certificates/reactjs.pdf',
      description: 'Comprehensive React.js course covering hooks, context, and advanced patterns.',
      skills: ['React', 'Redux', 'React Router', 'Hooks'],
    },
    {
      id: 3,
      title: 'Python Programming',
      issuer: 'Online Certification',
      date: 'November 2023',
      credentialId: 'PYTHON-2023',
      file: '/certificates/python.pdf',
      description: 'Mastered Python programming fundamentals and advanced concepts.',
      skills: ['Python', 'Data Structures', 'OOP'],
    },
    {
      id: 4,
      title: 'Power BI Data Analytics',
      issuer: 'Microsoft Learning',
      date: 'December 2023',
      credentialId: 'POWERBI-2023',
      file: '/certificates/powerbi.pdf',
      description: 'Data visualization and business intelligence with Power BI.',
      skills: ['Power BI', 'Data Analytics', 'Visualization'],
    },
    {
      id: 5,
      title: 'Tableau Data Visualization',
      issuer: 'Tableau Learning',
      date: 'January 2024',
      credentialId: 'TABLEAU-2024',
      file: '/certificates/tableu.pdf',
      description: 'Advanced data visualization and dashboard creation with Tableau.',
      skills: ['Tableau', 'Data Visualization', 'Dashboards'],
    },
    {
      id: 6,
      title: 'HackerRank Certification',
      issuer: 'HackerRank',
      date: '2024',
      credentialId: 'HACKERRANK-2024',
      file: '/certificates/hackerrank-certificate.pdf',
      description: 'Certified on HackerRank for demonstrating strong programming and problem-solving skills.',
      skills: ['Problem Solving', 'Algorithms', 'Data Structures'],
    },
    {
      id: 7,
      title: 'English Proficiency Certificate',
      issuer: 'English Certification Authority',
      date: '2024',
      credentialId: 'ENGLISH-2024',
      file: '/certificates/english-certificate.pdf',
      description: 'Certified English language proficiency demonstrating strong communication skills.',
      skills: ['English', 'Communication', 'Language Proficiency'],
    },
  ];

  const total = certifications.length;
  const cert = certifications[currentIndex];

  const goNext = () => {
    setSlideDir('next');
    setAnimKey(k => k + 1);
    setCurrentIndex(i => (i + 1) % total);
  };

  const goPrev = () => {
    setSlideDir('prev');
    setAnimKey(k => k + 1);
    setCurrentIndex(i => (i - 1 + total) % total);
  };

  const goTo = (i) => {
    setSlideDir(i > currentIndex ? 'next' : 'prev');
    setAnimKey(k => k + 1);
    setCurrentIndex(i);
  };

  return (
    <section id="certifications" className="certifications">
      <div className="container">
        <h2 className="section-title">Certifications &amp; Achievements</h2>

        <div className="cert-carousel">
          {/* Left Arrow */}
          <button className="cert-arrow cert-arrow-left" onClick={goPrev} aria-label="Previous">
            <ChevronLeft size={22} />
          </button>

          {/* Main Panel */}
          <div className="cert-carousel-panel">
            {/* Left: Info — re-mounts on change to trigger animation */}
            <div
              className={`cert-info-side cert-anim-${slideDir}`}
              key={`info-${animKey}`}
            >
              <div className="cert-info-top">
                <div className="cert-icon-wrap">
                  <Award size={22} />
                </div>
                <span className="cert-badge">
                  {currentIndex + 1} / {total}
                </span>
              </div>

              <h3 className="cert-carousel-title">{cert.title}</h3>
              <p className="cert-carousel-issuer">{cert.issuer}</p>

              <div className="cert-carousel-meta">
                <div className="cert-meta-row">
                  <Calendar size={13} />
                  <span>{cert.date}</span>
                </div>
                <div className="cert-meta-row">
                  <span className="cert-meta-label">ID:</span>
                  <span>{cert.credentialId}</span>
                </div>
              </div>

              <p className="cert-carousel-desc">{cert.description}</p>

              <div className="cert-carousel-skills">
                <p className="cert-skills-label">Skills</p>
                <div className="cert-skills-row">
                  {cert.skills.map((s, i) => (
                    <span key={i} className="cert-skill-tag">{s}</span>
                  ))}
                </div>
              </div>

              <div className="cert-carousel-actions">
                <a
                  href={cert.file}
                  download={`${cert.title.replace(/[^a-zA-Z0-9]/g, '_')}.pdf`}
                  className="doc-btn doc-btn-primary"
                >
                  <Download size={14} /> Download
                </a>
                <a
                  href={cert.file}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="doc-btn doc-btn-outline"
                >
                  <Eye size={14} /> Open Tab
                </a>
              </div>
            </div>

            {/* Right: PDF — re-mounts on change so iframe reloads */}
            <div
              className={`cert-pdf-side cert-anim-${slideDir}`}
              key={`pdf-${animKey}`}
            >
              <div className="cert-pdf-topbar">
                <span className="cert-pdf-name">{cert.title}.pdf</span>
              </div>
              <iframe
                src={`${cert.file}#view=FitH&toolbar=0&navpanes=0&scrollbar=0`}
                className="cert-carousel-iframe"
                title={cert.title}
              />
            </div>
          </div>

          {/* Right Arrow */}
          <button className="cert-arrow cert-arrow-right" onClick={goNext} aria-label="Next">
            <ChevronRight size={22} />
          </button>
        </div>

        {/* Mobile Navigation Arrows */}
        <div className="cert-mobile-nav">
          <button className="cert-arrow" onClick={goPrev}>
            <ChevronLeft size={22} />
          </button>
          <button className="cert-arrow" onClick={goNext}>
            <ChevronRight size={22} />
          </button>
        </div>

        {/* Dot Indicators */}
        <div className="cert-dots">
          {certifications.map((_, i) => (
            <button
              key={i}
              className={`cert-dot ${i === currentIndex ? 'active' : ''}`}
              onClick={() => goTo(i)}
              aria-label={`Certificate ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
