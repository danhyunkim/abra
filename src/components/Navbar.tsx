import React, { useState } from 'react';

const Navbar = () => {
  const [isSolutionsOpen, setSolutionsOpen] = useState(false);
  const [isPricingOpen, setPricingOpen] = useState(false);
  const [isResourcesOpen, setResourcesOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-white bg-opacity-90 backdrop-blur shadow-md z-50">
      <div className="container mx-auto flex items-center justify-between p-4">
        {/* Logo and Brand */}
        <div className="flex items-center space-x-2">
          <div className="h-10 w-10 bg-vintageGold rounded-full flex items-center justify-center">
            <span className="text-white font-bold">A</span>
          </div>
          <span className="font-display font-bold text-xl text-vintageGold">Abra Chat</span>
        </div>
        {/* Navigation Links */}
        <ul className="flex items-center space-x-6">
          <li>
            <a href="#hero" className="text-gray-700 hover:text-vintageGold">Home</a>
          </li>
          <li
            className="relative"
            onMouseEnter={() => setSolutionsOpen(true)}
            onMouseLeave={() => setSolutionsOpen(false)}
          >
            <button className="text-gray-700 hover:text-vintageGold focus:outline-none">
              Solutions
            </button>
            {isSolutionsOpen && (
              <ul className="absolute left-0 mt-2 w-48 bg-white border rounded shadow-lg">
                <li>
                  <a href="#dtc" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                    Ecommerce
                  </a>
                </li>
                <li>
                  <a href="#retail" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                    Brick-and-Mortar
                  </a>
                </li>
                <li>
                  <a href="#influencer" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                    Influencers
                  </a>
                </li>
              </ul>
            )}
          </li>
          <li>
            <a href="#features" className="text-gray-700 hover:text-vintageGold">Features</a>
          </li>
          <li
            className="relative"
            onMouseEnter={() => setPricingOpen(true)}
            onMouseLeave={() => setPricingOpen(false)}
          >
            <button className="text-gray-700 hover:text-vintageGold focus:outline-none">
              Pricing
            </button>
            {isPricingOpen && (
              <ul className="absolute left-0 mt-2 w-40 bg-white border rounded shadow-lg">
                <li>
                  <a href="#pricing-free" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                    Free
                  </a>
                </li>
                <li>
                  <a href="#pricing-launch" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                    Launch
                  </a>
                </li>
                <li>
                  <a href="#pricing-scale" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                    Scale
                  </a>
                </li>
              </ul>
            )}
          </li>
          <li
            className="relative"
            onMouseEnter={() => setResourcesOpen(true)}
            onMouseLeave={() => setResourcesOpen(false)}
          >
            <button className="text-gray-700 hover:text-vintageGold focus:outline-none">
              Resources
            </button>
            {isResourcesOpen && (
              <ul className="absolute left-0 mt-2 w-40 bg-white border rounded shadow-lg">
                <li>
                  <a href="#blog" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#case-studies" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                    Case Studies
                  </a>
                </li>
              </ul>
            )}
          </li>
          <li>
            <a href="#contact" className="text-gray-700 hover:text-vintageGold">Contact</a>
          </li>
        </ul>
        {/* Call-to-Action Button */}
        <div>
          <a href="#cta" className="bg-vintageGold text-white px-4 py-2 rounded hover:opacity-90">
            Free AI Strategy Session
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
