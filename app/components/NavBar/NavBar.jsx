"use client"
import React, { useState } from "react";
import "./NavBar.css";

function NavBar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="main">
      <div className="logo">BackBenchers-Gargi</div>

      <nav className={open ? "nav nav-open" : "nav"}>
        <button className="nav-link">Stay</button>
        <button className="nav-link">Food</button>
        <button className="nav-link">Gallery</button>
        <button className="nav-link">Contact</button>
      </nav>

      <button className="instagram-btn">Instagram</button>

      <button className="menu-btn" onClick={() => setOpen(!open)}>
        {open ? "×" : "☰"}
      </button>
    </header>
  );
}

export default NavBar;