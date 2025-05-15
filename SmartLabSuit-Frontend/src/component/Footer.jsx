// src/components/Footer.jsx
import React from 'react';

const Footer = () => {
  return (
    <footer className="fixed bottom-0 left-0 w-full h-16 bg-gray-900 text-white z-50 shadow-md">
      <div className="container mx-auto w-full flex justify-between items-center">
        {/* Left section */}
        <div>
          <p>&copy; 2025 SmartLabSuit. All rights reserved.</p>
        </div>

        {/* Right section - Social Icons */}
        <div className="space-x-4">
          <a href="#" className="hover:text-gray-400">Facebook</a>
          <a href="#" className="hover:text-gray-400">Twitter</a>
          <a href="#" className="hover:text-gray-400">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
