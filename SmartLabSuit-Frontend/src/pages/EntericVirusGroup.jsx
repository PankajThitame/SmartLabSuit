// src/pages/EntericVirusGroup.jsx
import React from 'react';
import entericImg from '../assets/entric.jpeg'; // Add suitable image

const EntericVirusGroup = () => (
  <div className="min-h-screen bg-white px-6 py-12">
    <div className="max-w-6xl mx-auto">
      <div className="flex flex-col md:flex-row items-center gap-8 mb-12">
        <img src={entericImg} alt="Enteric Virus" className="w-full md:w-1/2 rounded-lg shadow-md" />
        <div>
          <h1 className="text-4xl font-bold mb-4 text-green-700">Enteric Virus Group</h1>
          <p className="text-gray-700 mb-4">
            The Enteric Virus Group focuses on the detection and surveillance of viruses that affect the intestinal tract, such as rotavirus, norovirus, and enteroviruses.
          </p>
          <p className="text-gray-700">
            We work on waterborne virus tracking, clinical diagnostics, and epidemiological studies to help reduce gastrointestinal infections, especially in children.
          </p>
        </div>
      </div>
      {/* Form logic can be copied from the Dengue page */}
    </div>
  </div>
);

export default EntericVirusGroup;
