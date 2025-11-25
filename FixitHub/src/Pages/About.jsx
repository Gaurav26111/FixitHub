import React from "react";
import "../Styles/About.css";
import Footer from "../Component/Footer";
import NavBar from "../Component/NavBar";

export default function About() {
  return (
    <>
    <div className="about-container">
      <header className="about-header">
        <h1>About FixItHub</h1>
        <p>Your College Complaint Resolution System</p>
      </header>

      <section className="about-section">
        <h2>🎯 Our Mission</h2>
        <p>
          FixItHub is designed to streamline the process of submitting and
          resolving student complaints within the college campus. Our mission is
          to create a transparent, fast, and user-friendly communication bridge
          between students and administrative departments.
        </p>
      </section>

      <section className="about-section">
        <h2>🚀 What is FixItHub?</h2>
        <p>
          FixItHub is an online platform where students can file grievances
          regarding issues such as hostel, library, exams, electricity, IT
          services and more. Admin can track, assign, and forward complaints to
          designated departments until they are resolved.
        </p>
      </section>

      <section className="features">
        <h2>✨ Key Features</h2>
        <ul>
          <li>📝 Easy Complaint Registration</li>
          <li>📡 Real-time status updates</li>
          <li>🏛️ Department-wise complaint forwarding</li>
          <li>🔍 Transparent tracking system</li>
          <li>📂 Attachments for better clarity</li>
          <li>📢 Important notifications from administration</li>
        </ul>
      </section>

      <section className="about-section">
        <h2>⚙ How It Works?</h2>
        <ol>
          <li>Student logs in & submits complaint</li>
          <li>Admin verifies and forwards it to the right department</li>
          <li>Department takes action & updates status</li>
          <li>Student can track the progress until resolved</li>
        </ol>
      </section>

      <section className="team">
        <h2>👨‍💻 Project Vision</h2>
        <p>
          Our goal is to digitalize complaint handling across educational
          institutions so that students never feel unheard. FixItHub aims to
          empower students by giving them an official and accountable voice.
        </p>
      </section>

      <section className="thanks">
        <h3>Thank you for using FixItHub ❤️</h3>
        <p>Together, let's make college life smoother and complaint-free!</p>
      </section>
    </div>
    <Footer />
    </>
  );
}
