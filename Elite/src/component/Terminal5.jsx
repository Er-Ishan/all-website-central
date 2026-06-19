import { Helmet } from "react-helmet";
import { useState } from "react";
import Footer from "./Footer";
import Copyright from "./Copyright";
import NavbarElement from "./NavbarElement";
import Topbar from "../component/Topbar";
import Hero from "../component/HeroTerminal5";

import banner from "/img/terminal5-images.jpeg";
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

export default function Terminal5() {

  const [openFAQ, setOpenFAQ] = useState(0);

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };


  return (
    <>
      <Helmet>
        <title>
          Heathrow Terminal 5 Airport Parking | Heathrow Elite Parking - UK
        </title>

        <meta
          name="description"
          content="Book secure Heathrow Terminal 5 airport parking with Heathrow Elite Parking. Affordable airport parking with convenient terminal access."
        />

        <meta
          name="keywords"
          content="Heathrow terminal 5 parking, Heathrow airport parking terminal 5, Heathrow terminal 5 airport parking, Heathrow elite parking, Heathrow long term parking terminal 5"
        />

        <meta name="robots" content="index, follow" />

        {/* Open Graph */}
        <meta
          property="og:title"
          content="Heathrow Terminal 5 Airport Parking | Heathrow Elite Parking"
        />
        <meta
          property="og:description"
          content="Secure Heathrow Terminal 5 airport parking with affordable prices and convenient terminal access."
        />
        <meta property="og:type" content="website" />

        {/* Canonical URL */}
        <link
          rel="canonical"
          href="https://www.heathroweliteparking.co.uk/heathrow-airport-parking-terminal-5"
        />
      </Helmet>

      {/* <Topbar /> */}
      <NavbarElement />

      {/* ================= PAGE HEADER ================= */}
      <section className="terminal5-header text-center">
        <div className="container">
          {/* <img
            src="https://thumbs.dreamstime.com/b/london-heathrow-airport-logo-airport-stamp-vector-illustration-london-aerodrome-london-heathrow-airport-logo-airport-stamp-vector-149754255.jpg"
            alt="London Heathrow Airport Logo"
            className="terminal5-logo"
          /> */}
        </div>
      </section>

     

      {/* ================= MAIN CONTENT ================= */}
      <section className="terminal5-content">
        <div className="container">

          {/* INTRO */}
          <div className="terminal5-intro">



            <div className="terminal5-intro-full">

              <h1 className="terminal5-intro-title" style={{ color: "#005c25" }}>
                Heathrow Terminal 5 Parking Self-Park & Easy Access
              </h1>


              

            </div>

          </div>

          <Hero />

          {/* INTRO */}
          <div className="terminal5-intro">



            <div className="terminal5-intro-full">

             <p className="terminal5-intro-text">
                Secondly, During the height of travel seasons, it is challenging for passengers looking for secure parking at Heathrow terminal 5 as it is crowded and the parking spots are speedily occupied. Pre-Booking <strong>airport car parking heathrow terminal 5</strong> can not only help passengers by giving pricey charges for the parking but also save from hazards such as getting flight delay.


              </p>

              <p className="terminal5-intro-text">
                Before arriving at the airport, finding an affordable and reliable parking area for your vehicle is essential and can only be done at{" "}

                <a
                  href="https://www.heathroweliteparking.co.uk/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Heathrow Elite parking
                </a>{" "}

                at Heathrow terminal 5 airport.
              </p>

            </div>

          </div>

           

          {/* IMAGE + TEXT SECTION */}
          <div className="row align-items-stretch section-spacing">

            {/* IMAGE SIDE */}
            <div className="col-lg-6 d-flex">
              <div className="terminal5-image-wrapper">
                <img
                  src={banner}
                  alt="Heathrow Terminal 2 Parking Services"
                />
              </div>
            </div>

            {/* TEXT SIDE */}
            <div className="col-lg-6 d-flex">
              <div className="terminal5-text-wrapper">

                <h2 className="section-title mb-4" style={{ color: "#005c25" }}>
                  Making Terminal 5 Parking of Heathrow Airport exceptional
                </h2>

                {/* Item 1 */}
                <div className="terminal5-item">
                  <div className="terminal5-icon-wrapper">
                    <FaCheck style={{ color: "#005c25" }} />
                  </div>
                  <div>
                    {/* <h5 style={{ color: "#005c25" }}>Convenience</h5> */}
                    <p>
                     <strong>Heathrow Airport section terminal 5</strong> has diligent parking as it is occupied with tons of travelers each year. The majority of parking at Heathrow airport are booked in advance due to its increasing demand for terminal 5.

                    </p>
                  </div>
                </div>

                {/* Item 2 */}
                <div className="terminal5-item">
                  <div className="terminal5-icon-wrapper">
                    <FaCheck style={{ color: "#005c25" }} />
                  </div>
                  <div>
                    {/* <h5 style={{ color: "#005c25" }}>Park & Ride – Ideal for Longer Trips</h5> */}
                    <p>
                     Travelers can analyze and pick the most suitable airport parking for themselves if they have done advance booking with Heathrow Elite parking. 

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
              <div className="terminal5-card">

                <h2 className="section-title mb-3" style={{ color: "#005c25" }}>
                  {/* <span className="terminal5-title-icon">
                    <FaPlaneDeparture style={{ color: "#005c25" }} />
                  </span> */}
                  Extended parking at terminal 5 of Heathrow Airport
                </h2>

                <div className="terminal5-item">
                  <div className="terminal5-icon-wrapper">
                    <FaCheck style={{ color: "#005c25" }} />
                  </div>
                  <div>
                    {/* <h5 style={{ color: "#005c25" }}>Park & Ride – Ideal for Longer Trips</h5> */}
                    <p>
                      Comparative to short stay <strong>parking the terminal 5 of Heathrow Airport</strong> offers assured parking and is built for prolonged travel term. Travelers who are planning their vacation for a couple of days or weeks Heathrow Airport parking terminal 5 is the most sensible choice.


                    </p>
                  </div>
                </div>

                <div className="terminal5-item">
                  <div className="terminal5-icon-wrapper">
                    <FaCheck style={{ color: "#005c25" }} />
                  </div>
                  <div>
                    {/* <h5 style={{ color: "#005c25" }}>Park & Ride – Ideal for Longer Trips</h5> */}
                    <p>
                      Many travelers prefer car parking Heathrow airport terminal 5 long term facilities because they offer Secure parking areas, Affordable long-term pricing and  Transferring to the terminal with use of shuttle.

                    </p>
                  </div>
                </div>

                <div className="terminal5-item">
                  <div className="terminal5-icon-wrapper">
                    <FaCheck style={{ color: "#005c25" }} />
                  </div>
                  <div>
                    {/* <h5 style={{ color: "#005c25" }}>Park & Ride – Ideal for Longer Trips</h5> */}
                    <p>
                      planning to go on a business trip or on a long vacation or a business trip. Passengers who have picked <strong>Heathrow terminal 5 airport parking</strong> have made their journey smooth by making a perfect decision.

                    </p>
                  </div>
                </div>




              </div>
            </div>

            {/* RIGHT COLUMN – TRAVEL TIPS */}
            <div className="col-lg-6">
              <div className="terminal5-card">

                <h2 className="section-title mb-4" style={{ color: "#005c25" }}>
                  Terminal 5 of Heathrow Airport longer-term assistance
                </h2>

                <div className="terminal5-item">
                  <div className="terminal5-icon-wrapper">
                    <FaCheck style={{ color: "#005c25" }} />
                  </div>
                  <div>
                    {/* <h5 style={{ color: "#005c25" }}>Park & Ride – Ideal for Longer Trips</h5> */}
                    <p>
                      Staying in the short-stay areas at <strong>Heathrow Airport Terminal 5</strong> works well for quick visits yet longer stays tend to add up fast on your bill. Short-term parking tends to fit just right.
                    </p>
                  </div>
                </div>

                <div className="terminal5-item">
                  <div className="terminal5-icon-wrapper">
                    <FaCheck style={{ color: "#005c25" }} />
                  </div>
                  <div>
                    {/* <h5 style={{ color: "#005c25" }}>Park & Ride – Ideal for Longer Trips</h5> */}
                    <p>
                      The moment you step out of your car in the short-stay lot, the terminal looms close - only a brief walk away. Right next to the main building, this spot keeps things smooth.  Reaching departures feels effortless. Time slips by slowly here, so rushing is not really required.


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
              <div className="terminal5-card">

                <h2 className="section-title mb-3" style={{ color: "#005c25" }}>
                  {/* <span className="terminal5-title-icon">
                    <FaPlaneDeparture style={{ color: "#005c25" }} />
                  </span> */}
                  Self-Park – Heathrow Airport Terminal 5

                </h2>

                <div className="terminal5-item">
                  <div className="terminal5-icon-wrapper">
                    <FaCheck style={{ color: "#005c25" }} />
                  </div>
                  <div>
                    {/* <h5 style={{ color: "#005c25" }}>Park & Ride – Ideal for Longer Trips</h5> */}
                    <p>
                      The services offered by <strong>Heathrow Elite parking</strong> visitors easily drive to the car park spot, park their automobile themselves and keep their keys with them for the whole journey.


                    </p>
                  </div>
                </div>

                <div className="terminal5-item">
                  <div className="terminal5-icon-wrapper">
                    <FaCheck style={{ color: "#005c25" }} />
                  </div>
                  <div>
                    {/* <h5 style={{ color: "#005c25" }}>Park & Ride – Ideal for Longer Trips</h5> */}
                    <p>
                      Self-park is one of the easiest and comfortable parking options. This alternative provides clarity and versatility which is appreciated by the majority of the travelers this makes the airport experience more efficient and hassle free.



                    </p>
                  </div>
                </div>

                <div className="terminal5-item">
                  <div className="terminal5-icon-wrapper">
                    <FaCheck style={{ color: "#005c25" }} />
                  </div>
                  <div>
                    {/* <h5 style={{ color: "#005c25" }}>Park & Ride – Ideal for Longer Trips</h5> */}
                    <p>
                      Individuals who want full peace of mind about their car prioritize secure parking at Heathrow terminal 5 as it is the most preferred choice for passengers.
                      

                    </p>
                  </div>
                </div>

                <div className="terminal5-item">
                  <div className="terminal5-icon-wrapper">
                    <FaCheck style={{ color: "#005c25" }} />
                  </div>
                  <div>
                    {/* <h5 style={{ color: "#005c25" }}>Park & Ride – Ideal for Longer Trips</h5> */}
                    <p>
                      Self-park also allows travelers to enjoy the best <strong>airport parking Heathrow terminal 5</strong> convenience without handing over their car keys.

                    </p>
                  </div>
                </div>




              </div>
            </div>

            {/* RIGHT COLUMN – TRAVEL TIPS */}
            <div className="col-lg-6">
              <div className="terminal5-card">

                <h2 className="section-title mb-4" style={{ color: "#005c25" }}>
                  Park and Ride – Heathrow Airport Terminal 5

                </h2>

                <div className="terminal5-item">
                  <div className="terminal5-icon-wrapper">
                    <FaCheck style={{ color: "#005c25" }} />
                  </div>
                  <div>
                    {/* <h5 style={{ color: "#005c25" }}>Park & Ride – Ideal for Longer Trips</h5> */}
                    <p>
                      <a
                        href="https://www.heathroweliteparking.co.uk/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Park and ride services
                      </a>{" "}
                       offer a reliable option as prices stay low; access remains steady through frequent transfers. Rather than hand over big cash right at the terminal, lots go for distant lots where the shuttle collects them.
                    </p>
                  </div>
                </div>

                <div className="terminal5-item">
                  <div className="terminal5-icon-wrapper">
                    <FaCheck style={{ color: "#005c25" }} />
                  </div>
                  <div>
                    {/* <h5 style={{ color: "#005c25" }}>Park & Ride – Ideal for Longer Trips</h5> */}
                    <p>
                      Leaving your vehicle close to <strong>Heathrow Terminal 5</strong> usually involves locked parking spaces well outside the airport itself. The shuttle carries travelers straight to the gate. The ride takes just minutes. Security staff monitor vehicles throughout each stay. Faster than most expect, transfers hover near ten to fifteen minutes - ideal when budget matters but safety still counts for those leaving cars at Heathrow’s Terminal 5.



                    </p>
                  </div>
                </div>

                <div className="terminal5-item">
                  <div className="terminal5-icon-wrapper">
                    <FaCheck style={{ color: "#005c25" }} />
                  </div>
                  <div>
                    {/* <h5 style={{ color: "#005c25" }}>Park & Ride – Ideal for Longer Trips</h5> */}
                    <p>
                      A spot waits where wheels meet sky at Terminal 5. Book it ahead so time doesn’t slip while bags pile by the curbside. Spaces fill fast near gateways like these. Your car stays put when plans move quickly. Arrival stress drops once ground is claimed before takeoff. By securing a place in Heathrow Terminal 5 for your car before you get there, there's no doubt that your car is secure when you're away. Get organized beforehand, and getting out is smoother.


                    </p>
                  </div>
                </div>


              </div>



            </div>

          </div>

        </div>


      </section>

      {/* ================= CTA ================= */}
      <section className="terminal5-cta">
        <div className="container">
          <div className="terminal5-cta-wrapper text-center">

            <h2 className="terminal5-cta-head" style={{ color: "#005c25" }}>
              Reserve Your Heathrow Terminal 5 Parking Now

            </h2>

            <p className="terminal5-cta-text">
              A spot waits where wheels meet sky at Terminal 5. Book it ahead so time doesn’t slip while bags pile by the curbside. Spaces fill fast near gateways like these. Your car stays put when plans move quickly. Arrival stress drops once ground is claimed before takeoff. By securing a place in <strong>Heathrow Terminal 5</strong> for your car before you get there, there's no doubt that your car is secure when you're away. Get organized beforehand, and getting out is smoother.

            </p>

            <p className="terminal5-cta-text">
              <strong>Parking at Terminal 5?</strong> Book now for a smooth beginning to your trip from Heathrow. Worry less when you lock in your spot ahead of time. Travel calmly knowing your ride is sorted before takeoff.

            </p>

            <button
              className="cta-button"
              onClick={() => {
                const section = document.getElementById("heroterminal5");
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
      <section className="terminal5-faq section-spacing">
        <div className="container">

          <h2 className="section-title text-center mb-5" style={{ color: "#005c25" }}>
            Frequently Asked Questions (FAQs)
          </h2>

          <div className="faq-accordion">

            {/* FAQ 1 */}
            <div className={`faq-box ${openFAQ === 0 ? "active" : ""}`}>
              <div className="faq-question" onClick={() => toggleFAQ(0)}>
                Parking Rates at Heathrow Terminal 5?

              </div>

              {openFAQ === 0 && (
                <div className="faq-answer">
                  Parking costs shift based on the kind of spot you pick. A longer wait on the lot often means easier savings compared to brief stops. Cost adds up faster when time is tight nearby.

                </div>
              )}
            </div>

            {/* FAQ 2 */}
            <div className={`faq-box ${openFAQ === 1 ? "active" : ""}`}>
              <div className="faq-question" onClick={() => toggleFAQ(1)}>
                Is it easy to reach extended stay parking near Terminal 5?



              </div>

              {openFAQ === 1 && (
                <div className="faq-answer">
                  Folks heading out on longer journeys might find Terminal 5 suits their needs just fine. Shuttle vans handle that leg of the trip.
                </div>
              )}
            </div>

            {/* FAQ 3 */}
            <div className={`faq-box ${openFAQ === 2 ? "active" : ""}`}>
              <div className="faq-question" onClick={() => toggleFAQ(2)}>
                Are cheap parking options available at Terminal 5?



              </div>

              {openFAQ === 2 && (
                <div className="faq-answer">
                  With online booking feasibility, travelers can search for cheap parking options online and compare available options.




                </div>
              )}
            </div>

            {/* FAQ 4 */}
            <div className={`faq-box ${openFAQ === 3 ? "active" : ""}`}>
              <div className="faq-question" onClick={() => toggleFAQ(3)}>
                Heathrow Terminal 5 Online Booking Availability?

              </div>

              {openFAQ === 3 && (
                <div className="faq-answer">
                  Yes, finding a place to park can be done from home, using Heathrow Elite Parking to lock in your spot ahead of time.
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
.terminal5-faq {
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
.terminal5-card {
  background: #ffffff;
  padding: 6px;
  border-radius: 16px;
  height: 100%;
}

/* Make columns same height */
.row.section-spacing > div {
  display: flex;
}

.row.section-spacing > div > .terminal5-card {
  width: 100%;
}

/* Responsive */
@media (max-width: 991px) {
  .terminal5-card {
    margin-bottom: 25px;
  }
}
      
      /* Intro Section */
.terminal5-intro {
  margin-bottom: 60px;
}

.terminal5-intro-box {
  background: #f8faff;
  padding: 40px 50px;
  border-radius: 14px;
  max-width: 900px;
  margin: 0 auto;
  text-align: center;
}

.terminal5-intro-title {
  font-size: 30px;
  font-weight: 700;
  color: #062A4F;
  margin-bottom: 18px;
}

.terminal5-intro-text {
  font-size: 17px;
  line-height: 1.8;
  color: #475569;
  margin-bottom: 12px;
}

/* Mobile responsiveness */
@media (max-width: 768px) {
  .terminal5-intro-box {
    padding: 28px 24px;
  }

  .terminal5-intro-title {
    font-size: 24px;
  }

  .terminal5-intro-text {
    font-size: 15px;
  }
}

      /* CTA Section */
.terminal5-cta {
  padding: 80px 0;
  background: #f8faff;
}

.terminal5-cta-wrapper {
  max-width: 720px;
  margin: 0 auto;
}

.terminal5-cta-head {
  font-size: 32px;
  font-weight: 700;
  color: #062A4F;
  margin-bottom: 20px;
}

.terminal5-cta-text {
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

      .terminal5-item {
  display: flex;
  align-items: flex-start;
  gap: 16px;
  margin-bottom: 28px;
}

.terminal5-icon-wrapper {
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

.terminal5-item p {
  margin: 0;
  color: #444;
  line-height: 1.6;
}

      /* About section text */
.terminal5-about-text {
  color: #475569;
  font-size: 16px;
  line-height: 1.8;
  margin-bottom: 18px;
}

/* Title icon next to heading */
.terminal5-title-icon {
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

.terminal5-li-icon {
  min-width: 22px;
  margin-top: 2px;
  color: #062A4F;
  font-size: 18px;
}

      .terminal5-item {
  display: flex;
  align-items: flex-start;
  gap: 16px;
  margin-bottom: 28px;
}

.terminal5-icon-wrapper {
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

.terminal5-item h5 {
  margin-bottom: 8px;
  font-weight: 600;
}

.terminal5-item p {
  margin: 0;
  color: #444;
  line-height: 1.6;
}

      .section-spacing {
  margin-top: 80px;
}

.terminal5-image-wrapper {
  width: 100%;
  height: 100%;
  border-radius: 16px;
  overflow: hidden;
}

.terminal5-image-wrapper img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.terminal5-text-wrapper {
  background: #ffffff;
  padding: 40px;
  border-radius: 16px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

@media (max-width: 991px) {
  .terminal5-image-wrapper {
    height: 400px;
  }
}

        .terminal5-header {
          padding: 18px 0;
        }

        .terminal5-logo {
          max-width: 140px;
          margin-bottom: 20px;
        }

        .terminal5-header h1 {
        color: #062A4F;
          font-size: 28px;
          font-weight: 700;
          margin-bottom: 10px;
        }

        .terminal5-header p {
          color: #64748b;
        }

        .terminal5-content {
          background: #ffffff;
          padding: 0px 0;
        }

        .terminal5-intro {
          max-width: 900px;
          margin: 0 auto 60px auto;
          font-size: 18px;
          line-height: 1.8;
          text-align: center;
        }

        .terminal5-main-image {
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

        .terminal5-list {
          margin-top: 15px;
          padding-left: 20px;
        }

        .terminal5-list li {
          margin-bottom: 10px;
        }

        .terminal5-cta {
          color: black;
          padding: 70px 0;
        }

        .terminal5-cta h2 {
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