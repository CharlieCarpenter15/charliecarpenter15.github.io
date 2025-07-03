import React from 'react';
import { usePortfolio } from '../contexts/PortfolioContext';

const Achievements = () => {
  const { data } = usePortfolio();

  const AchievementCard = ({ achievement }) => (
    <div className="card achievement-card">
      <div className="achievement-visual">
        <i className="fas fa-trophy"></i>
      </div>
      <h3>{achievement.title}</h3>
      <div className="achievement-date">{achievement.date}</div>
      <p>{achievement.description}</p>
      <div className="achievement-tags">
        {achievement.tags.map((tag, index) => (
          <span key={index} className="timeline-tag">{tag}</span>
        ))}
      </div>
    </div>
  );

  return (
    <section className="achievements" id="achievements">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Achievements</h2>
          <div className="section-line"></div>
        </div>
        <div className="achievements-grid" id="achievementsGrid">
          {data.achievements.map((achievement, index) => (
            <AchievementCard key={index} achievement={achievement} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements; 