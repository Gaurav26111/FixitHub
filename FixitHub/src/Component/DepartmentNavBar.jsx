
import React, { useState } from 'react';
import '../Styles/AdminNavBar.css';
import { FaUser, FaTimes } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

function DepartmentNavBar() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const navigate = useNavigate();

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const handleNavigation = (path) => {
    setSidebarOpen(false);
    navigate(path);
  };

  return (
    <>
      <nav className="journal-navbar">
        <div className="nav-brand">FixItHub</div>
        <ul className="nav-links">
          <li><a href="/departmenthome">Home</a></li>
          <li><a href="/departmentregister">Register</a></li>
          <li><a href="/departmentlogin">Login</a></li>
          <li>
            <span onClick={toggleSidebar}>
              <FaUser className="icon" />
            </span>
          </li>
        </ul>
      </nav>

      {/* Sidebar overlay */}
      <div className={`sidebar-overlay ${sidebarOpen ? 'show' : ''}`} onClick={toggleSidebar}></div>

      {/* Sidebar */}
      <div className={`sidebar ${sidebarOpen ? 'open' : ''}`}>
        <div className="sidebar-header">
          <h3>User Menu</h3>
          <FaTimes className="close-icon" onClick={toggleSidebar} />
        </div>
        <ul className="sidebar-links">
          <li onClick={() => handleNavigation('/profile')}>Profile</li>
          <li onClick={() => handleNavigation('/security')}>Security</li>
          <li onClick={() => handleNavigation('/departmentlogin')}>Logout</li>
        </ul>
      </div>
    </>
  );
}

export default DepartmentNavBar;
