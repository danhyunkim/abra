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
    <motion.section id="cta" className="py-12 bg-gradient-to-b from-white to-gray-50">
      <motion.div className="container mx-auto max-w-xl">
        <motion.h2
          className="text-3xl font-display text-vintageGold text-center mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          Get Started Today
        </motion.h2>
        <motion.form onSubmit={handleSubmit} className="space-y-4">
          <motion.input 
            type="text" 
            placeholder="Full Name" 
            className="w-full border p-3 rounded"
            value={formData.name}
            onChange={(e: { target: { value: any; }; }) => setFormData({ ...formData, name: e.target.value })}
            required
          />
          <motion.input 
            type="email" 
            placeholder="Email" 
            className="w-full border p-3 rounded"
            value={formData.email}
            onChange={(e: { target: { value: any; }; }) => setFormData({ ...formData, email: e.target.value })}
            required
          />
          <motion.input 
            type="text" 
            placeholder="Company" 
            className="w-full border p-3 rounded"
            value={formData.company}
            onChange={(e: { target: { value: any; }; }) => setFormData({ ...formData, company: e.target.value })}
            required
          />
          <motion.button type="submit" className="w-full bg-vintageGold text-white px-6 py-3 rounded-lg shadow hover:opacity-90">
            Schedule Your Free Call
          </motion.button>
        </motion.form>
      </motion.div>
    </motion.section>
  );
};

export default CTA;
