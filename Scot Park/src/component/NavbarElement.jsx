import { Link } from "react-router-dom";
import logo from "/img/scot_park_logo.png";
import "./style.css";
import { FaGripLines } from "react-icons/fa6";

export default function NavbarElement() {
    return (
        <div className="container-fluid nav-bar sticky-top px-0 px-lg-4 py-4 navbar-shadow" style={{background:"#0A1A3A"}}>
            <div className="container">
                <nav
                    className="navbar navbar-expand-lg navbar-light"
                    style={{ paddingTop: 0, paddingBottom: 0 }}
                >
                    {/* LOGO */}
                    <Link to="/" className="navbar-brand p-0 me-auto">
                        <img
                            src={logo}
                            alt="Scot Parking"
                            style={{
                                width: "auto",
                                transition: "transform 0.3s ease",
                            }}
                        />
                    </Link>

                    {/* MOBILE TOGGLE */}
                    <button
                        className="navbar-toggler border-0"
                        style={{ color: "#46216F" }}
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarCollapse"
                    >
                        <FaGripLines size={22} />
                    </button>

                    {/* NAV MENU */}
                    <div
                        className="collapse navbar-collapse justify-content-center"
                        id="navbarCollapse"
                    >
                        <div className="navbar-nav text-center py-0 nav-links">

                            <Link to="/" className="nav-item nav-link">
                                Home
                            </Link>

                            {/* Terminals Dropdown */}
                            {/* <div className="nav-item dropdown">
                                <span
                                    className="nav-link dropdown-toggle"
                                    role="button"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    Glasgow
                                </span>

                                <ul className="dropdown-menu text-center">
                                    <li>
                                        <Link to="/Glasgow/main-terminal" className="dropdown-item">
                                            Main Terminal
                                        </Link>
                                    </li>
                                  
                                </ul>
                            </div> */}

                            {/* <div className="nav-item dropdown">
                                <span
                                    className="nav-link dropdown-toggle"
                                    role="button"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    Gatwick
                                </span>

                                <ul className="dropdown-menu text-center">
                                    <li>
                                        <Link to="/gatwick/north-terminal" className="dropdown-item">
                                            North Terminal
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/gatwick/south-terminal" className="dropdown-item">
                                            South Terminal
                                        </Link>
                                    </li>
                                </ul>
                            </div> */}

                            <Link to="/glasgow-airport-parking" className="nav-item nav-link" style={{color:"#ffffff"}}>
                                Glasgow Airport Parking
                            </Link>

                            <Link to="/Glasgow/main-terminal" className="nav-item nav-link">
                                Main Terminal
                            </Link>

                            <Link to="/about" className="nav-item nav-link">
                                About Us
                            </Link>

                            <Link to="/howitworks" className="nav-item nav-link">
                                How It Works
                            </Link>

                            <Link to="/faq" className="nav-item nav-link">
                                FAQ
                            </Link>

                            {/* <Link to="/privacypolicy" className="nav-item nav-link">
                                Privacy Policy
                            </Link> */}

                            {/* <Link to="/termsandconditions" className="nav-item nav-link">
                                Terms & Conditions
                            </Link> */}

                            {/* <Link to="/contact" className="nav-item nav-link">
                                Contact
                            </Link> */}

                            {/*
            <Link to="/my-booking-form" className="nav-item nav-link text-warning">
                My Bookings
            </Link>
            */}
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    );
}
