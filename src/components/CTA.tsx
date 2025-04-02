import React, { useState } from 'react';
import { motion } from 'framer-motion';

const CTA = () => {
  const [formData, setFormData] = useState({ name: '', email: '', business: '' });
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add your API call or form submission logic here
    alert("Thank you! We'll schedule your free consultation shortly.");
    setFormData({ name: '', email: '', business: '' });
  };
  
  return (
    <section id="cta" className="py-16 bg-gradient-to-b from-[#1a1a1a] to-[#121212]">
      <div className="container mx-auto max-w-xl text-center">
        <motion.h2
          className="text-3xl font-heading font-bold text-metallicStart mb-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          Meet your Sidekick
        </motion.h2>
        <p className="text-white mb-8">
          Your AI assistant that works 24/7—capturing leads, answering questions, and booking customers—so you don’t have to stress.
        </p>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input 
            type="text" 
            placeholder="Your Name" 
            className="w-full border border-gray-700 p-3 rounded bg-[#1e1e1e] text-white focus:outline-none focus:border-metallicStart"
            value={formData.name}
            onChange={e => setFormData({ ...formData, name: e.target.value })}
            required
          />
          <input 
            type="email" 
            placeholder="Email Address" 
            className="w-full border border-gray-700 p-3 rounded bg-[#1e1e1e] text-white focus:outline-none focus:border-metallicStart"
            value={formData.email}
            onChange={e => setFormData({ ...formData, email: e.target.value })}
            required
          />
          <input 
            type="text" 
            placeholder="Company Name" 
            className="w-full border border-gray-700 p-3 rounded bg-[#1e1e1e] text-white focus:outline-none focus:border-metallicStart"
            value={formData.business}
            onChange={e => setFormData({ ...formData, business: e.target.value })}
            required
          />
          <button type="submit" className="w-full bg-gradient-to-r from-ctaGradientFrom to-ctaGradientTo text-darkBg px-6 py-3 rounded-lg hover:opacity-90 focus:outline-none">
            Schedule Your Free AI Strategy Session
          </button>
        </form>
      </div>
    </section>
  );
};

export default CTA;
