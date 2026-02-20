import React from "react";
import "./EliteJourney.css";
import { FiPhone} from "react-icons/fi";
import { FaRegEnvelope } from "react-icons/fa";


const EliteJourney = () => {
  return (
    <section className="elite-journey-section">
      <div className="elite-journey-container">
        {/* HEADER TEXT */}
        <p className="elite-journey-subtitle">YOUR JOURNEY AWAITS</p>
        <h2 className="elite-journey-title">Begin Your Journey</h2>
        <p className="elite-journey-desc">
          Every extraordinary journey begins with a conversation. Our Japan
          specialists await to craft your bespoke itinerary, tailored to your
          every desire.
        </p>

        {/* CONTACT INFO */}
        <div className="b-j-contact-row">
                  <div className="b-j-contact-item">
                    <FiPhone size={30 } className="b-j-icon" />
                    <span>+44 2074269888</span>
                  </div>
        
                  <div className="divider"></div>
        
                  <div className="b-j-contact-item">
                    <FaRegEnvelope size={30} className="b-j-icon" />
                    <span>southafrica@eliteconcierge.com</span>
                  </div>
                </div>

        {/* BUTTON */}
        <button className="elite-journey-btn">
          BEGIN YOUR JOURNEY →
        </button>
      </div>
    </section>
  );
};

export default EliteJourney;