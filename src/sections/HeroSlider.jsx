import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

import img1 from "../assets/images/heroslider1.jpg";
import img2 from "../assets/images/heroslider2.jpg";
import img3 from "../assets/images/heroslider3.jpg";
import img4 from "../assets/images/heroslider4.jpg";
import img5 from "../assets/images/heroslider5.jpg";
import img6 from "../assets/images/heroslider6.jpg";

const heroImages = [img1, img2, img3, img4, img5, img6];

export default function HeroSlider() {
  const [currentIdx, setCurrentIdx] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIdx((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const scrollToSection = (targetId) => {
    const element = document.getElementById(targetId);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="hero" className="relative w-full h-screen overflow-hidden bg-black flex items-center justify-center">
      {/* Preload slider images for smooth performance */}
      <div className="hidden">
        {heroImages.map((src, index) => (
          <img key={index} src={src} alt="preload" />
        ))}
      </div>

      {/* Cross-fading background images */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIdx}
          initial={{ opacity: 0, scale: 1.08 }}
          animate={{ opacity: 1, scale: 1.02 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.8, ease: "easeInOut" }}
          style={{ backgroundImage: `url(${heroImages[currentIdx]})` }}
          className="absolute inset-0 bg-cover bg-center select-none"
        />
      </AnimatePresence>

      {/* Luxury overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#111111]/90 via-[#111111]/40 to-[#111111]/60 z-10" />

      {/* Elegant Editorial Content */}
      <div className="relative z-20 text-center text-white px-6 max-w-5xl mx-auto flex flex-col items-center select-none">

        {/* Animated Subtitle */}
        <motion.span
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-xs md:text-sm uppercase tracking-[0.4em] text-[#c9a35b] font-semibold mb-4"
        >
          Premium Rental Photography Space
        </motion.span>

        {/* Animated Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-4xl md:text-6xl lg:text-7xl font-serif leading-[1.2] mb-6 max-w-4xl font-light tracking-wide"
        >
          Create Without Limits
        </motion.h1>

        {/* Elegant Accent Line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="w-20 h-[1px] bg-[#c9a35b] mb-10 origin-center"
        />

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 w-full sm:w-auto"
        >
          <button
            onClick={() => scrollToSection("about")}
            className="text-xs uppercase tracking-[0.2em] font-semibold bg-transparent text-white border border-white px-8 py-4 hover:bg-white hover:text-[#111111] transition-all duration-300 w-full sm:w-auto cursor-pointer"
          >
            Explore Studio
          </button>

          <button
            onClick={() => scrollToSection("booking")}
            className="text-xs uppercase tracking-[0.2em] font-semibold bg-[#c9a35b] border border-[#c9a35b] text-white px-8 py-4 hover:bg-[#b08c4b] hover:border-[#b08c4b] transition-all duration-300 w-full sm:w-auto cursor-pointer"
          >
            Book Now
          </button>
        </motion.div>
      </div>

      {/* Slide Navigation Dots */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex space-x-3 items-center">
        {heroImages.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIdx(idx)}
            className={`h-1.5 transition-all duration-500 rounded-full cursor-pointer ${idx === currentIdx ? "w-8 bg-[#c9a35b]" : "w-2 bg-white/40 hover:bg-white/70"
              }`}
            aria-label={`Slide ${idx + 1}`}
          />
        ))}
      </div>

      {/* Scroll Down Chevron */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 hidden md:block">
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="cursor-pointer"
          onClick={() => scrollToSection("about")}
        >
          <ChevronDown size={24} className="text-white/50 hover:text-[#c9a35b] transition-colors" />
        </motion.div>
      </div>
    </section>
  );
}
