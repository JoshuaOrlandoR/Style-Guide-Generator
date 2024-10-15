import React from 'react';
import '../styles/heroSection.css';

function HeroSection() {
  return (
    <div className="section">
      <div className="padding-global">
        <div className="container-large">
          <div className='spacerLarge'></div>
          <div className="heroWrapper">
            <div className="heroImageWrapper">
              <div className='spacerNormal'></div>
              <div className="heroImage"></div>
            </div>
            <div className="titleWrapper">
              <h1 className="h1-title typer"> Joshua's Style Guide Generator </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;