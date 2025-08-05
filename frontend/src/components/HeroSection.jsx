import React from 'react';
import chickenaround from '../images/chickenaround.jpg';


export default function HeroSection() {
  return (
    <section id="home" className="hero-section">
        <div className="container">
          <div className="hero-grid">
            <div className="hero-text">
              <h2 className="hero-title">
                Farm Fresh
                <span className="hero-highlight">Just Got Laid</span>
                Eggs
              </h2>
              <p className="hero-description">
                Experience the difference of truly fresh, pasture-raised eggs delivered straight from our farm to your table. Rich, creamy yolks and superior taste in every shell.
              </p>
              <div className="hero-buttons">
                <button className="primary-btn">Order Fresh Eggs</button>
                <button className="secondary-btn">Learn More</button>
              </div>
            </div>
            <div className="hero-image">
              <div className="image-placeholder">
                <div className="placeholder-content">
                  <img src={chickenaround} alt="Farm Egg" className="hero-photo" />
                  <p className="placeholder-note">Upload your farm/egg photos here</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  );
}
