// src/components/Navbar.jsx
import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <a href="/" className="text-2xl font-semibold">SmartLabSuit</a>

        {/* Menu */}
        <div className="space-x-6 hidden md:flex">
          <a href="/" className="hover:text-gray-400">Home</a>
          <a href="/about" className="hover:text-gray-400">About</a>
          <a href="/contact" className="hover:text-gray-400">Contact</a>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button className="text-white">☰</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
