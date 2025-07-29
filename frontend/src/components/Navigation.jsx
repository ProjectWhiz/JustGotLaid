import React, { useState } from 'react';
import { ShoppingCart, Menu, X } from 'lucide-react';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

 return (
    <div className="website-container">
      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-content">
            <div className="logo-section">
              <div className="logo-icon">
                <span>🥚</span>
              </div>
              <div className="logo-text">
                <h1>Just Got Laid</h1>
                <p>Farm Fresh Eggs</p>
              </div>
            </div>
            
            {/* Desktop Menu */}
            <div className="desktop-menu">
              <a href="#home">Home</a>
              <a href="#products">Products</a>
              <a href="#about">About</a>
              <a href="#contact">Contact</a>
              <button className="order-btn">
                <ShoppingCart size={16} />
                <span>Order Now</span>
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="mobile-menu-btn"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="mobile-menu">
            <div className="mobile-menu-content">
              <a href="#home">Home</a>
              <a href="#products">Products</a>
              <a href="#about">About</a>
              <a href="#contact">Contact</a>
              <button className="mobile-order-btn">Order Now</button>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
}
