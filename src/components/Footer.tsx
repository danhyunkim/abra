import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer id="contact" className="py-8 bg-white border-t">
      <div className="container mx-auto text-center text-gray-600">
        <p>© {currentYear} Abra Chat: Automate Intelligently, Grow Confidently, Stay Personal.</p>
        <div className="mt-2 space-x-4">
          <a href="#" className="hover:text-vintageGold">LinkedIn</a>
          <a href="#" className="hover:text-vintageGold">Twitter</a>
          <a href="#" className="hover:text-vintageGold">Facebook</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
