import { Home, Users, FileText, BarChart2, Settings, LogOut, MessageSquare, Database, Layers } from 'lucide-react';
import { Link } from 'react-router-dom';

const Sidebar = ({ isOpen, toggleSidebar }) => {
  const menuItems = [
    { label: 'Dashboard', icon: <Home />, path: '/dashboard' },
    { label: 'Departments', icon: <Layers />, path: '/departments' },
    { label: 'Patient Records', icon: <FileText />, path: '/patients' },
    { label: 'Data Entry', icon: <Database />, path: '/data-entry' },
    { label: 'Analytics', icon: <BarChart2 />, path: '/analytics' },
    { label: 'Reports', icon: <FileText />, path: '/reports' },
    { label: 'User Management', icon: <Users />, path: '/users' },
    { label: 'Messages', icon: <MessageSquare />, path: '/messages' },
    { label: 'Settings', icon: <Settings />, path: '/settings' },
    { label: 'Logout', icon: <LogOut />, path: '/logout' },
  ];

  return (
    <div className={`h-full bg-blue-900 text-white flex flex-col ${isOpen ? 'w-64' : 'w-20'} transition-all duration-300`}>
      <div className="flex items-center justify-between p-4 sticky top-0 bg-blue-900 z-10">
        <span className="text-xl font-bold">{isOpen ? 'Research Center' : 'RC'}</span>
        <button onClick={toggleSidebar} className="text-white focus:outline-none">
          ☰
        </button>
      </div>

      <nav className="flex-1 overflow-y-auto hide-scrollbar mb-16">
        {menuItems.map((item, index) => (
          <Link
            key={index}
            to={item.path}
            className="flex items-center gap-4 px-4 py-3 hover:bg-white hover:text-blue-900 transition-all"
          >
            {item.icon}
            {isOpen && <span>{item.label}</span>}
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;
