import React, { useState } from "react";
import { FaPoundSign, FaShieldAlt, FaShuttleVan } from "react-icons/fa";


export default function HomePage() {

    const [openFAQ, setOpenFAQ] = useState(0);
    
      const toggleFAQ = (index) => {
        setOpenFAQ(openFAQ === index ? null : index);
      };
    return (
        <section className="container-fluid homepage-section py-5">
            <div className="container py-5">

                {/* HEADER */}
                {/* <div className="text-center mb-4">
                    <h1 className="fw-bold homepage-title mb-3">
                        Heathrow Airport Parking Secure – Heathroweliteparking
                    </h1>

                </div> */}

                {/* MAIN CONTENT */}
                <div className="row justify-content-center mb-5">
                    <div className="col-lg-10 col-xl-9">

                        <p className="homepage-text">
                            Airport parking is frustrating in a short time. You pass through big parking lots in an attempt to locate where you are supposed to go. Everywhere the prices appear different. And some days the way to the terminal seems to be longer than usual, particularly when you have a bag and a time slot in your head to catch a flight.

                        </p>

                        <p className="homepage-text">
                            <a
                                href="https://www.heathroweliteparking.co.uk/heathrow-airport-parking"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="homepage-link"
                            >
                                Heathrow airport park and ride
                            </a>{" "}
                            is the service that provides you with a safe parking place and a fast shuttle
                            that will deliver you directly to the terminal. You come, park, alight on the
                            transfer vehicle, and even in just a few minutes you are outside Heathrow
                            ready to be checked-in.
                        </p>

                        <p className="homepage-text">
                            Before a trip, parking actually should not be complex.
                        </p>

                        <p className="homepage-text mb-0">
                            Through heathroweliteparking, customers receive dependable Heathrow
                            park and ride parking functioning perfectly as airport parking
                            ought to operate.
                        </p>
                    </div>
                </div>

                {/* HIGHLIGHTS */}
                <div className="row justify-content-center g-4 mb-5">

                    <div className="col-md-6 col-lg-4">
                        <div className="homepage-card text-center">
                            <div className="homepage-icon">
                                <FaPoundSign style={{ color: '#005c25', fontSize: "28px" }} />
                            </div>
                            <h3 className="homepage-card-title">Price</h3>
                            <p>From £X per day</p>
                        </div>
                    </div>

                    <div className="col-md-6 col-lg-4">
                        <div className="homepage-card text-center">
                            <div className="homepage-icon">
                                <FaShieldAlt style={{ color: '#005c25', fontSize: "28px" }} />
                            </div>
                            <h3 className="homepage-card-title">Security</h3>
                            <p>Parking 24/7 monitored</p>
                        </div>
                    </div>

                    <div className="col-md-6 col-lg-4">
                        <div className="homepage-card text-center">
                            <div className="homepage-icon">
                                <FaShuttleVan style={{ color: '#005c25', fontSize: "28px" }} />
                            </div>
                            <h3 className="homepage-card-title">Transfer</h3>
                            <p>Free Heathrow transfers</p>
                        </div>
                    </div>

                </div>

                {/* CTA */}
                <div className="text-center">
                    {/* <button className="btn btn-warning homepage-btn me-3">
                        Check Availability
                    </button> */}

                    <button
                        className="btn homepage-btn-secondary"
                        onClick={() => {
                            document.getElementById("hero")?.scrollIntoView({
                                behavior: "smooth",
                            });
                        }}
                    >
                        Book Now
                    </button>
                </div>
            </div>

            {/* ================= CSS ================= */}
            <style>{`

            .terminal2-faq {
  padding: 80px 0;
  background: #f8faff;
}

/* FAQ Accordion */
.faq-accordion {
  max-width: 900px;
  margin: auto;
}

.faq-box {
  margin-bottom: 15px;
}

.faq-question {
  background: #e5e7eb;
  padding: 18px 22px;
  border-radius: 10px;
  font-weight: 600;
  color: #005c25;
  cursor: pointer;
  transition: all 0.3s ease;
}

.faq-box.active .faq-question {
  background: #005c25;
  color: white;
}

.faq-answer {
  padding: 18px 22px;
  line-height: 1.6;
  color: #475569;
}

.faq-item h5 {
  font-weight: 600;
  margin-bottom: 10px;
  color: #005c25;
}

.faq-item p {
  margin: 0;
  color: #475569;
  line-height: 1.6;
}


        .homepage-section {
          background: linear-gradient(180deg, #f8fafc, #eef2ff);
        }

        .homepage-title {
          color: #005c25;
          font-size: 36px;
          line-height: 1.3;
        }

        .homepage-subtitle {
          color: #475569;
          font-size: 18px;
          line-height: 1.7;
          max-width: 850px;
        }

        .homepage-text {
          color: #475569;
          font-size: 16px;
          line-height: 1.9;
          margin-bottom: 18px;
          text-align: justify;
          hyphens: auto;
        }

        .homepage-card {
          background: #ffffff;
          padding: 28px;
          border-radius: 18px;
          box-shadow: 0 15px 35px rgba(15, 23, 42, 0.1);
          transition: 0.25s ease;
        }


        .homepage-card-title {
          color: #0f172a;
          font-size: 20px;
          margin-bottom: 10px;
        }

        .homepage-card p {
          color: #475569;
          font-size: 15px;
          margin-bottom: 0;
        }

        .homepage-btn {
          padding: 12px 28px;
          font-weight: 600;
          border-radius: 8px;
          font-size: 15px;
        }

        .homepage-btn-secondary {
          background: #005c25;
          color: #fff;
          border: none;
          padding: 12px 28px;
          font-weight: 600;
          border-radius: 8px;
        }

        .homepage-btn-secondary:hover {
          background: #00441c;
          color:white;
        }

        /* TABLET */
        @media (max-width: 992px) {
          .homepage-title {
            font-size: 30px;
          }

          .homepage-subtitle {
            font-size: 17px;
          }

          .homepage-text {
            font-size: 18px;
            text-align: left;
          }
        }

        /* MOBILE */
        @media (max-width: 576px) {
          .homepage-title {
            font-size: 24px;
          }

          .homepage-subtitle {
            font-size: 16px;
          }

          .homepage-text {
            font-size: 16px;
            text-align: left;
          }

          .homepage-card {
            padding: 22px;
          }

        }

      `}</style>
        </section>
    );
}