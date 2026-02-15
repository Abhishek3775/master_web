import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

import "swiper/css";
import "swiper/css/navigation";
import "./WhenToVisitJapan.css";

import spring from "../../assets/Hanami.jpg";
import summer from "../../assets/Natsu.png";
import autumn from "../../assets/Koyo.jpg";

const seasons = [
  {
    id: 1,
    title: "Hanami",
    months: "March - May",
    temp: "8°C - 20°C",
    image: spring,
  },
  {
    id: 2,
    title: "Natsu",
    months: "June - August",
    temp: "20°C - 35°C",
    image: summer,
  },
  {
    id: 3,
    title: "Koyo",
    months: "September - November",
    temp: "10°C - 22°C",
    image: autumn,
  },
  {
    id: 4,
    title: "Natsu",
    months: "June - August",
    temp: "20°C - 35°C",
    image: summer,
  },
];

const WhenToVisitJapan = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <section className="japan-section">
      <div className="japan-container">

        <div className="swiper-wrapper-custom">

          {/* Custom Buttons */}
          <div ref={prevRef} className="nav-btn left">
            <FiChevronLeft />
          </div>

          <div ref={nextRef} className="nav-btn right">
            <FiChevronRight />
          </div>

          <Swiper
            modules={[Navigation]}
            spaceBetween={30}
            slidesPerView={3}
            loop={true}
            navigation={{
              prevEl: prevRef.current,
              nextEl: nextRef.current,
            }}
            onInit={(swiper) => {
              swiper.params.navigation.prevEl = prevRef.current;
              swiper.params.navigation.nextEl = nextRef.current;
              swiper.navigation.init();
              swiper.navigation.update();
            }}
            breakpoints={{
              0: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1100: { slidesPerView: 3 },
            }}
          >
            {seasons.map((season) => (
              <SwiperSlide key={season.id}>
                <div className="season-card">
                  <img src={season.image} alt={season.title} />
                  <div className="overlay">
                    <span className="temp">{season.temp}</span>
                    <p className="months">{season.months}</p>
                    <h3>{season.title}</h3>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

        </div>
      </div>
    </section>
  );
};

export default WhenToVisitJapan;
