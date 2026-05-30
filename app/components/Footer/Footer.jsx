import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <p>Ready to visit ?</p>

        <h2>Stay with us at BackBencheres Gargi.</h2>
      </div>

      <div className="footer-links">
        <a
          href="https://www.instagram.com/backbenchers.gargi/"
          target="_blank"
          rel="noopener noreferrer"
        >
          INSTAGRAM
        </a>{" "}
        <a href="#home">HOME</a>
        <a href="#food">FOOD & STAY</a>
        <a href="#contact">CONTACT</a>
      </div>

      <div className="footer-bottom">
        <span>Manikaran, Kasol, Himachal Pradesh</span>

        <span>© {new Date().getFullYear()} Backbenchers Gargi</span>
      </div>
    </footer>
  );
}

export default Footer;
