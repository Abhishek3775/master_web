import React from "react";
import styles from "./SeasonsIntro.module.css";

import icon1 from "../../assets/icon11.png";
import icon2 from "../../assets/icon22.png";
import icon3 from "../../assets/icon33.png";
import icon4 from "../../assets/icon44.png";

const highlights = [
  {
    id: 1,
    icon: icon1,
    title: "BEST OVERALL",
    text: "March to May (Spring) & October to November (Autumn)",
  },
  {
    id: 2,
    icon: icon2,
    title: "PEAK TOURIST SEASON",
    text: "Late March to Early April (Cherry Blossom) & November (Autumn Foliage)",
  },
  {
    id: 3,
    icon: icon3,
    title: "BUDGET-FRIENDLY",
    text: "June to August (Summer, excluding Obon) & January to February (Winter)",
  },
  {
    id: 4,
    icon: icon4,
    title: "FEWEST CROWDS",
    text: "January to February & June (Golden Week)",
  },
];

const SeasonsIntro = () => {
  return (
    <section className={styles.wrapper}>
      
      {/* TOP INFO GRID */}
      <div className={styles.topGrid}>
        {highlights.map((item) => (
          <div key={item.id} className={styles.item}>
            <img src={item.icon} alt="" />
            <div>
              <h4>{item.title}</h4>
              <p>{item.text}</p>
            </div>
          </div>
        ))}
      </div>

      {/* BOTTOM CONTENT */}
      <div className={styles.bottomSection}>
        <p className={styles.subtitle}>
          UNDERSTANDING JAPAN'S SEASONS
        </p>

        <h2 className={styles.heading}>
          A Land of Eternal Seasons
        </h2>

        <p className={styles.description}>
          Japan transforms with breathtaking drama throughout the year, each season unveiling new wonders.
          From the ethereal beauty of cherry blossoms painting the land in soft pink to fiery autumn
          maples framing ancient temples, from snow-draped villages that seem frozen in time to vibrant
          summer festivals that ignite the night—every moment in Japan offers something extraordinary.
          Understanding these seasonal rhythms is the key to crafting your perfect journey.
        </p>

        <p className={styles.quote}>
          "The best time to visit Japan depends not on when, but on what moves your soul."
        </p>
      </div>

    </section>
  );
};

export default SeasonsIntro;