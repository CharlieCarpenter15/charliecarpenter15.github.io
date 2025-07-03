import React, { useEffect, useState } from 'react';
import { usePortfolio } from '../contexts/PortfolioContext';

const Hero = () => {
  const { data } = usePortfolio();
  const [typedText, setTypedText] = useState('');
  const [tagIndex, setTagIndex] = useState(0);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const text = data.professional_summary.text;
    const speed = 20;
    let i = 0;

    const typeWriter = () => {
      if (i < text.length) {
        setTypedText(text.substring(0, i + 1));
        i++;
        setTimeout(typeWriter, speed);
      }
    };

    const timer = setTimeout(typeWriter, 500);
    return () => clearTimeout(timer);
  }, [data.professional_summary.text]);

  useEffect(() => {
    const interval = setInterval(() => {
      setTagIndex((prevIndex) => 
        (prevIndex + 1) % data.professional_summary.tags.length
      );
    }, 2000);

    return () => clearInterval(interval);
  }, [data.professional_summary.tags.length]);

  const codeContent = `# Building the future, one line at a time

class Developer:
    def __init__(self):
        self.name = "Charlie Carpenter"
        self.passion = "AI & Innovation"
        self.status = "Always Learning"
    
    def create_impact(self):
        return "Transforming ideas into reality"`;

  return (
    <section className="hero" id="hero">
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-text">
            <div className="hero-image">
              <img src="/pics/profile_pic.webp" alt="Charlie Carpenter" className="profile-pic" />
            </div>
            <h1 className="hero-title">
              <span className="greeting">Hi, I'm</span>
              <span className="name" id="heroName">Charlie Carpenter</span>
            </h1>
            <p className="hero-subtitle" id="heroSubtitle">{typedText}</p>
            <div className="hero-tags" id="heroTags">
              {data.professional_summary.tags.map((tag, index) => (
                <span 
                  key={tag} 
                  className={`hero-tag ${index === tagIndex ? 'active' : ''}`}
                >
                  {tag}
                </span>
              ))}
            </div>
            <div className="hero-buttons">
              <button onClick={() => scrollToSection('projects')} className="btn btn-primary">
                <i className="fas fa-rocket"></i>
                View My Work
              </button>
              <button onClick={() => scrollToSection('contact')} className="btn btn-secondary">
                <i className="fas fa-paper-plane"></i>
                Get In Touch
              </button>
            </div>
          </div>
        </div>
        <div className="hero-visual">
          <div className="code-block">
            <div className="code-header">
              <div className="code-dots">
                <span></span>
                <span></span>
                <span></span>
              </div>
              <span className="code-title">portfolio.py</span>
            </div>
            <div className="code-content">
              <pre>
                <code>
                  {codeContent.split('\n').map((line, index) => (
                    <React.Fragment key={index}>
                      <span className={`code-line ${line.startsWith('#') ? 'code-comment' : ''}`}>
                        {line}
                      </span>
                      {index < codeContent.split('\n').length - 1 && '\n'}
                    </React.Fragment>
                  ))}
                </code>
              </pre>
            </div>
          </div>
        </div>
      </div>
      <div className="scroll-indicator">
        <div className="scroll-arrow"></div>
      </div>
    </section>
  );
};

export default Hero; 