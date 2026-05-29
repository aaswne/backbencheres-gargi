import React from "react";
import "./Hero.css";

function Hero() {
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
  <button className="book-btn">
    <span className="circle">
      <span className="arrow">→</span>
    </span>
    <span className="text">Book a Bed</span>
  </button>
</div>
      </div>
    </section>
  );
}

export default Hero;