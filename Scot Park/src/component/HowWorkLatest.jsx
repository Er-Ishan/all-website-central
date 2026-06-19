import { useNavigate } from "react-router-dom";
import Footer from "./Footer";
import Copyright from "./Copyright";
import { useEffect, useState } from "react";
import Topbar from "./Topbar";
import NavbarElement from "./NavbarElement";
import { SlCalender, SlEnvolope, SlDirections, SlPlane, SlCheck } from "react-icons/sl";

export default function HowWorkLatest() {

    const navigate = useNavigate();
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkScreen = () => setIsMobile(window.innerWidth <= 768);
        checkScreen();
        window.addEventListener("resize", checkScreen);
        return () => window.removeEventListener("resize", checkScreen);
    }, []);

    return (
        <>
            {/* {!isMobile && <Topbar />} */}
            <NavbarElement />

            <section className="howworks-section">

                <div className="container">

                    {/* HEADER */}
                    <div className="howworks-header">
                        <h2 style={{color :"#0A1A3A"}}>How It Works</h2>
                        <p>
                            From booking to collection, here is the process. We aim for clear communication at each step so you know what to expect.
                        </p>
                    </div>

                    {/* TIMELINE */}
                    <div className="timeline">

                        <TimelineItem icon={<SlCalender />} step="Step 1" title="Book online"
                            desc="Select your airport, dates, and service type (Meet & Greet or Park & Ride). Enter your details and pay securely. You will receive a confirmation email with your booking reference and next steps." />

                        <TimelineItem icon={<SlEnvolope />} step="Step 2" title="Receive confirmation"
                            desc="Your confirmation includes your booking reference, arrival instructions, meeting point or car park address, and the contact number to use on the day. Keep it to hand for drop-off and return." />

                        <TimelineItem icon={<SlDirections />} step="Step 3" title="Arrival instructions"
                            desc="Follow the instructions in your confirmation for where to go and what time to arrive. For Meet & Greet, go to the designated meeting point. For Park & Ride, drive to the car park and check in as directed." />

                        <TimelineItem icon={<SlPlane />} step="Step 4" title="Handover / transfer"
                            desc="Meet & Greet: hand over your keys after the vehicle inspection and sign the handover record. Park & Ride: park your car, then take the shuttle to the terminal. Allow enough time for the transfer and for check-in." />

                        <TimelineItem icon={<SlPlane />} step="Step 5" title="While you're away"
                            desc="Your vehicle is stored in our secure compound (Meet & Greet) or in the Park & Ride car park. If your flight is delayed, contact the number on your confirmation so we can adjust your return handover or ensure the shuttle service can still accommodate you." />

                        <TimelineItem icon={<SlCheck />} step="Step 6" title="Return & collection"
                            desc="When you land, call or follow the instructions for return. Meet & Greet: your car is brought to the agreed point and a final condition check is done. Park & Ride: take the shuttle back to the car park and collect your vehicle. Drive away when ready." />

                    </div>

                    {/* POLICIES */}
                    <div className="policy-wrapper">

                        <h3 style={{color:"#0A1A3A"}}>Policies and contact</h3>
                        <p className="policy-sub">
                            What to do if your plans change or your flight is delayed.
                        </p>

                        <div className="row g-4">

                            <div className="col-md-6">
                                <div className="policy-card">
                                    <h5 className="text-white">Flight delay policy</h5>
                                    <p className="text-white">
                                        If your flight is delayed, contact the number on your booking confirmation. We will adjust your return time so your vehicle is ready when you land. We may monitor flight status where possible, but we rely on you to inform us of significant delays so we can plan accordingly.
                                    </p>
                                </div>
                            </div>

                            <div className="col-md-6">
                                <div className="policy-card">
                                    <h5 className="text-white">Late return policy</h5>
                                    <p className="text-white">
                                        If you return later than planned (for example due to a delay), contact us using the number on your confirmation. We will accommodate where we can. Extended stays may be subject to additional charges as set out in our Terms & Conditions. Early notice helps us manage capacity.
                                    </p>
                                </div>
                            </div>

                        </div>

                        <div className="policy-card contact-card">
                            <h5 className="text-white">Contact procedure</h5>
                            <p className="text-white">
                                On the day of your booking, use the contact number and instructions in your confirmation. For general enquiries, amendments or complaints before or after your trip, use the details on our Contact page. We aim to respond within the times stated there.
                            </p>

                            <div className="contact-link" onClick={() => navigate("/contact")}>
                                Contact us →
                            </div>
                        </div>

                    </div>

                    {/* CTA */}
                    {/* <div className="text-center mt-5">
                        <button className="cta-btn" onClick={() => navigate("/hero")}>
                            Book airport parking →
                        </button>
                    </div> */}

                </div>

                {/* CSS */}
                <style>{`

                .howworks-section {
                    color: black;
                    padding: 80px 0;
                }

                .howworks-header h2 {
                    font-size: 42px;
                    font-weight: 700;
                }

                .howworks-header p {
                    color: black;
                    max-width: 600px;
                }

               /* ===============================
   FIXED TIMELINE ALIGNMENT
=============================== */

.timeline {
  margin-top: 50px;
  position: relative;
  padding-left: 20px;
}

/* vertical line */
.timeline::before {
  content: "";
  position: absolute;
  left: 30px;
  top: 0;
  bottom: 0;
  width: 2px;
  background: rgba(0,0,0,0.1);
}

/* each item */
.timeline-item {
  margin-bottom: 50px;
  position: relative;
}

/* row layout */
.timeline-row {
  display: flex;
  align-items: flex-start;
  gap: 20px;
}

/* icon */
.timeline-icon {
  min-width: 50px;
  height: 50px;
  border-radius: 50%;
  background: #0A1A3A;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 2;
}

.timeline-icon svg {
  color: #fff;
  font-size: 20px;
}

/* content */
.timeline-content {
  flex: 1;
}

.timeline-step {
  color: #ffa200;
  font-size: 13px;
  font-weight: 600;
}

.timeline-content h4 {
  margin: 5px 0;
  font-size: 20px;
  font-weight: 700;
}

.timeline-content p {
  color: #333;
  line-height: 1.6;
}

/* MOBILE FIX */
@media(max-width:768px){
  .timeline::before {
    left: 25px;
  }

  .timeline-row {
    gap: 15px;
  }

  .timeline-icon {
    min-width: 42px;
    height: 42px;
  }
}

                /* POLICY */
                .policy-wrapper {
                    margin-top: 80px;
                    text-align: center;
                }

                .policy-card {
                    background: #0A1A3A;
                    padding: 25px;
                    border-radius: 15px;
                    margin-top: 20px;
                }

                .contact-link {
                    color: #ffa200;
                    cursor: pointer;
                    margin-top: 10px;
                }

                .cta-btn {
                    background: #ffa200;
                    border: none;
                    padding: 12px 30px;
                    border-radius: 10px;
                    color: #fff;
                }

                /* MOBILE */
                @media(max-width:768px){
                    .timeline{
                        padding-left:20px;
                    }
                }

                `}</style>

            </section>

            <Footer />
            <Copyright />
        </>
    );
}

/* TIMELINE ITEM */
function TimelineItem({ icon, step, title, desc }) {
    return (
        <div className="timeline-item">

            <div className="timeline-row">

                <div className="timeline-icon">
                    {icon}
                </div>

                <div className="timeline-content">
                    <span className="timeline-step">{step}</span>
                    <h4 style={{color:"#0A1A3A"}}>{title}</h4>
                    <p>{desc}</p>
                </div>

            </div>

        </div>
    );
}