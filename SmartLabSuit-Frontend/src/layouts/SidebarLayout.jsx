import { Outlet } from "react-router-dom";
import Sidebar from "../component/Sidebar";
import { useState } from "react";
import Header from "../component/Header";

const SidebarLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

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
        <main className="flex-1 bg-gray-50 mt-16 p-4 overflow-y-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default SidebarLayout;
