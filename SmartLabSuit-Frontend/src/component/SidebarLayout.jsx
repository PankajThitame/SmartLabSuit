import Sidebar from './Sidebar'; // Import the sidebar you created
import Header from './Header';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';

const SidebarLayout = () => {
  return (
    <div className="flex min-h-screen">
      <Sidebar />

      <div className="flex-1 flex flex-col">
        <Header />

        <main className="flex-1 p-4">
          <Outlet /> {/* This will render child routes like Home, About, etc. */}
        </main>

        <Footer />
      </div>
    </div>
  );
};

export default SidebarLayout;
