import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios";   // ⬅ install axios:  npm install axios
import '../Styles/Register.css';

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

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:8080/student/register", formData);

      alert("Registration Successful!");
      navigate("/");

    } catch (err) {
      console.error(err);
      alert("Registration Failed!");
    }
  };

  return (
    <div className="register-container">
      <form className="register-box" onSubmit={handleSubmit}>
        <h2 className="title">Student Register</h2>

        <div className="input-field">
          <label>Full Name</label>
          <input type="text" name="name" onChange={handleChange} required />
        </div>

        <div className="row">
          <div className="input-field">
            <label>Age</label>
            <input type="number" name="age" onChange={handleChange} required />
          </div>
          <div className="input-field">
            <label>Mobile</label>
            <input type="text" name="mobile" onChange={handleChange} required />
          </div>
        </div>

        <div className="input-field">
          <label>Student ID</label>
          <input type="text" name="studentId" onChange={handleChange} required />
        </div>

        <div className="input-field">
          <label>Email</label>
          <input type="email" name="email" onChange={handleChange} required />
        </div>

        <div className="input-field">
          <label>Password</label>
          <input type="password" name="password" onChange={handleChange} required />
        </div>

        <button type="submit" className="btn">Register</button>
        <p className="login-text">Already have an account? <Link to="/">Login</Link></p>
      </form>
    </div>
  );
}
