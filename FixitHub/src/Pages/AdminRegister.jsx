import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "../Styles/AdminRegister.css";

export default function AdminRegister() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    adharNumber: "",
    mobile: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:8080/admin/register", formData);
      alert("Admin Registered Successfully!");
      navigate("/Adminlogin");
    } catch (err) {
      console.error(err);
      alert("Registration Failed!");
    }
  };

  return (
    <div className="admin-register-container">
      <form className="admin-register-box" onSubmit={handleSubmit}>
        <h2 className="admin-title">Admin Register</h2>

        <div className="admin-input-field">
          <label>Full Name</label>
          <input type="text" name="name" onChange={handleChange} required />
        </div>

        <div className="admin-input-field">
          <label>Email</label>
          <input type="email" name="email" onChange={handleChange} required />
        </div>

        <div className="admin-input-field">
          <label>Adhar Card Number</label>
          <input type="number" name="adharNumber" onChange={handleChange} required />
        </div>

        <div className="admin-input-field">
          <label>Mobile</label>
          <input type="number" name="mobile" onChange={handleChange} required />
        </div>

        <div className="admin-input-field">
          <label>Password</label>
          <input type="password" name="password" onChange={handleChange} required />
        </div>

        <button type="submit" className="admin-btn">Register</button>
        <p className="admin-login-text">
          Already have an account? <Link to="/Adminlogin">Admin Login</Link>
        </p>
      </form>
    </div>
  );
}
