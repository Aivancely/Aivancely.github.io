import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import CaseStudies from './components/CaseStudies';
import About from './components/About';
import Resources from './components/Resources';
import Events from './components/Events';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Chatbot from './components/Chatbot';
import AppMarketplace from './components/AppMarketplace';
import PrivacyPolicy from './components/PrivacyPolicy';
import './styles/animations.css';

// Home page component
const HomePage = () => {
  useEffect(() => {
    // Add animation for elements when they come into view
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animated');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });
    
    document.querySelectorAll('section').forEach(element => {
      observer.observe(element);
    });
    
    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <CaseStudies />
        <About />
        <Events />
        <Resources />
        <Contact />
      </main>
      <Footer />
    </>
  );
};

function App() {
  const location = useLocation();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-white">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/apps" element={<AppMarketplace />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
      </Routes>
      <Chatbot />
    </div>
  );
}

export default App;