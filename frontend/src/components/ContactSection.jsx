import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';

export default function ContactSection() {
  return (
    <section id="contact" className="contact-section">
        <div className="container">
          <div className="section-header">
            <h3>Get In Touch</h3>
            <p>I'd love to hear from you</p>
          </div>
          <div className="contact-grid">
            <div className="contact-item">
              <div className="contact-icon">
                <MapPin size={24} />
              </div>
              <h4>Socials</h4>
              <p>Enter Socials Here<br /></p>
            </div>
            <div className="contact-item">
              <div className="contact-icon">
                <Phone size={24} />
              </div>
              <h4>Call Us</h4>
              <p>(610) 823-1459</p>
            </div>
            <div className="contact-item">
              <div className="contact-icon">
                <Mail size={24} />
              </div>
              <h4>Email Us</h4>
              <p>cheekyccsmalls@gmail.com</p>
            </div>
          </div>
        </div>
      </section>
  );
}
