import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import Topbar from "../component/Topbar";
import NavbarElement from "../component/NavbarElement";
import Footer from "../component/Footer";
import Copyright from "../component/Copyright";

const BASE_URL = "https://www.heathroweliteparking.co.uk";

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
      <Helmet>
        <title>FAQ | Heathrow Elite Parking - Frequently Asked Questions</title>
        <meta name="description" content="Frequently asked questions about Heathrow Elite Parking. Find answers about car parking, shuttle services and park and ride at Heathrow Airport." />
        <meta name="keywords" content="Heathrow parking FAQ, airport parking questions, Heathrow Elite Parking help" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={`${BASE_URL}/faq`} />
        <meta property="og:title" content="FAQ | Heathrow Elite Parking" />
        <meta property="og:description" content="Frequently asked questions about Heathrow Elite Parking and airport park and ride." />
        <meta property="og:type" content="website" />
      </Helmet>
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

          {/* FAQ BOX */}
          <div className="mx-auto" style={{ maxWidth: "900px" }}>
            <div className="accordion" id="faqAccordion">

              {[
                "How does Heathrow Park & Ride work?",
                "Is the car park safe?",
                "How far are you from Heathrow Airport?",
                "Do you offer free cancellations?",
                "Are your car parks secure?"
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
                        "Please park your car at our secure facility and take our fast shuttle transfer to the terminal.",
                        "Yes, our car park is fully secure and monitored at all times.",
                        "We are located approximately 5–10 minutes from Heathrow terminals.",
                        "Yes, self-park bookings include free cancellation.",
                        "Our facility includes CCTV, security staff, and gated access."
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
            background: #005c25;
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

export default Faq;
