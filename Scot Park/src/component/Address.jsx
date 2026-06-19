import { FaMapMarkerAlt, FaPlane, FaPhoneAlt } from "react-icons/fa";

export default function Address() {
  return (
    <section className="container-fluid locations-section py-5">
      <div className="container py-5">

        {/* HEADER */}
        <div className="text-center mb-5">
          <h2 className="locations-title fw-bold">
            Our Airport Car Park Addresses
          </h2>
          <p className="locations-subtitle mt-3">
            Official park & ride locations for Glasgow and Gatwick airports
          </p>
        </div>

        {/* CONTENT */}
        <div className="row g-4 justify-content-center">

          {/* Glasgow */}
          <div className="col-lg-5 col-md-6">
            <div className="address-card">
              <div className="address-header">
                <FaPlane />
                <h4>Glasgow Car Park</h4>
              </div>

              <div className="address-body">
                <FaMapMarkerAlt className="address-icon" />
                <div>
                  <p className="address-title">
                    Gregg Maurice Park & Ride (Non ULEZ)
                  </p>
                  <p>Old Rectory Road</p>
                  <p>Horton Road</p>
                  <p>SL3 9NU</p>

                  {/* PHONE */}
                  <p className="address-phone">
                    <FaPhoneAlt /> 07426151798
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* GATWICK */}
          <div className="col-lg-5 col-md-6">
            <div className="address-card">
              <div className="address-header">
                <FaPlane />
                <h4>Gatwick Car Park</h4>
              </div>

              <div className="address-body">
                <FaMapMarkerAlt className="address-icon" />
                <div>
                  <p className="address-title">
                    Gregg Maurice Park & Ride
                  </p>
                  <p>15 Massetts Road</p>
                  <p>Horley, Surrey</p>
                  <p>RH6 7DQ</p>

                  {/* PHONE */}
                  <p className="address-phone">
                    <FaPhoneAlt /> 07754647575
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* ======================
           CSS (UI ONLY)
      ======================= */}
      <style>{`
        .locations-section {
          background: linear-gradient(180deg, #ffffff, #f1f5ff);
        }

        .locations-title {
          color: #062A4F;
          font-size: 36px;
          max-width: 850px;
          margin: 0 auto;
        }

        .locations-subtitle {
          color: #475569;
          font-size: 17px;
          max-width: 700px;
          margin: 0 auto;
          line-height: 1.7;
        }

        .address-card {
          background: #ffffff;
          border-radius: 22px;
          padding: 30px;
          height: 100%;
          box-shadow: 0 18px 40px rgba(15,23,42,0.1);
          transition: transform 0.25s ease, box-shadow 0.25s ease;
        }

        .address-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 24px 50px rgba(15,23,42,0.15);
        }

        .address-header {
          display: flex;
          align-items: center;
          gap: 12px;
          padding-bottom: 18px;
          margin-bottom: 18px;
          border-bottom: 1px solid #e2e8f0;
          color: #062A4F;
        }

        .address-header svg {
          font-size: 22px;
        }

        .address-header h4 {
          margin: 0;
          font-size: 20px;
          font-weight: 600;
        }

        .address-body {
          display: flex;
          gap: 16px;
          align-items: flex-start;
          font-size: 16px;
          color: #334155;
        }

        .address-icon {
          font-size: 22px;
          color: #062A4F;
          margin-top: 4px;
        }

        .address-title {
          font-weight: 600;
          color: #0f172a;
          margin-bottom: 6px;
        }

        .address-body p {
          margin: 0;
          line-height: 1.6;
        }

        /* PHONE LINE */
        .address-phone {
          margin-top: 8px;
          display: flex;
          align-items: center;
          gap: 8px;
          font-weight: 500;
          color: #062A4F;
        }

        .address-phone svg {
          font-size: 14px;
        }

        /* TABLET */
        @media (max-width: 992px) {
          .locations-title {
            font-size: 32px;
          }

          .address-card {
            padding: 26px;
          }
        }

        /* MOBILE */
        @media (max-width: 576px) {
          .locations-title {
            font-size: 26px;
          }

          .locations-subtitle {
            font-size: 15px;
          }

          .address-body {
            font-size: 15px;
          }
        }
      `}</style>
    </section>
  );
}
