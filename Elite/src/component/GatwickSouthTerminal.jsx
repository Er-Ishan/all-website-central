import { Helmet } from "react-helmet";
import {
  FaParking,
  FaBusAlt,
  FaCheckCircle,
  FaShieldAlt,
  FaPlaneDeparture,
} from "react-icons/fa";
import Footer from "./Footer";
import Copyright from "./Copyright";
import NavbarElement from "./NavbarElement";

const BASE_URL = "https://www.heathroweliteparking.co.uk";

export default function GatwickSouthTerminal() {
  return (
    <>
      <Helmet>
        <title>Gatwick South Terminal Park &amp; Ride | Heathrow Elite Parking</title>
        <meta name="description" content="Gatwick South Terminal park and ride parking. Stress-free parking with shuttle to South Terminal. Book Gatwick airport parking." />
        <meta name="keywords" content="Gatwick South Terminal parking, Gatwick park and ride, South Terminal airport parking, Gatwick airport parking" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={`${BASE_URL}/gatwick/south-terminal`} />
        <meta property="og:title" content="Gatwick South Terminal Park &amp; Ride | Heathrow Elite Parking" />
        <meta property="og:description" content="Gatwick South Terminal park and ride parking with shuttle service." />
        <meta property="og:type" content="website" />
      </Helmet>
      <NavbarElement />

      <section className="container-fluid gatwick-south-section py-5">
        <div className="container py-5">

          {/* ================= HEADER ================= */}
          <div className="text-center mb-5">
            <img
              src="https://www.passengerterminaltoday.com/wp-content/uploads/2023/04/7117-Gatwick-New-Brand-Ads-IDL-landmark.jpg"
              alt="Gatwick Airport Logo"
              className="gatwick-logo mb-3"
            />
            <h1 className="gatwick-south-title fw-bold">
              Gregg Maurice Park & Ride – Gatwick South Terminal Parking
            </h1>
            <p className="gatwick-south-subtitle">
              Stress-Free Parking for Gatwick South Terminal Flights
            </p>
          </div>

          {/* ================= IMAGE ================= */}
          <div className="text-center mb-5">
            <img
              src="https://i.ytimg.com/vi/BdG5zMcuO8g/maxresdefault.jpg"
              alt="Gatwick South Terminal Parking"
              className="gatwick-south-image"
            />
          </div>

          {/* ================= CONTENT ================= */}
          <div className="row justify-content-center">
            <div className="col-lg-10 col-xl-9">

              {/* INTRO */}
              <div className="gatwick-south-block">
                <p>
                  Looking for affordable, secure, and stress-free Park & Ride parking at London
                  Gatwick South Terminal? Gregg Maurice Park & Ride makes your airport journey
                  smooth from start to finish. With fast shuttle transfers, reliable service, and
                  a convenient location just minutes from the South Terminal, we take the hassle
                  out of airport parking.
                </p>
              </div>

              {/* WHY CHOOSE */}
              <div className="gatwick-south-block">
                <h3>
                  <FaParking /> Why Choose Gregg Maurice Park & Ride at Gatwick South Terminal
                </h3>

                <p>
                  <strong>Convenient Location:</strong> Our secure parking facility is positioned
                  just a short shuttle ride from London Gatwick South Terminal, saving you time
                  on travel and transfers.
                </p>

                <p>
                  <strong>Affordable Parking Options:</strong> Park & Ride is one of the most
                  cost-effective ways to leave your vehicle when flying from Gatwick, ideal for
                  both short stays and long trips.
                </p>

                <p>
                  <strong>Reliable Shuttle Transfers:</strong> Enjoy frequent and dependable
                  shuttle services between our car park and the South Terminal — perfect for
                  travellers with luggage, families, or business passengers.
                </p>

                <p>
                  <strong>Secure Parking:</strong> Your vehicle stays safe with robust security
                  measures — including monitored parking and professional staff support — so you
                  can relax while you travel.
                </p>
              </div>

              {/* HOW IT WORKS */}
              <div className="gatwick-south-block">
                <h3>
                  <FaBusAlt /> How It Works
                </h3>

                <p>
                  <strong>Drive to Our Secure Parking Facility</strong> – Park easily and leave
                  the parking logistics to us.
                </p>

                <p>
                  <strong>Shuttle to South Terminal</strong> – Our regular shuttles take you
                  directly to the terminal entrance, ready for check-in.
                </p>

                <p>
                  <strong>Return & Pick Up</strong> – After your flight, hop back on our shuttle
                  straight from Gatwick South Terminal to your waiting car.
                </p>

                <p>
                  It’s that simple — no complicated parking searches, no long airport queues.
                </p>
              </div>

              {/* BENEFITS */}
              <div className="gatwick-south-block">
                <h3>
                  <FaCheckCircle /> Benefits of Booking With Us
                </h3>

                <p>✅ Great Value for Money – Competitive pricing compared to on-airport parking.</p>
                <p>✅ Hassle-Free Travel – Shuttle transport takes the stress out of airport access.</p>
                <p>✅ Flexible Booking – Ideal for business trips, holidays, or any getaway.</p>
                <p>✅ Friendly Support – Helpful staff to guide you through check-in and departure.</p>
              </div>

              {/* REVIEWS */}
              <div className="gatwick-south-block">
                <h3>
                  <FaPlaneDeparture /> What Travellers Say
                </h3>
                <p>
                  Many customers praise park & ride options for quick booking, helpful staff, and
                  smooth shuttle transfers — making Park & Ride a smart choice for Gatwick
                  travellers.
                </p>
              </div>

              {/* PERFECT FOR */}
              <div className="gatwick-south-block">
                <h3>
                  <FaShieldAlt /> Perfect for Gatwick South Terminal Departures
                </h3>
                <p>
                  Whether you’re departing from Gatwick South Terminal for business or leisure,
                  Gregg Maurice’s Park & Ride service delivers dependable parking solutions
                  tailored to your needs. With shuttle transfers running regularly and plenty of
                  space for every traveller, you can start your trip with peace of mind.
                </p>
              </div>

              {/* CTA */}
              <div className="gatwick-south-cta text-center mt-5">
                <h4>Book Your Gatwick South Terminal Parking Today</h4>
                <p>
                  Get an instant quote, check availability, and secure your parking in minutes.
                  Don’t pay more for airport parking — save time, money, and stress with Gregg
                  Maurice Park & Ride.
                </p>
                <strong>
                  👉 Book now and enjoy easy parking with shuttle transfer to London Gatwick South Terminal!
                </strong>
              </div>

            </div>
          </div>
        </div>

        {/* ================= CSS ================= */}
        <style>{`
          .gatwick-logo {
            max-width: 220px;
          }

          .gatwick-south-title {
            font-size: 34px;
            color: #062A4F;
          }

          .gatwick-south-subtitle {
            font-size: 18px;
            color: #475569;
          }

          .gatwick-south-image {
            width: 100%;
            max-width: 900px;
            border-radius: 16px;
            box-shadow: 0 20px 40px rgba(0,0,0,0.15);
          }

          .gatwick-south-block {
            margin-bottom: 40px;
          }

          .gatwick-south-block h3 {
            display: flex;
            align-items: center;
            gap: 10px;
            color: #062A4F;
            font-size: 22px;
            margin-bottom: 15px;
          }

          .gatwick-south-block p {
            color: #475569;
            font-size: 16px;
            line-height: 1.8;
          }

          .gatwick-south-cta h4 {
            font-weight: 700;
            color: #062A4F;
          }

          @media (max-width: 768px) {
            .gatwick-south-title {
              font-size: 26px;
            }

            .gatwick-south-block h3 {
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
