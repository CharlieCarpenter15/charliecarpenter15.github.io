import React from 'react';
import { usePortfolio } from '../contexts/PortfolioContext';

const Experience = () => {
  const { data } = usePortfolio();

  const TimelineItem = ({ item, type }) => (
    <div className="timeline-item">
      <div className="timeline-dot"></div>
      <div className="timeline-content">
        <div className="timeline-header">
          <div className="timeline-info">
            <h3>{type === 'experience' ? item.role : item.degree}</h3>
            <h4>{type === 'experience' ? item.company : item.institution}</h4>
          </div>
          <div className="timeline-date">{item.dates}</div>
        </div>
        <p className="timeline-description">{item.summary}</p>
        <div className="timeline-tags">
          {item.tags.map((tag, index) => (
            <span key={index} className="timeline-tag">{tag}</span>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <section className="experience-education" id="experience">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Professional Journey</h2>
          <div className="section-line"></div>
        </div>
        <div className="journey-container">
          <div className="journey-side">
            <div className="journey-header">
              <h3 className="journey-title">
                <i className="fas fa-briefcase"></i>
                Experience
              </h3>
            </div>
            <div className="timeline-container" id="experienceTimeline">
              <div className="timeline-line"></div>
              {data.experience.map((item, index) => (
                <TimelineItem key={index} item={item} type="experience" />
              ))}
            </div>
          </div>
          <div className="journey-divider"></div>
          <div className="journey-side">
            <div className="journey-header">
              <h3 className="journey-title">
                <i className="fas fa-graduation-cap"></i>
                Education
              </h3>
            </div>
            <div className="timeline-container" id="educationTimeline">
              <div className="timeline-line"></div>
              {data.education.map((item, index) => (
                <TimelineItem key={index} item={item} type="education" />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience; 