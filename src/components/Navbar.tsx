import React from 'react';

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full bg-white bg-opacity-80 backdrop-blur shadow-md z-50">
      <div className="container mx-auto flex items-center justify-between p-4">
        <div className="flex items-center space-x-2">
          <div className="h-8 w-8 bg-vintageGold rounded-full flex items-center justify-center">
            <span className="text-white font-bold">A</span>
          </div>
          <span className="font-display font-bold text-xl text-vintageGold">Abra</span>
        </div>
        <div className="hidden md:flex space-x-6">
          <a href="#hero" className="text-gray-700 hover:text-vintageGold">Home</a>
          <a href="#features" className="text-gray-700 hover:text-vintageGold">Services</a>
          <a href="#cta" className="text-gray-700 hover:text-vintageGold">Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
