import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaTiktok,
  FaLinkedinIn,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt
} from "react-icons/fa";

import footerLogo from "/img/scot_park_logo.png";

export default function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        {/* LEFT */}
        <div className="footer-col">
          <Link to="/">
            <img src={footerLogo} alt="logo" className="footer-logo" />
          </Link>

          <p className="footer-desc">
            Secure, reliable airport parking in Scotland. Meet & Greet and Park & Ride
            with clear communication and predictable service.
          </p>
        </div>

        {/* SERVICES */}
        <div className="footer-col">
          <h4>Services</h4>
          <ul>
            <li><Link to="/meetgreet">Meet & Greet</Link></li>
            <li><Link to="/parkride">Park & Ride</Link></li>
            <li><Link to="/howitworks">How It Works</Link></li>
          </ul>
        </div>

        {/* COMPANY */}
        <div className="footer-col">
          <h4>Company</h4>
          <ul>
            <li><Link to="/reviews">Reviews</Link></li>
            <li><Link to="/faq">Help & FAQ</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/termsandconditions">Terms & Conditions</Link></li>
            <li><Link to="/privacy">Privacy Policy</Link></li>
          </ul>
        </div>

        {/* CONTACT */}
        <div className="footer-col">
          <h4>Contact</h4>

          <p className="footer-contact">
            <FaPhone />
            <a
              href="tel:07348186412"
              style={{ marginLeft: "6px", color: "inherit", textDecoration: "none" }}
            >
              07348186412
            </a>
          </p>

          <p className="footer-contact">
            <FaEnvelope />
            <a
              href="mailto:support@scotpark.co.uk"
              style={{ marginLeft: "6px", color: "inherit", textDecoration: "none" }}
            >
              support@scotpark.co.uk
            </a>
          </p>

          <p className="footer-contact">
            <FaMapMarkerAlt />
            <a
              href="https://www.google.com/maps/place/28+Inchinnan+Rd,+Paisley+PA3+2RA,+UK/@55.8536261,-4.4267654,17z"
              target="_blank"
              rel="noopener noreferrer"
              style={{ marginLeft: "6px", color: "inherit", textDecoration: "none" }}
            >
              28-30 Inchinnan Road, Paisley, PA3 2PR
            </a>
          </p>

          {/* SOCIAL */}
          <div className="footer-social">
            <a href="https://www.facebook.com/scotparkairport" target="_blank" rel="noopener noreferrer">
              <FaFacebookF />
            </a>

            <a href="https://www.instagram.com/scotparkairport/" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>

            <a href="https://www.tiktok.com/@scotparkairport" target="_blank" rel="noopener noreferrer">
              <FaTiktok />
            </a>

            <a href="https://www.linkedin.com/company/scotpark-airport-parking/" target="_blank" rel="noopener noreferrer">
              <FaLinkedinIn />
            </a>
          </div>
        </div>

      </div>

      {/* ================= CSS ================= */}
      <style>{`

      .footer-social a {
  margin-right: 12px;
  color: #fff;
  font-size: 18px;
  transition: 0.3s;
}

.footer-social a:hover {
  color: #f4b400; /* or your brand color */
}

.footer {
  background: #0A1A3A;
  color: #fff;
  padding: 80px 20px 30px;
}

/* CONTAINER */
.footer-container {
  max-width: 1200px;
  margin: auto;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 50px;
}

/* LOGO */
.footer-logo {
  height: 115px;
  margin-bottom: 20px;
}

/* DESC */
.footer-desc {
  font-size: 15px;
  line-height: 1.7;
  color: #dbeafe;
}

/* HEADINGS */
.footer-col h4 {
  margin-bottom: 18px;
  font-size: 18px;
  font-weight: 600;
}

/* LINKS */
.footer-col ul {
  list-style: none;
  padding: 0;
}

.footer-col ul li {
  margin-bottom: 12px;
}

.footer-col ul li a {
  text-decoration: none;
  color: #dbeafe;
  font-size: 15px;
  transition: 0.3s;
}

.footer-col ul li a:hover {
  color: #facc15;
}

/* CONTACT */
.footer-contact {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 15px;
  color: #dbeafe;
  margin-bottom: 12px;
}

/* SOCIAL */
.footer-social {
  margin-top: 15px;
  display: flex;
  gap: 15px;
}

.footer-social svg {
  cursor: pointer;
  font-size: 18px;
  transition: 0.3s;
}

.footer-social svg:hover {
  color: #facc15;
}

/* BOTTOM */
.footer-bottom {
  text-align: center;
  margin-top: 50px;
  padding-top: 20px;
  border-top: 1px solid rgba(255,255,255,0.2);
  font-size: 14px;
  color: #cbd5e1;
}

/* RESPONSIVE */
@media (max-width: 992px) {
  .footer-container {
    grid-template-columns: repeat(2, 1fr);
    gap: 30px;
  }
}

@media (max-width: 600px) {
  .footer-container {
    grid-template-columns: 1fr;
    text-align: center;
  }

  .footer-contact {
    justify-content: center;
  }

  .footer-social {
    justify-content: center;
  }
}

      `}</style>
    </footer>
  );
}