import React from "react";
import "./Destination.css";
import asia from "../../assets/asia.jpg";
import europe from "../../assets/europe.jpg";
import Caribbean from "../../assets/caribian.jpg";
import Africa from "../../assets/africa.jpg";
import Middle from "../../assets/middle.jpg";

const destinations = [
  {
    title: "Asia",
    subtitle: "ANCIENT WONDERS",
    image: asia,
    large: true,
  },
  {
    title: "Europe",
    subtitle: "TIMELESS ELEGANCE",
    image: europe,
  },
  {
    title: "Caribbean",
    subtitle: "ISLAND PARADISE",
    image: Caribbean,
  },
  {
    title: "Africa",
    subtitle: "WILD LUXURY",
    image: Africa,
  },
  {
    title: "Middle East",
    subtitle: "DESERT OPULENCE",
    image: Middle,
  },
];

const Destinations = () => {
  return (
    <section className="destinations">
      <div className="destinations-header">
        <span className="tag">DESTINATIONS</span>
        <h2>Browse Our Destinations</h2>
        <p>
          From the cobbled streets of Europe to the untamed wilderness of Africa,
          discover our curated collection of the world’s most exclusive destinations.
        </p>
      </div>

      <div className="destinations-grid">
        {destinations.map((item, index) => (
          <div
            key={index}
            className={`destination-card ${item.large ? "large" : ""}`}
            style={{ backgroundImage: `url(${item.image})` }}
          >
            <div className="card-overlay">
              <span>{item.subtitle}</span>
              <h3>{item.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Destinations;
