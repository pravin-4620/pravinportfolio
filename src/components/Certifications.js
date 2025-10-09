import React, { useState } from 'react';
import { Award, ExternalLink, X, Calendar, CheckCircle } from 'lucide-react';

const Certifications = () => {
  const [selectedCert, setSelectedCert] = useState(null);
  const [modalPosition, setModalPosition] = useState({ top: 0 });

  // Add your certifications here
  const certifications = [
    {
      id: 1,
      title: 'Full Stack Web Development',
      issuer: 'Udemy',
      date: 'September 2024',
      credentialId: 'UC-FULLSTACK-2024',
      image: '/certificates/fullstack.pdf',
      description: 'Completed comprehensive full-stack web development certification.',
      skills: ['React', 'Node.js', 'MongoDB', 'Express'],
      verified: true
    },
    {
      id: 2,
      title: 'React - The Complete Guide',
      issuer: 'Udemy',
      date: 'October 2023',
      credentialId: 'UC-REACT-456789',
      image: '/certificates/reactjs.pdf',
      description: 'Comprehensive React.js course covering hooks, context, and advanced patterns.',
      skills: ['React', 'Redux', 'React Router', 'Hooks'],
      verified: true
    },
    {
      id: 3,
      title: 'Python Programming',
      issuer: 'Online Certification',
      date: 'November 2023',
      credentialId: 'PYTHON-2023',
      image: '/certificates/python.pdf',
      description: 'Mastered Python programming fundamentals and advanced concepts.',
      skills: ['Python', 'Data Structures', 'OOP'],
      verified: true
    },
    {
      id: 4,
      title: 'Power BI Data Analytics',
      issuer: 'Microsoft Learning',
      date: 'December 2023',
      credentialId: 'POWERBI-2023',
      image: '/certificates/powerbi.pdf',
      description: 'Data visualization and business intelligence with Power BI.',
      skills: ['Power BI', 'Data Analytics', 'Visualization'],
      verified: true
    },
    {
      id: 5,
      title: 'Tableau Data Visualization',
      issuer: 'Tableau Learning',
      date: 'January 2024',
      credentialId: 'TABLEAU-2024',
      image: '/certificates/tableu.pdf',
      description: 'Advanced data visualization and dashboard creation with Tableau.',
      skills: ['Tableau', 'Data Visualization', 'Dashboards'],
      verified: true
    }
  ];

  const openCertificate = (cert, e) => {
    // Get the click position relative to the document
    const clickY = e.clientY + window.scrollY;
    setModalPosition({ top: clickY - 450 }); // Position modal higher above click position
    setSelectedCert(cert);
  };

  const closeCertificate = () => {
    setSelectedCert(null);
  };

  const viewCertificateFile = (imagePath) => {
    // Open certificate in new tab
    window.open(imagePath, '_blank');
  };

  return (
    <section id="certifications" className="certifications">
      <div className="container">
        <h2 className="section-title">
         
          Certifications & Achievements
        </h2>
        
        
        <div className="certifications-grid">
          {certifications.map((cert) => (
            <div 
              key={cert.id} 
              className="certification-card"
              onClick={(e) => openCertificate(cert, e)}
            >
              <div className="cert-header">
                
              </div>
              
              <h3 className="cert-title">{cert.title}</h3>
              <p className="cert-issuer">{cert.issuer}</p>
              
              <div className="cert-date">
                <Calendar size={16} />
                {cert.date}
              </div>
              
              <div className="cert-skills">
                {cert.skills.map((skill, index) => (
                  <span key={index} className="cert-skill-tag">
                    {skill}
                  </span>
                ))}
              </div>
              
              <button className="cert-view-btn">
                <ExternalLink size={16} />
                View Certificate
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Certificate Modal */}
      {selectedCert && (
        <div 
          className="certificate-modal" 
          style={{ top: `${modalPosition.top}px` }}
          onClick={closeCertificate}
        >
          <div className="certificate-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="certificate-close" onClick={closeCertificate}>
              <X size={24} />
            </button>
            <h3 className="certificate-modal-title">{selectedCert.title}</h3>
            <div className="certificate-viewer">
              <iframe
                src={selectedCert.image}
                className="certificate-iframe"
                title="Certificate"
              />
            </div>
            <div className="certificate-actions">
              <a 
                href={selectedCert.image}
                download={`${selectedCert.title.replace(/[^a-zA-Z0-9]/g, '_')}_Certificate.pdf`}
                className="btn-download"
              >
                📥 Download Certificate
              </a>
              <a 
                href={selectedCert.image}
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

export default Certifications;
