import { Helmet } from "react-helmet";
import { useState } from "react";
import Footer from "./Footer";
import Copyright from "./Copyright";
import NavbarElement from "./NavbarElement";
import Topbar from "../component/Topbar";
import Hero from "../component/HeroTerminal4";

import banner from "/img/terminal4-images.jpeg";
import {
  FaMapMarkerAlt,
  FaBus,
  FaHandshake,
  FaCheck,
  FaCheckCircle, FaPlaneDeparture,
  FaPoundSign,
  FaUserCheck, FaInfoCircle, FaTrain,
  FaExclamationTriangle,
  FaArrowRight
} from "react-icons/fa";

export default function Terminal4() {

  const [openFAQ, setOpenFAQ] = useState(0);

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };


  return (
    <>
      <Helmet>
        <title>
          Heathrow Airport Parking Terminal 4 | Heathrow Elite Parking - UK
        </title>

        <meta
          name="description"
          content="Looking for Heathrow Airport Terminal 4 parking? heathroweliteparking offers secure airport parking with affordable rates."
        />

        <meta
          name="keywords"
          content="Heathrow airport parking terminal 4, terminal 4 parking Heathrow, Heathrow airport car park terminal 4, Heathrow elite parking, Heathrow long term parking terminal 4"
        />

        <meta name="robots" content="index, follow" />

        {/* Open Graph for social media */}
        <meta
          property="og:title"
          content="Heathrow Airport Parking Terminal 4 | Heathrow Elite Parking"
        />
        <meta
          property="og:description"
          content="Secure and affordable Heathrow Airport Terminal 4 parking with fast transfers and safe vehicle storage."
        />
        <meta property="og:type" content="website" />

        {/* Canonical URL */}
        <link
          rel="canonical"
          href="https://www.heathroweliteparking.co.uk/heathrow-airport-parking-terminal-4"
        />
      </Helmet>

      {/* <Topbar /> */}
      <NavbarElement />

      {/* ================= PAGE HEADER ================= */}
      <section className="terminal4-header text-center">
        <div className="container">
          {/* <img
            src="https://thumbs.dreamstime.com/b/london-heathrow-airport-logo-airport-stamp-vector-illustration-london-aerodrome-london-heathrow-airport-logo-airport-stamp-vector-149754255.jpg"
            alt="London Heathrow Airport Logo"
            className="terminal4-logo"
          /> */}
        </div>
      </section>



      {/* ================= MAIN CONTENT ================= */}
      <section className="terminal4-content">
        <div className="container">

          {/* INTRO */}
          <div className="terminal4-intro">



            <div className="terminal4-intro-full">

              <h1 className="terminal4-intro-title" style={{ color: "#005c25" }}>
                Airport Parking Heathrow Terminal 4 with Heathrow Elite Parking

              </h1>
            </div>

          </div>

          <Hero />

          {/* INTRO */}
          <div className="terminal4-intro">






            <p
              className=""
              style={{
                textAlign: "justify",
                lineHeight: "1.7",
                maxWidth: "95%",
                color: "#475569"
              }}
            >
              Due to the huge number of passengers moving through terminal 4, it can be difficult to find car parking at Heathrow airport terminal 4 near the terminal. Travelers are charged less when they book their parking ahead of time which also ensures their vehicle stays in a monitored and safe place. Heathrow Elite Parking provides{" "}

              <a
                href="https://www.heathroweliteparking.co.uk/heathrow-airport-parking"
                target="_blank"
                rel="noopener noreferrer"
              >
                cheap airport parking
              </a>{" "}

              at Heathrow terminal 4 as well as travelers can choose the best parking solution depending on their journey duration and budget.
            </p>


          </div>



          {/* IMAGE + TEXT SECTION */}
          <div className="row align-items-stretch section-spacing">

            {/* IMAGE SIDE */}
            <div className="col-lg-6 d-flex">
              <div className="terminal4-image-wrapper">
                <img
                  src={banner}
                  alt="Heathrow Terminal 2 Parking Services"
                />
              </div>
            </div>

            {/* TEXT SIDE */}
            <div className="col-lg-6 d-flex">
              <div className="terminal4-text-wrapper">

                <h2 className="section-title mb-4" style={{ color: "#005c25" }}>
                  Heathrow Airport Terminal 4 long term Parking
                </h2>

                {/* Item 1 */}
                <div className="terminal4-item">
                  <div className="terminal4-icon-wrapper">
                    <FaCheck style={{ color: "#005c25" }} />
                  </div>
                  <div>
                    {/* <h5 style={{ color: "#005c25" }}>Convenience</h5> */}
                    <p>
                     Heathrow airport long term parking at terminal 4 is a great solution for people going on extended holidays or business trips. Considered to short term options it offers better daily rates for long term parking. Many tourists' first choice is Heathrow terminal 4 long term car park as it provides better benefits as they are built for longer trips and provide safe parking spots with regular monitoring.


                    </p>
                  </div>
                </div>

                {/* Item 2 */}
                <div className="terminal4-item">
                  <div className="terminal4-icon-wrapper">
                    <FaCheck style={{ color: "#005c25" }} />
                  </div>
                  <div>
                    {/* <h5 style={{ color: "#005c25" }}>Park & Ride – Ideal for Longer Trips</h5> */}
                    <p>
                      To secure cheap parking and vehicle safety throughout the trip at <strong>Heathrow airport parking terminal 4</strong> travelers book their parking in advance.

                    </p>
                  </div>
                </div>


              </div>
            </div>
          </div>

          {/* ABOUT + TRAVEL TIPS ROW */}
          <div className="row section-spacing">

            {/* LEFT COLUMN – ABOUT */}
            <div className="col-lg-6">
              <div className="terminal4-card">

                <h2 className="section-title mb-3" style={{ color: "#005c25" }}>
                  {/* <span className="terminal4-title-icon">
                    <FaPlaneDeparture style={{ color: "#005c25" }} />
                  </span> */}
                  Terminal 4 Limited-Time Parking at Heathrow Airport
                </h2>

                <div className="terminal4-item">
                  <div className="terminal4-icon-wrapper">
                    <FaCheck style={{ color: "#005c25" }} />
                  </div>
                  <div>
                    {/* <h5 style={{ color: "#005c25" }}>Park & Ride – Ideal for Longer Trips</h5> */}
                    <p>
                      Passengers on short trips or passing off travelers prefer short-stay accommodation at Heathrow Airport Terminal 4.
                    </p>
                  </div>
                </div>

                <div className="terminal4-item">
                  <div className="terminal4-icon-wrapper">
                    <FaCheck style={{ color: "#005c25" }} />
                  </div>
                  <div>
                    {/* <h5 style={{ color: "#005c25" }}>Park & Ride – Ideal for Longer Trips</h5> */}
                    <p>
                      As long term parking at Heathrow airport terminal 4 is situated closer to the terminal building, it allows passengers to walk directly to departure within minutes. If used for extended periods the cost of <strong>Heathrow airport terminal 4 parking</strong> long term can be more costly than long term parking. Parking cars at Heathrow airport terminal 4 long term can give easy access and short walking distance for passengers going on short trips or quick visits.

                    </p>
                  </div>
                </div>


              </div>
            </div>

            {/* RIGHT COLUMN – TRAVEL TIPS */}
            <div className="col-lg-6">
              <div className="terminal4-card">

                <h2 className="section-title mb-4" style={{ color: "#005c25" }}>
                  Self-Park – Heathrow Airport Terminal 4

                </h2>

                <div className="terminal4-item">
                  <div className="terminal4-icon-wrapper">
                    <FaCheck style={{ color: "#005c25" }} />
                  </div>
                  <div>
                    {/* <h5 style={{ color: "#005c25" }}>Park & Ride – Ideal for Longer Trips</h5> */}
                    <p>
                      A much more convenient parking option offered by Heathrow Elite parking is Self-Park. Using this option travelers can park their vehicle at will by driving directly to the parking facility and keeping their car keys with them. For people preferring full control over their vehicle this option is perfect for them while also having the benefit of safe <strong>airport car parking at Heathrow terminal 4 facilities</strong>.

                    </p>
                  </div>
                </div>


                <div className="terminal4-item">
                  <div className="terminal4-icon-wrapper">
                    <FaCheck style={{ color: "#005c25" }} />
                  </div>
                  <div>
                    {/* <h5 style={{ color: "#005c25" }}>Park & Ride – Ideal for Longer Trips</h5> */}
                    <p>
                      Choosing a self-park option also makes sure your vehicle remains at the same place until you return.
                    </p>
                  </div>
                </div>

              </div>
            </div>

          </div>

          {/* ABOUT + TRAVEL TIPS ROW */}
          <div className="row section-spacing">

            {/* LEFT COLUMN – ABOUT */}
            <div className="col-lg-6">
              <div className="terminal4-card">

                <h2 className="section-title mb-3" style={{ color: "#005c25" }}>
                  {/* <span className="terminal4-title-icon">
                    <FaPlaneDeparture style={{ color: "#005c25" }} />
                  </span> */}
                  Park and Ride – Heathrow Airport Terminal 4
                </h2>

                <div className="terminal4-item">
                  <div className="terminal4-icon-wrapper">
                    <FaCheck style={{ color: "#005c25" }} />
                  </div>
                  <div>
                    {/* <h5 style={{ color: "#005c25" }}>Park & Ride – Ideal for Longer Trips</h5> */}
                    <p>
                      A park and ride option is a cheap and popular solution for passengers who look for cheap parking at Heathrow airport terminal 4. With this particular option, passengers leave their car at a safe off site location and travel the rest of their journey to <strong>London Heathrow airport parking terminal 4</strong> departures through shuttle.

                    </p>
                  </div>
                </div>

                <div className="terminal4-item">
                  <div className="terminal4-icon-wrapper">
                    <FaCheck style={{ color: "#005c25" }} />
                  </div>
                  <div>
                    {/* <h5 style={{ color: "#005c25" }}>Park & Ride – Ideal for Longer Trips</h5> */}
                    <p>
                      As it provides cheaper rates while also providing safe parking and convenient transfers this option is the best price wise option at airport parking Heathrow terminal 4.

                    </p>
                  </div>
                </div>




              </div>
            </div>


          </div>
        </div>


      </section>

      {/* ================= CTA ================= */}
      <section className="terminal4-cta">
        <div className="container">
          <div className="terminal4-cta-wrapper text-center">

            <h2 className="terminal4-cta-head" style={{ color: "#005c25" }}>
              Book Now – Heathrow Airport Terminal 4 Parking
            </h2>

            <p>
              Advance booking for airport parking at Heathrow terminal 4 is the ideal solution that can save both time and money and can lead to a relaxing journey. Passengers with Heathrow Elite parking can find the best airport parking at Heathrow terminal 4 and secure cheap rates while comparing different parking options before arriving at the airport.

            </p>

            <p className="terminal4-cta-text">
              <strong>
                <a
                  href="https://www.heathroweliteparking.co.uk/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Booking your Heathrow Terminal 4
                </a>
              </strong>{" "}
              parking earlier will not only protect your vehicle but will lead to relaxed mind throughout the journey
            </p>

            <button
              className="cta-button"
              onClick={() => {
                const section = document.getElementById("heroterminal4");
                if (section) {
                  section.scrollIntoView({ behavior: "smooth" });
                }
              }}
            >
              Reserve Your Parking Now
              <span className="cta-icon">
                <FaArrowRight />
              </span>
            </button>

          </div>
        </div>
      </section>

      {/* ================= FAQs ================= */}
      <section className="terminal4-faq section-spacing">
        <div className="container">

          <h2 className="section-title text-center mb-5" style={{ color: "#005c25" }}>
            Frequently Asked Questions (FAQs)
          </h2>

          <div className="faq-accordion">

            {/* FAQ 1 */}
            <div className={`faq-box ${openFAQ === 0 ? "active" : ""}`}>
              <div className="faq-question" onClick={() => toggleFAQ(0)}>
                What is the best option for airport parking heathrow terminal 4?
              </div>

              {openFAQ === 0 && (
                <div className="faq-answer">
                  Depending on your trip length, For longer trips , the best option is long term parking as it is the cheap option while for quick visits long term parking is better.




                </div>
              )}
            </div>

            {/* FAQ 2 */}
            <div className={`faq-box ${openFAQ === 1 ? "active" : ""}`}>
              <div className="faq-question" onClick={() => toggleFAQ(1)}>
                Can I find cheap airport parking at Heathrow terminal 4?


              </div>

              {openFAQ === 1 && (
                <div className="faq-answer">
                  Yes, booking online in advance provides travellers with cheap airport parking with services like Heathrow Elite Parking at Heathrow terminal 4.




                </div>
              )}
            </div>

            {/* FAQ 3 */}
            <div className={`faq-box ${openFAQ === 2 ? "active" : ""}`}>
              <div className="faq-question" onClick={() => toggleFAQ(2)}>
                Where is the Heathrow airport terminal 4 long car park located?


              </div>

              {openFAQ === 2 && (
                <div className="faq-answer">
                  Located a little far distance from the terminal, but passengers are transferred to the terminal 4 departures in shuttle buses.


                </div>
              )}
            </div>

          </div>
        </div>
      </section>

      <Footer />
      <Copyright />

      {/* ================= STYLES ================= */}
      <style jsx>{`

      /* FAQ Section */
.terminal4-faq {
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

      /* Card wrapper for row layout */
.terminal4-card {
  background: #ffffff;
  padding: 6px;
  border-radius: 16px;
  height: 100%;
}

/* Make columns same height */
.row.section-spacing > div {
  display: flex;
}

.row.section-spacing > div > .terminal4-card {
  width: 100%;
}

/* Responsive */
@media (max-width: 991px) {
  .terminal4-card {
    margin-bottom: 25px;
  }
}
      
      /* Intro Section */
.terminal4-intro {
  margin-bottom: 60px;
}

.terminal4-intro-box {
  background: #f8faff;
  padding: 40px 50px;
  border-radius: 14px;
  max-width: 900px;
  margin: 0 auto;
  text-align: center;
}

.terminal4-intro-title {
  font-size: 30px;
  font-weight: 700;
  color: #062A4F;
  margin-bottom: 18px;
}

.terminal4-intro-text {
  font-size: 17px;
  line-height: 1.8;
  color: #475569;
  margin-bottom: 12px;
}

/* Mobile responsiveness */
@media (max-width: 768px) {
  .terminal4-intro-box {
    padding: 28px 24px;
  }

  .terminal4-intro-title {
    font-size: 24px;
  }

  .terminal4-intro-text {
    font-size: 15px;
  }
}

      /* CTA Section */
.terminal4-cta {
  padding: 80px 0;
  background: #f8faff;
}

.terminal4-cta-wrapper {
  max-width: 720px;
  margin: 0 auto;
}

.terminal4-cta-head {
  font-size: 32px;
  font-weight: 700;
  color: #062A4F;
  margin-bottom: 20px;
}

.terminal4-cta-text {
  font-size: 17px;
  color: #475569;
  line-height: 1.7;
  margin-bottom: 30px;
}

/* Button */
.cta-button {
  background: #062A4F;
  color: #fff;
  border: none;
  padding: 14px 32px;
  font-size: 16px;
  font-weight: 600;
  border-radius: 8px;
  display: inline-flex;
  align-items: center;
  gap: 10px;
  transition: 0.3s ease;
  cursor: pointer;
}

.cta-button:hover {
  background: #0f3685;
  transform: translateY(-2px);
}

.cta-icon {
  display: flex;
  align-items: center;
  font-size: 14px;
}

      .terminal4-item {
  display: flex;
  align-items: flex-start;
  gap: 16px;
  margin-bottom: 28px;
}

.terminal4-icon-wrapper {
  min-width: 40px;
  height: 40px;
  background: #eef3ff;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #062A4F;
  font-size: 18px;
  flex-shrink: 0;
}

.terminal4-item p {
  margin: 0;
  color: #444;
  line-height: 1.6;
}

      /* About section text */
.terminal4-about-text {
  color: #475569;
  font-size: 16px;
  line-height: 1.8;
  margin-bottom: 18px;
}

/* Title icon next to heading */
.terminal4-title-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  margin-right: 10px;
  border-radius: 10px;
  background: #eef3ff;
  color: #062A4F;
  font-size: 18px;
  vertical-align: middle;
}

/* List with icons */
.icon-list {
  list-style: none;
  padding-left: 0;
  margin: 0;
}

.icon-list li {
  display: flex;
  align-items: flex-start;
  gap: 12px;
  margin-bottom: 14px;
  color: #334155;
  font-size: 16px;
  line-height: 1.6;
}

.terminal4-li-icon {
  min-width: 22px;
  margin-top: 2px;
  color: #062A4F;
  font-size: 18px;
}

      .terminal4-item {
  display: flex;
  align-items: flex-start;
  gap: 16px;
  margin-bottom: 28px;
}

.terminal4-icon-wrapper {
  min-width: 40px;
  height: 40px;
  background: #eef3ff;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #062A4F;
  font-size: 18px;
  flex-shrink: 0;
}

.terminal4-item h5 {
  margin-bottom: 8px;
  font-weight: 600;
}

.terminal4-item p {
  margin: 0;
  color: #444;
  line-height: 1.6;
}

      .section-spacing {
  margin-top: 80px;
}

.terminal4-image-wrapper {
  width: 100%;
  height: 100%;
  border-radius: 16px;
  overflow: hidden;
}

.terminal4-image-wrapper img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.terminal4-text-wrapper {
  background: #ffffff;
  padding: 40px;
  border-radius: 16px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

@media (max-width: 991px) {
  .terminal4-image-wrapper {
    height: 400px;
  }
}

        .terminal4-header {
          padding: 18px 0;
        }

        .terminal4-logo {
          max-width: 140px;
          margin-bottom: 20px;
        }

        .terminal4-header h1 {
        color: #062A4F;
          font-size: 28px;
          font-weight: 700;
          margin-bottom: 10px;
        }

        .terminal4-header p {
          color: #64748b;
        }

        .terminal4-content {
          background: #ffffff;
          padding: 0px 0;
        }

        .terminal4-intro {
          max-width: 900px;
          margin: 0 auto 60px auto;
          font-size: 18px;
          line-height: 1.8;
          text-align: center;
        }

        .terminal4-main-image {
          width: 100%;
          border-radius: 12px;
        }

        .section-title {
          font-size: 24px;
          font-weight: 700;
          margin-bottom: 20px;
          color: #062A4F;
        }

        .section-spacing {
          margin-top: 80px;
        }

        .terminal4-list {
          margin-top: 15px;
          padding-left: 20px;
        }

        .terminal4-list li {
          margin-bottom: 10px;
        }

        .terminal4-cta {
          color: black;
          padding: 70px 0;
        }

        .terminal4-cta h2 {
          font-weight: 700;
          color: #062A4F;
          margin-bottom: 15px;
        }

        .cta-button {
          margin-top: 20px;
          background: #fbbf24;
          border: none;
          padding: 14px 30px;
          border-radius: 6px;
          font-weight: 600;
          cursor: pointer;
        }

        .cta-button:hover {
          background: #f59e0b;
        }

      `}</style>
    </>
  );
}