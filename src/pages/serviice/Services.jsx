import React from "react";
import "./Services.css";
import { CiGlobe } from "react-icons/ci";
import { LuShield } from "react-icons/lu";
import { FiClock } from "react-icons/fi";
import { FaStar } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { FaRegEnvelope } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import BrandStrip from "../../components/BrandStrip/BrandStrip";



export default function Services() {

  const navigate = useNavigate();

  return (
    <div className="services-page">
      {/* ===== HERO SECTION ===== */}
     <section className="services-hero-section">
        <div className="services-hero-overlay">
          <h5 className="services-hero-subtitle">EXCELLENCE DEFINED</h5>
          <p className="services-hero-title">Our Services</p>
          <p className="services-hero-tagline">Curating Extraordinary Experiences Worldwide</p>
          <p className="services-hero-desc">
            From private aviation to bespoke travel management, we deliver unparalleled luxury <br />
            services tailored to discerning individuals and corporations seeking excellence in
            every detail.
          </p>
          <button className="hero-btn">EXPLORE</button>
        </div>
      </section>

      {/* ===== NINE PILLARS SECTION ===== */}
      <section className="pillars-section">
        <h2>Nine Pillars of Exceptional Service</h2>
        <p>
          Each service is meticulously crafted to exceed expectations, delivered with the discretion
          and attention to detail that defines true luxury.
        </p>
      </section>

      {/* ===== PRIVATE CLIENT SERVICES ===== */}
      <section className="service-section">
        <div className="service-image service-image-left page-1" />
        <div className="service-content">
          <h5 className="service-subtitle">EXCLUSIVE SERVICE</h5>
          <h2 className="service-title">Private Client Services</h2>
          <p className="service-desc">
            Bespoke solutions for our most discerning clientele.
            <br /><br />
            Experience the pinnacle of personalized service with our Private Client division.
            From exclusive access to sold-out events to securing rare collectibles, our dedicated
            team anticipates your needs before you even express them. We craft extraordinary moments
            that transform everyday life into an exceptional journey.
          </p>

          <ul className="service-list">
            <li>24/7 dedicated lifestyle manager</li>
            <li>Exclusive access to private events</li>
            <li>Luxury property sourcing</li>
            <li>Fine art and collectibles acquisition</li>
          </ul>

          <button className="view-btn">VIEW ALL →</button>
        </div>
      </section>

      {/* ===== PRIVATE AVIATION (TEXT LEFT / IMAGE RIGHT) ===== */}
      <section className="service-section reverse">
        <div className="service-content">
          <h5 className="service-subtitle">EXCLUSIVE SERVICE</h5>
          <h2 className="service-title">Private Aviation</h2>
          <p className="service-desc">
            Seamless travel aboard the world’s finest aircraft.
            <br /><br />
            Transcend conventional travel with our private aviation services. Whether chartering a
            light jet for a quick business trip or a long-range aircraft for intercontinental
            journeys, we ensure every flight is an experience in refined luxury. Our network spans
            the globe’s premier operators and aircraft.
          </p>

          <ul className="service-list">
            <li>Access to 7,000+ aircraft worldwide</li>
            <li>Custom-configured interiors</li>
            <li>Empty leg flight opportunities</li>
            <li>Global concierge coordination</li>
          </ul>

          <button onClick={()=>navigate('/privent-aviation')} className="view-btn">VIEW ALL →</button>
        </div>
        <div className="service-image service-image-right page-2" />
      </section>

      {/* ===== Yacht Charter SERVICES ===== */}
      <section className="service-section">
        <div className="service-image service-image-left page-3" />
        <div className="service-content">
          <h5 className="service-subtitle">EXCLUSIVE SERVICE</h5>
          <h2 className="service-title">Yacht Charter</h2>
          <p className="service-desc">
            Navigate the world's most beautiful waters in style
            <br /><br />
            Set sail on an unforgettable maritime adventure with our curated yacht
            charter services. From Mediterranean escapes to Caribbean explorations,
            we arrange everything from intimate sailing yachts to mega yachts with
            full crew, ensuring your time at sea is nothing short of extraordinary.
          </p>

          <ul className="service-list">
            <li>Motor yachts & sailing vessels</li>
            <li>Professional crew arrangements</li>
            <li>Bespoke itinerary planning</li>
            <li>Onboard chef & provisions</li>
          </ul>

          <button onClick={()=>navigate('/expendition')} className="view-btn">VIEW ALL →</button>
        </div>
      </section>

      {/* ===== First & Business Class Flights ===== */}
      <section className="service-section reverse">
        <div className="service-content">
          <h5 className="service-subtitle">EXCLUSIVE SERVICE</h5>
          <h2 className="service-title">First & Business Class Flights</h2>
          <p className="service-desc">
            Premium commercial travel, expertly curated
            <br /><br />
            When commercial aviation suits your itinerary, travel in the comfort you
deserve. Our specialists secure the finest first and business class seats on
leading carriers, optimize routing for your convenience, and ensure every
touchpoint reflects the premium service you expect.
          </p>

          <ul className="service-list">
            <li>Best fare guarantees</li>
            <li>Lounge access worldwide</li>
            <li>Priority boarding & security</li>
            <li>Seamless rebooking services</li>
          </ul>

          <button className="view-btn">VIEW ALL →</button>
        </div>
        <div className="service-image service-image-right page-4" />
      </section>

      {/* ===== Ultra Luxury Cruises ===== */}
      <section className="service-section">
        <div className="service-image service-image-left page-5" />
        <div className="service-content">
          <h5 className="service-subtitle">EXCLUSIVE SERVICE</h5>
          <h2 className="service-title">Ultra Luxury Cruises</h2>
          <p className="service-desc">
            Voyage aboard the world's most exclusive vessels
            <br /><br />
            Discover remote destinations and iconic ports aboard the world's most
prestigious cruise lines. From expedition vessels exploring Antarctica to
six-star ships traversing the Mediterranean, we curate ocean and river
journeys that redefine maritime elegance.
          </p>

          <ul className="service-list">
            <li>Suite & penthouse reservations</li>
            <li>Shore excursion planning</li>
            <li>Private dining arrangements</li>
            <li>Pre & post cruise experiences</li>
          </ul>

          <button onClick={()=>navigate('/expendition')} className="view-btn">VIEW ALL →</button>
        </div>
      </section>

      {/* ===== Rewards & Incentives ===== */}
      <section className="service-section reverse">
        <div className="service-content">
          <h5 className="service-subtitle">EXCLUSIVE SERVICE</h5>
          <h2 className="service-title">Rewards & Incentives</h2>
          <p className="service-desc">
            Motivate and reward with unforgettable experiences
            <br /><br />
            Elevate your corporate rewards and incentive programs with experiences
that inspire. We design bespoke travel incentives, curate exclusive event
access, and create memorable moments that recognize achievement
and foster loyalty among your most valued stakeholders.
          </p>

          <ul className="service-list">
            <li>Custom incentive travel programs</li>
            <li>VIP event packages</li>
            <li>Luxury gift procurement</li>
            <li>Recognition ceremony planning</li>
          </ul>

          <button className="view-btn">VIEW ALL →</button>
        </div>
        <div className="service-image service-image-right page-6" />
      </section>

      {/* ===== C-Level Travel Management ===== */}
      <section className="service-section">
        <div className="service-image service-image-left page-7" />
        <div className="service-content">
          <h5 className="service-subtitle">EXCLUSIVE SERVICE</h5>
          <h2 className="service-title">C-Level Travel Management</h2>
          <p className="service-desc">
            Executive travel orchestrated to perfection
            <br /><br />
            Your time is your most valuable asset. Our C-level travel management
service ensures every journey is optimized for efficiency without
compromising comfort. From complex multi-city itineraries to last-
minute changes, we handle every detail with discretion and precision.
          </p>

          <ul className="service-list">
            <li>C-Level Travel Management</li>
            <li>Real-time itinerary management</li>
            <li>Security & risk assessment</li>
            <li>Expense tracking & reporting</li>
          </ul>

          <button className="view-btn">VIEW ALL →</button>
        </div>
      </section>

      {/* ===== Conference & Events ===== */}
      <section className="service-section reverse">
        <div className="service-content">
          <h5 className="service-subtitle">EXCLUSIVE SERVICE</h5>
          <h2 className="service-title">Conference & Events</h2>
          <p className="service-desc">
            Exceptional gatherings in extraordinary settings
            <br /><br />
            Transform your corporate events into landmark occasions. Whether it's
an intimate board retreat, a global conference, or a celebration of
success, we source exceptional venues, coordinate flawless logistics, and
create immersive experiences that leave lasting impressions.
          </p>

          <ul className="service-list">
            <li>Venue sourcing & negotiation</li>
            <li>Full event production</li>
            <li>Guest travel coordination</li>
            <li>On-site management team</li>
          </ul>

          <button className="view-btn">VIEW ALL →</button>
        </div>
        <div className="service-image service-image-right page-8" />
      </section>

      {/* ===== Personal Assistant ===== */}
      <section className="service-section">
        <div className="service-image service-image-right page-9" />

        <div className="service-content">
          <h5 className="service-subtitle">EXCLUSIVE SERVICE</h5>
          <h2 className="service-title">Personal Assistant</h2>
          <p className="service-desc">
            Your wishes, our priority - around the clock
            <br /><br />
            Experience the freedom of having a dedicated team ready to fulfill any
request. From securing impossible reservations to managing complex
logistics, our personal assistant service anticipates your needs and
executes with flawless precision, allowing you to focus on what matters
most.
          </p>

          <ul className="service-list">
            <li>24/7 global availability</li>
            <li>Restaurant & table reservations</li>
            <li>Shopping & errand services</li>
            <li>Research & procurement</li>
          </ul>

          <button className="view-btn">VIEW ALL →</button>
        </div>
      </section>

      {/* ===== STATS + ICONS + TESTIMONIAL SECTION ===== */}
      <section className="stats-section">
        <div className="stats-top">
          <div>
            <h3>50+</h3>
            <p>COUNTRIES SERVED</p>
          </div>
          <div>
            <h3>15K+</h3>
            <p>HAPPY CLIENTS</p>
          </div>
          <div>
            <h3>24/7</h3>
            <p>GLOBAL SUPPORT</p>
          </div>
          <div>
            <h3>100%</h3>
            <p>SATISFACTION RATE</p>
          </div>
        </div>

        <div className="stats-icons">
          {/* <img src={backgroundImg} className="back-image" /> */}
          <div className="icon-card">
            <div className="icon">
              <CiGlobe size={20} />
            </div>
            
            <h4>Global Reach</h4>
            <p>
              Our extensive network spans across continents, ensuring seamless service
              wherever your journey takes you.
            </p>
          </div>
          <div className="icon-card">
            <div className="icon">
              <LuShield size={20} />
            </div>
            <h4>Absolute Discretion</h4>
            <p>
              Your privacy is paramount. Every interaction is handled with the utmost
              confidentiality and professionalism.
            </p>
          </div>
          <div className="icon-card">
            <div className="icon">
              <FiClock size={20} />
            </div>
            <h4>Around the Clock</h4>
            <p>
              Our dedicated team is available 24/7, ready to assist with any request,
              no matter the time zone.
            </p>
          </div>
        </div>

        <div className="testimonial">
          <div className="stars">
            {[...Array(5)].map((_, i) => (
              <FaStar key={i} className="star" />
            ))}
          </div>
          <p className="quote">
            “Their attention to detail and unwavering commitment to excellence transformed <br />
            our corporate retreat into an unforgettable experience. Every single request was <br />
            handled with precision and grace.”
          </p>
          <p className="author">
            <strong>Jonathan Mitchell</strong><br />
            CEO, Mitchell Holdings
          </p>
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

      {<BrandStrip/>}
      </section>
      
    </div>
  );
}
