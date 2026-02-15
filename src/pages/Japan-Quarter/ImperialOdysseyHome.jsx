import React, {useState} from "react";
import "./ImperialOdysseyHome.css";
import bgImage from "../../assets2/japan/Imperial Odyssey/1.png"; 
import mapImage from "../../assets2/japan/Imperial Odyssey/3.png";
import arivetokyo from "../../assets2/japan/Imperial Odyssey/4.jpg";
import imperialtokyo from "../../assets2/japan/Imperial Odyssey/5.jpg";

import tokyo1 from "../../assets2/japan/Imperial Odyssey/Exceptional Accommodations/1.jpg";
import tokyo2 from "../../assets2/japan/Imperial Odyssey/Exceptional Accommodations/5.jpg";
import hakone from "../../assets2/japan/Imperial Odyssey/Exceptional Accommodations/2.jpg";
import kyoto from "../../assets2/japan/Imperial Odyssey/Exceptional Accommodations/3.jpg";
import kanazawa from "../../assets2/japan/Imperial Odyssey/Exceptional Accommodations/4.jpg";

import relatedj_ourneys_1 from "../../assets2/japan/Imperial Odyssey/Related Journeys/1.png";
import relatedj_ourneys_2 from "../../assets2/japan/Imperial Odyssey/Related Journeys/2.png";
import relatedj_ourneys_3 from "../../assets2/japan/Imperial Odyssey/Related Journeys/3.jpg";

import logo_1 from "../../assets2/Services/New folder/1.png"
import logo_2 from "../../assets2/Services/New folder/2.png"
import logo_3 from "../../assets2/Services/New folder/3.png"


import { GrLocation } from "react-icons/gr";
import { FiUsers } from "react-icons/fi";
import { MdOutlineDateRange } from "react-icons/md";
import { FaBed } from "react-icons/fa";
import { FiCalendar } from "react-icons/fi";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { FaPhoneAlt } from "react-icons/fa";
import { FaRegEnvelope } from "react-icons/fa";


