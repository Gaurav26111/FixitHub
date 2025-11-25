import React from "react";
import { Link } from "react-router-dom";
import "../Styles/AdminHome.css";
import NavBar from "../Component/NavBar";
import AdminNavBar from "../Component/AdminNavBar";

const AdminHome = () => {
  return (
    <>
    <div className="admin-home-container">
      <h1>Welcome Admin 👋</h1>
      <p>Manage complaints and keep FixitHub running smoothly!</p>

      <div className="admin-card-container">
        <Link to="/adminviewcomplain" className="admin-card">
          <h3>📂 View Complaints</h3>
          <p>Check detailed list of student complaints</p>
        </Link>

        <Link to="/track" className="admin-card">
          <h3>🔍 Track Status</h3>
          <p>Track complaints and update their progress</p>
        </Link>

        <Link to="/profile" className="admin-card">
          <h3>👤 Admin Profile</h3>
          <p>Manage your account and details</p>
        </Link>
      </div>
    </div>
    </>
  );
};

export default AdminHome;
