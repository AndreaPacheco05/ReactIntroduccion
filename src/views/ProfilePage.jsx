import React from "react";
import "../assets/css/Profile.css";

const ProfilePage = () => {
  const email = "unusuariomuyreal@gmail.com";

  const handleLogout = () => {
    console.log("Cerrar sesión");

  };

  return (
    <div className="container">
      <h2>Perfil</h2>
      <p>Email: {email}</p>
      <button onClick={handleLogout}>
        Cerrar sesión
      </button>
    </div>
  );
};

export default ProfilePage;