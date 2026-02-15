import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero">
      <div className="overlay"></div>

      <div className="hero-content">
        <h1>
          Come Explore the World <br />
          <span>with EGC</span>
        </h1>

        <p>
          And let our signature white glove luxury be your guide
        </p>

        <div className="hero-buttons">
          <button className="btn primary">BEGIN YOUR JOURNEY</button>
          <button className="btn secondary">EXPLORE DESTINATIONS</button>
        </div>
      </div>

      <div className="scroll-indicator">
        <span>Scroll</span>
      </div>
    </section>
  );
};

export default Hero;
