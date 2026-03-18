import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Waves, Palmtree, UserCheck, Droplets, Maximize, ConciergeBell } from "lucide-react";

const suites = [
  {
    id: "oceanic",
    name: "Oceanic Suite",
    price: "₹500",
    image: "/assets/suite_teal.jpg",
    amenities: [
      { icon: Waves, text: "Unobstructed Ocean View" },
      { icon: Maximize, text: "Private Infinity Balcony" },
      { icon: UserCheck, text: "24/7 Dedicated Butler" },
    ],
  },
  {
    id: "horizon",
    name: "Horizon Villa",
    price: "₹850",
    image: "/assets/suite_warm.png",
    amenities: [
      { icon: Droplets, text: "Infinity Plunge Pool" },
      { icon: Palmtree, text: "360° Panoramic Coastline" },
      { icon: Droplets, text: "Signature Champagne Breakfast" },
    ],
    featured: true,
  },
  {
    id: "penthouse",
    name: "Presidential Penthouse",
    price: "₹1500",
    image: "/assets/suite_twin_view.png",
    amenities: [
      { icon: Maximize, text: "Private Rooftop Terrace" },
      { icon: UserCheck, text: "Personal Michelin-Star Chef" },
      { icon: ConciergeBell, text: "Elite Multi-Lingual Concierge" },
    ],
  },
];

const Suites = () => {
  const navigate = useNavigate();

  const handleReserve = (suiteId) => {
    navigate(`/book-now?suiteId=${suiteId}`);
  };
  return (
    <section className="py-32 relative overflow-hidden bg-white" id="suites">
      {/* Background layer */}
      <div
        className="absolute inset-0 z-0 opacity-100 pointer-events-none"
        style={{
          backgroundImage: "url('/assets/suites_bg_new.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      ></div>
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20 space-y-4">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-blue-light font-bold tracking-[0.2em] text-3xl md:text-4xl calligraphy-font"
          >
            Accommodation
          </motion.h3>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="heading-font pb-2"
          >
            The Royal Collection
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "100px" }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 1 }}
            className="h-1 blue-gradient mx-auto"
          ></motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {suites.map((suite, index) => (
            <motion.div
              key={suite.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              className={`group relative h-[650px] rounded-3xl overflow-hidden transition-all duration-700 
                border border-white/20 
                shadow-[0_20px_50px_-20px_rgba(5,58,109,0.1)] 
                hover:border-blue-light/50 hover:shadow-[0_40px_80px_-20px_rgba(58,190,249,0.2)] hover:-translate-y-4
                ${suite.featured ? "md:scale-105 z-10 border-blue-light/40" : ""}`}
            >
              {/* Image as Background */}
              <div className="absolute inset-0 z-0">
                <img
                  alt={suite.name}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  src={suite.image}
                />
                <div className="absolute inset-0 bg-blue-dark/5 group-hover:bg-transparent transition-colors duration-500"></div>
              </div>

              {/* Top Details */}
              <div className="absolute top-6 right-6 z-20 bg-white px-4 py-2 rounded-full text-blue-light font-bold text-[10px] tracking-widest border border-blue-light/20 shadow-xl">
                {suite.price}/NIGHT
              </div>
              {suite.featured && (
                <div className="absolute top-6 left-6 z-20 blue-gradient text-white px-4 py-1.5 text-[8px] font-bold tracking-widest uppercase rounded-full shadow-lg">
                  Most Coveted
                </div>
              )}

              {/* Bottom Content Overlay */}
              <div className="absolute bottom-6 left-6 right-6 z-20 p-6 rounded-2xl bg-white/5 backdrop-blur-[40px] border border-white/20 flex flex-col space-y-4">
                <h4 className="text-xl heading-font font-bold text-white drop-shadow-lg group-hover:text-blue-light transition-colors duration-300">{suite.name}</h4>
                <ul className="space-y-2">
                  {suite.amenities.map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-xs tracking-wide text-white font-medium drop-shadow-md">
                      <item.icon size={14} className="text-blue-light" />
                      {item.text}
                    </li>
                  ))}
                </ul>
                <button
                  onClick={() => handleReserve(suite.id)}
                  className={`w-full py-3.5 text-[9px] font-bold uppercase tracking-[0.3em] rounded transition-all duration-500 ${suite.featured
                      ? "blue-gradient text-white shadow-lg hover:brightness-110"
                      : "bg-white/5 border border-white/20 text-white hover:bg-blue-light hover:text-blue-dark hover:border-blue-light backdrop-blur-md"
                    }`}>
                  Reserve Suite
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Suites;
