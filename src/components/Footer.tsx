import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer id="contact" className="py-8 bg-[#1a1a1a] border-t border-gray-700">
      <div className="container mx-auto text-center text-white">
        <p>© {currentYear} Sidekick AI Chatbots. Empowering businesses with reliable, 24/7 support.</p>
        <div className="mt-2 flex justify-center space-x-4">
          <a href="#" className="hover:text-metallicStart">LinkedIn</a>
          <a href="#" className="hover:text-metallicStart">Twitter</a>
          <a href="#" className="hover:text-metallicStart">Facebook</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
