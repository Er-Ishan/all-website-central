import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import Hero from "../component/Hero";
import Topbar from "../component/Topbar";
import NavbarElement from "../component/NavbarElement";
import Aboutus from "../component/Aboutus";
import Features from "../component/Features";
import Fact from "../component/Fact";
import Services from "../component/Services";
import Carsteps from "../component/Carsteps";
import Footer from "../component/Footer";
import Copyright from "../component/Copyright";
import HeathrowLocations from "../component/HeathrowLocations";
import Categories from "../component/Categories";
import Address from "../component/Address";
import HomePage from "../component/HomePage";

const BASE_URL = "https://www.heathroweliteparking.co.uk";

export default function Home() {
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
        <title>Heathrow Airport Park and ride, heathroweliteparking</title>
        <meta name="description" content="Book Heathrow airport park and ride car park with heathrowelite parking. Cheap long term Heathrow parking with secure shuttle service to all terminals of Heathrow." />
        <meta name="keywords" content="Heathrow park and ride, Heathrow airport parking, cheap Heathrow parking, budget parking at Heathrow, Heathrow car parking, secure Heathrow parking" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={`${BASE_URL}/`} />
        <meta property="og:title" content="Heathrow Airport Park and ride, heathroweliteparking" />
        <meta property="og:description" content="Book Heathrow airport park and ride car park with heathrowelite parking. Cheap long term Heathrow parking with secure shuttle service to all terminals." />
        <meta property="og:type" content="website" />
      </Helmet>
      <NavbarElement />
      <Hero />
      {/* <Aboutus /> */}
      <HomePage></HomePage>
      <Features />
      {/* <Fact /> */}
      <Services />
      {/* <HeathrowLocations></HeathrowLocations> */}
      <Carsteps />
      {/* <Address></Address> */}
      <Footer />
      <Copyright />
    </>
  );
}
