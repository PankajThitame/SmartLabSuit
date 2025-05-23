import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';
import './global.css';

import Login from './pages/Login';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import SidebarLayout from './layouts/SidebarLayout';
import Features from './pages/Features';
import Dashboard from './pages/Dashboard';
import Departments from './pages/Departments';
import Dengue from './pages/Dengue';
import Chikungunya from './pages/Chikungunya';
import EntericVirusGroup from './pages/EntericVirusGroup';
import Polio from './pages/Polio';
import Nipah from './pages/Nipah';
import Hepatitis from './pages/Hepatitis';
import Influenza from './pages/Influenza';
import Signup from './component/SignupStep1';
import Signup1 from './component/SignupStep2';
import DataEntry from './navigation_layout/DataEntry';
import UserDashboard from './component/UserDashboard';
import Logout from './component/Logout';
import ProfilePage from './component/ProfilePage';

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Login Page without Sidebar */}
        <Route path="/" element={<Login />} />
        <Route path="/sign-up" element={<Signup />} />
        <Route path="/signup-step2" element={<Signup1 />} />

        {/* Pages with Sidebar, Header, Footer */}
        <Route element={<SidebarLayout />}>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/features" element={<Features />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/user-dashboard" element={<UserDashboard />} />
          <Route path="/departments" element={<Departments />} />
          <Route path="/departments/dengue" element={<Dengue />} />
          <Route path="/departments/chikungunya" element={<Chikungunya />} />
          <Route path="/departments/entric-virus" element={<EntericVirusGroup />} />
          <Route path="/departments/polio" element={<Polio />} />
          <Route path="/departments/nipah" element={<Nipah />} />
          <Route path="/departments/hepatitis" element={<Hepatitis />} />
          <Route path="/departments/influenza" element={<Influenza />} />
          <Route path="/data-entry" element={<DataEntry />} />
          <Route path="/data-entry/dengue" element={<Dengue />} />
          <Route path="/data-entry/chikungunya" element={<Chikungunya />} />
          <Route path="/data-entry/entric-virus" element={<EntericVirusGroup />} />
          <Route path="/data-entry/polio" element={<Polio />} />
          <Route path="/data-entry/nipah" element={<Nipah />} />
          <Route path="/data-entry/hepatitis" element={<Hepatitis />} />
          <Route path="/data-entry/influenza" element={<Influenza />} />
          <Route path="/profile" element={<ProfilePage />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
