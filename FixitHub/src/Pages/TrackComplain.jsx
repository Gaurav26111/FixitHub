import React, { useState } from "react";
import axios from "axios";
import "../Styles/TrackComplain.css";
import Footer from "../Component/Footer";

const TrackComplain = () => {
  const [complaintId, setComplaintId] = useState("");
  const [status, setStatus] = useState(null);
  const [error, setError] = useState("");

  const handleTrack = async () => {
    if (!complaintId) {
      setError("Please enter Complaint ID!");
      setStatus(null);
      return;
    }

    try {
      const res = await axios.get(
        `http://localhost:8080/complain/getComplainById/${complaintId}`
      );

      if (res.data) {
        setStatus(res.data.status || "Status not available");
        setError("");
      } else {
        setError("No Complaint Found With This ID!");
        setStatus(null);
      }
    } catch (err) {
      console.error(err);
      setError("No Complaint Found With This ID!");
      setStatus(null);
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
