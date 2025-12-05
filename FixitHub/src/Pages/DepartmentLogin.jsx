import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const DepartmentLogin = () => {

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
      const res = await axios.post("http://localhost:8080/department/loginDepartment", formData);

      if (typeof res.data === "string") {
        alert("Invalid Department Credentials!");
        return;
      }

      // Save in localStorage
      localStorage.setItem("departmentUserId", res.data.userId);
      localStorage.setItem("departmentId", res.data.departmentId);
      localStorage.setItem("departmentName", res.data.departmentName);

      alert("Department Login Successful!");
      navigate('/departmenthome');

    } catch (error) {
      console.error(error);
      alert("Login failed. Try again!");
    }
  };

  return (
    <div className="register-container">
      <form className="register-box" onSubmit={handleSubmit}>
        <h2 className="title">Department Login</h2>

        <div className="input-field">
          <label>Email</label>
          <input 
            type="email" 
            name="email" 
            placeholder="you@example.com" 
            onChange={handleChange} 
            required 
          />
        </div>

        <div className="input-field">
          <label>Password</label>
          <input 
            type="password" 
            name="password" 
            placeholder="At least 6 characters" 
            onChange={handleChange} 
            required 
          />
        </div>

        <button type="submit" className="btn">Login</button>

        <p className="login-text">
          Create an account? <Link to="/departmentregister">Department Register</Link>
        </p>

      </form>
    </div>
  );
};

export default DepartmentLogin;
