import React, { useState } from 'react';
import { usePortfolio } from '../contexts/PortfolioContext';

const Contact = () => {
  const { data } = usePortfolio();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const form = e.target;
      const formDataObj = new FormData(form);

      const response = await fetch('/thank-you', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(formDataObj).toString()
      });

      if (response.ok) {
        window.location.href = '/thank-you';
      } else {
        throw new Error('Form submission failed');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('There was an error sending your message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="contact" id="contact">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Get In Touch</h2>
          <div className="section-line"></div>
        </div>
        <div className="contact-content">
          <div className="contact-info" id="contactInfo">
            <div className="contact-item">
              <div className="contact-icon">
                <i className="fas fa-envelope"></i>
              </div>
              <div>
                <h4>Email</h4>
                <p>{data.contact.email}</p>
              </div>
            </div>
            <div className="contact-item">
              <div className="contact-icon">
                <i className="fas fa-phone"></i>
              </div>
              <div>
                <h4>Phone (UK)</h4>
                <p>{data.contact.phone_uk}</p>
              </div>
            </div>
            <div className="contact-item">
              <div className="contact-icon">
                <i className="fas fa-phone"></i>
              </div>
              <div>
                <h4>Phone (Singapore)</h4>
                <p>{data.contact.phone_sg}</p>
              </div>
            </div>
          </div>
          <div className="contact-form">
            <form 
              id="contactForm" 
              name="contact" 
              method="POST" 
              data-netlify="true" 
              action="/thank-you" 
              netlify-honeypot="bot-field"
              onSubmit={handleSubmit}
            >
              {/* Honeypot field for spam protection */}
              <input type="hidden" name="bot-field" />
              {/* Form name for Netlify */}
              <input type="hidden" name="form-name" value="contact" />
              
              <div className="form-group">
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  placeholder="Your Name" 
                  required
                  value={formData.name}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-group">
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  placeholder="Your Email" 
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-group">
                <input 
                  type="text" 
                  id="subject" 
                  name="subject" 
                  placeholder="Subject (Optional)"
                  value={formData.subject}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-group">
                <textarea 
                  id="message" 
                  name="message" 
                  placeholder="Your Message" 
                  rows="5" 
                  required
                  value={formData.message}
                  onChange={handleInputChange}
                ></textarea>
              </div>
              <button type="submit" className="btn btn-primary" id="submitBtn" disabled={isSubmitting}>
                <i className="fas fa-paper-plane"></i>
                <span className="btn-text" style={{ display: isSubmitting ? 'none' : 'inline' }}>
                  Send Message
                </span>
                <span className="btn-loading" style={{ display: isSubmitting ? 'inline' : 'none' }}>
                  <i className="fas fa-spinner fa-spin"></i>
                  Sending...
                </span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 