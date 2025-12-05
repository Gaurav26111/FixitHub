import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "../Styles/AdminRegister.css";

export default function DepartmentRegister() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    adharNumber: "",
    mobile: "",
    email: "",
    password: "",
    departmentId: "",  // important
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
const handleSubmit = async (e) => {
  e.preventDefault();

  if (!formData.departmentId) {
    alert("Please select a department");
    return;
  }

  try {
    const res = await axios.post(
      "http://localhost:8080/department/registerDepartment",
      formData
    );

    alert("Department User Registered Successfully!");
    navigate("/departmentlogin");

  } catch (err) {
    console.error(err);
    alert("Registration Failed!");
  }
};

  return (
    <div className="admin-register-container">
      <form className="admin-register-box" onSubmit={handleSubmit}>
        <h2 className="admin-title">Department Register</h2>

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

        {/* FIXED department selection */}
        <div className="admin-input-field">
          <label>Department</label>
          <select name="departmentId" onChange={handleChange} required>
            <option value="">Select Department</option>
            <option value="1">IT</option>
            <option value="1">Computer Science</option>
            <option value="2">Library</option>
            <option value="3">Hostel</option>
            <option value="4">Exam Cell</option>
            <option value="5">Electricity</option>
          </select>
        </div>

        <div className="admin-input-field">
          <label>Password</label>
          <input type="password" name="password" onChange={handleChange} required />
        </div>

        <button type="submit" className="admin-btn">Register</button>

        <p className="admin-login-text">
          Already have an account? <Link to="/departmentlogin">Department Login</Link>
        </p>
      </form>
    </div>
  );
}
