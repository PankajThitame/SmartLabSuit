'use client';

import { useState } from 'react';
import { Dialog } from '@headlessui/react';
import { Bars3Icon, XMarkIcon, ChevronDownIcon } from '@heroicons/react/24/outline';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-gray-900 text-white">
      <nav className="max-w-7xl mx-auto p-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <a href="#" className="text-2xl font-bold text-white">
              My Company
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-base font-semibold text-white hover:text-indigo-500"
              >
                {item.name}
              </a>
            ))}

            {/* Dropdown Menu */}
            <div className="relative">
              <button className="text-white font-semibold flex items-center space-x-2">
                <span>More</span>
                <ChevronDownIcon className="h-5 w-5" />
              </button>
              <div className="absolute right-0 hidden mt-2 w-48 bg-white text-gray-900 rounded-lg shadow-lg group-hover:block">
                <a href="#" className="block px-4 py-2 text-sm">Privacy Policy</a>
                <a href="#" className="block px-4 py-2 text-sm">Terms of Service</a>
              </div>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:text-white hover:bg-gray-700"
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <Dialog open={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} className="fixed inset-0 z-10">
        <Dialog.Overlay className="fixed inset-0 bg-black opacity-30" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-64 bg-white p-6">
          <div className="flex justify-between">
            <a href="#" className="text-2xl font-bold text-gray-900">
              My Company
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:text-gray-900"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" />
            </button>
          </div>

          <div className="mt-6">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block py-2 text-lg font-semibold text-gray-900 hover:text-indigo-500"
              >
                {item.name}
              </a>
            ))}

            {/* Mobile Dropdown */}
            <div className="mt-4">
              <button className="block w-full text-lg font-semibold text-gray-900 hover:text-indigo-500">
                More
              </button>
              <div className="mt-2 space-y-2">
                <a href="#" className="block py-2 text-sm text-gray-900">Privacy Policy</a>
                <a href="#" className="block py-2 text-sm text-gray-900">Terms of Service</a>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}
