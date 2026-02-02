import React from 'react';
import { User, MapPin, Briefcase, GraduationCap } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-photo-container">
            <div className="about-photo">
              <img 
                src="/profile-photo.jpg" 
                alt="Pravin PT" 
                className="profile-image"
              />
              <div className="photo-border"></div>
            </div>
          </div>
          <div className="about-text">
            <p>
              Hello! I'm a passionate developer with a love for creating beautiful and 
              functional web applications. With several years of experience in the field, 
              I've worked on a diverse range of projects that have sharpened my skills 
              and broadened my perspective.
            </p>
            <p>
              I specialize in building responsive, user-friendly interfaces and robust 
              backend systems. My goal is to write clean, maintainable code that solves 
              real-world problems and delivers exceptional user experiences.
            </p>
            <div className="about-details">
              <div className="detail-item">
                <User size={20} />
                <span>Full Stack Developer</span>
              </div>
              <div className="detail-item">
                <MapPin size={20} />
                <span>Coimbatore, TamilNadu, India.</span>
              </div>
              
              <div className="detail-item">
                <GraduationCap size={20} />
                <span>Bachelor's in Computer Science</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
