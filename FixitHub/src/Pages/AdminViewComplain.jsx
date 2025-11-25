import React, { useState } from "react";
import "../Styles/AdminViewComplain.css";
import Footer from "../Component/Footer";
import NavBar from "../Component/NavBar";
import AdminNavBar from "../Component/AdminNavBar";

export default function AdminViewComplain() {
  const [complaints, setComplaints] = useState([
    {
      id: 1,
      title: "Wi-Fi Not Working",
      department: "IT",
      description: "Internet issue in Block A",
      status: "Pending",
    },
    {
      id: 2,
      title: "Fan not working",
      department: "Hostel",
      description: "Fan is broken in Room 203",
      status: "Pending",
    },
    {
      id: 3,
      title: "Books missing",
      department: "Library",
      description: "Some books are not available in the section",
      status: "Pending",
    },
  ]);

  const handleSendToDept = (id) => {
    const updated = complaints.map((c) =>
      c.id === id ? { ...c, status: "Sent to Department" } : c
    );
    setComplaints(updated);
    alert("Complaint sent successfully!");
  };

  return (
    <>
    <div className="admin-view-container">
      <h2>All Student Complaints</h2>

      <table className="complaint-table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Department</th>
            <th>Description</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {complaints.map((c) => (
            <tr key={c.id}>
              <td>{c.title}</td>
              <td>{c.department}</td>
              <td>{c.description}</td>
              <td>{c.status}</td>
              <td>
                <button
                  className="send-btn"
                  onClick={() => handleSendToDept(c.id)}
                  disabled={c.status !== "Pending"}
                >
                  {c.status === "Pending" ? "Send" : "Sent"}
                </button>
              </td>
            </tr>
          ))}
        </tbody>

      </table>
    </div>
    <Footer />
    </>
  );
}