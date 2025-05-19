import React from 'react';

const ProfilePage = () => {
  const user = JSON.parse(localStorage.getItem('user')) || {};

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto bg-white shadow-md rounded-xl overflow-hidden">
        <div className="bg-gradient-to-r from-blue-600 to-indigo-700 p-6">
          <h2 className="text-3xl font-bold text-white">Your Profile</h2>
        </div>
        <div className="p-6 space-y-4">
          <div className="flex items-center space-x-4">
            <div className="w-24 h-24 rounded-full bg-gray-300 flex items-center justify-center text-2xl font-semibold text-white">
              {user.name?.charAt(0).toUpperCase() || 'U'}
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-gray-800">{user.name || 'Unknown User'}</h3>
              <p className="text-sm text-gray-500">{user.role || 'ROLE_USER'}</p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
            <ProfileField label="Email" value={user.email} />
            <ProfileField label="Mobile" value={user.mobileNumber} />
            <ProfileField label="Department" value={user.department} />
            <ProfileField label="User Type" value={user.userType} />
            <ProfileField label="Employee ID" value={user.employeeId} />
            <ProfileField label="Username" value={user.username} />
          </div>
        </div>
      </div>
    </div>
  );
};

const ProfileField = ({ label, value }) => (
  <div className="flex flex-col">
    <span className="text-sm font-medium text-gray-600">{label}</span>
    <span className="text-base text-gray-900">{value || 'N/A'}</span>
  </div>
);

export default ProfilePage;
