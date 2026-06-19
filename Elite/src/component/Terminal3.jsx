import { Helmet } from "react-helmet";
import { useState } from "react";
import Footer from "./Footer";
import Copyright from "./Copyright";
import NavbarElement from "./NavbarElement";
import Topbar from "../component/Topbar";
import Hero from "../component/HeroTerminal3";

import banner from "/img/terminal3-images.jpeg";
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

export default function Terminal3() {

  const [openFAQ, setOpenFAQ] = useState(0);

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <>
      <Helmet>
        <title>
          Heathrow Airport Terminal 3 Parking | Heathrow Elite Parking - UK
        </title>

        <meta
          name="description"
          content="Reserve Heathrow Terminal 3 airport parking with Heathrow Elite Parking. Safe and reliable airport parking with convenient access to Terminal 3."
        />

        <meta
          name="keywords"
          content="Heathrow airport terminal 3 parking, terminal 3 parking Heathrow, Heathrow airport car park terminal 3, Heathrow elite parking, Heathrow long term parking terminal 3"
        />

        <meta name="robots" content="index, follow" />

        {/* Open Graph */}
        <meta
          property="og:title"
          content="Heathrow Airport Terminal 3 Parking | Heathrow Elite Parking"
        />
        <meta
          property="og:description"
          content="Secure Heathrow Terminal 3 airport parking with safe vehicle storage and easy access to the terminal."
        />
        <meta property="og:type" content="website" />

        {/* Canonical URL */}
        <link
          rel="canonical"
          href="https://www.heathroweliteparking.co.uk/heathrow-airport-parking-terminal-3"
        />
      </Helmet>

      {/* <Topbar /> */}
      <NavbarElement />

      {/* ================= PAGE HEADER ================= */}
      <section className="terminal3-header text-center">
        <div className="container">
          {/* <img
            src="https://thumbs.dreamstime.com/b/london-heathrow-airport-logo-airport-stamp-vector-illustration-london-aerodrome-london-heathrow-airport-logo-airport-stamp-vector-149754255.jpg"
            alt="London Heathrow Airport Logo"
            className="terminal3-logo"
          /> */}
        </div>
      </section>


      {/* ================= MAIN CONTENT ================= */}
      <section className="terminal3-content">
        <div className="container">

          {/* INTRO */}
          <div className="terminal3-intro">



            <div className="terminal3-intro-full">

              <h1 className="terminal3-intro-title" style={{ color: "#005c25" }}>
                Heathrow Terminal 3 Parking – Best Parking Options at Heathrow Airport T3
              </h1>


            </div>



          </div>

          <Hero />

          <div className="terminal3-intro">
            <p className="terminal3-intro-text">
              This terminal handles a large number of long-haul flights. Routes to cities like New York, Dubai, Toronto, and Singapore leave from here every day. Which means the place rarely slows down.
            </p>



            <p className="terminal3-intro-text">
              The majority of them do not wish to arrive earlier than 40 minutes prior to check in since parking spaces are still being looked for. Many travelers plan ahead due to the parking at Heathrow Airport Terminal 3. That’s why many drivers now reserve Heathrow airport parking terminal 3 before the travel day even begins. It removes the guesswork. You know where you're going. You know where the car will stay.
            </p>

            <p className="terminal3-intro-text">
              With{" "}
              <a
                href="https://www.heathroweliteparking.co.uk/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Heathrow Elite Parking
              </a>{" "}
              travelers can book secure airport parking at Heathrow terminal 3 in advance and choose between simple Self Park options or convenient Park and Ride transfers.
            </p>
          </div>




          {/* IMAGE + TEXT SECTION */}
          <div className="row align-items-stretch section-spacing">

            {/* IMAGE SIDE */}
            <div className="col-lg-6 d-flex">
              <div className="terminal3-image-wrapper">
                <img
                  src={banner}
                  alt="Heathrow Terminal 2 Parking Services"
                />
              </div>
            </div>

            {/* TEXT SIDE */}
            <div className="col-lg-6 d-flex">
              <div className="terminal3-text-wrapper">

                <h2 className="section-title mb-4" style={{ color: "#005c25" }}>
                  Why Parking At Terminal 3 is Occupied So Rapidly
                </h2>

                {/* Item 2 */}
                <div className="terminal3-item">
                  <div className="terminal3-icon-wrapper">
                    <FaCheck style={{ color: "#005c25" }} />
                  </div>
                  <div>
                    {/* <h5 style={{ color: "#005c25" }}>Park & Ride – Ideal for Longer Trips</h5> */}
                    <p>
                      Terminal 3 is one of the busiest hubs
                    </p>
                  </div>
                </div>
                <div className="terminal3-item">
                  <div className="terminal3-icon-wrapper">
                    <FaCheck style={{ color: "#005c25" }} />
                  </div>
                  <div>
                    {/* <h5 style={{ color: "#005c25" }}>Park & Ride – Ideal for Longer Trips</h5> */}
                    <p>
                      Flights from across the globe land in the US, Canada, Middle East and Asia, arriving almost every hour of the day there are passengers arriving or leaving. So naturally the roads around the terminal stay crowded.
                    </p>
                  </div>
                </div>

                {/* Item 3 */}
                <div className="terminal3-item">
                  <div className="terminal3-icon-wrapper">
                    <FaCheck style={{ color: "#005c25" }} />
                  </div>
                  <div>
                    {/* <h5 style={{ color: "#005c25" }}>Meet & Greet – Ultimate Time-Saver</h5> */}
                    <p>Because of the official heathrow airport terminal 3 car park spaces fill quickly, Forecourt drop-offs come with added charges, and  Last-minute airport parking terminal 3 heathrow can be expensive. Travelers who arrive without planning sometimes end up paying the highest prices for short term parking terminal 3 heathrow airport.
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
              <div className="terminal3-card">

                <h2 className="section-title mb-3" style={{ color: "#005c25" }}>
                  {/* <span className="terminal3-title-icon">
                    <FaPlaneDeparture style={{ color: "#005c25" }} />
                  </span> */}
                  Self Park Keep Your Keys
                </h2>

                <div className="terminal3-item">
                  <div className="terminal3-icon-wrapper">
                    <FaCheck style={{ color: "#005c25" }} />
                  </div>
                  <div>
                    {/* <h5 style={{ color: "#005c25" }}>Park & Ride – Ideal for Longer Trips</h5> */}
                    <p>
                      A lot of travelers prefer something simple. Drive in. Park the car. Lock it. Keep the keys.

                    </p>
                  </div>
                </div>

                <div className="terminal3-item">
                  <div className="terminal3-icon-wrapper">
                    <FaCheck style={{ color: "#005c25" }} />
                  </div>
                  <div>
                    {/* <h5 style={{ color: "#005c25" }}>Park & Ride – Ideal for Longer Trips</h5> */}
                    <p>
                      That’s exactly how the Self Park option works at Heathrow Elite Parking. With this service, customers drive to the secure parking facility, choose their space, and park the vehicle themselves. No handing over keys. No waiting for someone else to move the car.


                    </p>
                  </div>
                </div>

                <div className="terminal3-item">
                  <div className="terminal3-icon-wrapper">
                    <FaCheck style={{ color: "#005c25" }} />
                  </div>
                  <div>
                    {/* <h5 style={{ color: "#005c25" }}>Park & Ride – Ideal for Longer Trips</h5> */}
                    <p>
                      Your car stays where you left it. Many people actually prefer this style of <strong>car parking at Heathrow airport terminal 3</strong> because it feels more personal. You know the car hasn’t been moved. You return and find it in the same spot.

                    </p>
                  </div>
                </div>



              </div>
            </div>

            {/* RIGHT COLUMN – TRAVEL TIPS */}
            <div className="col-lg-6">
              <div className="terminal3-card">

                <h2 className="section-title mb-4" style={{ color: "#005c25" }}>
                  Park and Ride Affordable Long term Parking
                </h2>

                <div className="terminal3-item">
                  <div className="terminal3-icon-wrapper">
                    <FaCheck style={{ color: "#005c25" }} />
                  </div>
                  <div>
                    {/* <h5 style={{ color: "#005c25" }}>Park & Ride – Ideal for Longer Trips</h5> */}
                    <p>
                      Park and Ride is a popular choice for longer trips at <strong>heathrow airport long term parking terminal 3</strong>. An easy process as passengers have to drive to Heathrow Elite Parking facility, Park their cars inside the multi-storey parking area then use the shuttle to go to terminal 3 directly.
                    </p>
                  </div>
                </div>

                <div className="terminal3-item">
                  <div className="terminal3-icon-wrapper">
                    <FaCheck style={{ color: "#005c25" }} />
                  </div>
                  <div>
                    {/* <h5 style={{ color: "#005c25" }}>Park & Ride – Ideal for Longer Trips</h5> */}
                    <p>
                      As shuttles run throughout the day, the distance from the parking facility to the airport takes up to 10 to 15 min considering the traffic.

                    </p>
                  </div>
                </div>

                <div className="terminal3-item">
                  <div className="terminal3-icon-wrapper">
                    <FaCheck style={{ color: "#005c25" }} />
                  </div>
                  <div>
                    {/* <h5 style={{ color: "#005c25" }}>Park & Ride – Ideal for Longer Trips</h5> */}
                    <p>
                      Not too long. As the cars are parked outside the airport zone, the fare is affordable to park at airport parking heathrow terminal 3 than official terminal parking. This option is a better choice if one is going on holidays, business trips or extended travel.

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
              <div className="terminal3-card">

                <h2 className="section-title mb-3" style={{ color: "#005c25" }}>
                  {/* <span className="terminal3-title-icon">
                    <FaPlaneDeparture style={{ color: "#005c25" }} />
                  </span> */}
                  Secure Heathrow Parking Facility
                </h2>

                <div className="terminal3-item">
                  <div className="terminal3-icon-wrapper">
                    <FaCheck style={{ color: "#005c25" }} />
                  </div>
                  <div>
                    {/* <h5 style={{ color: "#005c25" }}>Park & Ride – Ideal for Longer Trips</h5> */}
                    <p>
                      A weird feeling can take over for leaving your vehicle alone for a week or two.
                      It's pretty normal

                      <strong> Is the car safe?</strong>



                    </p>
                  </div>
                </div>

                <div className="terminal3-item">
                  <div className="terminal3-icon-wrapper">
                    <FaCheck style={{ color: "#005c25" }} />
                  </div>
                  <div>
                    {/* <h5 style={{ color: "#005c25" }}>Park & Ride – Ideal for Longer Trips</h5> */}
                    <p>
                      A safe multi storey is designed at <strong>heathrow airport terminal 3</strong> to keep the cars unharmed while the owner is away which is operated by Heathrow Elite Parking. <strong></strong> Barrier controlled entry and exit,   CCTV monitoring throughout the parking levels, Well-lit parking areas, Professional on-site staff and Controlled vehicle access.
                    </p>
                  </div>
                </div>

                <div className="terminal3-item">
                  <div className="terminal3-icon-wrapper">
                    <FaCheck style={{ color: "#005c25" }} />
                  </div>
                  <div>
                    {/* <h5 style={{ color: "#005c25" }}>Park & Ride – Ideal for Longer Trips</h5> */}
                    <p>
                      Only authorized vehicles enter the facility. Peace of mind counts when you are travelling tons of miles away. Endlessly everything is being tracked. Drivers who opt for parking at Heathrow airport terminal 3 can leave knowing their car's parked in a safe managed spot.
                    </p>
                  </div>
                </div>




              </div>
            </div>

            {/* RIGHT COLUMN – TRAVEL TIPS */}
            <div className="col-lg-6">
              <div className="terminal3-card">

                <h2 className="section-title mb-4" style={{ color: "#005c25" }}>
                  Heathrow Parking Charges Why Booking Early Helps
                </h2>

                <div className="terminal3-item">
                  <div className="terminal3-icon-wrapper">
                    <FaCheck style={{ color: "#005c25" }} />
                  </div>
                  <div>
                    {/* <h5 style={{ color: "#005c25" }}>Park & Ride – Ideal for Longer Trips</h5> */}
                    <p>
                      Let’s be honest for a moment.

                    </p>
                  </div>
                </div>

                <div className="terminal3-item">
                  <div className="terminal3-icon-wrapper">
                    <FaCheck style={{ color: "#005c25" }} />
                  </div>
                  <div>
                    {/* <h5 style={{ color: "#005c25" }}>Park & Ride – Ideal for Longer Trips</h5> */}
                    <p>
                      Turning up at Heathrow and paying for parking on the day can get expensive. Especially if you're parking for several days. Official heathrow airport terminal 3 parking rates increase quickly the longer the vehicle stays. But pre-booking airport parking at Heathrow terminal 3 usually costs much less.

                    </p>
                  </div>
                </div>

                <div className="terminal3-item">
                  <div className="terminal3-icon-wrapper">
                    <FaCheck style={{ color: "#005c25" }} />
                  </div>
                  <div>
                    {/* <h5 style={{ color: "#005c25" }}>Park & Ride – Ideal for Longer Trips</h5> */}
                    <p>
                      Official heathrow airport terminal 3 parking rates increase quickly the longer the vehicle stays.
                      But pre-booking <strong>airport parking at Heathrow terminal 3</strong> usually costs much less.


                    </p>
                  </div>
                </div>

                <div className="terminal3-item">
                  <div className="terminal3-icon-wrapper">
                    <FaCheck style={{ color: "#005c25" }} />
                  </div>
                  <div>
                    {/* <h5 style={{ color: "#005c25" }}>Park & Ride – Ideal for Longer Trips</h5> */}
                    <p>
                      Planning ahead means travelers can: Compare best airport parking heathrow terminal 3 options,  Reserve long term parking earlier and Skip last minute expensive parking charges.
                    </p>
                  </div>
                </div>

                <div className="terminal3-item">
                  <div className="terminal3-icon-wrapper">
                    <FaCheck style={{ color: "#005c25" }} />
                  </div>
                  <div>
                    {/* <h5 style={{ color: "#005c25" }}>Park & Ride – Ideal for Longer Trips</h5> */}
                    <p>
                      Booking parking ahead of your travel day saves your cash at the airport. This is the easiest way.
                    </p>
                  </div>
                </div>


              </div>



            </div>

          </div>

        </div>


      </section>

      {/* ================= CTA ================= */}
      <section className="terminal3-cta">
        <div className="container">
          <div className="terminal3-cta-wrapper text-center">

            <h2 className="terminal3-cta-head" style={{ color: "#005c25" }}>
              Book Your Heathrow Terminal 3 Parking Today
            </h2>

            <p className="terminal3-cta-text">
              Flights leave on schedule. Parking spaces don’t always wait. Travelers get secure parking, easy transfers and the release to choose self park while keeping their keys with{" "}
              <a
                href="https://www.heathroweliteparking.co.uk/heathrow-airport-parking"
                target="_blank"
                rel="noopener noreferrer"
              >
                Heathrow Elite Airport parking
              </a>
              . The crucial step is making the reservation early at heathrow airport parking 3 which means the journey is managed before you even get to the airport.
            </p>

            <p className="terminal3-cta-text">
              <strong>   Park safely. Travel comfortably. Return to your car exactly where you left it.
              </strong>
            </p>

            <p className="terminal3-cta-text">
              Reserve your <strong>terminal 3 heathrow airport parking</strong> today and start the journey without the usual parking stress.

            </p>

            <button
              className="cta-button"
              onClick={() => {
                const section = document.getElementById("heroterminal3");
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

      <section className="terminal3-faq section-spacing">
        <div className="container">

          <h2 className="section-title text-center mb-5" style={{ color: "#005c25" }}>
            Frequently Asked Questions (FAQs)
          </h2>

          <div className="faq-accordion">

            {/* FAQ 1 */}
            <div className={`faq-box ${openFAQ === 0 ? "active" : ""}`}>
              <div className="faq-question" onClick={() => toggleFAQ(0)}>
                Is long term parking available for Terminal 3?

              </div>

              {openFAQ === 0 && (
                <div className="faq-answer">
                  Yes. Travelers can book Heathrow airport terminal 3 long term car park services through Park and Ride parking with Heathrow Elite Parking.


                </div>
              )}
            </div>

            {/* FAQ 2 */}
            <div className={`faq-box ${openFAQ === 1 ? "active" : ""}`}>
              <div className="faq-question" onClick={() => toggleFAQ(1)}>
                Can I keep my car keys?

              </div>

              {openFAQ === 1 && (
                <div className="faq-answer">
                  Yes.Safe Heathrow Parking Facility A weird feeling can take over for leaving your vehicle alone for a week or two. It's pretty normal.


                </div>
              )}
            </div>

            {/* FAQ 3 */}
            <div className={`faq-box ${openFAQ === 2 ? "active" : ""}`}>
              <div className="faq-question" onClick={() => toggleFAQ(2)}>
                Is the car safe?

              </div>

              {openFAQ === 2 && (
                <div className="faq-answer">
                  A safe multi storey is designed at heathrow airport terminal 3 to keep the cars unharmed while the owner is away which is operated by Heathrow Elite Parking.
                </div>
              )}
            </div>

          </div>
        </div>
      </section>

      {/* ================= FAQs ================= */}


      <Footer />
      <Copyright />

      {/* ================= STYLES ================= */}
      <style jsx>{`

      /* FAQ Section */
.terminal3-faq {
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
.terminal3-card {
  background: #ffffff;
  padding: 6px;
  border-radius: 16px;
  height: 100%;
}

/* Make columns same height */
.row.section-spacing > div {
  display: flex;
}

.row.section-spacing > div > .terminal3-card {
  width: 100%;
}

/* Responsive */
@media (max-width: 991px) {
  .terminal3-card {
    margin-bottom: 25px;
  }
}
      
      /* Intro Section */
.terminal3-intro {
  margin-bottom: 60px;
}

.terminal3-intro-box {
  background: #f8faff;
  padding: 40px 50px;
  border-radius: 14px;
  max-width: 900px;
  margin: 0 auto;
  text-align: center;
}

.terminal3-intro-title {
  font-size: 30px;
  font-weight: 700;
  color: #062A4F;
  margin-bottom: 18px;
}

.terminal3-intro-text {
  font-size: 17px;
  line-height: 1.8;
  color: #475569;
  margin-bottom: 12px;
}

/* Mobile responsiveness */
@media (max-width: 768px) {
  .terminal3-intro-box {
    padding: 28px 24px;
  }

  .terminal3-intro-title {
    font-size: 24px;
  }

  .terminal3-intro-text {
    font-size: 15px;
  }
}

      /* CTA Section */
.terminal3-cta {
  padding: 80px 0;
  background: #f8faff;
}

.terminal3-cta-wrapper {
  max-width: 720px;
  margin: 0 auto;
}

.terminal3-cta-head {
  font-size: 32px;
  font-weight: 700;
  color: #062A4F;
  margin-bottom: 20px;
}

.terminal3-cta-text {
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

      .terminal3-item {
  display: flex;
  align-items: flex-start;
  gap: 16px;
  margin-bottom: 28px;
}

.terminal3-icon-wrapper {
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

.terminal3-item p {
  margin: 0;
  color: #444;
  line-height: 1.6;
}

      /* About section text */
.terminal3-about-text {
  color: #475569;
  font-size: 16px;
  line-height: 1.8;
  margin-bottom: 18px;
}

/* Title icon next to heading */
.terminal3-title-icon {
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

.terminal3-li-icon {
  min-width: 22px;
  margin-top: 2px;
  color: #062A4F;
  font-size: 18px;
}

      .terminal3-item {
  display: flex;
  align-items: flex-start;
  gap: 16px;
  margin-bottom: 28px;
}

.terminal3-icon-wrapper {
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

.terminal3-item h5 {
  margin-bottom: 8px;
  font-weight: 600;
}

.terminal3-item p {
  margin: 0;
  color: #444;
  line-height: 1.6;
}

      .section-spacing {
  margin-top: 80px;
}

.terminal3-image-wrapper {
  width: 100%;
  height: 100%;
  border-radius: 16px;
  overflow: hidden;
}

.terminal3-image-wrapper img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.terminal3-text-wrapper {
  background: #ffffff;
  padding: 40px;
  border-radius: 16px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

@media (max-width: 991px) {
  .terminal3-image-wrapper {
    height: 400px;
  }
}

        .terminal3-header {
          padding: 18px 0;
        }

        .terminal3-logo {
          max-width: 140px;
          margin-bottom: 20px;
        }

        .terminal3-header h1 {
        color: #062A4F;
          font-size: 28px;
          font-weight: 700;
          margin-bottom: 10px;
        }

        .terminal3-header p {
          color: #64748b;
        }

        .terminal3-content {
          background: #ffffff;
          padding: 0px 0;
        }

        .terminal3-intro {
          max-width: 900px;
          margin: 0 auto 60px auto;
          font-size: 18px;
          line-height: 1.8;
          text-align: center;
        }

        .terminal3-main-image {
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

        .terminal3-list {
          margin-top: 15px;
          padding-left: 20px;
        }

        .terminal3-list li {
          margin-bottom: 10px;
        }

        .terminal3-cta {
          color: black;
          padding: 70px 0;
        }

        .terminal3-cta h2 {
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