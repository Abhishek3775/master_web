import React from "react";
import styles from "./PlanJourney.module.css";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import BrandStrip from '.././BrandStrip/BrandStrip'

const PlanJourney = () => {
  return (
    <section className={styles.planSection}>
      <div className={styles.container}>
        <h4 className={styles.subtitle}>READY TO PLAN?</h4>
        <h2 className={styles.title}>Let Us Craft Your Perfect Journey</h2>
        <p className={styles.description}>
          Our Japan specialists will help you choose the ideal season and create a bespoke itinerary
          tailored to your dreams.
        </p>

        <div className={styles.contactRow}>
          <div className={styles.contactItem}>
            <div className={styles.iconBox}>
              <FaPhoneAlt />
            </div>
            <span>+442074269888</span>
          </div>

          <div className={styles.contactItem}>
            <div className={styles.iconBox}>
              <FaEnvelope />
            </div>
            <span>japan@eliteconcierge.com</span>
          </div>
        </div>

        <button className={styles.btn}>
          START PLANNING <span className={styles.arrow}>→</span>
        </button>
      </div>
    </section>
      
  );
};

export default PlanJourney;