import React from "react";
<<<<<<< HEAD
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
=======
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import styles from "./PlanJourney.module.css";

const PlanJourney = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>

        <p className={styles.subtitle}>READY TO PLAN?</p>

        <h2 className={styles.title}>Let Us Craft Your Perfect Journey</h2>

        <p className={styles.description}>
          Our Japan specialists will help you choose the ideal season
          and create a bespoke itinerary tailored to your dreams.
        </p>

        <p className={styles.note}>
          Minimum 4 weeks advance booking required
        </p>

        <div className={styles.contact}>
>>>>>>> 7bc4e262d09000103af5edbfd31c3ee7eff8428f
          <div className={styles.contactItem}>
            <div className={styles.iconBox}>
              <FaPhoneAlt />
            </div>
<<<<<<< HEAD
            <span>+442074269888</span>
          </div>

=======
            <span>+44 2074269888</span>
          </div>

          <div className={styles.divider}></div>

>>>>>>> 7bc4e262d09000103af5edbfd31c3ee7eff8428f
          <div className={styles.contactItem}>
            <div className={styles.iconBox}>
              <FaEnvelope />
            </div>
            <span>japan@eliteconcierge.com</span>
          </div>
        </div>

<<<<<<< HEAD
        <button className={styles.btn}>
          START PLANNING <span className={styles.arrow}>→</span>
        </button>
      </div>
    </section>
      
=======
        <button className={styles.button}>
          START PLANNING →
        </button>

      </div>
    </section>
>>>>>>> 7bc4e262d09000103af5edbfd31c3ee7eff8428f
  );
};

export default PlanJourney;