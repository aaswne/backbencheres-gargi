"use client"
import React from "react";
import { motion } from "framer-motion";
import "./Contact.css";

function Contact() {
  return (
    <section className="contact-page" id="contact">
      <div className="contact-wrap">
        <motion.div
          className="contact-left"
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <p className="contact-tag"></p>

          <h2>Ready for a slow mountain stay?</h2>

          <p className="contact-desc">
            Contact us for bed availability, food updates, directions,
            group bookings, or anything you need before reaching Kasol.
          </p>

          <div className="contact-actions">
            <a
              href="https://www.instagram.com/backbenchers.gargi/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram →
            </a>

            <a href="tel:919778737338">Call Now →</a>
          </div>
        </motion.div>

        <div className="contact-right">
          {[
            ["/pv.jpeg", "Parvati River", "Riverside view", "left"],
            ["/cv.jpeg", "Chojh", "village trek", "right"],
            ["/km.jpg", "Kasol Market", "Cafes & shopping", "left"],
            ["/mk.jpeg", "Manikaran", "Hot springs", "right"],
          ].map((card, index) => (
            <motion.div
              className="spot-card"
              key={index}
              initial={{
                opacity: 0,
                x: card[3] === "left" ? -100 : 100,
              }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
                ease: "easeOut",
              }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <img src={card[0]} alt={card[1]} />

              <div className="spot-content">
                <h3>{card[1]}</h3>
                <p>{card[2]}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Contact;