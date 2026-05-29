import { useState, useEffect } from "react";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { testimonialsData } from "../data/testimonialsData";

export default function Testimonials() {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [direction, setDirection] = useState(0); // -1 for left, 1 for right

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIdx((prev) => (prev - 1 + testimonialsData.length) % testimonialsData.length);
  };

  const handleNext = () => {
    setDirection(1);
    setCurrentIdx((prev) => (prev + 1) % testimonialsData.length);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const slideVariants = {
    enter: (dir) => ({
      x: dir > 0 ? 100 : -100,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (dir) => ({
      x: dir < 0 ? 100 : -100,
      opacity: 0,
    }),
  };

  return (
    <section className="py-24 px-6 md:px-12 bg-white relative overflow-hidden">
      <div className="max-w-4xl mx-auto text-center">
        
        {/* Quote Icon */}
        <div className="flex justify-center mb-8">
          <Quote size={40} className="text-[#c9a35b] opacity-40 rotate-180" />
        </div>

        {/* Quotes Carousel Container */}
        <div className="min-h-[220px] md:min-h-[180px] flex items-center justify-center relative">
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={currentIdx}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="w-full"
            >
              <p className="font-serif text-lg md:text-2xl lg:text-3xl font-light italic leading-relaxed text-[#111111] mb-8">
                "{testimonialsData[currentIdx].quote}"
              </p>
              
              <h4 className="text-xs uppercase tracking-[0.25em] font-semibold text-[#111111] mb-1">
                {testimonialsData[currentIdx].author}
              </h4>
              <p className="text-gray-400 text-[10px] md:text-xs tracking-wider uppercase font-light">
                {testimonialsData[currentIdx].role}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Carousel Navigation */}
        <div className="flex justify-center items-center space-x-6 mt-12">
          <button
            onClick={handlePrev}
            className="text-gray-400 hover:text-[#c9a35b] transition-colors focus:outline-none"
            aria-label="Previous Testimonial"
          >
            <ChevronLeft size={24} />
          </button>
          
          <div className="flex space-x-2">
            {testimonialsData.map((_, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setDirection(idx > currentIdx ? 1 : -1);
                  setCurrentIdx(idx);
                }}
                className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                  idx === currentIdx ? "bg-[#c9a35b] w-4" : "bg-gray-300 hover:bg-gray-400"
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>

          <button
            onClick={handleNext}
            className="text-gray-400 hover:text-[#c9a35b] transition-colors focus:outline-none"
            aria-label="Next Testimonial"
          >
            <ChevronRight size={24} />
          </button>
        </div>

      </div>
    </section>
  );
}
