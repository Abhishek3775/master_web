import React from "react";
import "./HeroJapan.css";

import heroImg from "../../assets/HeroImg.png";
import icon1 from "../../assets/icon1.png";
import icon2 from "../../assets/icon2.png";
import icon3 from "../../assets/icon3.png";
import icon4 from "../../assets/icon4.png";

const HeroJapan = () => {
  return (
    <section
      className="hero-section"
      style={{ backgroundImage: `url(${heroImg})` }}
    >
      {/* Overlay */}
      <div className="hero-overlay"></div>

      {/* Content */}
      <div className="hero-content">
        <p className="hero-subtitle"><div id="line"></div>SEASONAL GUIDE</p>
        <h1>When to Visit Japan</h1>
        <p className="hero-desc">
          Discover the Perfect Moment for Your Japanese Odyssey
        </p>
      </div>

      {/* Right Side Icons */}
      <div className="hero-icons">
        <img src={icon1} alt="icon1" />
        <img src={icon2} alt="icon2" />
        <img src={icon3} alt="icon3" />
        <img src={icon4} alt="icon4" />
      </div>
    </section>



  );
};

export default HeroJapan;
