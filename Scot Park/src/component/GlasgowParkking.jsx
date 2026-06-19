import Footer from "./Footer";
import Copyright from "./Copyright";
import NavbarElement from "./NavbarElement";
import Topbar from "../component/Topbar";
import Hero from "../component/MainHeroTerminal";

import mainterminalImage from "../assets/glasgow-airport.png";
import {
  FaMapMarkerAlt,
  FaBus,
  FaHandshake,
  FaCheckCircle, FaPlaneDeparture,
  FaPoundSign,
  FaUserCheck, FaInfoCircle, FaTrain,
  FaExclamationTriangle,
  FaArrowRight
} from "react-icons/fa";

export default function GlasgowParkking() {
  return (
    <>
      {/* <Topbar /> */}
      <NavbarElement />
      <Hero />

      {/* ================= PAGE HEADER ================= */}
      <section className="mainterminal-header text-center">
        <div className="container">
          <h1>
            Glasgow Airport Parking: A Simple, Honest Way to Park at Glasgow
          </h1>

          <p>
            Known for its efficiency, modern facilities, and excellent connectivity, Glasgow Airport is a key gateway for both business and leisure travellers visiting Scotland.
          </p>
        </div>
      </section>





      {/* IMAGE SECTION */}
      <section className="mainterminal-image-section">
        <div className="container">
          <div className="row align-items-center section-spacing">

            <div className="col-lg-6">
              <div className="mainterminal-image-wrapper">

                <img
                  src={mainterminalImage}
                  alt="Glasgow Main Terminal Parking"
                  onError={(e) => {
                    e.target.style.display = "none";
                    e.target.parentElement.innerHTML =
                      "<div class='image-placeholder'>Coming Soon</div>";
                  }}
                />

              </div>
            </div>

            <div className="col-lg-6">
              <div className="mainterminal-text-wrapper">

                <h2 className="section-title text-center">
                  Glasgow Airport – Everything You Need to Know
                </h2>

                <p className="mainterminal-about-text text-center">
                  Glasgow Airport is one of Scotland’s busiest and most important international airports, located just 8 miles west of Glasgow city centre. It serves millions of passengers every year, offering a wide range of domestic and international flights across Europe, North America, and beyond.
                </p>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ================= MAIN CONTENT ================= */}
      <section className="mainterminal-content">
        <div className="container">


          {/* ABOUT + TRAVEL TIPS ROW */}
          <div className="row section-spacing">

            {/* LEFT COLUMN – ABOUT */}
            <div className="col-lg-6">
              <div className="mainterminal-card">

                <h2 className="section-title mb-3">
                  <span className="mainterminal-title-icon">
                    <FaPlaneDeparture />
                  </span>
                  Overview of Glasgow Airport
                </h2>

                <p className="mainterminal-about-text">
                  Glasgow Airport is one of Scotland’s busiest and most important international airports, serving millions of passengers each year. Located just 8 miles west of Glasgow city centre, it acts as a major gateway for travellers visiting Scotland for both business and leisure purposes. Its strategic location and wide range of services make it a key part of the UK’s aviation network.

                </p>
                <p className="mainterminal-about-text">
                  The airport is well known for its efficiency and modern infrastructure, offering a smooth and well-organised experience from arrival to departure. Over the years, Glasgow Airport has continued to evolve, investing in improved facilities and passenger services to meet growing demand. This commitment ensures that travellers benefit from a reliable and comfortable journey every time they fly.
                </p>



              </div>
            </div>

            {/* RIGHT COLUMN – TRAVEL TIPS */}
            <div className="col-lg-6">
              <div className="mainterminal-card">

                <h2 className="section-title mb-3">
                  <span className="mainterminal-title-icon">
                    <FaPlaneDeparture />
                  </span>
                  Location & Accessibility
                </h2>

                <p className="mainterminal-about-text">
                  Glasgow Airport benefits from excellent connectivity, making it easily accessible from various parts of Scotland and the UK. Its proximity to the M8 motorway allows travellers to reach the airport quickly by car, whether they are coming from Glasgow city centre or surrounding regions. Clear signage and well-maintained roads ensure a straightforward and stress-free journey.
                </p>

                <p className="mainterminal-about-text">
                  Public transport options are also widely available, providing convenient alternatives to driving. Regular bus services operate between the airport and key locations, including Glasgow city centre, offering reliable and affordable travel for passengers. Taxi services are available 24/7, ensuring that travellers can reach their destination comfortably at any time of day or night.
                </p>

              </div>
            </div>

            {/* LEFT COLUMN – ABOUT */}
            <div className="col-lg-6">
              <div className="mainterminal-card">

                <h2 className="section-title mb-3">
                  <span className="mainterminal-title-icon">
                    <FaPlaneDeparture />
                  </span>
                  Terminals & Facilities
                </h2>

                <p className="mainterminal-about-text">
                  Glasgow Airport operates from a single, well-designed terminal that is structured to provide an efficient and user-friendly experience. The layout is simple and easy to navigate, helping passengers move quickly through check-in, security, and boarding processes. Modern technology and well-trained staff further enhance the overall efficiency of the airport.
                </p>

                <p className="mainterminal-about-text">
                  Inside the terminal, travellers have access to a wide range of facilities designed to meet their needs. From duty-free shopping and retail outlets to restaurants, cafés, and bars, there are plenty of options to relax and enjoy before a flight. Comfortable seating areas and free Wi-Fi ensure that passengers can stay connected and comfortable throughout their time at the airport.

                </p>

              </div>
            </div>

            {/* RIGHT COLUMN – TRAVEL TIPS */}
            <div className="col-lg-6">
              <div className="mainterminal-card">

                <h2 className="section-title mb-3">
                  <span className="mainterminal-title-icon">
                    <FaPlaneDeparture />
                  </span>
                  Airlines & Destinations
                </h2>

                <p className="mainterminal-about-text">
                  Glasgow Airport is served by a variety of leading airlines, offering connections to a wide range of destinations across the UK, Europe, and international locations. Airlines such as easyJet, British Airways, Ryanair, and Jet2 operate regular flights, providing flexibility and choice for passengers.
                </p>

                <p className="mainterminal-about-text">
                  Domestic routes connect Glasgow to major UK cities including London, Manchester, and Birmingham, making it a convenient option for business travel. In addition, a wide selection of European destinations such as Spain, Portugal, Italy, and Greece are available, particularly popular among holiday travellers. The airport also offers seasonal long-haul flights to destinations such as Dubai, New York, and Toronto, expanding its global reach

                </p>

              </div>
            </div>
          </div>

          {/* DROP OFF FEES */}
          <div className="section-spacing">

            <h2 className="section-title mb-4 text-center">
              Why Choose Glasgow Airport??
            </h2>

            <div className="mainterminal-item text-center">
              {/* <div className="mainterminal-icon-wrapper">
                <FaExclamationTriangle />
              </div> */}
              <div>
                <p>
                  Glasgow Airport stands out as a preferred choice for travellers due to its combination of convenience, efficiency, and high-quality services. Its close proximity to the city centre makes it easily accessible, while its well-organised layout ensures a smooth travel experience. The airport is designed to minimise stress and maximise comfort for passengers.
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ================= FAQ SECTION ================= */}
      <section className="mainterminal-faq section-spacing">
        <div className="container">

          <h2 className="section-title text-center mb-5">
            Frequently Asked Questions
          </h2>

          <div className="mainterminal-faq-accordion">

            <details className="mainterminal-faq-box" open>
              <summary>Where is Glasgow Airport located?</summary>
              <p>
                Glasgow Airport is located approximately 8 miles west of Glasgow city centre. It is easily accessible via the M8 motorway, making it convenient for travellers arriving by car, taxi, or public transport.
              </p>
            </details>

            <details className="mainterminal-faq-box">
              <summary>How early should I arrive at Glasgow Airport?</summary>
              <p>
                It is recommended to arrive at least 2 to 3 hours before your flight, especially for international departures. This allows enough time for check-in, security checks, and boarding without unnecessary stress.
              </p>
            </details>

            <details className="mainterminal-faq-box">
              <summary>What parking options are available at Glasgow Airport?</summary>
              <p>
                Glasgow Airport offers a range of parking options, including short stay, long stay, meet and greet, and park & ride services. These options are designed to suit different budgets and travel durations, with secure facilities and easy access to the terminal.
              </p>
            </details>

            <details className="mainterminal-faq-box">
              <summary>Is parking at Glasgow Airport secure?</summary>
              <p>
                Yes, all official parking areas at Glasgow Airport are equipped with CCTV surveillance, secure barriers, and regular patrols. This ensures that your vehicle remains safe while you are travelling.
              </p>
            </details>

          </div>

        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="mainterminal-cta">
        <div className="container">
          <div className="mainterminal-cta-wrapper text-center">

            <h2 className="mainterminal-cta-head">
              Book Your Glasgow Airport Parking Today
            </h2>

            <p className="mainterminal-cta-text">
              Planning your journey from <strong>Glasgow Airport</strong>? Secure your parking in advance to enjoy a smooth, stress-free start to your trip. Pre-booking not only guarantees your space but also helps you find the most affordable and convenient parking options available near the terminal.
            </p>

            <p className="mainterminal-cta-text">
              Whether you need <strong>short stay parking</strong> for quick visits, <strong>long stay parking</strong> for extended trips, or a reliable <strong>park and ride service</strong>, SCOT PARK offers flexible solutions tailored to your needs. With secure facilities and easy access to the terminal, you can travel with complete peace of mind.
            </p>

            <p className="mainterminal-cta-text">
              Compare prices, choose your preferred parking option, and reserve your space in just a few clicks. Start your journey the right way with safe, affordable, and convenient airport parking.
            </p>

            <div className="mainterminal-contact-row">

              <div className="mainterminal-contact-box">
                <FaInfoCircle className="contact-icon" />
                <div>
                  <p>Customer Support: 07348186412</p>
                </div>
              </div>

              <div className="mainterminal-contact-box">
                <FaMapMarkerAlt className="contact-icon" />
                <div>
                  <p>28-30 Inchinnan Road, Paisley, PA3 2PR</p>
                </div>
              </div>

            </div>

            <button
              className="cta-button"
              onClick={() => {
                const section = document.getElementById("mainhero");
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

      <Footer />
      <Copyright />

      {/* ================= STYLES ================= */}
      <style jsx>{`

      /* FAQ Section */
.mainterminal-faq {
  padding: 70px 0;
}

/* FAQ Grid Layout */


/* FAQ Item */


.faq-item:hover {
  transform: translateY(-3px);
}

/* Question */


/* Answer */
/* FAQ Section */
.mainterminal-faq{
  padding:70px 0;
}

/* Accordion Wrapper */
.mainterminal-faq-accordion{
  max-width:900px;
  margin:0 auto;
  display:flex;
  flex-direction:column;
  gap:16px;
}

/* FAQ Box */
.mainterminal-faq-box{
  background:#f1f5f9;
  border-radius:12px;
  overflow:hidden;
}

/* Question */
.mainterminal-faq-box summary{
  list-style:none;
  padding:18px 22px;
  font-size:16px;
  font-weight:600;
  color: #0A1A3A;
  cursor:pointer;
}

/* Remove default arrow */
.mainterminal-faq-box summary::-webkit-details-marker{
  display:none;
}

/* Answer */
.mainterminal-faq-box p{
  padding:18px 22px;
  font-size:15px;
  line-height:1.6;
  color:#475569;
  margin:0;
  background:white;
}

/* Active Question */
.mainterminal-faq-box[open] summary{
  background: #0A1A3A;
  color:white;
  border-radius:12px 12px 0 0;
}

/* Mobile */
@media (max-width: 768px) {
  .mainterminal-faq-grid {
    grid-template-columns: 1fr;
  }
}

      /* Contact row layout */
.mainterminal-contact-row {
  display: flex;
  gap: 20px;
  margin: 30px 0;
  flex-wrap: wrap;
}

/* Contact boxes */
.mainterminal-contact-box {
  flex: 1;
  min-width: 260px;
  max-width: 349px;
  background: #ffffff;
  border-radius: 12px;
  padding: 18px 22px;
  display: flex;
  align-items: center;
  gap: 12px;
  box-shadow: 0 6px 18px rgba(0,0,0,0.06);
}

/* Icon */
.contact-icon {
  font-size: 22px;
  color: #0A1A3A;
  flex-shrink: 0;
}

/* Text */
.mainterminal-contact-box strong {
  display: block;
  font-size: 14px;
  color: #64748b;
}

.mainterminal-contact-box p {
  margin: 0;
  font-weight: 600;
  color: #1e293b;
}

      /* Card wrapper for row layout */
.mainterminal-card {
  background: #ffffff;
  padding: 6px;
  border-radius: 16px;
  height: 100%;
}

/* Make columns same height */
.row.section-spacing > div {
  display: flex;
}

.row.section-spacing > div > .mainterminal-card {
  width: 100%;
}

/* Responsive */
@media (max-width: 991px) {
  .mainterminal-card {
    margin-bottom: 25px;
  }
}
      
      /* Intro Section */
.mainterminal-intro {
  margin-bottom: 60px;
}

.mainterminal-intro-box {
  background: #f8faff;
  padding: 40px 50px;
  border-radius: 14px;
  max-width: 900px;
  margin: 0 auto;
  text-align: center;
}

.mainterminal-intro-title {
  font-size: 30px;
  font-weight: 700;
  color: #0A1A3A;
  margin-bottom: 18px;
}

.mainterminal-intro-text {
  font-size: 17px;
  line-height: 1.8;
  color: #475569;
  margin-bottom: 12px;
}

/* Mobile responsiveness */
@media (max-width: 768px) {
  .mainterminal-intro-box {
    padding: 28px 24px;
  }

  .mainterminal-intro-title {
    font-size: 24px;
  }

  .mainterminal-intro-text {
    font-size: 15px;
  }
}

      /* CTA Section */
.mainterminal-cta {
  padding: 80px 0;
  background: #f8faff;
}

.mainterminal-cta-wrapper {
  max-width: 720px;
  margin: 0 auto;
}

.mainterminal-cta-head {
  font-size: 32px;
  font-weight: 700;
  color: #0A1A3A;
  margin-bottom: 20px;
}

.mainterminal-cta-text {
  font-size: 17px;
  color: #475569;
  line-height: 1.7;
  margin-bottom: 30px;
}

/* Button */
.cta-button {
  background: var(--bs-primary);
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

      .mainterminal-item {
  display: flex;
  align-items: flex-start;
  gap: 16px;
  margin-bottom: 28px;
}

.mainterminal-icon-wrapper {
  min-width: 40px;
  height: 40px;
  background: #eef3ff;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #0A1A3A;
  font-size: 18px;
  flex-shrink: 0;
}

.mainterminal-item p {
  margin: 0;
  color: #444;
  line-height: 1.6;
}

      /* About section text */
.mainterminal-about-text {
  color: #475569;
  font-size: 16px;
  line-height: 1.8;
  margin-bottom: 18px;
}

/* Title icon next to heading */
.mainterminal-title-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  margin-right: 10px;
  border-radius: 10px;
  background: #eef3ff;
  color: #0A1A3A;
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
  align-items: center;
  gap: 12px;
  margin-bottom: 14px;
  color: #334155;
  font-size: 16px;
  line-height: 1.6;
}

.mainterminal-li-icon {
  width: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #0A1A3A;
  font-size: 18px;
  flex-shrink: 0;
}

      .mainterminal-item {
  display: flex;
  align-items: flex-start;
  gap: 16px;
  margin-bottom: 28px;
}

.mainterminal-icon-wrapper {
  min-width: 40px;
  height: 40px;
  background: #eef3ff;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #0A1A3A;
  font-size: 18px;
  flex-shrink: 0;
}

.mainterminal-item h5 {
  margin-bottom: 8px;
  font-weight: 600;
}

.mainterminal-item p {
  margin: 0;
  color: #444;
  line-height: 1.6;
}

      .section-spacing {
  margin-top: 14px;
}

.mainterminal-image-wrapper {
  width: 100%;
  height: 100%;
  border-radius: 16px;
  overflow: hidden;
}

.mainterminal-image-wrapper img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.mainterminal-text-wrapper {
  background: #ffffff;
  padding: 40px;
  border-radius: 16px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

@media (max-width: 991px) {
  .mainterminal-image-wrapper {
    height: 400px;
  }
}

        .mainterminal-header {
          padding: 3px 0;
        }

        .mainterminal-logo {
          max-width: 140px;
          margin-bottom: 20px;
        }

        .mainterminal-header h1 {
        color: #0A1A3A;
          font-size: 28px;
          font-weight: 700;
          margin-bottom: 10px;
        }

        .mainterminal-header p {
          color: #64748b;
        }

        .mainterminal-content {
          background: #ffffff;
          padding: 0px 0;
        }

        .mainterminal-intro {
          max-width: 900px;
          margin: 0 auto 60px auto;
          font-size: 18px;
          line-height: 1.8;
          text-align: center;
        }

        .mainterminal-main-image {
          width: 100%;
          border-radius: 12px;
        }

        .section-title {
          font-size: 24px;
          font-weight: 700;
          margin-bottom: 20px;
          color: #0A1A3A;
        }

        .section-spacing {
          margin-top: 14px;
        }

        .mainterminal-list {
          margin-top: 15px;
          padding-left: 20px;
        }

        .mainterminal-list li {
          margin-bottom: 10px;
        }

        .mainterminal-cta {
          color: black;
          padding: 70px 0;
        }

        .mainterminal-cta h2 {
          font-weight: 700;
          color: #0A1A3A;
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
          background: var(--bs-secondary);
        }

      `}</style>
    </>
  );
}