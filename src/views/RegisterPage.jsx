import React, { useState } from 'react';
import '../assets/css/Register.css';


const RegisterPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password || !confirmPassword) {
      alert('All fields are required.');
      return;
    }
    if (password.length < 6) {
      alert('Password must be at least 6 characters.');
      return;
    }
    if (password !== confirmPassword) {
      alert('Passwords do not match.');
      return;
    }
    alert('Authentication successful!');
  };
  

  return (
    <div className="container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email</label>
          <input 
            type="email" 
            id="email" 
            className="form-control" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            placeholder="Enter your email"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password</label>
          <input 
            type="password" 
            id="password" 
            className="form-control" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            placeholder="Enter your password"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="confirmPassword" className="form-label">Repeat Password</label>
          <input 
            type="password" 
            id="confirmPassword" 
            className="form-control" 
            value={confirmPassword} 
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="Enter your password again" 
          />
        </div>
        <button type="submit" className="btn btn-primary">Login</button>
      </form>
      {message && <div className="mt-3 alert alert-info">{message}</div>}
    </div>
  );
};

export default RegisterPage;
