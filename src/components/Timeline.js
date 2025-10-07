import React from 'react';
import { Briefcase, Building2Icon, GraduationCap } from 'lucide-react';

const Timeline = () => {
  const experiences = [
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
      icon: <Briefcase size={24} />,
      title: 'Front End Developer Intern',
      company: 'Digital Agency',
      period: '2021 - 2023',
      description: 'Built responsive web applications and RESTful APIs for various clients.'
    },
    {
      type: 'Internship',
      icon: <Building2Icon size={24} />,
      title: 'Front End Developer Intern',
      company: 'SkillUp Tech Solutions',
      period: 'OCT 2024 - DEC 2024',
      description: 'Worked on enhancing user interfaces and improving website performance.'
    },
    {
      type: 'work',
      icon: <Briefcase size={24} />,
      title: 'Junior Developer',
      company: 'StartUp Inc',
      period: '2020 - 2021',
      description: 'Developed frontend features and collaborated with design team.'
    }
  ];

  return (
    <section id="timeline" className="timeline-section">
      <div className="container">
        <h2 className="section-title">Experience & Education</h2>
        <div className="timeline">
          {experiences.map((exp, index) => (
            <div key={index} className={`timeline-item ${exp.type}`}>
              <div className="timeline-icon">{exp.icon}</div>
              <div className="timeline-content">
                <div className="timeline-period">{exp.period}</div>
                <h3 className="timeline-title">{exp.title}</h3>
                <h4 className="timeline-company">{exp.company}</h4>
                <p className="timeline-description">{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;
