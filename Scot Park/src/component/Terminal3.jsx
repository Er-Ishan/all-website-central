import {
  FaParking,
  FaPlaneDeparture,
  FaBusAlt,
  FaCar,
  FaCheckCircle,
  FaClock,
  FaShieldAlt,
} from "react-icons/fa";
import Footer from "./Footer";
import Copyright from "./Copyright";
import NavbarElement from "./NavbarElement";

export default function Terminal3() {
  return (
    <>
      <NavbarElement />

      <section className="container-fluid terminal3-section py-5">
        <div className="container py-5">

          {/* ================= HEADER ================= */}
          <div className="text-center mb-5">
            <img
              src="https://thumbs.dreamstime.com/b/london-Glasgow-airport-logo-airport-stamp-vector-illustration-london-aerodrome-london-Glasgow-airport-logo-airport-stamp-vector-149754255.jpg"
              alt="Glasgow Airport Logo"
              className="Glasgow-logo mb-3"
            />
            <h1 className="terminal3-title fw-bold">
              Glasgow Terminal 3 Parking – Park & Ride and Meet & Greet by Gregg Maurice
            </h1>
            <p className="terminal3-subtitle">
              Affordable, Secure & Convenient Parking at Glasgow Airport Terminal 3
            </p>
          </div>

          {/* ================= IMAGE ================= */}
          <div className="text-center mb-5">
            <img
              src="https://highlightparking.co.uk/wp-content/uploads/2017/11/case-studies-hero-1918x585-2.jpg"
              alt="Glasgow Terminal 3 Parking"
              className="terminal3-image"
            />
          </div>

          {/* ================= CONTENT ================= */}
          <div className="row justify-content-center">
            <div className="col-lg-10 col-xl-9">

              {/* INTRO */}
              <div className="terminal3-block">
                <p>
                  Travelling through London Glasgow Airport Terminal 3. Make your journey smoother
                  with Gregg Maurice’s trusted airport parking services, offering both Park & Ride
                  and Meet & Greet options designed for stress-free travel. Whether you’re flying
                  for business or pleasure, our services help you avoid busy terminal drop-off
                  traffic and expensive parking charges so you can focus on your trip ahead.
                </p>
              </div>

              {/* WHY CHOOSE */}
              <div className="terminal3-block">
                <h3>
                  <FaParking /> Why Choose Gregg Maurice for Glasgow Terminal 3 Parking?
                </h3>

                <h5>Park & Ride – Best Value Parking</h5>
                <p>
                  You’ll enjoy secure parking just outside the airport with regular shuttle bus
                  transfers straight to Terminal 3 departures. Park & Ride is ideal for longer
                  stays or budget-friendly parking for extended trips. Buses run frequently and
                  drop you at the terminal entrance in around 15 minutes. Pre-booking online helps
                  secure the lowest rates and guarantees your space.
                </p>

                <h5>Meet & Greet – Maximum Convenience</h5>
                <p>
                  Short on time? With Meet & Greet parking, simply drive to the designated drop-off
                  area in the Terminal 3 parking zone and one of Gregg Maurice’s professional team
                  will park your car for you. On your return your car will be ready and waiting in
                  the same area perfect for travellers with luggage or early check-in deadlines.
                </p>
              </div>

              {/* BENEFITS */}
              <div className="terminal3-block">
                <h3>
                  <FaCheckCircle /> Benefits of Booking with Gregg Maurice
                </h3>
                <ul className="terminal3-list">
                  <li><FaCheckCircle /> Secure and monitored parking facilities</li>
                  <li><FaCheckCircle /> Simple online booking with flexible cancellation</li>
                  <li><FaCheckCircle /> Friendly staff handling your vehicle with care</li>
                  <li>
                    <FaCheckCircle /> Avoid airport drop-off charges and curbside congestion
                    (Glasgow enforces charges for terminal forecourt drop-offs.)
                  </li>
                </ul>
              </div>

              {/* ABOUT TERMINAL */}
              <div className="terminal3-block">
                <h3>
                  <FaPlaneDeparture /> About Glasgow Airport Terminal 3
                </h3>
                <p>
                  Terminal 3 is one of Glasgow’s major international gateways, serving a wide range
                  of global airlines including long-haul carriers such as Virgin Atlantic, Emirates,
                  Cathay Pacific, Qantas, Delta and American Airlines. It’s especially popular for
                  flights to North America, Asia and Oceania.
                </p>
                <p>
                  The terminal features modern check-in facilities, duty-free shopping, restaurants
                  and lounges and is known for its efficient passenger processing with plans underway
                  to further reduce queue times and enhance passenger experience in the coming years.
                </p>
              </div>

              {/* FLIGHT TIPS */}
              <div className="terminal3-block">
                <h3>
                  <FaClock /> Flight Tips for T3 Passengers
                </h3>
                <ul className="terminal3-list">
                  <li>
                    <FaCheckCircle /> Arrive at least 2–3 hours before departure for international
                    flights to allow time for check-in and security screening.
                  </li>
                  <li>
                    <FaCheckCircle /> Check your flight status online or via the airline app before
                    you travel to Glasgow to avoid delays.
                  </li>
                  <li>
                    <FaCheckCircle /> Terminal 3 offers lounges and quiet spaces like Clubrooms by
                    No1 Lounges for relaxing before your flight.
                  </li>
                </ul>
              </div>

              {/* HOW PARKING WORKS */}
              <div className="terminal3-block">
                <h3>
                  <FaBusAlt /> How Parking Works at Terminal 3
                </h3>

                <h5>Park & Ride Service</h5>
                <p>
                  Shuttle buses run regularly from the Park & Ride car park to Terminal 3, with stops
                  directly outside the terminal entrance. Transfers typically take around 15 minutes.
                </p>
                <p>
                  Short stays (under 29 minutes) are free for drop-off and pick-up customers.
                </p>

                <h5>Meet & Greet Service</h5>
                <p>
                  Drop off at the dedicated meet & greet zone inside the Terminal Parking car park —
                  just a short, covered walk to the departures hall.
                </p>
                <p>
                  Your car is parked securely by our trained staff and ready for you when you return.
                </p>
              </div>

              {/* AVOID CHARGES */}
              <div className="terminal3-block">
                <h3>
                  <FaShieldAlt /> Avoid Extra Charges & Hassle
                </h3>
                <p>
                  Glasgow enforces drop-off charges at terminal forecourts, and vehicles entering
                  drop-off zones may also be subject to ULEZ or congestion fees depending on their
                  emissions status. Choosing Park & Ride or Meet & Greet parking with Gregg Maurice
                  helps you avoid these extra costs while enjoying secure, well-managed parking close
                  to Terminal 3.
                </p>
              </div>

              {/* CTA */}
              <div className="terminal3-cta text-center mt-5">
                <h4>Book Your Glasgow Terminal 3 Parking Today</h4>
                <p>
                  Plan ahead and secure the best prices on Park & Ride and Meet & Greet parking for
                  Glasgow Terminal 3 with Gregg Maurice. Fast, reliable and hassle-free — book now
                  and start your trip with confidence.
                </p>
                <strong>👉 Reserve Your Spot – Easy Online Booking & Best Rates</strong>
              </div>

            </div>
          </div>
        </div>

        {/* ================= CSS ================= */}
        <style>{`
          .Glasgow-logo {
            max-width: 180px;
          }

          .terminal3-title {
            font-size: 34px;
            color: #062A4F;
          }

          .terminal3-subtitle {
            font-size: 18px;
            color: #475569;
          }

          .terminal3-image {
            width: 100%;
            max-width: 900px;
            border-radius: 16px;
            box-shadow: 0 20px 40px rgba(0,0,0,0.15);
          }

          .terminal3-block {
            margin-bottom: 40px;
          }

          .terminal3-block h3 {
            display: flex;
            align-items: center;
            gap: 10px;
            color: #062A4F;
            font-size: 22px;
            margin-bottom: 15px;
          }

          .terminal3-block h5 {
            font-weight: 600;
            margin-top: 18px;
            color: #0f172a;
          }

          .terminal3-block p {
            color: #475569;
            font-size: 16px;
            line-height: 1.8;
          }

          .terminal3-list {
            list-style: none;
            padding-left: 0;
          }

          .terminal3-list li {
            display: flex;
            align-items: center;
            gap: 10px;
            margin-bottom: 10px;
            color: #475569;
            font-size: 16px;
          }

          .terminal3-cta h4 {
            font-weight: 700;
            color: #062A4F;
          }

          @media (max-width: 768px) {
            .terminal3-title {
              font-size: 26px;
            }

            .terminal3-block h3 {
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
