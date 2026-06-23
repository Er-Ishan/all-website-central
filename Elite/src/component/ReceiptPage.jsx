import React, { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import html2pdf from "html2pdf.js";
import logo from "../../public/img/Elitelogo.png";
import Footer from "../component/Footer";
import Copyright from "../component/Copyright";
import NavbarElement from "../component/NavbarElement";
import Topbar from "./Topbar";
import { saveReceiptPdfToDb, fetchCompanyInfo, sendBookingEmail } from "../services/parkingApi";

const API = import.meta.env.VITE_API_URL;


const ReceiptPage = () => {
  const location = useLocation();
  const bookingData = location.state?.bookingData || null;
  const addons = bookingData?.addons || {};
  const addonsTotal = bookingData?.addons_total || 0;
  const [companyInfo, setCompanyInfo] = useState(null);
  const [isEmailing, setIsEmailing] = React.useState(false);
  const [emailStatus, setEmailStatus] = useState("idle"); // idle | sending | success | error
  const [emailMessage, setEmailMessage] = useState("");
  const receiptRef = useRef();

  useEffect(() => {
    fetchCompanyInfo().then(info => { if (info) setCompanyInfo(info); });
  }, []);

  const formatDate = (dateInput) => {
    const date = new Date(dateInput);
    return date.toLocaleString("en-GB", {
      day: "2-digit",
      month: "short",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

 const contactPhone = companyInfo?.support_contact_no || companyInfo?.mobile_no || "";
  const contactEmail = companyInfo?.support_email_address || "";
  const ref = String(bookingData.booking_id).padStart(8, "0");


  const currentTransactionDate = formatDate(new Date());

  const downloadPDF = () => {
    const element = receiptRef.current;

    const options = {
      margin: 0.3,
      filename: `receipt_${bookingData.booking_id}.pdf`,
      image: { type: "jpeg", quality: 1 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: "in", format: "a4", orientation: "portrait" },
    };

    html2pdf().set(options).from(element).save();
  };

const handleEmailReceipt = async () => {
    setEmailStatus("sending");
    setEmailMessage("");
    const result = await sendBookingEmail(bookingData.booking_id);
    setEmailStatus(result.ok ? "success" : "error");
    setEmailMessage(result.message);
  };

  const generatePDFBase64 = async () => {
  const pdf = await html2pdf()
    .set({
      margin: 0.4,
      image: { type: "jpeg", quality: 1 },
      html2canvas: { scale: 2 },
      jsPDF: {
        unit: "in",
        format: "a4",
        orientation: "portrait",
      },
    })
    .from(receiptRef.current)
    .outputPdf("datauristring");

  return pdf.split(",")[1];
};

 const saveReceiptPdfToDB = async () => {
     try {
       const pdfBase64 = await generatePDFBase64();
       await saveReceiptPdfToDb(bookingData.booking_id, pdfBase64);
     } catch (err) {
       console.error("Receipt save failed", err);
     }
   };

  useEffect(() => {
    if (!bookingData?.booking_id) return;

    const timer = setTimeout(() => {
      saveReceiptPdfToDB();
    }, 1000); // wait 1 second for DOM render

    return () => clearTimeout(timer);
  }, [bookingData]);



  if (!bookingData) return <h2>No Receipt Data</h2>;

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreen = () => setIsMobile(window.innerWidth <= 768);
    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  return (
    <>

      
      <NavbarElement></NavbarElement>


      {/* RECEIPT */}
      <div
        ref={receiptRef}
        style={{
          maxWidth: "900px",
          padding: "24px",
          margin: "20px auto",
          fontFamily: "Arial, sans-serif",
          backgroundColor: "#fff",
          border: "1px solid #ddd",
          borderRadius: "8px",
        }}
      >
        {/* HEADER */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "20px",
            justifyContent: "space-between",
            marginBottom: "30px",
          }}
        >
          {/* Company */}
          <div style={{ flex: "1 1 250px" }}>
            <img src={logo} alt="Logo" style={{ width: "200px" }} />
            {/* <h2 style={{ margin: "10px 0" }}>Heathrow Elite Parking</h2> */}
            <p style={{ fontSize: "14px", lineHeight: "20px" }}>
              <br />
              {contactPhone}{contactPhone && contactEmail ? " | " : ""}{contactEmail}
            </p>

          </div>

          {/* Receipt Info */}
          <div
            style={{
              flex: "1 1 260px",
              border: "1px solid #ddd",
              borderRadius: "6px",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                backgroundColor: "#6dbb2c",
                padding: "12px",
                color: "#fff",
                fontWeight: "bold",
                textAlign: "center",
              }}
            >
              Receipt #{ref}
            </div>

            <div style={{ padding: "12px", fontSize: "14px" }}>
              <p>
                <strong>Transaction Date:</strong><br />
                {currentTransactionDate}
              </p>

              <p>
                <strong>Transaction ID:</strong><br />
                <span
                  style={{
                    wordBreak: "break-all",
                    fontFamily: "monospace",
                    fontSize: "13px",
                  }}
                >
                  {bookingData.transaction_id}
                </span>
              </p>
            </div>
          </div>
        </div>

        {/* CUSTOMER */}
        <div style={{ marginBottom: "24px" }}>
          <h3>Bill To</h3>
          <p style={{ fontSize: "14px" }}>
            <strong>
              {bookingData.first_name} {bookingData.last_name}
            </strong><br />
            {bookingData.email}<br />
            {bookingData.mobile}<br />
            {bookingData.vehicle_make || "-"}{" "}
            {bookingData.vehicle_registration || "-"}

          </p>
        </div>

        {/* BOOKING DETAILS */}
        <div style={{ marginBottom: "24px" }}>
          <h3>Booking Details</h3>
          <table style={{ width: "280px", fontSize: "15px" }}>
            <tbody>

              {/* SUBTOTAL */}
              <tr>
                <td>Subtotal</td>
                <td style={{ textAlign: "right" }}>
                  £{Number(bookingData.quote_amount).toFixed(2)}
                </td>
              </tr>

              {/* DISCOUNT (ONLY IF APPLIED) */}
              {Number(bookingData.discount) > 0 && (
                <tr style={{ color: "#28a745" }}>
                  <td>Discount</td>
                  <td style={{ textAlign: "right" }}>
                    -£{Number(bookingData.discount).toFixed(2)}
                  </td>
                </tr>
              )}

              {/* BOOKING FEE (ONLY IF EXISTS) */}
              {Number(bookingData.booking_fee) > 0 && (
                <tr>
                  <td>Booking Fee</td>
                  <td style={{ textAlign: "right" }}>
                    £{Number(bookingData.booking_fee).toFixed(2)}
                  </td>
                </tr>
              )}

              {/* ADD-ONS */}
              {/* {addons.cancellation_cover && (
                <tr>
                  <td>Cancellation Cover</td>
                  <td style={{ textAlign: "right" }}>£1.49</td>
                </tr>
              )}

              {addons.sms_confirmation && (
                <tr>
                  <td>SMS Confirmation</td>
                  <td style={{ textAlign: "right" }}>£0.75</td>
                </tr>
              )} */}

              {/* ADD-ONS TOTAL */}
              {/* {addonsTotal > 0 && (
                <tr>
                  <td>Add-ons Total</td>
                  <td style={{ textAlign: "right" }}>
                    £{Number(addonsTotal).toFixed(2)}
                  </td>
                </tr>
              )}
 */}

              {/* TOTAL */}
              <tr style={{ fontWeight: "bold", borderTop: "1px solid #ddd" }}>
                <td>Total Paid</td>
                <td style={{ textAlign: "right" }}>
                  £{Number(bookingData.total_payable).toFixed(2)}
                </td>
              </tr>

            </tbody>
          </table>

        </div>

        {/* SERVICE TABLE */}
        <div style={{ overflowX: "auto" }}>
          <table
            style={{
              width: "100%",
              borderCollapse: "collapse",
              fontSize: "14px",
            }}
          >
            <thead>
              <tr style={{ backgroundColor: "#6dbb2c", color: "#fff" }}>
                <th style={{ padding: "10px" }}>Product</th>
                <th style={{ padding: "10px" }}>Airport</th>
                <th style={{ padding: "10px" }}>Drop-off</th>
                <th style={{ padding: "10px" }}>Return</th>
                <th style={{ padding: "10px" }}>Days</th>
                <th style={{ padding: "10px" }}>Total</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={{ padding: "10px" }}>{bookingData.product_name}</td>
                <td style={{ padding: "10px" }}>{bookingData.travelling_from}</td>
                <td style={{ padding: "10px" }}>{formatDate(bookingData.drop_off_date)}</td>
                <td style={{ padding: "10px" }}>{formatDate(bookingData.return_date)}</td>
                <td style={{ padding: "10px", textAlign: "center" }}>{bookingData.no_of_days}</td>
                <td style={{ padding: "10px", fontWeight: "bold" }}>
                  £{bookingData.total_payable}
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* PAYMENT SUMMARY */}
        <div style={{ marginTop: "30px", display: "flex", justifyContent: "flex-end" }}>
          <table style={{ width: "280px", fontSize: "15px" }}>
            <tbody>
              <tr><td>Subtotal</td><td style={{ textAlign: "right" }}>£{bookingData.total_payable}</td></tr>
              <tr><td>Discount</td><td style={{ textAlign: "right" }}>£{bookingData.discount || "0.00"}</td></tr>
              <tr style={{ fontWeight: "bold" }}>
                <td>Total</td>
                <td style={{ textAlign: "right" }}>£{bookingData.total_payable}</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p style={{ marginTop: "40px", fontSize: "14px" }}>
          Thank you for your business!
        </p>
      </div>

      {/* ACTION BUTTONS */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "20px",
          margin: "30px 0",
          flexWrap: "wrap",
        }}
      >
        <button
          onClick={downloadPDF}
          style={{
            background: "#005c25",
            color: "#fff",
            padding: "12px 30px",
            borderRadius: "30px",
            border: "none",
            fontWeight: "bold",
            cursor: "pointer",
          }}
        >
          Download Receipt (PDF)
        </button>

         <button
          onClick={handleEmailReceipt}
          disabled={emailStatus === "sending" || emailStatus === "success"}
          style={{
            background: "#ffa200",
            color: "#fff",
            padding: "12px 30px",
            borderRadius: "30px",
            border: "none",
            fontWeight: "bold",
            cursor: emailStatus === "sending" ? "wait" : emailStatus === "success" ? "default" : "pointer",
            opacity: emailStatus === "success" ? 0.75 : 1,
          }}
        >
          {emailStatus === "sending" ? (
            <><i className="fa-solid fa-spinner fa-spin me-2"></i>Sending…</>
          ) : emailStatus === "success" ? (
            <><i className="fa-solid fa-check me-2"></i>Receipt Sent</>
          ) : (
            <><i className="fa-solid fa-envelope me-2"></i>Email Receipt</>
          )}
        </button>

      </div>
      {emailMessage && (
        <p className={`text-center mt-2 ${emailStatus === "success" ? "text-success" : "text-danger"}`} style={{ fontSize: "13px" }}>
          {emailMessage}
        </p>
      )}


      <Footer></Footer>
      <Copyright></Copyright>
    </>
  );
};

export default ReceiptPage;
