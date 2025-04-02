import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id="hero" className="pt-24 pb-16 text-center relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #121212, #000000)' }}>
      <motion.h1
        className="text-4xl md:text-6xl font-heading font-extrabold mb-4 animate-shine"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        style={{ color: "#C0C0C0" }}  // metallic header color
      >
        Your Business, Supercharged.
      </motion.h1>
      <motion.p
        className="max-w-2xl mx-auto text-lg font-body mb-8 text-white"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        Smart AI Chatbots that never clock out—smart, simple, and uniquely you.
      </motion.p>
      <motion.button
        className="bg-gradient-to-r from-ctaGradientFrom to-ctaGradientTo text-darkBg px-6 py-3 rounded-lg shadow hover:opacity-90 focus:outline-none"
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.6 }}
        onClick={() => {
          const cta = document.getElementById('cta');
          if(cta) cta.scrollIntoView({ behavior: 'smooth' });
        }}
      >
        Get Started Free
      </motion.button>
    </section>
  );
};

export default Hero;
