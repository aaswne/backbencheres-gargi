"use client"
import React, { useEffect, useState } from "react";
import "./Food.css";

function Food() {
  const images = [
    "/bg.jpeg",
    "/1.jpeg",
    "/2.jpeg",
    "/3.jpeg",
    "/4.jpeg",
    "/5.jpeg",
    "/6.jpeg"
    
  ];

  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section className="food-section" id="food">
      <div className="food-inner">
        <div className="food-left">
          <p className="food-tag">HOMELY FOOD</p>

          <h2>
            Eat simple Kerala food in the mountains.
          </h2>

          <p className="food-desc">
            Hot chai, homely meals, and budget-friendly food for backpackers
            staying at Backbenchers Gargi.
          </p>

          <button className="food-btn">
            <span>View Menu</span>
            <span className="food-btn-circle">→</span>
          </button>
        </div>

        <div className="food-right">
          <div className="food-photo">
            <img
              src={images[currentImage]}
              alt="Backbenchers Gargi"
            />
          </div>

          <div className="food-info-card card-one">
            <h4>Kerala meals</h4>
            <p>Simple homely food</p>
          </div>

          <div className="food-info-card card-two">
            <h4>From ₹299</h4>
            <p>Budget friendly</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Food;