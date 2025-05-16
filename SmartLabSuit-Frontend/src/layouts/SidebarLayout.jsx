import { useState } from 'react';
import Sidebar from '../component/Sidebar';
import Header from '../component/Header';
import Footer from '../component/Footer';
import '../global.css';
import { Outlet } from 'react-router-dom';

const SidebarLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <div className="flex">
      {/* Sidebar */}
      <div className="fixed my-16">
        <Sidebar isOpen={isSidebarOpen} toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />
      </div>

      {/* Main layout shifted right based on sidebar */}
      <div
        className={`flex flex-col transition-all duration-300 w-full`}
        style={{ marginLeft: isSidebarOpen ? '16rem' : '5rem' }} // 64 = 16rem, 20 = 5rem
      >
        <Header />
        <main className="flex-1 min-h-screen my-12 bg-gray-50 p-4">
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default SidebarLayout;
