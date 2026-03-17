import React from "react";
import { Link } from "react-router-dom";
import { Instagram, Facebook, Twitter, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative z-10 bg-blue-dark text-pearl py-12 px-6 border-t border-blue-light/10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Brand Section */}
        <div className="space-y-6">
          <div className="flex items-center gap-4">
            <div className="h-8 w-auto overflow-hidden">
              <img src="/logo.png" alt="Logo" className="h-full w-auto object-contain" />
            </div>
            <h2 className="text-lg font-bold tracking-[0.2em] heading-font uppercase">Hotel Ocean Blue</h2>
          </div>
          <p className="text-pearl/60 text-sm font-light leading-relaxed">
            Experience the pinnacle of coastal elegance where the horizon meets luxury. A beacon of architectural grace in the heart of Vizag.
          </p>
          <div className="flex gap-4">
            {[Instagram, Facebook, Twitter].map((Icon, i) => (
              <a key={i} href="#" className="text-blue-light/60 hover:text-blue-light transition-colors duration-300">
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div className="space-y-6">
          <h4 className="text-white text-sm font-bold tracking-[0.3em] uppercase">Quick Links</h4>
          <ul className="space-y-4">
            {["About Us", "Our Suites", "Dining", "Gallery", "Careers"].map((link) => (
              <li key={link}>
                <a href="#" className="text-pearl/60 text-sm hover:text-blue-light transition-colors duration-300">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div className="space-y-6">
          <h4 className="text-white text-sm font-bold tracking-[0.3em] uppercase">Contact Us</h4>
          <ul className="space-y-4">
            <li className="flex items-start gap-3 text-pearl/60 text-sm leading-relaxed">
              <MapPin size={18} className="text-blue-light flex-shrink-0" />
              <span>Door No: 7-8-22/3/1, Harbour Park Road, Vizag, 530003</span>
            </li>
            <li className="flex flex-col gap-2 text-pearl/60 text-sm">
              <div className="flex items-center gap-3">
                <Phone size={18} className="text-blue-light" />
                <span>+91 7075206909</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={18} className="text-blue-light" />
                <span>+91 702857909</span>
              </div>
            </li>
            <li className="flex items-center gap-3 text-pearl/60 text-sm">
              <Mail size={18} className="text-blue-light" />
              <span>reservations@hoteloceanblue.com</span>
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div className="space-y-6">
          <h4 className="text-white text-sm font-bold tracking-[0.3em] uppercase">Newsletter</h4>
          <p className="text-pearl/60 text-sm font-light">Join our elite circle for exclusive offers and coastal stories.</p>
          <div className="flex bg-white/5 rounded overflow-hidden border border-blue-light/20">
            <input 
              type="email" 
              placeholder="Email" 
              className="bg-transparent px-4 py-3 text-xs flex-grow outline-none border-none text-pearl placeholder:text-pearl/30"
            />
            <button className="blue-gradient px-4 py-3 text-white">
              <Mail size={16} />
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-12 pt-6 border-t border-blue-light/10 text-center">
        <p className="text-[10px] font-bold tracking-[0.3em] uppercase text-pearl/40">
          © 2026 Hotel Ocean Blue Vizag. Architectural Grace Reimagined.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
