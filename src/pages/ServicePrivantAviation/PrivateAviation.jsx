import React,{useState} from "react";
import "./Private.css"; // ✅ Corrected filename for your CSS\
import jetImage1 from "../../assets2/Services/aviation/3.jpg";
import jetImage2 from "../../assets2/Services/aviation/4.jpg";
import jetImage3 from "../../assets2/Services/aviation/5.jpg";
// import { FaPlane, FaCreditCard, FaCog, FaGlobe, FaClock, FaCar } from "react-icons/fa";
import inFlight_1 from "../../assets2/Services/aviation/In-Flight Amenities/1.png"
import inFlight_2 from "../../assets2/Services/aviation/In-Flight Amenities/2.png"
import inFlight_3 from "../../assets2/Services/aviation/In-Flight Amenities/3.png"
import inFlight_4 from "../../assets2/Services/aviation/In-Flight Amenities/4.png"
import egcImg from "../../assets2/Services/aviation/6.jpg"
import journeysImg_1 from "../../assets2/Services/aviation/Jet Expeditions/1.png"
import journeysImg_2 from "../../assets2/Services/aviation/Jet Expeditions/2.png"
import journeysImg_3 from "../../assets2/Services/aviation/Jet Expeditions/3.png"
import BrandStrip from "../../components/BrandStrip/BrandStrip";