const ImperialOdysseyHome = () => {

    const [selectedDay, setSelectedDay] = useState(0);
    const [viewType, setViewType] = useState("detailed");
    const [selectedHotelIndex, setSelectedHotelIndex] = useState(0);
    const [activeCity, setActiveCity] = useState("Tokyo");
    const hotels = staysData[activeCity];
    const selectedHotel = hotels[selectedHotelIndex];


    const allHotels = Object.entries(staysData).flatMap(([city, hotels]) =>
    hotels.map((hotel) => ({ ...hotel, city }))
  );

    const day = itineraryData[selectedDay];
    const [activeIndex, setActiveIndex] = useState(0);

     const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

 const journeys = [
  {
    title: "Zen & The Art of Stillness",
    duration: "10 DAYS",
    price: "From £22,000",
    image: relatedj_ourneys_1,
    alt: "Zen forest with torii gate",
  },
  {
    title: "The Connoisseur’s Table",
    duration: "12 DAYS",
    price: "From £35,000",
    image: relatedj_ourneys_2,
    alt: "Luxury Japanese cuisine - otoro with wasabi",
  },
  {
    title: "Seasons of Changes",
    duration: "16 DAYS", // corrected from 18 → 16 (as per image)
    price: "From £42,000",
    image: relatedj_ourneys_3,
    alt: "Japanese castle in sakura season",
  },
];


    
  return (
   <div>
    <section
      className="imperial-hero"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="imperial-overlay">
        <div className="imperial-content">
          <p className="imperial-subtitle">SIGNATURE JOURNEY</p>
          <h1 className="imperial-title">Imperial Odyssey</h1>

          <p className="imperial-locations">
            Tokyo · Hakone · Kyoto · Nara · Kanazawa
          </p>

          <div className="imperial-details">
            <span><MdOutlineDateRange color="#d1a650"/>  14 Days</span>
            <span><GrLocation color="#d1a650"/>  5 Cities</span>
            <span><FiUsers color="#d1a650"/>  8 Guests</span>
          </div>

          <div className="imperial-pricing">
            FROM <span>£28,500</span> per person, based on double occupancy
          </div>

          <button className="imperial-btn">VIEW DATES & PRICES →</button>
        </div>
      </div>
    </section>

    {/*~~~~~~~~~~~~~~~~~ journey-overview ~~~~~~~~~~~~~~~~~~~*/}

    <section className="journey-overview">
      <div className="journey-container">
        {/* LEFT CONTENT */}
        <div className="journey-left">
          <p className="section-subtitle">JOURNEY OVERVIEW</p>
          <h2 className="section-title">A 14-Day Masterpiece</h2>

          <p className="journey-description">
            A 14-day immersion into Japan's imperial heritage, from the modern
            grandeur of Tokyo to the ancient capitals where emperors once walked.
            This meticulously crafted journey reveals Japan at its most refined—
            private tea ceremonies with living masters, exclusive access to
            imperial gardens, and stays at legendary ryokans where traditions
            have been perfected over centuries.
          </p>

          {/* HIGHLIGHTS */}
          <h3 className="highlights-title">JOURNEY HIGHLIGHTS</h3>
          <ul className="highlights-list">
            <li>Private after-hours viewing at Tokyo's Imperial Palace gardens</li>
            <li>Exclusive kaiseki dinner with a three-Michelin-starred chef</li>
            <li>
              Traditional tea ceremony with a 15th-generation tea master in Kyoto
            </li>
            <li>Private geiko (geisha) performance in a historic Gion ochaya</li>
            <li>
              Helicopter transfer over Mount Fuji to a secluded onsen ryokan
            </li>
            <li>
              Behind-the-scenes access to Kanazawa's gold leaf artisan workshops
            </li>
          </ul>

          {/* BEST TIME BOX */}
          <div className="best-time-box">
            <h4>BEST TIME TO TRAVEL</h4>
            <p>
              March to May (Cherry Blossom) • October to November (Autumn Foliage)
            </p>
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div className="journey-right">
          {/* ROUTE MAP */}
          <div className="route-section">
            <p className="route-title">JOURNEY ROUTE</p>
            <div className="route-map">
              <img src={mapImage} alt="Japan Journey Route" />
            </div>
            <div className="route-locations">
              <span>● Tokyo</span> → <span>● Hakone</span> →{" "}
              <span>● Kyoto</span> → <span>● Nara</span> →{" "}
              <span>● Kanazawa</span>
            </div>
          </div>

          {/* INCLUDED BOX */}
          <div className="included-box">
            <h3>WHAT'S INCLUDED</h3>
            <ul>
              <li> 13 nights luxury accommodation</li>
              <li> All internal transfers including shinkansen</li>
              <li> Private English-speaking guide throughout</li>
              <li> Daily breakfast, 8 lunches, 10 dinners</li>
              <li> All entrance fees and experiences</li>
              <li> 24/7 concierge support</li>
            </ul>
            <button  className="view-link" >
              View all inclusions →
            </button>
          </div>
        </div>
      </div>
    </section>

    {/* ~~~~~~~~~~~~~~~~~~ itinerary-section ~~~~~~~~~~~~~~ */}

    <section className="itinerary-section">
      {/* Header */}
      <div className="itinerary-header">
        <div>
          <p className="itinerary-subtitle">DAY BY DAY</p>
          <h2 className="itinerary-title">Your Itinerary</h2>
        </div>

        <div className="view-toggle">
          <button
            className={viewType === "detailed" ? "active" : ""}
            onClick={() => setViewType("detailed")}
          >
            DETAILED
          </button>
          <button
            className={viewType === "quick" ? "active" : ""}
            onClick={() => setViewType("quick")}
          >
            QUICK VIEW
          </button>
        </div>
      </div>

      {/* ===== QUICK VIEW ===== */}
      {viewType === "quick" ? (
        <div className="quickview-list">
          {itineraryData.map((item, i) => (
            <div key={i} className="quickview-card">
              <div className="quickview-left">
                <p className="day-num">Day {parseInt(item.day)}</p>
                <div>
                  <p className="quickview-city">{item.city}</p>
                  <h4 className="quickview-title">{item.title}</h4>
                </div>
              </div>
              <div className="quickview-right">
                <FaBed className="hotel-icon" />
                <p>{item.hotel}</p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        /* ===== DETAILED VIEW ===== */
        <div className="itinerary-container">
          <div className="itinerary-sidebar">
            {itineraryData.map((item, index) => (
              <div
                key={index}
                className={`day-item ${
                  index === selectedDay ? "active" : ""
                }`}
                onClick={() => setSelectedDay(index)}
              >
                <div className="day-number">{item.day}</div>
                <div className="day-info">
                  <p className="day-city">{item.city}</p>
                  <p className="day-title">{item.title}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="itinerary-content">
            <img src={day.image} alt={day.city} className="itinerary-image" />

            <div className="itinerary-details">
              <h4>
                <span>Day {day.day}</span> | {day.city}
              </h4>
              <h2>{day.title}</h2>
              <p className="itinerary-desc">{day.description}</p>

              <div className="highlights">
                <h5>TODAY'S HIGHLIGHTS</h5>
                <ul>
                  {day.highlights.map((h, i) => (
                    <li key={i}>✓ {h}</li>
                  ))}
                </ul>
              </div>

              <div className="footer-info">
                <p>
                  <strong>{day.hotel}</strong> | {day.meals}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>

      {/* ~~~~~~~~~~~~~~~~~~ stays-section ~~~~~~~~~~~~~~~ */}

    <section className="stays-section">
      {/* Header */}
      <div className="stays-header">
        <div>
          <p className="stays-subtitle">WHERE YOU’LL STAY</p>
          <h2 className="stays-title">Exceptional Accommodations</h2>
          <p className="stays-desc">
            Each property has been hand-selected for its exceptional service,
            prime location, and authentic character.
          </p>
        </div>
      </div>

      {/* Tabs */}
      <div className="city-tabs">
        {Object.keys(staysData).map((city) => (
          <button
            key={city}
            className={activeCity === city ? "active" : ""}
            onClick={() => {
              setActiveCity(city);
              setSelectedHotelIndex(0);
            }}
          >
            {city}
          </button>
        ))}
      </div>

      {/* Main content */}
      <div className="stay-content">
        <div className="stay-image">
          <img src={selectedHotel.image} alt={selectedHotel.name} />
        </div>

        <div className="stay-info">
          <p className="stay-city">
            {activeCity.toUpperCase()} | {selectedHotel.nights}
          </p>
          <h3 className="stay-name">{selectedHotel.name}</h3>
          <p className="stay-desc">{selectedHotel.description}</p>

          <div className="stay-highlights">
            {selectedHotel.highlights.map((item, i) => (
              <span key={i}>{item}</span>
            ))}
          </div>
        </div>
      </div>

      {/* Gallery for selected city */}
      <div className="stay-gallery">
        {allHotels.map((hotel, i) => (
          <div
            key={i}
            className={`gallery-item ${
              hotel.city === activeCity &&
              staysData[activeCity][selectedHotelIndex].name === hotel.name
                ? "selected"
                : ""
            }`}
            onClick={() => {
              setActiveCity(hotel.city);
              const index = staysData[hotel.city].findIndex(
                (h) => h.name === hotel.name
              );
              setSelectedHotelIndex(index);
            }}
          >
            <img src={hotel.image} alt={hotel.name} />
            <p className="gallery-city">{hotel.city}</p>
            <p className="gallery-nights">{hotel.nights}</p>
          </div>
        ))}
      </div>
    </section>

    {/* ~~~~~~~~~~~~~~~~~~~~~~~~ inclusions-section ~~~~~~~~~~~~~~~~~~~ */}

    <section className="inclu-section">
      <div className="inclu-wrapper">
        {/* LEFT – Inclusions */}
        <div className="inclu-col">
          <p className="inclu-label">WHAT'S INCLUDED</p>
          <h2 className="inclu-heading">Inclusions</h2>
          <ul className="inclu-list">
            {inclusions.map((item, i) => (
              <li key={i} className="inclu-list-item">
                <CheckIcon />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* RIGHT – Exclusions */}
        <div className="inclu-col">
          <p className="inclu-label">NOT INCLUDED</p>
          <h2 className="inclu-heading">Exclusions</h2>
          <ul className="inclu-list">
            {exclusions.map((item, i) => (
              <li key={i} className="inclu-list-item">
                <CrossIcon />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <button  className="inclu-download-link">
            <DownloadIcon />
            DOWNLOAD FULL ITINERARY PDF
          </button>
        </div>
      </div>
    </section>

      {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Dates & Prices ~~~~~~~~~~~~~~~~~~~~~~ */}

    <section className="dates-section">
      <div className="dates-header">
        <p className="dates-subtitle">PLAN YOUR JOURNEY</p>
        <h2 className="dates-title">Dates & Prices</h2>
        <p className="dates-desc">
          Select your preferred departure. All prices are per person based on
          double occupancy.
        </p>
      </div>

      <div className="dates-list">
        {datesData.map((item, index) => (
          <div className="date-card" key={index}>
            <div className="date-info">
              <FiCalendar className="calendar-icon" />
              <div>
                <h4>{item.date}</h4>
                <p className="date-label">{item.label}</p>
              </div>
            </div>

            <div className="date-price">
              <h3>{item.price}</h3>
              <span>per person</span>
            </div>

            <div className="date-actions">
              <span
                className={`status-badge ${
                  item.status === "AVAILABLE" ? "available" : "limited"
                }`}
              >
                {item.status}
              </span>
              <button className="enquire-btn">ENQUIRE</button>
            </div>
          </div>
        ))}
      </div>

      <div className="custom-date-section">
        <p>
          Looking for a different date? We can arrange private departures for
          your preferred travel dates.
        </p>
        <button className="custom-date-btn">
          REQUEST CUSTOM DATE →
        </button>
      </div>
    </section>

        {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~ FAQ ~~~~~~~~~~~~~~~~~~~~~~~ */}

    <section className="srv-faq-section">
      <h5 className="srv-faq-subtitle">QUESTIONS</h5>
      <h2 className="srv-faq-title">Frequently Asked</h2>

      <div className="srv-faq-container">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className={`srv-faq-item ${activeIndex === index ? "active" : ""}`}
          >
            <button className="srv-faq-question" onClick={() => toggleFAQ(index)}>
              {faq.question}
              <span className="srv-faq-icon">
                {activeIndex === index ? <FiChevronUp /> : <FiChevronDown />}
              </span>
            </button>

            {activeIndex === index && (
              <div className="srv-faq-answer">
                <p>{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>

      {/* ~~~~~~~~~~~~~~~~~~~~~~~~~RELATED JOURNEY ~~~~~~~~~~~~~~~~~~~~~ */}

     <section className="rj-section">
  <p className="rj-label">EXPLORE MORE</p>
  <h2 className="rj-heading">Related Journeys</h2>

  <div className="rj-grid">
    {journeys.map((journey) => (
      <article key={journey.title} className="rj-card">
        <img
          src={journey.image}
          alt={journey.alt}
          className="rj-image"
          loading="lazy"
        />

        <div className="rj-overlay">
          <span className="rj-duration">{journey.duration}</span>
          <h3 className="rj-title">{journey.title}</h3>
          <p className="rj-price">{journey.price}</p>
        </div>
      </article>
    ))}
  </div>
</section>

{/* ===== BEGIN YOUR JOURNEY SECTION ===== */}
      <section className="journey-section">
        <h5 className="journey-subtitle">YOUR JOURNEY AWAITS</h5>
        <h2 className="journey-title">Begin Your Journey</h2>
        <p className="journey-text">
          Every extraordinary journey begins with a conversation. Our Japan specialists await to craft your bespoke itinerary, tailored to your every desire.
        </p>

        <div className="journey-contact">
          <div className="contact-item">
            <FaPhoneAlt size={25} className="contact-icon" />
            <span>+44 207 426 8988</span>
          </div>
          <div className="contact-item">
            <FaRegEnvelope size={25} className="contact-icon" />
            <span>southafrica@eliteconcierge.com</span>
          </div>
        </div>

        <button className="journey-btn">BEGIN YOUR JOURNEY →</button>

        <div className="partners">
          <img src={logo_1} alt="logo1" />
          <img src={logo_2} alt="logo2" />
          <img src={logo_3} alt="logo3" />
          <img src={logo_1} alt="logo4" />
          <img src={logo_2} alt="logo5" />
          <img src={logo_3} alt="logo6" />
        </div>
      </section>

   </div>  
  );
};


//Your Itinerary
const itineraryData = [
  {
    day: "01",
    city: "Tokyo",
    title: "Arrive Tokyo",
    description:
      "Your journey begins as you're met at Haneda or Narita Airport by your private guide and whisked to your luxury hotel in the heart of Tokyo. After settling in, enjoy a welcome dinner at a renowned restaurant where traditional Japanese cuisine meets contemporary innovation.",
    highlights: [
      "VIP airport meet and greet",
      "Private transfer in luxury vehicle",
      "Welcome dinner at acclaimed restaurant",
    ],
    hotel: "The Peninsula Tokyo",
    meals: "Dinner",
    image: arivetokyo,
  },
  {
    day: "02",
    city: "Tokyo",
    title: "Imperial Tokyo",
    description:
      "Explore the Imperial Palace, Meiji Shrine, and Tokyo's contemporary art scene with your local expert guide.",
    highlights: [
      "Private tour of Imperial Palace gardens",
      "Tea ceremony with master",
      "Michelin-starred lunch",
    ],
    hotel: "Aman Tokyo",
    meals: "Breakfast, Lunch",
    image: imperialtokyo,
  },
  {
    day: "03",
    city: "Tokyo",
    title: "Imperial Tokyo",
    description:
      "Explore the Imperial Palace, Meiji Shrine, and Tokyo's contemporary art scene with your local expert guide.",
    highlights: [
      "Private tour of Imperial Palace gardens",
      "Tea ceremony with master",
      "Michelin-starred lunch",
    ],
    hotel: "Aman Tokyo",
    meals: "Breakfast, Lunch",
    // image: tokyoImg,
  },
  {
    day: "04",
    city: "Tokyo",
    title: "Imperial Tokyo",
    description:
      "Explore the Imperial Palace, Meiji Shrine, and Tokyo's contemporary art scene with your local expert guide.",
    highlights: [
      "Private tour of Imperial Palace gardens",
      "Tea ceremony with master",
      "Michelin-starred lunch",
    ],
    hotel: "Aman Tokyo",
    meals: "Breakfast, Lunch",
    // image: tokyoImg,
  },
  {
    day: "05",
    city: "Tokyo",
    title: "Imperial Tokyo",
    description:
      "Explore the Imperial Palace, Meiji Shrine, and Tokyo's contemporary art scene with your local expert guide.",
    highlights: [
      "Private tour of Imperial Palace gardens",
      "Tea ceremony with master",
      "Michelin-starred lunch",
    ],
    hotel: "Aman Tokyo",
    meals: "Breakfast, Lunch",
    // image: tokyoImg,
  },
  {
    day: "06",
    city: "Tokyo",
    title: "Imperial Tokyo",
    description:
      "Explore the Imperial Palace, Meiji Shrine, and Tokyo's contemporary art scene with your local expert guide.",
    highlights: [
      "Private tour of Imperial Palace gardens",
      "Tea ceremony with master",
      "Michelin-starred lunch",
    ],
    hotel: "Aman Tokyo",
    meals: "Breakfast, Lunch",
    // image: tokyoImg,
  },
  {
    day: "07",
    city: "Tokyo",
    title: "Imperial Tokyo",
    description:
      "Explore the Imperial Palace, Meiji Shrine, and Tokyo's contemporary art scene with your local expert guide.",
    highlights: [
      "Private tour of Imperial Palace gardens",
      "Tea ceremony with master",
      "Michelin-starred lunch",
    ],
    hotel: "Aman Tokyo",
    meals: "Breakfast, Lunch",
    // image: tokyoImg,
  },
  {
    day: "08",
    city: "Tokyo",
    title: "Imperial Tokyo",
    description:
      "Explore the Imperial Palace, Meiji Shrine, and Tokyo's contemporary art scene with your local expert guide.",
    highlights: [
      "Private tour of Imperial Palace gardens",
      "Tea ceremony with master",
      "Michelin-starred lunch",
    ],
    hotel: "Aman Tokyo",
    meals: "Breakfast, Lunch",
    // image: tokyoImg,
  },
  {
    day: "09",
    city: "Tokyo",
    title: "Imperial Tokyo",
    description:
      "Explore the Imperial Palace, Meiji Shrine, and Tokyo's contemporary art scene with your local expert guide.",
    highlights: [
      "Private tour of Imperial Palace gardens",
      "Tea ceremony with master",
      "Michelin-starred lunch",
    ],
    hotel: "Aman Tokyo",
    meals: "Breakfast, Lunch",
    // image: tokyoImg,
  },
  {
    day: "10",
    city: "Tokyo",
    title: "Imperial Tokyo",
    description:
      "Explore the Imperial Palace, Meiji Shrine, and Tokyo's contemporary art scene with your local expert guide.",
    highlights: [
      "Private tour of Imperial Palace gardens",
      "Tea ceremony with master",
      "Michelin-starred lunch",
    ],
    hotel: "Aman Tokyo",
    meals: "Breakfast, Lunch",
    // image: tokyoImg,
  },
  {
    day: "11",
    city: "Tokyo",
    title: "Imperial Tokyo",
    description:
      "Explore the Imperial Palace, Meiji Shrine, and Tokyo's contemporary art scene with your local expert guide.",
    highlights: [
      "Private tour of Imperial Palace gardens",
      "Tea ceremony with master",
      "Michelin-starred lunch",
    ],
    hotel: "Aman Tokyo",
    meals: "Breakfast, Lunch",
    // image: tokyoImg,
  },
  {
    day: "12",
    city: "Tokyo",
    title: "Imperial Tokyo",
    description:
      "Explore the Imperial Palace, Meiji Shrine, and Tokyo's contemporary art scene with your local expert guide.",
    highlights: [
      "Private tour of Imperial Palace gardens",
      "Tea ceremony with master",
      "Michelin-starred lunch",
    ],
    hotel: "Aman Tokyo",
    meals: "Breakfast, Lunch",
    // image: tokyoImg,
  },
  {
    day: "13",
    city: "Tokyo",
    title: "Imperial Tokyo",
    description:
      "Explore the Imperial Palace, Meiji Shrine, and Tokyo's contemporary art scene with your local expert guide.",
    highlights: [
      "Private tour of Imperial Palace gardens",
      "Tea ceremony with master",
      "Michelin-starred lunch",
    ],
    hotel: "Aman Tokyo",
    meals: "Breakfast, Lunch",
    // image: tokyoImg,
  },
  {
    day: "14",
    city: "Tokyo",
    title: "Imperial Tokyo",
    description:
      "Explore the Imperial Palace, Meiji Shrine, and Tokyo's contemporary art scene with your local expert guide.",
    highlights: [
      "Private tour of Imperial Palace gardens",
      "Tea ceremony with master",
      "Michelin-starred lunch",
    ],
    hotel: "Aman Tokyo",
    meals: "Breakfast, Lunch",
    // image: tokyoImg,
  },
  
  
];

//Exceptional Accommodations

const staysData = {
  Tokyo: [
    {
      name: "The Peninsula Tokyo",
      nights: "3 nights",
      image: tokyo1,
      description:
        "Rising above the historic Imperial Palace gardens, The Peninsula Tokyo epitomizes Japanese hospitality fused with contemporary luxury. Each room offers views of the palace moats or the glittering Ginza skyline.",
      highlights: ["Imperial Palace views", "Rooftop terrace dining", "Award-winning spa"],
    },
    {
      name: "Aman Tokyo",
      nights: "2 nights",
      image: tokyo2,
      description:
        "A serene sanctuary high above the city, Aman Tokyo blends urban dynamism with the tranquility of Japanese tradition. Enjoy panoramic skyline views and holistic wellness at Japan’s finest urban retreat.",
      highlights: ["Panoramic skyline views", "Luxury spa", "Infinity pool"],
    },
  ],
  Hakone: [
    {
      name: "Gora Kadan",
      nights: "2 nights",
      image: hakone,
      description:
        "Once the discreet summer retreat of Japan’s imperial family, Gora Kadan is Japan’s most revered ryokan, offering private onsen baths and traditional kaiseki cuisine amidst serene mountain scenery.",
      highlights: ["Private onsen suites", "Imperial heritage", "Multi-course kaiseki"],
    },
  ],
  Kyoto: [
    {
      name: "The Ritz-Carlton Kyoto",
      nights: "4 nights",
      image: kyoto,
      description:
        "A riverside sanctuary blending modern luxury with Kyoto’s timeless culture. Featuring serene gardens, tea ceremonies, and Michelin-starred dining.",
      highlights: ["Riverside views", "Traditional architecture", "Michelin dining"],
    },
  ],
  Kanazawa: [
    {
      name: "Hyatt Centric Kanazawa",
      nights: "2 nights",
      image: kanazawa,
      description:
        "Contemporary sophistication meets Kanazawa’s artistic soul. Located near Kenrokuen Garden, this modern hotel combines style with authentic Japanese hospitality.",
      highlights: ["Art-inspired interiors", "Central location", "Modern comfort"],
    },
  ],
};

//inclusive
const inclusions = [
  "13 nights accommodation at luxury properties",
  "All meals as specified (daily breakfast, 8 lunches, 10 dinners)",
  "Private English-speaking guide throughout",
  "Helicopter transfer Tokyo-Hakone over Mt Fuji",
  "First-class shinkansen rail travel",
  "All private ground transportation",
  "Airport meet and greet with private transfers",
  "All entrance fees and cultural experiences",
  "Private tea ceremony with master",
  "24/7 concierge support",
  "Comprehensive travel insurance",
];

const exclusions = [
  "International flights",
  "Travel visa (if required)",
  "Personal expenses and gratuities",
  "Meals not specified",
  "Optional activities",
];

const CheckIcon = () => (
  <span className="inclu-icon inclu-icon--check" aria-hidden="true">
    <svg
      width="11"
      height="9"
      viewBox="0 0 11 9"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1 4L4 7.5L10 1"
        stroke="#b58a2f"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  </span>
);

const CrossIcon = () => (
  <span className="inclu-icon inclu-icon--cross" aria-hidden="true">
    <svg
      width="10"
      height="10"
      viewBox="0 0 10 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1.5 1.5L8.5 8.5M8.5 1.5L1.5 8.5"
        stroke="#b58a2f"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  </span>
);

const DownloadIcon = () => (
  <svg
    className="inclu-download-icon"
    width="14"
    height="14"
    viewBox="0 0 14 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M7 1V9M7 9L4 6M7 9L10 6"
      stroke="#b58a2f"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M1 11H13"
      stroke="#b58a2f"
      strokeWidth="1.4"
      strokeLinecap="round"
    />
  </svg>
);

// ~~~~~~~~~~~~~~~~~~~~~ Dates and Prices ~~~~~~~~~~~~~~~~~~~~

const datesData = [
  {
    date: "March 15 - 28, 2026",
    label: "CHERRY BLOSSOM",
    price: "£28,500",
    status: "AVAILABLE",
  },
  {
    date: "March 29 - April 11, 2026",
    label: "PEAK SAKURA",
    price: "£32,000",
    status: "LIMITED",
  },
  {
    date: "April 12 - 25, 2026",
    label: "LATE SPRING",
    price: "£28,500",
    status: "AVAILABLE",
  },
  {
    date: "May 3 - 16, 2026",
    label: "GOLDEN WEEK",
    price: "£26,500",
    status: "AVAILABLE",
  },
  {
    date: "October 4 - 17, 2026",
    label: "EARLY AUTUMN",
    price: "£28,500",
    status: "AVAILABLE",
  },
  {
    date: "November 1 - 14, 2026",
    label: "PEAK FOLIAGE",
    price: "£32,000",
    status: "LIMITED",
  },
  {
    date: "November 15 - 28, 2026",
    label: "LATE AUTUMN",
    price: "£28,500",
    status: "AVAILABLE",
  },
];

//FAQ

const faqs = [
    {
      question: "What is the activity level of this journey?",
      answer:
        "This journey is rated as moderate. While we don't undertake strenuous hikes, there is considerable walking on temple grounds, through city streets, and up some stairs. A reasonable level of fitness is recommended.",
    },
    {
      question: "Can the itinerary be customized?",
      answer:
        "Yes, our travel specialists can tailor the itinerary to your preferences — from private tours and dining experiences to extended stays or alternate routes.",
    },
    {
      question: "What is included in the helicopter transfer?",
      answer:
        "The helicopter transfer includes a private charter between Tokyo and Hakone, offering aerial views of Mount Fuji and surrounding landscapes.",
    },
    {
      question: "How exclusive are the cultural experiences?",
      answer:
        "All experiences are designed to be private or small-group only, ensuring exclusivity and personalized attention from local experts.",
    },
  ];

  //related journey

  

export default ImperialOdysseyHome;
