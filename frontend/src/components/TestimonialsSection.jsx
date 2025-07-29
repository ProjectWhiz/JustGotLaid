import React from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  { name: "Sarah M.", rating: 5, text: "The freshest eggs I've ever tasted! The yolks are so vibrant and rich." },
  { name: "Mike R.", rating: 5, text: "Been buying from Just Got Laid for months. Quality is consistently amazing!" },
  { name: "Lisa K.", rating: 5, text: "Farm-fresh delivery right to my door. Couldn't be happier with the service." }
];

export default function TestimonialsSection() {
  return (
    <section className="testimonials-section">
        <div className="container">
          <div className="section-header">
            <h3>What Our Customers Say</h3>
            <p>Don't just take our word for it</p>
          </div>
          <div className="testimonials-grid">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="testimonial-card">
                <div className="stars">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="star-filled" size={20} />
                  ))}
                </div>
                <p className="testimonial-text">"{testimonial.text}"</p>
                <p className="testimonial-author">- {testimonial.name}</p>
              </div>
            ))}
          </div>
        </div>
    </section>
  );
}
