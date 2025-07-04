import React, { useMemo } from 'react';
import { usePortfolio } from '../contexts/PortfolioContext';
import { motion } from 'framer-motion';

const Experience = () => {
  const { data } = usePortfolio();

  // Combine and sort experience and education items
  const timelineItems = useMemo(() => {
    const allItems = [
      ...data.experience.map(item => ({
        ...item,
        type: 'experience',
        sortDate: new Date(item.dates.split('-')[0] || '2024'),
        icon: 'fas fa-briefcase'
      })),
      ...data.education.map(item => ({
        ...item,
        type: 'education',
        role: item.degree,
        company: item.institution,
        sortDate: new Date(item.dates.split('-')[0] || '2024'),
        icon: 'fas fa-graduation-cap'
      }))
    ];
    
    return allItems.sort((a, b) => b.sortDate - a.sortDate);
  }, [data]);

  const TimelineItem = ({ item, index }) => {
    const isLeft = index % 2 === 0;
    
    return (
      <motion.div 
        className={`timeline-item ${isLeft ? 'left' : 'right'}`}
        initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
      >
        <div className="timeline-dot">
          <i className={item.icon}></i>
        </div>
        <motion.div 
          className="timeline-content"
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <div className="timeline-header">
            <div className="timeline-info">
              <h3>{item.role}</h3>
              <h4>{item.company}</h4>
              <div className="timeline-date">{item.dates}</div>
            </div>
            <div className="timeline-type">
              <span className={`type-badge ${item.type}`}>
                {item.type.charAt(0).toUpperCase() + item.type.slice(1)}
              </span>
            </div>
          </div>
          <p className="timeline-description">{item.description}</p>
          <div className="timeline-tags">
            {item.tags.map((tag, index) => (
              <motion.span 
                key={index} 
                className="timeline-tag"
                whileHover={{ scale: 1.1 }}
              >
                {tag}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </motion.div>
    );
  };

  return (
    <section className="experience-section" id="experience">
      <div className="container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">Professional Journey</h2>
          <div className="section-line"></div>
        </motion.div>
        
        <div className="timeline-container">
          <div className="timeline-line"></div>
          {timelineItems.map((item, index) => (
            <TimelineItem key={index} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience; 