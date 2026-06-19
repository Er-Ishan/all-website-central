import { Helmet } from "react-helmet";
import { useState } from "react";
import Footer from "./Footer";
import Copyright from "./Copyright";
import NavbarElement from "./NavbarElement";
import Topbar from "../component/Topbar";
import Hero from "../component/HeroTerminalAirport";

import banner from "/img/landing-page-img.jpg";
import {
    FaMapMarkerAlt,
    FaBus,
    FaHandshake,
    FaCheck,
    FaCheckCircle, FaPlaneDeparture,
    FaPoundSign,
    FaUserCheck, FaInfoCircle, FaTrain,
    FaExclamationTriangle,
    FaArrowRight
} from "react-icons/fa";

export default function Terminal5() {

    const [openFAQ, setOpenFAQ] = useState(0);

    const toggleFAQ = (index) => {
        setOpenFAQ(openFAQ === index ? null : index);
    };


    return (
        <>
            <Helmet>
                <title>
                    Heathrow Airport Parking - Cheap and Secure - heathroweliteparking
                </title>

                <meta
                    name="description"
                    content="Book secure Heathrow Airport parking near all terminals with heathroweliteparking. Affordable rates, safe parking and simple online booking in UK."
                />

                <meta
                    name="keywords"
                    content="Heathrow airport parking, cheap Heathrow parking, Heathrow airport car parking, Heathrow parking deals, Heathrow elite parking"
                />

                <meta name="robots" content="index, follow" />

                {/* Open Graph for social sharing */}
                <meta
                    property="og:title"
                    content="Heathrow Airport Parking - Cheap and Secure"
                />
                <meta
                    property="og:description"
                    content="Affordable and secure Heathrow Airport parking near all terminals with easy online booking."
                />
                <meta property="og:type" content="website" />

                {/* Canonical URL */}
                <link
                    rel="canonical"
                    href="https://www.heathroweliteparking.co.uk/heathrow-airport-parking"
                />
            </Helmet>

            {/* <Topbar /> */}
            <NavbarElement />

            {/* ================= PAGE HEADER ================= */}
            <section className="terminal5-header text-center">
                <div className="container">
                    {/* <img
            src="https://thumbs.dreamstime.com/b/london-heathrow-airport-logo-airport-stamp-vector-illustration-london-aerodrome-london-heathrow-airport-logo-airport-stamp-vector-149754255.jpg"
            alt="London Heathrow Airport Logo"
            className="terminal5-logo"
          /> */}
                </div>
            </section>



            {/* ================= MAIN CONTENT ================= */}
            <section className="terminal5-content">
                <div className="container">

                    {/* INTRO */}
                    <div className="terminal5-intro">



                        <div className="terminal5-intro-full">

                            <h1 className="terminal5-intro-title" style={{ color: "#005c25" }}>
                                Heathrow Airport Parking: A Simple, Honest Way to Park at Heathrow
                            </h1>
                        </div>

                    </div>

                    <Hero />

                    {/* INTRO */}
                    <div className="terminal5-intro">



                        <div className="terminal5-intro-full">
                            <p className="terminal5-intro-text">
                                That’s exactly where{" "}

                                <a
                                    href="https://www.heathroweliteparking.co.uk/heathrow-airport-parking"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Heathrow airport parking
                                </a>{" "}

                                makes things easier.
                            </p>

                            <p className="terminal5-intro-text">
                                With <strong>heathrow airport car parking</strong>, you can book online in minutes. Select a day, a terminal, and make your reservation. Completed. Last-minute availability is not a concern for you. What's the most pleasing part? You keep your keys. That’s right, your car stays under your control the whole time.

                            </p>

                            <p className="terminal5-intro-text">
                                Why People Love Heathrow Elite Parking because of Affordable Heathrow Airport parking deals – no hidden costs, Secure, CCTV-monitored parking that gives you peace of mind, Self-parking  keep your keys, walk to the terminal, simple, Flexible booking changes if your flight gets messy (because let’s be honest, flights are never on time), 24/7 customer support, someone’s always around to answer questions.
                            </p>

                        </div>

                    </div>



                    {/* IMAGE + TEXT SECTION */}
                    <div className="row align-items-stretch section-spacing">

                        {/* IMAGE SIDE */}
                        <div className="col-lg-6 d-flex">
                            <div className="terminal5-image-wrapper">
                                <img
                                    src={banner}
                                    alt="Heathrow Airport Parking Services"
                                />
                            </div>
                        </div>

                        {/* TEXT SIDE */}
                        <div className="col-lg-6 d-flex">
                            <div className="terminal5-text-wrapper">

                                <h2 className="section-title mb-4" style={{ color: "#005c25" }}>
                                    Heathrow Airport Self Parking: Keep Your Keys. Keep Your Calm.
                                </h2>

                                {/* Item 1 */}
                                <div className="terminal5-item">
                                    <div className="terminal5-icon-wrapper">
                                        <FaCheck style={{ color: "#005c25" }} />
                                    </div>
                                    <div>
                                        {/* <h5 style={{ color: "#005c25" }}>Convenience</h5> */}
                                        <p>
                                            When you land at <strong>London Heathrow airport parking</strong> after organising your luggage, checking your travel documents five times, and maybe battling through morning traffic, parking becomes its own minor drama.For a moment, let's be honest. The most bothersome component of flying can sometimes be parking at airports

                                        </p>
                                    </div>
                                </div>

                                {/* Item 2 */}
                                <div className="terminal5-item">
                                    <div className="terminal5-icon-wrapper">
                                        <FaCheck style={{ color: "#005c25" }} />
                                    </div>
                                    <div>
                                        {/* <h5 style={{ color: "#005c25" }}>Park & Ride – Ideal for Longer Trips</h5> */}
                                        <p>
                                            Circling lots. Looking for spaces. awaiting a shuttle. giving your keys to a stranger.
                                            Yes. Not exactly relaxing. But <strong>cheap airport parking in London Heathrow</strong> does things differently.

                                        </p>
                                    </div>
                                </div>

                                {/* Item 3 */}
                                <div className="terminal5-item">
                                    <div className="terminal5-icon-wrapper">
                                        <FaCheck style={{ color: "#005c25" }} />
                                    </div>
                                    <div>
                                        {/* <h5 style={{ color: "#005c25" }}>Meet & Greet – Ultimate Time-Saver</h5> */}
                                        <p>You simply walk to the terminal. No strange procedures. No standing around waiting for someone to tell you where to go. And no handing your car to a valet who disappears with it somewhere you can’t see. It’s simple. Almost suspiciously simple.
                                        </p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                    {/* ABOUT + TRAVEL TIPS ROW */}
                    <div className="row section-spacing">

                        {/* RIGHT COLUMN – TRAVEL TIPS */}
                        <div className="col-lg-6">
                            <div className="terminal5-card">

                                <h2 className="section-title mb-4" style={{ color: "#005c25" }}>
                                    Heathrow Terminal 2 Parking: A Busy Terminal That Needs Simple Parking
                                </h2>

                                <div className="terminal5-item">
                                    <div className="terminal5-icon-wrapper">
                                        <FaCheck style={{ color: "#005c25" }} />
                                    </div>
                                    <div>
                                        {/* <h5 style={{ color: "#005c25" }}>Park & Ride – Ideal for Longer Trips</h5> */}
                                        <p>Now let’s talk about{" "}
                                            <a
                                                href="https://www.heathroweliteparking.co.uk/heathrow-airport-parking-terminal-2"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                Heathrow Terminal 2
                                            </a>
                                        </p>
                                    </div>
                                </div>

                                <div className="terminal5-item">
                                    <div className="terminal5-icon-wrapper">
                                        <FaCheck style={{ color: "#005c25" }} />
                                    </div>
                                    <div>
                                        {/* <h5 style={{ color: "#005c25" }}>Park & Ride – Ideal for Longer Trips</h5> */}
                                        <p>
                                            People call it the Queen’s Terminal. It handles a huge number of international flights every single day. This is wherever airlines like Virgin Atlantic, Air Canada, and Lufthansa operate. Within five minutes of strolling through it, you will come across dozens of distinct dialects.
                                            Which means the terminal gets busy. Very busy.

                                        </p>
                                    </div>
                                </div>

                                <div className="terminal5-item">
                                    <div className="terminal5-icon-wrapper">
                                        <FaCheck style={{ color: "#005c25" }} />
                                    </div>
                                    <div>
                                        {/* <h5 style={{ color: "#005c25" }}>Park & Ride – Ideal for Longer Trips</h5> */}
                                        <p>

                                            That’s exactly why many travelers search for the bold keyword: <strong>Terminal 2 parking Heathrow Airport</strong> before they travel. They want something close, secure, and easy to understand. That’s where heathrow airport park and ride quietly solves the problem

                                        </p>
                                    </div>
                                </div>


                            </div>
                        </div>

                    </div>

                    {/* ABOUT + TRAVEL TIPS ROW */}
                    <div className="row section-spacing">

                        {/* LEFT COLUMN – ABOUT */}
                        <div className="col-lg-6">
                            <div className="terminal5-card">

                                <h2 className="section-title mb-3" style={{ color: "#005c25" }}>
                                    {/* <span className="terminal5-title-icon">
                    <FaPlaneDeparture style={{ color: "#005c25" }} />
                  </span> */}
                                    Heathrow Terminal 3 Parking: Straightforward and Cheap

                                </h2>

                                

                                <div className="terminal5-item">
                                    <div className="terminal5-icon-wrapper">
                                        <FaCheck style={{ color: "#005c25" }} />
                                    </div>
                                    <div>
                                        {/* <h5 style={{ color: "#005c25" }}>Park & Ride – Ideal for Longer Trips</h5> */}
                                        <p>
                                             For airlines like Singapore Airlines, the Emirates, and Delta, parking in this part of town might be troublesome. Terminal 3 corresponds to where extended-stay and European flights are managed. 
                                        </p>
                                    </div>
                                </div>

                                <div className="terminal5-item">
                                    <div className="terminal5-icon-wrapper">
                                        <FaCheck style={{ color: "#005c25" }} />
                                    </div>
                                    <div>
                                        {/* <h5 style={{ color: "#005c25" }}>Park & Ride – Ideal for Longer Trips</h5> */}
                                        <p>
                                            Expensive prices, crowded lots-ugh. Short-term visitors have swift access, while long-term travelers can leave their automobiles for days.



                                        </p>
                                    </div>
                                </div>

                                <div className="terminal5-item">
                                    <div className="terminal5-icon-wrapper">
                                        <FaCheck style={{ color: "#005c25" }} />
                                    </div>
                                    <div>
                                        {/* <h5 style={{ color: "#005c25" }}>Park & Ride – Ideal for Longer Trips</h5> */}
                                        <p>
                                            <strong>Self-parking at Heathrow Parking</strong> enables you to walk to the terminal and still retain your keys. Your vehicle is kept safe with secure CCTV and continuous patrols.
People from Leeds, Manchester, and London find it effortless. No valet, no shuttle, just park and go.

                                        </p>
                                    </div>
                                </div>

                                <div className="terminal5-item">
                                    <div className="terminal5-icon-wrapper">
                                        <FaCheck style={{ color: "#005c25" }} />
                                    </div>
                                    <div>
                                        <p>Whether business or leisure, {" "}
                                            <a
                                                href="https://www.heathroweliteparking.co.uk/heathrow-airport-parking-terminal-3"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                Heathrow Terminal 3
                                            </a>{" "}
                                            parking keeps it simple and stress-free.

                                        </p>
                                    </div>
                                </div>




                            </div>
                        </div>

                        {/* RIGHT COLUMN – TRAVEL TIPS */}
                        <div className="col-lg-6">
                            <div className="terminal5-card">

                                <h2 className="section-title mb-4" style={{ color: "#005c25" }}>
                                    Parking at Heathrow Terminal 4: Easy Long-Haul

                                </h2>

                                <div className="terminal5-item">
                                    <div className="terminal5-icon-wrapper">
                                        <FaCheck style={{ color: "#005c25" }} />
                                    </div>
                                    <div>
                                        {/* <h5 style={{ color: "#005c25" }}>Park & Ride – Ideal for Longer Trips</h5> */}
                                        <p>
                                            Heading off on a long-haul journey from{" "}
                                            <a
                                                href="https://www.heathroweliteparking.co.uk/heathrow-airport-parking-terminal-4"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                Terminal 4
                                            </a>
                                            ? Heathrow airport parking gives you a straightforward option. You can self-park, keep your keys, and head directly toward the airport. Long-term parking is best for week-long getaways, while overnight parking is perfect for speedy flights or pick-ups Patrols and CCTV guarantee unparalleled safety.

                                        </p>
                                    </div>
                                </div>

                                <div className="terminal5-item">
                                    <div className="terminal5-icon-wrapper">
                                        <FaCheck style={{ color: "#005c25" }} />
                                    </div>
                                    <div>
                                        {/* <h5 style={{ color: "#005c25" }}>Park & Ride – Ideal for Longer Trips</h5> */}
                                        <p>
                                            London, Manchester, and Bristol visitors enjoy the quietness and quiet Long arrival times and overcrowded lots can make everything chaotic. Official parking can be pricey and unsettling.

                                        </p>
                                    </div>
                                </div>

                                <div className="terminal5-item">
                                    <div className="terminal5-icon-wrapper">
                                        <FaCheck style={{ color: "#005c25" }} />
                                    </div>
                                    <div>
                                        {/* <h5 style={{ color: "#005c25" }}>Park & Ride – Ideal for Longer Trips</h5> */}
                                        <p>
                                           You focus on your trip, not your car.
                                        </p>
                                    </div>
                                </div>

                                <div className="terminal5-item">
                                    <div className="terminal5-icon-wrapper">
                                        <FaCheck style={{ color: "#005c25" }} />
                                    </div>
                                    <div>
                                        {/* <h5 style={{ color: "#005c25" }}>Park & Ride – Ideal for Longer Trips</h5> */}
                                        <p>
                                           Terminal 4 parking at Heathrow Airport makes your journey smooth, quick, and worry-free.

                                        </p>
                                    </div>
                                </div>


                            </div>



                        </div>

                        {/* LEFT COLUMN – ABOUT */}
                        <div className="col-lg-6">
                            <div className="terminal5-card">

                                <h2 className="section-title mb-3" style={{ color: "#005c25" }}>
                                    {/* <span className="terminal5-title-icon">
                    <FaPlaneDeparture style={{ color: "#005c25" }} />
                  </span> */}
                                    Heathrow Terminal 5 Parking: Busy but Simple

                                </h2>

                                <div className="terminal5-item">
                                    <div className="terminal5-icon-wrapper">
                                        <FaCheck style={{ color: "#005c25" }} />
                                    </div>
                                    <div>
                                        {/* <h5 style={{ color: "#005c25" }}>Park & Ride – Ideal for Longer Trips</h5> */}
                                        <p>
                                            <a
                                                href="https://www.heathroweliteparking.co.uk/heathrow-airport-parking-terminal-5"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                Terminal 5
                                            </a>{" "}
                                            is packed, especially for British Airways flights. Finding airport parking Heathrow Terminal 5 can feel impossible.

                                        </p>
                                    </div>
                                </div>

                                <div className="terminal5-item">
                                    <div className="terminal5-icon-wrapper">
                                        <FaCheck style={{ color: "#005c25" }} />
                                    </div>
                                    <div>
                                        {/* <h5 style={{ color: "#005c25" }}>Park & Ride – Ideal for Longer Trips</h5> */}
                                        <p>
                                            <strong>Heathrow Elite Parking</strong> solves that. Self-park, keep your keys, walk to check-in. No shuttle waits, no stress. London, Manchester, Birmingham, and Leeds tourists admire it.


                                        </p>
                                    </div>
                                </div>

                                <div className="terminal5-item">
                                    <div className="terminal5-icon-wrapper">
                                        <FaCheck style={{ color: "#005c25" }} />
                                    </div>
                                    <div>
                                        {/* <h5 style={{ color: "#005c25" }}>Park & Ride – Ideal for Longer Trips</h5> */}
                                        <p>
                                             One moment you're debating parking, and the next you're wandering to your terminal.No matter how long you stick around, CCTV and patrols guarantee your car is safe.

                                        </p>
                                    </div>
                                </div>




                            </div>
                        </div>

                        {/* RIGHT COLUMN – TRAVEL TIPS */}
                        <div className="col-lg-6">
                            <div className="terminal5-card">

                                <h2 className="section-title mb-4" style={{ color: "#005c25" }}>
                                    Park From Major Cities Without Worry

                                </h2>

                                <div className="terminal5-item">
                                    <div className="terminal5-icon-wrapper">
                                        <FaCheck style={{ color: "#005c25" }} />
                                    </div>
                                    <div>
                                        {/* <h5 style={{ color: "#005c25" }}>Park & Ride – Ideal for Longer Trips</h5> */}
                                        <p>
                                           Flying out of Heathrow isn’t just for Londoners. People from Manchester, Birmingham, Bristol, Nottingham, all over the UK, book with <strong>Heathrow airport Parking</strong>. You can drive down, park, <strong>keep your keys</strong>, and the car’s safe while you’re away. Honestly, it’s freeing.

                                        </p>
                                    </div>
                                </div>

                                <div className="terminal5-item">
                                    <div className="terminal5-icon-wrapper">
                                        <FaCheck style={{ color: "#005c25" }} />
                                    </div>
                                    <div>
                                        {/* <h5 style={{ color: "#005c25" }}>Park & Ride – Ideal for Longer Trips</h5> */}
                                        <p>
                                            And if you’re coming from somewhere far away, like Glasgow or Newcastle, you can plan it with a little extra time, but trust me, the parking part will be effortless.
                                        </p>
                                    </div>
                                </div>



                            </div>



                        </div>

                        {/* LEFT COLUMN – ABOUT */}
                        <div className="col-lg-6">
                            <div className="terminal5-card">

                                <h2 className="section-title mb-3" style={{ color: "#005c25" }}>
                                    {/* <span className="terminal5-title-icon">
                    <FaPlaneDeparture style={{ color: "#005c25" }} />
                  </span> */}
                                    How Self-Parking Works

                                </h2>

                                <div className="terminal5-item">
                                    <div className="terminal5-icon-wrapper">
                                        <FaCheck style={{ color: "#005c25" }} />
                                    </div>
                                    <div>
                                        {/* <h5 style={{ color: "#005c25" }}>Park & Ride – Ideal for Longer Trips</h5> */}
                                        <p>
                                            It is almost too easy to explain. Drive to the parking lot. Park. <strong>Keep your keys</strong>. Walk to your terminal. When you return, come back to your vehicle and drive home.



                                        </p>
                                    </div>
                                </div>

                                <div className="terminal5-item">
                                    <div className="terminal5-icon-wrapper">
                                        <FaCheck style={{ color: "#005c25" }} />
                                    </div>
                                    <div>
                                        {/* <h5 style={{ color: "#005c25" }}>Park & Ride – Ideal for Longer Trips</h5> */}
                                        <p>
                                           And yes, if your flight is late or delayed, it’s fine. The lot’s secure. You’re not going to come back and find your car gone or messed with.
                                        </p>
                                    </div>
                                </div>



                            </div>
                        </div>

                        {/* RIGHT COLUMN – TRAVEL TIPS */}
                        <div className="col-lg-6">
                            <div className="terminal5-card">

                                <h2 className="section-title mb-4" style={{ color: "#005c25" }}>
                                    Book Your Heathrow Airport Car Parking Today

                                </h2>

                                <div className="terminal5-item">
                                    <div className="terminal5-icon-wrapper">
                                        <FaCheck style={{ color: "#005c25" }} />
                                    </div>
                                    <div>
                                        <p>
                                            Book early and make your journey easier from the very beginning. Do not wait until you are dragging suitcases at 5 AM wondering where to park.




                                        </p>
                                    </div>
                                </div>

                                


                            </div>



                        </div>

                    </div>

                </div>


            </section>

            {/* CUSTOMER REVIEWS */}
            <section className="terminal5-cta">
                <div className="review-section text-center mt-5">

                    <h3 className="review-title mb-4">
                        What Our Customers Say
                    </h3>

                    <div className="row justify-content-center g-4">

                        <div className="col-md-6">
                            <div className="review-card">
                                <p className="review-text">
                                    “Terminal 3 is normally stressful, but parking here made my trip so much easier. I kept my keys, and it was right next to the terminal!”
                                </p>
                                <p className="review-author">
                                    – James, Manchester
                                </p>
                            </div>
                        </div>

                        <div className="col-md-6">
                            <div className="review-card">
                                <p className="review-text">
                                    “I left my car for ten days. Came back, exactly where I left it. Easy, simple, perfect.”
                                </p>
                                <p className="review-author">
                                    – Hannah, Bristol
                                </p>
                            </div>
                        </div>

                    </div>

                </div>
            </section>

            {/* ================= CTA ================= */}
            <section className="terminal5-cta">
                <div className="container">
                    <div className="terminal5-cta-wrapper text-center">

                        <h2 className="terminal5-cta-head" style={{ color: "#005c25" }}>
                            Book Your Heathrow Airport

                        </h2>

                        <p>
                            Look, I can’t stress this enough. Book early. Don’t wait till you’re dragging suitcases at 5 AM wondering where to park.
                        </p>

                        <p>
                            <a
                                href="https://www.heathroweliteparking.co.uk/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Reserve your space, keep your keys
                            </a>{" "}
                            and breathe. Seriously, it’s one less thing to worry about before your flight.

                        </p>

                        <button
                            className="cta-button"
                            onClick={() => {
                                const section = document.getElementById("heroterminalairport");
                                if (section) {
                                    section.scrollIntoView({ behavior: "smooth" });
                                }
                            }}
                        >
                            Reserve Your Parking Now
                            <span className="cta-icon">
                                <FaArrowRight />
                            </span>
                        </button>

                    </div>
                </div>
            </section>



            {/* ================= FAQs ================= */}
            <section className="terminal5-faq section-spacing">
                <div className="container">

                    <h2 className="section-title text-center mb-5" style={{ color: "#005c25" }}>
                        Frequently Asked Questions (FAQs)
                    </h2>

                    <div className="faq-accordion">

                        {/* FAQ 1 */}
                        <div className={`faq-box ${openFAQ === 0 ? "active" : ""}`}>
                            <div className="faq-question" onClick={() => toggleFAQ(0)}>
                                Can I park long-term and keep my keys?


                            </div>

                            {openFAQ === 0 && (
                                <div className="faq-answer">
                                    Absolutely. That is the whole idea. You drive in, park, keep your keys, and walk to the terminal while your car stays safe.


                                </div>
                            )}
                        </div>

                        {/* FAQ 2 */}
                        <div className={`faq-box ${openFAQ === 1 ? "active" : ""}`}>
                            <div className="faq-question" onClick={() => toggleFAQ(1)}>
                                What if my flight is delayed or cancelled?




                            </div>

                            {openFAQ === 1 && (
                                <div className="faq-answer">
                                    No problem. Your car remains secure until you return. That is why many people prefer long-term parking at Heathrow Airport.


                                </div>
                            )}
                        </div>

                        {/* FAQ 3 */}
                        <div className={`faq-box ${openFAQ === 2 ? "active" : ""}`}>
                            <div className="faq-question" onClick={() => toggleFAQ(2)}>
                                Is self-parking really cheaper than official airport lots?




                            </div>

                            {openFAQ === 2 && (
                                <div className="faq-answer">
                                    In many cases, yes. You avoid extra fees while still getting secure parking. And keeping your keys is a major benefit for many travellers.




                                </div>
                            )}
                        </div>

                        {/* FAQ 4 */}
                        <div className={`faq-box ${openFAQ === 3 ? "active" : ""}`}>
                            <div className="faq-question" onClick={() => toggleFAQ(3)}>
                                How do I book my spot?


                            </div>

                            {openFAQ === 3 && (
                                <div className="faq-answer">
                                    Online. Just choose your terminal, date, and time, confirm your booking, and you are ready to go.
                                </div>
                            )}
                        </div>

                    </div>
                </div>
            </section>

            <Footer />
            <Copyright />

            {/* ================= STYLES ================= */}
            <style jsx>{`

            /* REVIEW SECTION */
.review-section {
  margin-top: 40px;
}

.review-title {
  color: #005c25;
  font-size: 28px;
  font-weight: 700;
}

.review-card {
  background: #ffffff;
  padding: 24px;
  border-radius: 14px;
  border: 1px solid #e2e8f0;
  
  height: 100%;
}

.review-text {
  font-size: 16px;
  color: #475569;
  line-height: 1.7;
  margin-bottom: 12px;
}

.review-author {
  font-weight: 600;
  color: #005c25;
  margin: 0;
}

      /* FAQ Section */
.terminal5-faq {
  padding: 80px 0;
  background: #f8faff;
}

/* FAQ Accordion */
.faq-accordion {
  max-width: 900px;
  margin: auto;
}

.faq-box {
  margin-bottom: 15px;
}

.faq-question {
  background: #e5e7eb;
  padding: 18px 22px;
  border-radius: 10px;
  font-weight: 600;
  color: #005c25;
  cursor: pointer;
  transition: all 0.3s ease;
}

.faq-box.active .faq-question {
  background: #005c25;
  color: white;
}

.faq-answer {
  padding: 18px 22px;
  line-height: 1.6;
  color: #475569;
}


.faq-item h5 {
  font-weight: 600;
  margin-bottom: 10px;
  color: #005c25;
}

.faq-item p {
  margin: 0;
  color: #475569;
  line-height: 1.6;
}

      /* Card wrapper for row layout */
.terminal5-card {
  background: #ffffff;
  padding: 6px;
  border-radius: 16px;
  height: 100%;
}

/* Make columns same height */
.row.section-spacing > div {
  display: flex;
}

.row.section-spacing > div > .terminal5-card {
  width: 100%;
}

/* Responsive */
@media (max-width: 991px) {
  .terminal5-card {
    margin-bottom: 25px;
  }
}
      
      /* Intro Section */
.terminal5-intro {
  margin-bottom: 60px;
}

.terminal5-intro-box {
  background: #f8faff;
  padding: 40px 50px;
  border-radius: 14px;
  max-width: 900px;
  margin: 0 auto;
  text-align: center;
}

.terminal5-intro-title {
  font-size: 30px;
  font-weight: 700;
  color: #062A4F;
  margin-bottom: 18px;
}

.terminal5-intro-text {
  font-size: 17px;
  line-height: 1.8;
  color: #475569;
  margin-bottom: 12px;
}

/* Mobile responsiveness */
@media (max-width: 768px) {
  .terminal5-intro-box {
    padding: 28px 24px;
  }

  .terminal5-intro-title {
    font-size: 24px;
  }

  .terminal5-intro-text {
    font-size: 15px;
  }
}

      /* CTA Section */
.terminal5-cta {
  padding: 80px 0;
  background: #f8faff;
}

.terminal5-cta-wrapper {
  max-width: 720px;
  margin: 0 auto;
}

.terminal5-cta-head {
  font-size: 32px;
  font-weight: 700;
  color: #062A4F;
  margin-bottom: 20px;
}

.terminal5-cta-text {
  font-size: 17px;
  color: #475569;
  line-height: 1.7;
  margin-bottom: 30px;
}

/* Button */
.cta-button {
  background: #062A4F;
  color: #fff;
  border: none;
  padding: 14px 32px;
  font-size: 16px;
  font-weight: 600;
  border-radius: 8px;
  display: inline-flex;
  align-items: center;
  gap: 10px;
  transition: 0.3s ease;
  cursor: pointer;
}

.cta-button:hover {
  background: #0f3685;
  transform: translateY(-2px);
}

.cta-icon {
  display: flex;
  align-items: center;
  font-size: 14px;
}

      .terminal5-item {
  display: flex;
  align-items: flex-start;
  gap: 16px;
  margin-bottom: 28px;
}

.terminal5-icon-wrapper {
  min-width: 40px;
  height: 40px;
  background: #eef3ff;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #062A4F;
  font-size: 18px;
  flex-shrink: 0;
}

.terminal5-item p {
  margin: 0;
  color: #444;
  line-height: 1.6;
}

      /* About section text */
.terminal5-about-text {
  color: #475569;
  font-size: 16px;
  line-height: 1.8;
  margin-bottom: 18px;
}

/* Title icon next to heading */
.terminal5-title-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  margin-right: 10px;
  border-radius: 10px;
  background: #eef3ff;
  color: #062A4F;
  font-size: 18px;
  vertical-align: middle;
}

/* List with icons */
.icon-list {
  list-style: none;
  padding-left: 0;
  margin: 0;
}

.icon-list li {
  display: flex;
  align-items: flex-start;
  gap: 12px;
  margin-bottom: 14px;
  color: #334155;
  font-size: 16px;
  line-height: 1.6;
}

.terminal5-li-icon {
  min-width: 22px;
  margin-top: 2px;
  color: #062A4F;
  font-size: 18px;
}

      .terminal5-item {
  display: flex;
  align-items: flex-start;
  gap: 16px;
  margin-bottom: 28px;
}

.terminal5-icon-wrapper {
  min-width: 40px;
  height: 40px;
  background: #eef3ff;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #062A4F;
  font-size: 18px;
  flex-shrink: 0;
}

.terminal5-item h5 {
  margin-bottom: 8px;
  font-weight: 600;
}

.terminal5-item p {
  margin: 0;
  color: #444;
  line-height: 1.6;
}

      .section-spacing {
  margin-top: 80px;
}

.terminal5-image-wrapper {
  width: 100%;
  height: 100%;
  border-radius: 16px;
  overflow: hidden;
}

.terminal5-image-wrapper img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.terminal5-text-wrapper {
  background: #ffffff;
  padding: 40px;
  border-radius: 16px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

@media (max-width: 991px) {
  .terminal5-image-wrapper {
    height: 400px;
  }
}

        .terminal5-header {
          padding: 18px 0;
        }

        .terminal5-logo {
          max-width: 140px;
          margin-bottom: 20px;
        }

        .terminal5-header h1 {
        color: #062A4F;
          font-size: 28px;
          font-weight: 700;
          margin-bottom: 10px;
        }

        .terminal5-header p {
          color: #64748b;
        }

        .terminal5-content {
          background: #ffffff;
          padding: 0px 0;
        }

        .terminal5-intro {
          max-width: 900px;
          margin: 0 auto 60px auto;
          font-size: 18px;
          line-height: 1.8;
          text-align: center;
        }

        .terminal5-main-image {
          width: 100%;
          border-radius: 12px;
        }

        .section-title {
          font-size: 24px;
          font-weight: 700;
          margin-bottom: 20px;
          color: #062A4F;
        }

        .section-spacing {
          margin-top: 80px;
        }

        .terminal5-list {
          margin-top: 15px;
          padding-left: 20px;
        }

        .terminal5-list li {
          margin-bottom: 10px;
        }

        .terminal5-cta {
          color: black;
          padding: 70px 0;
        }

        .terminal5-cta h2 {
          font-weight: 700;
          color: #062A4F;
          margin-bottom: 15px;
        }

        .cta-button {
          margin-top: 20px;
          background: #fbbf24;
          border: none;
          padding: 14px 30px;
          border-radius: 6px;
          font-weight: 600;
          cursor: pointer;
        }

        .cta-button:hover {
          background: #f59e0b;
        }

      `}</style>
        </>
    );
}