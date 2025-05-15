import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';
import './global.css';

import Header from './component/Header';
import Footer from './component/Footer';

import Login from './pages/Login';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';

const App = () => {
  return (
    <Router>
      <div className="flex items-center min-h-screen">
        {/* Header (if fixed/sticky, adjust with padding in <main>) */}
        <Header />

        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
};

export default App;
