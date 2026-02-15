import React, { useState , useRef } from 'react'
import "./Expendition.css"
import heroImg from "../../assets2/Services/aviation/cruising/1.jpg";
import page1img1 from "../../assets2/Services/aviation/cruising/page1/1.jpg";
import page1img2 from "../../assets2/Services/aviation/cruising/page1/2.jpg";
import page1img3 from "../../assets2/Services/aviation/cruising/page1/3.jpg";

import page3img1 from "../../assets2/Services/aviation/cruising/page3/1.jpg";
import page3img2 from "../../assets2/Services/aviation/cruising/page3/2.jpg";
import page3img3 from "../../assets2/Services/aviation/cruising/page3/3.jpg";
import page3img4 from "../../assets2/Services/aviation/cruising/page3/4.jpg";

import voyage1 from "../../assets2/Services/aviation/cruising/page4/1.jpg";
import voyage2 from "../../assets2/Services/aviation/cruising/page4/2.jpg";
import voyage3 from "../../assets2/Services/aviation/cruising/page4/3.jpg";
import voyage4 from "../../assets2/Services/aviation/cruising/page4/4.jpg";
import voyage5 from "../../assets2/Services/aviation/cruising/page4/5.jpg";
import voyage6 from "../../assets2/Services/aviation/cruising/page4/6.jpg";
import voyage7 from "../../assets2/Services/aviation/cruising/page4/7.jpg";
import voyage8 from "../../assets2/Services/aviation/cruising/page4/8.jpg";
import voyage9 from "../../assets2/Services/aviation/cruising/page4/9.jpg";
import voyage18 from "../../assets2/Services/aviation/cruising/page4/18.jpg";
import voyage13 from "../../assets2/Services/aviation/cruising/page4/13.jpg";

import whyicon1 from "../../assets2/Services/aviation/cruising/icon/1.png"
import whyicon2 from "../../assets2/Services/aviation/cruising/icon/2.png"
import whyicon3 from "../../assets2/Services/aviation/cruising/icon/3.png"
import whyicon4 from "../../assets2/Services/aviation/cruising/icon/4.png"
import whyicon5 from "../../assets2/Services/aviation/cruising/icon/5.png"
import whyicon6 from "../../assets2/Services/aviation/cruising/icon/6.png"
import whyicon7 from "../../assets2/Services/aviation/cruising/icon/7.png"
import whyicon8 from "../../assets2/Services/aviation/cruising/icon/8.png"

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import { CiClock2 } from "react-icons/ci";
import { LuUsers } from "react-icons/lu";
import { FaRegCompass } from "react-icons/fa";
import { MdWaves } from "react-icons/md";
import { IoBoatOutline } from "react-icons/io5";
import { FiPhone } from "react-icons/fi";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { CiLocationOn } from "react-icons/ci";
import BrandStrip from '../../components/BrandStrip/BrandStrip';

