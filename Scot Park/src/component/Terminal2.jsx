import {
  FaParking,
  FaPlaneDeparture,
  FaClock,
  FaBusAlt,
  FaCar,
  FaCheckCircle,
  FaTrain
} from "react-icons/fa";
import Footer from "./Footer";
import Copyright from "./Copyright";
import NavbarElement from "./NavbarElement";

export default function Terminal2() {
  return (
    <>
      <NavbarElement />

      <section className="container-fluid terminal2-section py-5">
        <div className="container py-5">

          {/* ================= HEADER ================= */}
          <div className="text-center mb-5">
            <img
              src="https://thumbs.dreamstime.com/b/london-Glasgow-airport-logo-airport-stamp-vector-illustration-london-aerodrome-london-Glasgow-airport-logo-airport-stamp-vector-149754255.jpg"
              alt="Glasgow Airport Logo"
              className="Glasgow-logo mb-3"
            />
            <h1 className="terminal2-title fw-bold">
              Airport Parking at Glasgow Terminal 2 – Park & Ride and Meet & Greet by Gregg Maurice
            </h1>
            <p className="terminal2-subtitle">
              Secure, Affordable and Hassle-Free Parking for Your Glasgow Journey
            </p>
          </div>

          {/* ================= IMAGE ================= */}
          <div className="text-center mb-5">
            <img
              src="https://highlightparking.co.uk/wp-content/uploads/2017/11/case-studies-hero-1918x585-2.jpg"
              alt="Glasgow Terminal 2 Parking"
              className="terminal2-image"
            />
          </div>

          {/* ================= CONTENT ================= */}
          <div className="row justify-content-center">
            <div className="col-lg-10 col-xl-9">

              {/* INTRO */}
              <div className="terminal2-block">
                <p>
                  Travelling from London Glasgow Airport Terminal 2? Whether you’re flying on business
                  or heading off on holiday, Gregg Maurice offers reliable Park & Ride and Meet & Greet
                  airport parking services tailored to your needs. Skip the stress of airport drop-offs,
                  find the best value parking, and enjoy a smooth start to your trip.
                </p>
              </div>

              {/* WHY CHOOSE */}
              <div className="terminal2-block">
                <h3>
                  <FaParking /> Why Choose Gregg Maurice Parking at Terminal 2?
                </h3>

                <h5>Convenience</h5>
                <p>
                  Park your car safely and travel confidently to Terminal 2 without worrying about
                  congestion or expensive drop-off zones. Our services are designed for easy access
                  to flights departing from Terminals 2 and nearby gates.
                </p>

                <h5>Park & Ride – Ideal for Longer Trips</h5>
                <p>
                  Our Park & Ride service gives you a secure parking space located close to Glasgow
                  with regular shuttle transfers direct to Terminal 2. Shuttle buses depart frequently
                  and can get you to the terminal in approximately 15 minutes — perfect for longer stays
                  or multi-day travel.
                </p>

                <h5>Meet & Greet – Ultimate Time-Saver</h5>
                <p>
                  If you’re short on time or travelling with heavy luggage, Gregg Maurice’s Meet & Greet
                  service drops you right at the terminal entrance. Simply drive to the designated meeting
                  point and let our professional team take care of your vehicle while you head straight
                  to check-in.
                </p>

                <h5>Competitive Pricing & Easy Booking</h5>
                <p>
                  Booking in advance with Gregg Maurice helps secure the best parking rates and ensures
                  availability — especially during peak travel seasons and busy flight times.
                </p>
              </div>

              {/* TERMINAL INFO */}
              <div className="terminal2-block">
                <h3>
                  <FaPlaneDeparture /> About Glasgow Airport Terminal 2
                </h3>
                <p>
                  Terminal 2 — also known as the Queen’s Terminal — is one of Glasgow’s main international
                  departure hubs, serving major global carriers including Star Alliance members like
                  Lufthansa, Air Canada, and Singapore Airlines. It’s centrally located on the airport
                  campus and accessed via the tunnel system from the M4 and M25 motorways.
                </p>

                <h5>Passengers flying from Terminal 2 can expect:</h5>
                <ul className="terminal2-list">
                  <li><FaCheckCircle /> Modern check-in facilities and lounges</li>
                  <li><FaCheckCircle /> Direct connections to flights across Europe, North America, Asia and beyond</li>
                  <li><FaCheckCircle /> Easy inter-terminal transfers by free Glasgow rail services (such as Glasgow Express or Elizabeth Line) if you’re connecting flights</li>
                  <li><FaCheckCircle /> Multiple cafes, shops, and lounges for comfort before departure</li>
                </ul>
              </div>

              {/* TIPS */}
              <div className="terminal2-block">
                <h3>
                  <FaClock /> Helpful Flight & Travel Tips
                </h3>

                <h5>Flight Check-in & Security:</h5>
                <p>
                  Arrive at least 2–3 hours before departure for most international flights to allow
                  time for baggage drop, security checks, and boarding. Terminal 2 offers automated
                  and self-service options for speedier processing.
                </p>

                <h5>Real-Time Flight Info:</h5>
                <p>
                  Before you leave, check your flight’s status through your airline or Glasgow’s
                  official flight tracking tools. This helps you plan your arrival at the airport
                  and coordinate parking shuttle timing.
                </p>

                <h5>Airport Connectivity:</h5>
                <p>
                  Terminal 2 is well-connected via Glasgow’s internal rail transfer links, making
                  it easy to move between terminals if needed for connecting flights.
                </p>
              </div>

              {/* DROP OFF FEES */}
              <div className="terminal2-block">
                <h3>
                  <FaCar /> ✔️ Avoid Airport Drop-Off Fees
                </h3>
                <p>
                  Glasgow operates strict drop-off charges at terminal forecourts, with pricing
                  enforced by number-plate cameras and limited free waiting time. Choosing Park & Ride
                  or Meet & Greet not only saves money, but also avoids congestion around the terminal
                  curbside.
                </p>
              </div>

              {/* CTA */}
              <div className="terminal2-cta text-center mt-5">
                <h4>Book Your Glasgow Terminal 2 Parking Today</h4>
                <p>
                  Make your airport experience seamless with Gregg Maurice’s trusted Park & Ride and
                  Meet & Greet services. Pre-book your space, enjoy fast transfers, and travel with
                  peace of mind.
                </p>
                <strong>👉 Reserve your parking now and start your journey stress-free!</strong>
              </div>

            </div>
          </div>
        </div>

        {/* ================= CSS ================= */}
        <style>{`
          .Glasgow-logo {
            max-width: 180px;
          }

          .terminal2-title {
            font-size: 34px;
            color: #062A4F;
          }

          .terminal2-subtitle {
            font-size: 18px;
            color: #475569;
          }

          .terminal2-image {
            width: 100%;
            max-width: 900px;
            border-radius: 16px;
            box-shadow: 0 20px 40px rgba(0,0,0,0.15);
          }

          .terminal2-block {
            margin-bottom: 40px;
          }

          .terminal2-block h3 {
            display: flex;
            align-items: center;
            gap: 10px;
            color: #062A4F;
            font-size: 22px;
            margin-bottom: 15px;
          }

          .terminal2-block h5 {
            font-weight: 600;
            margin-top: 18px;
            color: #0f172a;
          }

          .terminal2-block p {
            color: #475569;
            font-size: 16px;
            line-height: 1.8;
          }

          .terminal2-list {
            list-style: none;
            padding-left: 0;
          }

          .terminal2-list li {
            display: flex;
            align-items: center;
            gap: 10px;
            margin-bottom: 10px;
            color: #475569;
            font-size: 16px;
          }

          .terminal2-cta h4 {
            font-weight: 700;
            color: #062A4F;
          }

          @media (max-width: 768px) {
            .terminal2-title {
              font-size: 26px;
            }

            .terminal2-block h3 {
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
