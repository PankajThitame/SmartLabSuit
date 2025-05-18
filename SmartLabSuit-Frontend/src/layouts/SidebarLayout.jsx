import { useState } from 'react';
import Sidebar from '../component/Sidebar';
import Header from '../component/Header';
import Footer from '../component/Footer';
import '../global.css';
import { Outlet } from 'react-router-dom';

const SidebarLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <div className="flex h-screen">
      {/* Sidebar (fixed, scrollable, full height, top offset for header) */}
      <div className="fixed top-16 left-0 h-[calc(100vh-4rem)] overflow-y-auto hide-scrollbar z-10">
        <Sidebar
          isOpen={isSidebarOpen}
          toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)}
        />
      </div>

      {/* Main content area (shifted based on sidebar) */}
      <div
        className="flex flex-col transition-all duration-300 w-full"
        style={{ marginLeft: isSidebarOpen ? '16rem' : '5rem' }}
      >
        <Header />
<<<<<<< HEAD
<<<<<<< HEAD:SmartLabSuit-Frontend/src/layouts/SidebarLayout.jsx
        <main className="flex-1 bg-gray-50 mt-16 p-4 overflow-y-auto !mb-16">
=======
        <main className="flex-1 bg-gray-50 p-4 overflow-y-auto !pb-24">
>>>>>>> 660cc02 (saturday):src/layouts/SidebarLayout.jsx
=======
        <main className="flex-1 bg-gray-50 mt-16 p-4 overflow-y-auto !mb-16">
>>>>>>> 4baf7d7 (sunday frontend)
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default SidebarLayout;
