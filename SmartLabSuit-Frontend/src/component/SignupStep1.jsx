// src/pages/SignupStep1.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SignupStep1 = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    department: '',
    email: '',
    employeeId: '',
    mobileNumber: '',
    name: '',
    role: 'ROLE_USER',
    userType: '',
  });

  const departments = ['Dengue', 'Influenza', 'Chikungunya', 'Enteric Virus', 'Hepatitis', 'Nipah', 'Polio'];
  const employmentTypes = ['Permanent', 'Temporary', 'On Project', 'Student'];

  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const validateMobile = (mobile) => /^\d{10}$/.test(mobile);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleNext = (e) => {
    e.preventDefault();
    if (!validateEmail(formData.email)) return alert("Enter a valid email.");
    if (!validateMobile(formData.mobileNumber)) return alert("Enter a valid 10-digit mobile number.");

    localStorage.setItem("signupStep1", JSON.stringify(formData));
    navigate('/signup-step2');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-100 to-blue-200 px-4">
      <div className="bg-white p-8 rounded-2xl shadow-2xl w-full max-w-md">
        <h2 className="text-3xl font-extrabold mb-6 text-center text-blue-700">Step 1: Basic Information</h2>
        <form onSubmit={handleNext} className="space-y-5">

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">Full Name</label>
            <input
              name="name"
              placeholder="Enter your full name"
              required
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-400 focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">Email</label>
            <input
              name="email"
              type="email"
              placeholder="Enter your email"
              required
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-400 focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">Employee ID</label>
            <input
              name="employeeId"
              placeholder="Enter employee ID"
              required
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-400 focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">Mobile Number</label>
            <input
              name="mobileNumber"
              placeholder="10-digit mobile number"
              required
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-400 focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">Department</label>
            <select
              name="department"
              required
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-400 focus:outline-none"
            >
              <option value="">-- Select Department --</option>
              {departments.map(dep => (
                <option key={dep} value={dep}>{dep}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">Employment Type</label>
            <select
              name="employmentType"
              required
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-400 focus:outline-none"
            >
              <option value="">-- Select Employment Type --</option>
              {employmentTypes.map(type => (
                <option key={type} value={type}>{type}</option>
              ))}
            </select>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-semibold py-2 rounded-md hover:bg-blue-700 transition-all duration-200 shadow-md"
          >
            Next
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignupStep1;
