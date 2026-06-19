import React, { useEffect, useRef } from "react";
import { FaCar, FaClock, FaShieldAlt } from "react-icons/fa";

// 👉 Import your images
import img1 from "../assets/home-bg.png";
import img2 from "../assets/first-img.png";
import img3 from "../assets/second-img.png";
import img4 from "../assets/third-img.jpeg";
import img5 from "../assets/fourth-img.png";

const HomeCard = () => {
  const scrollRef = useRef(null);

  // AUTO SCROLL
  useEffect(() => {
    const scrollContainer = scrollRef.current;
    let scrollAmount = 0;

    const autoScroll = () => {
      if (scrollContainer) {
        scrollAmount += 1;
        scrollContainer.scrollLeft = scrollAmount;

        if (
          scrollAmount >=
          scrollContainer.scrollWidth - scrollContainer.clientWidth
        ) {
          scrollAmount = 0;
        }
      }
    };

    const interval = setInterval(autoScroll, 20);
    return () => clearInterval(interval);
  }, []);

  // ✅ MULTIPLE CARD DATA
  const cards = [
    {
      img: img5,
      features: [
        { icon: <FaCar />, text: "Meet & Greet Service" },
        { icon: <FaClock />, text: "Quick Drop-Off" },
        { icon: <FaShieldAlt />, text: "24/7 Security" }
      ]
    },
    {
      img: img1,
      features: [
        { icon: <FaCar />, text: "Park & Ride Available" },
        { icon: <FaClock />, text: "Fast Transfers" },
        { icon: <FaShieldAlt />, text: "CCTV Protected" }
      ]
    }
    // {
    //   img: img3,
    //   features: [
    //     { icon: <FaCar />, text: "Terminal Parking" },
    //     { icon: <FaClock />, text: "No Waiting Time" },
    //     { icon: <FaShieldAlt />, text: "Fully Insured" }
    //   ]
    // },
    // {
    //   img: img4,
    //   features: [
    //     { icon: <FaCar />, text: "Long Stay Parking" },
    //     { icon: <FaClock />, text: "Flexible Booking" },
    //     { icon: <FaShieldAlt />, text: "Secure Storage" }
    //   ]
    // },
    // {
    //   img: img5,
    //   features: [
    //     { icon: <FaCar />, text: "Friendly Support" },
    //     { icon: <FaClock />, text: "Trained Staff" },
    //     { icon: <FaShieldAlt />, text: "Dedicated Team" }
    //   ]
    // }
  ];

  return (
    <section className="homecard-section">

      <div className="homecard-container">
        <p className="homecard-subtitle">A CALMER WAY TO BOOK</p>
        <h2 className="homecard-title">Airport Parking</h2>

        {/* CAROUSEL */}
        <div className="carousel-wrapper" ref={scrollRef}>
          <div className="carousel-track">

            {/* 👉 Duplicate cards for smooth infinite effect */}
            {[...cards, ...cards].map((card, index) => (
              <div className="homecard-card" key={index}>

                <img src={card.img} alt="Airport Parking" />

                <div className="homecard-strip">
                  {card.features.map((item, i) => (
                    <React.Fragment key={i}>
                      <div className="strip-item">
                        {item.icon}
                        <span>{item.text}</span>
                      </div>

                      {i !== card.features.length - 1 && (
                        <div className="strip-divider" />
                      )}
                    </React.Fragment>
                  ))}
                </div>

              </div>
            ))}

          </div>
        </div>
      </div>

      {/* ================= CSS ================= */}
      <style>{`

.homecard-section {
  padding: 100px 20px;
  background: #f3f4f6;
  text-align: center;
}

.homecard-container {
  max-width: 1293px;
  margin: auto;
}

.homecard-subtitle {
  font-size: 20px;
  letter-spacing: 3px;
  color: #64748b;
}

.homecard-title {
  font-size: 38px;
  font-weight: 600;
  color: #0A1A3A;
  margin-bottom: 50px;
}

/* CAROUSEL */
.carousel-wrapper {
  overflow: hidden;
}

.carousel-track {
  display: flex;
  gap: 20px;
  width: max-content;
}

/* CARD */
.homecard-card {
  min-width: 350px;
  position: relative;
  border-radius: 20px;
  overflow: hidden;
  background: #fff;
  padding: 12px;
  transition: 0.3s;
}

/* IMAGE */
.homecard-card img {
  width: 100%;
  height: 320px;
  object-fit: cover;
  border-radius: 16px;
}

/* STRIP */
.homecard-strip {
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  width: 90%;
  background: rgba(0,0,0,0.65);
  backdrop-filter: blur(10px);
  border-radius: 12px;
  padding: 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

/* ITEM */
.strip-item {
  display: flex;
  align-items: center;
  gap: 8px;
  color: #fff;
  font-size: 13px;
}

.strip-divider {
  width: 1px;
  height: 18px;
  background: rgba(255,255,255,0.3);
}

/* RESPONSIVE */
@media (max-width: 768px) {
  .homecard-card {
    min-width: 280px;
  }

  .homecard-strip {
    flex-direction: column;
    gap: 8px;
  }

  .strip-divider {
    display: none;
  }
}

      `}</style>
    </section>
  );
};

export default HomeCard;