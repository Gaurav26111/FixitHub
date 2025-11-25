import React from "react";
import { Link } from "react-router-dom";
import { FaPlusCircle, FaUserCircle, FaRegBell, FaClipboardList } from "react-icons/fa";
import "../Styles/Home.css";
import NavBar from "../Component/NavBar";
import Footer from "../Component/Footer";

export default function Home() {
  return (
    <>
    <div className="home-container">
      <header className="home-header">
        <h2>FixIt Hub</h2>
        {/* <div className="profile-icon">
          <FaUserCircle size={32} />
        </div> */}
      </header>

      <section className="welcome-card">
        <h3>Hello Student 👋</h3>
        <p>We are here to resolve your issues quickly!</p>
      </section>

      <section className="action-buttons">
        <Link className="action-btn" to="/complain">
          <FaPlusCircle size={25} />
          <span>Register Complaint</span>
        </Link>

        <Link className="action-btn" to="/trackcomplain">
          <FaClipboardList size={25} />
          <span>Track Complaints</span>
        </Link>

        <Link className="action-btn" to="/notifications">
          <FaRegBell size={25} />
          <span>Notifications</span>
        </Link>

        <Link className="action-btn logout" to="/">
          Logout
        </Link>
      </section>

      <section className="announcement">
        <h4>📢 Announcements</h4>
        <ul>
          <li>Library will be closed on this weekend.</li>
          <li>Hostel maintenance work on Wednesday.</li>
          <li>Exam Cell timings changed: 10 AM to 3 PM.</li>
        </ul>
      </section>
    </div>
    <Footer />
    </>
  );
}
