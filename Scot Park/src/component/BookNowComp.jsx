import React from "react";
import { useNavigate } from "react-router-dom";
import {
  SlShield,
  SlClock,
  SlCheck
} from "react-icons/sl";
import heroVideo from "../assets/second-hero-section.mp4";

const BookNowComp = () => {

  const navigate = useNavigate();

  return (
    <section className="booknow-section">

      {/* BACKGROUND */}
      <div className="booknow-bg">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="booknow-video"
        >
          <source src={heroVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* OVERLAY */}
      <div className="booknow-overlay"></div>

      {/* CONTENT */}
      <div className="booknow-content text-center">

        <h1>Book with confidence</h1>

        <p>
          Meet & Greet and Park & Ride at Scottish airports.
          Clear instructions, secure handling and straightforward
          communication so you can focus on your trip.
        </p>

        <div className="booknow-features">
          <div className="feature">
            <div className="feature-icon">
              <SlShield />
            </div>
            <span className="feature-text">Secure booking</span>
          </div>

          <div className="feature">
            <div className="feature-icon">
              <SlClock />
            </div>
            <span className="feature-text">Support when you need it</span>
          </div>

          <div className="feature">
            <div className="feature-icon">
              <SlCheck />
            </div>
            <span className="feature-text">Instant confirmation</span>
          </div>
        </div>

        {/* BUTTONS */}
        <div className="booknow-buttons">

          <button
            className="btn-primary"
            style={{ background: "#0A1A3A" }}
            onClick={() => {
              navigate("/");

              setTimeout(() => {
                const el = document.getElementById("hero");
                if (el) {
                  el.scrollIntoView({ behavior: "smooth" });
                }
              }, 100); // wait for page load
            }}
          >
            Book airport parking
          </button>

          <button
            className="btn-outline"
            onClick={() => navigate("/contact")}
          >
            Contact us
          </button>

        </div>

      </div>

      {/* CSS */}
      <style>{`

      /* ===============================
         SECTION FIX (MAIN FIX HERE)
      =============================== */

      .booknow-features {
  display: flex;
  justify-content: center;
  align-items: stretch;
  gap: 18px;
  margin-bottom: 30px;
  flex-wrap: wrap;
}

.feature {
  min-width: 220px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  padding: 14px 18px;
  border-radius: 14px;
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.14);
  text-align: left;
}

.feature-icon {
  width: 42px;
  height: 42px;
  min-width: 42px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.12);
  display: flex;
  align-items: center;
  justify-content: center;
}

.feature-icon svg {
  color: #ffa200;
  font-size: 18px;
}

.feature-text {
  color: #e2e8f0;
  font-size: 15px;
  font-weight: 600;
  line-height: 1.4;
}

@media (max-width: 768px) {
  .booknow-features {
    flex-direction: column;
    align-items: center;
    gap: 14px;
  }

  .feature {
    width: 100%;
    max-width: 360px;
    justify-content: flex-start;
  }
}

.booknow-section {
  min-height: 650px; /* 👈 increase height */
  height: auto;
}

      .booknow-section {
        position: relative;
        height: 500px;
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;

        margin: 0 !important;
        padding: 0 !important;
      }

      /* REMOVE GAP FROM BOOTSTRAP */
      .booknow-section .container {
        padding-top: 0 !important;
        padding-bottom: 0 !important;
      }

      /* REMOVE ANY GLOBAL GAP */
      .booknow-section::before,
      .booknow-section::after {
        margin: 0;
        padding: 0;
      }

      /* BACKGROUND */
      .booknow-bg {
        position: absolute;
        inset: 0;
        background-size: cover;
        background-position: center;
        z-index: 1;
      }

        .booknow-video {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
}

      /* OVERLAY */
      .booknow-overlay {
        position: absolute;
        inset: 0;
        background: rgba(0,0,0,0.5);
        z-index: 2;
      }

      /* CONTENT */
      .booknow-content {
        position: relative;
        z-index: 3;
        color: white;
        max-width: 800px;
      }

      .booknow-content h1 {
        font-size: 48px;
        font-weight: 700;
        margin-bottom: 15px;
      }

      .booknow-content p {
        font-size: 18px;
        color: #e2e8f0;
        margin-bottom: 30px;
        line-height: 1.6;
      }

      /* FEATURES */
      .booknow-features {
        display: flex;
        justify-content: center;
        gap: 40px;
        margin-bottom: 30px;
        flex-wrap: wrap;
      }

      .feature {
        display: flex;
        align-items: center;
        gap: 10px;
        font-size: 15px;
        color: #e2e8f0;
      }

      .feature svg {
        color: #ffa200;
        font-size: 20px;
      }

      /* BUTTONS */
      .booknow-buttons {
        display: flex;
        justify-content: center;
        gap: 20px;
        flex-wrap: wrap;
      }

      .btn-primary {
        background: #22c55e;
        border: none;
        padding: 14px 30px;
        border-radius: 10px;
        color: #fff;
        font-weight: 600;
        transition: 0.3s;
      }


      .btn-outline {
        background: transparent;
        border: 2px solid #fff;
        padding: 14px 30px;
        border-radius: 10px;
        color: #fff;
        font-weight: 600;
      }

      .btn-outline:hover {
        background: rgba(255,255,255,0.1);
      }

      /* ======================
         RESPONSIVE
      ======================= */

      @media (max-width: 992px) {
        .booknow-section {
          height: auto;
          padding: 80px 20px !important;
        }

        .booknow-content h1 {
          font-size: 36px;
        }

        .booknow-content p {
          font-size: 16px;
        }
      }

      @media (max-width: 576px) {
        .booknow-content h1 {
          font-size: 28px;
        }

        .booknow-features {
          gap: 20px;
        }

        .feature {
          font-size: 14px;
        }

        .btn-primary,
        .btn-outline {
          width: 100%;
        }
      }

      `}</style>

    </section>
  );
};

export default BookNowComp;