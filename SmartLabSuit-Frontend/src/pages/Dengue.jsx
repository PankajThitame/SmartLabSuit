import React, { useState } from 'react';
import dengueImg from '../assets/dengue-banner.jpeg';

const Dengue = () => {
  const [formData, setFormData] = useState({
    opdIpd: '',
    location: '',
    vrdl: '',
    hospital: '',
    dateReceived: '',
    otherStateDetails: '',
    state: '',
    district: '',
    patientName: '',
    age: '',
    sex: '',
    pregnancy: '',
    pregnancyMonth: '',
    address: '',
    locality: '',
    contactNumber: '',
    dateSymptoms: '',
    dateCollection: '',
    pod1: '',
    sampleType: '',
    fever1: false,
    headache1: false,
    eyePain1: false,
    bodyPain1: false,
    jointPain1: false,
    rash1: false,
    nauseVomiting: false,
    diarrhea1: false,
    chills1: false,
    petechiae1: false
  });

  const statesAndDistricts = {
    Maharashtra: ['Pune', 'Mumbai', 'Nagpur'],
    Karnataka: ['Bengaluru', 'Mysuru', 'Hubli'],
    TamilNadu: ['Chennai', 'Coimbatore', 'Madurai'],
    Gujarat: ['Ahmedabad', 'Surat', 'Vadodara']
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
      ...(name === 'state' && { district: '' })
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.age < 0) {
      alert('Age cannot be negative');
      return;
    }
    if (!/^[0-9]{10}$/.test(formData.contactNumber)) {
      alert('Enter a valid 10-digit contact number');
      return;
    }
    try {
      const response = await fetch('http://localhost:8080/api/dengue', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      if (response.ok) {
        alert('Data submitted successfully!');
        setFormData({
          opdIpd: '', location: '', vrdl: '', hospital: '', dateReceived: '', otherStateDetails: '',
          state: '', district: '', patientName: '', age: '', sex: '', pregnancy: '', pregnancyMonth: '',
          address: '', locality: '', contactNumber: '', dateSymptoms: '', dateCollection: '', pod1: '',
          sampleType: '', fever1: false, headache1: false, eyePain1: false, bodyPain1: false,
          jointPain1: false, rash1: false, nauseVomiting: false, diarrhea1: false, chills1: false,
          petechiae1: false
        });
      } else {
        alert('Submission failed. Please try again.');
      }
    } catch (error) {
      alert('An error occurred while submitting the form.');
    }
  };

  return (
    <div className="min-h-screen bg-white px-6 py-12">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-8 mb-12">
          <img
            src={dengueImg}
            alt="Dengue Awareness"
            className="w-full md:w-1/2 rounded-lg shadow-md"
          />
          <div>
            <h1 className="text-4xl font-bold mb-4 text-red-700">Dengue Department</h1>
            <p className="text-gray-700 mb-4">
              Dengue fever is a mosquito-borne viral infection causing severe flu-like illness. Our department monitors, analyzes, and researches dengue cases to help with public health decisions and outbreak control.
            </p>
            <p className="text-gray-700">
              We work closely with hospitals, research labs, and health organizations to collect data, provide diagnostic support, and implement effective response strategies.
            </p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6 bg-gray-100 p-8 rounded-lg shadow">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Patient Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <label>
              OPD / IPD
              <input name="opdIpd" onChange={handleChange} value={formData.opdIpd} className="p-2 border rounded w-full" />
            </label>
            <label>
              Location
              <input name="location" onChange={handleChange} value={formData.location} className="p-2 border rounded w-full" />
            </label>
            <label>
              VRDL
              <input name="vrdl" onChange={handleChange} value={formData.vrdl} className="p-2 border rounded w-full" />
            </label>
            <label>
              Hospital
              <input name="hospital" onChange={handleChange} value={formData.hospital} className="p-2 border rounded w-full" />
            </label>
            <label>
              Date Received
              <input type="date" name="dateReceived" onChange={handleChange} value={formData.dateReceived} className="p-2 border rounded w-full" />
            </label>
            <label>
              Other State Details
              <input name="otherStateDetails" onChange={handleChange} value={formData.otherStateDetails} className="p-2 border rounded w-full" />
            </label>
            <label>
              State
              <select name="state" value={formData.state} onChange={handleChange} className="p-2 border rounded w-full">
                <option value="">Select State</option>
                {Object.keys(statesAndDistricts).map((state) => (
                  <option key={state} value={state}>{state}</option>
                ))}
              </select>
            </label>
            <label>
              District
              <select name="district" value={formData.district} onChange={handleChange} className="p-2 border rounded w-full">
                <option value="">Select District</option>
                {formData.state && statesAndDistricts[formData.state].map((district) => (
                  <option key={district} value={district}>{district}</option>
                ))}
              </select>
            </label>
            <label>
              Patient Name
              <input name="patientName" onChange={handleChange} value={formData.patientName} className="p-2 border rounded w-full" />
            </label>
            <label>
              Age
              <input type="number" name="age" onChange={handleChange} value={formData.age} className="p-2 border rounded w-full" />
            </label>
            <label>
              Sex
              <input name="sex" onChange={handleChange} value={formData.sex} className="p-2 border rounded w-full" />
            </label>
            <label>
              Pregnancy (Yes/No)
              <input name="pregnancy" onChange={handleChange} value={formData.pregnancy} className="p-2 border rounded w-full" />
            </label>
            <label>
              Pregnancy Month
              <input name="pregnancyMonth" onChange={handleChange} value={formData.pregnancyMonth} className="p-2 border rounded w-full" />
            </label>
            <label>
              Address
              <textarea name="address" onChange={handleChange} value={formData.address} className="p-2 border rounded w-full" />
            </label>
            <label>
              Locality
              <input name="locality" onChange={handleChange} value={formData.locality} className="p-2 border rounded w-full" />
            </label>
            <label>
              Contact Number
              <input name="contactNumber" onChange={handleChange} value={formData.contactNumber} className="p-2 border rounded w-full" />
            </label>
            <label>
              Date of Symptoms
              <input type="date" name="dateSymptoms" onChange={handleChange} value={formData.dateSymptoms} className="p-2 border rounded w-full" />
            </label>
            <label>
              Date of Collection
              <input type="date" name="dateCollection" onChange={handleChange} value={formData.dateCollection} className="p-2 border rounded w-full" />
            </label>
            <label>
              POD1
              <input name="pod1" onChange={handleChange} value={formData.pod1} className="p-2 border rounded w-full" />
            </label>
            <label>
              Sample Type
              <input name="sampleType" onChange={handleChange} value={formData.sampleType} className="p-2 border rounded w-full" />
            </label>
          </div>

          <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Symptoms Checklist</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {['fever1', 'headache1', 'eyePain1', 'bodyPain1', 'jointPain1', 'rash1', 'nauseVomiting', 'diarrhea1', 'chills1', 'petechiae1'].map((symptom) => (
              <label key={symptom} className="flex items-center gap-2">
                <input
                  type="checkbox"
                  name={symptom}
                  checked={formData[symptom]}
                  onChange={handleChange}
                />
                {symptom.replace(/1$/, '').replace(/([A-Z])/g, ' $1')}
              </label>
            ))}
          </div>

          <button type="submit" className="mt-6 w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
            Submit Experiment Info
          </button>
        </form>
      </div>
    </div>
  );
};

export default Dengue;
