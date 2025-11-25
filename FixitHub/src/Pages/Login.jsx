import React from 'react'
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  console.log(formData);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Login Successful!');
    navigate('/complain');
  };
 return (
    <div className="register-container">
      <form className="register-box" onSubmit={handleSubmit}>
        <h2 className="title">Student Login</h2>

        <div className="input-field">
          <label>Email</label>
          <input type="email" name="email" placeholder="you@example.com" onChange={handleChange} required />
        </div>

        <div className="input-field">
          <label>Password</label>
          <input type="password" name="password" placeholder="At least 6 characters" onChange={handleChange} required />
        </div>

        <button type="submit" className="btn">Login</button>
        <p className="login-text">Create an account? <Link to="/register">Register</Link></p>
      </form>
    </div>
  );
}

export default Login