import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "../utils/cn";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { pathname } = useLocation();

  const isHomePage = pathname === "/";
  // Subtly increased logo size (approx 4%)
  const logoHeight = "h-11 md:h-[50px]"; 

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/#about" },
    { name: "Suites", href: "/#suites" },
    { name: "Gallery", href: "/gallery" },
    { name: "Testimonials", href: "/#testimonials" },
    { name: "Dining", href: "/#dining" },
    { name: "Location", href: "/#location" },
  ];

  // On non-home pages, always show glassy blue-dark background
  // On home page, transparent initially → blurred blue-dark on scroll
  // Ultra-Premium Glassmorphism Navbar - Consistent across all pages
  const headerBg = "bg-blue-dark/30 backdrop-blur-2xl border-b border-white/10 py-3 shadow-[0_10px_30px_rgba(0,0,0,0.3)]";

  const textColor = "text-blue-dark";
  const logoColor = "text-blue-dark";

  return (
    <nav className={`fixed top-0 left-0 right-0 z-[60] transition-all duration-700 ${isScrolled ? "py-2" : "py-4 m-1 md:m-0"}`}>
      <div className={`mx-2 md:mx-4 lg:mx-12 rounded-2xl md:rounded-3xl transition-all duration-700 border border-charcoal/5 bg-white shadow-xl ${isScrolled ? "py-1" : "py-2"}`}>
        <div className="container mx-auto flex items-center justify-between px-4 md:px-12">
          <Link to="/" className="flex items-center gap-4 group shrink-0">
            <div className={`${logoHeight} w-auto flex items-center`}>
              <img
                src="/logo.png"
                alt="Ocean Blue Hotel Logo"
                className="h-full w-auto object-contain transition-transform duration-500 group-hover:scale-105 logo-blend"
              />
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden xl:flex items-center gap-4 2xl:gap-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={cn(
                  "text-[16px] 2xl:text-[20px] font-bold tracking-[0.1em] heading-font uppercase transition-all duration-300 hover:text-blue-light relative group",
                  textColor
                )}
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-blue-light transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </nav>

          {/* Mobile Toggle */}
          <button
            className="xl:hidden text-blue-light p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="fixed inset-0 top-[80px] bg-white z-40 p-8 xl:hidden flex flex-col items-center justify-center"
            >
              <nav className="flex flex-col gap-8 text-center">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-blue-dark text-[24px] font-bold tracking-[0.1em] heading-font uppercase hover:text-blue-light transition-colors"
                  >
                    {link.name}
                  </a>
                ))}
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;
