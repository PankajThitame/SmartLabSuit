// src/pages/Signup.jsx
import React, { useState } from 'react';

const Signup = () => {
  const [formData, setFormData] = useState({
    name: '',
    contactNumber: '',
    department: '',
    email: '',
    centreId: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!/^\d{10}$/.test(formData.contactNumber)) {
      alert('Enter a valid 10-digit contact number');
      return;
    }
    console.log('Submitted:', formData);
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row items-center justify-center bg-blue-100 ">
      {/* Form */}
      <div className="w-full bg-white shadow-lg rounded md:w-1/2 p-6 max-w-md">
        <h2 className="text-3xl font-semibold mb-6 text-blue-700">Register</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Full Name"
            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-1 focus:ring-blue-400"
            required
          />
          <input
            type="text"
            name="contactNumber"
            value={formData.contactNumber}
            onChange={handleChange}
            placeholder="Contact Number"
            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-1 focus:ring-blue-400"
            required
          />
          <input
            type="text"
            name="department"
            value={formData.department}
            onChange={handleChange}
            placeholder="Department"
            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-1 focus:ring-blue-400"
            required
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-1 focus:ring-blue-400"
            required
          />
          <input
            type="text"
            name="centreId"
            value={formData.centreId}
            onChange={handleChange}
            placeholder="Centre ID"
            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-1 focus:ring-blue-400"
            required
          />
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
          >
            Sign Up
          </button>
        </form>
      </div>

      {/* Image */}
      </div>
  );
};

export default Signup;
