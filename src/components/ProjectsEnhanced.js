import React, { useState } from 'react';
import { X, ExternalLink, Github, Maximize2 } from 'lucide-react';

const ProjectModal = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>
          <X size={24} />
        </button>
        
        <div className="modal-image">
          <div className="preview-browser-bar modal-browser-bar">
            <span className="preview-dot" style={{background:'#ff5f57'}}></span>
            <span className="preview-dot" style={{background:'#febc2e'}}></span>
            <span className="preview-dot" style={{background:'#28c840'}}></span>
            <span className="preview-url-bar">{project.live.replace('https://','')}</span>
          </div>
          <div className="modal-iframe-wrap">
            <iframe
              src={project.live}
              title={project.title}
              className="modal-preview-iframe"
              loading="lazy"
              sandbox="allow-scripts allow-same-origin allow-forms"
            />
          </div>
        </div>
        
        <div className="modal-body">
          <h2 className="modal-title">{project.title}</h2>
          <p className="modal-category">{project.category}</p>
          
          <div className="modal-description">
            <h3>About This Project</h3>
            <p>{project.description}</p>
            <p>{project.fullDescription}</p>
          </div>
          
          <div className="modal-features">
            <h3>Key Features</h3>
            <ul>
              {project.features?.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>
          
          <div className="modal-tech">
            <h3>Technologies Used</h3>
            <div className="tech-tags">
              {project.technologies.map((tech, index) => (
                <span key={index} className="tech-tag">{tech}</span>
              ))}
            </div>
          </div>
          
          <div className="modal-links">
            <a href={project.github} target="_blank" rel="noopener noreferrer" className="modal-link">
              <Github size={20} />
              View Code
            </a>
            <a href={project.live} target="_blank" rel="noopener noreferrer" className="modal-link primary">
              <ExternalLink size={20} />
              Live Demo
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

const ProjectsEnhanced = () => {
  const [filter, setFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      title: "Campus Connect",
      description: "A full-stack campus social platform connecting students with real-time features, authentication, and a modern responsive UI.",
      fullDescription: "Campus Connect is a TypeScript-based campus networking platform designed to bridge the communication gap between students. It features secure JWT authentication, a clean dashboard, and a responsive interface built for real campus use cases.",
      features: [
        "Secure user authentication & registration",
        "Campus-specific feeds and networking",
        "Responsive UI for mobile and desktop",
        "Real-time interaction support",
        "Deployed on Vercel for fast global access"
      ],
      technologies: ["TypeScript", "React", "Node.js", "JavaScript", "Vercel"],
      category: "Full Stack",
      github: "https://github.com/pravin-4620/Connect.git",
      live: "https://campusconnectfrontend-six.vercel.app/login",
      image: "https://image.thum.io/get/width/600/crop/400/https://campusconnectfrontend-six.vercel.app/login"
    },
    {
      title: "FireStore",
      description: "A production-ready multi-vendor e-commerce marketplace with seller authentication, Razorpay payments, order tracking, and PDF invoice generation.",
      fullDescription: "FireStore is a comprehensive full-stack cracker shopping platform with separate customer, seller, and admin roles. It includes Razorpay payment gateway integration, GST-calculated PDF invoices, stock management, multi-status order tracking, and a full admin panel for seller approval and analytics.",
      features: [
        "Multi-vendor seller registration & admin approval",
        "Razorpay payment gateway (UPI, cards, net banking)",
        "Automatic GST-calculated PDF invoice generation",
        "Multi-status order tracking (Ordered → Delivered)",
        "Admin dashboard with sales analytics"
      ],
      technologies: ["React", "Node.js", "MongoDB", "Express", "Razorpay"],
      category: "Full Stack",
      github: "https://github.com/pravin-4620/FireStore.git",
      live: "https://fire-store-jet.vercel.app",
      image: "https://image.thum.io/get/width/600/crop/400/https://fire-store-jet.vercel.app"
    }
  ];

  const categories = ['All', 'Full Stack'];
  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">Featured Projects</h2>
        
        <div className="project-filters">
          {categories.map((category) => (
            <button
              key={category}
              className={`filter-btn ${filter === category ? 'active' : ''}`}
              onClick={() => setFilter(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="projects-grid">
          {filteredProjects.map((project, index) => (
            <div key={index} className="project-card fade-in">
              {/* Live Browser Preview */}
              <div className="project-preview-wrap">
                <div className="preview-browser-bar">
                  <span className="preview-dot" style={{background:'#ff5f57'}}></span>
                  <span className="preview-dot" style={{background:'#febc2e'}}></span>
                  <span className="preview-dot" style={{background:'#28c840'}}></span>
                  <span className="preview-url-bar">{project.live.replace('https://','')}</span>
                </div>
                <div className="preview-iframe-wrap">
                  <iframe
                    src={project.live}
                    title={project.title}
                    className="preview-iframe"
                    loading="lazy"
                    sandbox="allow-scripts allow-same-origin allow-forms"
                  />
                </div>
                <button
                  className="project-expand"
                  onClick={() => setSelectedProject(project)}
                >
                  <Maximize2 size={18} />
                  View Details
                </button>
              </div>
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-tech">
                  {project.technologies.slice(0, 3).map((tech, techIndex) => (
                    <span key={techIndex} className="tech-badge">{tech}</span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="tech-badge">+{project.technologies.length - 3}</span>
                  )}
                </div>
                <div className="project-links">
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link">
                    <Github size={18} />
                    Code
                  </a>
                  <a href={project.live} target="_blank" rel="noopener noreferrer" className="project-link">
                    <ExternalLink size={18} />
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedProject && (
        <ProjectModal 
          project={selectedProject} 
          onClose={() => setSelectedProject(null)} 
        />
      )}
    </section>
  );
};

export default ProjectsEnhanced;
