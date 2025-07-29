import logo from './logo.svg';
import './index.css';
import './App.css';
import React from 'react';
import AboutSection from './components/AboutSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import FeaturesSection from './components/FeaturesSection';
import Navigation from './components/Navigation';
import TestimonialsSection from './components/TestimonialsSection';
import HeroSection from './components/HeroSection';
import ProductsSection from './components/ProductsSection';



function App() {
  return (
    <div>
      <Navigation />
      <HeroSection /> 
      <FeaturesSection />
      <ProductsSection /> 
      <TestimonialsSection />
      <AboutSection />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;
