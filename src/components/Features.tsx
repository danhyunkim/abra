import React from 'react';
import { motion } from 'framer-motion';

const Features = () => {
  return (
    <section id="features" className="py-16 bg-[#1e1e1e]">
      <div className="container mx-auto text-center">
        <motion.h2
          className="text-3xl font-heading font-bold text-metallicStart mb-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          Why Sidekick AI
        </motion.h2>
        <p className="text-white max-w-xl mx-auto mb-12">
          Our platform seamlessly blends advanced AI with hands-on support to solve your SMB challenges.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div className="border border-gray-700 p-6 rounded-lg hover:shadow-lg transition" whileHover={{ scale: 1.05 }}>
            <h3 className="text-2xl font-heading font-bold text-metallicStart mb-2">Unified Chat Hub</h3>
            <p className="text-white">
              Consolidate inquiries from social, web, and mobile channels under one roof.
            </p>
          </motion.div>
          <motion.div className="border border-gray-700 p-6 rounded-lg hover:shadow-lg transition" whileHover={{ scale: 1.05 }}>
            <h3 className="text-2xl font-heading font-bold text-metallicStart mb-2">AI-Powered FAQ</h3>
            <p className="text-white">
              Answer common questions instantly with powerful AI that minimizes lost opportunities.
            </p>
          </motion.div>
          <motion.div className="border border-gray-700 p-6 rounded-lg hover:shadow-lg transition" whileHover={{ scale: 1.05 }}>
            <h3 className="text-2xl font-heading font-bold text-metallicStart mb-2">Guided Onboarding</h3>
            <p className="text-white">
              Enjoy personalized setup with industry–specific templates to launch your chatbot quickly.
            </p>
          </motion.div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          <motion.div className="border border-gray-700 p-6 rounded-lg hover:shadow-lg transition" whileHover={{ scale: 1.05 }}>
            <h3 className="text-2xl font-heading font-bold text-metallicStart mb-2">Proactive Engagement</h3>
            <p className="text-white">
              Automate follow-ups and capture leads effortlessly, converting interest into conversions.
            </p>
          </motion.div>
          <motion.div className="border border-gray-700 p-6 rounded-lg hover:shadow-lg transition" whileHover={{ scale: 1.05 }}>
            <h3 className="text-2xl font-heading font-bold text-metallicStart mb-2">Hybrid Service Model</h3>
            <p className="text-white">
              Leverage the perfect blend of smart automation and expert human support.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Features;
