import React, { useState, useRef } from 'react';
import './HomePage.css';

const HomePage = ({ onYesClick }) => {
  const [yesSize, setYesSize] = useState(100);
  const [noSize, setNoSize] = useState(100);
  const [buttonPosition, setButtonPosition] = useState({ x: 0, y: 0 });
  const [isEscaping, setIsEscaping] = useState(false);
  const noButtonRef = useRef(null);

  const handleNoClick = () => {
    // Increase Yes button size by 50% each time (up to 300%)
    if (yesSize < 300) {
      setYesSize(prev => Math.min(prev + 50, 300));
    }
    // Decrease No button size by 10% each time (down to 10%)
    if (noSize > 10) {
      setNoSize(prev => Math.max(prev - 10, 10));
    }
  };

  const handleNoMouseEnter = () => {
    if (noSize <= 30) { // Only escape when button is small enough
      setIsEscaping(true);
      moveButtonAway();
    }
  };

  const moveButtonAway = () => {
    if (noButtonRef.current) {
      const buttonRect = noButtonRef.current.getBoundingClientRect();
      const maxX = window.innerWidth - buttonRect.width;
      const maxY = window.innerHeight - buttonRect.height;
      
      // Generate random position away from current mouse position
      const newX = Math.random() * maxX;
      const newY = Math.random() * maxY;
      
      setButtonPosition({ x: newX, y: newY });
    }
  };

  return (
    <div className="home-container">
      <div className="heart-animation">❤️</div>
      <h1 className="main-title">ใช่รักเธอมากเลย?</h1>
      <div className="button-container">
        <button 
          className="yes-button"
          style={{ fontSize: `${yesSize}%` }}
          onClick={onYesClick}
        >
          ใช่รักเธอมากเลย ❤️
        </button>
        <button 
          ref={noButtonRef}
          className={`no-button ${isEscaping ? 'escaping' : ''}`}
          style={{ 
            fontSize: `${noSize}%`,
            transform: `translate(${buttonPosition.x}px, ${buttonPosition.y}px)`,
            transition: isEscaping ? 'transform 0.3s ease-out' : 'all 0.3s ease'
          }}
          onClick={handleNoClick}
          onMouseEnter={handleNoMouseEnter}
          onMouseLeave={() => {
            setIsEscaping(false);
            setButtonPosition({ x: 0, y: 0 });
          }}
        >
          ไม่บอก 😢
        </button>
      </div>
      <div className="floating-hearts">
        <span className="floating-heart">💕</span>
        <span className="floating-heart">💖</span>
        <span className="floating-heart">💗</span>
        <span className="floating-heart">💓</span>
      </div>
    </div>
  );
};

export default HomePage;