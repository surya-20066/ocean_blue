import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Utensils, GlassWater } from "lucide-react";

const Dining = () => {
  return (
    <section className="py-32 bg-white text-blue-dark relative overflow-hidden" id="dining">
      {/* Premium Logo-inspired Background with Custom Image */}
      <div 
        className="absolute inset-0 z-0 opacity-100 pointer-events-none"
        style={{ 
          backgroundImage: "url('/assets/dining_bg.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      ></div>
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_top_right,_rgba(58,190,249,0.1)_0%,_transparent_50%),radial-gradient(circle_at_bottom_left,_rgba(5,58,109,0.05)_0%,_transparent_50%),linear-gradient(135deg,_#ffffff_0%,_#f0f7ff_100%)]"></div>
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-light/10 to-transparent -skew-x-12 transform translate-x-1/2"></div>
      <div className="absolute -bottom-24 -left-24 size-96 rounded-full bg-blue-light/5 blur-3xl"></div>
      <div className="absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-light/20 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="space-y-12"
          >
            <div className="space-y-4">
               <h3 className="text-blue-light font-bold tracking-[0.2em] text-3xl md:text-5xl calligraphy-font">Epicurean Reservation</h3>
              <h2 className="heading-font">Dining in the <br/>Ocean Glow</h2>
              <div className="w-24 h-1 blue-gradient"></div>
            </div>

            <div className="space-y-12">
              <div className="flex gap-8 items-start group">
                <div className="size-16 rounded-full border border-blue-light/30 flex items-center justify-center flex-shrink-0 transition-all duration-500">
                  <Utensils className="text-blue-light" size={28} />
                </div>
                <div className="space-y-3">
                  <h4 className="text-2xl heading-font font-bold text-blue-light">The Gilded Oyster</h4>
                  <p className="text-blue-dark/60 font-light leading-relaxed font-body">
                    A seafood sanctuary where the catch of the day meets French culinary finesse. Featuring a curated list of international sparkling wines.
                  </p>
                </div>
              </div>

              <div className="flex gap-8 items-start group">
                <div className="size-16 rounded-full border border-blue-light/30 flex items-center justify-center flex-shrink-0 transition-all duration-500">
                  <GlassWater className="text-blue-light" size={28} />
                </div>
                <div className="space-y-3">
                  <h4 className="text-2xl heading-font font-bold text-blue-light">Azure Rooftop Lounge</h4>
                  <p className="text-blue-dark/60 font-light leading-relaxed font-body">
                    Sip artisanal cocktails under the stars. Our mixologists blend local spirits with premium botanicals for an unforgettable Vizag night.
                  </p>
                </div>
              </div>
            </div>

            <Link to="/book-table">
              <button className="blue-gradient text-white px-10 py-5 rounded text-xs font-bold uppercase tracking-[0.3em] shadow-xl hover:brightness-110 transition-all font-body">
                Book a Table
              </button>
            </Link>
          </motion.div>

          {/* Image Grid */}
          <div className="grid grid-cols-2 gap-6">
            <div className="space-y-6">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="rounded-xl overflow-hidden aspect-[3/4] shadow-2xl transition-all duration-1000"
              >
                <img alt="Fine dining" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAljKtNZbnvZViM_4HsGh86Hx4aZbcPAtUM-Yp5npqgpQeHNx72MIodnxFh6v5yYF3VDEUOfCnj3ta-Bc8FcOHrFg2VIcUkNN7MXDlkQ8g8xjjeKEZ38tltqJjYGN2o2OxCb-zz4Zdw7Zgtj9YRvDV9TIlmoKMN0_z0av5WwgayymvlwZT_uop4cJiiSLHEl1d2RHO0g385YLXRTVt_RjtLtsaPrDqGAxzfdBObp6hyDR67quAK_hk_w3RyR45KrCpXENvm4-wiLVqo" />
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="rounded-xl overflow-hidden aspect-square shadow-2xl transition-all duration-1000 border border-blue-light/20"
              >
                <img alt="Premium cocktail" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCKp6bmxFeXqxzf1909pHkiGTD26cNM3FvdytRfjz6q9_N0b7I1nECV_ccoHOanu-GH3HfM-WNh8LfPdV0Ay9jfb7I-k_oV_1A47jSM3ZXiClGobsiTjneqsfrYI7ltugOSS4eUBw1WU-TBzr7xy8XD_pJniOmCwG6gAmi-mwhp2b9uFYT5EgP5dVGkmA3TYVAwwJr8tRMN38zIuZzU8kfxOe-C8DbSAAh1x8B1bEBU80Vo-uKx9Bow29SF1PxqEB6qpz5XcdhV1cUj" />
              </motion.div>
            </div>
            <div className="pt-12 space-y-6">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
                className="rounded-xl overflow-hidden aspect-square shadow-2xl transition-all duration-1000 border border-blue-light/20"
              >
                <img alt="Gourmet dessert" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCA_GOb5NVPgVr5e6-97nqn6v3Auxoz5MTjJwwnjst-TT0Wa1-a6j3ixE5Bo24mxjHegGIslNxFhJuGu4wSVaH86Lr4MivjfOlFKJa9yQ5F43MGZPtwNzwPAWP89qxFzRFZeEGN-AAUqo1tv8QZ-EchvGHIezTluxg1qRO-c2Uv3Z8BwWEWB4VWcPNVwenPcDK0qcAwAbVARnFh9RSINSjiHCapztcfIuXl01B6OmYGk0R-4DL8fl6nDX_3fDDXfw_F7lX5lcvVn8PS" />
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8 }}
                className="rounded-xl overflow-hidden aspect-[3/4] shadow-2xl transition-all duration-1000"
              >
                <img alt="Michelin chef" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCwi2OE8st1_fYpgBmy_ENWzuwWxxWvMIxNZ9nFtUxUeVr0c23pyvMoaNZ8qGR9Fv2R9T3j-GTLOFr_m3WsCApDM7L--1qjSGUs38vEOKVlRU3Js5P_cEWVP4XC5WQi913PXm_H6AtSgDfwGIq0w-ZkrGj3TlfvC0cmxTyZm0SpIMU-pVmHaef54GSNShlZnG5iGRT64Y99KhzfCOJMdA7APGIDdgfbwIR2ewpwMqfFfFDq5V7nwbIMqk0Zl0bjWf_8YL2NwyQ-SN_O" />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dining;
