import React from 'react';
import { Link } from 'react-router-dom';

const ThankYou = () => {
  return (
    <div className="thank-you-container">
      <div className="thank-you-content">
        <div className="thank-you-icon">
          <i className="fas fa-check-circle"></i>
        </div>
        <h1 className="thank-you-title">Thank You!</h1>
        <p className="thank-you-message">
          Your message has been successfully sent. I'll get back to you as soon as possible!
        </p>
        <div className="thank-you-details">
          <p>I typically respond within 24-48 hours during business days.</p>
          <p>If you need urgent assistance, feel free to reach out via:</p>
          <div className="contact-links">
            <a href="mailto:me@charliecarpenter.com" className="contact-link">
              <i className="fas fa-envelope"></i>
              me@charliecarpenter.com
            </a>
            <a href="https://linkedin.com/in/carpenter-charlie" target="_blank" rel="noopener noreferrer" className="contact-link">
              <i className="fab fa-linkedin"></i>
              LinkedIn
            </a>
          </div>
        </div>
        <div className="thank-you-actions">
          <Link to="/" className="btn btn-primary">
            <i className="fas fa-arrow-left"></i>
            Back to Portfolio
          </Link>
          <Link to="/#projects" className="btn btn-secondary">
            <i className="fas fa-folder-open"></i>
            View My Projects
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ThankYou; 