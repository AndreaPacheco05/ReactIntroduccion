import React from 'react';
import Navbarrr from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import Cart from './components/Cart';
// import RegisterPage from './components/Register';
// import LoginPage from './components/Login';
import './App.css'; 

const App = () => {
  return (
    <div className="app-container">
      <Navbarrr />
      <Home />
      {/* <Cart /> */}
      {/* <RegisterPage /> */}
      {/* <LoginPage /> */}
      <Footer />
    </div>
  );
};

export default App;
