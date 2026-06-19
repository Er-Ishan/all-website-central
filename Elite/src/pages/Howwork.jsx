import React, { useEffect, useState } from 'react'
import { Helmet } from "react-helmet";
import Topbar from "../component/Topbar"
import Navbar from "../component/Navbar"
import Footer from "../component/Footer"
import Copyright from "../component/Copyright"
import CarSteps from '../component/Carsteps'
import NavbarElement from '../component/NavbarElement'

const BASE_URL = "https://www.heathroweliteparking.co.uk";

const Howwork = () => {

    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkScreen = () => setIsMobile(window.innerWidth <= 768);
        checkScreen();
        window.addEventListener("resize", checkScreen);
        return () => window.removeEventListener("resize", checkScreen);
    }, []);

    return (
        <div>
            <Helmet>
                <title>How It Works | Heathrow Elite Parking - Book Park and Ride</title>
                <meta name="description" content="See how Heathrow Elite Parking works. Simple steps to book park and ride, drop your car and catch the shuttle to Heathrow Airport terminals." />
                <meta name="keywords" content="how Heathrow parking works, Heathrow park and ride process, book Heathrow parking" />
                <meta name="robots" content="index, follow" />
                <link rel="canonical" href={`${BASE_URL}/howitworks`} />
                <meta property="og:title" content="How It Works | Heathrow Elite Parking" />
                <meta property="og:description" content="Simple steps to book and use Heathrow Elite Parking park and ride." />
                <meta property="og:type" content="website" />
            </Helmet>
            <NavbarElement></NavbarElement>
            <CarSteps></CarSteps>
            <Footer></Footer>
            <Copyright></Copyright>
        </div>
    )
}

export default Howwork
