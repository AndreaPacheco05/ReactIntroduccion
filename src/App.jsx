import React from 'react';
import Navbarrr from './components/Navbar';
import Home from './components/Home';
import Footer from './components/Footer';
import './App.css'; 

const App = () => {
  return (
    <div className="app-container">
      <Navbarrr />
      <Home />
      <Footer />
    </div>
  );
};

export default App;
