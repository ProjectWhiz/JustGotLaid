import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';

export default function ContactSection() {
  return (
    <section id="contact" className="contact-section">
        <div className="container">
          <div className="section-header">
            <h3>Get In Touch</h3>
            <p>We'd love to hear from you</p>
          </div>
          <div className="contact-grid">
            <div className="contact-item">
              <div className="contact-icon">
                <MapPin size={24} />
              </div>
              <h4>Visit Us</h4>
              <p>123 Farm Road<br />Country Side, ST 12345</p>
            </div>
            <div className="contact-item">
              <div className="contact-icon">
                <Phone size={24} />
              </div>
              <h4>Call Us</h4>
              <p>(555) 123-4567</p>
            </div>
            <div className="contact-item">
              <div className="contact-icon">
                <Mail size={24} />
              </div>
              <h4>Email Us</h4>
              <p>hello@justgotlaid.farm</p>
            </div>
          </div>
        </div>
      </section>
  );
}
