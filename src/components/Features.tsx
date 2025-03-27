import React from 'react';

const Features = () => {
  return (
    <section id="features" className="py-12 bg-white">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-display text-vintageGold mb-4">Our Services</h2>
        <p className="text-gray-700 max-w-xl mx-auto mb-8">
          Choose a tailored solution that fits your business needs.
        </p>
        {/* Example feature cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {['Starter', 'Launch', 'Scale'].map((tier) => (
            <div key={tier} className="border p-6 rounded-lg shadow hover:shadow-lg transition">
              <h3 className="text-2xl font-bold mb-2">{tier} Package</h3>
              <p className="text-gray-600">A brief description of the {tier} plan.</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
