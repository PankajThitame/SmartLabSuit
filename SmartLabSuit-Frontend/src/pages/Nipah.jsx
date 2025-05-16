// src/pages/Nipah.jsx
import React from 'react';
import nipahImg from '../assets/nipah.jpeg';

const Nipah = () => (
  <div className="min-h-screen bg-white px-6 py-12">
    <div className="max-w-6xl mx-auto">
      <div className="flex flex-col md:flex-row items-center gap-8 mb-12">
        <img src={nipahImg} alt="Nipah Virus" className="w-full md:w-1/2 rounded-lg shadow-md" />
        <div>
          <h1 className="text-4xl font-bold mb-4 text-red-600">Nipah Virus Research</h1>
          <p className="text-gray-700 mb-4">
            Nipah virus is a zoonotic pathogen with high fatality rates. This department focuses on outbreak preparedness and diagnostic development.
          </p>
          <p className="text-gray-700">
            We collaborate with virology labs, wildlife experts, and emergency response teams for early detection and containment strategies.
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default Nipah;
