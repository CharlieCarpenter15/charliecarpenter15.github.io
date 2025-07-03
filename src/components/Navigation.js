import React, { useState, useEffect } from 'react';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`} id="navbar">
      <div className="nav-container">
        <div className="nav-logo">
          <span className="logo-text">CC</span>
        </div>
        <ul className={`nav-menu ${isMobileMenuOpen ? 'active' : ''}`} id="navMenu">
          <li><button onClick={() => scrollToSection('hero')} className="nav-link">Home</button></li>
          <li><button onClick={() => scrollToSection('experience')} className="nav-link">Journey</button></li>
          <li><button onClick={() => scrollToSection('projects')} className="nav-link">Projects</button></li>
          <li><button onClick={() => scrollToSection('achievements')} className="nav-link">Achievements</button></li>
          <li><button onClick={() => scrollToSection('activities')} className="nav-link">Activities</button></li>
          <li><button onClick={() => scrollToSection('contact')} className="nav-link">Contact</button></li>
        </ul>
        <div className={`hamburger ${isMobileMenuOpen ? 'active' : ''}`} id="hamburger" onClick={toggleMobileMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  );
};

export default Navigation; 