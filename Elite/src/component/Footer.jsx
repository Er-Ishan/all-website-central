import { Link } from "react-router-dom";
import footerLogo from "/img/EliteWhiteUpdated.png";
import { FaPhoneAlt, FaMapMarkerAlt, FaEnvelope, FaClock } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer-main text-white">

      {/* TOP BAR */}
      <div className="footer-top container">
        <div className="footer-top-grid">

          <div className="footer-logo">
            <img src={footerLogo} alt="Airport Parking" />
          </div>

          <div className="footer-tagline">
            <p>
              At Heathrow Elite Parking, we don't just park cars, we deliver
              peace of mind.
            </p>
          </div>

        </div>
      </div>

      {/* MAIN FOOTER */}
      <div className="container footer-content">

        <div className="row">

          {/* CONTACT */}
          {/* CONTACT */}
          <div className="col-md-4">
            <h4 className="footer-title">CONTACT US</h4>

            <p className="footer-contact">
              <FaMapMarkerAlt className="icon" />
              <a
                href="https://www.google.com/maps/place/5+Elmsleigh+Rd,+Staines+TW18+4QB,+UK/data=!4m2!3m1!1s0x4876712c44290eeb:0x56a01da37c7a8791?sa=X&ved=1t:242&ictx=111"
                target="_blank"
                rel="noopener noreferrer"
              >
                5 Emsleigh Road Staines TW18 4QB
              </a>
            </p>

            <p className="footer-contact">
              <FaEnvelope className="icon" />
              <a href="mailto:support@heathroweliteparking.co.uk">
                support@heathroweliteparking.co.uk
              </a>
            </p>

            <p className="footer-contact">
              <FaClock className="icon" />
              Office hours: 9 AM - 6 PM
            </p>

            <p className="footer-contact">
              <FaPhoneAlt className="icon" />
              <a href="tel:+02046415437">020 4641 5437</a>
            </p>

            <p className="footer-contact">
              <FaClock className="icon" />
              Operations hours: 24/7
            </p>

            <p className="footer-contact">
              <FaPhoneAlt className="icon" />
              <a href="tel:+07404450858">07404450858</a>
            </p>
          </div>

          {/* LINKS */}
          <div className="col-md-4">
            <h4 className="footer-title">USEFUL LINKS</h4>

            <ul className="footer-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/how-it-works">Services</Link></li>
              <li><Link to="/privacy-policy">Privacy Policy</Link></li>
              <li><Link to="/terms-and-conditions">T&Cs</Link></li>
              <li><Link to="/contact-us">Contact Us</Link></li>
            </ul>
          </div>

          {/* NEWSLETTER */}
          <div className="col-md-4">
            <h4 className="footer-title">GET IN TOUCH</h4>

            <input
              type="email"
              className="footer-input"
              placeholder="Email *"
            />

            <button className="footer-btn">
              SUBSCRIBE
            </button>
          </div>

        </div>

        {/* <div className="footer-copy">
          © 2026 Heathrow Elite Parking
        </div> */}

      </div>

      {/* CSS */}
      <style>{`

  .footer-contact a {
  color: #fff !important;
}

      .footer-contact a {
  color: inherit;
  text-decoration: none;
  font-weight: 500;
}

.footer-contact a:hover {
  text-decoration: underline;
}

      .footer-contact a {
  color: inherit;
  text-decoration: none;
}

.footer-contact a:hover {
  text-decoration: underline;
}

      .footer-contact a {
  color: inherit;
  text-decoration: none;
}

.footer-contact a:hover {
  text-decoration: underline;
}

      .phone-label {
  display: block;
  font-size: 14px;
}

a[href^="tel"] {
  color: #000;
  text-decoration: none;
  font-weight: 600;
  cursor: pointer;
}

      .footer-main{
        background:#005c25;
        padding-top:40px;
      }

      .footer-top{
        border-bottom:1px solid #222;
        padding-bottom:30px;
        margin-bottom:40px;
      }

      .footer-top-grid{
        display:flex;
        align-items:center;
        justify-content:space-between;
        gap:20px;
      }

      .footer-logo img{
        height:80px;
      }

      .footer-tagline{
        font-size:18px;
        max-width:400px;
      }

      .footer-phone-box{
        background:#f5b41c;
        color:#000;
        padding:20px 30px;
        display:flex;
        align-items:center;
        gap:15px;
        font-weight:600;
        clip-path: polygon(10% 0,100% 0,100% 100%,0 100%);
      }

      .phone-icon{
        font-size:24px;
      }

      .footer-phone-box a{
        color:#000;
        font-size:22px;
        text-decoration:none;
        font-weight:700;
      }

      .phone-label{
        display:block;
        font-size:14px;
      }

      .footer-title{
        font-weight:700;
        margin-bottom:20px;
        position:relative;
      }

      .footer-title::after{
        content:"";
        width:40px;
        height:2px;
        background:#f5b41c;
        position:absolute;
        bottom:-8px;
        left:0;
      }

      .footer-contact{
        margin-bottom:15px;
        font-size:15px;
        display:flex;
        gap:10px;
        align-items:center;
      }

      .icon{
        color:#f5b41c;
      }

      .footer-links{
        list-style:none;
        padding:0;
      }

      .footer-links li{
        margin-bottom:10px;
      }

      .footer-links a{
        color:#fff;
        text-decoration:none;
        transition:0.3s;
      }

      .footer-links a:hover{
        color:#f5b41c;
      }

      .footer-input{
        width:100%;
        padding:12px;
        border:1px solid #444;
        color:#fff;
        margin-bottom:15px;
      }

      .footer-btn{
        background:#f5b41c;
        border:none;
        padding:10px 20px;
        font-weight:700;
        color:#000;
      }

      .footer-copy{
        text-align:center;
        margin-top:40px;
        padding-top:20px;
        border-top:1px solid #222;
        font-size:14px;
      }

      @media (max-width:768px){

        .footer-top-grid{
          flex-direction:column;
          text-align:center;
        }

        .footer-phone-box{
          clip-path:none;
        }

      }

      `}</style>

    </footer>
  );
}