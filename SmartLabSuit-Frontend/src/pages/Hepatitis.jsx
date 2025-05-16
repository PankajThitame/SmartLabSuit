// src/pages/Hepatitis.jsx
import React from 'react';
import hepatitisImg from '../assets/hepatitis.jpeg';

const Hepatitis = () => (
  <div className="min-h-screen bg-white px-6 py-12">
    <div className="max-w-6xl mx-auto">
      <div className="flex flex-col md:flex-row items-center gap-8 mb-12">
        <img src={hepatitisImg} alt="Hepatitis Research" className="w-full md:w-1/2 rounded-lg shadow-md" />
        <div>
          <h1 className="text-4xl font-bold mb-4 text-yellow-700">Hepatitis Surveillance</h1>
          <p className="text-gray-700 mb-4">
            Hepatitis viruses (A–E) are monitored by this unit through lab testing, water quality assessments, and post-vaccine surveillance programs.
          </p>
          <p className="text-gray-700">
            Special emphasis is placed on outbreak response in slums and flood-prone areas where water contamination is high.
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default Hepatitis;
