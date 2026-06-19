import React from "react";
import {
  FaMapMarkerAlt,
  FaRoad,
  FaCar,
  FaShieldAlt,
  FaCheckCircle
} from "react-icons/fa";

const Aboutus = () => {
  return (
    <section className="about-section">

      <div className="about-container">

        {/* TITLE */}
        <h2 className="about-title">
          Glasgow Airport Parking (GLA) — Book with Scot Park
        </h2>

        {/* DESCRIPTION */}
        <p className="about-desc">
          Secure Glasgow Airport parking with convenient meet and greet service near the terminal.
          Located just 0.3 miles from Glasgow Airport.
        </p>

        <p className="about-desc">
          Book online and receive confirmation with arrival details. Secure handover and return
          instructions. Transparent pricing and day-of-travel support.
        </p>

        {/* GRID */}
        <div className="about-grid">

          {[
            { icon: <FaMapMarkerAlt />, label: "LOCATION", text: "Glasgow Airport" },
            { icon: <FaRoad />, label: "DISTANCE", text: "0.3 miles from airport" },
            { icon: <FaCar />, label: "SERVICES", text: "Meet & Greet, Park & Ride" },
            { icon: <FaShieldAlt />, label: "BOOKING", text: "Secure online booking" }
          ].map((item, index) => (
            <div className="about-card" key={index}>
              <div className="about-icon">{item.icon}</div>
              <div className="about-card-content">
                <span className="about-label">{item.label}</span>
                <h4 className="about-text">{item.text}</h4>
              </div>
            </div>
          ))}

        </div>

        {/* LINKS */}
        {/* <div className="about-links">
          <h4>Related pages</h4>
          <p>
            <a href="#">Glasgow Airport Parking</a> |
            <a href="#"> Meet & Greet</a> |
            <a href="#"> Cheap Parking</a> |
            <a href="#"> Parking Near Airport</a> |
            <a href="#"> FAQ</a> |
            <a href="#"> Scotland Airport Parking</a>
          </p>
        </div> */}

        {/* FAQ */}
        <div className="about-faq">


  <div className="faq-item">
    <span>Where do I meet the driver?</span>
    <p>Your confirmation includes exact meeting details.</p>
  </div>

  <div className="faq-item">
    <span>Is the car park secure?</span>
    <p>CCTV, patrols and controlled access.</p>
  </div>

  <div className="faq-item">
    <span>What if my flight is delayed?</span>
    <p>We adjust your return time.</p>
  </div>

</div>

      </div>

      {/* ================= CSS ================= */}
      <style>{`

/* SECTION */
.about-section {
  padding: 110px 20px;
  background: linear-gradient(to bottom, #f8fafc, #ffffff);
}

/* CONTAINER */
.about-container {
  max-width: 1200px;
  margin: auto;
  text-align: center;
}

/* TITLE */
.about-title {
  font-size: 44px;
  font-weight: 700;
  color: #0A1A3A;
  margin-bottom: 25px;
}

/* DESC */
.about-desc {
  font-size: 18px;
  color: #555;
  line-height: 1.8;
  max-width: 780px;
  margin: 10px auto;
}

/* GRID */
.about-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 30px;
  margin-top: 60px;
}

/* CARD */
.about-card {
  background: #ffffff;
  border-radius: 20px;
  padding: 28px;

  display: flex;
  align-items: center;
  gap: 18px;

  border: 1px solid rgba(0,0,0,0.06);

  box-shadow:
    0 6px 16px rgba(0,0,0,0.04),
    0 2px 6px rgba(1,40,133,0.06);

  transition: all 0.3s ease;
}

/* HOVER */
.about-card:hover {
  transform: translateY(-8px);
  box-shadow:
    0 20px 40px rgba(0,0,0,0.08),
    0 10px 25px rgba(1,40,133,0.15);
}

/* ICON BOX */
.about-icon {
  width: 58px;
  height: 58px;
  min-width: 58px;

  border-radius: 14px;
  background: rgba(1,40,133,0.08);

  display: flex;
  align-items: center;
  justify-content: center;
}

/* ICON */
.about-icon svg {
  font-size: 22px;
  color: #0A1A3A;
}

/* CONTENT */
.about-card-content {
  text-align: left;
}

/* LABEL */
.about-label {
  font-size: 12px;
  letter-spacing: 1.3px;
  color: #94a3b8;
}

/* TEXT */
.about-text {
  font-size: 18px;
  font-weight: 600;
  color: #111;
  margin-top: 4px;
}

/* LINKS */
.about-links {
  margin-top: 60px;
  text-align: left;
}

.about-links h4 {
  font-size: 20px;
  margin-bottom: 10px;
}

.about-links a {
  font-size: 15px;
  color: #0A1A3A;
  margin: 0 6px;
  text-decoration: none;
}

.about-links a:hover {
  text-decoration: underline;
}

/* FAQ */
.about-faq {
  margin-top: 80px;
  display: flex;
  flex-direction: row;        /* 🔥 horizontal */
  justify-content: center;   /* center align */
  gap: 20px;                 /* space between boxes */
  flex-wrap: wrap;           /* responsive */
}


/* TITLE */
.faq-title {
  font-size: 28px;
  font-weight: 700;
  color: #0A1A3A;
  margin-bottom: 30px;
}

/* EACH BOX */
.faq-item {
  width: 300px;              /* 🔥 fixed card width */
  min-height: 120px;

  background: #ffffff;
  border-radius: 16px;
  padding: 20px;

  text-align: left;

  border: 1px solid rgba(0,0,0,0.06);

  box-shadow:
    0 6px 16px rgba(0,0,0,0.04),
    0 2px 6px rgba(1,40,133,0.06);

  transition: all 0.25s ease;
}

/* HOVER EFFECT */
.faq-item:hover {
  transform: translateY(-4px);
  box-shadow:
    0 15px 30px rgba(0,0,0,0.08),
    0 8px 20px rgba(1,40,133,0.15);
}

/* QUESTION */
.faq-item span {
  font-size: 16px;
  font-weight: 600;
  color: #0A1A3A;
}

/* ANSWER */
.faq-item p {
  font-size: 15px;
  color: #555;
  margin-top: 6px;
}

.about-faq p {
  font-size: 17px;
  margin-bottom: 10px;
}

.about-faq strong {
  color: #0A1A3A;
}

/* RESPONSIVE */
@media (max-width: 768px) {
  .about-title {
    font-size: 30px;
  }

  .about-desc {
    font-size: 16px;
  }

  .about-card {
    padding: 20px;
  }

  .about-text {
    font-size: 16px;
  }
}

      `}</style>
    </section>
  );
};

export default Aboutus;