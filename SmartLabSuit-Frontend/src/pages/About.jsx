// src/pages/About.jsx
import React from 'react';

const About = () => {
  return (
    <div className=" bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-gray-800">About Us</h1>
        <p className="mt-4 text-lg text-gray-600">
          SmartLabSuit is committed to revolutionizing lab management with cutting-edge solutions.
        </p>
      </div>

      <section className="mt-12 text-center">
        <h2 className="text-3xl font-semibold text-gray-800">Our Mission</h2>
        <p className="mt-4 text-lg text-gray-600">
          We aim to simplify lab management and empower researchers to focus on their work, not on logistics.
        </p>
      </section>

      <section className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold text-gray-800">Our Values</h3>
          <p className="mt-4 text-gray-600">Integrity, innovation, and excellence guide our approach.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold text-gray-800">Our Team</h3>
          <p className="mt-4 text-gray-600">A passionate group of scientists, engineers, and innovators.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold text-gray-800">Our Vision</h3>
          <p className="mt-4 text-gray-600">To be the world leader in lab management software.</p>
        </div>
      </section>
    </div>
  );
};

export default About;
