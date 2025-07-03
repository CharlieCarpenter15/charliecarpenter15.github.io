import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="thank-you-container">
      <div className="thank-you-content">
        <div className="thank-you-icon">
          <i className="fas fa-compass"></i>
        </div>
        <h1 className="thank-you-title">404 - Page Not Found</h1>
        <p className="thank-you-message">
          Oops! The page you're looking for seems to have wandered off into the digital void.
        </p>
        <div className="thank-you-details">
          <p>Don't worry, you can find your way back to:</p>
          <div className="contact-links">
            <Link to="/" className="contact-link">
              <i className="fas fa-home"></i>
              Homepage
            </Link>
            <Link to="/#projects" className="contact-link">
              <i className="fas fa-folder-open"></i>
              Projects
            </Link>
            <Link to="/#contact" className="contact-link">
              <i className="fas fa-envelope"></i>
              Contact
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound; 