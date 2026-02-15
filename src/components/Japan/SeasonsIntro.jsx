import React from "react";
import "./SeasonsIntro.css";

// import bgLines from "../../assets/linepattern.png";
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
    <section className="season-wrapper">

  {/* TOP BOX */}
  <div className="season-top">
    {highlights.map((item) => (
      <div className="season-item" key={item.id}>
        <img src={item.icon} alt="" />
        <div>
          <h4>{item.title}</h4>
          <p>{item.text}</p>
        </div>
      </div>
    ))}
  </div>

  {/* BOTTOM CONTENT */}
  <div className="season-bottom">
    <p className="season-subtitle">UNDERSTANDING JAPAN'S SEASONS</p>
    <h2>A Land of Eternal Seasons</h2>
    <p className="season-desc">
      Japan transforms with breathtaking drama throughout the year...
    </p>
    <p className="season-quote">
      "The best time to visit Japan depends not on when, but on what moves your soul."
    </p>
  </div>

</section>

  );
};

export default SeasonsIntro;
