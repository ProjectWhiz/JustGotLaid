import React from 'react';


export default function AboutSection() {
  return (
    <section id="about" className="about-section">
        <div className="container">
          <div className="about-grid">
            <div className="about-text">
              <h3>Our Farm Story</h3>
              <p className="about-paragraph">
                At Just Got Laid, we believe that happy hens lay the best eggs. Our family farm has been dedicated to ethical, sustainable egg production for over a decade. Our hens roam freely on pasture, enjoying fresh air, sunshine, and a natural diet that results in eggs with incredible flavor and nutrition.
              </p>
              <p className="about-paragraph">
                We're passionate about providing our community with the freshest, highest-quality eggs while maintaining the highest standards of animal welfare and environmental responsibility.
              </p>
              <button className="primary-btn">Visit Our Farm</button>
            </div>
            <div className="about-image">
              <div className="image-placeholder">
                <div className="placeholder-content">
                  <div className="placeholder-emoji">🐔</div>
                  <p>Farm Photo Placeholder</p>
                  <p className="placeholder-note">Upload your farm photos here</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  );
}
