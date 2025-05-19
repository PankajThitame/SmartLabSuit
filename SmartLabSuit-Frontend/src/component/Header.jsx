import React, { useState, useRef, useEffect } from 'react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleProfile = () => setProfileOpen(!profileOpen);

  const handleLogout = () => {
    window.location.href = '/logout';
};

  // Close profile dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setProfileOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <header className="fixed top-0 left-0 w-full h-16 bg-gray-900 text-white z-50 shadow-md">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
        {/* Logo/Brand */}
        <div className="text-xl font-bold">SmartLabSuit</div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-6">
          <a href="/home" className="hover:text-gray-300">Home</a>
          <a href="/features" className="hover:text-gray-300">Features</a>
          <a href="/about" className="hover:text-gray-300">About</a>
          <a href="/contact" className="hover:text-gray-300">Contact</a>
        </nav>

        {/* Right side: Profile Avatar */}
        <div className="relative mr-6" ref={dropdownRef}>
          <button
            onClick={toggleProfile}
            className="focus:outline-none rounded-full border-2 border-white"
          >
            <img
              src="https://via.placeholder.com/32"
              alt="Profile"
              className="w-8 h-8 rounded-full object-cover"
            />
          </button>

          {profileOpen && (
            <div className="absolute right-0 mt-2 w-40 bg-white text-black rounded-md shadow-lg overflow-y-auto max-h-48 z-50">
              <a href="/profile" className="block px-4 py-2 hover:bg-gray-200">Profile</a>
              <button
  className="w-full text-left px-4 py-2 hover:bg-gray-200"
  onClick={handleLogout}
>
  Logout
</button>
            </div>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden focus:outline-none ml-2"
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
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile nav */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2 bg-gray-800">
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
