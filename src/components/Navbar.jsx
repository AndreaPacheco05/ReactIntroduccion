import React from "react";
import { Link } from "react-router-dom";
import "../assets/css/Navbar.css";

const Navbarrr = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="nav-link">Inicio</Link>
      <Link to="/register" className="nav-link">Registro</Link>
      <Link to="/login" className="nav-link">Ingresar</Link>
      <Link to="/profile" className="nav-link">Perfil</Link>
      <Link to="/cart" className="nav-link">🛒 Total: $xxx</Link>
    </nav>
  );
};

export default Navbarrr;
