import React from 'react';
import { motion } from 'framer-motion';

const Verticals = () => {
  return (
    <section id="verticals" className="py-16 bg-[#181818]">
      <div className="container mx-auto text-center">
        <motion.h2
          className="text-3xl font-heading font-bold text-metallicStart mb-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          Tailored Solutions for Every Business
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div id="dtc" className="border border-gray-700 p-6 rounded-lg hover:shadow-lg transition" whileHover={{ scale: 1.05 }}>
            <h3 className="text-2xl font-heading font-bold text-metallicStart mb-2">Ecommerce</h3>
            <p className="text-white">
              Enhance conversions with intelligent, on–demand support for your online store.
            </p>
          </motion.div>
          <motion.div id="retail" className="border border-gray-700 p-6 rounded-lg hover:shadow-lg transition" whileHover={{ scale: 1.05 }}>
            <h3 className="text-2xl font-heading font-bold text-metallicStart mb-2">Brick-and-Mortar</h3>
            <p className="text-white">
              Ensure prompt, around–the–clock responses to keep customers coming back.
            </p>
          </motion.div>
          <motion.div id="influencer" className="border border-gray-700 p-6 rounded-lg hover:shadow-lg transition" whileHover={{ scale: 1.05 }}>
            <h3 className="text-2xl font-heading font-bold text-metallicStart mb-2">Influencers</h3>
            <p className="text-white">
              Scale your personal brand without losing the authentic touch that your audience loves.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Verticals;
