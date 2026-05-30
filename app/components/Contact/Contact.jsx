import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <section className="contact-page" id="contact">
      <div className="contact-wrap">

        <div className="contact-left">
          <p className="contact-tag">GET IN TOUCH</p>

          <h2>
            Ready for a slow mountain stay?
          </h2>

          <p className="contact-desc">
            Message us for bed availability, food updates, directions,
            group bookings, or anything you need before reaching Kasol.
          </p>

          <div className="contact-actions">
            <a href="https://instagram.com/YOUR_USERNAME" target="_blank">
              Instagram →
            </a>

            <a href="tel:+91XXXXXXXXXX">
              Call Now →
            </a>
          </div>
        </div>

        <div className="contact-right">

  <div className="spot-card">
    <img src="/pv.jpeg" alt="" />

    <div className="spot-content">
      <h3>Parvati River</h3>
      <p>Riverside view</p>
    </div>
  </div>

  <div className="spot-card">
    <img src="/cv.jpeg" alt="" />

    <div className="spot-content">
      <h3>Chojh</h3>
      <p>village trek</p>
    </div>
  </div>

  <div className="spot-card">
    <img src="/km.jpg" alt="" />

    <div className="spot-content">
      <h3>Kasol Market</h3>
      <p>Cafes & shopping</p>
    </div>
  </div>

  <div className="spot-card">
    <img src="/mk.jpeg" alt="" />

    <div className="spot-content">
      <h3>Manikaran</h3>
      <p>Hot springs</p>
    </div>
  </div>

</div>
      </div>
    </section>
  );
}

export default Contact;