import React from "react";
import { useNavigate } from "react-router-dom";
import "./Hanami.css";

const Hanami = () => {
  const navigate = useNavigate();
  return (
    <section className="hanami-section">
      <div className="hanami-container">

        {/* LEFT CONTENT */}
        <div className="hanami-left">
          <span className="hanami-subtitle">春 Haru</span>
          <h1 className="hanami-title">Hanami</h1>
          <p className="hanami-description">
            Cherry blossom season transforms Japan into a dreamscape of pink and white.
            Experience hanami-the ancient tradition of flower viewing beneath the sakura.
          </p>

          <div className="hanami-tags">
            <span>Cherry blossom festivals</span>
            <span>Pleasant temperatures</span>
            <span>Garden visits at peak beauty</span>
          </div>
        </div>

        {/* RIGHT DATE CARD */}
        <div className="hanami-right">
          <div className="date-card">
            <h2>March - May</h2>
            <div className="divider"></div>
            <p>8°C - 20°C</p>
          </div>
        </div>

      </div>

      {/* BUTTON */}
      <div className="hanami-btn-wrapper">
        <button className="hanami-btn" onClick={()=> navigate("/japan-guide")}>
          VIEW COMPLETE GUIDE →
        </button>
      </div>
    </section>
  );
};

export default Hanami;
