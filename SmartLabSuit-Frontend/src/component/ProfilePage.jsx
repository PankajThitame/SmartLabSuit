import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const ProfilePage = () => {
  const { employeeId } = useParams(); // expects route like /profile/:employeeId
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get(`http://localhost:9090/api/users/${employeeId}`);
        setUser(response.data);
      } catch (error) {
        console.error("Failed to fetch user", error);
      }
    };
    fetchUser();
  }, [employeeId]);

  if (!user) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-lg text-gray-500">Loading profile...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 p-6">
      <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-xl p-8">
        <div className="flex items-center space-x-6 mb-6">
          <img
            className="w-24 h-24 rounded-full border-4 border-blue-500 object-cover"
            src={`https://ui-avatars.com/api/?name=${user.name}&background=0D8ABC&color=fff`}
            alt="User Avatar"
          />
          <div>
            <h2 className="text-2xl font-bold text-gray-800">{user.name}</h2>
            <p className="text-gray-600">@{user.username}</p>
            <p className="text-sm text-gray-500">Employee ID: {user.employeeId}</p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-gray-700">
          <div>
            <p className="font-semibold">Email:</p>
            <p>{user.email}</p>
          </div>
          <div>
            <p className="font-semibold">Mobile Number:</p>
            <p>{user.mobileNumber}</p>
          </div>
          <div>
            <p className="font-semibold">Department:</p>
            <p>{user.department}</p>
          </div>
          <div>
            <p className="font-semibold">User Type:</p>
            <p>{user.userType}</p>
          </div>
          <div>
            <p className="font-semibold">Role:</p>
            <p>{user.role}</p>
          </div>
          <div>
            <p className="font-semibold">Account Enabled:</p>
            <p>{user.enabled ? "Yes" : "No"}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
