import React from "react";
import styles from "./SeasonsIntro.module.css";
import { FaStar, FaUserFriends, FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";

const highlights = [
  {
    icon: <FaStar />,
    title: "BEST OVERALL",
    description: "March to May (Spring) & October to November (Autumn)",
  },
  {
    icon: <FaUserFriends />,
    title: "PEAK TOURIST SEASON",
    description: "Late March to Early April (Cherry Blossom) & November (Autumn Foliage)",
  },
  {
    icon: <FaCalendarAlt />,
    title: "BUDGET-FRIENDLY",
    description: "June to August (Summer, excluding Obon) & January to February (Winter)",
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "FEWEST CROWDS",
    description: "January to February & June (Golden Week)",
  },
];

const SeasonsIntro = () => {
  return (
    <section className={styles.seasonSection}>
      
      {/* TOP HIGHLIGHTS */}
      <div className={styles.highlights}>
        {highlights.map((item, index) => (
          <div key={index} className={styles.highlightCard}>
            <div className={styles.icon}>{item.icon}</div>
            <h4 className={styles.title}>{item.title}</h4>
            <p className={styles.text}>{item.description}</p>
          </div>
        ))}
      </div>

      {/* BOTTOM CONTENT */}
      <div className={styles.content}>
        <h4 className={styles.subtitle}>UNDERSTANDING JAPAN'S SEASONS</h4>

        <h2 className={styles.mainTitle}>
          A Land of Eternal Seasons
        </h2>

        <p className={styles.description}>
          Japan transforms with breathtaking drama throughout the year, each season unveiling new
          wonders. From the ethereal beauty of cherry blossoms painting the land in soft pink to
          fiery autumn maples framing ancient temples, from snow-draped villages that seem frozen in
          time to vibrant summer festivals that ignite the night—every moment in Japan offers
          something extraordinary. Understanding these seasonal rhythms is the key to crafting your
          perfect journey.
        </p>

        <p className={styles.quote}>
          “The best time to visit Japan depends not on when, but on what moves your soul.”
        </p>
      </div>

    </section>
  );
};

export default SeasonsIntro;