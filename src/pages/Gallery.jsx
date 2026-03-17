import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Layout from "../components/Layout";
import { X, Maximize2, Download } from "lucide-react";

const galleryImages = [
  { id: 7, src: "/assets/penguin_resort.png", title: "Ocean Fantasy", category: "Concept" },
  { id: 9, src: "/assets/coastal_balcony.jpg", title: "Terrace Serenity", category: "Exterior" },
  { id: 10, src: "/assets/twin_ocean_view.png", title: "Twin Coastal Comfort", category: "Suites" },
  { id: 11, src: "/assets/vizag_secret_promo.png", title: "Vizag's Secret", category: "Promo" },
  { id: 12, src: "/assets/extraordinary_collage.png", title: "The Extraordinary", category: "Lifestyle" },
  { id: 13, src: "/assets/nearby_attractions.png", title: "Nearby Attractions", category: "Location" },
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleDownload = (e, src, title) => {
    e.stopPropagation();
    const link = document.createElement('a');
    link.href = src;
    link.download = `${title.toLowerCase().replace(/\s+/g, '-')}.png`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <Layout>
      <section className="pt-40 pb-32 px-6 min-h-screen relative overflow-hidden bg-white">
        {/* Abstract Background Layer */}
        <div 
          className="fixed inset-0 z-0 opacity-40 pointer-events-none"
          style={{ 
            backgroundImage: "url('/assets/gallery_bg_new.jpg')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed'
          }}
        ></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16 space-y-4">
            <h3 className="text-blue-light font-bold tracking-[0.5em] uppercase text-[10px]">Aesthetic Journey</h3>
            <h2 className="text-5xl md:text-6xl heading-font text-blue-dark">The Visual Archive</h2>
            <div className="w-24 h-1 blue-gradient mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((image) => (
              <motion.div
                key={image.id}
                layoutId={`image-${image.id}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                onClick={() => setSelectedImage(image)}
                className="relative aspect-[4/5] rounded-xl overflow-hidden cursor-pointer group shadow-xl"
              >
                <img 
                  src={image.src} 
                  alt={image.title}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-blue-dark/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-blue-light text-[8px] uppercase tracking-widest mb-1">{image.category}</p>
                      <h4 className="text-white heading-font text-lg">{image.title}</h4>
                    </div>
                    <div className="flex gap-2">
                        <button 
                        onClick={(e) => handleDownload(e, image.src, image.title)}
                        className="p-3 bg-white/10 backdrop-blur-md rounded-full text-white hover:bg-blue-light hover:text-blue-dark transition-all"
                      >
                        <Download size={18} />
                      </button>
                      <div className="p-3 bg-white/10 backdrop-blur-md rounded-full text-white">
                        <Maximize2 size={18} />
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-sky-50/95 backdrop-blur-xl flex items-center justify-center p-6"
            onClick={() => setSelectedImage(null)}
          >
            <motion.button
              className="absolute top-10 right-10 text-blue-dark hover:text-blue-light"
              onClick={() => setSelectedImage(null)}
            >
              <X size={48} />
            </motion.button>

            <motion.div
              layoutId={`image-${selectedImage.id}`}
              className="max-w-5xl max-h-[80vh] relative"
              onClick={(e) => e.stopPropagation()}
            >
              <img 
                src={selectedImage.src} 
                alt={selectedImage.title}
                className="w-full h-full object-contain rounded-xl shadow-2xl shadow-blue-light/10"
              />
              <div className="absolute -bottom-16 left-0 right-0 text-center space-y-2">
                <h4 className="text-2xl heading-font text-blue-dark">{selectedImage.title}</h4>
                <p className="text-blue-light/60 text-xs uppercase tracking-[0.4em] font-bold">{selectedImage.category}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </Layout>
  );
};

export default Gallery;
