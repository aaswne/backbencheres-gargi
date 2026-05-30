"use client";

import React, { useState } from "react";
import "./Hero.css";

function Hero() {
  const [showForm, setShowForm] = useState(false);

  const [form, setForm] = useState({
    name: "",
    phone: "",
    guests: "",
    from: "",
    to: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const sendWhatsApp = () => {
    const message = `
🛏️ New Bed Booking Request

Name: ${form.name}
Phone: ${form.phone}
Guests: ${form.guests}

From: ${form.from}
To: ${form.to}
    `;

    const ownerNumber = "919778737338";

    window.open(
      `https://wa.me/${ownerNumber}?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  return (
    <section className="hero">
      <div className="hero-overlay"></div>

      <div className="hero-content">
        <h2>
          Stay cheap. Eat homely. Wake up to snowy mountain views — from just ₹299.
        </h2>

        <p className="hero-desc">
          Backbenchers Gargi is a small startup cafe and simple budget stay
          inside an old mountain house converted into cozy bed spaces.
        </p>

        <div className="hero-buttons">
          <button
            className="book-btn"
            onClick={() => setShowForm(true)}
          >
            <span className="circle">
              <span className="arrow">→</span>
            </span>

            <span className="text">Book a Bed</span>
          </button>
        </div>
      </div>

      {showForm && (
        <div
          className="booking-modal"
          onClick={() => setShowForm(false)}
        >
          <div
            className="booking-card"
            onClick={(e) => e.stopPropagation()}
          >
            <h3>Book Your Stay</h3>

            <input
              type="text"
              name="name"
              placeholder="Your Name"
              onChange={handleChange}
            />

            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              onChange={handleChange}
            />

            <input
              type="number"
              name="guests"
              placeholder="Number of Guests"
              onChange={handleChange}
            />

            <label>Check-in</label>
            <input
              type="date"
              name="from"
              onChange={handleChange}
            />

            <label>Check-out</label>
            <input
              type="date"
              name="to"
              onChange={handleChange}
            />

            <button
              className="send-btn"
              onClick={sendWhatsApp}
            >
              Send Booking Request
            </button>
          </div>
        </div>
      )}
    </section>
  );
}

export default Hero;