import {
  FaParking,
  FaPlaneDeparture,
  FaBusAlt,
  FaCar,
  FaCheckCircle,
  FaClock,
  FaShieldAlt,
  FaHotel,
  FaTrain,
  FaUtensils,
  FaShoppingBag,
} from "react-icons/fa";
import Footer from "./Footer";
import Copyright from "./Copyright";
import NavbarElement from "./NavbarElement";

export default function Terminal5() {
  return (
    <>
      <NavbarElement />

      <section className="container-fluid terminal5-section py-5">
        <div className="container py-5">

          {/* ================= HEADER ================= */}
          <div className="text-center mb-5">
            <img
              src="https://thumbs.dreamstime.com/b/london-Glasgow-airport-logo-airport-stamp-vector-illustration-london-aerodrome-london-Glasgow-airport-logo-airport-stamp-vector-149754255.jpg"
              alt="Glasgow Airport Logo"
              className="Glasgow-logo mb-3"
            />
            <h1 className="terminal5-title fw-bold">
              Glasgow Terminal 5 Parking – Park & Ride and Meet & Greet by Gregg Maurice
            </h1>
            <p className="terminal5-subtitle">
              Affordable, Secure & Convenient Parking for Glasgow Airport Terminal 5
            </p>
          </div>

          {/* ================= IMAGE ================= */}
          <div className="text-center mb-5">
            <img
              src="https://highlightparking.co.uk/wp-content/uploads/2017/11/case-studies-hero-1918x585-2.jpg"
              alt="Glasgow Terminal 5 Parking"
              className="terminal5-image"
            />
          </div>

          {/* ================= CONTENT ================= */}
          <div className="row justify-content-center">
            <div className="col-lg-10 col-xl-9">

              {/* INTRO */}
              <div className="terminal5-block">
                <p>
                  Travelling from London Glasgow Airport Terminal 5. Make your journey easier with
                  Gregg Maurice’s trusted airport parking services, offering both Park & Ride and
                  Meet & Greet parking options tailored for stress-free travel. Avoid expensive
                  terminal drop-offs, secure great value parking, and start your trip with peace
                  of mind.
                </p>
              </div>

              {/* PARKING OPTIONS */}
              <div className="terminal5-block">
                <h3>
                  <FaParking /> Glasgow Terminal 5 Parking Options with Gregg Maurice
                </h3>

                <h5>Park & Ride Parking – Budget-Friendly & Convenient</h5>
                <p>
                  Our Park & Ride service is a cost-effective choice for travellers of all kinds,
                  from short business trips to longer vacations. Park your vehicle in a secure
                  location near Glasgow and enjoy a regular shuttle bus transfer direct to
                  Terminal 5. Shuttle buses run frequently (usually every 15 minutes) and take you
                  straight to the terminal entrance, leaving you free to focus on your journey.
                  Pre-booking online helps secure the best prices and a guaranteed space.
                </p>

                <ul className="terminal5-list">
                  <li><FaCheckCircle /> Free parking up to 29 minutes for quick pick-ups and drop-offs</li>
                  <li><FaCheckCircle /> Shuttle transfers typically take around 15 minutes</li>
                  <li><FaCheckCircle /> Great value for stays of multiple days</li>
                </ul>

                <h5>Meet & Greet Parking – Ultimate Time-Saver</h5>
                <p>
                  When you’re short on time or travelling with heavy luggage, choose Meet & Greet
                  parking. Simply drive to the designated Meet & Greet reception area in the
                  Terminal 5 car park and hand over your keys to our professional team. Your car
                  will be parked securely on your behalf and ready for you on your return, right
                  near the terminal.
                </p>

                <ul className="terminal5-list">
                  <li><FaCheckCircle /> Premium, fast access to departures</li>
                  <li><FaCheckCircle /> Ideal for families, business travellers and early flights</li>
                  <li><FaCheckCircle /> Professionally trained team handling your vehicle</li>
                </ul>

                <p>
                  <strong>Tip:</strong> Booking in advance helps secure the best rates and ensures
                  availability, especially during peak holiday periods.
                </p>
              </div>

              {/* TERMINAL INFO */}
              <div className="terminal5-block">
                <h3>
                  <FaPlaneDeparture /> About Glasgow Airport Terminal 5
                </h3>
                <p>
                  Glasgow Terminal 5 is one of the UK’s busiest and most advanced airport
                  terminals, serving as a major hub for British Airways and its partner airline
                  Iberia. It handles a mix of domestic, European and long-haul international
                  flights, offering excellent connectivity to destinations around the world.
                </p>
                <p>
                  Terminal 5 features three interconnected buildings (T5A, T5B and T5C), linked by
                  an efficient people-mover system, helping passengers reach gates quickly once
                  inside the terminal.
                </p>

                <h5>At Terminal 5, you’ll find:</h5>
                <ul className="terminal5-list">
                  <li><FaUtensils /> Wide choice of restaurants and cafes to grab a last-minute bite</li>
                  <li><FaShoppingBag /> Duty-free shopping and retail outlets</li>
                  <li><FaCheckCircle /> Comfortable lounges including independent and airline partner lounges</li>
                  <li>
                    <FaHotel /> Hotels nearby, including the Sofitel London Glasgow, directly
                    connected via a covered walkway for stress-free stays before early flights.
                  </li>
                </ul>
              </div>

              {/* TRAVEL TIPS */}
              <div className="terminal5-block">
                <h3>
                  <FaClock /> Flight & Travel Tips for Terminal 5
                </h3>

                <h5>Plan Your Arrival:</h5>
                <p>
                  Terminal 5 caters to a large volume of passengers every day. For most
                  international departures, Glasgow advises arriving at least 2–3 hours before
                  your flight to allow time for check-in and security screening.
                </p>

                <h5>Live Flight Info:</h5>
                <p>
                  Before you travel, check your flight status using your airline’s real-time
                  departure and arrivals tools or Glasgow’s online flight boards to avoid delays
                  or gate changes.
                </p>

                <h5>Getting Around the Airport:</h5>
                <p>
                  If you need to connect to other terminals at Glasgow, free internal transit
                  services like the Glasgow Express or Elizabeth Line are available transfers
                  often take just 5–10 minutes between terminals.
                </p>
              </div>

              {/* DROP-OFF FEES */}
              <div className="terminal5-block">
                <h3>
                  <FaCar /> Avoid Drop-off Charges & Hassle
                </h3>
                <p>
                  Glasgow Airport recently introduced updated terminal drop-off charges and
                  restrictions on curbside time to reduce congestion. Choosing Park & Ride or Meet
                  & Greet parking not only helps you avoid costly terminal drop-off fees, but also
                  ensures you’re parked securely before you fly.
                </p>
              </div>

              {/* BENEFITS */}
              <div className="terminal5-block">
                <h3>
                  <FaShieldAlt /> Why Pre-Book with Gregg Maurice?
                </h3>
                <ul className="terminal5-list">
                  <li><FaCheckCircle /> Guaranteed parking space, even during busy travel periods</li>
                  <li><FaCheckCircle /> Lower prices through early booking</li>
                  <li><FaCheckCircle /> Professional, courteous service</li>
                  <li><FaCheckCircle /> Secure, monitored parking environment</li>
                </ul>
              </div>

              {/* CTA */}
              <div className="terminal5-cta text-center mt-5">
                <h4>Book Your Glasgow Terminal 5 Parking Now</h4>
                <p>
                  Enjoy a smooth, stress-free start to your journey with Gregg Maurice’s Park &
                  Ride and Meet & Greet parking services for Glasgow Terminal 5. Pre-book today
                  to secure your preferred parking option and the best available rates!
                </p>
                <strong>👉 Reserve Your Parking – Fast & Easy Online Booking</strong>
              </div>

            </div>
          </div>
        </div>

        {/* ================= CSS ================= */}
        <style>{`
          .Glasgow-logo {
            max-width: 180px;
          }

          .terminal5-title {
            font-size: 34px;
            color: #062A4F;
          }

          .terminal5-subtitle {
            font-size: 18px;
            color: #475569;
          }

          .terminal5-image {
            width: 100%;
            max-width: 900px;
            border-radius: 16px;
            box-shadow: 0 20px 40px rgba(0,0,0,0.15);
          }

          .terminal5-block {
            margin-bottom: 40px;
          }

          .terminal5-block h3 {
            display: flex;
            align-items: center;
            gap: 10px;
            color: #062A4F;
            font-size: 22px;
            margin-bottom: 15px;
          }

          .terminal5-block h5 {
            font-weight: 600;
            margin-top: 18px;
            color: #0f172a;
          }

          .terminal5-block p {
            color: #475569;
            font-size: 16px;
            line-height: 1.8;
          }

          .terminal5-list {
            list-style: none;
            padding-left: 0;
          }

          .terminal5-list li {
            display: flex;
            align-items: center;
            gap: 10px;
            margin-bottom: 10px;
            color: #475569;
            font-size: 16px;
          }

          .terminal5-cta h4 {
            font-weight: 700;
            color: #062A4F;
          }

          @media (max-width: 768px) {
            .terminal5-title {
              font-size: 26px;
            }

            .terminal5-block h3 {
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
