import React from 'react';
import { Users, FileText, Layers, BarChart2, Activity } from 'lucide-react';

const Dashboard = () => {
  return (
    <div className="p-6 space-y-6 bg-gray-100 min-h-screen">
      {/* Welcome Header */}
      <div className="bg-blue-100 text-blue-900 p-6 rounded-lg shadow">
        <h1 className="text-3xl font-bold mb-2">Welcome to Research Center Dashboard</h1>
        <p className="text-sm text-blue-800">Manage departments, patient data, staff, and more efficiently.</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard title="Patients" value="1,250" icon={<Users className="w-6 h-6" />} color="bg-white" />
        <StatCard title="Departments" value="12" icon={<Layers className="w-6 h-6" />} color="bg-white" />
        <StatCard title="Records" value="4,320" icon={<FileText className="w-6 h-6" />} color="bg-white" />
        <StatCard title="Reports" value="89" icon={<BarChart2 className="w-6 h-6" />} color="bg-white" />
      </div>

      {/* Charts & Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Placeholder for Chart */}
        <div className="bg-white p-6 rounded-lg shadow min-h-[300px]">
          <h2 className="text-lg font-semibold mb-4">Department-wise Data Overview</h2>
          <div className="flex items-center justify-center h-48 text-gray-400">
            {/* Replace with Chart Component */}
            Chart Placeholder
          </div>
        </div>

        {/* Recent Activity */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-lg font-semibold mb-4">Recent Activity</h2>
          <ul className="space-y-4 text-sm text-gray-700">
            <li className="flex items-start gap-2">
              <Activity className="text-blue-600 w-5 h-5 mt-1" />
              <span>New patient <strong>John Doe</strong> added to Cardiology department.</span>
            </li>
            <li className="flex items-start gap-2">
              <Activity className="text-green-600 w-5 h-5 mt-1" />
              <span>Dr. Smith updated 8 patient records in Neurology.</span>
            </li>
            <li className="flex items-start gap-2">
              <Activity className="text-purple-600 w-5 h-5 mt-1" />
              <span>Monthly report for April 2025 generated.</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

// Stat Card Component
const StatCard = ({ title, value, icon, color }) => (
  <div className={`${color} rounded-lg shadow p-4 flex items-center gap-4`}>
    <div className="p-3 bg-blue-100 text-blue-700 rounded-full">
      {icon}
    </div>
    <div>
      <p className="text-gray-500 text-sm">{title}</p>
      <h3 className="text-xl font-semibold">{value}</h3>
    </div>
  </div>
);

export default Dashboard;
