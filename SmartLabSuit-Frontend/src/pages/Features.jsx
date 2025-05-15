import { BarChart2, Lock, Database, Download, Bell, Users, Layers, FileText } from 'lucide-react';

const features = [
  {
    title: 'Centralized Data Collection',
    icon: <Database className="w-8 h-8 text-blue-600" />,
    description: 'Collect data from all disease departments into a unified system to reduce paperwork.',
  },
  {
    title: 'Department-wise Segregation',
    icon: <Layers className="w-8 h-8 text-blue-600" />,
    description: 'Separate data logically by departments for better organization and clarity.',
  },
  {
    title: 'Real-Time Analytics',
    icon: <BarChart2 className="w-8 h-8 text-blue-600" />,
    description: 'Visualize statistics and trends using real-time charts and dashboards.',
  },
  {
    title: 'Secure Access Control',
    icon: <Lock className="w-8 h-8 text-blue-600" />,
    description: 'Allow only authorized users to view or modify data with role-based permissions.',
  },
  {
    title: 'Simplified Data Entry',
    icon: <FileText className="w-8 h-8 text-blue-600" />,
    description: 'User-friendly interfaces for easy and error-free data input by staff.',
  },
  {
    title: 'Downloadable Reports',
    icon: <Download className="w-8 h-8 text-blue-600" />,
    description: 'Generate and export structured reports in PDF or Excel formats.',
  },
  {
    title: 'Role-Based Dashboard',
    icon: <Users className="w-8 h-8 text-blue-600" />,
    description: 'Different views for Admin, Department Head, and Staff users.',
  },
  {
    title: 'Alerts & Notifications',
    icon: <Bell className="w-8 h-8 text-blue-600" />,
    description: 'Stay informed with important updates and system alerts.',
  },
];

const Features = () => {
  return (
    <div className="px-6 py-12 bg-gray-50 min-h-screen">
      <h2 className="text-3xl font-bold text-center text-blue-900 mb-10">Platform Features</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {features.map((feature, index) => (
          <div key={index} className="bg-white shadow-lg rounded-2xl p-6 border border-gray-200 hover:shadow-xl transition">
            <div className="mb-4">{feature.icon}</div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">{feature.title}</h3>
            <p className="text-gray-600 text-sm">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
