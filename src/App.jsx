import React, { useState } from 'react';
import HomePage from './components/HomePage';
import YesPage from './components/YesPage';
import './App.css';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const handleYesClick = () => {
    setCurrentPage('yes');
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'yes':
        return <YesPage />;
      default:
        return <HomePage onYesClick={handleYesClick} />;
    }
  };

  return (
    <div className="App">
      {renderPage()}
    </div>
  );
}

export default App;
