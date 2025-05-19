import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Clear any login/session data
    localStorage.clear();

    // Optionally show a message or delay before redirect
    // Redirect to login page
    navigate('/');
  }, [navigate]);

  return (
    <div className="flex justify-center items-center h-screen">
      <p className="text-xl font-semibold text-gray-700">Logging out...</p>
    </div>
  );
};

export default Logout;
