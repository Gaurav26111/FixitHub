import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";

import Register from "./Pages/Register.jsx";
import Login from "./Pages/Login.jsx";
import Complain from "./Pages/Complain.jsx";
import AdminLogin from "./Pages/AdminLogin.jsx";
import AdminRegister from "./Pages/AdminRegister.jsx";
import AdminViewComplain from "./Pages/AdminViewComplain.jsx";
import Home from "./Pages/Home.jsx";
import About from "./Pages/About.jsx";
import TrackComplain from "./Pages/TrackComplain.jsx";
import AdminHome from "./Pages/AdminHome.jsx";

import NavBar from "./Component/NavBar.jsx";
import AdminNavBar from "./Component/AdminNavBar.jsx";
import DepartmentRegister from "./Pages/DepartmentRegister.jsx";
import DepartmentLogin from "./Pages/DepartmentLogin.jsx";
import DepartmentHome from "./Pages/DepartmentHome.jsx";
import DepartAssignedComplain from "./Pages/DepartAssignedComplain.jsx";
import DepartResolvedComplain from "./Pages/DepartResolvedComplain.jsx";

function Layout() {
  const location = useLocation();
  const path = location.pathname;

  // Show Student NavBar only for student routes
  const showStudentNav =
    path.startsWith("/home") ||
    path.startsWith("/complain") ||
    path.startsWith("/about") ||
    path.startsWith("/trackcomplain");

  // Show Admin NavBar only for admin routes
  const showAdminNav =
    path.startsWith("/adminhome") ||
    path.startsWith("/adminviewcomplain");

  return (
    <>
      {showStudentNav && <NavBar />}
      {showAdminNav && <AdminNavBar />}
    </>
  );
}

function App() {
  return (
    <Router>
      {/* Navigation Area Based on Role */}
      <Layout />

      {/* Routes */}
      <Routes>
        {/* Student Routes */}
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home />} />
        <Route path="/complain" element={<Complain />} />
        <Route path="/about" element={<About />} />
        <Route path="/trackcomplain" element={<TrackComplain />} />

        {/* Admin Routes */}
        <Route path="/adminlogin" element={<AdminLogin />} />
        <Route path="/adminregister" element={<AdminRegister />} />
        <Route path="/adminhome" element={<AdminHome />} />
        <Route path="/adminviewcomplain" element={<AdminViewComplain />} />

        <Route path="/departmentregister" element={<DepartmentRegister />} />
        <Route path="/departmentlogin" element={<DepartmentLogin />} />
        <Route path="/departmenthome" element={<DepartmentHome />} />
        <Route path="/departassignedcomplain" element={<DepartAssignedComplain />} />
        <Route path="/departresolvedcomplain" element={<DepartResolvedComplain />} />
      </Routes>
    </Router>
  );
}

export default App;
