import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <section className="contact-section">
      <div className="contact-inner">

        <div className="contact-left">
          <p className="contact-tag">READY TO VISIT</p>

          <h2>
            Your mountain stay is just one message away.
          </h2>

          <p className="contact-desc">
            DM us for bed availability, food updates,
            directions, group bookings, and anything
            you need before arriving in Kasol.
          </p>

        
        </div>

        <div className="contact-right">
          <div className="contact-card">
            <span>📍</span>
            <div>
              <h4>Location</h4>
              <p>Gargi Villagr, Kasol, Himachal Pradesh</p>
            </div>
          </div>

          <div className="contact-card">
            <span>🕒</span>
            <div>
              <h4>Open Daily</h4>
              <p>24*7</p>
            </div>
          </div>

          <div className="contact-card">
            <span>🏡</span>
            <div>
              <h4>Budget Stay</h4>
              <p>Dorm beds from ₹299</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Contact;