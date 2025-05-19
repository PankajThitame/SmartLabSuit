import React, { useState } from 'react';
import axios from 'axios';
import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver';

const ProfileExport = () => {
  const [employeeId, setEmployeeId] = useState('');
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState('');

  const fetchProfile = async () => {
    setError('');
    setUserData(null);
    try {
      const response = await axios.get(`http://localhost:9090/api/users/${employeeId}`);
      setUserData(response.data);
    } catch (err) {
      setError('User not found or server error.');
      console.error(err);
    }
  };

  const exportToExcel = () => {
    if (!userData) return;

    // Convert object to array
    const dataArray = [userData];
    const worksheet = XLSX.utils.json_to_sheet(dataArray);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'UserProfile');

    // Create and save Excel file
    const excelBuffer = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
    const blob = new Blob([excelBuffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });

    const fileName = `UserProfile_${userData.employeeId || 'unknown'}.xlsx`;
    saveAs(blob, fileName);
  };

  return (
    <div className="p-6 max-w-md mx-auto bg-white rounded shadow mt-10">
      <h2 className="text-xl font-bold mb-4">Export User Profile</h2>

      <input
        type="text"
        value={employeeId}
        onChange={(e) => setEmployeeId(e.target.value)}
        placeholder="Enter Employee ID"
        className="border px-3 py-2 rounded w-full mb-4"
      />

      <div className="flex gap-4">
        <button
          onClick={fetchProfile}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Fetch Profile
        </button>

        {userData && (
          <button
            onClick={exportToExcel}
            className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
          >
            Download Excel
          </button>
        )}
      </div>

      {error && <p className="text-red-600 mt-3">{error}</p>}
    </div>
  );
};

export default ProfileExport;
