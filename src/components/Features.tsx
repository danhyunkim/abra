import React from 'react';

const Features = () => {
  return (
    <section id="features" className="py-12 bg-white">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-display text-vintageGold mb-4">Features</h2>
        <p className="text-gray-700 max-w-xl mx-auto mb-8">
          Our platform blends advanced AI with expert white-glove service to save you time and scale your business.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="border p-6 rounded-lg shadow hover:shadow-lg transition">
            <h3 className="text-2xl font-bold mb-2">Unified Chat Hub</h3>
            <p className="text-gray-600">
              Answer customer questions in real-time with confidence so no customer gets left hanging. 
            </p>
          </div>
          <div className="border p-6 rounded-lg shadow hover:shadow-lg transition">
            <h3 className="text-2xl font-bold mb-2">AI-Powered FAQ</h3>
            <p className="text-gray-600">
              Consolidate all your customer chats—website, socials, SMS—under one roof. Less chaos, more clarity.
            </p>
          </div>
          <div className="border p-6 rounded-lg shadow hover:shadow-lg transition">
            <h3 className="text-2xl font-bold mb-2">White-Glove Onboarding</h3>
            <p className="text-gray-600">
              Hit the ground running with customized setups and tailor-made templates that feel uniquely yours.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          <div className="border p-6 rounded-lg shadow hover:shadow-lg transition">
            <h3 className="text-2xl font-bold mb-2">Smart Engagement</h3>
            <p className="text-gray-600">
              Turn interest into action with smart, automated follow-ups that work around-the-clock, so you don’t have to.
            </p>
          </div>
          <div className="border p-6 rounded-lg shadow hover:shadow-lg transition">
            <h3 className="text-2xl font-bold mb-2">Hybrid Service Model</h3>
            <p className="text-gray-600">
              Harness powerful AI automation with the comfort of knowing real support is always just a click away.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
