import React from 'react';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-white flex flex-col items-center justify-start pt-24 px-4 sm:px-8">
      
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-3xl mb-20"
      >
        <h1 className="text-5xl font-extrabold text-gray-800 leading-tight">
          Welcome to <span className="text-blue-600">SmartLabSuit</span>
        </h1>
        <p className="mt-4 text-lg text-gray-600">
          Empowering your lab with cutting-edge tools and smart solutions for seamless data handling.
        </p>
        <a
          href="/contact"
          className="inline-block mt-6 px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-full shadow-lg transition"
        >
          Get In Touch
        </a>
      </motion.section>

      {/* Feature Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="w-full max-w-7xl"
      >
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Why Choose Us?</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: 'Innovative Solutions',
              description: 'State-of-the-art tools designed to optimize your workflow.',
            },
            {
              title: 'Customizable Features',
              description: 'Tailored solutions to meet your specific lab needs.',
            },
            {
              title: 'Reliable Support',
              description: '24/7 customer support to ensure everything runs smoothly.',
            },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-md border border-blue-100 hover:shadow-xl transition duration-300"
            >
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </motion.section>
    </div>
  );
};

export default Home;
