import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Portfolio from './components/Portfolio';
import ThankYou from './components/ThankYou';
import NotFound from './components/NotFound';
import ImageModal from './components/ImageModal';
import { PortfolioProvider } from './contexts/PortfolioContext';
import '@fortawesome/fontawesome-free/css/all.min.css';

function App() {
  return (
    <PortfolioProvider>
      <div className="App">
        <Routes>
          <Route path="/" element={<Portfolio />} />
          <Route path="/thank-you" element={<ThankYou />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <ImageModal />
      </div>
    </PortfolioProvider>
  );
}

export default App; 