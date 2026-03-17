import React, { useState } from "react";
import { motion } from "framer-motion";
import Layout from "../components/Layout";
import { Calendar, Clock, Users, Phone, Mail, User, CheckCircle2 } from "lucide-react";

const RestaurantBooking = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (isSubmitted) {
    return (
      <Layout>
        <div className="pt-40 pb-32 px-6 min-h-screen flex items-center justify-center bg-white relative">
           <div 
            className="absolute inset-0 z-0 opacity-100 pointer-events-none"
            style={{ 
              backgroundImage: "url('/assets/dining_bg.png')",
              backgroundSize: 'cover'
            }}
          ></div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="max-w-md w-full text-center space-y-8 relative z-10"
          >
            <div className="size-24 bg-blue-light/20 rounded-full flex items-center justify-center mx-auto">
              <CheckCircle2 size={48} className="text-blue-light" />
            </div>
            <h2 className="text-4xl heading-font text-blue-dark">Table Reserved</h2>
            <p className="text-charcoal/60 font-body">
              Your epicurean journey at The Gilded Oyster is confirmed. We have sent the details to your email address.
            </p>
            <button 
              onClick={() => window.location.href = '/'}
              className="blue-gradient text-white px-10 py-4 rounded text-xs font-bold uppercase tracking-widest shadow-xl"
            >
              Back to Home
            </button>
          </motion.div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="pt-40 pb-32 px-6 min-h-screen bg-white relative">
        <div 
          className="absolute inset-0 z-0 opacity-100 pointer-events-none"
          style={{ 
            backgroundImage: "url('/assets/dining_bg.png')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed'
          }}
        ></div>

        <div className="max-w-4xl mx-auto relative z-10">
          <div className="text-center mb-16 space-y-4">
            <h3 className="text-blue-light font-bold tracking-[0.2em] text-3xl md:text-5xl calligraphy-font">Epicurean Reservation</h3>
            <h2 className="text-5xl md:text-6xl heading-font text-blue-dark">Book Your Table</h2>
            <div className="w-24 h-1 blue-gradient mx-auto"></div>
          </div>

          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-white/40 backdrop-blur-3xl p-8 md:p-12 rounded-[32px] border border-blue-light/10 shadow-2xl">
            <div className="space-y-6">
              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-blue-dark/60 ml-1">Guest Name</label>
                <div className="relative">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 text-blue-light/50" size={18} />
                  <input required type="text" placeholder="John Doe" className="w-full bg-white/50 border border-blue-light/10 rounded-xl py-4 pl-12 pr-4 focus:ring-2 focus:ring-blue-light/20 focus:border-blue-light outline-none transition-all placeholder:text-blue-dark/20" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-blue-dark/60 ml-1">Contact Number</label>
                <div className="relative">
                  <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-blue-light/50" size={18} />
                  <input required type="tel" placeholder="+91 12345 67890" className="w-full bg-white/50 border border-blue-light/10 rounded-xl py-4 pl-12 pr-4 focus:ring-2 focus:ring-blue-light/20 focus:border-blue-light outline-none transition-all placeholder:text-blue-dark/20" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-blue-dark/60 ml-1">Email Address</label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-blue-light/50" size={18} />
                  <input required type="email" placeholder="john@example.com" className="w-full bg-white/50 border border-blue-light/10 rounded-xl py-4 pl-12 pr-4 focus:ring-2 focus:ring-blue-light/20 focus:border-blue-light outline-none transition-all placeholder:text-blue-dark/20" />
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-blue-dark/60 ml-1">Reservation Date</label>
                <div className="relative">
                  <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 text-blue-light/50" size={18} />
                  <input required type="date" className="w-full bg-white/50 border border-blue-light/10 rounded-xl py-4 pl-12 pr-4 focus:ring-2 focus:ring-blue-light/20 focus:border-blue-light outline-none transition-all" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-blue-dark/60 ml-1">Reservation Time</label>
                <div className="relative">
                  <Clock className="absolute left-4 top-1/2 -translate-y-1/2 text-blue-light/50" size={18} />
                  <select required className="w-full bg-white/50 border border-blue-light/10 rounded-xl py-4 pl-12 pr-4 focus:ring-2 focus:ring-blue-light/20 focus:border-blue-light outline-none transition-all appearance-none">
                    <option value="">Select Time</option>
                    <option>07:00 PM</option>
                    <option>07:30 PM</option>
                    <option>08:00 PM</option>
                    <option>08:30 PM</option>
                    <option>09:00 PM</option>
                    <option>09:30 PM</option>
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-blue-dark/60 ml-1">Number of Guests</label>
                <div className="relative">
                  <Users className="absolute left-4 top-1/2 -translate-y-1/2 text-blue-light/50" size={18} />
                  <input required type="number" min="1" max="10" placeholder="2" className="w-full bg-white/50 border border-blue-light/10 rounded-xl py-4 pl-12 pr-4 focus:ring-2 focus:ring-blue-light/20 focus:border-blue-light outline-none transition-all placeholder:text-blue-dark/20" />
                </div>
              </div>
            </div>

            <div className="md:col-span-2 pt-4">
              <button type="submit" className="w-full blue-gradient text-white py-5 rounded-xl text-xs font-bold uppercase tracking-[0.4em] shadow-2xl hover:brightness-110 hover:shadow-blue-light/30 transition-all duration-500">
                Reserve Table / Submit Booking
              </button>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default RestaurantBooking;
