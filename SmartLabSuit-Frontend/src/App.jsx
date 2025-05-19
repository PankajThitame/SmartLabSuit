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
import Signup from './component/Signup';
import DataEntry from './navigation_layout/DataEntry';
import UserDashboard from './component/UserDashboard';


const App = () => {
  return (
    <Router>
      <Routes>
        {/* Login Page without Sidebar */}
        <Route path="/" element={<Login />} />
        <Route path="/sign-up" element={<Signup />} />

        {/* Pages with Sidebar, Header, Footer */}
        <Route element={<SidebarLayout />}>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
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
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
