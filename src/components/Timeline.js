import React, { useState } from 'react';
import { Building2Icon, GraduationCap, School, X, Download, Eye } from 'lucide-react';

const Timeline = () => {
  const [showCertificate, setShowCertificate] = useState(false);
  const [activeCertificate, setActiveCertificate] = useState(null);

  const closeCertificate = () => {
    setShowCertificate(false);
    document.body.style.overflow = 'unset';
  };

  const experiences = [
    {
      type: 'Education',
      icon: <School size={24} />,
      title: 'Higher Secondary Education',
      company: 'ST.Judes Public School & Junior College',
      period: '2022 - 2023',
      //description: 'Pursuing a degree in Computer Science with a focus on software development and data structures.'
    },
    {
      type: 'Education',
      icon: <GraduationCap size={24} />,
      title: 'Bachelor of Computer Science',
      company: 'KPR Institute of Engineering and Technology',
      period: '2023 - Present',
      description: 'Pursuing a degree in Computer Science with a focus on software development and data structures.'
    },
    {
      type: 'Internship',
      icon: <Building2Icon size={24} />,
      title: 'Front End Developer Intern',
      company: 'SkillUp Tech Solutions',
      period: 'OCT 2024 - DEC 2024',
      description: 'Worked on enhancing user interfaces and improving website performance.',
      hasCertificate: true,
      certificatePath: '/certificates/certificate.pdf'
    },
    {
      type: 'Internship',
      icon: <Building2Icon size={24} />,
      title: 'Market Research Intern',
      company: 'CG - VAK Softwares & Exports Pvt Ltd',
      period: 'June 2025 - July 2025',
      description: 'Conducted market research and analysis to support business development efforts.',
      hasCertificate: true,
      certificatePath: '/certificates/cgvak-certificate.pdf'
    }
  ];

  return (
    <section id="timeline" className="timeline-section">
      <div className="container">
        <h2 className="section-title">Education & Experience</h2>
        <div className="timeline">
          {experiences.map((exp, index) => (
            <div 
              key={index} 
              className={`timeline-item ${exp.type} ${exp.hasCertificate ? 'has-certificate' : ''}`}
              onClick={(e) => {
                if (exp.hasCertificate) {
                  e.preventDefault();
                  setActiveCertificate(exp);
                  setShowCertificate(true);
                  document.body.style.overflow = 'hidden';
                }
              }}
              style={{ cursor: exp.hasCertificate ? 'pointer' : 'default' }}
            >
              <div className="timeline-icon">{exp.icon}</div>
              <div className="timeline-content">
                <div className="timeline-period">{exp.period}</div>
                <h3 className="timeline-title">{exp.title}</h3>
                <h4 className="timeline-company">{exp.company}</h4>
                <p className="timeline-description">{exp.description}</p>
                {exp.hasCertificate && (
                  <p className="certificate-hint">
                    View certificate
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Certificate Viewer - Split Panel */}
      {showCertificate && activeCertificate && (
        <div className="doc-viewer-overlay" onClick={closeCertificate}>
          <div className="doc-viewer-panel" onClick={(e) => e.stopPropagation()}>

            {/* Left: Info Panel */}
            <div className="doc-info-panel">
              <div className="doc-info-header">
                <div className="doc-info-icon">
                  <Building2Icon size={28} />
                </div>
                <span className="doc-info-badge">{activeCertificate.type}</span>
              </div>

              <h2 className="doc-info-title">{activeCertificate.title}</h2>
              <p className="doc-info-issuer">{activeCertificate.company}</p>

              <div className="doc-info-meta">
                <div className="doc-meta-row">
                  <GraduationCap size={15} />
                  <span>{activeCertificate.period}</span>
                </div>
              </div>

              {activeCertificate.description && (
                <p className="doc-info-description">{activeCertificate.description}</p>
              )}

              <div className="doc-info-actions">
                <a
                  href={activeCertificate.certificatePath}
                  download={`${activeCertificate.company.replace(/[^a-zA-Z0-9]/g, '_')}_Certificate.pdf`}
                  className="doc-btn doc-btn-primary"
                >
                  <Download size={16} /> Download PDF
                </a>
                <a
                  href={activeCertificate.certificatePath}
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
                <span className="doc-pdf-filename">{activeCertificate.company} — Certificate.pdf</span>
                <button className="doc-close-btn" onClick={closeCertificate}>
                  <X size={18} />
                </button>
              </div>
              <iframe
                src={`${activeCertificate.certificatePath}#view=FitH&toolbar=0&navpanes=0&scrollbar=0`}
                className="doc-pdf-frame"
                title={`${activeCertificate.company} Certificate`}
              />
            </div>

          </div>
        </div>
      )}
    </section>
  );
};

export default Timeline;
