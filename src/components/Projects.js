import React, { useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const [filter, setFilter] = useState('All');

  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce application with shopping cart, payment integration, and admin dashboard.",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      category: "Full Stack",
      github: "https://github.com",
      live: "https://example.com",
      image: "https://via.placeholder.com/400x250/4f46e5/ffffff?text=E-Commerce+Platform"
    },
    {
      title: "Task Management App",
      description: "A collaborative task management tool with real-time updates and team collaboration features.",
      technologies: ["React", "Firebase", "Material-UI"],
      category: "Frontend",
      github: "https://github.com",
      live: "https://example.com",
      image: "https://via.placeholder.com/400x250/06b6d4/ffffff?text=Task+Manager"
    },
    {
      title: "Weather Dashboard",
      description: "A weather dashboard that displays current weather and forecasts using external APIs.",
      technologies: ["React", "OpenWeather API", "Chart.js"],
      category: "Frontend",
      github: "https://github.com",
      live: "https://example.com",
      image: "https://via.placeholder.com/400x250/10b981/ffffff?text=Weather+Dashboard"
    },
    {
      title: "Social Media Clone",
      description: "A social media platform with posts, comments, likes, and user authentication.",
      technologies: ["React", "Express", "PostgreSQL", "JWT"],
      category: "Full Stack",
      github: "https://github.com",
      live: "https://example.com",
      image: "https://via.placeholder.com/400x250/f59e0b/ffffff?text=Social+Media"
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
              </div>
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-tech">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-badge">{tech}</span>
                  ))}
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
    </section>
  );
};

export default Projects;
