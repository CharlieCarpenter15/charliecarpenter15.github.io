import React from 'react';
import { usePortfolio } from '../contexts/PortfolioContext';

const Projects = () => {
  const { data, currentFilter, filterProjects, getFilteredProjects, getProjectCategories } = usePortfolio();

  const getProjectIcon = (tags) => {
    const categories = getProjectCategories(tags);
    
    if (categories.includes('ai')) return 'fas fa-brain';
    if (categories.includes('blockchain')) return 'fas fa-cube';
    if (categories.includes('ar')) return 'fas fa-vr-cardboard';
    if (categories.includes('web')) return 'fas fa-code';
    return 'fas fa-project-diagram';
  };

  const ProjectCard = ({ project }) => (
    <div className="card project-card" data-categories={getProjectCategories(project.tags).join(' ')}>
      <div className="project-header">
        <div className="project-icon">
          <i className={getProjectIcon(project.tags)}></i>
        </div>
        <h3>{project.title}</h3>
      </div>
      <p>{project.description}</p>
      <div className="project-tags">
        {project.tags.map((tag, index) => (
          <span key={index} className="project-tag">{tag}</span>
        ))}
      </div>
    </div>
  );

  return (
    <section className="projects" id="projects">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Featured Projects</h2>
          <div className="section-line"></div>
        </div>
        <div className="projects-filter">
          <button 
            className={`filter-btn ${currentFilter === 'all' ? 'active' : ''}`}
            onClick={() => filterProjects('all')}
          >
            All
          </button>
          <button 
            className={`filter-btn ${currentFilter === 'ai' ? 'active' : ''}`}
            onClick={() => filterProjects('ai')}
          >
            AI/ML
          </button>
          <button 
            className={`filter-btn ${currentFilter === 'blockchain' ? 'active' : ''}`}
            onClick={() => filterProjects('blockchain')}
          >
            Blockchain
          </button>
          <button 
            className={`filter-btn ${currentFilter === 'ar' ? 'active' : ''}`}
            onClick={() => filterProjects('ar')}
          >
            AR/VR
          </button>
          <button 
            className={`filter-btn ${currentFilter === 'web' ? 'active' : ''}`}
            onClick={() => filterProjects('web')}
          >
            Web Dev
          </button>
        </div>
        <div className="projects-grid" id="projectsGrid">
          {getFilteredProjects().map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects; 