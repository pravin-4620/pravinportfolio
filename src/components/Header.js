import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      // Header scroll effect
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Active section detection
      const sections = ['home', 'about', 'skills', 'projects', 'timeline', 'certifications', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial position
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="header-content">
          <h1 className="logo">Pravin</h1>
          
          <button 
            className="mobile-menu-btn"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
            <button onClick={() => scrollToSection('home')} className={`nav-link ${activeSection === 'home' ? 'active' : ''}`}>Home</button>
            <button onClick={() => scrollToSection('about')} className={`nav-link ${activeSection === 'about' ? 'active' : ''}`}>About</button>
            <button onClick={() => scrollToSection('skills')} className={`nav-link ${activeSection === 'skills' ? 'active' : ''}`}>Skills</button>
            <button onClick={() => scrollToSection('projects')} className={`nav-link ${activeSection === 'projects' ? 'active' : ''}`}>Projects</button>
            <button onClick={() => scrollToSection('timeline')} className={`nav-link ${activeSection === 'timeline' ? 'active' : ''}`}>Timeline</button>
            <button onClick={() => scrollToSection('certifications')} className={`nav-link ${activeSection === 'certifications' ? 'active' : ''}`}>Certifications</button>
            <button onClick={() => scrollToSection('contact')} className={`nav-link ${activeSection === 'contact' ? 'active' : ''}`}>Contact</button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
