import { useState, useEffect, useRef } from "react";
import { Quote, ChevronLeft, ChevronRight, Star } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { testimonialsData } from "../data/testimonialsData";

export default function Testimonials() {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [direction, setDirection] = useState(0); // -1 for left, 1 for right
  const [isPaused, setIsPaused] = useState(false);

  // Swipe support state
  const touchStart = useRef(null);
  const touchEnd = useRef(null);
  const minSwipeDistance = 50;

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIdx((prev) => (prev - 1 + testimonialsData.length) % testimonialsData.length);
  };

  const handleNext = () => {
    setDirection(1);
    setCurrentIdx((prev) => (prev + 1) % testimonialsData.length);
  };

  // Autoplay
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      handleNext();
    }, 5000);
    return () => clearInterval(timer);
  }, [isPaused, currentIdx]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      // Don't intercept if user is typing in forms
      const activeEl = document.activeElement?.tagName;
      if (activeEl === "INPUT" || activeEl === "TEXTAREA" || activeEl === "SELECT") {
        return;
      }
      if (e.key === "ArrowLeft") {
        handlePrev();
      } else if (e.key === "ArrowRight") {
        handleNext();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Touch Swipe handlers
  const handleTouchStart = (e) => {
    touchEnd.current = null;
    touchStart.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEnd.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStart.current || !touchEnd.current) return;
    const distance = touchStart.current - touchEnd.current;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    if (isLeftSwipe) {
      handleNext();
    } else if (isRightSwipe) {
      handlePrev();
    }
  };

  const slideVariants = {
    enter: (dir) => ({
      x: dir > 0 ? 150 : -150,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (dir) => ({
      x: dir < 0 ? 150 : -150,
      opacity: 0,
    }),
  };

  return (
    <section 
      id="testimonials" 
      className="py-32 px-6 md:px-12 lg:px-24 bg-white relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-[10px] uppercase tracking-[0.4em] text-[#c9a35b] font-bold block mb-4">
            CLIENT EXPERIENCES
          </span>
          <h2 className="text-4xl md:text-5xl font-serif font-light text-[#111111] mb-6 tracking-wide">
            What Our Clients Say
          </h2>
          <div className="w-16 h-[1px] bg-[#c9a35b] mx-auto mb-6" />
          <p className="text-gray-500 font-light text-xs md:text-sm max-w-2xl mx-auto leading-relaxed">
            Hear directly from photographers, creators, brands, and artists who have experienced RGB Studio.
          </p>
        </div>

        {/* Testimonial Carousel Area */}
        <div className="max-w-4xl mx-auto text-center relative z-10">
          
          {/* Quote Icon */}
          <div className="flex justify-center mb-6">
            <Quote size={36} className="text-[#c9a35b] opacity-40 rotate-180" />
          </div>

          {/* Slide Text Box */}
          <div 
            className="min-h-[300px] md:min-h-[220px] flex items-center justify-center relative px-4 cursor-grab active:cursor-grabbing"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
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
                {/* Five Gold Stars */}
                <div className="flex justify-center space-x-1 mb-6">
                  {[...Array(testimonialsData[currentIdx].rating)].map((_, i) => (
                    <Star key={i} size={15} className="fill-[#c9a35b] text-[#c9a35b]" />
                  ))}
                </div>

                {/* Review Text */}
                <p className="font-serif text-lg md:text-xl lg:text-2xl font-light italic leading-relaxed text-[#111111] mb-6">
                  "{testimonialsData[currentIdx].review}"
                </p>
                
                {/* Author Info & Google Icon */}
                <div className="flex flex-wrap items-center justify-center space-x-3 text-xs">
                  <h4 className="uppercase tracking-[0.2em] font-semibold text-[#111111]">
                    {testimonialsData[currentIdx].name}
                  </h4>
                  <span className="text-gray-300">|</span>
                  <span className="text-gray-400 font-light tracking-wide uppercase text-[10px]">
                    {testimonialsData[currentIdx].date}
                  </span>
                  <span className="text-gray-300">|</span>
                  
                  {/* Google Authenticity Icon */}
                  <span className="inline-flex items-center space-x-1 bg-[#f4f1ed] px-2 py-1 rounded text-[9px] tracking-wide text-gray-500 font-medium">
                    <svg className="w-3 h-3 fill-current shrink-0" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12.24 10.285V14.4h6.887c-.648 2.41-2.519 4.114-5.136 4.114-3.51 0-6.363-2.853-6.363-6.363s2.853-6.363 6.363-6.363c1.61 0 3.09.61 4.22 1.706l3.05-3.05a10.963 10.963 0 00-7.27-2.656c-6.075 0-11 4.925-11 11s4.925 11 11 11c5.96 0 10.74-4.22 10.74-10.74 0-.61-.06-1.22-.17-1.82H12.24z" />
                    </svg>
                    <span>Google Review</span>
                  </span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Arrows & Pagination Dots */}
          <div className="flex justify-center items-center space-x-6 mt-10">
            <button
              onClick={handlePrev}
              className="text-gray-400 hover:text-[#c9a35b] transition-colors focus:outline-none p-2 cursor-pointer"
              aria-label="Previous Testimonial"
            >
              <ChevronLeft size={24} />
            </button>
            
            {/* Pagination Dots */}
            <div className="flex space-x-2">
              {testimonialsData.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    setDirection(idx > currentIdx ? 1 : -1);
                    setCurrentIdx(idx);
                  }}
                  className={`w-1.5 h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                    idx === currentIdx ? "bg-[#c9a35b] w-4" : "bg-gray-300 hover:bg-gray-400"
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>

            <button
              onClick={handleNext}
              className="text-gray-400 hover:text-[#c9a35b] transition-colors focus:outline-none p-2 cursor-pointer"
              aria-label="Next Testimonial"
            >
              <ChevronRight size={24} />
            </button>
          </div>

        </div>

        {/* View More Reviews CTA Button */}
        <div className="text-center mt-16">
          <a
            href="https://www.google.com/maps/place/RGB+STUDIO+%7C+Photography+studio+on+rent+%7C+Photoshoot+space+for+rent+%7C+Photography+%26+Videography+rental+studio+in+Mumbai/@19.1588404,72.8335908,17z/data=!3m1!5s0x3be7b644514ff705:0x43fe8e46c22a4e2f!4m8!3m7!1s0x3be7b7553aaf4fc3%3A0x615b427a482d42ea!8m2!3d19.1588404!4d72.8361657!9m1!1b1!16s%2Fg%2F11stvfwv_x?entry=ttu&g_ep=EgoyMDI2MDYyNC4wIKXMDSoASAFQAw%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[10px] tracking-[0.2em] font-semibold bg-[#111111] hover:bg-[#c9a35b] text-white px-8 py-4 transition-all duration-300 inline-block uppercase border border-[#111111] hover:border-[#c9a35b] rounded shadow-sm"
          >
            View More Reviews on Google
          </a>
        </div>

      </div>
    </section>
  );
}
