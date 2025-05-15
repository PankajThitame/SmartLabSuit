import React, { useState } from 'react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="fixed top-0 left-0 w-full h-16 bg-gray-900 text-white z-50 shadow-md">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
        <div className="text-xl font-bold">MyReactApp</div>
        
        {/* Desktop nav */}
        <nav className="hidden md:flex space-x-6">
          <a href="/" className="hover:text-blue-400">Home</a>
          <a href="/features" className="hover:text-blue-400">Features</a>
          <a href="/about" className="hover:text-blue-400">About</a>
          <a href="/contact" className="hover:text-blue-400">Contact</a>
        </nav>

        {/* Mobile menu button */}
        <button 
          onClick={toggleMenu}
          className="md:hidden focus:outline-none"
          aria-label="Toggle Menu"
        >
          <svg 
            className="h-6 w-6" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24" 
            xmlns="http://www.w3.org/2000/svg"
          >
            {isOpen ? (
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M6 18L18 6M6 6l12 12" 
              />
            ) : (
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M4 6h16M4 12h16M4 18h16" 
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile nav */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2">
          <a href="/home" className="block hover:text-blue-400">Home</a>
          <a href="/features" className="block hover:text-blue-400">Features</a>
          <a href="/about" className="block hover:text-blue-400">About</a>
          <a href="/contact" className="block hover:text-blue-400">Contact</a>
        </div>
      )}
    </header>
  );
};

export default Header;
