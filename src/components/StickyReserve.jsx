import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, Utensils, BedDouble, X } from "lucide-react";

const StickyReserve = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isFooterVisible, setIsFooterVisible] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsFooterVisible(entry.isIntersecting);
      },
      { threshold: 0 } // As soon as the footer enters the viewport
    );
    
    const footer = document.querySelector("footer");
    if (footer) {
      observer.observe(footer);
    }
    
    return () => {
      if (footer) observer.unobserve(footer);
    };
  }, []);

  // Hide on booking pages
  if (location.pathname === "/book-now" || location.pathname === "/book-table") {
    return null;
  }

  return (
    <AnimatePresence>
      {!isFooterVisible && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50, transition: { duration: 0.3 } }}
          className="fixed bottom-6 right-6 z-[100] md:bottom-12 md:right-12 flex flex-col items-end gap-3"
        >
          {/* Expanded Menu Options */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 20, scale: 0.9 }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
                className="flex gap-3 mb-2"
              >
                <Link to="/book-table">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-white text-blue-dark flex items-center justify-center gap-2 px-5 py-3 md:px-5 md:py-3 rounded-full text-[13px] md:text-[14px] font-bold uppercase tracking-[0.05em] shadow-xl hover:shadow-blue-light/30 transition-all font-body whitespace-nowrap border border-blue-light/20"
                    onClick={() => setIsOpen(false)}
                  >
                    <Utensils className="w-4 h-4 md:w-4 md:h-4" />
                    Book Table
                  </motion.button>
                </Link>
                <Link to="/book-now">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-white text-blue-dark flex items-center justify-center gap-2 px-5 py-3 md:px-5 md:py-3 rounded-full text-[13px] md:text-[14px] font-bold uppercase tracking-[0.05em] shadow-xl hover:shadow-blue-light/30 transition-all font-body whitespace-nowrap border border-blue-light/20"
                    onClick={() => setIsOpen(false)}
                  >
                    <BedDouble className="w-4 h-4 md:w-4 md:h-4" />
                    Book Stay
                  </motion.button>
                </Link>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Main Toggle Button */}
          <motion.button
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 20px 40px rgba(0, 0, 0, 0.2)"
            }}
            whileTap={{ scale: 0.95 }}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 20
            }}
            onClick={() => setIsOpen(!isOpen)}
            className="blue-gradient text-white flex items-center gap-2 md:gap-2 px-6 py-3 md:px-6 md:py-3 rounded-full text-[14px] md:text-[15px] font-bold uppercase tracking-[0.05em] shadow-2xl hover:shadow-blue-light/40 transition-all font-body whitespace-nowrap group relative"
          >
            <motion.div
              animate={{ rotate: isOpen ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              {isOpen ? (
                <X className="w-4 h-4 md:w-4 md:h-4" />
              ) : (
                <Calendar className="w-4 h-4 md:w-4 md:h-4 group-hover:rotate-12 transition-transform duration-300" />
              )}
            </motion.div>
            Reserve
          </motion.button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default StickyReserve;
