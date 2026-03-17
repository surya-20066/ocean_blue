import React from "react";
import { motion } from "framer-motion";
import { MapPin, Plane, Ship, ArrowRight, Phone } from "lucide-react";

const Location = () => {
  const googleMapsQuery = "Hotel+Ocean+Blue,+Harbour+Park+Rd,+RK+Beach,+Visakhapatnam";
  const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=17.7198,83.3241&destination_place_id=Hotel+Ocean+Blue+Vizag`;

  return (
    <section className="py-32 bg-pearl px-6" id="location">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="lg:col-span-8 overflow-hidden rounded-2xl shadow-inner border border-blue-light/10 relative group"
          >
            {/* Google Maps Embed */}
            <div className="h-[600px] w-full relative overflow-hidden">
              <iframe
                title="Hotel Ocean Blue Location"
                src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3800.5186835252!2d83.3218578759546!3d17.7198539832267!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a39433e5066601b%3A0x7d60f58d97607ea7!2sHotel%20Ocean%20Blue!5e0!3m2!1sen!2sin!4v1710328540000`}
                width="100%"
                height="100%"
                style={{ border: 0, filter: "saturate(0.9) contrast(1.1)" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full transition-all duration-1000 group-hover:saturate-100"
              />
              {/* Elegant border overlay */}
              <div className="absolute inset-0 pointer-events-none border-2 border-blue-light/10 rounded-2xl"></div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="lg:col-span-4 space-y-10"
          >
            <div className="space-y-4">
              <h3 className="text-blue-light font-bold tracking-[0.2em] text-3xl md:text-4xl calligraphy-font">Destination</h3>
              <h2 className="text-5xl heading-font leading-tight text-blue-dark">At the Edge of <br/>Eternity</h2>
              <p className="text-charcoal/60 italic text-lg leading-relaxed">
                RK Beach Road, Vizag Coastline.
              </p>
            </div>

            {/* Address */}
            <div className="space-y-3 border-l-2 border-blue-light/30 pl-6">
              <div className="flex items-start gap-3">
                <MapPin className="text-blue-light flex-shrink-0 mt-1" size={16} />
                <p className="text-charcoal/70 text-sm leading-relaxed">
                  7-8-22/3/1, Harbour Park Rd, opposite Ramakrishna Mission RK Beach, Pandurangapuram, Visakhapatnam, Andhra Pradesh 530003
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="text-blue-light flex-shrink-0" size={16} />
                <a href="tel:+917702857909" className="text-charcoal/70 text-sm hover:text-blue-light transition-colors">
                  077028 57909
                </a>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex items-center gap-6 group">
                <div className="size-12 rounded-full bg-blue-dark/5 flex items-center justify-center group-hover:bg-blue-light/10 transition-colors">
                  <Plane className="text-blue-light" size={20} />
                </div>
                <div>
                  <p className="text-blue-dark font-bold text-xs uppercase tracking-widest">Vizag International</p>
                  <p className="text-charcoal/50 text-[10px] uppercase tracking-widest mt-1">15 Minutes Drive</p>
                </div>
              </div>

              <div className="flex items-center gap-6 group">
                <div className="size-12 rounded-full bg-blue-dark/5 flex items-center justify-center group-hover:bg-blue-light/10 transition-colors">
                  <Ship className="text-blue-light" size={20} />
                </div>
                <div>
                  <p className="text-blue-dark font-bold text-xs uppercase tracking-widest">Royal Yacht Club</p>
                  <p className="text-charcoal/50 text-[10px] uppercase tracking-widest mt-1">5 Minutes Drive</p>
                </div>
              </div>
            </div>

            <div className="pt-6">
              <a 
                href={directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-4 blue-gradient text-white px-8 py-4 rounded font-bold uppercase tracking-[0.2em] text-[10px] hover:brightness-110 transition-all shadow-xl shadow-blue-dark/20 font-body"
              >
                Get Directions 
                <ArrowRight className="text-blue-light" size={18} />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Location;
