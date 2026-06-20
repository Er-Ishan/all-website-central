import React, { useEffect, useState } from "react";
import Topbar from "../component/Topbar";
import NavbarElement from "../component/NavbarElement";
import Footer from "../component/Footer";
import Copyright from "../component/Copyright";

const Terms = () => {
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

      <section className="container-fluid policy-section py-5">
        <div className="container my-5">
          <div className="policy-wrapper mx-auto p-4 p-md-5">

            <h2 className="fw-bold mb-4 policy-title">
              Terms &amp; Conditions
            </h2>

            <p className="policy-intro">
              PLEASE ENSURE THAT YOU HAVE READ THE TERMS &amp; CONDITIONS ON OUR WEBSITE
              <strong> https://scotpark.co.uk/

              </strong>
            </p>

            {/* =======================
                SECTION 1
            ======================== */}
            <div className="policy-block">
              <h4>1. BOOKINGS & CONFIRMATION</h4>

              <p><strong>1.1</strong> A booking is confirmed only once full payment is received and a booking reference is issued.</p>
              <p><strong>1.2</strong> Bookings are valid only for the vehicle, terminal, date and time specified.</p>
              <p><strong>1.3</strong> Bookings are non-transferable unless agreed in writing.</p>
              <p><strong>1.3</strong> Customers are responsible for providing accurate information.</p>
              <p><strong>1.4</strong>  Scot Park Ltd accepts no liability for delays caused by traffic, airport operations, weather, security alerts, or circumstances beyond our control.</p>
            </div>

            {/* =======================
                SECTION 2
            ======================== */}
            <div className="policy-block">
              <h4>2. PAYMENT TERMS</h4>

              <p><strong>2.1</strong> Full payment must be made before service commencement.</p>
              <p><strong>2.2</strong>  Extensions of stay will incur additional daily charges.</p>
              <p><strong>2.3</strong> Additional late-return charges may apply if collection exceeds booked times.</p>
              <p><strong>2.4</strong> AdditVehicles uncollected after 30 days may be treated as abandoned in accordance with UK law.</p>
            </div>

            {/* =======================
                SECTION 3
            ======================== */}
            <div className="policy-block">
              <h4>3. CANCELLATIONS & AMENDMENTS</h4>

              <p><strong>3.1</strong> Cancellations made more than 24 hours prior may incur an administration fee.</p>
              <p><strong>3.2</strong> No refunds within 24 hours of service start time.</p>
              <p><strong>3.3</strong> Amendments within 24 hours may incur charges.</p>
              <p><strong>3.4</strong> Early returns are non-refundable.</p>
            </div>

            {/* =======================
                SECTION 4
            ======================== */}
            <div className="policy-block">
              <h4>4. VEHICLE CONDITION & CUSTOMER RESPONSIBILITIES</h4>

              <p><strong>4.1</strong> Vehicles must be roadworthy, insured, taxed and compliant with UK law.</p>
              <p><strong>4.2</strong> Customers must remove all valuables.</p>
              <p><strong>4.3</strong> Scot Park Ltd is not responsible for mechanical failures not caused by negligence.</p>
              <p><strong>4.4</strong> Pre-existing damage must be declared at handover.</p>
              <p><strong>4.5</strong> Only documented damage reported before departure from collection point will be considered.</p>
            </div>

            {/* =======================
                SECTION 5
            ======================== */}
            <div className="policy-block">
              <h4>5. LIABILITY & INSURANCE</h4>

              <p><strong>5.1</strong> Scot Park Ltd maintains motor trade insurance covering staff while operating vehicles.</p>
              <p><strong>5.2</strong> Liability is limited to damage caused by proven negligence.</p>
              <p><strong>5.3</strong> Maximum liability per claim is £50,000 unless otherwise required by law.</p>
              <p><strong>5.4</strong> Scot Park Ltd is not liable for theft, fire, flood, weather damage, acts of nature or indirect losses such as
missed flights.</p>
            </div>

            {/* =======================
                SECTION 6
            ======================== */}
            <div className="policy-block">
              <h4>6. EXCLUSIONS & LIMITATIONS</h4>

              <p><strong>6.1</strong> No responsibility is accepted for valuables left in vehicles.</p>
              <p><strong>6.2</strong> Minor scratches, stone chips or wear consistent with normal road use are excluded.</p>
              <p><strong>6.3</strong>  Interior condition is not inspected unless agreed.</p>
              <p><strong>6.4</strong> Claims below £750 may not be processed.</p>
            </div>

            {/* =======================
                SECTION 6
            ======================== */}
            <div className="policy-block">
              <h4>7. OPERATIONAL RIGHTS</h4>

              <p><strong>7.1</strong> Scot Park Ltd reserves the right to move vehicles for operational reasons.</p>
              <p><strong>7.2</strong> Vehicles may be relocated between secure compounds if required.</p>
              <p><strong>7.3</strong>  Service may be refused where customer behaviour is abusive or unsafe.</p>
            </div>

            {/* =======================
                SECTION 7
            ======================== */}
            <div className="policy-block">
              <h4>8. FORCE MAJEURE</h4>

              <p>Scot Park Ltd shall not be liable for failure to perform obligations due to events beyond reasonable control
including natural disasters, government restrictions, airport closures, strikes or security incidents.</p>
            </div>

            {/* =======================
                SECTION 8
            ======================== */}
            <div className="policy-block">
              <h4>9. GOVERNING LAW</h4>

              <p>These Terms & Conditions are governed by the laws of England & Wales and subject to UK jurisdiction.</p>
            </div>

          </div>
        </div>

        {/* ======================
            STYLES
        ======================= */}
        <style>{`
          .policy-section {
            background: linear-gradient(180deg, #f8fafc, #eef2ff);
          }

          .policy-wrapper {
            background: #fff;
            border-radius: 24px;
            max-width: 1100px;
            box-shadow: 0 30px 60px rgba(15,23,42,0.12);
          }

          .policy-title {
            font-size: 36px;
            color: #0f172a;
          }

          .policy-intro {
            font-size: 16px;
            color: #334155;
            margin-bottom: 30px;
          }

          .policy-block {
            background: #f8fafc;
            border-left: 6px solid #ffa200;
            border-radius: 16px;
            padding: 22px 24px;
            margin-bottom: 22px;
          }

          .policy-block h4 {
            font-size: 20px;
            margin-bottom: 12px;
            color: #0f172a;
          }

          .policy-block p {
            font-size: 15px;
            color: #475569;
            line-height: 1.7;
            margin-bottom: 6px;
          }

          /* Tablet */
          @media (max-width: 992px) {
            .policy-title {
              font-size: 30px;
            }
          }

          /* Mobile */
          @media (max-width: 768px) {
            .policy-title {
              font-size: 26px;
            }

            .policy-wrapper {
              padding: 22px !important;
            }

            .policy-block {
              padding: 18px 20px;
            }

            .policy-block h4 {
              font-size: 18px;
            }

            .policy-block p {
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

export default Terms;
