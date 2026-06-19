import React, { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const reviewsData = [
  {
    name: "Amelia R.",
    location: "Glasgow Airport — Meet & Greet",
    text: "Driver was punctual, clear instructions sent in advance, and the pickup after landing was smooth. Zero stress.",
    image: "https://img.freepik.com/premium-vector/user-profile-icon-flat-style-member-avatar-vector-illustration-isolated-background-human-permission-sign-business-concept_157943-15752.jpg?semt=ais_incoming&w=740&q=80"
  },
  {
    name: "James K.",
    location: "Glasgow Airport — Park & Ride",
    text: "Very easy process, great communication and excellent service. Would definitely use again.",
    image: "https://img.freepik.com/premium-vector/user-profile-icon-flat-style-member-avatar-vector-illustration-isolated-background-human-permission-sign-business-concept_157943-15752.jpg?semt=ais_incoming&w=740&q=80"
  },
  {
    name: "Sophia L.",
    location: "Glasgow Airport — Meet & Greet",
    text: "Super convenient and fast. The staff were very helpful and everything was well managed.",
    image: "https://img.freepik.com/premium-vector/user-profile-icon-flat-style-member-avatar-vector-illustration-isolated-background-human-permission-sign-business-concept_157943-15752.jpg?semt=ais_incoming&w=740&q=80"
  }
];

const Reviews = () => {
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true);

  // AUTO SLIDE
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const handleNext = () => {
    setFade(false);
    setTimeout(() => {
      setIndex((prev) => (prev + 1) % reviewsData.length);
      setFade(true);
    }, 200);
  };

  const handlePrev = () => {
    setFade(false);
    setTimeout(() => {
      setIndex((prev) => (prev - 1 + reviewsData.length) % reviewsData.length);
      setFade(true);
    }, 200);
  };

  const review = reviewsData[index];

  return (
    <section id="reviews-section" className="reviews-section">

      <div className="reviews-container">

        {/* HEADER */}
        <p className="reviews-label">REVIEWS</p>
        <h2 className="reviews-title">Trusted by travellers</h2>
        <p className="reviews-subtitle">
          Feedback focused on punctuality, communication, and ease.
        </p>

        {/* MAIN */}
        <div className={`reviews-content ${fade ? "fade-in" : "fade-out"}`}>

          {/* IMAGE */}
          {/* <div className="reviews-image">
            <img src={review.image} alt={review.name} />
          </div> */}

          {/* TEXT */}
          <div className="reviews-text">

            <h3>{review.name}</h3>
            <p className="reviews-location">{review.location}</p>

            <p className="reviews-desc">{review.text}</p>

            {/* BUTTONS */}
            <div className="reviews-buttons">
              <button onClick={handlePrev}><FaChevronLeft /></button>
              <button onClick={handleNext}><FaChevronRight /></button>
            </div>

          </div>

        </div>

      </div>

      {/* ================= CSS ================= */}
      <style>{`

/* SECTION */
.reviews-section {
  padding: 120px 20px;
  background: #f8fafc;
}

/* CONTAINER */
.reviews-container {
  max-width: 1100px;
  margin: auto;
  text-align: center;
}

/* HEADER */
.reviews-label {
  letter-spacing: 3px;
  font-size: 17px;
  color: black;
  margin-bottom: 10px;
}

.reviews-title {
  font-size: 42px;
  font-weight: 700;
  color: #0A1A3A;
}

.reviews-subtitle {
  color: #64748b;
  margin-top: 10px;
  margin-bottom: 60px;
  font-size: 17px;
}

/* CONTENT */
.reviews-content {
  display: flex;
  align-items: center;
  gap: 60px;
  justify-content: center;
  transition: all 0.4s ease;
}

/* FADE ANIMATION */
.fade-in {
  opacity: 1;
  transform: translateY(0);
}

.fade-out {
  opacity: 0;
  transform: translateY(10px);
}

/* IMAGE */
.reviews-image img {
  width: 400px;
  height: 330px;
  object-fit: cover;
  border-radius: 22px;

  box-shadow:
    -20px 20px 0px rgba(1,40,133,0.08),
    -40px 40px 0px rgba(1,40,133,0.04);
}

/* TEXT */
.reviews-text {
  text-align: left;
  max-width: 500px;
}

.reviews-text h3 {
  font-size: 30px;
  color: #0A1A3A;
  margin-bottom: 6px;
}

.reviews-location {
  color: #64748b;
  margin-bottom: 20px;
  font-size: 16px;
}

.reviews-desc {
  color: #334155;
  line-height: 1.8;
  font-size: 18px;
}

/* BUTTONS */
.reviews-buttons {
  margin-top: 30px;
  display: flex;
  gap: 14px;
}

.reviews-buttons button {
  width: 45px;
  height: 45px;
  border-radius: 50%;
  border: none;
  background: #0A1A3A;
  color: #fff;
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;

  transition: all 0.3s ease;
}

.reviews-buttons button:hover {
  background: #001f66;
  transform: scale(1.1);
}

/* RESPONSIVE */
@media (max-width: 900px) {
  .reviews-content {
    flex-direction: column;
    text-align: center;
  }

  .reviews-text {
    text-align: center;
  }

  .reviews-image img {
    width: 100%;
    height: auto;
  }
}

      `}</style>
    </section>
  );
};

export default Reviews;