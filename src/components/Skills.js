import React, { useState } from 'react';
import { Code2, Database, Layout, Server, Smartphone, GitBranch } from 'lucide-react';

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState(null);

  const skillCategories = [
    {
      icon: <Layout size={32} />,
      title: "Frontend",
      skills: ["React", "JavaScript", "HTML5", "CSS3", "Tailwind CSS", "Redux"],
      description: "Building responsive and interactive user interfaces"
    },
    {
      icon: <Server size={32} />,
      title: "Backend",
      skills: ["Node.js", "Express", "Python", "Django", "REST APIs", "GraphQL"],
      description: "Creating robust server-side applications and APIs"
    },
    {
      icon: <Database size={32} />,
      title: "Database",
      skills: ["MongoDB", "PostgreSQL", "MySQL", "Firebase", "Redis"],
      description: "Designing and managing efficient database systems"
    },
    {
      icon: <GitBranch size={32} />,
      title: "Tools & Others",
      skills: ["Git", "Docker", "AWS", "CI/CD", "Jest", "Webpack"],
      description: "DevOps and development tools expertise"
    }
  ];

  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2 className="section-title">Skills & Expertise</h2>
        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <div 
              key={index} 
              className={`skill-card ${activeCategory === index ? 'active' : ''}`}
              onMouseEnter={() => setActiveCategory(index)}
              onMouseLeave={() => setActiveCategory(null)}
            >
              <div className="skill-icon">{category.icon}</div>
              <h3 className="skill-title">{category.title}</h3>
              <p className="skill-description">{category.description}</p>
              <div className="skill-tags">
                {category.skills.map((skill, skillIndex) => (
                  <span key={skillIndex} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
