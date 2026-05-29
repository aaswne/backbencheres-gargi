import React from "react";
import "./Stay.css";

function Stay() {
  return (
    <section className="stay-section">
      <div className="stay-wrap">

        <div className="stay-left">
          <p className="stay-tag">BUDGET STAY</p>

          <h2>
            Stay, eat,
            <br />
            vibe in the mountains.
          </h2>

          <p className="stay-desc">
            Cozy shared beds from ₹299, warm food, fresh air and a playlist
            made for slow mountain mornings.
          </p>

          <div className="stay-price">
            <span>FROM</span>
            <h3>₹299</h3>
            <p>per night</p>
          </div>
        </div>

        <div className="stay-right">

          <div className="music-card">
            <div>
              <span className="music-label">MOUNTAIN MOOD</span>
              <h3>Listen while you plan your stay</h3>
            </div>

            <iframe
              data-testid="embed-iframe"
              style={{ borderRadius: "12px" }}
              src="https://open.spotify.com/embed/album/4H9hWVmi0GLeaquCD0az7t?utm_source=generator"
              width="100%"
              height="152"
              frameBorder="0"
              allowFullScreen=""
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
              title="Spotify Album"
            ></iframe>
          </div>

 
        </div>

      </div>
    </section>
  );
}

export default Stay;