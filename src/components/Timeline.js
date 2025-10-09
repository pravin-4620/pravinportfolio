import React, { useState, useEffect } from 'react';
import { Briefcase, Building2Icon, GraduationCap, School, X } from 'lucide-react';

const Timeline = () => {
  const [showCertificate, setShowCertificate] = useState(false);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (showCertificate) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [showCertificate]);

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
      description: 'Conducted market research and analysis to support business development efforts.'
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
                  setShowCertificate(true);
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
                    📜 View certificate
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Certificate Modal */}
      {showCertificate && (
        <div className="certificate-modal" onClick={() => setShowCertificate(false)}>
          <div className="certificate-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="certificate-close" onClick={() => setShowCertificate(false)}>
              <X size={24} />
            </button>
            <h3 className="certificate-modal-title">SkillUp Tech Solutions - Internship Certificate</h3>
            <div className="certificate-viewer">
              <object
                data="/certificates/certificate.pdf#toolbar=0"
                type="application/pdf"
                className="certificate-iframe"
              >
                <embed
                  src="/certificates/certificate.pdf#toolbar=0"
                  type="application/pdf"
                  className="certificate-iframe"
                />
              </object>
            </div>
            <div className="certificate-actions">
              <a 
                href="/certificates/certificate.pdf" 
                download="SkillUp_Internship_Certificate.pdf"
                className="btn-download"
              >
                📥 Download Certificate
              </a>
              <a 
                href="/certificates/certificate.pdf" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-view"
              >
                🔗 Open in New Tab
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Timeline;
