import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";
import { portfolioData } from "../data/portfolioData";
import LightboxModal from "../components/LightboxModal";

const categories = ["All", "Fashion & Editorial", "Home Textiles & Interiors", "Product", "Motion"];

export default function PortfolioPreview() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIdx, setCurrentImageIdx] = useState(0);

  // Filter images based on category
  const filteredImages = useMemo(() => {
    if (activeCategory === "All") {
      // Limit to 6 items for the homepage preview
      return portfolioData.slice(0, 6);
    }
    return portfolioData.filter((img) => img.category === activeCategory).slice(0, 6);
  }, [activeCategory]);

  const handleOpenLightbox = (index) => {
    setCurrentImageIdx(index);
    setLightboxOpen(true);
  };

  const handleNext = () => {
    setCurrentImageIdx((prev) => (prev + 1) % filteredImages.length);
  };

  const handlePrev = () => {
    setCurrentImageIdx((prev) => (prev - 1 + filteredImages.length) % filteredImages.length);
  };

  return (
    <section id="portfolio" className="py-24 px-6 md:px-12 bg-[#f5f5f5]">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Title */}
        <div className="text-center mb-12">
          <span className="text-xs uppercase tracking-[0.3em] text-[#c9a35b] font-semibold block mb-3">
            Our Work
          </span>
          <h2 className="text-3xl md:text-5xl font-light tracking-wide text-[#111111] mb-4">
            Portfolio Preview
          </h2>
          <div className="w-12 h-[1px] bg-[#c9a35b] mx-auto"></div>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center items-center gap-3 md:gap-6 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`text-[10px] md:text-xs uppercase tracking-[0.25em] font-semibold px-4 md:px-6 py-2 transition-all duration-300 relative ${
                activeCategory === category
                  ? "text-[#c9a35b]"
                  : "text-[#666] hover:text-[#111111]"
              }`}
            >
              {category}
              {activeCategory === category && (
                <motion.div
                  layoutId="activeFilterIndicator"
                  className="absolute bottom-0 left-4 right-4 h-[1.5px] bg-[#c9a35b]"
                  transition={{ type: "spring", stiffness: 300, damping: 25 }}
                />
              )}
            </button>
          ))}
        </div>

        {/* Masonry / Grid Layout */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredImages.map((image, idx) => (
              <motion.div
                key={image.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.6 }}
                onClick={() => handleOpenLightbox(idx)}
                className={`group relative overflow-hidden cursor-zoom-in bg-black ${
                  idx === 1 || idx === 4 ? "md:row-span-2 md:h-[620px]" : "h-[300px] md:h-[280px]"
                } lg:h-[380px]`}
              >
                {/* Image */}
                <img
                  src={image.image}
                  alt={image.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />

                {/* Hover overlay with details */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8 text-white z-10">
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 border border-white/20 rounded-full flex items-center justify-center bg-white/10 backdrop-blur-sm transform scale-50 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-300">
                    <Plus size={20} className="text-white" />
                  </div>
                  <span className="text-[10px] tracking-[0.25em] text-[#c9a35b] uppercase font-bold mb-1">
                    {image.category}
                  </span>
                  <h3 className="font-serif text-xl tracking-wide font-light">{image.title}</h3>
                  <span className="text-gray-400 text-xs mt-1 font-light">{image.year}</span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* View All CTA */}
        <div className="text-center mt-16">
          <button
            onClick={() => window.open("https://pixlor.co.in/still", "_blank")}
            className="text-xs uppercase tracking-[0.2em] font-semibold bg-[#111111] text-white hover:bg-[#c9a35b] px-8 py-4 transition-all duration-300"
          >
            View Full Gallery
          </button>
        </div>

      </div>

      {/* Lightbox Modal */}
      <LightboxModal
        isOpen={lightboxOpen}
        images={filteredImages}
        currentIndex={currentImageIdx}
        onClose={() => setLightboxOpen(false)}
        onPrev={handlePrev}
        onNext={handleNext}
      />
    </section>
  );
}
