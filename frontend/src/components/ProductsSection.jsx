import React, { useState } from 'react';

export default function ProductsSection() {
  const [selectedPackage, setSelectedPackage] = useState('dozen');

  const packages = [
    { id: 'dozen', name: '12 Eggs (1 Dozen)', price: 8.99, popular: true },
    { id: 'eighteen', name: '18 Eggs', price: 12.99, popular: false },
  ];

  return (
    <section id="products" className="products-section">
        <div className="container">
          <div className="section-header">
            <h3>Fresh Egg Packages</h3>
            <p>Choose the perfect quantity for your needs</p>
          </div>
          <div className="products-grid">
            {packages.map((pkg) => (
              <div 
                key={pkg.id}
                className={`product-card ${selectedPackage === pkg.id ? 'selected' : ''} ${pkg.popular ? 'popular' : ''}`}
                onClick={() => setSelectedPackage(pkg.id)}
              >
                {pkg.popular && (
                  <div className="popular-badge">Most Popular</div>
                )}
                <div className="product-content">
                  <div className="product-emoji">🥚</div>
                  <h4>{pkg.name}</h4>
                  <div className="product-price">${pkg.price}</div>
                  <button className="add-to-cart-btn">Add to Cart</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
  );
}
