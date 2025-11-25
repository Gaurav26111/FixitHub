import React from 'react';
import '../Styles/Footer.css';

function Footer() {
  return (
    <footer className="journal-footer">
      <div className="footer-container">
        {/* About the Journal */}
        <div className="footer-section about">
          <h3>About Journal</h3>
          <p>
            This is your personal space to write, reflect, and grow. 
            Whether it's daily thoughts or special memories — your journal is your story.
          </p>
        </div>

        {/* Navigation Links */}
        <div className="footer-section links">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/home">Home</a></li>
            <li><a href="/write">Write Entry</a></li>
            <li><a href="/entries">My Entries</a></li>
            <li><a href="/archive">Archive</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="footer-section contact">
          <h3>Support</h3>
          <p>Email: help@myjournal.com</p>
          <p>Phone: +91 98765 43210</p>
          <p>Location: Kuttanad, Kerala</p>
        </div>

        {/* Optional Section */}
        <div className="footer-section quote">
          <h3>Quote of the Day</h3>
          <p>“Writing is the painting of the voice.” – Voltaire</p>
        </div>
      </div>

      <div className="footer-bottom">
        &copy; {new Date().getFullYear()} MyJournal. Made with ❤️ by Gaurav Kumar
      </div>
    </footer>
  );
}

export default Footer;
