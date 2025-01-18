import React from 'react';
import Footer from './components/Footer';
import Navbarrr from './components/Navbar';
import Pizza from './components/Pizza';
import Home from './components/Home';
// import Cart from './components/Cart';
// import RegisterPage from './components/Register';
// import LoginPage from './components/Login';

import './App.css';

const App = () => {
  return (
    <div className="app-container">
      <Navbarrr />
      {/* <Home />  */}
      <Pizza />
      {/* <RegisterPage /> */}
      {/* <LoginPage /> */}
      {/* <Cart /> */}
      <Footer />
    </div>
  );
};

export default App;
