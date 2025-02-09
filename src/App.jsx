import React, { useContext } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import Footer from './components/Footer';
import Navbarrr from './components/Navbar';
import HomePage from './views/HomePage';
import RegisterPage from './views/RegisterPage';
import LoginPage from './views/LoginPage';
import CartPage from './views/CartPage';
import PizzaPage from './views/PizzaPage';
import ProfilePage from './views/ProfilePage';
import NotFound from './views/NotFound';
import UserContext  from './context/UserContext';
import './assets/css/App.css';

const App = () => {
  const { token } = useContext(UserContext);

  return (
    <div className="app-container">
      <Navbarrr />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/pizza/:id" element={<PizzaPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/login" 
          element={token ? <Navigate to="/" /> : <LoginPage />} 
        />
        <Route path="/register" 
          element={token ? <Navigate to="/" /> : <RegisterPage />} 
        />
        <Route path="/profile" 
          element={token ? <ProfilePage /> : <Navigate to="/login" />} 
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
