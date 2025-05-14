import { useState } from 'react'
import reactLogo from './assets/react.svg'
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
import Login from './pages/Login';
import viteLogo from '/vite.svg'
import './App.css'
import './global.css'
import Header from './component/Header';
import Navbar from './component/Navbar';
import Footer from './component/Footer';
import About from './pages/About';
import Home from './pages/Home';
import Contact from './pages/Contact';

const App = () => {
  return (
    <BrowserRouter>
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <Header />
      <main className="flex-1">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
      </main>
      <Footer />
      </div>
    </BrowserRouter>
  );
};
export default App
