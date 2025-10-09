import React, { useState } from 'react';
import { Award, ExternalLink, X, Calendar, CheckCircle } from 'lucide-react';

const Certifications = () => {
  const [selectedCert, setSelectedCert] = useState(null);

  // Add your certifications here
  const certifications = [
    {
      id: 1,
      title: 'AWS Certified Solutions Architect',
      issuer: 'Amazon Web Services',
      date: 'January 2024',
      credentialId: 'AWS-12345-6789',
      image: '/certificates/certificate.pdf',
      description: 'Demonstrated expertise in designing distributed systems on AWS.',
      skills: ['AWS', 'Cloud Architecture', 'System Design'],
      verified: true
    },
    {
      id: 2,
      title: 'Full Stack Web Development',
      issuer: 'Udemy',
      date: 'September 2026',
      credentialId: 'FCC-CERT-123456',
      image: '/certificates/certificate.pdf',
      description: 'Completed comprehensive full-stack web development certification.',
      skills: ['React', 'Node.js', 'MongoDB', 'Express'],
      verified: true
    },
    {
      id: 3,
      title: 'JavaScript Algorithms and Data Structures',
      issuer: 'freeCodeCamp',
      date: 'November 2023',
      credentialId: 'FCC-ALGO-789012',
      image: '/certificates/certificate.pdf',
      description: 'Mastered JavaScript algorithms and data structures.',
      skills: ['JavaScript', 'Algorithms', 'Data Structures'],
      verified: true
    },
    {
      id: 4,
      title: 'React - The Complete Guide',
      issuer: 'Udemy',
      date: 'October 2023',
      credentialId: 'UC-REACT-456789',
      image: '/certificates/certificate.pdf',
      description: 'Comprehensive React.js course covering hooks, context, and advanced patterns.',
      skills: ['React', 'Redux', 'React Router', 'Hooks'],
      verified: true
    }
  ];

  const openCertificate = (cert) => {
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
              onClick={() => openCertificate(cert)}
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
        <div className="cert-modal-overlay" onClick={closeCertificate}>
          <div className="cert-modal" onClick={(e) => e.stopPropagation()}>
            <button className="cert-modal-close" onClick={closeCertificate}>
              <X size={24} />
            </button>
            
            <div className="cert-modal-content">
              <div className="cert-modal-header">
                <Award className="cert-modal-icon" size={48} />
                <div>
                  <h3 className="cert-modal-title">{selectedCert.title}</h3>
                  <p className="cert-modal-issuer">{selectedCert.issuer}</p>
                </div>
              </div>
              
              <div className="cert-modal-body">
                <div className="cert-modal-info">
                  <div className="cert-info-item">
                    <strong>Issued:</strong> {selectedCert.date}
                  </div>
                  <div className="cert-info-item">
                    <strong>Credential ID:</strong> {selectedCert.credentialId}
                  </div>
                  <div className="cert-info-item">
                    <strong>Status:</strong> 
                    {selectedCert.verified && (
                      <span className="verified-text">
                        <CheckCircle size={16} />
                        Verified
                      </span>
                    )}
                  </div>
                </div>
                
                <p className="cert-modal-description">{selectedCert.description}</p>
                
                <div className="cert-modal-skills">
                  <strong>Skills Covered:</strong>
                  <div className="cert-skills">
                    {selectedCert.skills.map((skill, index) => (
                      <span key={index} className="cert-skill-tag">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="cert-modal-actions">
                  <button 
                    className="btn btn-primary"
                    onClick={() => viewCertificateFile(selectedCert.image)}
                  >
                    <ExternalLink size={20} />
                    View Full Certificate
                  </button>
                  <button 
                    className="btn btn-secondary"
                    onClick={closeCertificate}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Certifications;
