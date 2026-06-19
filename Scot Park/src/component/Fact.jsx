import React from "react";
import {
  FaShieldAlt,
  FaCheckCircle,
  FaCar,
  FaHeadset
} from "react-icons/fa";

export default function Fact() {
  return (
    <section className="fact-section">

      <div className="fact-container">

        {/* LEFT CONTENT */}
        <div className="fact-left">
          <p className="fact-label text-black">TRUST, BY DESIGN</p>

          <h2 className="fact-title" style={{ color: "#0A1A3A" }}>
            What you can expect
          </h2>

          <p className="fact-sub text-black">
            Book online with clear pricing. Your confirmation includes arrival
            instructions and a contact number for the day. Two clear options:
            drop at the terminal or park and take the shuttle.
          </p>
        </div>

        {/* RIGHT CARDS */}
        <div className="fact-right">

          {/* CARD */}
          <div className="fact-card">
            <div className="fact-icon">
              <FaShieldAlt />
            </div>
            <h4>Secure booking</h4>
            <p>Clear pricing, confirmation and day-of contact.</p>
            <span>BOOKING</span>
          </div>

          <div className="fact-card">
            <div className="fact-icon">
              <FaCheckCircle />
            </div>
            <h4>Instant confirmation</h4>
            <p>Email with reference and next steps.</p>
            <span>CONFIRM</span>
          </div>

          <div className="fact-card">
            <div className="fact-icon">
              <FaCar />
            </div>
            <h4>Meet & Greet and Park & Ride</h4>
            <p>Two options; we explain both clearly.</p>
            <span>OPTIONS</span>
          </div>

          <div className="fact-card">
            <div className="fact-icon">
              <FaHeadset />
            </div>
            <h4>Support when you need it</h4>
            <p>Amendments, cancellations, questions.</p>
            <span>SUPPORT</span>
          </div>

        </div>
      </div>

      {/* CSS */}
      <style>{`

/* =========================
   SECTION
========================= */
.fact-section {
  padding: 80px 20px;
  background: #f8fafc;
}

/* =========================
   CONTAINER
========================= */
.fact-container {
  max-width: 1200px;
  margin: auto;
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  gap: 60px;
  align-items: center;
}

/* =========================
   LEFT CONTENT
========================= */

/* small label */
.fact-label {
  font-size: 17px;          /* 🔧 edit */
  letter-spacing: 3px;       /* 🔧 edit */
  color: #64748b;
  margin-bottom: 15px;      /* 🔧 spacing */
}

/* main heading */
.fact-title {
  font-size: 52px;          /* 🔧 edit */
  font-weight: 700;
  line-height: 1.2;         /* 🔧 edit */
  margin-bottom: 20px;
  color: #0A1A3A;
}

/* description text */
.fact-sub {
  font-size: 18px;          /* 🔧 edit */
  line-height: 1.7;
  color: #333;
  max-width: 500px;
}

/* =========================
   RIGHT GRID
========================= */
.fact-right {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 25px;                /* 🔧 spacing between cards */
}

/* =========================
   CARD BOX
========================= */
.fact-card {
  background: #ffffff;
  border-radius: 18px;      /* 🔧 corner */
  padding: 28px;            /* 🔧 inner spacing */

  border: 1px solid rgba(1,40,133,0.15);   /* 🔧 border */
  
  box-shadow:
    0 10px 25px rgba(0,0,0,0.05),          /* 🔧 main shadow */
    0 4px 10px rgba(1,40,133,0.08);

  transition: all 0.35s ease;
}

/* HOVER */
.fact-card:hover {
  transform: translateY(-8px) scale(1.02);  /* 🔧 movement */
  border-color: #0A1A3A;

  box-shadow:
    0 20px 50px rgba(0,0,0,0.08),
    0 10px 25px rgba(1,40,133,0.25);
}

/* =========================
   ICON BOX
========================= */
.fact-icon {
  width: 50px;              /* 🔧 size */
  height: 50px;
  border-radius: 14px;
  background: rgba(1,40,133,0.1);  /* 🔧 bg */
  
  display: flex;
  align-items: center;
  justify-content: center;

  margin-bottom: 15px;      /* 🔧 spacing */
}

/* icon itself */
.fact-icon svg {
  font-size: 20px;          /* 🔧 icon size */
  color: #0A1A3A;
}

/* =========================
   CARD TITLE
========================= */
.fact-card h4 {
  font-size: 20px;          /* 🔧 edit */
  font-weight: 600;
  color: #0A1A3A;
  margin-bottom: 10px;
  line-height: 1.4;
}

/* =========================
   CARD DESCRIPTION
========================= */
.fact-card p {
  font-size: 14px;          /* 🔧 edit */
  color: #333;
  line-height: 1.6;
  margin-bottom: 12px;
}

/* =========================
   CARD SMALL TEXT (BOTTOM)
========================= */
.fact-card span {
  font-size: 16px;          /* 🔧 edit */
  font-weight: 500;
  letter-spacing: 1px;      /* 🔧 edit */
  color: #0A1A3A;
}

/* =========================
   RESPONSIVE
========================= */

/* tablet */
@media (max-width: 992px) {
  .fact-container {
    grid-template-columns: 1fr;
    text-align: center;
  }

  .fact-title {
    font-size: 36px;
  }

  .fact-sub {
    font-size: 17px;
  }

  .fact-right {
    grid-template-columns: 1fr;
  }
}

/* mobile */
@media (max-width: 768px) {
  .fact-title {
    font-size: 28px;
  }

  .fact-sub {
    font-size: 16px;
  }

  .fact-card {
    padding: 22px;
  }

  .fact-card h4 {
    font-size: 16px;
  }

  .fact-card p {
    font-size: 16px;
  }
}

      `}</style>
    </section>
  );
}