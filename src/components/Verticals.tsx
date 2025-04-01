import React from 'react';

const Verticals = () => {
  return (
    <section id="verticals" className="py-12 bg-gray-50">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-display text-vintageGold mb-4">Tailored Solutions for Every Business</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div id="dtc" className="border p-6 rounded-lg shadow hover:shadow-lg transition">
            <h3 className="text-2xl font-bold mb-2">Ecommerce</h3>
            <p className="text-gray-600">
              Reduce cart abandonment and boost conversion rates with real-time, intelligent responses to order and product inquiries.
            </p>
          </div>
          <div id="retail" className="border p-6 rounded-lg shadow hover:shadow-lg transition">
            <h3 className="text-2xl font-bold mb-2">Brick-and-Mortar</h3>
            <p className="text-gray-600">
              Save hours on repititve customer inquiries with instant answers—whether it’s store hours, product availability, or appointment bookings. 
            </p>
          </div>
          <div id="influencer" className="border p-6 rounded-lg shadow hover:shadow-lg transition">
            <h3 className="text-2xl font-bold mb-2">Influencers</h3>
            <p className="text-gray-600">
              Scale your personal brand by automating direct messages and nurturing your community without losing your authentic touch.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Verticals;
