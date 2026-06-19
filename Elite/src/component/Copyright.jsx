export default function Copyright() {
  return (
    <div className="copyright-section">
      <div className="container py-3">
        <div className="row align-items-center">

          {/* LEFT SIDE */}
          <div className="col-lg-6 col-md-6 col-12 text-center text-md-start mb-2 mb-md-0">
            <p className="m-0 copyright-text">
              © 2026 Heathrow Elite Parking Ltd. All rights reserved.
            </p>
          </div>

          {/* RIGHT SIDE */}
          <div className="col-lg-6 col-md-6 col-12 text-center text-md-end">
            <p className="m-0 developer-text">
              This site is developed and maintained by{" "}
              <a
                href="https://techbaba.co.uk/"
                target="_blank"
                rel="noopener noreferrer"
                className="developer-link"
              >
                Tech Baba
              </a>
            </p>
          </div>

        </div>
      </div>

      {/* ======================
           CSS
      ======================= */}
      <style>{`
        .copyright-section {
          background: #005c25;
          border-top: 1px solid rgba(255,255,255,0.15);
        }

        .copyright-text {
          color: #e0f2fe;
          font-size: 15px;
          font-weight: 500;
          line-height: 1.6;
        }

        .developer-text {
          color: #ffffff;
          font-size: 14px;
          font-weight: 600;
          line-height: 1.6;
        }

        .developer-link {
          color: #fbbf24;
          text-decoration: none;
          font-weight: 700;
          transition: all 0.3s ease;
        }

        .developer-link:hover {
          color: #ffd54f;
          text-decoration: underline;
        }

        /* TABLET */
        @media (max-width: 992px) {
          .copyright-text,
          .developer-text {
            font-size: 14px;
          }
        }

        /* MOBILE */
        @media (max-width: 576px) {
          .copyright-text,
          .developer-text {
            font-size: 13px;
            text-align: center;
          }

          .copyright-section .row {
            gap: 6px;
          }
        }
      `}</style>
    </div>
  );
}