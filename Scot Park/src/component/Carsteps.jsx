import { useNavigate } from "react-router-dom";

export default function CarSteps() {

  const navigate = useNavigate();
  return (
    <section className="container-fluid carsteps-section py-5">
      <div className="container py-5">

        {/* HEADER */}
        <div className="text-center mx-auto pb-5" style={{ maxWidth: 900 }}>
          <h2 className="fw-bold mb-3 carsteps-title">
            Glasgow <span className="highlight-text">Park & Ride</span> Made Simple
          </h2>
        </div>

        {/* STEPS */}
        <div className="row g-4 justify-content-center">

          <StepCard
            number="01"
            title="Book online"
            description="Select your airport, dates and service type. Pay securely and receive confirmation by email."
          />

          <StepCard
            number="02"
            title="Drop-off"
            description="Follow your confirmation: meet our driver at the terminal or park and take the shuttle."
          />

          <StepCard
            number="03"
            title="Fly"
            description="We store your vehicle securely. If your flight is delayed, contact us and we will adjust your return."
          />

          <StepCard
            number="04"
            title="Pickup"
            description="Your car is ready when you return. We complete a condition check and hand back your keys."
          />

          <StepCard
            number="05"
            title="Done"
            description="Drive away. Clear communication at every step."
          />

        </div>

        {/* =========================
   POLICIES & CONTACT
========================= */}

        <div className="mt-5 pt-5">

          {/* HEADER */}
          <div className="text-center mb-5">
            {/* <p className="" style={{color:"#0A1A3A"}}>
              What to do if your plans change or your flight is delayed.
            </p> */}
          </div>

          {/* TOP 2 CARDS */}
          <div className="row g-4">

          </div>

          {/* CONTACT CARD */}
          <div className="row mt-4">
            <div className="col-12">
              <div className="policy-card contact-card">
                <h5 className="">Flight delays</h5>
                <p className="">
                  If your flight is delayed, contact the number on your booking confirmation. We will adjust your return time so your vehicle is ready when you land. We may monitor flight status where possible; your call helps us plan and reduce anxiety.
                </p>

                <div
                  className="contact-link"
                  onClick={() => navigate("/how-work/details")}
                >
                  Full step-by-step guide and policies →
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* ======================
           CSS (UI ONLY)
      ======================= */}
      <style>{`

      .contact-link {
  margin-top: 15px;
  color: #ffa200;
  font-weight: 600;
  cursor: pointer;
  transition: 0.3s;
}

.contact-link:hover {
  opacity: 0.8;
}
        .carsteps-section {
          background: transparent;
        }

        .carsteps-title {
          font-size: 42px;
          color: #0A1A3A;
        }

        .highlight-text {
          color: #ffa200;
        }

        .step-card {
          background: #0A1A3A;
          border-radius: 22px;
          padding: 32px 24px 48px;
          position: relative;
          height: 100%;
          box-shadow: 0 20px 45px rgba(2,48,153,0.35);
          transition: all 0.35s ease;
        }

        /* ===============================
   POLICIES SECTION (MATCH THEME)
=============================== */

.policy-card {
  background: #0A1A3A; /* SAME AS YOUR STEP CARD */
  border-radius: 22px;
  padding: 28px;
  box-shadow: 0 20px 45px rgba(2,48,153,0.35);
  transition: 0.3s;
}

.policy-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 30px 65px rgba(2,48,153,0.45);
}

.policy-card h5 {
  color: #ffffff;
  font-weight: 700;
  margin-bottom: 12px;
  font-size: 18px;
}

.policy-card p {
  color: #e0f2fe;
  font-size: 15px;
  line-height: 1.7;
}

/* Contact special */
.contact-card {
  padding: 32px;
}

/* Contact link */
.contact-link {
  margin-top: 15px;
  color: #ffa200; /* YOUR ACCENT */
  font-weight: 600;
  cursor: pointer;
}


        .step-card h4 {
          color: #ffffff;
          font-weight: 700;
          font-size: 20px;
          margin-bottom: 8px;
        }

        .step-card p {
          color: #e0f2fe;
          font-size: 15px;
          line-height: 1.6;
          margin-bottom: 0;
          word-spacing: normal;
          letter-spacing: normal;
        }

        .step-number {
          width: 78px;
          height: 78px;
          border-radius: 50%;
          background: #ffffff;
          border: 3px solid #0A1A3A;
          position: absolute;
          bottom: -32px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 20px;
          font-weight: 800;
          color: #0A1A3A;
        }

        /* TABLET */
        @media (max-width: 991px) {
          .carsteps-title {
            font-size: 32px;
          }

          .step-card h4 {
            font-size: 19px;
          }

          .step-card p {
            font-size: 16px;
            line-height: 1.7;
          }
        }

        /* MOBILE */
        @media (max-width: 576px) {
          .carsteps-title {
            font-size: 26px;
          }

          .step-card {
            padding: 28px 22px 44px;
          }

          .step-card h4 {
            font-size: 18px;
          }

          .step-card p {
            font-size: 16px;
            line-height: 1.75;
          }

          .step-number {
            width: 64px;
            height: 64px;
            font-size: 18px;
          }

          .step-card {
  background: #0A1A3A;
  border-radius: 22px;
  padding: 32px 24px 48px;
  position: relative;
  height: 100%;
  box-shadow: 0 20px 45px rgba(2,48,153,0.35);
  transition: all 0.35s ease;

  /* ✅ CENTER CONTENT */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.step-card h4 {
  color: #ffffff;
  font-weight: 700;
  font-size: 20px;
  margin-bottom: 10px;
}

.step-card p {
  color: #e0f2fe;
  font-size: 15px;
  line-height: 1.6;
  margin-bottom: 20px;
  max-width: 90%;
}
        }
      `}</style>
    </section>
  );
}

/* STEP CARD COMPONENT */
function StepCard({ number, title, description }) {
  return (
    <div className="col-12 col-md-6 col-lg-3 d-flex">
      <div className="step-card text-center w-100 d-flex flex-column justify-content-center align-items-center">

        <h4>{title}</h4>
        <p>{description}</p>

        <div className="step-number">{number}</div>
      </div>
    </div>
  );
}
