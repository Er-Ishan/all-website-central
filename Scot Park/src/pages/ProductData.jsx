import React, { useEffect, useMemo, useState } from 'react'
import Topbar from "../component/Topbar"
import Navbar from "../component/Navbar"
import Footer from "../component/Footer"
import { SlCalender } from "react-icons/sl";
import { useNavigate } from "react-router-dom";
import Copyright from "../component/Copyright"
import { FaCheck } from "react-icons/fa";
import { FaInfoCircle } from "react-icons/fa";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import planeLoader from "../assets/new-parkingbox-gif.gif";
import optionalLogo from "../assets/scotpark_logo_dark.png";

import { IoIosCheckbox } from "react-icons/io";
import {
    IoIosBusiness,     // Airport
    IoIosTime,         // Operating hours
    IoIosStar,         // Reviews
    IoIosCash,         // Airport charges / fees
    IoIosAddCircle,    // Extras
    IoIosCheckmarkCircle, // Active status
    IoIosCloseCircle   // Inactive status
} from "react-icons/io";

function addDaysToDateString(dateStr, days) {
    const d = new Date(dateStr);
    d.setDate(d.getDate() + days);
    return d.toISOString().split("T")[0];
}



import NavbarElement from '../component/NavbarElement';

const API = import.meta.env.VITE_API_URL;

const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

function formatPrettyDate(dateStr) {
    if (!dateStr) return "";
    const [y, m, d] = dateStr.split("-");
    return `${MONTHS[Number(m) - 1]} ${Number(d)}, ${y}`;
}



