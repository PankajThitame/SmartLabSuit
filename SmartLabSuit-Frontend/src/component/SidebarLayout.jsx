import Sidebar from './Sidebar'; // Import the sidebar you created
import Header from './Header';
import Footer from './Footer';
import '../global.css';
import { Outlet } from 'react-router-dom';

const SidebarLayout = () => {
  return (
    // <div className="flex min-h-screen">
    //   <Sidebar />

      <div className="flex-1 flex flex-col">
        <Header />
        <div className="flex min-h-screen">
        <Sidebar />
        <main className="flex-1 flex items-center justify-center min-h-screen bg-gray-50">
        <Outlet /> {/* This will render child routes like Home, About, etc. */}
        </main>

        <Footer />
      </div>
    </div>
  );
};

export default SidebarLayout;
