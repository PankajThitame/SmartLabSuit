import React from 'react';
import chikungunyaImg from '../assets/chikungunya.jpeg';

const Chikungunya = () => {
  return (
    <div className="min-h-screen bg-white px-6 py-12">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-8 mb-12">
          <img
            src={chikungunyaImg}
            alt="Chikungunya Department"
            className="w-full md:w-1/2 rounded-lg shadow-md"
          />
          <div>
            <h1 className="text-4xl font-bold mb-4 text-blue-700">Chikungunya Department</h1>
            <p className="text-gray-700 mb-4">
              The Chikungunya Department deals with the monitoring and control of Chikungunya virus, a mosquito-borne disease causing joint pain and fever. We focus on outbreak surveillance and vector management strategies.
            </p>
            <p className="text-gray-700">
              Our team provides laboratory support, coordinates field investigations, and raises awareness to reduce the disease burden, especially during monsoon seasons.
            </p>
          </div>
        </div>

        <div className="text-gray-600 text-center italic">
          Forms and reports related to this department will be added soon.
        </div>
      </div>
    </div>
  );
};

export default Chikungunya;
