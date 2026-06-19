import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import ProductData from "./pages/ProductData";
import Howwork from "./pages/Howwork";
import Faq from "./pages/Faq";
import PrivatePolicy from "./pages/PrivatePolicy";
import Terms from "./pages/Terms";
import Contact from "./pages/Contact";
import BookingForm from "./component/BookingForm";
import PaymentPage from "./component/PaymentPage";
import ThankYouPage from "./component/ThankYouPage";
import ReceiptPage from "./component/ReceiptPage";
import ProductDetailsModal from "./pages/ProductDetailsModal";
import MyBooking from "./component/MyBooking";
import PendingPaymentPage from "./component/PendingPaymentPage";
import BookingDetailsPage from "./component/BookingDetailsPage";
import MyBookingsData from "./component/MyBookingsData";
import MyBookingForm from "./pages/MyBookingForm";
import RetryPaymentPage from "./component/RetryPaymentPage";
import Terminal2 from "./component/Terminal2";
import Terminal3 from "./component/Terminal3";
import Terminal4 from "./component/Terminal4";
import Terminal5 from "./component/Terminal5";
import GatwickNorthTerminal from "./component/GatwickNorthTerminal";
import GatwickSouthTerminal from "./component/GatwickSouthTerminal";
import HeathrowElement from "./component/HeathrowElement";
import Blog from "./component/Blog";

import LoginBlogs from "./component/LoginBlogs";
import BlogOperation from "./component/BlogOperation";
import RegisterBlog from "./component/RegisterBlog";
import EditBlog from "./component/EditBlog";
import ViewFullBlog from "./component/ViewFullBlog";
import ViewLatestBlog from "./component/ViewLatestBlog";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/product" element={<ProductData />} />
        <Route path="/how-it-works" element={<Howwork />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/privacy-policy" element={<PrivatePolicy />} />
        <Route path="/terms-and-conditions" element={<Terms />} />
        <Route path="/contact-us" element={<Contact />} />
        <Route path="/booking-form" element={<BookingForm />} />
        <Route path="/payment" element={<PaymentPage />} />
        <Route path="/thank-you" element={<ThankYouPage />} />
        <Route path="/receipt" element={<ReceiptPage />} />
        <Route path="/product-details/:id" element={<ProductDetailsModal />} />
        <Route path="/my-booking/:id" element={<MyBooking />} />
        <Route path="/pending-payment/:bookingId" element={<PendingPaymentPage />} />
        <Route path="/booking-details" element={<BookingDetailsPage />} />
        <Route path="/booking-data-information" element={<MyBookingsData />} />
        <Route path="/my-booking-form" element={<MyBookingForm />} />
        <Route path="/retry-payment/:bookingId" element={<RetryPaymentPage />} />
        <Route path="/blogs" element={<Blog />} />

        <Route path="/admin-blogs" element={<LoginBlogs />} />
        <Route path="/blog-operations" element={<BlogOperation />} />
        <Route path="/blog-registration" element={<RegisterBlog />} />
        <Route path="/edit-blog/:id" element={<EditBlog />} />
        <Route path="/view-blog/:id" element={<ViewFullBlog />} />
        {/* <Route path="/blog/:id/:slug" element={<ViewLatestBlog />} /> */}
        <Route path="/blog/:slug" element={<ViewLatestBlog />} />

        <Route path="/heathrow-airport-parking-terminal-2" element={<Terminal2 />} />
        <Route path="/heathrow-airport-parking" element={<HeathrowElement />} />
        <Route path="/heathrow-airport-parking-terminal-3" element={<Terminal3 />} />
        <Route path="/heathrow-airport-parking-terminal-4" element={<Terminal4 />} />
        <Route path="/heathrow-airport-parking-terminal-5" element={<Terminal5 />} />
        <Route path="/gatwick/north-terminal" element={<GatwickNorthTerminal />} />
        <Route path="/gatwick/south-terminal" element={<GatwickSouthTerminal />} />

      </Routes>
    </>
  );
}

export default App;
