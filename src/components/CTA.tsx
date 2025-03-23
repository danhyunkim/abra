import React, { useState } from 'react';
import { motion } from 'framer-motion';

const CTA = () => {
  const [formData, setFormData] = useState({ name: '', email: '', company: '' });
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate submission, then clear form or show a toast message
    alert("Your request has been submitted!");
    setFormData({ name: '', email: '', company: '' });
  };
  
  return (
    <section id="cta" className="py-12 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto max-w-xl">
        <motion.h2
          className="text-3xl font-display text-vintageGold text-center mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          Get Started Today
        </motion.h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input 
            type="text" 
            placeholder="Full Name" 
            className="w-full border p-3 rounded"
            value={formData.name}
            onChange={e => setFormData({ ...formData, name: e.target.value })}
            required
          />
          <input 
            type="email" 
            placeholder="Email" 
            className="w-full border p-3 rounded"
            value={formData.email}
            onChange={e => setFormData({ ...formData, email: e.target.value })}
            required
          />
          <input 
            type="text" 
            placeholder="Company" 
            className="w-full border p-3 rounded"
            value={formData.company}
            onChange={e => setFormData({ ...formData, company: e.target.value })}
            required
          />
          <button type="submit" className="w-full bg-vintageGold text-white px-6 py-3 rounded-lg shadow hover:opacity-90">
            Schedule Your Free Call
          </button>
        </form>
      </div>
    </section>
  );
};

export default CTA;
