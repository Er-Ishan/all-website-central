import {
  FaShieldAlt,
  FaShuttleVan,
  FaPoundSign,
  FaParking,
  FaCheckCircle,
} from "react-icons/fa";
import { useState } from "react";

export default function Features() {

  const [openFAQ, setOpenFAQ] = useState(0);
      
        const toggleFAQ = (index) => {
          setOpenFAQ(openFAQ === index ? null : index);
        };

  const [activeIndex, setActiveIndex] = useState(0);

const faqs = [
  {
    question: "Is Heathrow airport park and ride safe?",
    answer:
      "Yes, the heathroweliteparking park and ride service is based on a managed parking facility with entry control and CCTV coverage.",
  },
  {
    question: "What is the time that the shuttle takes to Heathrow airports?",
    answer:
      "Transfers usually take only a few minutes depending on the terminal and traffic.",
  },
  {
    question: "Can I cancel my booking?",
    answer:
      "Yes, depending on the reservation conditions, booking changes or cancellations may be possible.",
  },
  {
    question: "What is Heathroweliteparking?",
    answer:
      "Heathroweliteparking allows passengers to book parking in advance and know exactly where to go and what to expect.",
  },
];
  return (
    <section className="container-fluid feature-section py-5">
      <div className="container">

        {/* HEADER */}
        <div className="text-center mb-5">
          <h2 className="fw-bold feature-title">
            Why Heathroweliteparking?
          </h2>
        </div>

        {/* INTRO CONTENT */}
        <div className="row justify-content-center mb-5">
          <div className="col-lg-10 col-xl-8">
            <p className="feature-intro-text">
              Parking around Heathrow Airport is available in a number of places. There are big ones, there are less expensive ones, and there are those that are conveniently presented online, but once you get there, you feel otherwise. There are three things the travelers normally desire. A secure location of their car. A fair price. And a transfer that really comes on time.
            </p>

            <p className="feature-intro-text">
              At our premises, customers are offered secure <strong>parking at Heathrow airport</strong> in a secure compound where they can deposit their cars without any fear when they are away. Its parking space is meant to serve the purpose of travelers who require reliable Heathrow airport park and ride services, as opposed to a complex airport garage or overcrowded roadside car park.
            </p>

            <p className="feature-intro-text mb-0">
              And gradually, heathroweliteparking has been a reliable place that travelers are willing to use as a reliable <strong>Heathrow park and ride parking</strong> near the airport
            </p>
          </div>
        </div>

        {/* FEATURE LIST */}
        <div className="row justify-content-center mb-5">
          <div className="col-lg-8">
            <ul className="feature-list">
              <li>
                <FaCheckCircle className="feature-tick" />
                Fenced guarded day and night parking compound.
              </li>

              <li>
                <FaCheckCircle className="feature-tick" />
                Consistently shuttle taxis that will transport passengers between the parking lot and the Heathrow terminals.
              </li>

              <li>
                <FaCheckCircle className="feature-tick" />
                There are no unexpected prices in the clear and competitive <strong>Heathrow airport parking</strong> prices.
              </li>

              <li>
                <FaCheckCircle className="feature-tick" />
                Long term Heathrow parking on a long term basis.
              </li>
            </ul>
          </div>
        </div>

        {/* FEATURES CARDS */}
        <div className="row g-4">

          <div className="col-md-6">
            <div className="feature-step">
              <div className="icon-circle">
                <FaShieldAlt />
              </div>
              <div>
                <h3 className="fw-bold feature-card-title">
                  All Heathrow Termus Ride Park transfers to all Heathrow Terminals.
                </h3>
                <p>
                  Heathrow is a large airport. Those who have already passed through it know that the terminals are not located in one place, and it is important to arrive at the right one. We have a system of transfer that will allow passengers to get to all the Heathrow terminals out of our parking area. Once we have parked in our <strong>off-site Heathrow parking</strong> facility, our passengers are then boarded on the shuttle that then drives straight to the required terminal.
                </p>
                <p>
                  The Heathrow parking transfers would enable passengers heading to the largest terminal of Heathrow to access their departure gate without the hassle of making long walks or following confusing routes.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-6">
            <div className="feature-step">
              <div className="icon-circle">
                <FaShuttleVan />
              </div>
              <div>
                <h3 className="fw-bold feature-card-title">
                  The Way Our Heathrow Airport Park and Ride operates
                </h3>
                <p>
                  The very idea of using a Heathrow airport park and ride service does not sound so simple the first time one is being informed. But the truth is, it is not that difficult. The first thing that the travelers do is to drive to the heathrowelite parking facility which is situated just outside the Heathrow Airport. The place is accessible by the nearby motorways and airport routes.
                </p>
                <p>
                  The whole <strong>park and ride at Heathrow airport</strong> is aimed at eliminating stress on airport parking.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-6">
            <div className="feature-step">
              <div className="icon-circle">
                <FaPoundSign />
              </div>
              <div>
                <h3 className="fw-bold feature-card-title">
                  Low-cost Heathrow Airport Parking Costs
                </h3>
                <p>
                  Travel costs add up quickly. Flights, luggage, hotels, food at the airport, and so on. Another unpleasant surprise should not be parking. That is why a number of travelers seek <strong>cheap airport parking at Heathrow airport</strong> prior to their traveling date. However, it might be difficult to strike the proper balance between price and reliability. In the case of <strong>heathroweliteparking</strong>, emphasis is always placed on providing affordable prices of Heathrow parking with a professional service.
                </p>
                <p>
                  <strong>Heathrow elite parking</strong> has a straightforward pricing scheme, good transfers and secure parking space, which makes it an ideal solution to a number of Heathrow travelers.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-6">
            <div className="feature-step">
              <div className="icon-circle">
                <FaParking />
              </div>
              <div>
                <h3 className="fw-bold feature-card-title">
                  Best Heathrow Parking You can Be Sure of.
                </h3>
                <p>
                  When you leave your car behind there is always a little question in your mind. Is your car really safe when you are gone?
                </p>
                <p>
                  In heathroweliteparking, the parking facility will offer <strong>secure parking at the airport of heathrow</strong> by using controlled access points and monitored environment. The security measures will entail full CCTV coverage within the parking compound and therefore gated entry points that will restrict access, fully insured parking operations and a professional team in the UK to handle the facility.
                </p>
              </div>
            </div>
          </div>

        </div>

        
        
      </div>

      <section className="terminal2-faq section-spacing">
                    <div className="container">

                        <h2 className="section-title text-center mb-5" style={{ color: "#005c25" }}>
                            Heathrow Airport Park and Ride Frequently Asked Questions.
                        </h2>

                        <div className="faq-accordion">

                            {/* FAQ 1 */}
                            <div className={`faq-box ${openFAQ === 0 ? "active" : ""}`}>
                                <div className="faq-question" onClick={() => toggleFAQ(0)}>
                                    Is Heathrow airport park and ride safe?
                                </div>

                                {openFAQ === 0 && (
                                    <div className="faq-answer">
                                        Yes, the heathroweliteparking park and ride service provided by the heathrow airport will be based on a managed parking facility that will have entry control and CCTV coverage.

                                    </div>
                                )}
                            </div>

                            {/* FAQ 2 */}
                            <div className={`faq-box ${openFAQ === 1 ? "active" : ""}`}>
                                <div className="faq-question" onClick={() => toggleFAQ(1)}>
                                    What is the time that the shuttle takes to Heathrow airports?
                                </div>

                                {openFAQ === 1 && (
                                    <div className="faq-answer">
                                        The transfers in most cases of Heathrow airport only take a few minutes based on the location of the terminal and traffic around the airport.
                                    </div>
                                )}
                            </div>

                            {/* FAQ 3 */}
                            <div className={`faq-box ${openFAQ === 2 ? "active" : ""}`}>
                                <div className="faq-question" onClick={() => toggleFAQ(2)}>
                                    Can I cancel my booking?
                                </div>

                                {openFAQ === 2 && (
                                    <div className="faq-answer">
                                        None Yes, depending on the reservation conditions offered by the heathroweliteparking, booking changes or cancellation might be possible.

                                    </div>
                                )}
                            </div>

                        </div>
                    </div>
                </section>

      {/* CSS */}
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

.feature-section {
  background: linear-gradient(180deg, #f8fafc, #eef2ff);
  padding-top: 60px;
  padding-bottom: 60px;
}

/* TITLE */
.feature-title {
  color: #005c25;
  font-size: 36px;
}

/* INTRO TEXT */
.feature-intro-text {
  color: #475569;
  font-size: 16px;
  line-height: 1.8;
  margin-bottom: 18px;
  text-align: left;
}

/* FEATURE LIST */
.feature-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.feature-list li {
  display: flex;
  align-items: flex-start;
  gap: 12px;
  font-size: 16px;
  color: #334155;
  margin-bottom: 12px;
}

.feature-tick {
  color: #005c25;
  font-size: 18px;
  margin-top: 4px;
}

/* CARDS */
.feature-step {
  display: flex;
  gap: 16px;
  background: #ffffff;
  padding: 24px;
  border-radius: 16px;
  height: 100%;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.08);
}

/* ICON */
.icon-circle {
  min-width: 56px;
  height: 56px;
  border-radius: 50%;
  background: #005c25;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: 22px;
}

/* CARD TEXT */
.feature-card-title {
  font-size: 20px;
  margin-bottom: 8px;
  color: #0f172a;
}

.feature-step p {
  font-size: 15px;
  color: #475569;
  line-height: 1.7;
  margin-bottom: 10px;
  text-align: left;
}

/* RESPONSIVE */
@media (max-width: 768px) {
  .feature-title {
    font-size: 28px;
  }

  .feature-step {
    flex-direction: column;
  }

  .icon-circle {
    margin-bottom: 10px;
  }
}

      `}</style>
    </section>
  );
}