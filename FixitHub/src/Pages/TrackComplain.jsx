import React, { useState } from "react";
import "../Styles/TrackComplain.css";
import NavBar from "../Component/NavBar";
import Footer from "../Component/Footer";

const TrackComplain = () => {
  const [complaintId, setComplaintId] = useState("");
  const [status, setStatus] = useState(null);
  const [error, setError] = useState("");

  // Dummy Complaint Data
  const complaints = [
    { id: "101", status: "Pending" },
    { id: "102", status: "In Progress" },
    { id: "103", status: "Resolved" },
    { id: "104", status: "Rejected" },
  ];

  const handleTrack = () => {
    const complaint = complaints.find((c) => c.id === complaintId);

    if (complaint) {
      setStatus(complaint.status);
      setError("");
    } else {
      setStatus(null);
      setError("No Complaint Found With This ID!");
    }
  };

  return (
    <>
    <div className="track-container">
      <h2>Track Your Complaint</h2>
      <p>Enter your complaint ID to check the current status.</p>

      <input
        type="text"
        placeholder="Enter Complaint ID"
        value={complaintId}
        onChange={(e) => setComplaintId(e.target.value)}
      />

      <button onClick={handleTrack}>Track Status</button>

      {status && (
        <p className="success">
          Current Status: <strong>{status}</strong>
        </p>
      )}

      {error && <p className="error">{error}</p>}
    </div>
    <Footer />
    </>
  );
};

export default TrackComplain;
