import React from "react";
import { motion } from "framer-motion";

const Story = () => {
  return (
    <section id="about" className="py-32 px-6 md:px-20 relative overflow-hidden bg-white">
      {/* Background layer */}
      <div
        className="absolute inset-0 z-0 opacity-100 pointer-events-none"
        style={{
          backgroundImage: "url('/assets/story_bg.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      ></div>
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="lg:col-span-5 order-2 lg:order-1 relative z-10"
        >
          <div className="space-y-10">
            <div className="space-y-4">
              <h3 className="text-blue-light font-bold tracking-[0.2em] text-3xl md:text-4xl calligraphy-font">A Coastal Legacy</h3>
              <h2 className="text-blue-dark text-6xl md:text-7xl heading-font leading-tight pb-2">The Story of Vizag Reimagined</h2>
              <div className="w-24 h-1 blue-gradient"></div>
            </div>

            <p className="text-charcoal/80 text-lg leading-relaxed font-light font-body">
              Nestled where the azure waters of the Bay of Bengal kiss the golden sands of Vizag, Hotel Ocean Blue stands as a beacon of architectural grace. We have reimagined luxury by blending the city's rich maritime heritage with an avant-garde sophistication.
            </p>

            <p className="text-charcoal/80 text-lg leading-relaxed font-light italic">
              Every stone, every curve, and every view is a curated experience designed to transport you to a world where time slows down and the horizon is your only boundary.
            </p>

            <div className="pt-6">
              <a
                href="#about"
                className="group flex items-center gap-4 text-blue-light font-bold uppercase tracking-[0.3em] text-xs transition-all w-fit"
              >
                <span className="border-b-2 border-blue-light pb-1 group-hover:border-blue-dark transition-colors">Discover Our Heritage</span>
                <motion.span
                  className="size-10 rounded-full border border-blue-light flex items-center justify-center group-hover:bg-blue-light group-hover:text-white transition-all"
                  whileHover={{ x: 10 }}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </motion.span>
              </a>
            </div>
          </div>
        </motion.div>

        {/* Imagery */}
        <div className="lg:col-span-7 order-1 lg:order-2 relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="aspect-[4/5] rounded-xl overflow-hidden shadow-2xl relative z-10"
          >
            <img
              alt="Hotel Ocean Blue Exterior"
              className="w-full h-full object-cover"
              src="/assets/provided_1.jpg"
            />
          </motion.div>

          {/* Decorative accents */}
          <motion.div
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.3, 0.5, 0.3]
            }}
            transition={{ duration: 5, repeat: Infinity }}
            className="absolute -bottom-20 -right-20 w-80 h-80 bg-blue-light/10 rounded-full blur-3xl -z-0"
          ></motion.div>
          <div className="absolute top-1/2 -left-10 w-40 h-40 blue-gradient opacity-10 rounded-full blur-3xl -z-0"></div>

          {/* Floating badge */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 1, duration: 0.8 }}
            className="absolute top-20 -left-10 z-20 bg-sky-50 p-6 rounded shadow-2xl border-l-4 border-blue-light hidden md:block"
          >
            <p className="text-blue-light font-bold heading-font text-4xl leading-none">1985</p>
            <p className="text-blue-dark/60 text-[8px] uppercase tracking-widest mt-1">Est. Legacy</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Story;
