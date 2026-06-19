export default function Aboutus() {
  return (
    <section className="container-fluid about-section py-5">
      <div className="container py-5">
        {/* HEADER */}
        <div className="text-center mb-4">
          <h1 className="fw-bold about-title mb-3">
            About Us
          </h1>
          <p className="about-subtitle mx-auto">
            Flying from Heathrow usually comes with a mix of excitement and a little tension. New destination ahead, bags packed, travel plans in your head. But then there’s parking. And sometimes, strangely enough, that becomes the part people stress about the most.
          </p>
        </div>

        {/* CONTENT */}
        <div className="row justify-content-center">
          <div className="col-lg-10 col-xl-9">

            <p className="about-text">
              That’s exactly why <strong>Heathrow Elite Parking</strong> was created.
            </p>

            <p className="about-text">
              The goal from the beginning was pretty simple. Offer travelers a reliable and affordable <strong>Heathrow airport parking</strong> option that actually feels easy. No confusing systems. No unnecessary steps. Just a secure place to leave your car while you focus on your trip. In the case of Heathrow Elite parking, it is very simple. You get to the parking lot, select a spot and park the vehicle by yourself and walk to the airport. It is an autonomous parking system that gives you a chance to keep control over your car at all times. And by the way, travelers may leave their keys behind them. Many people prefer that. It provides them with the comfort of leaving their car where they left it without a worry that some other person will take it when they are away.
            </p>

            <p className="about-text">
              <strong>Heathrow Elite Parking</strong> has over the years established itself as a reliable parking company amongst passengers that fly in London Heathrow Airport. Other individuals would visit the service once and visit the same a few months later. Other people refer their friends or family members flying out of Heathrow to use it since it is a simple, but effective, one. Travel already has enough moving parts already, so our team knows it has. Flights are booked and unbooked, traffic occurs and in some cases, plans are changed at the very last moment. Parking should not cause any additional strain even before setting foot at the terminal.
            </p>

            <p className="about-text">
              That is why it is centered on convenience, reliability and open communication. The process is familiar and easy as booking your space only takes several minutes and once you get there it all becomes simple. Security also matters. The parking facility that is operated by the <strong>Heathrow Elite Parking</strong> is managed and maintained in such a way that travelers can leave their cars behind without worrying whenever they are away to spend a few days or even a few weeks.
            </p>

            <p className="about-text">
              The location is another aspect that the customers like. Our parking space is strategically located near the Heathrow Airport, and therefore, the passengers can access their terminal without any unnecessary wastage of time. <strong>Heathrow elite parking</strong> simplifies airport parking at the conclusion of the day. Park your own car, leave your keys, choose whatever you want and get on your ride knowing that your car is parked safely around you.
            </p>
          </div>
        </div>
      </div>

      {/* ======================
           CSS
      ======================= */}
      <style>{`
        .about-section {
          background: linear-gradient(180deg, #f8fafc, #eef2ff);
        }

        .about-title {
          color: #005c25;
          font-size: 36px;
          line-height: 1.3;
        }

        .about-subtitle {
          color: #475569;
          font-size: 18px;
          line-height: 1.7;
          max-width: 850px;
        }

        .about-text {
          color: #475569;
          font-size: 16px;
          line-height: 1.9;
          margin-bottom: 18px;
          text-align: justify;
          word-spacing: normal;
          hyphens: auto;
        }

        .about-highlight-box {
          background: #ffffff;
          border: 1px solid #dbeafe;
          border-radius: 16px;
          padding: 24px;
          margin-top: 30px;
          box-shadow: 0 8px 24px rgba(15, 23, 42, 0.06);
        }

        .highlight-title {
          color: #005c25;
          font-size: 26px;
          font-weight: 700;
          margin-bottom: 18px;
        }

        .cta-box {
          background: linear-gradient(135deg, #005c25, #0f7a34);
          border-radius: 16px;
          padding: 28px 22px;
          margin-top: 32px;
          box-shadow: 0 10px 30px rgba(0, 92, 37, 0.18);
        }

        .cta-title {
          color: #ffffff;
          font-size: 28px;
          font-weight: 700;
          margin-bottom: 12px;
        }

        .cta-text {
          color: #e2fbe8;
          text-align: center;
        }

        /* TABLET */
        @media (max-width: 992px) {
          .about-title {
            font-size: 32px;
          }

          .about-subtitle {
            font-size: 17px;
          }

          .about-text {
            font-size: 18px;
            line-height: 1.7;
            text-align: left;
          }

          .highlight-title {
            font-size: 24px;
          }

          .cta-title {
            font-size: 24px;
          }
        }

        /* MOBILE */
        @media (max-width: 768px) {
          .about-title {
            font-size: 28px;
          }

          .about-subtitle {
            font-size: 16px;
          }

          .about-text {
            font-size: 17px;
            line-height: 1.7;
            text-align: left;
          }

          .about-highlight-box {
            padding: 20px;
          }

          .highlight-title {
            font-size: 22px;
          }

          .cta-box {
            padding: 24px 18px;
          }

          .cta-title {
            font-size: 22px;
          }
        }
      `}</style>
    </section>
  );
}