import { useEffect } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function LightboxModal({ isOpen, images, currentIndex, onClose, onPrev, onNext }) {
  // Lock scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  // Handle keyboard events (Escape, Left, Right)
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isOpen) return;
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose, onPrev, onNext]);

  if (!isOpen || !images || images.length === 0) return null;

  const currentImage = images[currentIndex];

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-sm">
        {/* Background Close Click */}
        <div className="absolute inset-0 cursor-zoom-out" onClick={onClose}></div>

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 text-white/70 hover:text-white hover:bg-white/10 p-2.5 rounded-full transition-all duration-300 z-55 focus:outline-none"
          aria-label="Close Lightbox"
        >
          <X size={28} />
        </button>

        {/* Prev Arrow */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            onPrev();
          }}
          className="absolute left-6 text-white/50 hover:text-white hover:bg-white/10 p-3 rounded-full transition-all duration-300 z-55 focus:outline-none"
          aria-label="Previous Image"
        >
          <ChevronLeft size={36} />
        </button>

        {/* Image Container */}
        <div className="relative max-w-4xl max-h-[80vh] mx-6 flex flex-col items-center justify-center z-51 select-none">
          <motion.img
            key={currentImage.image}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            src={currentImage.image}
            alt={currentImage.title}
            className="max-w-full max-h-[72vh] object-contain shadow-2xl border border-white/5"
          />

          {/* Details Bar */}
          <div className="w-full mt-4 flex justify-between items-start text-white/90">
            <div>
              <span className="text-xs uppercase tracking-widest text-[#c9a35b] font-medium block mb-1">
                {currentImage.category}
              </span>
              <h3 className="font-serif text-lg md:text-xl font-light">{currentImage.title}</h3>
              {currentImage.description && (
                <p className="text-gray-400 text-xs md:text-sm mt-1 font-light max-w-lg leading-relaxed">
                  {currentImage.description}
                </p>
              )}
            </div>
            <div className="text-right text-xs uppercase tracking-[0.2em] font-semibold text-white/40 pt-1">
              {currentIndex + 1} / {images.length}
            </div>
          </div>
        </div>

        {/* Next Arrow */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            onNext();
          }}
          className="absolute right-6 text-white/50 hover:text-white hover:bg-white/10 p-3 rounded-full transition-all duration-300 z-55 focus:outline-none"
          aria-label="Next Image"
        >
          <ChevronRight size={36} />
        </button>
      </div>
    </AnimatePresence>
  );
}
