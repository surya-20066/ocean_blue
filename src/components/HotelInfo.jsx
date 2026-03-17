import React from "react";
import { motion } from "framer-motion";
import { Info, MapPin, Star, Wifi, Shield, Utensils, Coffee, Plane, Umbrella } from "lucide-react";

const amenities = [
  { icon: Umbrella, title: "Beach Proximity", desc: "Steps away from RK Beach" },
  { icon: Wifi, title: "Free WiFi", desc: "High-speed connectivity" },
  { icon: Shield, title: "24/7 Security", desc: "Safe & secure stay" },
  { icon: Utensils, title: "Gourmet Dining", desc: "Exquisite culinary journey" },
  { icon: Coffee, title: "Rooftop Lounge", desc: "Panoramic city & sea views" },
  { icon: Plane, title: "Airport Transfer", desc: "Seamless travel experience" },
];

const HotelInfo = () => {
  return (
    <section className="py-24 bg-pearl relative overflow-hidden" id="about">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* Left: Content */}
          <div className="space-y-12">
            <div className="space-y-4">
              <motion.h3
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="text-blue-light font-bold tracking-[0.2em] text-4xl md:text-5xl calligraphy-font"
              >
                A Heritage of Excellence
              </motion.h3>
              <h2 className="text-blue-dark heading-font text-5xl md:text-6xl">Hotel Ocean Blue</h2>
              <div className="flex items-center gap-2 text-blue-light">
                <Star size={16} fill="currentColor" />
                <Star size={16} fill="currentColor" />
                <Star size={16} fill="currentColor" />
                <Star size={16} fill="currentColor" />
                <Star size={16} fill="currentColor" />
                <span className="text-[10px] uppercase tracking-widest ml-2 text-charcoal/60">Five-Star Category</span>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="bg-blue-light/10 p-3 rounded-full self-start text-blue-light">
                  <Info size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-blue-dark uppercase text-xs tracking-widest mb-2">About The Hotel</h4>
                  <p className="text-charcoal/70 font-light leading-relaxed">
                    Strategically located on the iconic RK Beach Road in Visakhapatnam, Hotel Ocean Blue is more than just a place to stay—it's a landmark of luxury. Our hotel harmonizes the serene beauty of the Bay of Bengal with sophisticated modern architecture.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="bg-blue-light/10 p-3 rounded-full self-start text-blue-light">
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-blue-dark uppercase text-xs tracking-widest mb-2">Location & Category</h4>
                  <p className="text-charcoal/70 font-light leading-relaxed">
                    Voted #1 Beachside Luxury Hotel in Vizag. Situated in the heart of the city's vibrant tourist district, offering unparalleled access to the coastline and business hubs.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-blue-dark/5">
              <h4 className="font-bold text-blue-dark uppercase text-[10px] tracking-[0.3em] mb-6">Contact Concierge</h4>
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <p className="text-charcoal/40 uppercase text-[8px] tracking-widest mb-1">Email</p>
                  <p className="text-blue-dark font-bold text-sm">concierge@oceanbluevizag.com</p>
                </div>
                <div>
                  <p className="text-charcoal/40 uppercase text-[8px] tracking-widest mb-1">Phone</p>
                  <p className="text-blue-dark font-bold text-sm">+91 70752 06909</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Amenities Grid */}
          <div className="grid grid-cols-2 gap-6">
            {amenities.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-sky-50 p-8 rounded-2xl shadow-xl shadow-blue-dark/5 border border-blue-light/5 group hover:border-blue-light/30 transition-all duration-500"
              >
                <div className="size-12 bg-white text-blue-dark rounded-xl flex items-center justify-center mb-6 shadow-md group-hover:scale-110 transition-transform border border-blue-light/10">
                  <item.icon size={24} />
                </div>
                <h5 className="text-blue-dark font-bold heading-font text-lg mb-3">{item.title}</h5>
                <p className="text-xs text-charcoal/60 leading-relaxed uppercase tracking-[0.15em] font-medium">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HotelInfo;
