import React from "react";
import { Link } from "react-router-dom";
import Footer from "../component/Footer";
import Copyright from "../component/Copyright";
import Topbar from "../component/Topbar";
import NavbarElement from "../component/NavbarElement";

const Privacy = () => {
  return (
    <>
      {/* <Topbar /> */}
      <NavbarElement />

      <section className="privacy-section">
        <div className="privacy-container">

          {/* HEADER */}
          <div className="privacy-header">
            <h1 className="privacy-title">Privacy Policy</h1>
            <p className="privacy-subtitle">
              We respect your privacy and are committed to protecting your
              personal data. Here's how we handle your information.
            </p>
          </div>

          {/* CONTENT */}
          <div className="privacy-grid">

            {/* BLOCK */}
            <div className="privacy-card">
              <h3>Data we collect</h3>
              <p>
                We collect information such as your name, email, phone number,
                vehicle registration and booking details. Technical data like IP
                address and browser type may also be collected.
              </p>
            </div>

            <div className="privacy-card">
              <h3>Booking information</h3>
              <p>
                Your booking details are used to manage reservations, send
                confirmations and provide service updates. Some information may
                be shared with drivers or operators to complete your booking.
              </p>
            </div>

            <div className="privacy-card">
              <h3>Payment handling</h3>
              <p>
                Payments are securely processed via third-party providers. We do
                not store full card details and follow industry standards like
                PCI DSS.
              </p>
            </div>

            <div className="privacy-card">
              <h3>Cookies</h3>
              <p>
                Cookies help improve your browsing experience. You can control
                them via browser settings, but disabling may affect performance.
              </p>
            </div>

            <div className="privacy-card">
              <h3>Your rights</h3>
              <p>
                You can request access, correction or deletion of your data.
                Contact us anytime for privacy-related queries or concerns.
              </p>
            </div>

            <div className="privacy-card">
              <h3>Policy updates</h3>
              <p>
                We may update this policy periodically. Any important changes
                will be clearly communicated on this page.
              </p>
            </div>

          </div>

          {/* CTA */}
          <div className="privacy-actions">
            <Link to="/contact" className="btn-primary">
              Contact Us →
            </Link>
            <Link to="/termsandconditions" className="btn-outline">
              Terms & Conditions
            </Link>
          </div>

        </div>

        {/* ================= CSS ================= */}
        <style>{`

/* SECTION */
.privacy-section {
  padding: 100px 20px;
  background: linear-gradient(to bottom, #f8fafc, #ffffff);
}

/* CONTAINER */
.privacy-container {
  max-width: 1100px;
  margin: auto;
}

/* HEADER */
.privacy-header {
  text-align: center;
  margin-bottom: 60px;
}

.privacy-title {
  font-size: 44px;
  font-weight: 800;
  color: #0A1A3A;
  margin-bottom: 15px;
}

.privacy-subtitle {
  font-size: 18px;
  color: #64748b;
  max-width: 700px;
  margin: auto;
  line-height: 1.7;
}

/* GRID */
.privacy-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 25px;
}

/* CARD */
.privacy-card {
  background: #ffffff;
  padding: 25px;
  border-radius: 14px;
  box-shadow: 0 10px 25px rgba(0,0,0,0.05);
  transition: 0.3s ease;
  border-left: 5px solid #0A1A3A;
}

.privacy-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 20px 40px rgba(0,0,0,0.08);
}

.privacy-card h3 {
  font-size: 20px;
  color: #0A1A3A;
  margin-bottom: 10px;
}

.privacy-card p {
  font-size: 15px;
  color: #334155;
  line-height: 1.7;
}

/* ACTIONS */
.privacy-actions {
  margin-top: 70px;
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
}

/* BUTTONS */
.btn-primary {
  background: #0A1A3A;
  color: #fff;
  padding: 14px 28px;
  border-radius: 12px;
  font-weight: 600;
  text-decoration: none;
  transition: 0.3s;
}

.btn-primary:hover {
  background: #001f66;
  transform: translateY(-2px);
}

.btn-outline {
  border: 2px solid #0A1A3A;
  color: #0A1A3A;
  padding: 14px 28px;
  border-radius: 12px;
  font-weight: 600;
  text-decoration: none;
  transition: 0.3s;
}

.btn-outline:hover {
  background: #0A1A3A;
  color: #fff;
}

/* RESPONSIVE */
@media (max-width: 900px) {
  .privacy-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 600px) {
  .privacy-title {
    font-size: 30px;
  }

  .privacy-subtitle {
    font-size: 15px;
  }
}

        `}</style>
      </section>

      <Footer />
      <Copyright />
    </>
  );
};

export default Privacy;