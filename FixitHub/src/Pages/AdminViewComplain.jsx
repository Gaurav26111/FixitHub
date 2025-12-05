import React, { useEffect, useState } from "react";
import "../Styles/AdminViewComplain.css";
import Footer from "../Component/Footer";
import AdminNavBar from "../Component/AdminNavBar";
import axios from "axios";

export default function AdminViewComplain() {
  const [complaints, setComplaints] = useState([]);

  // Fetch All Complaints From Backend
  useEffect(() => {
    axios
      .get("http://localhost:8080/admin/getAll")
      .then((res) => setComplaints(res.data))
      .catch((err) => console.log(err));
  }, []);

const handleSendToDept = async (complaint) => {
  try {
    const departmentId = complaint.assignedDepartment?.id;  // extracting dept id
        const adminId = localStorage.getItem("adminId"); // get from localStorage later
        // const adminId = 1;

    await axios.put(
      `http://localhost:8080/admin/forward/${complaint.id}?departmentId=${departmentId}&adminId=${adminId}`
    );

    alert("Complaint sent successfully!");

    setComplaints((prev) =>
      prev.map((c) =>
        c.id === complaint.id ? { ...c, status: "FORWARDED" } : c
      )
    );
  } catch (err) {
    console.log(err);
    alert("Error while sending complaint.");
  }
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
                <td>{c.requestedDepartment}</td>
                <td>{c.description}</td>
                <td>{c.status}</td>
                <td>
                  <button
                    className="send-btn"
                    onClick={() => handleSendToDept(c)}
                    disabled={c.status !== "PENDING"}
                  >
                    {c.status === "PENDING" ? "Send" : "Sent"}
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
