import React from "react";
import {
  FaCar,
  FaUserCheck,
  FaClipboardCheck,
  FaParking,
  FaUndo,
  FaExclamationTriangle,
  FaClock
} from "react-icons/fa";
import Footer from "../component/Footer";
import Copyright from "../component/Copyright";
import Topbar from "../component/Topbar";
import NavbarElement from "../component/NavbarElement";

const MeetGreet = () => {
  return (
    <>
      {/* <Topbar /> */}
      <NavbarElement />

      <div className="mg-container">

        {/* HEADER */}
        <div className="mg-header">
          <h2 className="mg-main-title">Meet & Greet Parking</h2>

          <p className="mg-desc">
            You drive to the terminal. Our driver meets you at the agreed location,
            takes your keys and vehicle, and parks it in our secure compound.
            On return, your car is brought back to you at the terminal.
          </p>
        </div>

        {/* GRID */}
        <div className="mg-grid">

          {/* CARD */}
          <div className="mg-card">
            <div className="mg-card-header">
              <FaCar className="card-icon" />
              <h4>Drop-off process</h4>
            </div>
            <p>
              Follow the arrival instructions in your booking confirmation. Arrive at the designated meeting point at or near your booked time. Our driver will be there to meet you. Have your booking reference and photo ID ready.
            </p>
          </div>

          <div className="mg-card">
            <div className="mg-card-header">
              <FaUserCheck className="card-icon" />
              <h4>Driver identification</h4>
            </div>
            <p>
              Our driver will identify themselves and confirm your booking. You can verify the booking reference and company details on your confirmation. If you have any doubt, contact the number on your confirmation before handing over your vehicle.
            </p>
          </div>

          <div className="mg-card full">
            <div className="mg-card-header">
              <FaClipboardCheck className="card-icon" />
              <h4>Vehicle inspection procedure</h4>
            </div>
            <p>
              Before handover, the driver will carry out a brief inspection of your vehicle and record its condition (mileage, fuel level, and any existing damage). You will be asked to sign the handover record. This protects both parties and forms the basis for the return check.

Keep a copy of the handover record. At return, the same check is done so that any new damage can be identified and reported through the correct channels.


            </p>
          </div>

          <div className="mg-card full">
            <div className="mg-card-header">
              <FaParking className="card-icon" />
              <h4>What happens during your trip</h4>
            </div>
            <p>
              Your vehicle is driven to our secure compound and stored for the duration of your trip. Access is controlled and the site is used only for customer vehicles. We do not use your vehicle for any other purpose.
            </p>
          </div>

          <div className="mg-card full">
            <div className="mg-card-header">
              <FaUndo className="card-icon" />
              <h4>Return process</h4>
            </div>
            <p>
              Before you land, check your confirmation for the return contact number. When you have collected your luggage and are ready, call or follow the instructions given to arrange handover. The driver will bring your car to the agreed return point. A final condition check is carried out and keys are returned to you.

Allow a short window for the driver to reach the meeting point. If your flight lands early or late, contact the number on your confirmation so we can adjust.


            </p>
          </div>

          <div className="mg-card">
            <div className="mg-card-header">
              <FaExclamationTriangle className="card-icon" />
              <h4>Handling delays</h4>
            </div>
            <p>
              If your flight is delayed, contact the number on your booking confirmation as soon as practicable. We will adjust the return time so your vehicle is ready when you land. We monitor flight status where possible, but customer communication helps us ensure a smooth handover.


            </p>
          </div>

          <div className="mg-card">
            <div className="mg-card-header">
              <FaClock className="card-icon" />
              <h4>Running late procedure</h4>
            </div>
            <p>
              If you are running late for your drop-off or return, call the number on your confirmation. We will do our best to accommodate you. Late arrival may affect subsequent bookings, so early notice is appreciated. Terms on amendments and extra charges are set out in your booking and in our Terms & Conditions.


            </p>
          </div>

        </div>

        {/* CSS */}
        <style>{`

/* CONTAINER */
.mg-container {
  padding: 70px 20px;
  background: #f9fafc;
}

/* HEADER */
.mg-header {
  max-width: 900px;
  margin: auto;
  text-align: center;
  margin-bottom: 50px;
}

.mg-main-title {
  font-size: 34px;
  font-weight: 700;
  color: #0A1A3A;
}

.mg-desc {
  margin-top: 15px;
  font-size: 17px;
  color: #444;
  line-height: 1.7;
}

/* GRID */
.mg-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 25px;
  max-width: 1100px;
  margin: auto;
}

/* CARD */
.mg-card {
  background: #fff;
  padding: 25px;
  border-radius: 14px;
  border: 1px solid #e5e7eb;
  box-shadow: 0 8px 20px rgba(0,0,0,0.06);
  transition: all 0.3s ease;
}

/* ICON + TITLE ALIGN */
.mg-card-header {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 10px;
}

.card-icon {
  font-size: 30px;
  color: #0A1A3A;
}

/* TEXT */
.mg-card h4 {
  font-size: 23px;
  font-weight: 600;
  color: #0A1A3A;
  margin: 0;
}

.mg-card p {
  font-size: 17px;
  color: #555;
  line-height: 1.6;
}

/* FULL WIDTH */
.mg-card.full {
  grid-column: span 2;
}

/* RESPONSIVE */
@media (max-width: 768px) {
  .mg-grid {
    grid-template-columns: 1fr;
  }

  .mg-card.full {
    grid-column: span 1;
  }
}

        `}</style>

      </div>

      <Footer />
      <Copyright />
    </>
  );
};

export default MeetGreet;