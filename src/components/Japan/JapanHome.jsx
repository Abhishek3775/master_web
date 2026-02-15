import React from "react";
import "./JapanHome.css";
import heroImage from "../../assets/japanHero.jpg";

const JapanHero = () => {
  return (
    <section
      className="jph-hero"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      <div className="jph-overlay"></div>

      <div className="jph-content">
        <p className="jph-subtitle">AN ODYSSEY OF REFINEMENT</p>

        <h1 className="jph-title">Japan</h1>

        <p className="jph-description">
          Where ancient traditions meet with modern
          <br />
          elegance, creating moments that transcend time itself.
        </p>
      </div>

      <div className="jph-button-wrapper">
        <button className="jph-btn">
          BEGIN YOUR JOURNEY →
        </button>
      </div>
    </section>
  );
};

export default JapanHero;
