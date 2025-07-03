import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <p>&copy; 2025 Charlie Carpenter. Built with <i className="fas fa-heart"></i>, AI, and lots of coffee.</p>
          <div className="footer-links">
            <a href="https://github.com/charliecarpenter15" target="_blank" rel="noopener noreferrer" className="footer-link">
              <i className="fab fa-github"></i>
            </a>
            <a href="https://linkedin.com/in/carpenter-charlie" target="_blank" rel="noopener noreferrer" className="footer-link">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="mailto:me@charliecarpenter.com" className="footer-link">
              <i className="fas fa-envelope"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 