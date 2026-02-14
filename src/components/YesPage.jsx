import React from 'react';
import './YesPage.css';

const YesPage = () => {
  return (
    <div className="yes-container">
      <div className="celebration-animation">🎉</div>
      <h1 className="happy-title">สุขสันต์วันวาเลนไทน์นะเธอ 💕</h1>
      <div className="gif-container">
        <div className="love-gif">
          <span className="animated-heart">❤️</span>
          <span className="animated-heart">💖</span>
          <span className="animated-heart">💘</span>
        </div>
      </div>
      <p className="love-message">
        ขอบคุณที่เข้ามาทำให้ทุกวันของเค้ากลายเป็นวันพิเศษ<br/><br/>
        ไม่ได้อยากเป็นคนรักที่ดีที่สุด<br/>
        แต่จะเป็นคนเดิมที่รักเธอมากขึ้นในทุกๆ วัน<br/><br/>
        อยู่เป็นรอยยิ้มให้กันแบบนี้ไปนานๆ เลยนะ<br/>
        รักเธอที่สุดครับ ❤️
      </p>
      <div className="hearts-rain">
        <span className="rain-heart">💕</span>
        <span className="rain-heart">💖</span>
        <span className="rain-heart">💗</span>
        <span className="rain-heart">💓</span>
        <span className="rain-heart">💞</span>
      </div>
    </div>
  );
};

export default YesPage;