import { FaCheckCircle } from "react-icons/fa";

export default function Fact() {
  return (
    <section className="container-fluid fact-section py-5">
      <div className="container py-5">

        {/* SECTION HEADING */}
        <div className="text-center mb-5">
          <h2 className="fw-bold fact-heading">
            Heathrow Airport Park and Ride Transfers to All Terminals
          </h2>
        </div>

        <div className="row g-4 justify-content-center">

          {/* CARD 1 */}
          <div className="col-md-6">
            <div className="fact-card h-100">
              <h3 className="fact-title text-center">
                Heathrow Transfers to All Terminals
              </h3>

              <p className="fact-desc">
                Heathrow Airport is one of the largest airports in the world.
                Travellers who have used it before know that the terminals are
                located across different areas of the airport, which makes it
                important to arrive at the correct terminal for your flight.
              </p>

              <p className="fact-desc">
                Heathrow Elite Parking provides reliable park and ride transfers
                from our off-site Heathrow parking facility directly to all
                Heathrow terminals. Once customers park their vehicle at our
                secure parking location, they board our shuttle transfer that
                takes them straight to their required terminal.
              </p>

              <p className="fact-desc">
                Our Heathrow airport parking transfer service ensures passengers
                reach their departure terminal comfortably without needing to
                walk long distances or navigate confusing routes within the
                airport.
              </p>
            </div>
          </div>

          {/* CARD 2 */}
          <div className="col-md-6">
            <div className="fact-card h-100">
              <h3 className="fact-title text-center">
                How Our Heathrow Airport Park and Ride Service Works
              </h3>

              <p className="fact-desc">
                If you are using Heathrow airport park and ride for the first
                time, the process might sound unfamiliar. In reality, the system
                is simple and designed to remove the stress from airport
                parking.
              </p>

              <p className="fact-desc">
                Travellers drive directly to the Heathrow Elite Parking facility,
                located just outside Heathrow Airport and easily accessible
                through nearby motorways and airport routes. After arriving,
                customers park their vehicle securely in our parking compound.
              </p>

              <p className="fact-desc">
                Once parked, passengers board our shuttle transfer which takes
                them directly to the appropriate Heathrow terminal. The entire
                park and ride process is designed to make airport parking simple,
                convenient, and efficient for travellers.
              </p>
            </div>
          </div>

          {/* CARD 3 */}
          <div className="col-md-6">
            <div className="fact-card h-100">
              <h3 className="fact-title text-center">
                Affordable Heathrow Airport Parking Prices
              </h3>

              <p className="fact-desc">
                Travel expenses can quickly add up. Flights, luggage, hotels,
                airport food, and other costs all contribute to the total travel
                budget. Parking should not be another unexpected expense.
              </p>

              <p className="fact-desc">
                Many travellers search for cheap Heathrow airport parking before
                their departure date. However, finding a balance between low
                prices and reliable service can sometimes be difficult.
              </p>

              <p className="fact-desc">
                At Heathrow Elite Parking, our goal is to provide affordable
                Heathrow parking prices without compromising on safety or
                service quality.
              </p>
            </div>
          </div>

          {/* CARD 4 */}
          <div className="col-md-6">
            <div className="fact-card h-100">
              <h3 className="fact-title text-center">
                Secure Heathrow Airport Parking You Can Trust
              </h3>

              <p className="fact-desc">
                Leaving your vehicle behind while travelling can sometimes raise
                concerns about safety. Travellers naturally want to know that
                their car is secure while they are away.
              </p>

              <p className="fact-desc">
                Heathrow Elite Parking provides secure parking near Heathrow
                Airport with controlled access points and monitored parking
                areas including full CCTV coverage.
              </p>

              <p className="fact-desc">
                Our experienced UK-based team manages the facility to maintain
                high standards of safety and service for every traveller.
              </p>
            </div>
          </div>

        </div>

      </div>

      {/* ======================
           CSS
      ======================= */}
      <style>{`
        .fact-section {
          background: transparent;
        }

        .fact-heading {
          color: #005c25;
          font-size: 36px;
        }

        .fact-card {
          background: #005c25;
          border-radius: 22px;
          padding: 36px 30px;
          box-shadow: 0 18px 40px rgba(2,48,153,0.35);
          transition: all 0.3s ease;
        }

        .fact-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 28px 55px rgba(2,48,153,0.45);
        }

        .fact-title {
          color: #ffffff;
          font-size: 22px;
          margin-bottom: 12px;
          font-weight: 700;
        }

        .fact-desc {
          color: #dbeafe;
          font-size: 15px;
          line-height: 1.8;
          margin-bottom: 12px;
          text-align: justify;
        }

        .fact-desc:last-child {
          margin-bottom: 0;
        }

        /* TABLET */
        @media (max-width: 992px) {
          .fact-heading {
            font-size: 32px;
          }

          .fact-title {
            font-size: 20px;
          }

          .fact-desc {
            font-size: 16px;
            text-align: left;
          }
        }

        /* MOBILE */
        @media (max-width: 768px) {
          .fact-heading {
            font-size: 26px;
          }

          .fact-card {
            padding: 28px 22px;
          }

          .fact-title {
            font-size: 19px;
          }

          .fact-desc {
            font-size: 16px;
            line-height: 1.8;
            text-align: left;
          }
        }
      `}</style>
    </section>
  );
}