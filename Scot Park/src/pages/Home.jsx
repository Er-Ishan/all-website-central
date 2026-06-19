import { useEffect, useState } from "react";
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
import Categories from "../component/Categories";
import Address from "../component/Address";
import Faq from "./Faq";
import FaqHome from "../component/FaqHome";
import BookNowComp from "../component/BookNowComp";
import AboutBox from "../component/AboutBox";
import Reviews from "./Reviews";
import HomeCard from "./HomeCard";


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
      {/* {!isMobile && <Topbar />} */}
      <NavbarElement />
      <Hero />
      {/* <Aboutus /> */}
      <AboutBox></AboutBox>
      {/* <Features /> */}
      {/* <Fact /> */}
      <HomeCard></HomeCard>
      <Services />
      <BookNowComp></BookNowComp>
      <Reviews></Reviews>
      <Carsteps />
      
      {/* <FaqHome /> */}
      
      <Footer />
      <Copyright />
    </>
  );
}
