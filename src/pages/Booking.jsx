import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useSearchParams } from "react-router-dom";
import Layout from "../components/Layout";
import { Calendar, Users, Home, CreditCard, ChevronRight, ChevronLeft, CheckCircle2, Shield } from "lucide-react";
import { cn } from "../utils/cn";

const suites = [
  { id: "oceanic", name: "Oceanic Suite", price: 500, image: "/assets/room-types.jpg" },
  { id: "horizon", name: "Horizon Villa", price: 850, image: "/assets/suite-interior.jpg" },
  { id: "penthouse", name: "Presidential Penthouse", price: 1500, image: "/assets/hotel-night.jpg" },
];

const Booking = () => {
  const [searchParams] = useSearchParams();
  const [step, setStep] = useState(1);
  const [bookingData, setBookingData] = useState({
    dates: { checkIn: "", checkOut: "" },
    rooms: 1,
    suiteId: searchParams.get("suiteId") || "oceanic",
    contact: { name: "", email: "", phone: "" },
    payment: { cardNumber: "", expiry: "", cvc: "" }
  });
  const [isSuccess, setIsSuccess] = useState(false);
  const today = new Date().toISOString().split("T")[0];

  useEffect(() => {
    const sId = searchParams.get("suiteId");
    if (sId) setBookingData(prev => ({ ...prev, suiteId: sId }));
  }, [searchParams]);

  const selectedSuite = suites.find(s => s.id === bookingData.suiteId);
  const totalSteps = 4;
  const roomTotal = selectedSuite.price * bookingData.rooms;
  const serviceCharge = 50;
  const taxes = Math.round(roomTotal * 0.12);
  const totalPrice = roomTotal + serviceCharge + taxes;

  const isStepValid = () => {
    switch(step) {
      case 1:
        return bookingData.dates.checkIn && bookingData.dates.checkOut && bookingData.rooms > 0;
      case 2:
        return !!bookingData.suiteId;
      case 3:
        return bookingData.contact.name.trim() !== "" && 
               bookingData.contact.email.trim() !== "" && 
               /^\d{10}$/.test(bookingData.contact.phone);
      case 4:
        return bookingData.payment.cardNumber.length >= 16 && 
               bookingData.payment.expiry !== "" && 
               bookingData.payment.cvc.length >= 3;
      default:
        return false;
    }
  };

  const handleNext = () => {
    if (isStepValid()) {
      step < totalSteps ? setStep(step + 1) : setIsSuccess(true);
    }
  };
  const handleBack = () => step > 1 && setStep(step - 1);

  const renderStep = () => {
    switch(step) {
      case 1:
        return (
          <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <h3 className="text-3xl heading-font text-blue-dark">Select Your Dates</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-[10px] font-bold tracking-widest uppercase text-charcoal/40">Check-in</label>
                <input 
                  type="date" 
                  min={today}
                  className="w-full bg-pearl border border-blue-light/20 rounded p-4 outline-none focus:border-blue-light transition-colors"
                  onChange={(e) => setBookingData({...bookingData, dates: {...bookingData.dates, checkIn: e.target.value}})}
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-bold tracking-widest uppercase text-charcoal/40">Check-out</label>
                <input 
                   type="date" 
                   min={bookingData.dates.checkIn || today}
                   className="w-full bg-pearl border border-blue-light/20 rounded p-4 outline-none focus:border-blue-light transition-colors"
                   onChange={(e) => setBookingData({...bookingData, dates: {...bookingData.dates, checkOut: e.target.value}})}
                />
              </div>
            </div>
            <div className="space-y-4">
              <label className="text-[10px] font-bold tracking-widest uppercase text-charcoal/40">Number of Rooms</label>
              <div className="flex items-center gap-6">
                <button 
                  onClick={() => setBookingData({...bookingData, rooms: Math.max(1, bookingData.rooms - 1)})}
                  className="size-12 rounded-full border-2 border-blue-light/30 flex items-center justify-center text-blue-dark hover:bg-blue-light hover:text-white hover:border-blue-light transition-all font-bold text-2xl"
                >-</button>
                <span className="text-3xl font-bold heading-font text-blue-dark">{bookingData.rooms}</span>
                <button 
                  onClick={() => setBookingData({...bookingData, rooms: bookingData.rooms + 1})}
                  className="size-12 rounded-full border-2 border-blue-light/30 flex items-center justify-center text-blue-dark hover:bg-blue-light hover:text-white hover:border-blue-light transition-all font-bold text-2xl"
                >+</button>
              </div>
            </div>
          </div>
        );
      case 2:
        return (
          <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <h3 className="text-3xl heading-font text-blue-dark">Choose Your Suite</h3>
            <div className="space-y-4">
              {suites.map((suite) => (
                <div 
                  key={suite.id}
                  onClick={() => setBookingData({...bookingData, suiteId: suite.id})}
                  className={cn(
                    "flex items-center gap-6 p-4 rounded-xl border transition-all cursor-pointer group",
                    bookingData.suiteId === suite.id ? "border-blue-light bg-blue-light/5 shadow-lg" : "border-blue-light/10 hover:border-blue-light/30"
                  )}
                >
                  <div className="size-24 rounded-lg overflow-hidden flex-shrink-0">
                    <img src={suite.image} alt={suite.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  </div>
                  <div className="flex-grow">
                    <h4 className="text-lg heading-font font-bold">{suite.name}</h4>
                    <p className="text-blue-light font-bold text-sm">${suite.price} / NIGHT</p>
                  </div>
                  {bookingData.suiteId === suite.id && <CheckCircle2 className="text-blue-light" />}
                </div>
              ))}
            </div>
          </div>
        );
      case 3:
        return (
          <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <h3 className="text-3xl heading-font text-blue-dark">Contact Details</h3>
            <div className="space-y-6">
              {[
                { label: "Full Name", key: "name", type: "text" },
                { label: "Email Address", key: "email", type: "email" },
                { label: "Phone Number", key: "phone", type: "tel" }
              ].map((field) => (
                <div key={field.key} className="space-y-2">
                  <label className="text-[10px] font-bold tracking-widest uppercase text-charcoal/40">{field.label}</label>
                  <input 
                    type={field.type}
                    className="w-full bg-pearl border border-blue-light/20 rounded p-4 outline-none focus:border-blue-light transition-colors"
                    placeholder={field.key === 'phone' ? '10-digit number' : `Enter your ${field.label.toLowerCase()}`}
                    maxLength={field.key === 'phone' ? "10" : undefined}
                    value={bookingData.contact[field.key]}
                    onChange={(e) => {
                      const val = e.target.value;
                      if (field.key === 'phone' && !/^\d*$/.test(val)) return;
                      setBookingData({...bookingData, contact: {...bookingData.contact, [field.key]: val}});
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
        );
      case 4:
        return (
          <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <h3 className="text-3xl heading-font text-blue-dark">Secure Payment</h3>
            <div className="bg-white p-8 rounded-2xl shadow-xl border border-blue-light/10 space-y-6 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-dark via-blue-light to-blue-dark"></div>
              
              <div className="flex items-center justify-between mb-4">
                <div className="space-y-1">
                  <p className="text-[10px] font-bold tracking-widest uppercase text-charcoal/40">Credit / Debit Card</p>
                  <p className="text-[9px] text-blue-light font-medium uppercase tracking-tighter">Bank-level 256-bit encryption</p>
                </div>
                <div className="flex gap-2">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg" alt="Visa" className="h-4 opacity-50 grayscale hover:grayscale-0 transition-all cursor-crosshair" />
                  <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" alt="Mastercard" className="h-4 opacity-50 grayscale hover:grayscale-0 transition-all cursor-crosshair" />
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="relative group">
                  <input 
                    type="text" 
                    placeholder="0000 0000 0000 0000"
                    className="w-full bg-pearl border border-blue-light/20 rounded p-4 outline-none focus:border-blue-light transition-colors pl-12"
                    maxLength="16"
                    onChange={(e) => setBookingData({...bookingData, payment: {...bookingData.payment, cardNumber: e.target.value}})}
                  />
                  <Shield size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-blue-light/40 group-focus-within:text-blue-light transition-colors" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <input 
                    type="text" 
                    placeholder="MM/YY"
                    className="bg-pearl border border-blue-light/20 rounded p-4 outline-none focus:border-blue-light transition-colors"
                    maxLength="5"
                    onChange={(e) => setBookingData({...bookingData, payment: {...bookingData.payment, expiry: e.target.value}})}
                  />
                  <input 
                    type="password" 
                    placeholder="CVC"
                    className="bg-pearl border border-blue-light/20 rounded p-4 outline-none focus:border-blue-light transition-colors"
                    maxLength="3"
                    onChange={(e) => setBookingData({...bookingData, payment: {...bookingData.payment, cvc: e.target.value}})}
                  />
                </div>
              </div>

              {/* Instructional UI */}
              <div className="pt-4 border-t border-blue-dark/5 space-y-4">
                <p className="text-[9px] font-bold tracking-widest uppercase text-charcoal/40 text-center">How it works</p>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { title: "Authenticate", icon: "Step 1", desc: "Verify identity" },
                    { title: "Authorize", icon: "Step 2", desc: "Bank approval" },
                    { title: "Confirm", icon: "Step 3", desc: "Instant receipt" }
                  ].map((s, i) => (
                    <div key={i} className="text-center space-y-1">
                      <div className="text-[8px] font-bold text-blue-light">{s.icon}</div>
                      <p className="text-[10px] font-bold leading-none">{s.title}</p>
                      <p className="text-[8px] text-charcoal/40">{s.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-blue-light/5 p-4 rounded-xl flex gap-3 items-center border border-blue-light/10">
                <Shield size={20} className="text-blue-light animate-pulse" />
                <p className="text-[10px] text-blue-dark/60 uppercase tracking-widest leading-relaxed font-medium">
                  Escrow-protected payment processing active. Funds held until check-in.
                </p>
              </div>
            </div>
          </div>
        );
      default: return null;
    }
  };

  return (
    <Layout>
      <section className="pt-40 pb-32 px-6 min-h-screen relative overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/assets/suites_bg_new.jpg" 
            alt="background" 
            className="w-full h-full object-cover opacity-100"
          />
          <div className="absolute inset-0 bg-pearl/60"></div>
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          {!isSuccess ? (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
              {/* Form Side */}
              <div className="lg:col-span-7 space-y-12">
                {/* Stepper */}
                <div className="flex items-center gap-4">
                  {[1, 2, 3, 4].map((s) => (
                    <div key={s} className="flex items-center gap-4 flex-grow last:flex-grow-0">
                      <div className={cn(
                        "size-10 rounded-full flex items-center justify-center font-bold font-body text-xs transition-all duration-500",
                        step === s ? "blue-gradient text-white shadow-lg" : 
                        step > s ? "bg-blue-dark text-blue-light" : "bg-blue-dark/5 text-charcoal/20"
                      )}>
                        {step > s ? <CheckCircle2 size={18} /> : s}
                      </div>
                      {s < 4 && <div className={cn("h-[1px] flex-grow", step > s ? "bg-blue-light" : "bg-blue-dark/10")}></div>}
                    </div>
                  ))}
                </div>

                <div className="min-h-[400px]">
                  {renderStep()}
                </div>

                <div className="flex gap-4 pt-10">
                  {step > 1 && (
                    <button 
                      onClick={handleBack}
                      className="px-8 py-4 border border-blue-dark/10 text-blue-dark font-bold uppercase tracking-[0.3em] text-[10px] rounded hover:bg-blue-dark/5 transition-all flex items-center justify-center gap-2"
                    >
                      <ChevronLeft size={16} /> Back
                    </button>
                  )}
                  <button 
                    onClick={handleNext}
                    disabled={!isStepValid()}
                    className={cn(
                      "w-full py-4 text-white font-bold uppercase tracking-[0.3em] text-[10px] rounded shadow-xl transition-all flex items-center justify-center gap-2",
                      isStepValid() ? "blue-gradient hover:brightness-110 font-body" : "bg-charcoal/20 cursor-not-allowed shadow-none"
                    )}
                  >
                    {step === 4 ? "Confirm Reservation" : "Next Step"} <ChevronRight size={16} />
                  </button>
                </div>
              </div>

              {/* Summary Side */}
              <div className={cn(
                "lg:col-span-5 relative",
                step === 4 ? "block" : "hidden lg:block"
              )}>
                <div className="lg:sticky lg:top-40 bg-white rounded-3xl p-10 shadow-2xl border border-blue-light/10 space-y-8 overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-blue-light/5 -translate-y-1/2 translate-x-1/2 rounded-full blur-3xl"></div>
                  
                  <h4 className="text-xl heading-font font-bold text-blue-dark pb-4 border-b border-blue-dark/5">Reservation Summary</h4>
                  
                  <div className="space-y-6">
                    <div className="flex items-center gap-4">
                      <div className="size-12 rounded bg-blue-light/10 flex items-center justify-center text-blue-light">
                        <Home size={20} />
                      </div>
                      <div>
                        <p className="text-[10px] uppercase tracking-widest text-charcoal/40">Selected Suite</p>
                        <p className="font-bold heading-font">{selectedSuite.name}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-4">
                      <div className="size-12 rounded bg-blue-light/10 flex items-center justify-center text-blue-light">
                        <Calendar size={20} />
                      </div>
                      <div>
                        <p className="text-[10px] uppercase tracking-widest text-charcoal/40">Dates</p>
                        <p className="font-bold">{bookingData.dates.checkIn || "---"} to {bookingData.dates.checkOut || "---"}</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-4">
                      <div className="size-12 rounded bg-blue-light/10 flex items-center justify-center text-blue-light">
                        <Users size={20} />
                      </div>
                      <div>
                        <p className="text-[10px] uppercase tracking-widest text-charcoal/40">Total Rooms</p>
                        <p className="font-bold">{bookingData.rooms} Rooms</p>
                      </div>
                    </div>
                  </div>

                  <div className="pt-8 space-y-4">
                    <div className="flex justify-between text-sm text-charcoal/60 font-light font-body">
                      <span>Rate ({bookingData.rooms} {bookingData.rooms > 1 ? 'rooms' : 'room'})</span>
                      <span>${roomTotal}</span>
                    </div>
                    <div className="flex justify-between text-sm text-charcoal/60 font-light font-body">
                      <span>Service Charge</span>
                      <span>${serviceCharge}</span>
                    </div>
                    <div className="flex justify-between text-sm text-charcoal/60 font-light font-body">
                      <span>Taxes (12%)</span>
                      <span>${taxes}</span>
                    </div>
                    <div className="flex justify-between items-center pt-4 border-t border-blue-dark/5">
                      <p className="text-xs uppercase tracking-[0.3em] font-bold text-blue-dark">Estimated Total</p>
                      <p className="text-3xl heading-font font-black text-blue-light">${totalPrice}</p>
                    </div>
                  </div>

                  <div className="bg-blue-dark/5 p-4 rounded-xl flex items-center gap-3">
                    <CreditCard size={18} className="text-blue-light" />
                    <p className="text-[10px] font-medium text-blue-dark/60 uppercase tracking-widest">Secure Premium Checkout Enabled</p>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="max-w-xl mx-auto text-center space-y-10 py-20"
            >
              <div className="size-32 blue-gradient rounded-full mx-auto flex items-center justify-center shadow-2xl animate-bounce">
                <CheckCircle2 size={64} className="text-white" />
              </div>
              <div className="space-y-4">
                <h2 className="text-5xl heading-font text-blue-dark">Luxury Confirmed</h2>
                <p className="text-charcoal/60 font-light text-lg font-body">Your escape to Hotel Ocean Blue has been successfully requested. Our concierge will contact you within the hour to finalize your <span className="calligraphy-font text-2xl text-blue-light mx-1">Aesthetic Journey</span>.</p>
              </div>
              <div className="flex flex-col gap-4 pt-6">
                 <button 
                  onClick={() => window.location.href = "/"}
                  className="py-4 blue-gradient text-white font-bold uppercase tracking-[0.3em] text-xs rounded shadow-xl font-body"
                >Return Home</button>
                 <p className="text-[10px] uppercase tracking-[0.4em] text-charcoal/30">Booking ID: BLUE-EXPLORE-2026</p>
              </div>
            </motion.div>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default Booking;
