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
          <img src={project.image} alt={project.title} />
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
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce application with shopping cart, payment integration, and admin dashboard.",
      fullDescription: "Built a comprehensive e-commerce solution handling 10k+ daily users. Implemented real-time inventory tracking, secure payment processing with Stripe, and an advanced admin panel for managing products, orders, and analytics.",
      features: [
        "Real-time inventory management",
        "Stripe payment integration",
        "Admin dashboard with analytics",
        "Product search and filtering",
        "Order tracking system"
      ],
      technologies: ["React", "Node.js", "MongoDB", "Stripe", "Redis"],
      category: "Full Stack",
      github: "https://github.com",
      live: "https://example.com",
      image: "https://via.placeholder.com/400x250/4f46e5/ffffff?text=E-Commerce+Platform"
    },
    {
      title: "Task Management App",
      description: "A collaborative task management tool with real-time updates and team collaboration features.",
      fullDescription: "Developed a Trello-like task management system with real-time collaboration. Features drag-and-drop kanban boards, team chat, file attachments, and deadline notifications.",
      features: [
        "Drag-and-drop kanban boards",
        "Real-time collaboration",
        "Team chat integration",
        "File attachments",
        "Email notifications"
      ],
      technologies: ["React", "Firebase", "Material-UI", "Socket.io"],
      category: "Frontend",
      github: "https://github.com",
      live: "https://example.com",
      image: "https://via.placeholder.com/400x250/06b6d4/ffffff?text=Task+Manager"
    },
    {
      title: "Weather Dashboard",
      description: "A weather dashboard that displays current weather and forecasts using external APIs.",
      fullDescription: "Interactive weather application with beautiful visualizations. Provides 7-day forecasts, hourly updates, weather maps, and historical data with Chart.js visualizations.",
      features: [
        "7-day weather forecast",
        "Hourly weather updates",
        "Interactive weather maps",
        "Historical data charts",
        "Location-based search"
      ],
      technologies: ["React", "OpenWeather API", "Chart.js", "Mapbox"],
      category: "Frontend",
      github: "https://github.com",
      live: "https://example.com",
      image: "https://via.placeholder.com/400x250/10b981/ffffff?text=Weather+Dashboard"
    },
    {
      title: "Social Media Clone",
      description: "A social media platform with posts, comments, likes, and user authentication.",
      fullDescription: "Full-featured social media application with posts, stories, messaging, and friend systems. Implements JWT authentication, image uploads to AWS S3, and real-time messaging.",
      features: [
        "User authentication & profiles",
        "Post creation with images",
        "Real-time messaging",
        "Like and comment system",
        "Friend/Follow system"
      ],
      technologies: ["React", "Express", "PostgreSQL", "JWT", "AWS S3"],
      category: "Full Stack",
      github: "https://github.com",
      live: "https://example.com",
      image: "https://via.placeholder.com/400x250/f59e0b/ffffff?text=Social+Media"
    },
    {
      title: "REST API Service",
      description: "Scalable RESTful API with authentication, rate limiting, and comprehensive documentation.",
      fullDescription: "Built a production-ready REST API serving 1M+ requests daily. Includes JWT authentication, role-based access control, rate limiting, caching with Redis, and auto-generated Swagger documentation.",
      features: [
        "JWT authentication",
        "Rate limiting & throttling",
        "Redis caching",
        "Swagger documentation",
        "Error handling middleware"
      ],
      technologies: ["Node.js", "Express", "PostgreSQL", "Redis", "Docker"],
      category: "Backend",
      github: "https://github.com",
      live: "https://example.com",
      image: "https://via.placeholder.com/400x250/8b5cf6/ffffff?text=REST+API"
    },
    {
      title: "AI Chat Assistant",
      description: "Intelligent chatbot powered by OpenAI with context-aware conversations.",
      fullDescription: "AI-powered chat assistant with natural language processing. Features conversation memory, multi-language support, and integration with various APIs for weather, news, and more.",
      features: [
        "OpenAI GPT integration",
        "Context-aware responses",
        "Multi-language support",
        "API integrations",
        "Conversation history"
      ],
      technologies: ["React", "Node.js", "OpenAI API", "MongoDB", "Socket.io"],
      category: "Full Stack",
      github: "https://github.com",
      live: "https://example.com",
      image: "https://via.placeholder.com/400x250/ec4899/ffffff?text=AI+Assistant"
    }
  ];

  const categories = ['All', 'Full Stack', 'Frontend', 'Backend'];
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
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <button 
                  className="project-expand"
                  onClick={() => setSelectedProject(project)}
                >
                  <Maximize2 size={20} />
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
