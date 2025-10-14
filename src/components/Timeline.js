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

      {/* Certificate Modal - Clean PDF Only */}
      {showCertificate && activeCertificate && (
        <div 
          className="cert-modal-overlay"
          onClick={closeCertificate}
        >
          <div className="cert-modal cert-modal-minimal" onClick={(e) => e.stopPropagation()}>
            <button className="cert-modal-close" onClick={closeCertificate}>
              <X size={20} />
            </button>
            
            <div className="cert-modal-content cert-modal-content-minimal">
              {/* Only PDF Viewer */}
              <div className="cert-viewer cert-viewer-fullscreen">
                <iframe
                  src={`${activeCertificate.certificatePath}#view=FitH&toolbar=0&navpanes=0&scrollbar=0`}
                  className="cert-iframe"
                  title={`${activeCertificate.company} Certificate`}
                />
              </div>

              {/* Only Action Buttons */}
              <div className="cert-modal-actions cert-modal-actions-minimal">
                <a 
                  href={activeCertificate.certificatePath}
                  download={`${activeCertificate.company.replace(/[^a-zA-Z0-9]/g, '_')}_Certificate.pdf`}
                  className="btn btn-primary"
                >
                  <Download size={18} />
                  Download
                </a>
                <a 
                  href={activeCertificate.certificatePath}
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

export default Timeline;
