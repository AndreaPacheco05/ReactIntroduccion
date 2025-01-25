import React from 'react';
import { Route, Routes } from 'react-router-dom'
import Footer from './components/Footer';
import Navbarrr from './components/Navbar';
import HomePage from "./views/HomePage";
import RegisterPage from "./views/RegisterPage";
import LoginPage from "./views/LoginPage";
import CartPage from "./views/CartPage";
import PizzaPage from "./views/PizzaPage";
import ProfilePage from "./views/ProfilePage";
import NotFound from "./views/NotFound";
import "./assets/css/App.css";

const App = () => {
  return (
    <div className="app-container">
      <Navbarrr />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/pizza/p001" element={<PizzaPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;