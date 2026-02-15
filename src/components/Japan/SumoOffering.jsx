import React, { useState } from "react";
import "./SumoOffering.css";
import offeringImg from "../../assets/sumoOffer.jpg"; // apni image path
import SumoBookingModal from "./SumoBookingModal";

const includes = [
  "Private access to authentic sumo stable",
  "Meet active sumo wrestlers",
  "Expert commentary from sumo historian",
  "Observe morning training rituals",
  "Traditional chanko nabe breakfast",
];

const SumoOffering = () => {
      const [openModal, setOpenModal] = useState(false);
  return (
    <section className="so-section">
      <div className="so-container">

        {/* Section Heading */}
        <div className="so-heading">
          <p className="so-subtitle">OUR OFFERINGS</p>
          <h2>Choose Your Experience</h2>
          <p className="so-description">
            Each experience is crafted to provide unparalleled access to the world of sumo,
            respecting traditions while offering moments of genuine connection.
          </p>
        </div>

        {/* Main Content */}
        <div className="so-wrapper">

          {/* LEFT IMAGE */}
          <div className="so-image">
            <img src={offeringImg} alt="Sumo Training" />

            <span className="so-price-badge">
              FROM <br /> £2,800 per person
            </span>
          </div>

          {/* RIGHT CONTENT */}
          <div className="so-content">

            <p className="so-tag">KEIKO SESSION</p>

            <h3 className="so-title">
              Morning Training at a Sumo Stable
            </h3>

            <p className="so-text">
              Rise before dawn to enter the sacred training grounds of a prestigious sumo
              stable. Witness the grueling keiko practice as wrestlers clash in centuries-old
              rituals, followed by a traditional chanko nabe breakfast with the rikishi.
            </p>

            {/* Meta Info */}
            <div className="so-meta">
              <span>⏱ 4 hours</span>
              <span>👥 2-4 guests</span>
              <span>📅 Daily except tournament periods</span>
            </div>

            {/* Includes */}
            <div className="so-includes">
              <p className="so-includes-title">INCLUDES</p>

              <div className="so-includes-list">
                {includes.map((item, index) => (
                  <div key={index} className="so-include-item">
                    ✓ {item}
                  </div>
                ))}
              </div>
            </div>

            {/* Buttons */}
            <div className="so-buttons">
              <button className="so-btn-outline">VIEW MORE</button>
              <button className="so-btn-primary" onClick={() => setOpenModal(true)}>
                RESERVE EXPERIENCE →
              </button>
            </div>

          </div>

        </div>
      </div>

                   {openModal && (
                    
        <SumoBookingModal closeModal={() => setOpenModal(false)} />
      )}

    </section>
  );
};

export default SumoOffering;
