import React from 'react';
import { usePortfolio } from '../contexts/PortfolioContext';

const Activities = () => {
  const { data } = usePortfolio();

  const getActivityIcon = (name) => {
    const nameLower = name.toLowerCase();
    if (nameLower.includes('lacrosse')) return 'fas fa-running';
    if (nameLower.includes('running')) return 'fas fa-running';
    if (nameLower.includes('finance')) return 'fas fa-chart-line';
    if (nameLower.includes('scuba') || nameLower.includes('diving')) return 'fas fa-swimmer';
    if (nameLower.includes('badminton')) return 'fas fa-table-tennis';
    if (nameLower.includes('comp') || nameLower.includes('computer')) return 'fas fa-laptop-code';
    if (nameLower.includes('hackathon')) return 'fas fa-code';
    if (nameLower.includes('charity')) return 'fas fa-heart';
    return 'fas fa-star';
  };

  const ActivityCard = ({ activity }) => (
    <div className="card activity-card">
      <div className="activity-icon">
        <i className={getActivityIcon(activity.name)}></i>
      </div>
      <h3 className="activity-title">{activity.name}</h3>
    </div>
  );

  return (
    <section className="activities" id="activities">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Activities & Interests</h2>
          <div className="section-line"></div>
        </div>
        <div className="activities-grid" id="activitiesGrid">
          {data.activities_and_societies.map((activity, index) => (
            <ActivityCard key={index} activity={activity} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Activities; 