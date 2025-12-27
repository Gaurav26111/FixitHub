import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const AdminLogout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const logoutUser = async () => {
      try {
        // ✅ Session-based logout
        const res = await fetch("http://localhost:8080/admin/logout", {
          method: "POST",
        });

        if (res.ok) {
          // ✅ Optional: clear any frontend flags
          localStorage.removeItem("isLoggedIn");
          localStorage.clear();

          alert("👋 You have been logged out successfully.");
          navigate("/adminlogin");
        } else {
          alert("⚠️ Failed to log out. Please try again.");
        }
      } catch (err) {
        console.error("Logout error:", err);
        alert("🚨 An error occurred during logout.");
      }
    };

    logoutUser();
  }, [navigate]);

  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h2>Logging you out...</h2>
      <p>Please wait while we end your session securely.</p>
    </div>
  );
};

export default AdminLogout;
