import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id="hero" className="pt-20 pb-12 text-center bg-gradient-to-b from-offWhite to-white">
      <motion.h1
        className="text-4xl md:text-6xl font-display text-vintageGold mb-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Your Business, Supercharged.
      </motion.h1>
      <motion.p
        className="max-w-2xl mx-auto text-lg text-gray-700 mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        Smart AI Chatbots that never clock out - personalized automation for online shops, influencers, and local businesses.
      </motion.p>
      <motion.button
        className="bg-vintageGold text-white px-6 py-3 rounded-lg shadow hover:opacity-90"
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.6 }}
        onClick={() => {
          const cta = document.getElementById('cta');
          if(cta) cta.scrollIntoView({ behavior: 'smooth' });
        }}
      >
        Reclaim Your Time. Let AI Handle Customer Chats—You’ve Got Bigger Things to Do.
      </motion.button>
    </section>
  );
};

export default Hero;
