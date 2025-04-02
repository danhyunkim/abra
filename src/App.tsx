import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Verticals from './components/Verticals';
import CTA from './components/CTA';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="min-h-screen flex flex-col bg-darkBg">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Features />
        <Verticals />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default App;
