import React from "react";
import { Link } from "react-router-dom";
import "../Styles/DepartmentHome.css";
import DepartmentNavBar from "../Component/DepartmentNavBar";

export default function DepartmentHome() {
  return (
    <>
      <DepartmentNavBar />
      <div className="dept-home-container">
      <h1>Welcome Department Dashboard</h1>
      <p>Manage and resolve student complaints assigned to your department.</p>

      <div className="dept-card-container">

        <Link to="/departassignedcomplain" className="dept-card">
          <h3>Assigned Complaints</h3>
          <p>View and update complaints forwarded by admin.</p>
        </Link>

        <Link to="/departresolvedcomplain" className="dept-card">
          <h3>Resolved Complaints</h3>
          <p>Check list of already resolved complaints.</p>
        </Link>

        <Link to="/profile" className="dept-card">
          <h3>Department Profile</h3>
          <p>View or update your department details.</p>
        </Link>

      </div>
    </div>
    </>
  );
}
