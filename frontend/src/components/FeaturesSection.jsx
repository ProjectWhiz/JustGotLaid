import React from 'react';
import { Truck, Shield, Heart } from 'lucide-react';

export default function FeaturesSection() {
  return (
    <section className="features-section">
        <div className="container">
          <div className="section-header">
            <h3>Why Choose Our Eggs?</h3>
            <p>Quality you can taste, freshness you can trust</p>
          </div>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">
                <Truck size={32} />
              </div>
              <h4>Fresh Delivery</h4>
              <p>Farm-to-door delivery ensures you get the freshest eggs possible, collected daily from our happy hens.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <Shield size={32} />
              </div>
              <h4>Quality Assured</h4>
              <p>Our pasture-raised hens roam freely, resulting in eggs with richer yolks and superior nutritional value.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <Heart size={32} />
              </div>
              <h4>Ethically Raised</h4>
              <p>We care for our hens with love and respect, ensuring they live happy, healthy lives in natural conditions.</p>
            </div>
          </div>
        </div>
      </section>
  );
}
