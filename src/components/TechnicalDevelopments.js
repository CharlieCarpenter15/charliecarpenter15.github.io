import React from 'react';
import { usePortfolio } from '../contexts/PortfolioContext';

const TechnicalDevelopments = () => {
  const { data } = usePortfolio();

  const DevelopmentCard = ({ development }) => (
    <div className="card">
      <h3>{development.title}</h3>
      <p>{development.description}</p>
      <div className="development-tags">
        {development.tags.map((tag, index) => (
          <span key={index} className="timeline-tag">{tag}</span>
        ))}
      </div>
    </div>
  );

  return (
    <section className="technical-developments" id="technical-developments">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Technical Developments</h2>
          <div className="section-line"></div>
        </div>
        <div className="developments-grid" id="developmentsGrid">
          {data.technical_developments.map((development, index) => (
            <DevelopmentCard key={index} development={development} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechnicalDevelopments; 