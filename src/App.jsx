import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Home from "./pages/Home";
import Gallery from "./pages/Gallery";
import Booking from "./pages/Booking";
import RestaurantBooking from "./pages/RestaurantBooking";
import ScrollToTop from "./components/ScrollToTop";

const AnimatedRoutes = () => {
  const location = useLocation();
  
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/book-now" element={<Booking />} />
        <Route path="/book-table" element={<RestaurantBooking />} />
      </Routes>
    </AnimatePresence>
  );
};

function App() {
  return (
    <Router>
      <ScrollToTop />
      <AnimatedRoutes />
    </Router>
  );
}

export default App;
