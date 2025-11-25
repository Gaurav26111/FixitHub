import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../Styles/AdminRegister.css";

export default function AdminRegister() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    department: "",
    userName: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  console.log(formData);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Admin Registered Successfully!");
    navigate("/login");
  };

  return (
    <div className="admin-register-container">
      <form className="admin-register-box" onSubmit={handleSubmit}>
        <h2 className="admin-title">Admin Register</h2>

        <div className="admin-input-field">
          <label>Full Name</label>
          <input
            type="text"
            name="fullName"
            placeholder="Admin full name"
            onChange={handleChange}
            required
          />
        </div>

        <div className="admin-input-field">
          <label>Email</label>
          <input
            type="email"
            name="email"
            placeholder="admin@example.com"
            onChange={handleChange}
            required
          />
        </div>

        <div className="admin-input-field">
          <label>Department</label>
          <input
            type="text"
            name="department"
            placeholder="Department name"
            onChange={handleChange}
            required
          />
        </div>

        <div className="admin-input-field">
          <label>Username</label>
          <input
            type="text"
            name="userName"
            placeholder="Choose a username"
            onChange={handleChange}
            required
          />
        </div>

        <div className="admin-input-field">
          <label>Password</label>
          <input
            type="password"
            name="password"
            placeholder="At least 6 characters"
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit" className="admin-btn">Register</button>
        <p className="admin-login-text">
          Already have an account? <Link to="/login">Admin Login</Link>
        </p>
      </form>
    </div>
  );
}
