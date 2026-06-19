import {
  FaTelegramPlane,
  FaCalendarCheck,
  FaUserCheck,
  FaSmileBeam,
} from "react-icons/fa";

export default function Features() {
  return (
    <section className="container-fluid feature-section py-5">
      <div className="container py-5">

        {/* HEADER */}
        <div className="text-center mb-5">
          <h2 className="fw-bold feature-title">
            Easy Glasgow Airport Parking Booking
          </h2>
        </div>

        {/* CONTENT */}
        <div className="row justify-content-center g-4">

          <div className="col-md-6 col-lg-6">
            <div className="feature-step">
              <div className="icon-circle">
                <FaTelegramPlane />
              </div>
              <div className="ms-3">
                <h5 className="fw-bold">Book Online in Seconds</h5>
                <p>
                  Choose your Glasgow parking service, book securely online,
                  and receive instant confirmation with complete booking details.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-lg-6">
            <div className="feature-step">
              <div className="icon-circle">
                <FaCalendarCheck />
              </div>
              <div className="ms-3">
                <h5 className="fw-bold">Select Your Travel Dates</h5>
                <p>
                  Enter your drop-off and return dates to find the best Glasgow
                  airport parking option tailored to your travel plans.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-lg-6">
            <div className="feature-step">
              <div className="icon-circle">
                <FaUserCheck />
              </div>
              <div className="ms-3">
                <h5 className="fw-bold">We Manage Your Parking</h5>
                <p>
                  Our experienced team manages everything, ensuring your vehicle
                  is handled professionally and remains safe while you travel.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-lg-6">
            <div className="feature-step">
              <div className="icon-circle">
                <FaSmileBeam />
              </div>
              <div className="ms-3">
                <h5 className="fw-bold">Travel with Confidence</h5>
                <p>
                  Enjoy smooth transfers to Glasgow terminals and complete
                  peace of mind knowing your car is securely parked and managed.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* ======================
           CSS (UI ONLY)
      ======================= */}
      <style>{`
        .feature-section {
          background: linear-gradient(180deg, #f8fafc, #eef2ff);
        }

        .feature-title {
          color: #0A1A3A;
          font-size: 34px;
        }

        .feature-step {
          display: flex;
          align-items: flex-start;
          gap: 16px;
          background: #ffffff;
          padding: 26px;
          border-radius: 18px;
          height: 100%;
          box-shadow: 0 15px 35px rgba(15,23,42,0.1);
          transition: transform 0.25s ease, box-shadow 0.25s ease;
        }

        .feature-step:hover {
          transform: translateY(-4px);
          box-shadow: 0 22px 45px rgba(15,23,42,0.14);
        }

        .icon-circle {
          min-width: 64px;
          min-height: 64px;
          border-radius: 50%;
          background: #0A1A3A;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #ffffff;
          font-size: 26px;
          box-shadow: 0 10px 24px rgba(2,48,153,0.35);
        }

        .feature-step h5 {
          color: #0f172a;
          margin-bottom: 8px;
          font-size: 18px;
        }

        .feature-step p {
          color: #475569;
          margin-bottom: 0;
          font-size: 15px;
          line-height: 1.7;
          text-align: justify;
          word-spacing: normal;
          letter-spacing: normal;
          hyphens: auto;
        }

        /* TABLET */
        @media (max-width: 992px) {
          .feature-title {
            font-size: 32px;
          }

          .feature-step h5 {
            font-size: 19px;
          }

          .feature-step p {
            font-size: 16px;
            text-align: left;
          }
        }

        /* MOBILE */
        @media (max-width: 576px) {
          .icon-circle {
            min-width: 52px;
            min-height: 52px;
            font-size: 22px;
          }

          .feature-title {
            font-size: 26px;
          }

          .feature-step {
            padding: 22px;
          }

          .feature-step h5 {
            font-size: 18px;
          }

          .feature-step p {
            font-size: 16px;
            line-height: 1.75;
            text-align: left;
          }
        }
      `}</style>
    </section>
  );
}
