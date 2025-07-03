import React from 'react';
import { usePortfolio } from '../contexts/PortfolioContext';

const LoadingScreen = () => {
  const { loading } = usePortfolio();

  return (
    <div className={`loading-screen ${!loading ? 'hidden' : ''}`} id="loadingScreen">
      <div className="loading-content">
        <div className="loading-spinner"></div>
        <p>Loading portfolio...</p>
      </div>
    </div>
  );
};

export default LoadingScreen; 