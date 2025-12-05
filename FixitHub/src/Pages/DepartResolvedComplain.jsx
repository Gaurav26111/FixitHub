import React, { useEffect, useState } from "react";
import "../Styles/AdminViewComplain.css";
import Footer from "../Component/Footer";
import AdminNavBar from "../Component/AdminNavBar";
import axios from "axios";
export default function DepartResolvedComplain() {
  const [complaints, setComplaints] = useState([]);
  const departmentId = localStorage.getItem("departmentId");

  const loadComplaints = () => {
    axios.put(`http://localhost:8080/department/inprogress/${departmentId}`)
      .then(res => setComplaints(res.data))
      .catch(err => console.log(err));
  };

  useEffect(() => {
    loadComplaints();
  }, []);

  const handleResolve = async (id) => {
    await axios.put(`http://localhost:8080/department/resolve/${id}`);
    alert("Complaint Resolved!");
    loadComplaints();
  };

  return (
    <>
    <div className="admin-view-container">
      <h2>Complaints In Progress</h2>

      <table className="complaint-table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Description</th>
            <th>Status</th>
            <th>Resolve</th>
          </tr>
        </thead>

        <tbody>
          {complaints.map(c => (
            <tr key={c.id}>
              <td>{c.title}</td>
              <td>{c.description}</td>
              <td>{c.status}</td>
              <td>
                <button
                  className="send-btn"
                  onClick={() => handleResolve(c.id)}
                >
                  Resolve
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
