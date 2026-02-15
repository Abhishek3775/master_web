import React from 'react';
import { Link } from 'react-router-dom';
import { FaInstagram, FaFacebookF, FaPhone, FaEnvelope } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="main-footer">
      <div className="footer-content">
        <div className="footer-container">
          {/* Company Info */}
          <div className="footer-column">
            <div className="footer-logo">
              <div className="logo-circle">
                <span className="logo-icon">E</span>
              </div>
              <div className="logo-text">
                <span className="logo-title">ELITE GLOBAL</span>
                <span className="logo-subtitle">LUXURY TRAVEL</span>
              </div>
            </div>
            <p className="footer-description">
              Crafting extraordinary journeys for discerning travellers since 2005.
            </p>
            <div className="social-links">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <FaInstagram />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <FaFacebookF />
              </a>
            </div>
          </div>

          {/* Destinations */}
          <div className="footer-column">
            <h3>DESTINATIONS</h3>
            <ul className="footer-links">
              <li><Link to="/destinations/south-africa">South Africa</Link></li>
              <li><Link to="/destinations/tanzania">Tanzania</Link></li>
              <li><Link to="/destinations/kenya">Kenya</Link></li>
              <li><Link to="/destinations/botswana">Botswana</Link></li>
              <li><Link to="/destinations/morocco">Morocco</Link></li>
              <li><Link to="/destinations/namibia">Namibia</Link></li>
            </ul>
          </div>

          {/* Experiences */}
          <div className="footer-column">
            <h3>EXPERIENCES</h3>
            <ul className="footer-links">
              <li><Link to="/experiences/safari">Safari & Wildlife</Link></li>
              <li><Link to="/experiences/wine">Wine & Culinary</Link></li>
              <li><Link to="/experiences/adventure">Adventure</Link></li>
              <li><Link to="/experiences/beach">Beach & Coast</Link></li>
              <li><Link to="/experiences/cultural">Cultural</Link></li>
              <li><Link to="/experiences/honeymoon">Honeymoon</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="footer-column">
            <h3>CONTACT</h3>
            <div className="footer-contact">
              <div className="contact-item">
                <FaPhone />
                <a href="tel:+442012345678">+44 (0) 20 1234 5678</a>
              </div>
              <div className="contact-item">
                <FaEnvelope />
                <a href="mailto:info@eliteconcierge.com">info@eliteconcierge.com</a>
              </div>
              <div className="contact-locations">
                <p><strong>South Africa · Japan</strong></p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        <div className="footer-container">
          <div className="footer-bottom-content">
            <div className="footer-cta">
              <h2>GET IN TOUCH NOW</h2>
            </div>
            <div className="footer-legal">
              <Link to="/privacy-policy">Privacy Policy</Link>
              <Link to="/terms-of-service">Terms of Service</Link>
              <Link to="/cookie-policy">Cookie Policy</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
