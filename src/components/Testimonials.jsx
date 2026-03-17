import React, { useRef, useEffect, useState } from "react";
import { motion, useScroll, useSpring, useTransform, useMotionValue, useAnimationFrame } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Sarah Jenkins",
    location: "London, UK",
    text: "An absolute sanctuary. The views from the Oceanic Suite are unlike anything I've experienced. Truly five-star service.",
    rating: 5,
    image: "https://i.pravatar.cc/150?u=sarah"
  },
  {
    id: 2,
    name: "David Chen",
    location: "Singapore",
    text: "The dining at The Gilded Oyster was the highlight of our trip. Executive chef's attention to detail is remarkable.",
    rating: 5,
    image: "https://i.pravatar.cc/150?u=david"
  },
  {
    id: 3,
    name: "Elena Rodriguez",
    location: "Madrid, Spain",
    text: "Modern, sophisticated, yet incredibly welcoming. The architecture perfectly mirrors the beautiful Vizag coastline.",
    rating: 5,
    image: "https://i.pravatar.cc/150?u=elena"
  },
  {
    id: 4,
    name: "Michael Smith",
    location: "New York, USA",
    text: "Everything about Hotel Ocean Blue screams luxury. From the infinity pool to the impeccable concierge service.",
    rating: 5,
    image: "https://i.pravatar.cc/150?u=michael"
  },
  {
    id: 5,
    name: "Priya Sharma",
    location: "Mumbai, India",
    text: "A true gem in Vizag. We spent every evening at the Azure Rooftop Lounge watching the sunset. Magical.",
    rating: 5,
    image: "https://i.pravatar.cc/150?u=priya"
  },
  {
    id: 6,
    name: "Robert Weber",
    location: "Berlin, Germany",
    text: "The hospitality here is unmatched. The staff goes above and beyond to make every moment feel special.",
    rating: 5,
    image: "https://i.pravatar.cc/150?u=robert"
  }
];

const TestimonialCard = ({ testimonial }) => (
  <div className="bg-white/40 backdrop-blur-xl border border-blue-light/10 p-8 rounded-[20px] shadow-xl hover:bg-white/60 transition-colors duration-500 mb-6 group">
    <div className="flex gap-1 mb-4">
      {[...Array(testimonial.rating)].map((_, i) => (
        <Star key={i} size={14} className="fill-blue-light text-blue-light" />
      ))}
    </div>
    <p className="text-blue-dark/70 font-light leading-relaxed mb-8 italic">"{testimonial.text}"</p>
    <div className="flex items-center gap-4">
      <img src={testimonial.image} alt={testimonial.name} className="size-12 rounded-full border border-blue-light/30 object-cover" />
      <div>
        <h4 className="text-blue-dark font-bold text-sm tracking-wide">{testimonial.name}</h4>
        <p className="text-blue-light text-[10px] uppercase tracking-widest">{testimonial.location}</p>
      </div>
    </div>
  </div>
);

const InfiniteColumn = ({ items, speed = 0.5 }) => {
  const containerRef = useRef(null);
  const scrollY = useMotionValue(0);
  const [contentHeight, setContentHeight] = useState(0);

  useEffect(() => {
    if (containerRef.current) {
      setContentHeight(containerRef.current.scrollHeight / 2);
    }
  }, []);

  useAnimationFrame(() => {
    let currentY = scrollY.get();
    currentY -= speed;
    
    if (currentY <= -contentHeight) {
      currentY = 0;
    }
    
    scrollY.set(currentY);
  });

  return (
    <div className="h-[700px] overflow-hidden relative">
      <motion.div 
        ref={containerRef}
        style={{ y: scrollY }}
        className="flex flex-col"
      >
        {/* Triple the items to ensure seamless loop without gaps */}
        {[...items, ...items, ...items].map((item, idx) => (
          <TestimonialCard key={`${item.id}-${idx}`} testimonial={item} />
        ))}
      </motion.div>
    </div>
  );
};

const Testimonials = () => {
  return (
    <section className="py-32 relative overflow-hidden bg-white" id="testimonials">
      {/* Abstract Background Layer */}
      <div className="absolute inset-0 opacity-100 pointer-events-none bg-[radial-gradient(circle_at_top_right,_rgba(58,190,249,0.08)_0%,_transparent_60%),radial-gradient(circle_at_bottom_left,_rgba(5,58,109,0.03)_0%,_transparent_50%)]"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20 space-y-4">
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-blue-light font-bold tracking-[0.2em] text-3xl md:text-4xl calligraphy-font"
          >
            Guest Opinions
          </motion.h3>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="heading-font text-blue-dark"
          >
            Voices of Distinction
          </motion.h2>
          <div className="w-24 h-1 blue-gradient mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <InfiniteColumn items={[testimonials[0], testimonials[3], testimonials[5]]} speed={0.4} />
          <div className="hidden md:block">
            <InfiniteColumn items={[testimonials[1], testimonials[4], testimonials[2]]} speed={0.6} />
          </div>
          <div className="hidden lg:block">
            <InfiniteColumn items={[testimonials[2], testimonials[0], testimonials[4]]} speed={0.5} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
