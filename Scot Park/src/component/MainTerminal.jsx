import Footer from "./Footer";
import Copyright from "./Copyright";
import NavbarElement from "./NavbarElement";
import Topbar from "../component/Topbar";
import Hero from "../component/MainHeroTerminal";

import mainterminalImage from "../assets/latest-bg.png";
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

export default function mainterminal() {
  return (
    <>
      {/* <Topbar /> */}
      <NavbarElement />
      <Hero />

      {/* ================= PAGE HEADER ================= */}
      <section className="mainterminal-header text-center">
        <div className="container">
          <h1>
            Airport Parking Glasgow Main Terminal with SCOT Parking
          </h1>
          <p>
            As Glasgow airport Main Terminal parking is heaving with millions of travellers each day, finding a secure parking location closer to the terminal can be a bit perplexing. Therefore, booking in advance will not only lead to cost-effective rates but will also keep your vehicle locked down and monitored at Glasgow Main Terminal airport car parking.
          </p>
          <p>
            Whether you need budget- friendly long term parking for holiday or convenient short breaks, the parking box helps travellers to analyse and pick the most appropriate <strong>Glasgow Main Terminal airport parking</strong>.
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
                  Glasgow Main Terminal Parking Services
                </h2>

                <p className="mainterminal-about-text text-center">
                  SCOT Parking helps travellers find reliable and secure parking
                  services at Glasgow Airport Main Terminal. Whether you choose
                  Park & Ride or Meet & Greet parking, you can enjoy affordable
                  prices, secure facilities, and easy airport access.
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
                  Glasgow Airport Main Terminal long-term Parking
                </h2>

                <p className="mainterminal-about-text">
                  The nearest option to the terminal building is Glasgow airport Main Terminal long-term parking, if you are leaving someone to the destination or planning a short term trip. The benefit of Glasgow airport Main Terminal parking long term not only provides quick access but also lets the drivers walk a few steps to the drop-off zone.

                </p>
                <p className="mainterminal-about-text">
                  A lot of visitors shop around for the best <strong>Glasgow Main Terminal airport parking</strong> option before arriving because continuous parking at Glasgow Main Terminal is more practical; however, it can lead to higher prices if your duration extended
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
                  Glasgow Airport Main Terminal long term Car Park
                </h2>

                <p className="mainterminal-about-text">
                  Glasgow Airport long term car park at Main Terminal can be the most feasible and affordable option, if travelers are planning for a long haul stay. As the terminal is situated at a distance from the Glasgow Airport Main Terminal long term car park, the advantage of free shuttle buses can provide a best way to transfer passengers directly to the departure.
                </p>

                <p className="mainterminal-about-text">
                  Glasgow Airport parking Main Terminal for long term provides the best option as it offers affordable rates as compared to the longer parking, making it favourable for passengers, and secondly, <strong>Glasgow Airport long term parking Main Terminal</strong> is beneficial if you plan for extended holidays or business trips, as it provides a secure car park.
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
                  Meet and Greet – Glasgow Airport Main Terminal
                </h2>

                <p className="mainterminal-about-text">
                  Meet and greet services provide the ideal possibilities for families, corporate travelers and anyone who has a lot of luggage when it comes to parking at Glasgow Main Terminal. This is because your car is picked up at the terminal when you return, saving time.
                </p>

                <p className="mainterminal-about-text">
                  Travellers who want a simple and relaxing experience, meet and greet services will be ideal at the airport terminal . Your car will be collected and parked by the professional driver at <strong>Main Terminal airport parking</strong>.

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
                  Park and Ride – Glasgow Airport Main Terminal
                </h2>

                <p className="mainterminal-about-text">
                  Tourists who  prefer cheaper parking at the <strong>Airport, Main Terminal park</strong> and ride is the other popular option. This option allows you to park at Glasgow airport  parking, which is monitored and secured and then you can travel to the airport using the shuttle buses.
                </p>

                <p className="mainterminal-about-text">
                  Main Terminal Airport parking is mostly favoured by tourists as it has lower parking rates and it also ensures that you reach the airport safely. Secondly, this  is the best option if you are looking for budget friendly parking.

                </p>

              </div>
            </div>
          </div>

          {/* DROP OFF FEES */}
          <div className="section-spacing">

            <h2 className="section-title mb-4 text-center">
              Parking Charges at Glasgow Airport Main Terminal
            </h2>

            <div className="mainterminal-item text-center">
              {/* <div className="mainterminal-icon-wrapper">
                <FaExclamationTriangle />
              </div> */}
              <div>
                <p>
                  The period of how long the car is parked at Glasgow Airport Main Terminal entirely depends on the parking charges and the type of parking facility being opted. Though for longer trips the charging prices are cheaper, higher hourly charges apply to longer periods.

                </p>
                <p>
                  Passengers can check parking charges and get discounted prices by booking online after arriving at the airport.

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
              <summary>At Glasgow Airport Main Terminal, how much rates are being offered?</summary>
              <p>
                There are a number of options available at <strong>Main Terminal Glasgow Airport</strong>, depending on your choices of parking, whether it's a park and ride, longer trips and extended stay.
              </p>
            </details>

            <details className="mainterminal-faq-box">
              <summary>Does Glasgow Main Terminal offer low cost parking ?</summary>
              <p>
                Yes, in order to obtain cheap pricing at <strong>Glasgow Main Terminal</strong>, it is possible to book a long term parking spot in advance or a park and ride service.
              </p>
            </details>

            <details className="mainterminal-faq-box">
              <summary>Where is the Glasgow Airport Main Terminal long term car park?</summary>
              <p>
                There are also the options of shuttle buses that will take you directly to the departure point from the heat throw <strong>Airport Main Terminal</strong> long term car park which is nearest to the terminal.
              </p>
            </details>

            <details className="mainterminal-faq-box">
              <summary>Can I book Glasgow Airport Main Terminal parking online?</summary>
              <p>
                Yes, to secure a place for car parking and to analyze other <strong>airport parking Main Terminal Glasgow</strong> options, majority of the travellers book Glasgow Main Terminal online.
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
              Book Now – Glasgow Airport Main Terminal Parking
            </h2>

            <p className="mainterminal-cta-text">
              If you are planning for the future trip, making arrangements for your parking needs at <strong>Glasgow Main Terminal</strong> will help you save time and money. Using a parking box will not only provide various parking options but will also help search for cheap airport parking and to make reservations before you leave for your destination.
            </p>
            <p className="mainterminal-cta-text">
              Whether you want to make <strong>long term parking reservations</strong>, need a park and ride service or require long term parking. The parking box will provide an ideal parking option.

            </p>


            <div className="mainterminal-contact-row">

              <div className="mainterminal-contact-box">
                <FaInfoCircle className="contact-icon" />
                <div>
                  {/* <strong>Reach out at</strong> */}
                  <p>07348186412</p>
                </div>
              </div>

              <div className="mainterminal-contact-box">
                <FaMapMarkerAlt className="contact-icon" />
                <div>
                  {/* <strong>Location</strong> */}
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
  margin-top: 80px;
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
          padding: 18px 0;
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
          margin-top: 80px;
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