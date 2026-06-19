import {
  FaSmileBeam,
  FaCheckCircle,
  FaUserShield,
  FaShieldAlt,
  FaBullseye,
  FaMapMarkerAlt,
} from "react-icons/fa";

export default function Services() {
  return (
    <section className="container-fluid services-section py-5">
      <div className="container py-5">

        {/* TITLE */}
        <div className="text-center mx-auto pb-5" style={{ maxWidth: 820 }}>
          <h2 className="services-title mb-3 fw-bold">
            Be One of Our Happy Customers
          </h2>
        </div>

        {/* GRID */}
        <div className="row g-4">

          <ServiceBox
            icon={<FaSmileBeam />}
            title="Hassle-Free Airport Parking"
            text="Enjoy a smooth and stress-free start to your journey with friendly customer support, secure parking facilities, and a quick, easy booking process designed for total peace of mind."
          />

          <ServiceBox
            icon={<FaCheckCircle />}
            title="A Better Parking Experience"
            text="We follow industry best practices to deliver efficient, dependable, and secure airport parking, ensuring your travel plans run smoothly from arrival to return."
          />

          <ServiceBox
            icon={<FaUserShield />}
            title="Trusted by Thousands of Travellers"
            text="With thousands of satisfied customers and genuine reviews, you can book with confidence knowing your vehicle is parked safely and professionally managed."
          />

          <ServiceBox
            icon={<FaShieldAlt />}
            title="Fully Secure Parking Facilities"
            text="Our parking facilities are protected by CCTV surveillance, controlled gated entry, barrier access, 24/7 monitoring, and on-site staff to keep your vehicle safe at all times."
          />

          <ServiceBox
            icon={<FaBullseye />}
            title="Our Commitment to You"
            text="Our goal is to provide secure, affordable, and convenient airport parking, with fast, reliable transfers to all airport terminals."
          />

          <ServiceBox
            icon={<FaMapMarkerAlt />}
            title="Perfectly Located Near the Airport"
            text="Located just minutes from the airport, we offer quick and efficient shuttle transfers to ensure you arrive at your terminal on time."
          />

        </div>

      </div>

      {/* ======================
           CSS (UI ONLY)
      ======================= */}
      <style>{`
        .services-section {
          background: linear-gradient(180deg, #f8fafc, #eef2ff);
        }

        .services-title {
          color: #005c25;
          font-size: 36px;
        }

        .service-card {
          background: #ffffff;
          border-radius: 24px;
          padding: 36px 28px;
          box-shadow: 0 20px 45px rgba(2,48,153,0.12);
          transition: all 0.3s ease;
          display: flex;
          flex-direction: column;
          height: 100%;
        }

        .service-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 30px 60px rgba(2,48,153,0.18);
        }

        .service-icon {
          width: 88px;
          height: 88px;
          border-radius: 50%;
          background: #005c25;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #ffffff;
          font-size: 38px;
          margin: 0 auto 20px;
          box-shadow: 0 10px 30px rgba(2,48,153,0.35);
        }

        .service-card h5 {
          color: #0f172a;
          font-weight: 700;
          margin-bottom: 12px;
          font-size: 18px;
        }

        .service-card p {
          color: #475569;
          font-size: 15px;
          margin-bottom: 0;
          margin-top: auto;
          text-align: center;
          line-height: 1.65;
          word-spacing: normal;
          letter-spacing: normal;
        }

        /* TABLET */
        @media (max-width: 992px) {
          .services-title {
            font-size: 32px;
          }

          .service-card h5 {
            font-size: 19px;
          }

          .service-card p {
            font-size: 16px;
            line-height: 1.7;
          }
        }

        /* MOBILE */
        @media (max-width: 768px) {
          .services-title {
            font-size: 26px;
          }

          .service-card {
            padding: 28px 22px;
          }

          .service-icon {
            width: 72px;
            height: 72px;
            font-size: 32px;
          }

          .service-card h5 {
            font-size: 18px;
          }

          .service-card p {
            font-size: 16px;
            line-height: 1.75;
          }
        }
      `}</style>
    </section>
  );
}

function ServiceBox({ icon, title, text }) {
  return (
    <div className="col-md-6 col-lg-4 d-flex">
      <div className="service-card text-center w-100">
        <div className="service-icon">{icon}</div>
        <h5>{title}</h5>
        <p>{text}</p>
      </div>
    </div>
  );
}
