import React, { createContext, useContext, useState, useEffect } from 'react';
import portfolioData from '../data/content.json';

const PortfolioContext = createContext();

export const usePortfolio = () => {
  const context = useContext(PortfolioContext);
  if (!context) {
    throw new Error('usePortfolio must be used within a PortfolioProvider');
  }
  return context;
};

export const PortfolioProvider = ({ children }) => {
  const [data, setData] = useState(portfolioData);
  const [loading, setLoading] = useState(true);
  const [currentFilter, setCurrentFilter] = useState('all');

  useEffect(() => {
    // Simulate loading time for smooth transition
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  const filterProjects = (filter) => {
    setCurrentFilter(filter);
  };

  const getProjectCategories = (tags) => {
    const categories = [];
    const tagLower = tags.map(tag => tag.toLowerCase());
    
    if (tagLower.some(tag => 
      tag.includes('ai') || tag.includes('ml') || tag.includes('machine learning') || 
      tag.includes('pytorch') || tag.includes('bert') || tag.includes('cnn')
    )) {
      categories.push('ai');
    }
    
    if (tagLower.some(tag => 
      tag.includes('blockchain') || tag.includes('nft') || tag.includes('ethereum') || 
      tag.includes('solidity') || tag.includes('smart contracts')
    )) {
      categories.push('blockchain');
    }
    
    if (tagLower.some(tag => 
      tag.includes('ar') || tag.includes('vr') || tag.includes('augmented reality') || 
      tag.includes('virtual reality') || tag.includes('unity')
    )) {
      categories.push('ar');
    }
    
    if (tagLower.some(tag => 
      tag.includes('web') || tag.includes('flask') || tag.includes('react') || 
      tag.includes('html') || tag.includes('css') || tag.includes('javascript')
    )) {
      categories.push('web');
    }
    
    return categories;
  };

  const getFilteredProjects = () => {
    if (currentFilter === 'all') {
      return data.projects;
    }
    
    return data.projects.filter(project => {
      const categories = getProjectCategories(project.tags);
      return categories.includes(currentFilter);
    });
  };

  const value = {
    data,
    loading,
    currentFilter,
    filterProjects,
    getFilteredProjects,
    getProjectCategories
  };

  return (
    <PortfolioContext.Provider value={value}>
      {children}
    </PortfolioContext.Provider>
  );
}; 