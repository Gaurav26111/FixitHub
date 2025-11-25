import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../Styles/Register.css'; // 👉 New CSS file for styling

export default function Register() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    age: '',
    mobile: '',
    email: '',
    studentId: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  console.log(formData);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Registration Successful!');
    navigate('/login');
  };

  return (
    <div className="register-container">
      <form className="register-box" onSubmit={handleSubmit}>
        <h2 className="title">Student Register</h2>

        <div className="input-field">
          <label>Full Name</label>
          <input type="text" name="name" placeholder="Your full name" onChange={handleChange} required />
        </div>

        <div className="row">
          <div className="input-field">
            <label>Age</label>
            <input type="number" name="age" placeholder="Age" onChange={handleChange} required />
          </div>
          <div className="input-field">
            <label>Mobile</label>
            <input type="text" name="mobile" placeholder="10-digit mobile" onChange={handleChange} required />
          </div>
        </div>

        <div className="input-field">
          <label>StudentID</label>
          <input type="text" name="studentId" placeholder="Student Id" onChange={handleChange} required />
        </div>

        <div className="input-field">
          <label>Email</label>
          <input type="email" name="email" placeholder="you@example.com" onChange={handleChange} required />
        </div>

        <div className="input-field">
          <label>Password</label>
          <input type="password" name="password" placeholder="At least 6 characters" onChange={handleChange} required />
        </div>

        <button type="submit" className="btn">Register</button>
        <p className="login-text">Already have an account? <Link to="/">Login</Link></p>
      </form>
    </div>
  );
}
