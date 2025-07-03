import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Portfolio from './components/Portfolio';
import ThankYou from './components/ThankYou';
import NotFound from './components/NotFound';
import { PortfolioProvider } from './contexts/PortfolioContext';

function App() {
  return (
    <PortfolioProvider>
      <div className="App">
        <Routes>
          <Route path="/" element={<Portfolio />} />
          <Route path="/thank-you" element={<ThankYou />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </PortfolioProvider>
  );
}

export default App; 