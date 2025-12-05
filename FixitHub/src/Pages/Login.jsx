import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import "../Styles/Register.css";   // same CSS

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

const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const res = await axios.post("http://localhost:8080/student/login", formData);

    if (typeof res.data === "string") {
      alert("Invalid Credentials!");
      return;
    }

    // Save only studentId
    localStorage.setItem("studentId", res.data.studentId);

    alert("Login Successful!");
    navigate("/home");

  } catch (err) {
    console.error(err);
    alert("Something went wrong!");
  }
};

  return (
    <div className="register-container">
      <form className="register-box" onSubmit={handleSubmit}>
        <h2 className="title">Student Login</h2>

        <div className="input-field">
          <label>Email</label>
          <input type="email" name="email" onChange={handleChange} required />
        </div>

        <div className="input-field">
          <label>Password</label>
          <input type="password" name="password" onChange={handleChange} required />
        </div>

        <button type="submit" className="btn">Login</button>
        <p className="login-text">
          Create an account? <Link to="/register">Register</Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
