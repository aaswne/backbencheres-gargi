import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">

      <p className="footer-tag">
        BACKBENCHERS GARGI
      </p>

      <h2>
        See you in the mountains.
      </h2>

      <p className="footer-desc">
        Budget beds, homely food, slow mornings,
        and mountain sunsets in Kasol.
      </p>

      <div className="footer-actions">
        <a href="#">Instagram</a>
        <a href="tel:+91XXXXXXXXXX">Call Us</a>
      </div>

      <div className="footer-line"></div>

      <span className="footer-copy">
        © 2026 Backbenchers Gargi
      </span>

    </footer>
  );
}

export default Footer;