"use client"
import React, { useState } from "react";
import "./NavBar.css";

function NavBar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="main">
      <div className="logo">BackBenchers-Gargi</div>

      <nav className={open ? "nav nav-open" : "nav"}>
        <a href="#home" className="nav-link">Home</a>
        <a href="#stay" className="nav-link">Food & Stay</a>
        <a href="#contact" className="nav-link">Contact</a>
      </nav>

      <button className="instagram-btn">Instagram</button>

      <button className="menu-btn" onClick={() => setOpen(!open)}>
        {open ? "×" : "☰"}
      </button>
    </header>
  );
}

export default NavBar;