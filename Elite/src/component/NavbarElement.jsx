import { Link } from "react-router-dom";
import logo from "/img/EliteLogo.png";
import "./style.css";
import { FaGripLines } from "react-icons/fa6";

export default function NavbarElement() {
    return (
        <div className="container-fluid nav-bar sticky-top px-0 px-lg-4 py-1 navbar-shadow">
            <div className="container">
                <nav
                    className="navbar navbar-expand-lg navbar-light"
                    style={{ paddingTop: 0, paddingBottom: 0 }}
                >
                    {/* LOGO */}
                    <Link to="/" className="navbar-brand p-0 me-auto">
                        <img
                            src={logo}
                            alt="Thompson Park & Ride"
                            style={{
                                height: "70px",
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
                                <Link to="/heathrow/information"
                                    className="nav-link dropdown-toggle"
                                    role="button"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    Heathrow Airport Parking
                                </Link>

                                <ul className="dropdown-menu text-center">
                                    <li>
                                        <Link to="/heathrow/terminal-2" className="dropdown-item">
                                            Terminal 2
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/heathrow/terminal-3" className="dropdown-item">
                                            Terminal 3
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/heathrow/terminal-4" className="dropdown-item">
                                            Terminal 4
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/heathrow/terminal-5" className="dropdown-item">
                                            Terminal 5
                                        </Link>
                                    </li>
                                </ul>
                            </div> */}

                            <Link to="/heathrow-airport-parking" className="nav-item nav-link">
                                Heathrow Airport Parking
                            </Link>

                            {/* Terminals Dropdown */}
                            <div className="nav-item dropdown">
                                <span
                                    className="nav-link dropdown-toggle"
                                    role="button"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    All Terminals
                                </span>

                                <ul className="dropdown-menu text-center">
                                    <li>
                                        <Link to="/heathrow-airport-parking-terminal-2" className="dropdown-item">
                                            Terminal 2
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/heathrow-airport-parking-terminal-3" className="dropdown-item">
                                            Terminal 3
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/heathrow-airport-parking-terminal-4" className="dropdown-item">
                                            Terminal 4
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/heathrow-airport-parking-terminal-5" className="dropdown-item">
                                            Terminal 5
                                        </Link>
                                    </li>
                                </ul>
                            </div>

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

                            <Link to="/about" className="nav-item nav-link">
                                About Us
                            </Link>

                            <Link to="/how-it-works" className="nav-item nav-link">
                                How It Works
                            </Link>

                            <Link to="/blogs" className="nav-item nav-link">
                                Blogs
                            </Link>

                            <Link to="/faq" className="nav-item nav-link">
                                FAQ
                            </Link>

                            {/* <Link to="/contact" className="nav-item nav-link">
                                Contact Us
                            </Link> */}

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
