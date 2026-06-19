import React, { useEffect, useState } from "react";
import Topbar from "../component/Topbar";
import NavbarElement from "../component/NavbarElement";
import Footer from "../component/Footer";
import Copyright from "../component/Copyright";
import { SlLocationPin, SlMap, SlBriefcase, SlShield, SlCheck } from "react-icons/sl";


const Faq = () => {

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreen = () => setIsMobile(window.innerWidth <= 768);
    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);


  return (


    <>
      {/* {!isMobile && <Topbar />} */}
      <NavbarElement />

      <section className="container-fluid faq-section py-5">
        <div className="container py-5">

          {/* SECTION TITLE */}
          <div className="text-center mb-5">
            <h2 className="fw-bold faq-title">
              Frequently Asked Questions
            </h2>
            <p className="faq-subtitle">
              Find quick answers about our car parking & shuttle services.
            </p>
          </div>

          {/* =========================
   INFO CARDS (NEW)
========================= */}

          <div className="row g-4 mb-5">

            <InfoCard
              icon={<SlLocationPin />}
              title="Location"
              text="Glasgow Airport"
            />

            <InfoCard
              icon={<SlMap />}
              title="Distance"
              text="Located just 0.3 miles from Glasgow Airport"
            />

            <InfoCard
              icon={<SlBriefcase />}
              title="Services"
              text="Meet & Greet, Park & Ride"
            />

            <InfoCard
              icon={<SlShield />}
              title="Booking"
              text="Secure online booking with instant confirmation"
            />

            <InfoCard
              icon={<SlCheck />}
              title="Best For"
              text="Travellers flying from Glasgow Airport"
            />

          </div>

          {/* FAQ BOX */}
          <div className="mx-auto" style={{ maxWidth: "900px" }}>
            <div className="accordion" id="faqAccordion">

              {[
                "How close is ScotPark to Glasgow Airport?",
                "What is meet and greet parking?",
                "How does ScotPark parking work?",
                "Can I book Glasgow Airport parking in advance?",
                "Why choose parking near Glasgow Airport?",
                "Is ScotPark suitable for early morning flights?",
                "How do I find the right Glasgow Airport parking option?"
              ].map((question, idx) => (
                <div key={idx} className="accordion-item faq-item">

                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed faq-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target={`#faq${idx}`}
                    >
                      <span className="faq-icon">?</span>
                      {question}
                    </button>
                  </h2>

                  <div
                    id={`faq${idx}`}
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqAccordion"
                  >
                    <div className="accordion-body faq-body">
                      {[
                        "PlScotPark is located just 0.3 miles from Glasgow Airport, making it a convenient option for travellers looking for parking near the terminal.",
                        "Meet and greet parking means you drive to the terminal and hand over your keys to our driver. They park your vehicle in a secure compound and return it to you at the terminal when you land.",
                        "Book online, receive confirmation with arrival instructions. On the day, arrive at the agreed point. Our driver meets you, completes a condition check, and takes your vehicle. On return, your car is brought back to you at the terminal.",
                        "Yes. You can book Glasgow Airport parking in advance online. You will receive confirmation with your booking reference and arrival instructions.",
                        "Parking near Glasgow Airport saves time and stress. ScotPark is located just 0.3 miles from the airport, so you spend less time travelling and more time relaxed before your flight.",
                        "Yes. ScotPark offers services suitable for early morning flights. Book in advance and follow the arrival instructions in your confirmation.",
                        "Choose Meet & Greet if you want to drive to the terminal and hand over your keys. Choose Park & Ride if you prefer to park and take the shuttle. Both options are secure and convenient."
                      ][idx]}
                    </div>
                  </div>

                </div>
              ))}
            </div>
          </div>

        </div>

        {/* ======================
             CSS (UI ONLY)
        ======================= */}
        <style>{`

        /* ===============================
   INFO CARDS (MATCH THEME)
=============================== */

.info-card {
  background: #ffffff;
  border-radius: 18px;
  padding: 18px 20px;
  box-shadow: 0 15px 35px rgba(15,23,42,0.08);
  transition: 0.3s;
  gap: 14px;
}


/* Icon */
.info-icon {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.info-icon svg {
  font-size: 20px;
  color: #0A1A3A;
}

/* Text */
.info-title {
  font-size: 13px;
  font-weight: 600;
  color: #0A1A3A;
  text-transform: uppercase;
  margin-bottom: 2px;
}

.info-text {
  font-size: 15px;
  font-weight: 600;
  color: #0f172a;
}
          .faq-section {
            background: linear-gradient(180deg, #f8fafc, #eef2ff);
          }

          .faq-title {
            font-size: 40px;
            color: #0f172a;
          }

          .faq-subtitle {
            color: #475569;
            font-size: 16px;
            line-height: 1.6;
          }

          .faq-item {
            border: none;
            border-radius: 20px;
            margin-bottom: 16px;
            background: #ffffff;
            box-shadow: 0 15px 35px rgba(15,23,42,0.08);
            overflow: hidden;
          }

          .faq-button {
            font-size: 18px;
            font-weight: 600;
            padding: 18px 22px;
            background: transparent;
            color: #0f172a;
            box-shadow: none;
          }

          .faq-button:not(.collapsed) {
            background: linear-gradient(135deg, #2563eb, #38bdf8);
            color: #ffffff;
          }

          .faq-button:focus {
            box-shadow: none;
          }

          .faq-icon {
            width: 28px;
            height: 28px;
            border-radius: 50%;
            background: #2563eb;
            color: #ffffff;
            display: flex;
            align-items: center;
            justify-content: center;
            margin-right: 12px;
            font-weight: 700;
            flex-shrink: 0;
          }

          .faq-button:not(.collapsed) .faq-icon {
            background: #facc15;
            color: #1e293b;
          }

          .faq-body {
            font-size: 15px;
            color: #475569;
            padding: 20px 24px 24px 62px;
            line-height: 1.7;
          }

          /* TABLET */
          @media (max-width: 992px) {
            .faq-title {
              font-size: 32px;
            }

            .faq-button {
              font-size: 17px;
            }

            .faq-body {
              font-size: 16px;
            }
          }

          /* MOBILE */
          @media (max-width: 768px) {
            .faq-title {
              font-size: 26px;
            }

            .faq-subtitle {
              font-size: 15px;
            }

            .faq-button {
              font-size: 16px;
              padding: 16px 18px;
            }

            .faq-body {
              font-size: 16px;
              padding-left: 24px;
            }

            
          }
        `}</style>
      </section>

      <Footer />
      <Copyright />
    </>
  );
};

function InfoCard({ icon, title, text }) {
  return (
    <div className="col-12 col-md-6 col-lg-4 col-xl d-flex">
      <div className="info-card w-100 d-flex align-items-center">

        <div className="info-icon">
          {icon}
        </div>

        <div>
          <div className="info-title">{title}</div>
          <div className="info-text">{text}</div>
        </div>

      </div>
    </div>
  );
}

export default Faq;
