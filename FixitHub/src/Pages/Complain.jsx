import React, { useState } from "react";
import "../Styles/Complain.css";
import Footer from "../Component/Footer";
import NavBar from "../Component/NavBar";

export default function Complaint() {
  const [complaintData, setComplaintData] = useState({
    title: "",
    department: "",
    description: "",
  });

  const handleChange = (e) => {

    const { name, value } = e.target;
    setComplaintData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Complaint Submitted Successfully!");
    setComplaintData({ title: "", department: "", description: "" });
  };

  return (
    <>
    <div className="complaint-container">
      <form className="complaint-box" onSubmit={handleSubmit}>
        <h2 className="complaint-title">Submit Your Complaint</h2>

        <div className="input-field">
          <label>Complaint Title</label>
          <input
            type="text"
            name="title"
            placeholder="Enter complaint title"
            value={complaintData.title}
            onChange={handleChange}
            required
          />
        </div>

        <div classname="input-field">
          <label>Department</label>
          <select
            name="department"
            value={complaintData.department}
            onChange={handleChange}
            required
          >
            <option value="">Select Department</option>
            <option value="IT">IT</option>
            <option value="Library">Library</option>
            <option value="Hostel">Hostel</option>
            <option value="Exam Cell">Exam Cell</option>
            <option value="Electricity">Electricity</option>
          </select>
        </div>

        <div className="input-field">
          <label>Description</label>
          <textarea
            name="description"
            placeholder="Explain your issue..."
            value={complaintData.description}
            onChange={handleChange}
            rows="4"
            required
          ></textarea>
        </div>

        <div className="input-field">
          <label>Attach File (optional)</label>
          <input type="file" />
        </div>

        <button type="submit" className="btn-submit">
          Submit Complaint
        </button>
      </form>
    </div>
    <Footer />
    </>
  );
}
