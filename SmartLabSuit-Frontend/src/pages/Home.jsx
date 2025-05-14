// src/pages/Home.jsx
import React from 'react';

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-blue-100">
      {/* Hero Section */}
      <section className="text-center py-20">
        <h1 className="text-4xl font-bold text-gray-800">Welcome to SmartLabSuit</h1>
        <p className="mt-4 text-lg text-gray-600">
          Empowering your lab with the best tools and solutions for success.
        </p>
        <a href="/contact" className="mt-6 px-6 py-3 text-white bg-blue-600 hover:bg-blue-700 rounded-full">
          Get In Touch
        </a>
      </section>

      {/* Optional Content */}
      <section className="py-12 px-4 text-center">
        <h2 className="text-3xl font-semibold text-gray-800">Why Choose Us?</h2>
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-gray-800">Innovative Solutions</h3>
            <p className="mt-4 text-gray-600">State-of-the-art tools designed to optimize your workflow.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-gray-800">Customizable Features</h3>
            <p className="mt-4 text-gray-600">Tailored solutions to meet your specific lab needs.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-gray-800">Reliable Support</h3>
            <p className="mt-4 text-gray-600">24/7 customer support to ensure everything runs smoothly.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
