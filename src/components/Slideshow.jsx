import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    image: "/assets/provided_1.jpg",
    title: "Unrivaled Luxury",
    subtitle: "A Panoramic escape overlooking the Bay of Bengal"
  },
  {
    image: "/assets/provided_2.jpg",
    title: "Curated Comfort",
    subtitle: "Experience sophistication in every detail"
  },
  {
    image: "/assets/provided_3.jpg",
    title: "Vizag's Nocturnal Jewel",
    subtitle: "When the horizon sparkles with architectural grace"
  },
  {
    image: "/assets/provided_5.jpg",
    title: "Exclusive Sanctuaries",
    subtitle: "Your private haven of maritime elegance"
  }
];

const Slideshow = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <div className="relative h-[60vh] md:h-[80vh] w-full overflow-hidden bg-sky-50 group">
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ x: "30%", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: "-30%", opacity: 0 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="absolute inset-0 flex items-center justify-center p-4 md:p-12"
        >
          <img
            src={slides[current].image}
            alt={slides[current].title}
            className="w-full h-full object-contain drop-shadow-2xl z-10"
          />
          <div className="absolute inset-0 bg-sky-100/20 pointer-events-none"></div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-6 top-1/2 -translate-y-1/2 z-20 text-white/50 hover:text-blue-light transition-colors p-2 md:opacity-0 group-hover:opacity-100 duration-300"
      >
        <ChevronLeft size={48} strokeWidth={1} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-6 top-1/2 -translate-y-1/2 z-20 text-white/50 hover:text-blue-light transition-colors p-2 md:opacity-0 group-hover:opacity-100 duration-300"
      >
        <ChevronRight size={48} strokeWidth={1} />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex gap-4">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`h-[2px] transition-all duration-500 ${current === i ? "w-12 bg-blue-light" : "w-4 bg-white/30"
              }`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Slideshow;
