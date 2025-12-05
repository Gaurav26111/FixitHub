import React, { useEffect, useState } from "react";
import axios from "axios";
import "../Styles/AdminViewComplain.css";
import Footer from "../Component/Footer";

export default function DepartAssignedComplain() {
  const [complaints, setComplaints] = useState([]);
  const departmentId = localStorage.getItem("departmentId");

  const loadComplaints = () => {
    axios.put(`http://localhost:8080/department/assigned/${departmentId}`)
      .then(res => setComplaints(res.data))
      .catch(err => console.log(err));
  };

  useEffect(() => {
    loadComplaints();
  }, []);

  const handleAssign = async (id) => {
    await axios.put(`http://localhost:8080/department/assign/${id}`);
    alert("Complaint Assigned (IN_PROGRESS)");
    loadComplaints();
  };

  return (
    <>
    <div className="admin-view-container">
      <h2>Assigned Complaints (FORWARDED)</h2>

      <table className="complaint-table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Description</th>
            <th>Status</th>
            <th>Assign</th>
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
                    onClick={() => handleAssign(c.id)}
                    disabled={c.status !== "FORWARDED"}
                >
                    Assign
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
