import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';
import './global.css';

import Login from './pages/Login';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import SidebarLayout from './component/SidebarLayout';

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Login Page without Sidebar */}
        <Route path="/" element={<Login />} />

        {/* Pages with Sidebar, Header, Footer */}
        <Route element={<SidebarLayout />}>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
