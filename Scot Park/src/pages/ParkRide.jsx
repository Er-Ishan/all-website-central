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

const ParkRide = () => {
  return (
    <>
      {/* <Topbar /> */}
      <NavbarElement />

      <div className="mg-container">

        {/* HEADER */}
        <div className="mg-header">
          <h2 className="mg-main-title">Park & Ride Parking</h2>

          <p className="mg-desc">
            You park your car at our secure car park and take a shuttle transfer to the terminal. On return, you take the shuttle back to the car park and collect your vehicle.
          </p>
        </div>

        {/* GRID */}
        <div className="mg-grid">

          {/* CARD */}
          <div className="mg-card">
            <div className="mg-card-header">
              <FaCar className="card-icon" />
              <h4>Arrival instructions</h4>
            </div>
            <p>
              Your booking confirmation will include the address of the car park and directions. Arrive at the time you selected when booking. On arrival, follow the signs to the reception or check-in point and present your booking reference. You will be directed where to park.
            </p>
          </div>

          <div className="mg-card">
            <div className="mg-card-header">
              <FaUserCheck className="card-icon" />
              <h4>Transfer process</h4>
            </div>
            <p>
              After parking, make your way to the shuttle pick-up point shown in your confirmation or as directed on site. The shuttle will take you to your terminal. Allow sufficient time for the transfer and for check-in and security. We recommend following the arrival time suggested in your confirmation.

On return, catch the shuttle from the designated point at the terminal (details are in your confirmation). The shuttle will bring you back to the car park so you can collect your car and leave.
            </p>
          </div>

          <div className="mg-card full">
            <div className="mg-card-header">
              <FaClipboardCheck className="card-icon" />
              <h4>Shuttle frequency</h4>
            </div>
            <p>
              Shuttles run at intervals that suit typical flight times. The exact frequency may vary by time of day and demand. Your confirmation and on-site signage will give the latest information. If you have an early or late flight, check the transfer details when you book and allow extra time.
            </p>
          </div>

          <div className="mg-card full">
            <div className="mg-card-header">
              <FaParking className="card-icon" />
              <h4>Vehicle storage</h4>
            </div>
            <p>
            Your vehicle remains in the car park for the duration of your trip. The site is secured and used for customer parking only. You keep your keys. Lock your vehicle and take any valuables with you or store them out of sight as you would at any car park.
            </p>
          </div>

          <div className="mg-card full">
            <div className="mg-card-header">
              <FaUndo className="card-icon" />
              <h4>Return pickup</h4>
            </div>
            <p>
              When you land, follow your confirmation for where to catch the return shuttle. Shuttles collect from the designated stop. Once back at the car park, go to your vehicle and leave when ready. If your flight is delayed, the shuttle service continues to run; allow for the delay when planning your return.
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

export default ParkRide;