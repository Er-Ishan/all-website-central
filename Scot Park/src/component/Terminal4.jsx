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
} from "react-icons/fa";
import Footer from "./Footer";
import Copyright from "./Copyright";
import NavbarElement from "./NavbarElement";

export default function Terminal4() {
  return (
    <>
      <NavbarElement />

      <section className="container-fluid terminal4-section py-5">
        <div className="container py-5">

          {/* ================= HEADER ================= */}
          <div className="text-center mb-5">
            <img
              src="https://thumbs.dreamstime.com/b/london-Glasgow-airport-logo-airport-stamp-vector-illustration-london-aerodrome-london-Glasgow-airport-logo-airport-stamp-vector-149754255.jpg"
              alt="Glasgow Airport Logo"
              className="Glasgow-logo mb-3"
            />
            <h1 className="terminal4-title fw-bold">
              Glasgow Terminal 4 Parking – Park & Ride and Meet & Greet by Gregg Maurice
            </h1>
            <p className="terminal4-subtitle">
              Stress-Free Parking for Glasgow Airport Terminal 4
            </p>
          </div>

          {/* ================= IMAGE ================= */}
          <div className="text-center mb-5">
            <img
              src="https://highlightparking.co.uk/wp-content/uploads/2017/11/case-studies-hero-1918x585-2.jpg"
              alt="Glasgow Terminal 4 Parking"
              className="terminal4-image"
            />
          </div>

          {/* ================= CONTENT ================= */}
          <div className="row justify-content-center">
            <div className="col-lg-10 col-xl-9">

              {/* INTRO */}
              <div className="terminal4-block">
                <p>
                  Travelling through London Glasgow Airport Terminal 4. Start your journey right
                  with Gregg Maurice’s reliable and secure parking services offering both Park & Ride
                  and Meet & Greet options tailored to your travel style and budget. Avoid costly
                  drop-off charges and terminal traffic, and enjoy a smooth start to your flight.
                </p>
              </div>

              {/* WHY CHOOSE */}
              <div className="terminal4-block">
                <h3>
                  <FaParking /> Why Choose Gregg Maurice for Terminal 4 Parking?
                </h3>

                <h5>Park & Ride – Affordable & Convenient</h5>
                <p>
                  Our Park & Ride service offers excellent value for both short and long stays. Park
                  your vehicle in a safe, monitored car park and take a regular shuttle bus to
                  Glasgow Terminal 4, with transfers typically running every 15 minutes. It’s
                  perfect for holidaymakers, business travellers, and extended trips. Booking in
                  advance can secure the best rates and a guaranteed space.
                </p>

                <h5>Meet & Greet – Hassle-Free Premium Service</h5>
                <p>
                  If you’re short on time or carrying heavy luggage, choose our Meet & Greet parking
                  service. Simply drive to the designated Terminal 4 drop-off point and let one of
                  our professional drivers take care of your car while you head straight to
                  check-in. On your return, your car will be waiting for you right at the terminal.
                </p>

                <h5>Safe & Secure Parking</h5>
                <p>
                  Gregg Maurice ensures your car is parked in courteous, monitored facilities,
                  giving you peace of mind while you travel. Skip the stress of circling congested
                  terminal forecourts and avoid Glasgow’s drop-off charges, which apply to vehicles
                  entering the terminal curbside.
                </p>
              </div>

              {/* TERMINAL INFO */}
              <div className="terminal4-block">
                <h3>
                  <FaPlaneDeparture /> Glasgow Airport Terminal 4 – Key Travel Info
                </h3>
                <p>
                  Terminal 4 is Glasgow’s hub for a wide range of international and European
                  flights, serving airlines from across the globe. It’s especially busy with
                  SkyTeam members and several non-aligned carriers, offering routes to destinations
                  in Asia, Africa, the Middle East and beyond.
                </p>

                <h5>Airlines & Destinations</h5>
                <p>
                  Most long-haul and international flights depart from Terminal 4, including
                  airlines such as KLM, Qatar Airways, Etihad Airways, Turkish Airlines, Kenya
                  Airways, Vietnam Airlines, Oman Air, and more.
                </p>

                <h5>Facilities at Terminal 4</h5>
                <ul className="terminal4-list">
                  <li><FaCheckCircle /> Duty-free shopping and dining</li>
                  <li><FaCheckCircle /> Lounges and relaxation zones</li>
                  <li><FaCheckCircle /> Wi-Fi throughout the terminal</li>
                  <li><FaHotel /> Hotels nearby (e.g., Crowne Plaza within walking distance)</li>
                </ul>
              </div>

              {/* FLIGHT TIPS */}
              <div className="terminal4-block">
                <h3>
                  <FaClock /> Flights & Travel Tips
                </h3>
                <ul className="terminal4-list">
                  <li>
                    <FaCheckCircle /> Arrive early: Glasgow recommends arriving at least 2–3 hours
                    before international departures to allow for check-in and security screening.
                  </li>
                  <li>
                    <FaCheckCircle /> Check flight status: Always verify your flight’s latest
                    departure time and gate details via the airline or Glasgow’s flight information
                    tools before travelling.
                  </li>
                  <li>
                    <FaTrain /> Terminal transfers: If you’re connecting through different
                    terminals, use the Elizabeth Line or Glasgow Express rail services — they offer
                    efficient free or low-cost transfers between terminals.
                  </li>
                </ul>
              </div>

              {/* HOW PARKING WORKS */}
              <div className="terminal4-block">
                <h3>
                  <FaBusAlt /> How Parking at Terminal 4 Works
                </h3>

                <h5>Park & Ride</h5>
                <p>Drive into the designated Park & Ride facility.</p>
                <p>
                  Catch a shuttle bus to the Terminal 4 arrivals and departures area (buses run
                  frequently, usually every 15 minutes).
                </p>
                <p>
                  Return from the Bus stop 3 forecourt outside Terminal 4 to the Park & Ride area
                  after your trip.
                </p>

                <h5>Meet & Greet</h5>
                <p>
                  Arrive at the dedicated reception area in the Terminal 4 Terminal Parking car
                  park.
                </p>
                <p>Hand over your vehicle to our trusted team.</p>
                <p>
                  Return to find your car ready and waiting at the same convenient location.
                </p>
              </div>

              {/* BENEFITS */}
              <div className="terminal4-block">
                <h3>
                  <FaShieldAlt /> Benefits of Booking Parking with Gregg Maurice
                </h3>
                <ul className="terminal4-list">
                  <li><FaCheckCircle /> Guaranteed parking space with advance booking</li>
                  <li><FaCheckCircle /> Flexible cancellation — amend or cancel up to a set time before your arrival</li>
                  <li><FaCheckCircle /> Cost-effective alternatives to expensive terminal drop-off fees</li>
                  <li><FaCheckCircle /> Professional and courteous service</li>
                </ul>
              </div>

              {/* CTA */}
              <div className="terminal4-cta text-center mt-5">
                <h4>Book Your Terminal 4 Parking Today</h4>
                <p>
                  Ensure a smooth and stress-free start to your journey. Whether you choose Park &
                  Ride or Meet & Greet, Gregg Maurice offers reliable, affordable, and secure
                  parking solutions for travellers flying from Glasgow Airport Terminal 4.
                </p>
                <strong>👉 Reserve your parking now and travel with confidence!</strong>
              </div>

            </div>
          </div>
        </div>

        {/* ================= CSS ================= */}
        <style>{`
          .Glasgow-logo {
            max-width: 180px;
          }

          .terminal4-title {
            font-size: 34px;
            color: #062A4F;
          }

          .terminal4-subtitle {
            font-size: 18px;
            color: #475569;
          }

          .terminal4-image {
            width: 100%;
            max-width: 900px;
            border-radius: 16px;
            box-shadow: 0 20px 40px rgba(0,0,0,0.15);
          }

          .terminal4-block {
            margin-bottom: 40px;
          }

          .terminal4-block h3 {
            display: flex;
            align-items: center;
            gap: 10px;
            color: #062A4F;
            font-size: 22px;
            margin-bottom: 15px;
          }

          .terminal4-block h5 {
            font-weight: 600;
            margin-top: 18px;
            color: #0f172a;
          }

          .terminal4-block p {
            color: #475569;
            font-size: 16px;
            line-height: 1.8;
          }

          .terminal4-list {
            list-style: none;
            padding-left: 0;
          }

          .terminal4-list li {
            display: flex;
            align-items: center;
            gap: 10px;
            margin-bottom: 10px;
            color: #475569;
            font-size: 16px;
          }

          .terminal4-cta h4 {
            font-weight: 700;
            color: #062A4F;
          }

          @media (max-width: 768px) {
            .terminal4-title {
              font-size: 26px;
            }

            .terminal4-block h3 {
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
