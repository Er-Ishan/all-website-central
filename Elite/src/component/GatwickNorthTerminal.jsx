import { Helmet } from "react-helmet";
import {
  FaParking,
  FaBusAlt,
  FaCheckCircle,
  FaClock,
  FaShieldAlt,
  FaPlaneDeparture,
} from "react-icons/fa";
import Footer from "./Footer";
import Copyright from "./Copyright";
import NavbarElement from "./NavbarElement";

const BASE_URL = "https://www.heathroweliteparking.co.uk";

export default function GatwickNorthTerminal() {
  return (
    <>
      <Helmet>
        <title>Gatwick North Terminal Park &amp; Ride | Heathrow Elite Parking</title>
        <meta name="description" content="Affordable Gatwick North Terminal park and ride parking. Secure vehicle storage with shuttle to North Terminal. Book Gatwick airport parking." />
        <meta name="keywords" content="Gatwick North Terminal parking, Gatwick park and ride, North Terminal airport parking, Gatwick airport parking" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={`${BASE_URL}/gatwick/north-terminal`} />
        <meta property="og:title" content="Gatwick North Terminal Park &amp; Ride | Heathrow Elite Parking" />
        <meta property="og:description" content="Affordable Gatwick North Terminal park and ride parking with shuttle service." />
        <meta property="og:type" content="website" />
      </Helmet>
      <NavbarElement />

      <section className="container-fluid gatwick-north-section py-5">
        <div className="container py-5">

          {/* ================= HEADER ================= */}
          <div className="text-center mb-5">
            <img
              src="https://www.passengerterminaltoday.com/wp-content/uploads/2023/04/7117-Gatwick-New-Brand-Ads-IDL-landmark.jpg"
              alt="Gatwick Airport Logo"
              className="gatwick-logo mb-3"
            />
            <h1 className="gatwick-north-title fw-bold">
              Gatwick Airport Park & Ride – North Terminal | Gregg Maurice
            </h1>
            <p className="gatwick-north-subtitle">
              Affordable Park & Ride Parking at Gatwick Airport North Terminal
            </p>
          </div>

          {/* ================= IMAGE ================= */}
          <div className="text-center mb-5">
            <img
              src="https://travellowdown.com/wp-content/uploads/2016/12/Gatwick-North-e1482426780128.jpg"
              alt="Gatwick North Terminal Park & Ride"
              className="gatwick-north-image"
            />
          </div>

          {/* ================= CONTENT ================= */}
          <div className="row justify-content-center">
            <div className="col-lg-10 col-xl-9">

              {/* INTRO */}
              <div className="gatwick-north-block">
                <p>
                  Book trusted Park & Ride parking with Gregg Maurice — a reliable and
                  budget-friendly alternative to official Gatwick parking. Skip the stress of
                  long airport queues and enjoy a smooth start and finish to your journey.
                </p>
              </div>

              {/* SERVICE OVERVIEW */}
              <div className="gatwick-north-block">
                <h3>
                  <FaParking /> Park & Ride at Gatwick North Terminal – Easy, Secure, Affordable
                </h3>
                <p>
                  Travelers flying from Gatwick Airport North Terminal can now enjoy simple and
                  affordable airport parking with Park & Ride service by Gregg Maurice. Drive
                  to our secure off-airport car park, park your vehicle safely, and take our
                  regular shuttle directly to the North Terminal departure area. Upon your
                  return, our shuttle will bring you back to your car so you can head home with
                  ease.
                </p>

                <p>This service is perfect for:</p>
                <ul className="gatwick-north-list">
                  <li><FaCheckCircle /> Holiday travelers seeking cost-effective parking</li>
                  <li><FaCheckCircle /> Business trips where convenience matters</li>
                  <li><FaCheckCircle /> Long and short stays</li>
                  <li><FaCheckCircle /> Anyone who wants stress-free parking near Gatwick North Terminal</li>
                </ul>

                <p>
                  Our solution offers an excellent balance of value, convenience, and peace of
                  mind compared with official on-airport parking options.
                </p>
              </div>

              {/* HOW IT WORKS */}
              <div className="gatwick-north-block">
                <h3>
                  <FaBusAlt /> How It Works – Simple Steps to Park & Ride
                </h3>
                <ul className="gatwick-north-list">
                  <li>
                    <FaCheckCircle /> <strong>Reserve Your Space Online</strong> – Pre-book your
                    parking for the best rates.
                  </li>
                  <li>
                    <FaCheckCircle /> <strong>Arrive at Our Secure Car Park</strong> – Park your
                    car in a well-maintained off-site facility.
                  </li>
                  <li>
                    <FaCheckCircle /> <strong>Shuttle to North Terminal</strong> – Board our
                    frequent shuttle service and arrive at Gatwick’s North Terminal hassle-free.
                  </li>
                  <li>
                    <FaCheckCircle /> <strong>Return Transfer</strong> – After your trip, catch
                    the shuttle back to collect your vehicle and continue home.
                  </li>
                </ul>
              </div>

              {/* WHY CHOOSE */}
              <div className="gatwick-north-block">
                <h3>
                  <FaShieldAlt /> Why Choose Gregg Maurice Park & Ride?
                </h3>

                <p><strong>✔ Cost-Effective Airport Parking</strong></p>
                <p>
                  Our Park & Ride service offers competitive pricing compared to official
                  on-airport parking — especially for longer trips — saving you money without
                  compromising quality.
                </p>

                <p><strong>✔ Convenient Shuttle Service</strong></p>
                <p>
                  Regular shuttle transfers to and from Gatwick North Terminal make your journey
                  smooth and reliable, giving you extra time to relax before your flight.
                </p>

                <p><strong>✔ Easy Booking & Great Value</strong></p>
                <p>
                  Pre-book online and secure great rates. Park at a secure location and skip the
                  hassle of searching for spaces at the terminal. Perfect for cost-savvy
                  travelers.
                </p>

                <p><strong>✔ Safe & Secure Parking</strong></p>
                <p>
                  Your vehicle is parked in a secure off-site facility with monitored access,
                  giving you peace of mind while you travel.
                </p>
              </div>

              {/* COMPARISON */}
              <div className="gatwick-north-block">
                <h3>
                  <FaPlaneDeparture /> Compare With Official Gatwick Parking
                </h3>
                <p>
                  The official Gatwick North Terminal car parks offer a range of options,
                  including Short Stay, Long Stay and Valet services — all within the airport
                  campus itself. These can be convenient but often come at a premium for longer
                  stays and higher costs per day.
                </p>
                <p>
                  Our Park & Ride service provides a budget-friendly, shuttle-assisted
                  alternative without the premium price tag — making it one of the best parking
                  choices for travellers flying from Gatwick North Terminal.
                </p>
              </div>

              {/* FAQ */}
              <div className="gatwick-north-block">
                <h3>
                  <FaClock /> FAQs – Gatwick North Terminal Park & Ride
                </h3>

                <p><strong>Is shuttle service included in the price?</strong></p>
                <p>
                  Yes — your booking includes regular shuttle transfers both to and from
                  Gatwick’s North Terminal.
                </p>

                <p><strong>How long is the shuttle ride?</strong></p>
                <p>
                  Most off-site Park & Ride shuttles operate within 5–10 minutes of the North
                  Terminal.
                </p>
              </div>

              {/* CTA */}
              <div className="gatwick-north-cta text-center mt-5">
                <h4>Book Your Gatwick North Terminal Park & Ride Today</h4>
                <p>
                  Don’t pay more than you need for airport parking. Secure your Gregg Maurice
                  Park & Ride parking space now and enjoy affordable, reliable parking for your
                  Gatwick trip.
                </p>
                <strong>👉 Reserve Your Space Online</strong>
                <p className="mt-2">
                  ✔ Budget-friendly rates<br />
                  ✔ Shuttle to/from North Terminal<br />
                  ✔ Stress-free parking experience
                </p>
              </div>

            </div>
          </div>
        </div>

        {/* ================= CSS ================= */}
        <style>{`
          .gatwick-logo {
            max-width: 220px;
          }

          .gatwick-north-title {
            font-size: 34px;
            color: #062A4F;
          }

          .gatwick-north-subtitle {
            font-size: 18px;
            color: #475569;
          }

          .gatwick-north-image {
            width: 100%;
            max-width: 900px;
            border-radius: 16px;
            box-shadow: 0 20px 40px rgba(0,0,0,0.15);
          }

          .gatwick-north-block {
            margin-bottom: 40px;
          }

          .gatwick-north-block h3 {
            display: flex;
            align-items: center;
            gap: 10px;
            color: #062A4F;
            font-size: 22px;
            margin-bottom: 15px;
          }

          .gatwick-north-block p {
            color: #475569;
            font-size: 16px;
            line-height: 1.8;
          }

          .gatwick-north-list {
            list-style: none;
            padding-left: 0;
          }

          .gatwick-north-list li {
            display: flex;
            align-items: center;
            gap: 10px;
            margin-bottom: 10px;
            color: #475569;
            font-size: 16px;
          }

          .gatwick-north-cta h4 {
            font-weight: 700;
            color: #062A4F;
          }

          @media (max-width: 768px) {
            .gatwick-north-title {
              font-size: 26px;
            }

            .gatwick-north-block h3 {
              font-size: 20px;
            }
          }
        `}</style>
      </section>

      <Footer />
      <Copyright />
    </>
  );
}
