import React from "react";
import parkVideo from "../assets/new-first-service.mp4";
import parkimg2 from "../assets/second-service.mp4";
import { Link } from "react-router-dom";

export default function Services() {
  return (
    <section className="services-dark-section">

      <div className="container">

        {/* SMALL LABEL */}
        <p className="section-subtitle text-black text-center">WHAT YOU CAN EXPECT</p>

        {/* TITLE */}
        <h2 className="section-title text-center" style={{ color: "#0A1A3A" }}>
          Airport parking options
        </h2>

        {/* DESC */}
        <p className=" text-black text-center">
          Scot Park offers Meet & Greet and Park & Ride at Scottish airports. Compare prices, book securely and receive clear arrival and return instructions.
        </p>

        {/* MAIN CARD */}
        <div className="service-main-card">

          {/* LEFT BIG CARD */}
          <div className="service-left">

            <video
              className="service-img"
              autoPlay
              muted
              loop
              playsInline
            >
              <source src={parkVideo} type="video/mp4" />
              Your browser does not support the video tag.
            </video>

            <div className="service-content">
              <h4 style={{ color: "#0A1A3A" }}>Meet & Greet</h4>

              <p className="text-black">
                Drive to the terminal. We meet you, take your keys and park your
                car in our secure compound. On return, your car is brought back to you.
              </p>

              <Link to="/meetgreet" className="learn-link">
                Learn more →
              </Link>
            </div>

          </div>

          {/* RIGHT SMALL CARD */}
          <div className="service-right">

            <video
              className="service-img"
              autoPlay
              muted
              loop
              playsInline
            >
              <source src={parkimg2} type="video/mp4" />
              Your browser does not support the video tag.
            </video>

            <div className="service-content">
              <h4 style={{ color: "#0A1A3A" }}>Park & Ride</h4>

              <p className="text-black">
                Park at our secure car park and take a shuttle to the terminal.
                Reliable transfers and clear instructions.
              </p>

              <Link to="/parkride" className="learn-link">
                Learn more →
              </Link>
            </div>

          </div>

        </div>
      </div>

      {/* ================= CSS ================= */}
      <style>{`


        .services-dark-section {
          padding: 100px 0;
        }

        .section-subtitle {
          letter-spacing: 2px;
          font-size: 17px;
          margin-bottom: 12px;
          color: #64748b;
        }

        .section-title {
          font-size: 48px;
          font-weight: 700;
          margin-bottom: 16px;
        }

        .section-desc {
          max-width: 600px;
          margin-bottom: 40px;
          color: #475569;
        }

        /* MAIN CARD (🔥 PREMIUM LOOK) */
        .service-main-card {
          display: grid;
          grid-template-columns: 2fr 2fr;
          gap: 20px;

          padding: 20px;
          border-radius: 24px;

          background: #ffffff;

        }

        /* INNER CARDS */
        .service-left,
        .service-right {
          border-radius: 18px;
          overflow: hidden;
          background: #ffffff;

          /* 🔥 SOFT CARD SHADOW */
          box-shadow:
            0 8px 25px rgba(2, 48, 153, 0.08),
            0 2px 8px rgba(2, 48, 153, 0.06);

          transition: all 0.3s ease;
        }


        .service-img {
          width: 100%;
          height: 260px;
          object-fit: cover;
        }

        .service-img.small {
          height: 260px;
        }

        .service-content {
          padding: 20px;
        }

        .service-content h4 {
          font-size: 20px;
          margin-bottom: 10px;
          font-weight: 600;
        }

        .service-content p {
          font-size: 14px;
          margin-bottom: 12px;
          line-height: 1.6;
          color: #475569;
        }

        .learn-link {
          color: #0A1A3A;
          text-decoration: none;
          font-weight: 600;
        }

        .learn-link:hover {
          color: #000;
        }

        /* TABLET */
        @media (max-width: 992px) {
          .service-main-card {
            grid-template-columns: 1fr;
          }

          .section-title {
            font-size: 36px;
          }
        }

        /* MOBILE */
        @media (max-width: 768px) {
          .services-dark-section {
            padding: 60px 20px;
          }

          .section-title {
            font-size: 28px;
          }

          .service-img {
            height: 200px;
          }
        }

      `}</style>

    </section>
  );
}