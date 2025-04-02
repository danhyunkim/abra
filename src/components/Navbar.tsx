import React, { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const toggleMobileMenu = () => setMobileOpen(prev => !prev);

  return (
    <nav className="fixed w-full bg-darkBg bg-opacity-90 backdrop-blur shadow-md z-50">
      <div className="container mx-auto flex items-center justify-between p-4">
        {/* Logo and Brand */}
        <div className="flex items-center space-x-2">
          <div className="h-10 w-10 bg-metallicStart rounded-full flex items-center justify-center">
            <span className="text-darkBg font-heading font-extrabold"></span>
          </div>
          <span className="font-heading text-xl text-metallicStart font-extrabold">Sidekick AI</span>
        </div>
        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center space-x-6 font-heading">
          <li>
            <a href="#hero" className="text-white hover:text-gray-300">Home</a>
          </li>
          <li className="relative group">
            <button className="text-white hover:text-gray-300 focus:outline-none">
              Solutions
            </button>
            <ul className="absolute left-0 mt-2 w-48 bg-darkBg border border-gray-700 rounded shadow-lg opacity-0 group-hover:opacity-100 transition duration-200 z-50">
              <li>
                <a href="#dtc" className="block px-4 py-2 text-white hover:bg-gray-800">Ecommerce</a>
              </li>
              <li>
                <a href="#retail" className="block px-4 py-2 text-white hover:bg-gray-800">Brick-and-Mortar</a>
              </li>
              <li>
                <a href="#influencer" className="block px-4 py-2 text-white hover:bg-gray-800">Influencers</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="#features" className="text-white hover:text-gray-300">Features</a>
          </li>
          <li className="relative group">
            <button className="text-white hover:text-gray-300 focus:outline-none">
              Pricing
            </button>
            <ul className="absolute left-0 mt-2 w-40 bg-darkBg border border-gray-700 rounded shadow-lg opacity-0 group-hover:opacity-100 transition duration-200 z-50">
              <li>
                <a href="#pricing-free" className="block px-4 py-2 text-white hover:bg-gray-800">Free</a>
              </li>
              <li>
                <a href="#pricing-launch" className="block px-4 py-2 text-white hover:bg-gray-800">Launch</a>
              </li>
              <li>
                <a href="#pricing-scale" className="block px-4 py-2 text-white hover:bg-gray-800">Scale</a>
              </li>
            </ul>
          </li>
          <li className="relative group">
            <button className="text-white hover:text-gray-300 focus:outline-none">
              Resources
            </button>
            <ul className="absolute left-0 mt-2 w-40 bg-darkBg border border-gray-700 rounded shadow-lg opacity-0 group-hover:opacity-100 transition duration-200 z-50">
              <li>
                <a href="#blog" className="block px-4 py-2 text-white hover:bg-gray-800">Blog</a>
              </li>
              <li>
                <a href="#case-studies" className="block px-4 py-2 text-white hover:bg-gray-800">Case Studies</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="#contact" className="text-white hover:text-gray-300">Contact</a>
          </li>
        </ul>
        {/* Desktop CTA Button */}
        <div className="hidden md:block">
          <a href="#cta" className="bg-gradient-to-r from-ctaGradientFrom to-ctaGradientTo text-darkBg px-4 py-2 rounded hover:opacity-90 focus:outline-none">
            Free Demo
          </a>
        </div>
        {/* Mobile Hamburger Menu */}
        <div className="md:hidden">
          <button onClick={toggleMobileMenu} className="text-white focus:outline-none">
            {mobileOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>
      {/* Mobile Menu Overlay */}
      {mobileOpen && (
        <div className="md:hidden mobile-menu absolute top-16 left-0 w-full p-4 space-y-4">
          <a href="#hero" className="block text-white hover:text-gray-300">Home</a>
          <div className="space-y-2">
            <span className="block text-white">Solutions</span>
            <div className="ml-4 space-y-1">
              <a href="#dtc" className="block text-white hover:text-gray-300">Ecommerce</a>
              <a href="#retail" className="block text-white hover:text-gray-300">Brick-and-Mortar</a>
              <a href="#influencer" className="block text-white hover:text-gray-300">Influencers</a>
            </div>
          </div>
          <a href="#features" className="block text-white hover:text-gray-300">Features</a>
          <div className="space-y-2">
            <span className="block text-white">Pricing</span>
            <div className="ml-4 space-y-1">
              <a href="#pricing-free" className="block text-white hover:text-gray-300">Free</a>
              <a href="#pricing-launch" className="block text-white hover:text-gray-300">Launch</a>
              <a href="#pricing-scale" className="block text-white hover:text-gray-300">Scale</a>
            </div>
          </div>
          <div className="space-y-2">
            <span className="block text-white">Resources</span>
            <div className="ml-4 space-y-1">
              <a href="#blog" className="block text-white hover:text-gray-300">Blog</a>
              <a href="#case-studies" className="block text-white hover:text-gray-300">Case Studies</a>
            </div>
          </div>
          <a href="#contact" className="block text-white hover:text-gray-300">Contact</a>
          <a href="#cta" className="block bg-gradient-to-r from-ctaGradientFrom to-ctaGradientTo text-darkBg px-4 py-2 rounded hover:opacity-90 text-center">
            Schedule Free AI Strategy Session
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
