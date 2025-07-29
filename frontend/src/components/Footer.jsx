import React from 'react';

export default function Footer() {
  return (
    <footer className="footer">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-brand">
              <div className="footer-logo">
                <div className="footer-logo-icon">
                  <span>🥚</span>
                </div>
                <div>
                  <h4>Just Got Laid</h4>
                  <p>Farm Fresh Eggs</p>
                </div>
              </div>
              <p className="footer-description">
                Delivering the freshest, most delicious eggs straight from our farm to your table. Quality you can taste, freshness you can trust.
              </p>
            </div>
            <div className="footer-links">
              <h5>Quick Links</h5>
              <div className="footer-nav">
                <a href="#home">Home</a>
                <a href="#products">Products</a>
                <a href="#about">About</a>
                <a href="#contact">Contact</a>
              </div>
            </div>
            <div className="footer-contact">
              <h5>Contact Info</h5>
              <div className="footer-contact-info">
                <p>(555) 123-4567</p>
                <p>hello@justgotlaid.farm</p>
                <p>123 Farm Road<br />Country Side, ST 12345</p>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2024 Just Got Laid Farm. All rights reserved.</p>
          </div>
        </div>
    </footer>
  );
}
