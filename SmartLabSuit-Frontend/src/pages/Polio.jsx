// src/pages/Polio.jsx
import React from 'react';
import polioImg from '../assets/polio.jpeg';

const Polio = () => (
  <div className="min-h-screen bg-white px-6 py-12">
    <div className="max-w-6xl mx-auto">
      <div className="flex flex-col md:flex-row items-center gap-8 mb-12">
        <img src={polioImg} alt="Polio Surveillance" className="w-full md:w-1/2 rounded-lg shadow-md" />
        <div>
          <h1 className="text-4xl font-bold mb-4 text-purple-700">Polio Surveillance Unit</h1>
          <p className="text-gray-700 mb-4">
            This department monitors acute flaccid paralysis (AFP) cases and environmental samples to ensure complete polio eradication.
          </p>
          <p className="text-gray-700">
            Our mission is to maintain India’s polio-free status and provide real-time tracking of vaccine-derived poliovirus outbreaks.
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default Polio;
