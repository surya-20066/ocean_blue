import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
// Scroll indicator uses inline SVG below

const Hero = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);
  const scale = useTransform(scrollY, [0, 500], [1, 1.1]);

  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 z-0 h-full w-full">
        <video 
          autoPlay 
          muted 
          loop 
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/entry.mp4" type="video/mp4" />
        </video>
        {/* Overlay to ensure readability */}
        <div className="absolute inset-0 bg-blue-dark/40" />
      </div>

      {/* Content */}
      <motion.div 
        style={{ opacity }}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="relative z-10 text-center px-4 max-w-5xl"
      >
        <motion.h1 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, delay: 0.2 }}
          className="text-transparent bg-clip-text bg-gradient-to-b from-blue-light via-blue-light to-white text-6xl md:text-9xl font-black heading-font tracking-tight leading-none text-shadow-premium uppercase py-2"
        >
          Hotel Ocean <br/> Blue Vizag
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="text-pearl/90 text-lg md:text-2xl font-light mt-8 mb-12 max-w-2xl mx-auto italic"
        >
          Experience the pinnacle of coastal elegance where the horizon kisses the sea.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <button className="blue-gradient text-white px-12 py-5 rounded text-xs font-bold uppercase tracking-[0.4em] shadow-2xl hover:brightness-110 hover:shadow-blue-light/40 transition-all duration-500 overflow-hidden relative group">
            <span className="relative z-10">Explore the Estate</span>
            <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
          </button>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-blue-light/60 flex flex-col items-center gap-2"
      >
        <span className="text-xl uppercase tracking-[0.2em] font-bold calligraphy-font">Scroll</span>
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          width="24" height="24" 
          viewBox="0 0 24 24" 
          fill="none" stroke="currentColor" 
          strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"
        >
          <path d="M7 13l5 5 5-5M7 6l5 5 5-5"/>
        </svg>
      </motion.div>
    </section>
  );
};

export default Hero;
