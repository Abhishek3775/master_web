import React, { useRef } from "react";
import "./JapanSignatureJourney.css";
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import img1 from "../../assets/journey11.png";
import img2 from "../../assets/journey22.png";
import img3 from "../../assets/journey33.png";

const journeys = [
  {
    nights: "14 Nights",
    locations: "TOKYO · KYOTO · NARA",
    title: "Imperial Odyssey",
    desc:"A14-day immersion into Japan's imperial heritage, from the modern grandeur of Tokyo to the ancient capitals where..",
    price: "From £28,500 per person",
    image: img1,
  },
  {
    nights: "10 Nights",
    locations: "KOYASAN · NAOSHIMA · KYOTO",
    title: "Zen & The Art of Stillness",
    desc:
      "A transformative journey through Japan's spiritual heartland, combining meditation retreats with contemporary art...",
    price: "From £22,000 per person",
    image: img2,
  },
  {
    nights: "12 Nights",
    locations: "TOKYO · OSAKA · KANAZAWA",
    title: "The Connoisseur's Table",
    desc:"An epicurean voyage through Japan's culinary featuring exclusive chef's tables and rare sake ta",
    price: "From £35,500 per person",
    image: img3,
  },

];

const JapanSignatureJourneys = () => {
  const swiperRef = useRef(null);

  return (
    <section className="signature-section">
      {/* HEADER */}
      <div className="signature-header">
        <h2>EGC Signature Journeys</h2>
        <p>
          These are simply suggestions. Yours will be tailored, altered, and
          refined until it matches you completely.
        </p>
      </div>

      {/* SLIDER */}
      <Swiper
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        spaceBetween={40}
        slidesPerView={3}
        breakpoints={{
          0: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1200: { slidesPerView: 3 },
        }}
      >
        {journeys.map((item, i) => (
          <SwiperSlide key={i}>
            <div className="journey-card">
              <div className="journey-image">
                <img src={item.image} alt={item.title} />
                <span className="nights">{item.nights}</span>

                {/* IMAGE OVERLAY CONTENT */}
                <div className="image-overlay">
                  <span className="locations">{item.locations}</span>
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
              </div>

              {/* FOOTER */}
              <div className="journey-footer">
                <span className="price">{item.price}</span>
                <span className="view">VIEW JOURNEY →</span>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* CUSTOM NAV */}
      <div className="slider-nav">
        <button onClick={() => swiperRef.current.slidePrev()}><FaChevronLeft /></button>
        <button onClick={() => swiperRef.current.slideNext()}><FaChevronRight /></button>
      </div>
    </section>
  );
};

export default JapanSignatureJourneys;