const ExpenditionCruising = () => {

     const [activeTab, setActiveTab] = useState("all");
     const prevRef = useRef(null);
    const nextRef = useRef(null);

  return (
    <div className="ec-page">

      {/* ===== HERO SECTION ===== */}
      <section
        className="ec-hero"
        style={{ backgroundImage: `url(${heroImg})` }}
      >
        <div className="ec-hero-overlay">

          <h5 className="ec-hero-subtitle">REDEFINING</h5>

          <h1 className="ec-hero-title">
            Expedition <br /> Cruising
          </h1>

          <p className="ec-hero-desc">
            State-of-the-art vessels to Earth's last frontiers
          </p>

          <div className="ec-hero-buttons">
            <button className="ec-btn-gold">EXPLORE VOYAGES</button>
            <button className="ec-btn-outline">CONTACT CONCIERGE</button>
          </div>

          <div className="ec-slider-lines">
            <span className="ec-line ec-active"></span>
            <span className="ec-line"></span>
          </div>

        </div>

        <div className="ec-discover">
          DISCOVER
          <div className="ec-arrow">⌄</div>
        </div>

      </section>

      {/* ===== WAYS TO EXPLORE SECTION ===== */}

      <section className="ec-ways-section">

        <h2 className="ec-ways-title">Ways to Explore</h2>
        <p className="ec-ways-subtitle">
          Three distinct cruise experiences, each offering its own incomparable way to discover the world's most remarkable destinations.
        </p>

        <div className="ec-ways-grid">

          <div className="ec-ways-card">
            <img src={page1img1} alt="" />
            <div className="ec-ways-overlay">

              <div className="ec-top-content">
                <div className="ec-icon-circle"><FaRegCompass size={30}/></div>
                <span className="ec-mini-title">Journey to Earth's Last Frontiers</span>
                <h3>Expedition Cruises</h3>
                <p>
                  The greatest adventures you can have at sea aboard state-of-the-art vessels that redefine expedition travel.
                </p>

                <div className="ec-tags">
                  <span>Expert naturalists</span>
                  <span>Small ship intimacy</span>
                  <span>Polar & remote destinations</span>
                </div>
              </div>

              <div className="ec-bottom-row">
                <span>5 voyages</span>
                <span className="ec-explore-link">Explore +</span>
              </div>

            </div>
          </div>

          <div className="ec-ways-card">
            <img src={page1img2} alt="" />
            <div className="ec-ways-overlay">

              <div className="ec-top-content">
                <div className="ec-icon-circle"><MdWaves size={30}/></div>
                <span className="ec-mini-title">Navigate Ancient Waterways</span>
                <h3>River Cruises</h3>
                <p>
                  Time-travelling journeys through history aboard intimate vessels from the Nile to the Mekong.
                </p>

                <div className="ec-tags">
                  <span>Cultural immersion</span>
                  <span>Intimate vessels</span>
                  <span>Expert Egyptologists & guides</span>
                </div>
              </div>

              <div className="ec-bottom-row">
                <span>4 voyages</span>
                <span className="ec-explore-link">Explore +</span>
              </div>

            </div>
          </div>
          <div className="ec-ways-card">
            <img src={page1img3} alt="" />
            <div className="ec-ways-overlay">

              <div className="ec-top-content">
                <div className="ec-icon-circle"><IoBoatOutline size={30}/></div>
                <span className="ec-mini-title">Island-Hopping Adventures</span>
                <h3>Ocean Voyages</h3>
                <p>
                  Elegant yacht experiences through legendary seas, from the Greek Isles to the Norwegian fjords.
                </p>

                <div className="ec-tags">
                  <span>Luxury amenities</span>
                  <span>Scenic coastlines</span>
                  <span>World-class service</span>
                </div>
              </div>

              <div className="ec-bottom-row">
                <span>3 voyages</span>
                <span className="ec-explore-link">Explore +</span>
              </div>

            </div>
          </div>

        </div>

      </section>

      {/* ===== RECOMMENDED JOURNEYS ===== */}

<section className="ec-journeys-section">
      <h5 className="ec-journeys-subtitle">HANDPICKED</h5>
      <h2 className="ec-journeys-title">Recommended Journeys</h2>

      {/* Navigation Arrows */}
      <div ref={prevRef} className="ec-journeys-nav ec-journeys-prev">
        <FiChevronLeft />
      </div>
      <div ref={nextRef} className="ec-journeys-nav ec-journeys-next">
        <FiChevronRight />
      </div>

      {/* Swiper Slider */}
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
        className="ec-journeys-slider"
      >
        {/* === CARD 1 === */}
        <SwiperSlide>
          <div className="ec-journey-card">
            <div className="ec-journey-image ec-img1">
              <span className="ec-tag">EXPEDITION</span>
            </div>
            <div className="ec-journey-info">
              <p className="ec-region"><CiLocationOn/> Polar</p>
              <h3 className="ec-journey-name">Antarctic Explorer</h3>
              <p className="ec-location">Antarctica</p>
              <div className="ec-journey-footer">
                <p>14 Days</p>
                <p className="ec-price">From $18,500</p>
              </div>
            </div>
          </div>
        </SwiperSlide>

        {/* === CARD 2 === */}
        <SwiperSlide>
          <div className="ec-journey-card">
            <div className="ec-journey-image ec-img2">
              <span className="ec-tag">EXPEDITION</span>
            </div>
            <div className="ec-journey-info">
              <p className="ec-region"><CiLocationOn/> South America</p>
              <h3 className="ec-journey-name">Galapagos Discovery</h3>
              <p className="ec-location">Galapagos Islands</p>
              <div className="ec-journey-footer">
                <p>10 Days</p>
                <p className="ec-price">From $12,800</p>
              </div>
            </div>
          </div>
        </SwiperSlide>

        {/* === CARD 3 === */}
        <SwiperSlide>
          <div className="ec-journey-card">
            <div className="ec-journey-image ec-img3">
              <span className="ec-tag">RIVER</span>
            </div>
            <div className="ec-journey-info">
              <p className="ec-region"><CiLocationOn/> Africa & Middle East</p>
              <h3 className="ec-journey-name">Nile Treasures</h3>
              <p className="ec-location">Egypt</p>
              <div className="ec-journey-footer">
                <p>8 Days</p>
                <p className="ec-price">From $6,800</p>
              </div>
            </div>
          </div>
        </SwiperSlide>

        {/* === CARD 4 === */}
        <SwiperSlide>
          <div className="ec-journey-card">
            <div className="ec-journey-image ec-img1">
              <span className="ec-tag">EXPEDITION</span>
            </div>
            <div className="ec-journey-info">
              <p className="ec-region"><CiLocationOn/> Polar</p>
              <h3 className="ec-journey-name">Antarctic Explorer</h3>
              <p className="ec-location">Antarctica</p>
              <div className="ec-journey-footer">
                <p>14 Days</p>
                <p className="ec-price">From $18,500</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
    {/* ===== SIGNATURE MOMENTS SECTION ===== */}

<section className="ec-signature-section">

  <span className="ec-small-title">THE EXPERIENCE</span><br />
  <h2 className='ec-small-subtitle'>Signature Moments</h2>
  <p className='ec-small-docs'>
    Every voyage is defined by extraordinary moments that stay with you forever
  </p>



  <div className="ec-signature-wrapper">

    {/* LEFT IMAGE */}
    <div className="ec-signature-left">
      <img src={page3img1} alt="Signature" />
    </div>

    {/* RIGHT CONTENT */}
    <div className="ec-signature-right">
      <div className="ec-icon-circle">
        <img src={whyicon1} alt="" className='ec-why-icon'/>
      </div>

      <h3>Expert-Led Discovery</h3>

      <p>
        Charismatic naturalists, Egyptologists, marine biologists, and local
        experts transform every moment into an unforgettable learning experience.
      </p>
    </div>

  </div>

  <div className="ec-signature-wrapper">

  {/* LEFT CONTENT */}
  <div className="ec-signature-right">
    <div className="ec-icon-circle">
      <img src={whyicon2} alt="" className='ec-why-icon'/>
    </div>

    <h3>Immersive Activities</h3>

    <p>
      Zodiac landings, kayaking excursions, and guided hikes bring you closer to nature's wonders and cultural treasures.
    </p>
  </div>

  {/* RIGHT IMAGE */}
  <div className="ec-signature-left">
    <img src={page3img2} alt="Signature" />
  </div>
</div>

<div className="ec-signature-wrapper">

    {/* LEFT IMAGE */}
    <div className="ec-signature-left">
      <img src={page3img3} alt="Signature" />
    </div>

    {/* RIGHT CONTENT */}
    <div className="ec-signature-right">
      <div className="ec-icon-circle">
        <img src={whyicon7} alt="" className='ec-why-icon'/>
      </div>

      <h3>Culinary Excellence</h3>

      <p>
        World-class chefs create extraordinary dining experiences featuring regional specialties and locally-sourced ingredients.
      </p>
    </div>

  </div>

  <div className="ec-signature-wrapper">

  {/* LEFT CONTENT */}
  <div className="ec-signature-right">
    <div className="ec-icon-circle">
      <img src={whyicon8} alt="" className='ec-why-icon'/>
    </div>

    <h3>Luxurious Comfort</h3>

    <p>
      State-of-the-art vessels with elegant accommodations, wellness facilities, and panoramic observation decks for ultimate relaxation.
    </p>
  </div>

  {/* RIGHT IMAGE */}
  <div className="ec-signature-left">
    <img src={page3img4} alt="Signature" />
  </div>

</div>


</section>

{/* ===== ALL VOYAGES SECTION ===== */}

      <section className="ec-voyages-section">

        <div className="ec-voyages-header">
          <h2>All Voyages</h2>
          <p>Browse our complete collection of extraordinary journeys</p>

          <div className="ec-voyages-tabs">
            <span
              className={activeTab === "all" ? "ec-tab-active" : ""}
              onClick={() => setActiveTab("all")}
            >
              ALL VOYAGES
            </span>

            <span
              className={activeTab === "expedition" ? "ec-tab-active" : ""}
              onClick={() => setActiveTab("expedition")}
            >
              EXPEDITION
            </span>

            <span
              className={activeTab === "river" ? "ec-tab-active" : ""}
              onClick={() => setActiveTab("river")}
            >
              RIVER
            </span>

            <span
              className={activeTab === "ocean" ? "ec-tab-active" : ""}
              onClick={() => setActiveTab("ocean")}
            >
              OCEAN
            </span>
          </div>
        </div>

        <div className="ec-voyages-grid">

          {/* EXPEDITION CARDS */}
          {(activeTab === "all" || activeTab === "expedition") && (
            <>
              <VoyageCard img={voyage1} label="EXPEDITION" region="South America"
                title="Amazon Expedition" sub="Brazil Peru"
                docs="Navigate the world's mightiest river through pristine rainforest. Encounter pink river dolphins, exotic wildlife,.."
                days="14 Days" guests="32" price="$8,500" />

              <VoyageCard img={voyage2} label="EXPEDITION" featured
                region="Polar" title="Antarctic Explorer" sub="Antarctica"
                docs="Journey to the white continent aboard our state-of-the-art expedition vessel. Witness pristine glaciers, pengui..."
                days="10 Days" guests="199" price="$8,500" />

              <VoyageCard img={voyage3} label="EXPEDITION"
                region="Polar" title="Arctic Expedition" sub="Svalbard Arctic"
                docs="Venture into the realm of polar bears and Arctic aboard our ice-strengthened vessel. Experience"
                days="8 Days" guests="32" price="$8,500" />

              <VoyageCard img={voyage7} label="EXPEDITION"
                region="South America" title="Galapagos Discovery"
                sub="Galapagos Islands"
                docs="Follow in Darwin's footsteps through this living
                        laboratory of evolution. Encounter giant tortoises,..."
                days="10 Days" guests="48" price="$12,800" />

              <VoyageCard img={voyage9} label="EXPEDITION"
                region="Asia" title="Indonesian Archipelago"
                sub="Indonesia"
                docs="Explore the remote islands of Indonesia's Raja Ampat and Komodo. Dive into the world's most biodiverse..."
                days="12 Days" guests="36" price="$14,200" />

              <VoyageCard img={voyage2} label="EXPEDITION" featured
                region="Polar" title="Antarctic Explorer" sub="Antarctica"
                docs="Journey to the white continent aboard our state-of-the-art expedition vessel. Witness pristine glaciers, pengui..."
                days="10 Days" guests="199" price="$8,500" />
            </>
          )}

          {/* OCEAN CARDS */}
          {(activeTab === "all" || activeTab === "ocean") && (
            <>
              <VoyageCard img={voyage4} label="OCEAN"
                region="Europe" title="British Isles Explorer"
                sub="United Kingdom Ireland"
                docs="Cruise through the heart of imperial Europe along the majestic Danube. From Vienna to Budapest, experience..."
                days="13 Days" guests="180" price="$11,500" />

              <VoyageCard img={voyage8} label="OCEAN" featured
                region="Mediterranean" title="Greek Isles Odyssey"
                sub="Greece"
                docs="Island-hop through the legendary Aegean aboard our elegant yacht. From Santorini's sunsets to Mykonos's.."
                days="11 Days" guests="150" price="$9,800" />

               <VoyageCard img={voyage18} label="OCEAN" featured
                region="Scandinavia" title="Norwegian Fjords"
                sub="Norway"
                docs="Sail through Norway's dramatic fjords, past cascading waterfalls and snow-capped peaks. Experience the..."
                days="10 Days" guests="200" price="$7,500" /> 
            </>
          )}

          {/* RIVER CARDS */}
          {(activeTab === "all" || activeTab === "river") && (
            <>
              <VoyageCard img={voyage5} label="RIVER" featured
                region="Europe" title="Danube Imperial"
                sub="Central Europe"
                docs="Cruise through the heart of imperial Europe along the majestic Danube. From Vienna to Budapest, experience..."
                days="8 Days" guests="150" price="$5,500" />

              <VoyageCard img={voyage6} label="RIVER"
                region="Europe" title="European Waterways"
                sub="France"
                docs="Glide through the scenic canals and rivers of France
                    aboard an intimate barge. Discover châteaux, vineyard..."
                days="7 Days" guests="12" price="$7,500" />

               <VoyageCard img={voyage13} label="RIVER"
                region="Asia" title="Mekong Journey"
                sub="Vietnam & Cambodia"
                docs="Navigate the mighty Mekong through floating markets, ancient temples, and rural villages. Experience the..."
                days="7 Days" guests="12" price="$7,500" /> 
            </>
          )}

        </div>
      </section>

    {/* ===== WHY CHOOSE US ===== */}

<section className="ec-why-section">

  <div className="ec-why-top">
    <div className="ec-why-left">
      <span className="ec-why-small">WHY CHOOSE US</span>
      <h2>The Elite Difference</h2>
    </div>

    <div className="ec-why-right">
      <p>Every voyage is meticulously crafted to exceed expectations</p>
    </div>
  </div>

  <div className="ec-why-grid">

    <div className="ec-why-box">
      
      <img src={whyicon1} alt="" className="ec-why-icon"/>
      <h3>Expert-Led Journeys</h3>
      <p>
        World-renowned naturalists, historians, and cultural experts bring every
        destination to life.
      </p>
    </div>

    <div className="ec-why-box">
      <img src={whyicon2} alt="" className="ec-why-icon"/>
      
      <h3>Five-Star Cuisine</h3>
      <p>
        Gourmet meals crafted by acclaimed chefs using locally-sourced ingredients.
      </p>
    </div>

    <div className="ec-why-box">
        <img src={whyicon3} alt="" className="ec-why-icon"/>

      <h3>Unparalleled Safety</h3>
      <p>
        State-of-the-art vessels with advanced safety features and nearly 1:1 staff ratios.
      </p>
    </div>

    <div className="ec-why-box">
        <img src={whyicon4} alt="" className="ec-why-icon"/>

      <h3>30+ Years Excellence</h3>
      <p>
        Three decades of pioneering luxury travel setting the standard for cruise experiences.
      </p>
    </div>

    <div className="ec-why-box">
        <img src={whyicon5} alt="" className="ec-why-icon"/>

      <h3>Exclusive Access</h3>
      <p>
        Hidden gems and private experiences unavailable to ordinary travelers.
      </p>
    </div>

    <div className="ec-why-box">
        <img src={whyicon6} alt="" className="ec-why-icon"/>

      <h3>Personalized Service</h3>
      <p>
        Your dedicated concierge anticipates every need, creating a seamlessly tailored voyage.
      </p>
    </div>

  </div>

</section>

{/* ===== JOURNEY SECTION ===== */}

<section className="ec-exp-journey-section">

  <div className="ec-exp-journey-container">

    <span className="ec-exp-journey-small">YOUR JOURNEY AWAITS</span>

    <h2>Begin Your Journey</h2>

    <p className="ec-exp-journey-desc">
      Every extraordinary journey begins with a conversation. Our Japan
      specialists await to craft your bespoke itinerary, tailored to your
      every desire.
    </p>

    <div className="ec-exp-journey-contact">

      <div className="ec-contact-box">
        <span className="ec-contact-icon"><FiPhone/></span>
        <span>+442074269888</span>
      </div>

      <div className="ec-divider"></div>

      <div className="ec-contact-box">
        <span className="ec-contact-icon">✉</span>
        <span>southafrica@eliteconcierge.com</span>
      </div>

    </div>

    <button className="ec-exp-journey-btn">
      BEGIN YOUR JOURNEY →
    </button>

  </div>

  {<BrandStrip/>}
</section>


    </div>
  )
}

/* ===== REUSABLE CARD COMPONENT ===== */

const VoyageCard = ({ img, label, featured, region, title, sub, days, guests, price, docs }) => (
  <div className="ec-voyage-card">
    <div className="ec-voyage-img">
      <img src={img} alt="" />
      <span className="ec-label">{label}</span>
      {featured && <span className="ec-featured">FEATURED</span>}
    </div>

    <div className="ec-voyage-content">
      <span className="ec-region">{region}</span>
      <h3>{title}</h3>
      <h5>{sub}</h5>
      <p>{docs}</p>

      <div className="ec-voyage-footer">
        <div className='ec-voyage-left'>
          <span>
            <CiClock2 className='ec-voyage-icon'/> {days}
            <LuUsers className='ec-voyage-icon'/> {guests}
          </span>
        </div>
        <span className="ec-price">From {price}</span>
      </div>
    </div>
  </div>
);

export default ExpenditionCruising