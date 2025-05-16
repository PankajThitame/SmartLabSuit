import React from 'react';
import { Link } from 'react-router-dom';
import dengueIcon from '../assets/dengue-banner.jpeg'; // Add your images accordingly
import influenzaIcon from '../assets/influenza.jpeg';
import polioIcon from '../assets/polio.jpeg';
import nipahIcon from '../assets/nipah.jpeg';
import hepatitisIcon from '../assets/hepatitis.jpeg';
import chikungunyaIcon from '../assets/chikungunya.jpeg';
import entricIcon from '../assets/entric.jpeg';

const departments = [
  {
    name: 'Entric Virus Group',
    path: '/departments/entric-virus',
    description: 'Focuses on the research and surveillance of enteric viruses affecting the gastrointestinal tract, such as rotavirus and norovirus.',
    icon: entricIcon,
  },
  {
    name: 'Dengue Department',
    path: '/departments/dengue',
    description: 'Monitors dengue virus outbreaks and works on diagnostics, prevention, and vaccine research.',
    icon: dengueIcon,
  },
  {
    name: 'Influenza Department',
    path: '/departments/influenza',
    description: 'Conducts surveillance and genetic analysis of influenza virus strains, including pandemic preparedness.',
    icon: influenzaIcon,
  },
  {
    name: 'Polio Department',
    path: '/departments/polio',
    description: 'Aims to eradicate polio through monitoring, sample analysis, and immunization support.',
    icon: polioIcon,
  },
  {
    name: 'Nipah Department',
    path: '/departments/nipah',
    description: 'Researches the zoonotic Nipah virus with a focus on transmission, pathology, and outbreak control.',
    icon: nipahIcon,
  },
  {
    name: 'Hepatitis Department',
    path: '/departments/hepatitis',
    description: 'Investigates Hepatitis A, B, C, and E virus strains for prevention and control strategies.',
    icon: hepatitisIcon,
  },
  {
    name: 'Chikungunya Department',
    path: '/departments/chikungunya',
    description: 'Studies the mosquito-borne Chikungunya virus and its impact on public health.',
    icon: chikungunyaIcon,
  },
];

const Departments = () => {
  return (
    <div className="min-h-screen bg-white py-16 px-4 sm:px-8 lg:px-20">
      <section className="max-w-5xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-bold text-blue-900 mb-4">Our Specialized Departments</h1>
        <p className="text-gray-700 text-lg">
          At SmartLabSuit, each department plays a critical role in tracking, diagnosing, and researching infectious diseases. Our mission is to provide accurate data and support public health interventions to reduce outbreaks and improve patient outcomes.
        </p>
      </section>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {departments.map((dept, index) => (
          <Link
            to={dept.path}
            key={index}
            className="bg-blue-50 hover:bg-blue-100 transition duration-200 rounded-xl shadow-md p-6 flex flex-col items-center text-center"
          >
            <img
              src={dept.icon}
              alt={dept.name}
              className="h-20 object-contain mb-4"
            />
            <h2 className="text-xl font-semibold text-blue-800">{dept.name}</h2>
            <p className="text-gray-600 text-sm mt-2">{dept.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Departments;
