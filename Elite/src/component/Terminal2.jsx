import { Helmet } from "react-helmet";
import { useState } from "react";
import Footer from "./Footer";
import Copyright from "./Copyright";
import NavbarElement from "./NavbarElement";
import Topbar from "../component/Topbar";
import Hero from "../component/HeroTerminal";

import banner from "/img/terminal2-images.jpeg";
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

export default function Terminal2() {

  const [openFAQ, setOpenFAQ] = useState(0);

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (

    <>
      <Helmet>
        <title>
          Heathrow Airport Parking Terminal 2 | Heathrow Elite Parking - UK
        </title>

        <meta
          name="description"
          content="Book secure Heathrow Airport parking Terminal 2 with Heathrow Elite Parking. Affordable airport parking near Terminal 2 with safe vehicle storage and easy access."
        />

        <meta
          name="keywords"
          content="Heathrow airport parking terminal 2, terminal 2 parking Heathrow, Heathrow elite parking, Heathrow airport car park terminal 2, Heathrow terminal 2 long term parking"
        />

        <meta name="robots" content="index, follow" />

        {/* Open Graph for social media */}
        <meta
          property="og:title"
          content="Heathrow Airport Parking Terminal 2 | Heathrow Elite Parking"
        />
        <meta
          property="og:description"
          content="Secure and affordable Heathrow Airport parking near Terminal 2 with fast shuttle transfers and safe vehicle storage."
        />
        <meta property="og:type" content="website" />

        {/* Canonical URL */}
        <link
          rel="canonical"
          href="https://www.heathroweliteparking.co.uk/heathrow-airport-parking-terminal-2"
        />
      </Helmet>


      {/* <Topbar /> */}
      <NavbarElement />

      {/* ================= PAGE HEADER ================= */}
      <section className="terminal2-header text-center">
        <div className="container">
          {/* <img
            src="https://thumbs.dreamstime.com/b/london-heathrow-airport-logo-airport-stamp-vector-illustration-london-aerodrome-london-heathrow-airport-logo-airport-stamp-vector-149754255.jpg"
            alt="London Heathrow Airport Logo"
            className="terminal2-logo"
          /> */}
        </div>
      </section>



      {/* ================= MAIN CONTENT ================= */}
      <section className="terminal2-content">
        <div className="container">

          {/* INTRO */}
          <div className="terminal2-intro">
            <div className="terminal2-intro-full">

              <h1 className="terminal2-intro-title" style={{ color: "#005c25" }}>
                Heathrow Airport Parking Terminal 2 <br></br> Self Park & Park and Ride Near Heathrow
              </h1>
            </div>
          </div>

          <Hero />

          <div className="terminal2-intro">
            <p className="terminal2-intro-text">
              And because of that constant movement, parking around the airport fills up quickly. Many travelers now search for airport parking at terminal 2 days before their trip even begins. Not because they love planning parking. But because showing up without a plan can turn into a frustrating experience. This is where{" "}

              <a
                href="https://www.heathroweliteparking.co.uk/heathrow-airport-parking"
                target="_blank"
                rel="noopener noreferrer"
              >
                Heathrow Elite Parking
              </a>{" "}

              becomes a helpful option.
            </p>

            <p className="terminal2-intro-text">
              Knowing that their car has already been reserved, travelers can rapidly book their airport parking at Heathrow Terminal 2 instead of searching across the airport for the perfect location. Sometimes a small decision like that makes the entire travel day feel easier.

            </p>
          </div>

          

          {/* IMAGE + TEXT SECTION */}
          <div className="row align-items-stretch section-spacing">

            {/* IMAGE SIDE */}
            <div className="col-lg-6 d-flex">
              <div className="terminal2-image-wrapper">
                <img
                  src={banner}
                  alt="Heathrow Terminal 2 Parking Services"
                />
              </div>
            </div>

            {/* TEXT SIDE */}
            <div className="col-lg-6 d-flex">
              <div className="terminal2-text-wrapper">

                <h2 className="section-title mb-4" style={{ color: "#005c25" }}>
                  Why Terminal 2 Parking Needs Planning?
                </h2>

                {/* Item 1 */}
                <div className="terminal2-item">
                  <div className="terminal2-icon-wrapper">
                    <FaCheck style={{ color: "#005c25" }} />
                  </div>
                  <div>
                    {/* <h5 style={{ color: "#005c25" }}>Convenience</h5> */}
                    <p>
                      Throughout the week the demand for the <strong>parking at heathrow airport terminal 2</strong> has been frequently increasing along with several flights being operating.  Terminal 2 has a constant flow of the passengers arriving and departing. Passengers on the international paths have been seen constantly arriving and departing.

                    </p>
                  </div>
                </div>

                {/* Item 2 */}
                <div className="terminal2-item">
                  <div className="terminal2-icon-wrapper">
                    <FaCheck style={{ color: "#005c25" }} />
                  </div>
                  <div>
                    {/* <h5 style={{ color: "#005c25" }}>Park & Ride – Ideal for Longer Trips</h5> */}
                    <p>
                      <strong>That leads to a few common problems.</strong> Official airport spaces fill up faster than expected. Drop off areas now include additional charges. Last minute airport parking at Heathrow terminal 2 can be surprisingly expensive.
                    </p>
                  </div>
                </div>

                {/* Item 3 */}
                <div className="terminal2-item">
                  <div className="terminal2-icon-wrapper">
                    <FaCheck style={{ color: "#005c25" }} />
                  </div>
                  <div>
                    {/* <h5 style={{ color: "#005c25" }}>Meet & Greet – Ultimate Time-Saver</h5> */}
                    <p>And honestly, no traveler wants to deal with parking stress minutes before check in. That’s why many people now reserve <strong>heathrow terminal 2 airport parking</strong> ahead of time.

                    </p>
                  </div>
                </div>

                {/* Item 4 */}
                <div className="terminal2-item">
                  <div className="terminal2-icon-wrapper">
                    <FaCheck style={{ color: "#005c25" }} />
                  </div>
                  <div>
                    {/* <h5 style={{ color: "#005c25" }}>Competitive Pricing & Easy Booking</h5> */}
                    <p>
                      By planning early, drivers already know where they are going, where the car will stay, and how they’ll reach the terminal.

                      It removes uncertainty, and on travel days, that matters.

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
              <div className="terminal2-card">

                <h2 className="section-title mb-3" style={{ color: "#005c25" }}>
                  {/* <span className="terminal2-title-icon">
                    <FaPlaneDeparture style={{ color: "#005c25" }} />
                  </span> */}
                  Why Terminal 2 Parking Needs Planning
                </h2>

                <div className="terminal2-item">
                  <div className="terminal2-icon-wrapper">
                    <FaCheck style={{ color: "#005c25" }} />
                  </div>
                  <div>
                    {/* <h5 style={{ color: "#005c25" }}>Park & Ride – Ideal for Longer Trips</h5> */}
                    <p>
                      Throughout the week the demand for the <strong>parking at heathrow airport terminal 2</strong> has been frequently increasing along with several flights being operating.  Terminal 2 has a constant flow of the passengers arriving and departing. Passengers on the international paths have been seen constantly arriving and departing.

                    </p>
                  </div>
                </div>

                <div className="terminal2-item">
                  <div className="terminal2-icon-wrapper">
                    <FaCheck style={{ color: "#005c25" }} />
                  </div>
                  <div>
                    {/* <h5 style={{ color: "#005c25" }}>Park & Ride – Ideal for Longer Trips</h5> */}
                    <p>
                      <strong>That leads to a few common problems.</strong> Official airport spaces fill up faster than expected. Drop off areas now include additional charges. Last minute airport parking at Heathrow terminal 2 can be surprisingly expensive.


                    </p>
                  </div>
                </div>

                <div className="terminal2-item">
                  <div className="terminal2-icon-wrapper">
                    <FaCheck style={{ color: "#005c25" }} />
                  </div>
                  <div>
                    {/* <h5 style={{ color: "#005c25" }}>Park & Ride – Ideal for Longer Trips</h5> */}
                    <p>
                      And honestly, no traveler wants to deal with parking stress minutes before check in. That’s why many people now reserve <strong>heathrow terminal 2 airport parking</strong> ahead of time.
                    </p>
                  </div>
                </div>

                <div className="terminal2-item">
                  <div className="terminal2-icon-wrapper">
                    <FaCheck style={{ color: "#005c25" }} />
                  </div>
                  <div>
                    {/* <h5 style={{ color: "#005c25" }}>Park & Ride – Ideal for Longer Trips</h5> */}
                    <p>
                      By planning early, drivers already know where they are going, where the car will stay, and how they’ll reach the terminal.

                      It removes uncertainty, and on travel days, that matters.

                    </p>
                  </div>
                </div>



              </div>
            </div>

            {/* RIGHT COLUMN – TRAVEL TIPS */}
            <div className="col-lg-6">
              <div className="terminal2-card">

                <h2 className="section-title mb-4" style={{ color: "#005c25" }}>
                  Parking Options Available Near Terminal 2
                </h2>

                <div className="terminal2-item">
                  <div className="terminal2-icon-wrapper">
                    <FaCheck style={{ color: "#005c25" }} />
                  </div>
                  <div>
                    {/* <h5 style={{ color: "#005c25" }}>Park & Ride – Ideal for Longer Trips</h5> */}
                    <p>
                      When choosing heathrow airport parking terminal 2 parking, most travelers are usually thinking about three things: Price, Security, and Convenience.
                    </p>
                  </div>
                </div>

                <div className="terminal2-item">
                  <div className="terminal2-icon-wrapper">
                    <FaCheck style={{ color: "#005c25" }} />
                  </div>
                  <div>
                    {/* <h5 style={{ color: "#005c25" }}>Park & Ride – Ideal for Longer Trips</h5> */}
                    <p>
                      Heathrow Elite Parking focuses on providing those three things through simple parking options designed for airport travelers.

                    </p>
                  </div>
                </div>

                <div className="terminal2-item">
                  <div className="terminal2-icon-wrapper">
                    <FaCheck style={{ color: "#005c25" }} />
                  </div>
                  <div>
                    {/* <h5 style={{ color: "#005c25" }}>Park & Ride – Ideal for Longer Trips</h5> */}
                    <p>
                      Drivers can choose from:  Self Park parking where customers keep their keys, Park and Ride transfers to the terminal, Long term parking for extended trips, Two alternatives for <strong>low cost airport parking at Heathrow Terminal</strong>.
                    </p>
                  </div>
                </div>

                <div className="terminal2-item">
                  <div className="terminal2-icon-wrapper">
                    <FaCheck style={{ color: "#005c25" }} />
                  </div>
                  <div>
                    {/* <h5 style={{ color: "#005c25" }}>Park & Ride – Ideal for Longer Trips</h5> */}
                    <p>
                      Despite paying outrageous airport car parking fees, passengers with these possibilities can find the parking that best suits their travel plans and itinerary.
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
              <div className="terminal2-card">

                <h2 className="section-title mb-3" style={{ color: "#005c25" }}>
                  {/* <span className="terminal2-title-icon">
                    <FaPlaneDeparture style={{ color: "#005c25" }} />
                  </span> */}
                  Self Park Keep Your Keys
                </h2>

                <div className="terminal2-item">
                  <div className="terminal2-icon-wrapper">
                    <FaCheck style={{ color: "#005c25" }} />
                  </div>
                  <div>
                    {/* <h5 style={{ color: "#005c25" }}>Park & Ride – Ideal for Longer Trips</h5> */}
                    <p>
                      Many drivers prefer parking their car themselves. You lock the car, park where you want and carry the keys along with you for the entire trip
                      Travelers feel simple yet relaxing.


                    </p>
                  </div>
                </div>

                <div className="terminal2-item">
                  <div className="terminal2-icon-wrapper">
                    <FaCheck style={{ color: "#005c25" }} />
                  </div>
                  <div>
                    {/* <h5 style={{ color: "#005c25" }}>Park & Ride – Ideal for Longer Trips</h5> */}
                    <p>
                      That’s exactly how the Self Park option works.

                      Individuals who prefer car <strong>parking at Heathrow Airport Terminal 2</strong> travel to the Heathrow Elite parking facility, book a spot and put away their car themselves.


                    </p>
                  </div>
                </div>

                <div className="terminal2-item">
                  <div className="terminal2-icon-wrapper">
                    <FaCheck style={{ color: "#005c25" }} />
                  </div>
                  <div>
                    {/* <h5 style={{ color: "#005c25" }}>Park & Ride – Ideal for Longer Trips</h5> */}
                    <p>
                      There is no key handover and no valet driver moving the car. Your vehicle stays in the same place until you return. Travelers often prefer this style of heathrow airport terminal 2 car parking because they remain fully in control of their vehicle.
                    </p>
                  </div>
                </div>




              </div>
            </div>

            {/* RIGHT COLUMN – TRAVEL TIPS */}
            <div className="col-lg-6">
              <div className="terminal2-card">

                <h2 className="section-title mb-4" style={{ color: "#005c25" }}>
                  Park and Ride  Affordable long term Parking
                </h2>

                <div className="terminal2-item">
                  <div className="terminal2-icon-wrapper">
                    <FaCheck style={{ color: "#005c25" }} />
                  </div>
                  <div>
                    {/* <h5 style={{ color: "#005c25" }}>Park & Ride – Ideal for Longer Trips</h5> */}
                    <p>
                      For longer holidays or business trips, heathrow airport long term parking terminal 2 through Park and Ride can be a practical option.

                    </p>
                  </div>
                </div>

                <div className="terminal2-item">
                  <div className="terminal2-icon-wrapper">
                    <FaCheck style={{ color: "#005c25" }} />
                  </div>
                  <div>
                    {/* <h5 style={{ color: "#005c25" }}>Park & Ride – Ideal for Longer Trips</h5> */}
                    <p>
                      The process works like this. At lower prices travelers can simply park comfortably at the Heathrow Airport Terminal 2. Depending on the traffic jam the journey often takes ten to fifteen minutes.


                    </p>
                  </div>
                </div>

                <div className="terminal2-item">
                  <div className="terminal2-icon-wrapper">
                    <FaCheck style={{ color: "#005c25" }} />
                  </div>
                  <div>
                    {/* <h5 style={{ color: "#005c25" }}>Park & Ride – Ideal for Longer Trips</h5> */}
                    <p>
                      The transfer often happens during the daytime. After parking the car, passengers take a shuttle transfer straight to terminal 2. Near the airport drivers assemble at the secure Heathrow Elite Garage near the airport.
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
              <div className="terminal2-card">

                <h2 className="section-title mb-3" style={{ color: "#005c25" }}>
                  {/* <span className="terminal2-title-icon">
                    <FaPlaneDeparture style={{ color: "#005c25" }} />
                  </span> */}
                  Safe parking close to Heathrow Airport
                </h2>

                <div className="terminal2-item">
                  <div className="terminal2-icon-wrapper">
                    <FaCheck style={{ color: "#005c25" }} />
                  </div>
                  <div>
                    {/* <h5 style={{ color: "#005c25" }}>Park & Ride – Ideal for Longer Trips</h5> */}
                    <p>
                      Leaving your car for a few days makes visitors quite apprehensive. That’s completely normal.

                      This is why security is an important part of Heathrow airport terminal 2 car park services offered by Heathrow Elite Parking. The multi storey parking facility includes several safety features designed to protect vehicles while travelers are away.


                    </p>
                  </div>
                </div>

                <div className="terminal2-item">
                  <div className="terminal2-icon-wrapper">
                    <FaCheck style={{ color: "#005c25" }} />
                  </div>
                  <div>
                    {/* <h5 style={{ color: "#005c25" }}>Park & Ride – Ideal for Longer Trips</h5> */}
                    <p>
                      These include: Barrier controlled entry and exit. CCTV monitoring across the parking facility. Well lit parking levels. Professional on site staff and Controlled vehicle access.When you are heading thousands of miles away. Peace of mind really counts. Limited vehicles are authorized by the site and as a result travelers who are using London Heathrow Airport parking terminal 2 may exist their cars knowing that it is still under observation


                    </p>
                  </div>
                </div>





              </div>
            </div>

            {/* RIGHT COLUMN – TRAVEL TIPS */}
            <div className="col-lg-6">
              <div className="terminal2-card">

                <h2 className="section-title mb-4" style={{ color: "#005c25" }}>
                  Travelers From Across the UK Use Heathrow Elite Parking
                </h2>

                <div className="terminal2-item">
                  <div className="terminal2-icon-wrapper">
                    <FaCheck style={{ color: "#005c25" }} />
                  </div>
                  <div>
                    {/* <h5 style={{ color: "#005c25" }}>Park & Ride – Ideal for Longer Trips</h5> */}
                    <p>
                      Not everyone flying from Heathrow actually lives in London. Many travelers drive in from other major cities across the country before catching their flights.

                    </p>
                  </div>
                </div>

                <div className="terminal2-item">
                  <div className="terminal2-icon-wrapper">
                    <FaCheck style={{ color: "#005c25" }} />
                  </div>
                  <div>
                    {/* <h5 style={{ color: "#005c25" }}>Park & Ride – Ideal for Longer Trips</h5> */}
                    <p>
                      Having a secure site at the Heathrow Airport Terminal 2 parking lot improves their arrival. Travelers need to drive for two or three hours just to get to the airpor


                    </p>
                  </div>
                </div>

                <div className="terminal2-item">
                  <div className="terminal2-icon-wrapper">
                    <FaCheck style={{ color: "#005c25" }} />
                  </div>
                  <div>
                    {/* <h5 style={{ color: "#005c25" }}>Park & Ride – Ideal for Longer Trips</h5> */}
                    <p>
                      The transfer often happens during the daytime. After parking the car, passengers take a shuttle transfer straight to terminal 2. Near the airport drivers assemble at the secure Heathrow Elite Garage near the airport.
                    </p>
                  </div>
                </div>


              </div>



            </div>

          </div>
        </div>


      </section>



      {/* ================= CTA ================= */}
      <section className="terminal2-cta">
        <div className="container">
          <div className="terminal2-cta-wrapper text-center">

            <h2 className="terminal2-cta-head" style={{ color: "#005c25" }}>
              Quickly grab your parking at the Terminal 2 of Heathrow Airport
            </h2>

            <p className="terminal2-cta-text">
              Make your airport experience seamless with Elite Parking’s trusted
              Park & Ride services.
              Pre-book your space, enjoy fast transfers, and travel with peace of mind.
            </p>

            <p className="terminal2-cta-text">
              Parking doesn’t need to be another worry. Making a booking with{" "}
              <a
                href="https://www.heathroweliteparking.co.uk/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Heathrow Elite parking
              </a>{" "}
              for Heathrow Airport terminal 2 parking travelers get secure parking, keeping their keys and reaching the terminal at their comfort. So no need to bother about the parking. Start your trip without the usual parking stress.
            </p>

            <p className="terminal2-cta-text">
              Book your airport parking heathrow terminal 2 today and travel knowing one important part of the journey is already taken care of.
            </p>

            <button
              className="cta-button"
              onClick={() => {
                const section = document.getElementById("heroterminal");
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

      <section className="terminal2-faq section-spacing">
        <div className="container">

          <h2 className="section-title text-center mb-5" style={{ color: "#005c25" }}>
            Frequently Asked Questions (FAQs)
          </h2>

          <div className="faq-accordion">

            {/* FAQ 1 */}
            <div className={`faq-box ${openFAQ === 0 ? "active" : ""}`}>
              <div className="faq-question" onClick={() => toggleFAQ(0)}>
                Where does the terminal of Heathrow 2 is positioned?
              </div>

              {openFAQ === 0 && (
                <div className="faq-answer">
                  Terminal 2 has access to the Elizabeth line and Heathrow Express which is located in the heart of Heathrow Airport.
                </div>
              )}
            </div>

            {/* FAQ 2 */}
            <div className={`faq-box ${openFAQ === 1 ? "active" : ""}`}>
              <div className="faq-question" onClick={() => toggleFAQ(1)}>
                Does Terminal 2 allow extended parking?
              </div>

              {openFAQ === 1 && (
                <div className="faq-answer">
                  Yes. Travelers can reserve heathrow airport terminal 2 long term car park options through Heathrow Elite Parking.
                </div>
              )}
            </div>

            {/* FAQ 3 */}
            <div className={`faq-box ${openFAQ === 2 ? "active" : ""}`}>
              <div className="faq-question" onClick={() => toggleFAQ(2)}>
                Can I keep my car keys when parking?
              </div>

              {openFAQ === 2 && (
                <div className="faq-answer">
                  Yes. With the Self Park option customers park their own vehicle and keep their keys during the trip.
                </div>
              )}
            </div>

            {/* FAQ 4 */}
            <div className={`faq-box ${openFAQ === 3 ? "active" : ""}`}>
              <div className="faq-question" onClick={() => toggleFAQ(3)}>
                What is the time frame of the Park and Ride transfer?
              </div>

              {openFAQ === 3 && (
                <div className="faq-answer">
                  Based on traffic, it often takes ten to fifteen minutes for the shuttles to the parking lot to terminal 2.
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

      /* Card wrapper for row layout */
.terminal2-card {
  background: #ffffff;
  padding: 6px;
  border-radius: 16px;
  height: 100%;
}

/* Make columns same height */
.row.section-spacing > div {
  display: flex;
}

.row.section-spacing > div > .terminal2-card {
  width: 100%;
}

/* Responsive */
@media (max-width: 991px) {
  .terminal2-card {
    margin-bottom: 25px;
  }
}
      
      /* Intro Section */
.terminal2-intro {
  margin-bottom: 60px;
}

.terminal2-intro-box {
  background: #f8faff;
  padding: 40px 50px;
  border-radius: 14px;
  max-width: 900px;
  margin: 0 auto;
  text-align: center;
}

.terminal2-intro-title {
  font-size: 30px;
  font-weight: 700;
  color: #062A4F;
  margin-bottom: 18px;
}

.terminal2-intro-text {
  font-size: 17px;
  line-height: 1.8;
  color: #475569;
  margin-bottom: 12px;
}

/* Mobile responsiveness */
@media (max-width: 768px) {
  .terminal2-intro-box {
    padding: 28px 24px;
  }

  .terminal2-intro-title {
    font-size: 24px;
  }

  .terminal2-intro-text {
    font-size: 15px;
  }
}

      /* CTA Section */
.terminal2-cta {
  padding: 80px 0;
  background: #f8faff;
}

.terminal2-cta-wrapper {
  max-width: 720px;
  margin: 0 auto;
}

.terminal2-cta-head {
  font-size: 32px;
  font-weight: 700;
  color: #062A4F;
  margin-bottom: 20px;
}

.terminal2-cta-text {
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

      .terminal2-item {
  display: flex;
  align-items: flex-start;
  gap: 16px;
  margin-bottom: 28px;
}

.terminal2-icon-wrapper {
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

.terminal2-item p {
  margin: 0;
  color: #444;
  line-height: 1.6;
}

      /* About section text */
.terminal2-about-text {
  color: #475569;
  font-size: 16px;
  line-height: 1.8;
  margin-bottom: 18px;
}

/* Title icon next to heading */
.terminal2-title-icon {
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

.terminal2-li-icon {
  min-width: 22px;
  margin-top: 2px;
  color: #062A4F;
  font-size: 18px;
}

      .terminal2-item {
  display: flex;
  align-items: flex-start;
  gap: 16px;
  margin-bottom: 28px;
}

.terminal2-icon-wrapper {
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

.terminal2-item h5 {
  margin-bottom: 8px;
  font-weight: 600;
}

.terminal2-item p {
  margin: 0;
  color: #444;
  line-height: 1.6;
}

      .section-spacing {
  margin-top: 80px;
}

.terminal2-image-wrapper {
  width: 100%;
  height: 100%;
  border-radius: 16px;
  overflow: hidden;
}

.terminal2-image-wrapper img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.terminal2-text-wrapper {
  background: #ffffff;
  padding: 40px;
  border-radius: 16px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

@media (max-width: 991px) {
  .terminal2-image-wrapper {
    height: 400px;
  }
}

        .terminal2-header {
          padding: 18px 0;
        }

        .terminal2-logo {
          max-width: 140px;
          margin-bottom: 20px;
        }

        .terminal2-header h1 {
        color: #062A4F;
          font-size: 28px;
          font-weight: 700;
          margin-bottom: 10px;
        }

        .terminal2-header p {
          color: #64748b;
        }

        .terminal2-content {
          background: #ffffff;
          padding: 0px 0;
        }

        .terminal2-intro {
          max-width: 900px;
          margin: 0 auto 60px auto;
          font-size: 18px;
          line-height: 1.8;
          text-align: center;
        }

        .terminal2-main-image {
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

        .terminal2-list {
          margin-top: 15px;
          padding-left: 20px;
        }

        .terminal2-list li {
          margin-bottom: 10px;
        }

        .terminal2-cta {
          color: black;
          padding: 70px 0;
        }

        .terminal2-cta h2 {
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