const ProductData = () => {

    const [isMobileDisplay, setIsMobileDisplay] = useState(false);

    useEffect(() => {
        const checkScreen = () => setIsMobileDisplay(window.innerWidth <= 768);
        checkScreen();
        window.addEventListener("resize", checkScreen);
        return () => window.removeEventListener("resize", checkScreen);
    }, []);

    const [products, setProducts] = useState([]);
    const [pricing, setPricing] = useState({});
    const [filter, setFilter] = useState("All");

    const [returnManuallySet, setReturnManuallySet] = useState(false);

    const [showModal, setShowModal] = useState(false);

    const [airportList, setAirportList] = useState([]);
    const [loading, setLoading] = useState(false);
    const [showSearchForm, setShowSearchForm] = useState(false);

    const [selectedAirport, setSelectedAirport] = useState(
        localStorage.getItem("selectedAirport") || ""
    );

    const [isMobile, setIsMobile] = useState(window.innerWidth < 576);

    const [viewType, setViewType] = useState("grid"); // "grid" | "list"


    // const [dropDateState, setDropDateState] = useState(localStorage.getItem("dropDate") || "");
    const [selectedProduct, setSelectedProduct] = useState(null);
    // const [returnDateState, setReturnDateState] = useState(localStorage.getItem("returnDate") || "");

    // const [dropDateState, setDropDateState] = useState(() => addDays(new Date(), 2));
    // const [returnDateState, setReturnDateState] = useState(() => addDays(addDays(new Date(), 2), 8));

    const defaultDrop = (() => {
        const d = new Date();
        d.setDate(d.getDate() + 2);
        return `${d.toISOString().split("T")[0]} 12:00`;
    })();

    const defaultReturn = (() => {
        const d = new Date();
        d.setDate(d.getDate() + 10);
        return `${d.toISOString().split("T")[0]} 12:00`;
    })();

    const [dropDateState, setDropDateState] = useState(() =>
        getInitialDate("dropDate", defaultDrop)
    );

    const [returnDateState, setReturnDateState] = useState(() =>
        getInitialDate("returnDate", defaultReturn)
    );


    const [appliedAirport, setAppliedAirport] = useState(
        localStorage.getItem("selectedAirport") || ""
    );

    const [appliedServiceType, setAppliedServiceType] = useState("All");


    const [promoCode, setPromoCode] = useState(
        localStorage.getItem("promoCode") || ""
    );

    const [promoData, setPromoData] = useState(null);
    const [promoError, setPromoError] = useState("");

    const parseDateOnly = (dateTime) => {
        if (!dateTime || typeof dateTime !== "string") return null;

        const datePart = dateTime.split(" ")[0];
        const date = new Date(datePart);

        return isNaN(date.getTime()) ? null : date;
    };



    const updateDateOnly = (date, type) => {
        if (!date) return;
        const yyyyMmDd = date.toISOString().split("T")[0];
        updateDateTime(yyyyMmDd, type, "date");
    };

    function getInitialDate(key, fallbackDate) {
        const stored = localStorage.getItem(key);
        if (!stored) return fallbackDate;

        const datePart = stored.split(" ")[0];
        const date = new Date(datePart);
        return isNaN(date.getTime()) ? fallbackDate : stored;
    }




    const validatePromoCode = async (code = promoCode) => {
        const normalized = (code || "").trim();
        if (!normalized) {
            setPromoData(null);
            setPromoError("");
            return true; // no promo = valid flow
        }

        try {
            const res = await fetch(`${API}/api/promocode/${encodeURIComponent(normalized)}`);
            const data = await res.json();

            if (data.success) {
                setPromoData(data.promo);
                setPromoError("");
                localStorage.setItem("promoCode", normalized);

                return true;
            } else {
                setPromoData(null);
                setPromoError("Promo code not available or expired");
                localStorage.removeItem("promo");
                return false;
            }
        } catch {
            setPromoError("Server error while checking promo");
            return false;
        }
    };




    const [activeTab, setActiveTab] = useState("overview");

    const updateDateTime = (newValue, type, part) => {
        const current = type === "drop" ? dropDateState : returnDateState;
        const [date, time] = current.split(" ");

        const updated = part === "date"
            ? `${newValue} ${time || "12:00"}`
            : `${date} ${newValue}`;

        if (type === "drop") {
            setDropDateState(updated);
            localStorage.setItem("dropDate", updated);
        } else {
            setReturnDateState(updated);
            localStorage.setItem("returnDate", updated);
        }
    };

    function formatTime(time) {
        if (!time) return "";

        // Handle "08:00", "8:00", "8"
        const [hourStr, minuteStr = "00"] = time.toString().split(":");
        let hour = parseInt(hourStr, 10);
        const minute = minuteStr.padStart(2, "0");

        const ampm = hour >= 12 ? "PM" : "AM";
        hour = hour % 12 || 12;

        return `${hour}:${minute} ${ampm}`;
    }



    useEffect(() => {
        fetch(`${API}/api/data/airports`)
            .then((res) => res.json())
            .then((data) => {
                setAirportList(data);

                // auto-select first airport if none selected
                if (!localStorage.getItem("selectedAirport") && data.length > 0) {
                    setSelectedAirport(data[0].airport_name);
                    localStorage.setItem("selectedAirport", data[0].airport_name);
                }
            })
            .catch((err) => console.error("Failed to load airports", err));
    }, []);

    useEffect(() => {
        const storedPromo = localStorage.getItem("promoCode");

        if (storedPromo) {
            setPromoCode(storedPromo);
            validatePromoCode(storedPromo);
        }
    }, []);




    const handleMoreInfo = async (id) => {
        try {
            const res = await fetch(`${API}/api/parking-product/${id}`);
            const result = await res.json();

            if (result.success) {
                setSelectedProduct(result.data); // store full product info
                setShowModal(true);             // open popup
            }
        } catch (error) {
            console.log("More info error:", error);
        }
    };

    // Auto refresh pricing
    const refreshPricing = () => {
        if (!dropDateState || !returnDateState) return;

        setPricing({});
        fetchAllProducts();
    };

    const closeModal = () => {
        setShowModal(false);
        setSelectedProduct(null);
    };

    const navigate = useNavigate();

    const formatDate = (dateStr) => {
        const date = new Date(dateStr);
        return date.toLocaleDateString("en-GB", {
            day: "2-digit",
            month: "short",
            year: "numeric"
        });
    };

    // Fetch All Products Initially
    useEffect(() => {
        const init = async () => {
            if (promoCode) {
                const ok = await validatePromoCode(promoCode);
                if (!ok) return;
            }
            fetchAllProducts();
        };

        init();
    }, []);


    const fetchDynamicPrice = async (product_id, dropDate, returnDate) => {
        try {
            const res = await fetch(`${API}/api/calculate-price`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    product_id,
                    dropoff_date: dropDate,
                    return_date: returnDate
                })
            });

            if (!res.ok) return null;

            const result = await res.json();
            if (!result?.success) return null;

            const priceNum = Number(result.total_price);
            return Number.isFinite(priceNum) ? priceNum : null;
        } catch (error) {
            console.error("Fetch error:", error);
            return null;
        }
    };

    const fetchAllProducts = async () => {
        try {
            setLoading(true); // ✅ START

            const res = await fetch(`${API}/api/parking-product`);
            const data = await res.json();

            let list = [];

            if (Array.isArray(data.data)) {
                list = data.data;
            } else if (Array.isArray(data)) {
                list = data;
            }

            setProducts(list);

            if (dropDateState && returnDateState && list.length) {
                // Limit concurrency to avoid flooding backend/DB (and reduce UI re-renders by batching state updates)
                const CONCURRENCY = 6;
                const nextPricing = {};

                for (let i = 0; i < list.length; i += CONCURRENCY) {
                    const chunk = list.slice(i, i + CONCURRENCY);
                    const results = await Promise.all(
                        chunk.map(async (p) => {
                            if (!p?.id) return null;
                            const price = await fetchDynamicPrice(p.id, dropDateState, returnDateState);
                            return price === null ? null : { id: p.id, price };
                        })
                    );

                    for (const r of results) {
                        if (r) nextPricing[r.id] = r.price;
                    }
                }

                setPricing((prev) => ({ ...prev, ...nextPricing }));
            }

        } catch (err) {
            console.error(err);
        } finally {
            setLoading(false); // ✅ STOP ONLY AFTER DONE
        }
    };

    const filteredProducts = useMemo(() => {
        return products
            .filter((p) => {
                const matchAirport =
                    !appliedAirport || p.airport_name === appliedAirport;

                const matchService =
                    appliedServiceType === "All"
                        ? true
                        : p.service_type === appliedServiceType;

                return matchAirport && matchService;
            })
            .sort((a, b) => {
                const priceA = getFinalPrice(a);
                const priceB = getFinalPrice(b);
                return priceA - priceB;
            });
    }, [products, appliedAirport, appliedServiceType, pricing, promoData]);

    // SEARCH BUTTON CLICK LOGIC
    const handleSearch = async (e) => {
        e.preventDefault();

        if (!dropDateState || !returnDateState) {
            alert("Please select both dates");
            return;
        }

        const promoValid = await validatePromoCode();
        if (!promoValid) return;

        setAppliedAirport(selectedAirport);
        setAppliedServiceType(filter);

        localStorage.setItem("selectedAirport", selectedAirport);
        localStorage.setItem("dropDate", dropDateState);
        localStorage.setItem("returnDate", returnDateState);

        setPricing({});

        await fetchAllProducts(); // ✅ WAIT FOR API
    };


    function getFinalPrice(item) {
        const basePrice = Number(pricing[item.id] || 0);

        if (!basePrice) return Infinity; // products without price go last

        if (promoData) {
            if (promoData.discount_type === "percentage") {
                return basePrice - (basePrice * Number(promoData.discount_value)) / 100;
            } else {
                return basePrice - Number(promoData.discount_value);
            }
        }

        return basePrice;
    };


    // Filter visible products (has price only)
    // const filteredProducts = products.filter((p) => {
    //     const matchAirport =
    //         !appliedAirport || p.airport_name === appliedAirport;

    //     const matchService =
    //         appliedServiceType === "All"
    //             ? true
    //             : p.service_type === appliedServiceType;

    //     return matchAirport && matchService;
    // });

    return (
        <>
            {/* {!isMobileDisplay && <Topbar />} */}
            <NavbarElement />

            <style>
                {`

                

                .loader-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60vh;
  flex-direction: column;
}

.plane-loader {
  width: 120px;
  height: auto;
}

.loader-text {
  margin-top: 15px;
  font-size: 18px;
  font-weight: 600;
  color: #0A1A3A;
}

                .price-wrapper {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
}

.old-price {
    font-size: 13px;
    color: #9ca3af;
    text-decoration: line-through;
    margin-bottom: 2px;
}

.pricing-tag {
    font-size: 26px;
    font-weight: 700;
    color: #0a2c80;
}

.discount-pill {
    background: #16a34a;
    color: #fff;
    font-size: 11px;
    padding: 3px 8px;
    border-radius: 20px;
    margin-bottom: 4px;
    display: inline-block;
}

                    /* OLD PRICE */
.old-price {
    font-size: 14px;
    color: #999;
    text-decoration: line-through;
    margin-bottom: 2px;
}

/* NEW PRICE */
.pricing-tag {
    font-size: 28px;
    font-weight: 700;
    color: #0a2c80;
}

/* DISCOUNT BADGE (OPTIONAL) */
.discount-badge {
    background: #16a34a;
    color: #fff;
    font-size: 12px;
    padding: 4px 8px;
    border-radius: 4px;
    margin-bottom: 6px;
    display: inline-block;
}

                    .filter-btn {
                        background:#5D728A;
                        border:none;
                        color:white;
                        padding:10px 18px;
                        border-radius:8px;
                        margin-right:10px;
                        font-size:15px;
                    }
                    .filter-btn.active {
                        background:#0A1A3A;
                    }

                    .pricing-wrapper {
                        background: linear-gradient(to bottom, #eef3ff, #e3e9ff);
                        padding: 70px 0;
                    }

                    /* CARD LAYOUT FIX – make cards equal height */
                    .pricing-card {
    border-radius: 16px;
    overflow: hidden;
    border: none;
    background: #fff;
    box-shadow: 0 10px 25px rgba(0,0,0,0.08);
    transition: 0.3s;
    display: flex;
    flex-direction: column;
    height: 100%;
}

.card-header-custom {
    background: #0A1A3A;
    color: white;
    text-align: center;
    padding: 25px 15px 16px;
    position: relative;
    border-top-left-radius: 16px;
    border-top-right-radius: 16px;

    display: flex;              /* ✅ added */
    flex-direction: column;     /* ✅ added */
    align-items: center;        /* ✅ added */
}

.card-header-custom::after {
    content: "";
    position: absolute;
    bottom: -35px;
    left: 0;
    width: 100%;
    height: 26px;
    background: #fff;
    border-top-left-radius: 100% 50px;
    border-top-right-radius: 100% 50px;
}

/* IMAGE */
.card-logo {
    height: 80px;            /* ✅ reduce height */
    width: 100%;             /* ✅ control width */
    max-width: 220px;        /* ✅ limit stretch */
    object-fit: contain;
    display: block;
    margin: 0 auto 10px auto;
}
    
/* TITLE */
.card-title {
    font-size: 22px;
    font-weight: 700;
    margin-bottom: 5px;
}

.card-subtitle {
    font-size: 13px;
    opacity: 0.8;
}

/* BADGE POSITION */
.card-badge {
    margin-top: 10px;
}

/* CONTENT AREA */
.card-body-custom {
    padding: 20px 18px 20px;   /* increase left-right space */
    flex-grow: 1;
}

/* FEATURES */
.pricing-list li {
    font-size: 17px;
    margin-bottom: 10px;
}

/* REVIEW */
.review-text {
    font-size: 14px;
}

/* PRICE SECTION */
.pricing-footer {
    border-top: 1px solid #eee;
    padding: 15px 20px;
}

/* PRICE */
.pricing-tag {
    font-size: 28px;
    font-weight: 700;
    color: #0a2c80;
}

/* BUTTON */
.btn-book {
    background: #0A1A3A;
    color: #fff;
    padding: 10px 18px;
    font-weight: 600;
    border-radius: 6px;
    border: none;
    transition: 0.3s;
}

.btn-book:hover {
    background: #e67a00;
}
                    

                    .search-field {
                        height: 48px !important;
                        border-radius: 12px !important;
                        font-size: 14px;
                        border: 1px solid #d6d6e0 !important;
                    }

                    .input-group .form-control {
                        border-right: 0 !important;
                        border-radius: 12px 0 0 12px !important;
                    }

                    .input-group-text {
                        border-radius: 0 12px 12px 0 !important;
                        border: 1px solid #d6d6e0 !important;
                        border-left: 0 !important;
                        cursor: pointer;
                    }

                    .form-label {
                        font-size: 14px;
                        color: #1B1B1D;
                    }

                    /* Fix column spacing & layout */
                    .row.g-3 > div {
                        padding-right: 12px;
                        padding-left: 12px;
                    }

                    /* Small screen improvements */
                    @media(max-width: 768px) {
                        .search-field {
                            width: 100%;
                            height: 44px !important;
                            font-size: 13px;
                        }
                        .input-group-text {
                            padding: 8px 10px;
                        }
                    }

                    /* Button visual fix */
                    button.btn.btn-primary {
                        font-size: 15px;
                        font-weight: 600;
                        padding: 13px 32px !important;
                    }

                    /* Only disable icon click — NOT the full container */
                    .input-group-text {
                        pointer-events: none !important;
                    }

                    /* Hide native icon but allow input click */
                    input[type="date"]::-webkit-calendar-picker-indicator {
                        opacity: 0 !important;
                        cursor: pointer;
                        width: 100%;
                        height: 100%;
                        position: absolute;
                        left: 0;
                    }

                    /* Make sure input is clickable */
                    input[type="date"] {
                        position: relative;
                        z-index: 2;
                        cursor: pointer;
                    }

                    /* CHECK ICON LIST STYLING */
                    .pricing-list {
                        list-style: none;
                        padding: 0;
                        margin-top: 16px;
                        text-align: left;
                        flex-grow: 1; /* stretch to fill card height */
                    }

                    .pricing-list li {
                        display: flex;
                        align-items: flex-start;
                        gap: 8px;
                        margin-bottom: 10px;
                    }

                    .list-icon {
                        margin-top: 2px;
                        flex-shrink: 0;
                        color: #0a2c80;
                    }

                    /* footer (price + button) stick to bottom */
                    .pricing-footer {
                        margin-top: auto;
                        display: flex;
                        justify-content: space-between;
                        align-items: center;
                    }

                    /* Hide grid/list toggle on mobile only */
@media (max-width: 768px) {
    .view-toggle {
        display: none !important;
    }
}

/* PREMIUM NON-REFUNDABLE BADGE */
/* NON-REFUNDABLE – RED GLOWING BULB ANIMATION */
.nonrefundable-badge {
    display: inline-flex;
    align-items: center;
    gap: 6px;

    background: radial-gradient(circle at top, #ff6b6b, #c62828);
    color: #fff;

    font-size: 14px;
    font-weight: 700;
    letter-spacing: 0.4px;
    text-transform: uppercase;

    padding: 6px 14px;
    border-radius: 2px;

    box-shadow:
        0 0 6px rgba(229, 57, 53, 0.6),
        0 0 12px rgba(229, 57, 53, 0.4);

}

/* Optional: icon glow */
.nonrefundable-badge svg {
    font-size: 14px;
    filter: drop-shadow(0 0 4px rgba(229, 57, 53, 0.9));
}

/* RED GLOW ANIMATION */
@keyframes redBulbGlow {
    0% {
        box-shadow:
            0 0 6px rgba(229, 57, 53, 0.5),
            0 0 12px rgba(229, 57, 53, 0.3);
        transform: scale(1);
        filter: brightness(1);
    }

    50% {
        box-shadow:
            0 0 16px rgba(229, 57, 53, 1),
            0 0 32px rgba(229, 57, 53, 0.8);
        transform: scale(1.06);
        filter: brightness(1.2);
    }

    100% {
        box-shadow:
            0 0 6px rgba(229, 57, 53, 0.5),
            0 0 12px rgba(229, 57, 53, 0.3);
        transform: scale(1);
        filter: brightness(1);
    }
}


/* REFUNDABLE – GLOWING BULB ANIMATION */
.refundable-badge {
    display: inline-flex;
    align-items: center;
    gap: 6px;

    background: radial-gradient(circle at top, #ffe066, #fbc02d);
    color: #3d2f00;

    font-size: 14px;
    font-weight: 700;
    letter-spacing: 0.4px;
    text-transform: uppercase;

    padding: 6px 14px;
    border-radius: 2px;

    box-shadow:
        0 0 6px rgba(255, 193, 7, 0.6),
        0 0 12px rgba(255, 193, 7, 0.4);
}

/* Optional: icon glow */
.refundable-badge svg {
    font-size: 14px;
    filter: drop-shadow(0 0 4px rgba(255, 193, 7, 0.9));
}

/* GLOW ANIMATION */
@keyframes bulbGlow {
    0% {
        box-shadow:
            0 0 6px rgba(255, 193, 7, 0.5),
            0 0 12px rgba(255, 193, 7, 0.3);
        transform: scale(1);
        filter: brightness(1);
    }

    50% {
        box-shadow:
            0 0 14px rgba(255, 193, 7, 0.9),
            0 0 28px rgba(255, 193, 7, 0.7);
        transform: scale(1.05);
        filter: brightness(1.15);
    }

    100% {
        box-shadow:
            0 0 6px rgba(255, 193, 7, 0.5),
            0 0 12px rgba(255, 193, 7, 0.3);
        transform: scale(1);
        filter: brightness(1);
    }
}




/* icon size consistency */
.nonrefundable-badge svg {
    font-size: 13px;
}



                    
                `}
            </style>

            <div className="pricing-wrapper">
                <div className="container text-center">

                    <h2 className=" mb-1" style={{ color: "black" }}>
                        <span style={{ color: "#ffa200" }}>{selectedAirport}</span> Parking Deals
                    </h2>

                    {dropDateState && returnDateState && (
                        <div className="d-flex justify-content-center align-items-center gap-3 mb-3 flex-wrap">
                            <p className="mb-0">
                                <b>
                                    {formatDate(dropDateState)} {dropDateState.split(" ")[1] || "12:00"}
                                </b>{" "}
                                -{" "}
                                <b>
                                    {formatDate(returnDateState)} {returnDateState.split(" ")[1] || "12:00"}
                                </b>
                            </p>

                            <button
                                type="button"
                                className="btn btn text-white btn-sm px-3"
                                style={{ background: "#0A1A3A" }}
                                onClick={() => setShowSearchForm((prev) => !prev)}
                            >
                                Edit
                            </button>
                        </div>
                    )}


                    {/* Search fields */}
                    {showSearchForm && (
                        <div className="container my-4">
                            <div className="p-4 bg-white border rounded-3 shadow-sm">
                                <form className="row g-3 align-items-end" onSubmit={handleSearch}>

                                    {/* SERVICE TYPE FILTER */}
                                    {/* <div className="col-12 col-md-4 col-lg">
                                        <label className="form-label fw-bold">Service Type</label>
                                        <select
                                            className="form-select search-field"
                                            value={filter}
                                            onChange={(e) => setFilter(e.target.value)}
                                        >
                                            <option value="All">All Services</option>
                                            <option value="Park & Ride">Park & Ride</option>
                                            <option value="Meet & Greet">Meet & Greet</option>
                                        </select>
                                    </div> */}


                                    {/* AIRPORT FILTER */}
                                    {/* <div className="col-12 col-md-4 col-lg">
                                        <label className="form-label fw-bold">Airport</label>
                                        <select
                                            className="form-select search-field"
                                            value={selectedAirport}
                                            onChange={(e) => setSelectedAirport(e.target.value)}
                                        >
                                            <option value="Glasgow">Glasgow</option>
                                            <option value="Gatwick">Gatwick</option>
                                        </select>
                                    </div> */}


                                    {/* DROP-OFF DATE */}
                                    <div className="col-6 col-md-4 col-lg">
                                        <label className="form-label fw-bold">Drop-off Date</label>
                                        <div className="input-group">
                                            <input
                                                type="text"
                                                className="form-control search-field"
                                                value={formatPrettyDate(dropDateState.split(" ")[0])}
                                                readOnly
                                                onClick={() =>
                                                    document.getElementById("dropDateNative").showPicker()
                                                }
                                            />
                                            <input
                                                id="dropDateNative"
                                                type="date"
                                                className="position-absolute top-0 start-0 w-100 h-100 opacity-0"
                                                value={dropDateState.split(" ")[0]}
                                                min={new Date().toISOString().split("T")[0]}
                                                onChange={(e) => {
                                                    const newDropDate = e.target.value;

                                                    updateDateTime(newDropDate, "drop", "date");

                                                    if (!returnManuallySet) {
                                                        const autoReturnDate = addDaysToDateString(newDropDate, 8);
                                                        updateDateTime(autoReturnDate, "return", "date");
                                                    }
                                                }}

                                            />
                                            <span className="input-group-text bg-white">
                                                <SlCalender />
                                            </span>
                                        </div>
                                    </div>

                                    {/* DROP-OFF TIME */}
                                    <div className="col-6 col-md-4 col-lg">
                                        <label className="form-label fw-bold">Drop-off Time</label>
                                        <select
                                            className="form-select search-field"
                                            value={dropDateState.split(" ")[1] || "12:00"}
                                            onChange={(e) =>
                                                updateDateTime(e.target.value, "drop", "time")
                                            }
                                        >
                                            {Array.from({ length: 96 }).map((_, i) => {
                                                const hour = String(Math.floor(i / 4)).padStart(2, "0");
                                                const minute = String((i % 4) * 15).padStart(2, "0");
                                                const timeValue = `${hour}:${minute}`;

                                                return (
                                                    <option key={timeValue} value={timeValue}>
                                                        {timeValue}
                                                    </option>
                                                );
                                            })}
                                        </select>
                                    </div>

                                    {/* RETURN DATE */}
                                    <div className="col-6 col-md-4 col-lg">
                                        <label className="form-label fw-bold">Return Date</label>
                                        <div className="input-group">
                                            <input
                                                type="text"
                                                className="form-control search-field"
                                                value={formatPrettyDate(returnDateState.split(" ")[0])}
                                                readOnly
                                                onClick={() =>
                                                    document.getElementById("returnDateNative").showPicker()
                                                }
                                            />
                                            <input
                                                id="returnDateNative"
                                                type="date"
                                                className="position-absolute top-0 start-0 w-100 h-100 opacity-0"
                                                value={returnDateState.split(" ")[0]}
                                                min={dropDateState.split(" ")[0]}
                                                onChange={(e) => {
                                                    updateDateTime(e.target.value, "return", "date");
                                                    setReturnManuallySet(true);
                                                }}

                                            />
                                            <span className="input-group-text bg-white">
                                                <SlCalender />
                                            </span>
                                        </div>
                                    </div>

                                    {/* RETURN TIME */}
                                    <div className="col-6 col-md-4 col-lg">
                                        <label className="form-label fw-bold">Return Time</label>
                                        <select
                                            className="form-select search-field"
                                            value={returnDateState.split(" ")[1] || "12:00"}
                                            onChange={(e) =>
                                                updateDateTime(e.target.value, "return", "time")
                                            }
                                        >
                                            {Array.from({ length: 96 }).map((_, i) => {
                                                const hour = String(Math.floor(i / 4)).padStart(2, "0");
                                                const minute = String((i % 4) * 15).padStart(2, "0");
                                                const timeValue = `${hour}:${minute}`;

                                                return (
                                                    <option key={timeValue} value={timeValue}>
                                                        {timeValue}
                                                    </option>
                                                );
                                            })}
                                        </select>
                                    </div>


                                    {/* PROMO CODE */}
                                    <div className="col-12 col-md-4 col-lg">
                                        <label className="form-label fw-bold">Promo Code</label>
                                        <input
                                            type="text"
                                            className="form-control search-field"
                                            placeholder="Enter code"
                                            value={promoCode}
                                            onChange={(e) =>
                                                setPromoCode(e.target.value.toUpperCase())
                                            }
                                        />

                                        {promoError && (
                                            <small className="text-danger">{promoError}</small>
                                        )}

                                        {promoData && (
                                            <small className="text-success d-block">
                                                Promo applied: {promoData.discount_value}
                                                {promoData.discount_type === "percentage" ? "%" : "£"} off
                                            </small>
                                        )}
                                    </div>

                                    {/* SEARCH BUTTON */}
                                    <div className="col-12 col-lg-auto d-flex align-items-end">
                                        <button
                                            type="submit"
                                            className="btn btn-primary w-100"
                                            style={{
                                                background: "#0A1A3A",
                                                border: "none",
                                                height: "48px",
                                                borderRadius: "12px",
                                                padding: "0 40px",
                                                fontWeight: 600
                                            }}
                                        >
                                            Search
                                        </button>
                                    </div>

                                </form>
                            </div>
                        </div>
                    )}


                    {/* Results Summary + View Toggle */}
                    <div className="d-flex flex-wrap justify-content-between align-items-center mb-4 px-2">

                        {/* LEFT SIDE – SERVICE TABS */}
                        {/* <div className="d-flex gap-2 flex-wrap">
                            {["All", "Park & Ride", "Meet & Greet"].map((type) => (
                                <button
                                    key={type}
                                    className={`filter-btn ${appliedServiceType === type ? "active" : ""}`}
                                    onClick={() => setAppliedServiceType(type)}
                                >
                                    {type === "All" ? "All" : type}
                                </button>
                            ))}
                        </div> */}


                        {/* RIGHT SIDE – VIEW TOGGLE */}
                        <div className="view-toggle d-flex gap-2">
                            <button
                                className="btn btn-sm"
                                onClick={() => setViewType("grid")}
                                title="Grid View"
                                style={{
                                    color: viewType === "grid" ? "#fff" : "#0A1A3A",
                                    backgroundColor: viewType === "grid" ? "#0A1A3A" : "transparent",
                                    border: "1px solid #0A1A3A"
                                }}
                            >
                                <svg width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                    <rect width="6" height="6" x="1" y="1" />
                                    <rect width="6" height="6" x="9" y="1" />
                                    <rect width="6" height="6" x="1" y="9" />
                                    <rect width="6" height="6" x="9" y="9" />
                                </svg>
                            </button>


                            <button
                                className="btn btn-sm"
                                onClick={() => setViewType("list")}
                                title="List View"
                                style={{
                                    color: viewType === "list" ? "#fff" : "#0A1A3A",
                                    backgroundColor: viewType === "list" ? "#0A1A3A" : "transparent",
                                    border: "1px solid #0A1A3A"
                                }}
                            >
                                <svg width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                    <rect width="12" height="2" x="2" y="2" />
                                    <rect width="12" height="2" x="2" y="7" />
                                    <rect width="12" height="2" x="2" y="12" />
                                </svg>
                            </button>

                        </div>
                    </div>


                    <div className="row g-4 align-items-stretch">
                        {loading ? (
                            <div className="loader-container flex-column">
                                <img src={planeLoader} className="plane-loader" alt="Loading" />

                                <div className="loader-text">
                                    Searching Parking Deals...
                                </div>
                            </div>
                        ) : filteredProducts.length === 0 ? (
                            <h4 className="text-center text-muted"></h4>
                        ) : (
                            filteredProducts.map((item) => (
                                <div
                                    className={
                                        viewType === "grid"
                                            ? "col-12 col-sm-6 col-lg-3"
                                            : "col-12"
                                    }
                                    key={item.id}
                                >



                                    {viewType === "list" ? (
                                        <div className="pricing-card border-2 p-4 d-flex flex-column flex-lg-row align-items-start gap-4">

                                            {/* LEFT – IMAGE */}
                                            <div className="flex-shrink-0">
                                                <img
                                                    src={item.image_data || optionalLogo}
                                                    alt={item.product_name}
                                                    style={{
                                                        width: "140px",
                                                        height: "80px",
                                                        objectFit: "contain"
                                                    }}
                                                />
                                            </div>

                                            {/* CENTER – DETAILS */}
                                            <div className="flex-grow-1">

                                                {/* Service Type */}
                                                <div style={{ color: "#0A1A3A" }} className="fw-semibold mb-1">
                                                    {item.service_type || "Park & Ride Service"}
                                                </div>

                                                {/* Product Name */}
                                                <h5 className="fw-bold mb-1">
                                                    {item.product_name}
                                                </h5>

                                                {/* NON-REFUNDABLE STRIPE */}
                                                {item.nonflex === "Non-Refundable" && (
                                                    <span className="nonrefundable-badge mb-3 d-inline-block">
                                                        Non-Refundable
                                                    </span>
                                                )}

                                                {item.nonflex === "Refundable" && (
                                                    <span className="refundable-badge mb-3 d-inline-block">
                                                        Refundable
                                                    </span>
                                                )}


                                                {/* FEATURES */}
                                                <ul className="list-unstyled mb-2">

                                                    <li className="d-flex align-items-center mb-2">
                                                        <IoIosCheckmarkCircle style={{ color: "#0A1A3A" }} className="me-2" />
                                                        {item.point_1}
                                                    </li>

                                                    <li className="d-flex align-items-center mb-2">
                                                        <IoIosCheckmarkCircle style={{ color: "#0A1A3A" }} className="me-2" />
                                                        {item.point_2}
                                                    </li>

                                                    <li className="d-flex align-items-center mb-2">
                                                        <IoIosCheckmarkCircle style={{ color: "#0A1A3A" }} className="me-2" />
                                                        {item.point_3}
                                                    </li>

                                                    <li className="d-flex align-items-center mb-2">
                                                        <IoIosCheckmarkCircle style={{ color: "#0A1A3A" }} className="me-2" />
                                                        {item.point_4}
                                                    </li>

                                                    <li className="d-flex align-items-center mb-2">
                                                        <IoIosCheckmarkCircle style={{ color: "#0A1A3A" }} className="me-2" />
                                                        {item.point_5}
                                                    </li>

                                                    <li className="d-flex align-items-center mb-2">
                                                        <IoIosCheckmarkCircle style={{ color: "#0A1A3A" }} className="me-2" />
                                                        {item.point_6}
                                                    </li>

                                                </ul>

                                                {/* Cancellation */}
                                                {item.nonflex === "Refundable" && (
                                                    <div className="text-success fst-italic mb-2">
                                                        Cancellation Cover Available
                                                    </div>
                                                )}


                                                {/* Reviews */}
                                                <div className="d-flex align-items-center gap-1">
                                                    <IoIosStar className="text-warning" />
                                                    <IoIosStar className="text-warning" />
                                                    <IoIosStar className="text-warning" />
                                                    <IoIosStar className="text-warning" />
                                                    <IoIosStar className="text-secondary" />
                                                    <span className="ms-2 text-muted">(1 review)</span>
                                                </div>
                                            </div>

                                            {/* RIGHT – PRICE + CTA */}
                                            <div className="text-end ms-lg-auto">

                                                {(() => {
                                                    const basePriceRaw = pricing[item.id];
                                                    if (!basePriceRaw) return <h3 className="pricing-tag">--</h3>;

                                                    const basePrice = Number(basePriceRaw);

                                                    let finalPrice = basePrice;

                                                    if (promoData) {
                                                        finalPrice =
                                                            promoData.discount_type === "percentage"
                                                                ? basePrice - (basePrice * Number(promoData.discount_value)) / 100
                                                                : basePrice - Number(promoData.discount_value);
                                                    }

                                                    return (
                                                        <div>
                                                            {promoData && (
                                                                <div className="old-price">
                                                                    £{basePrice.toFixed(2)}
                                                                </div>
                                                            )}

                                                            <h3 className="pricing-tag">
                                                                £{finalPrice.toFixed(2)}
                                                            </h3>
                                                        </div>
                                                    );
                                                })()}

                                                {/* ACTION BUTTONS */}
                                                <div className="d-flex justify-content-end align-items-center gap-2">

                                                    {/* Read More */}
                                                    <FaInfoCircle
                                                        size={30}
                                                        title="Read more"
                                                        style={{
                                                            cursor: "pointer",
                                                            color: "#ffa200"
                                                        }}
                                                        onClick={() =>
                                                            navigate(`/product-details/${item.id}`, {
                                                                state: {
                                                                    product: item,
                                                                    pricing: pricing[item.id],
                                                                    dropDate: dropDateState,
                                                                    returnDate: returnDateState,
                                                                    airport: selectedAirport,
                                                                },
                                                            })
                                                        }
                                                    />

                                                    {/* Select Parking */}
                                                    <button
                                                        style={{ background: "#0A1A3A" }}
                                                        className="btn text-white px-4 py-2 fw-semibold"
                                                        onClick={() => {
                                                            const basePrice = Number(pricing[item.id]);
                                                            const discountAmount = promoData
                                                                ? promoData.discount_type === "percentage"
                                                                    ? (basePrice * Number(promoData.discount_value)) / 100
                                                                    : Number(promoData.discount_value)
                                                                : 0;

                                                            navigate("/booking-form", {
                                                                state: {
                                                                    productId: item.id,
                                                                    dropDate: dropDateState,
                                                                    returnDate: returnDateState,
                                                                    travelling_from: selectedAirport,
                                                                    basePrice,
                                                                    discountAmount,
                                                                    finalPrice: Math.max(0, basePrice - discountAmount),

                                                                },
                                                            });
                                                        }}
                                                    >
                                                        Select Parking
                                                    </button>

                                                </div>
                                            </div>

                                        </div>

                                    ) : (
                                        <div className="pricing-card">

                                            {/* HEADER */}
                                            <div className="card-header-custom">
                                                <img
                                                    src={item.image_data || optionalLogo}
                                                    className="card-logo"
                                                />

                                                <div className="card-title">{item.product_name}</div>
                                                <div className="card-subtitle">({item.service_type})</div>

                                                {/* BADGE */}
                                                <div className="card-badge">
                                                    {item.nonflex === "Non-Refundable" && (
                                                        <span className="nonrefundable-badge">Non-Refundable</span>
                                                    )}
                                                    {item.nonflex === "Refundable" && (
                                                        <span className="refundable-badge">Refundable</span>
                                                    )}
                                                </div>
                                            </div>

                                            {/* BODY */}
                                            <div className="card-body-custom">
                                                <ul className="pricing-list">

                                                    <li><IoIosCheckmarkCircle className="list-icon me-2" /> {item.point_1}</li>
                                                    <li><IoIosCheckmarkCircle className="list-icon me-2" /> {item.point_2}</li>
                                                    <li><IoIosCheckmarkCircle className="list-icon me-2" /> {item.point_3}</li>
                                                    <li><IoIosCheckmarkCircle className="list-icon me-2" /> {item.point_4}</li>
                                                    <li><IoIosCheckmarkCircle className="list-icon me-2" /> {item.point_5}</li>
                                                    <li><IoIosCheckmarkCircle className="list-icon me-2" /> {item.point_6}</li>

                                                    {/* <li className="review-text mt-2">
                                                        ⭐ Reviews: <span className="text-warning">★★★★☆</span> (4.0)
                                                    </li> */}

                                                </ul>
                                            </div>

                                            {/* FOOTER */}
                                            <div className="pricing-footer d-flex justify-content-between align-items-center">

                                                {(() => {
                                                    const basePriceRaw = pricing[item.id];
                                                    if (!basePriceRaw) return <h3 className="pricing-tag">--</h3>;

                                                    const basePrice = Number(basePriceRaw);

                                                    let finalPrice = basePrice;

                                                    if (promoData) {
                                                        finalPrice =
                                                            promoData.discount_type === "percentage"
                                                                ? basePrice - (basePrice * Number(promoData.discount_value)) / 100
                                                                : basePrice - Number(promoData.discount_value);
                                                    }

                                                    return (
                                                        <div className="price-wrapper">
                                                            {promoData && (
                                                                <span className="discount-pill">
                                                                    SAVE {promoData.discount_value}
                                                                    {promoData.discount_type === "percentage" ? "%" : "£"}
                                                                </span>
                                                            )}

                                                            <h3 className="pricing-tag">
                                                                £{finalPrice.toFixed(2)}
                                                            </h3>
                                                        </div>
                                                    );
                                                })()}

                                                {/* Read More */}
                                                <FaInfoCircle
                                                    size={32}
                                                    title="Read more"
                                                    style={{
                                                        cursor: "pointer",
                                                        color: "#ffa200"
                                                    }}
                                                    onClick={() =>
                                                        navigate(`/product-details/${item.id}`, {
                                                            state: {
                                                                product: item,
                                                                pricing: pricing[item.id],
                                                                dropDate: dropDateState,
                                                                returnDate: returnDateState,
                                                                airport: selectedAirport,
                                                            },
                                                        })
                                                    }
                                                />

                                                <button
                                                    className="btn-book"
                                                    onClick={() => {
                                                        const basePrice = Number(pricing[item.id] || 0);

                                                        const discountAmount = promoData
                                                            ? promoData.discount_type === "percentage"
                                                                ? (basePrice * Number(promoData.discount_value)) / 100
                                                                : Number(promoData.discount_value)
                                                            : 0;

                                                        const finalPrice = Math.max(0, basePrice - discountAmount);

                                                        navigate("/booking-form", {
                                                            state: {
                                                                productId: item.id,
                                                                dropDate: dropDateState,
                                                                returnDate: returnDateState,
                                                                travelling_from: selectedAirport,
                                                                promo: promoData,
                                                                basePrice,
                                                                discountAmount,
                                                                finalPrice,
                                                                product_overview: item.product_overview,
                                                                product_description: item.product_description,
                                                                dropoff_procedure: item.dropoff_procedure,
                                                            },
                                                        });
                                                    }}
                                                >
                                                    Book Now
                                                </button>

                                            </div>

                                        </div>
                                    )}

                                </div>
                            ))
                        )}
                    </div>

                </div>
            </div>

            <Footer />
            <Copyright />
        </>
    )
}

export default ProductData;
