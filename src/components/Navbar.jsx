import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Navbarrr = () => {
  const total = 25000;
  const token = false;

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <h1>Pizzeria Mamma Mia</h1>
        <button className="btn btn-outline-primary ms-2">🍕 Home</button>
        {token ? (
          <>
            <button className="btn btn-outline-primary ms-2">🔓 Profile</button>
            <button className="btn btn-outline-danger ms-2">🔒 Logout</button>
          </>
        ) : (
          <>
            <button className="btn btn-outline-success ms-2">🔐 Login</button>
            <button className="btn btn-outline-warning ms-2">🔐 Register</button>
          </>
        )}
        <button className="btn btn-outline-info ms-2">
          🛒 Total: ${total.toLocaleString('en-US')}
        </button>
      </div>
    </nav>
  );
};

export default Navbarrr;
