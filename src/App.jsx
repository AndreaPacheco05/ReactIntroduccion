import React from 'react';
import Navbarrr from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import RegisterPage from './components/Register';
import LoginPage from './components/Login';
import './App.css'; 

const App = () => {
  return (
    <div className="app-container">
      <Navbarrr />
      {/* <Home /> */}
      {/*<RegisterPage />*/}
       <LoginPage /> 
      <Footer />
    </div>
  );
};

export default App;
