import React from 'react';
import LoadingScreen from './LoadingScreen';
import Navigation from './Navigation';
import Hero from './Hero';
import Experience from './Experience';
import Projects from './Projects';
import TechnicalDevelopments from './TechnicalDevelopments';
import Achievements from './Achievements';
import Activities from './Activities';
import Contact from './Contact';
import Footer from './Footer';
import Modal from './Modal';
import ImageModal from './ImageModal';
import { usePortfolio } from '../contexts/PortfolioContext';

const Portfolio = () => {
  const { loading } = usePortfolio();

  return (
    <>
      {loading && <LoadingScreen />}
      <Navigation />
      <main>
        <Hero />
        <Experience />
        <Projects />
        <TechnicalDevelopments />
        <Achievements />
        <Activities />
        <Contact />
      </main>
      <Footer />
      <Modal />
      <ImageModal />
    </>
  );
};

export default Portfolio; 