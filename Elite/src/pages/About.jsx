import React, { useEffect, useState } from 'react'
import { Helmet } from "react-helmet";
import Topbar from "../component/Topbar";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import Aboutus from "../component/Aboutus";
import NavbarElement from '../component/NavbarElement';

const BASE_URL = "https://www.heathroweliteparking.co.uk";

const About = () => {

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreen = () => setIsMobile(window.innerWidth <= 768);
    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  return (
    <>
      <Helmet>
        <title>About Us | Heathrow Elite Parking - Airport Park and Ride</title>
        <meta name="description" content="Learn about Heathrow Elite Parking. We provide secure, affordable park and ride services to all Heathrow terminals with reliable shuttle transfers." />
        <meta name="keywords" content="about Heathrow Elite Parking, Heathrow parking company, airport parking about" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={`${BASE_URL}/about`} />
        <meta property="og:title" content="About Us | Heathrow Elite Parking" />
        <meta property="og:description" content="Learn about Heathrow Elite Parking and our secure park and ride services to Heathrow Airport." />
        <meta property="og:type" content="website" />
      </Helmet>
      <NavbarElement></NavbarElement>

      <Aboutus></Aboutus>

      <Footer></Footer>

    </>
  )
}

export default About