export default function PrivateAviation() { 

  const [activeTab, setActiveTab] = useState("light");

  // Data for all 3 jet types
  const jetsData = {
    light: {
      name: "CITATION CJ4",
      title: "Light Jets",
      image: jetImage1,
      description:
        "Perfect for short to medium-range journeys. Ideal for business trips and intimate getaways with exceptional speed and efficiency.",
      specs: [
        { label: "Capacity", value: "6–8 passengers" },
        { label: "Range", value: "2,165 nm" },
      ],
      features: [
        ["Wi-Fi connectivity", "Refreshment center"],
        ["Leather seating", "Lavatory"],
      ],
    },
    midsize: {
      name: "HAWKER 900XP",
      title: "Midsize Jets",
      image: jetImage2,
      description:
        "The perfect balance of comfort and capability. Spacious cabin with stand-up headroom for transcontinental travel.",
      specs: [
        { label: "Capacity", value: "8–9 passengers" },
        { label: "Range", value: "2,930 nm" },
      ],
      features: [
        ["Full-service galley", "Work tables"],
        ["Entertainment system", "Enhanced baggage"],
      ],
    },
    large: {
      name: "GULFSTREAM G650",
      title: "Large Jets",
      image: jetImage3,
      description:
        "Ultimate luxury for intercontinental journeys. The flagship of private aviation featuring flatbed seating and exquisite amenities.",
      specs: [
        { label: "Capacity", value: "14–16 passengers" },
        { label: "Range", value: "7,000 nm" },
      ],
      features: [
        ["Flatbed seats", "Full bedroom"],
        ["Private suites", "Shower facilities"],
      ],
    },
  };

  const activeJet = jetsData[activeTab];

  return (
    <div className="aviation-page">
      {/* ===== HERO SECTION ===== */}
      <section className="aviation-hero">
        <div className="aviation-overlay">
          <h5 className="aviation-subtitle">ELEVATE YOUR JOURNEY</h5>
          <h1 className="aviation-title">Private Aviation</h1>
          <p className="aviation-desc">
            Experience the pinnacle of luxury travel with our bespoke <br /> private aviation services. 
            From exclusive jet charters <br /> to seamless global mobility, we redefine what it means to fly.
          </p>
          <button className="quote-btn">REQUEST A QUOTE</button>
          <p className="discover">DISCOVER</p>
          <div className="down-arrow">⌄</div>
        </div>
      </section>

      {/* ===== STATS SECTION ===== */}
      <section className="aviation-stats">
        <div className="stat-item">
          <h3>500+</h3>
          <p>AIRCRAFT NETWORK</p>
        </div>
        <div className="stat-item">
          <h3>180+</h3>
          <p>COUNTRIES SERVED</p>
        </div>
        <div className="stat-item">
          <h3>15K+</h3>
          <p>ANNUAL FLIGHTS</p>
        </div>
        <div className="stat-item">
          <h3>24/7</h3>
          <p>CONCIERGE SUPPORT</p>
        </div>
      </section>

      {/* ===== REDEFINING PRIVATE AIR TRAVEL SECTION ===== */}
      <section className="redefine-section">
        <div className="redefine-content">
          <h5 className="redefine-subtitle">YOUR SKY, YOUR RULES</h5>
          <h2 className="redefine-title">Redefining Private Air <br /> Travel</h2>
          <p className="redefine-desc">
            At Aurelia, we believe that the journey should be as <br /> extraordinary as the destination.
            Our private aviation division <br /> offers unparalleled access to the world's finest <br /> aircraft,
            combined with the personalized service that <br /> defines luxury travel.
          </p>
          <p className="redefine-desc">
            Whether you're planning a business trip, a family holiday, or a <br /> globe-spanning expedition,
            our aviation specialists craft bespoke <br /> solutions tailored to your exact requirements.
          </p>

          <ul className="redefine-list">
            <li>No commercial queues or layovers</li>
            <li>Depart on your schedule</li>
            <li>Access to 5,000+ airports worldwide</li>
            <li>Customized in-flight experience</li>
          </ul>

          <div className="trusted-box">
            <p className="trusted-title">Trusted by Elite Travelers</p>
            <p className="trusted-text">
              15+ years of excellence in luxury <br /> aviation services worldwide.
            </p>
          </div>
        </div>

        <div className="redefine-image"></div>
      </section>

      {/* ===== THE FLEET SECTION ===== */}
       <section className="fleet-section">
      <div className="fleet-header">
        <p className="fleet-subtitle">OUR AIRCRAFT</p>
        <h2 className="fleet-title">The Fleet</h2>
        <p className="fleet-description">
          Access to over 500 meticulously maintained aircraft, from nimble light
          jets to ultra-long-range flagships.
        </p>

        {/* Tabs */}
        <div className="fleet-tabs">
          <button
            className={activeTab === "light" ? "active" : ""}
            onClick={() => setActiveTab("light")}
          >
            LIGHT JETS
          </button>
          <button
            className={activeTab === "midsize" ? "active" : ""}
            onClick={() => setActiveTab("midsize")}
          >
            MIDSIZE JETS
          </button>
          <button
            className={activeTab === "large" ? "active" : ""}
            onClick={() => setActiveTab("large")}
          >
            LARGE JETS
          </button>
        </div>
      </div>

      {/* Dynamic Content */}
      <div className="fleet-content">
        <div className="fleet-image">
          <img src={activeJet.image} alt={activeJet.title} />
        </div>

        <div className="fleet-info">
          <span className="jet-name">{activeJet.name}</span>
          <h3>{activeJet.title}</h3>
          <p className="jet-description">{activeJet.description}</p>

          <div className="specs">
            {activeJet.specs.map((spec, index) => (
              <div className="specs_1" key={index}>
                <p className="feet-label">{spec.label}</p>
                <p>{spec.value}</p>
              </div>
            ))}
          </div>

          <div className="features">
            {activeJet.features.map((col, i) => (
              <ul key={i}>
                {col.map((item, j) => (
                  <li key={j}>{item}</li>
                ))}
              </ul>
            ))}
          </div>
        </div>
      </div>
    </section>
    
      {/* ===== ONBOARD EXPERIENCE ===== */}
  <section className="amenities-section">
    <div className="amenities-header">
      <p className="amenities-subtitle">ONBOARD EXPERIENCE</p>
      <h2 className="amenities-title">In-Flight Amenities</h2>
      <p className="amenities-desc">
        Every journey features exceptional comfort and personalized service
      </p>
    </div>
    
    <div className="amenities-grid">
      <div className="amenity-card">
        <img src={inFlight_1} alt="Luxury Interiors" />
        <h4>Luxurious Interiors</h4>
        <p>
          Hand-stitched Italian leather seating with advanced electric recline
          systems and full bedding capability.
        </p>
      </div>
    
      <div className="amenity-card">
        <img src={inFlight_2} alt="Gourmet Dining" />
        <h4>Gourmet Dining</h4>
        <p>
          Michelin-quality cuisine prepared by private chefs, paired with
          premium champagne and fine wines.
        </p>
      </div>
    
      <div className="amenity-card">
        <img src={inFlight_3} alt="Global Connectivity" />
        <h4>Global Connectivity</h4>
        <p>
          High-speed satellite Wi-Fi, noise canceling headsets, and personal
          entertainment systems.
        </p>
      </div>
    
      <div className="amenity-card">
        <img src={inFlight_4} alt="VIP Terminals" />
        <h4>VIP Terminals</h4>
        <p>
          Skip commercial queues with access to exclusive FBOs and private
          terminals worldwide.
        </p>
      </div>
    </div>
  </section>
    
        {/* ===== EGC DIFFERENCE SECTION ===== */}
  <section className="difference-section">
    <div className="difference-container">
      
      <div className="difference-left">
        <p className="difference-subtitle">EVERY DETAIL, ELEVATED</p>
        <h2 className="difference-title">The EGC Difference</h2>
    
        <div className="difference-item">
          <div className="number-box">01</div>
          <div>
            <h4>Bespoke Itineraries</h4>
            <p>
              Every flight is tailored to your preferences—from departure times
              to in-flight dining menus.
            </p>
          </div>
        </div>
    
        <div className="difference-item">
          <div className="number-box">02</div>
          <div>
            <h4>Dedicated Flight Crew</h4>
            <p>
              Highly trained professionals with years of experience in luxury
              aviation service.
            </p>
          </div>
        </div>
    
        <div className="difference-item">
          <div className="number-box">03</div>
          <div>
            <h4>Privacy & Discretion</h4>
            <p>
              Complete confidentiality with secure communications and discreet
              ground handling.
            </p>
          </div>
        </div>
    
        <div className="difference-item">
          <div className="number-box">04</div>
          <div>
            <h4>24/7 Global Support</h4>
            <p>
              Round-the-clock assistance from our aviation specialists,
              wherever you are in the world.
            </p>
          </div>
        </div>
      </div>
    
      <div className="difference-right">
        <img src={egcImg} alt="Private Jet" />
    
        <div className="safety-box">
          <div className="shield-icon">🛡</div>
          <div>
            <h5>Safety First</h5>
            <p>ARGUS Platinum Rated</p>
          </div>
        </div>
      </div>
    
    </div>
  </section>

     {/* ===== CURATED JOURNEYS ===== */}
<section className="curated-section">
  <div className="curated-container">

    <p className="curated-subtitle">CURATED JOURNEYS</p>
    <h2 className="curated-title">Jet Expeditions</h2>
    <p className="curated-desc">
      Join fellow discerning travelers on our signature private jet expeditions
    </p>

    <div className="curated-grid">

      {/* Card 1 */}
      <div className="curated-card">
        <div className="curated-image">
          <img src={journeysImg_1} alt="Around the World" />
          <div className="curated-overlay"></div>
          <div className="curated-image-text">
            <span>24-Day Private Jet Expedition</span>
            <h3>Around the World</h3>
          </div>
        </div>

        <div className="curated-content">
          <p>Tokyo · Bali · Maldives · Safari · Marrakech</p>
          <p className="price">From £125,000 per person</p>
          <span className="view-details">VIEW DETAILS →</span>
        </div>
      </div>

      {/* Card 2 */}
      <div className="curated-card">
        <div className="curated-image">
          <img src={journeysImg_2} alt="European Grand Tour" />
          <div className="curated-overlay"></div>
          <div className="curated-image-text">
            <span>14-Day Private Jet Journey</span>
            <h3>European Grand Tour</h3>
          </div>
        </div>

        <div className="curated-content">
          <p>Paris · Monaco · Tuscany · Santorini · Vienna</p>
          <p className="price">From £68,000 per person</p>
          <span className="view-details">VIEW DETAILS →</span>
        </div>
      </div>

      {/* Card 3 */}
      <div className="curated-card">
        <div className="curated-image">
          <img src={journeysImg_3} alt="Asian Discovery" />
          <div className="curated-overlay"></div>
          <div className="curated-image-text">
            <span>18-Day Private Jet Adventure</span>
            <h3>Asian Discovery</h3>
          </div>
        </div>

        <div className="curated-content">
          <p>Hong Kong · Japan · Vietnam · Thailand · Bhutan</p>
          <p className="price">From £95,000 per person</p>
          <span className="view-details">VIEW DETAILS →</span>
        </div>
      </div>

    </div>
  </div>
</section>

      {/* ===== CLIENT EXPERIENCES ===== */}
<section className="reviews-section">
  <div className="reviews-container">

    <p className="reviews-subtitle">CLIENT EXPERIENCES</p>
    <h2 className="reviews-title">Guest Reviews</h2>

    <div className="reviews-grid">

      {/* Review 1 */}
      <div className="review-card">
        <div className="stars">★★★★★</div>
        <p className="review-text">
          "Aurelia's aviation team transformed our family trip to the Maldives.
          Every detail was perfect—from the champagne on boarding to the seamless
          customs clearance."
        </p>
        <p className="review-name">Alexander M.</p>
        <p className="review-location">London</p>
      </div>

      {/* Review 2 */}
      <div className="review-card">
        <div className="stars">★★★★★</div>
        <p className="review-text">
          "We've used many charter services, but none compare to Aurelia.
          The Gulfstream was immaculate, and the crew anticipated our every need."
        </p>
        <p className="review-name">Caroline & James D.</p>
        <p className="review-location">New York</p>
      </div>

      {/* Review 3 */}
      <div className="review-card">
        <div className="stars">★★★★★</div>
        <p className="review-text">
          "The jet card membership has been invaluable for my business travel.
          Guaranteed availability and consistent service excellence."
        </p>
        <p className="review-name">Robert T.</p>
        <p className="review-location">Dubai</p>
      </div>

    </div>
  </div>
</section>


{/* ===== FAQ SECTION ===== */}
<section className="faq-section">
  <div className="faq-container">

    <h2 className="faq-title">Frequently Asked Questions</h2>

    <div className="faq-box">

      {/* Active Item */}
      <div className="faq-item active">
        <div className="faq-question">
          <span>How far in advance should I book?</span>
          <span className="arrow">˄</span>
        </div>
        <p className="faq-answer">
          While we can arrange flights within 4–6 hours for on-demand charter,
          we recommend 48–72 hours notice for optimal aircraft selection.
          For peak travel periods or specific aircraft requirements, earlier
          booking is advisable.
        </p>
      </div>

      <div className="faq-item">
        <div className="faq-question">
          <span>What is included in the charter price?</span>
          <span className="arrow">˅</span>
        </div>
      </div>

      <div className="faq-item">
        <div className="faq-question">
          <span>Can I bring pets on board?</span>
          <span className="arrow">˅</span>
        </div>
      </div>

      <div className="faq-item">
        <div className="faq-question">
          <span>What about customs and immigration?</span>
          <span className="arrow">˅</span>
        </div>
      </div>

      <div className="faq-item">
        <div className="faq-question">
          <span>Is there a minimum booking requirement?</span>
          <span className="arrow">˅</span>
        </div>
      </div>

    </div>
  </div>
</section>

{/* ===== READY TO TAKE OFF ===== */}
<section className="cta-section">
  <div className="cta-container">
    <h2 className="cta-title">Ready to Take Off?</h2>
    <p className="cta-text">
      Our aviation specialists are standing by to craft your perfect journey.
      <br />
      From first inquiry to final landing, we're with you every mile.
    </p>

    <div className="cta-buttons">
      <button className="btn-goldd">REQUEST A QUOTE</button>
      <button className="btn-outlinee">Call +1(800) 555-0199</button>
    </div>
  </div>
</section>

{/* ===== NEWSLETTER ===== */}
<section className="newsletter-section">
  <div className="newsletter-container">

    <div className="newsletter-left">
      <h2>Stay Inspired</h2>
      <p>
        Receive curated travel inspiration and exclusive offers directly to
        your inbox.
      </p>
    </div>

    <div className="newsletter-right">
      <input type="email" placeholder="Enter your email" />
      <button>SUBSCRIBE</button>
    </div>

  </div>
</section>

{/* ===== LOGOS ROW ===== */}
{<BrandStrip/>}

    </div>
  );
}
