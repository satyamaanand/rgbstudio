import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Camera } from "lucide-react";
import { portfolioData } from "../data/portfolioData";
import LightboxModal from "../components/LightboxModal";

const categories = ["All", "Fashion & Editorial", "Home Textiles & Interiors", "Product", "Motion"];

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIdx, setCurrentImageIdx] = useState(0);

  const filteredImages = useMemo(() => {
    if (activeCategory === "All") return portfolioData;
    return portfolioData.filter((img) => img.category === activeCategory);
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
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
      className="page-container pt-24"
    >
      {/* Header Banner */}
      <div className="bg-[#111111] text-white py-20 px-6 text-center border-b border-[#222222]">
        <div className="max-w-4xl mx-auto">
          <span className="text-xs uppercase tracking-[0.35em] text-[#c9a35b] font-semibold block mb-4">
            Curated Visuals
          </span>
          <h1 className="text-4xl md:text-6xl font-light font-serif mb-4 tracking-wide">
            Portfolio Gallery
          </h1>
          <div className="w-16 h-[1px] bg-[#c9a35b] mx-auto mb-6"></div>
          <p className="text-gray-400 font-light text-sm md:text-base max-w-xl mx-auto leading-relaxed">
            Exploring the limits of light, posture, and elegance. Our collective body of work ranges from haute couture editorials to conceptual brand visuals.
          </p>
        </div>
      </div>

      {/* Gallery Section */}
      <div className="py-16 px-6 md:px-12 bg-white flex-grow">
        <div className="max-w-7xl mx-auto">
          
          {/* Category Filter */}
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
                    layoutId="portfolioActiveFilter"
                    className="absolute bottom-0 left-4 right-4 h-[1.5px] bg-[#c9a35b]"
                    transition={{ type: "spring", stiffness: 300, damping: 25 }}
                  />
                )}
              </button>
            ))}
          </div>

          {/* Masonry / Grid */}
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
                  transition={{ duration: 0.5 }}
                  onClick={() => handleOpenLightbox(idx)}
                  className={`group relative overflow-hidden cursor-zoom-in bg-black ${
                    idx === 1 || idx === 4 || idx === 7 ? "md:row-span-2 md:h-[600px]" : "h-[300px]"
                  } lg:h-[360px]`}
                >
                  <img
                    src={image.image}
                    alt={image.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/65 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8 text-white z-10">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 border border-white/20 rounded-full flex items-center justify-center bg-white/10 backdrop-blur-sm transform scale-50 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-300">
                      <Plus size={20} className="text-white" />
                    </div>
                    <span className="text-[10px] tracking-[0.25em] text-[#c9a35b] uppercase font-bold mb-1">
                      {image.category}
                    </span>
                    <h3 className="font-serif text-xl tracking-wide font-light">{image.title}</h3>
                    <div className="flex justify-between items-center mt-2 border-t border-white/10 pt-2 text-gray-400 text-xs">
                      <span className="font-light">{image.year}</span>
                      <span className="flex items-center text-[9px] uppercase tracking-widest"><Camera size={10} className="mr-1 text-[#c9a35b]" /> RGB Studio</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

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
    </motion.div>
  );
}
