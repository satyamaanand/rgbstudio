import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare } from "lucide-react";

// Section imports
import HeroSlider from "../sections/HeroSlider";
import StudioDetails from "../sections/StudioDetails";
import Equipments from "../sections/Equipments";
import StudioGallery from "../sections/StudioGallery";
import Guidelines from "../sections/Guidelines";
import StudioOnRent from "../sections/StudioOnRent";
import BookingForm from "../sections/BookingForm";
import About from "../sections/About";
import Testimonials from "../sections/Testimonials";
import WhyChoose from "../sections/WhyChoose";

export default function Home() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showStickyCTA, setShowStickyCTA] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Calculate scroll progress percentage
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        setScrollProgress((window.scrollY / totalHeight) * 100);
      }

      // Show sticky CTA after scrolling past 80% of hero height
      setShowStickyCTA(window.scrollY > window.innerHeight * 0.8);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToBooking = () => {
    const bookingSection = document.getElementById("booking");
    if (bookingSection) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = bookingSection.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <div className="relative min-h-screen">

      {/* Premium Scroll Progress Bar */}
      <div
        className="fixed top-0 left-0 h-[3px] bg-[#c9a35b] z-55 transition-all duration-100"
        style={{ width: `${scrollProgress}%` }}
      />

      {/* Unified Sections */}
      <HeroSlider />
      <WhyChoose />
      <StudioDetails />
      <Equipments />
      <StudioGallery />
      <Guidelines />
      <About />
      <Testimonials />
      <StudioOnRent />
      <BookingForm />

      {/* Floating Instant Inquiry WhatsApp Button */}
      <a
        href="https://wa.me/919619666066?text=Hi%20RGB%20Studio%2C%20I%20would%20like%20to%20inquire%20about%20a%20studio%20booking."
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-40 bg-[#c9a35b] text-white p-4 rounded-full shadow-2xl hover:bg-[#b08c4b] hover:scale-110 transition-all duration-300 flex items-center justify-center border border-white/20 group cursor-pointer"
        aria-label="Instant WhatsApp Inquiry"
      >
        <MessageSquare size={18} className="group-hover:rotate-12 transition-transform duration-300" />
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs group-hover:ml-2 transition-all duration-500 ease-out whitespace-nowrap text-xs font-semibold uppercase tracking-widest">
          Chat with us
        </span>
      </a>

      {/* Mobile-Only Sticky Booking Action Bar */}
      <AnimatePresence>
        {showStickyCTA && (
          <motion.div
            initial={{ y: 100 }}
            animate={{ y: 0 }}
            exit={{ y: 100 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="fixed bottom-0 left-0 w-full z-30 bg-[#111111]/95 backdrop-blur-md border-t border-[#c9a35b]/20 p-4 flex items-center justify-between lg:hidden shadow-2xl"
          >
            <div>
              <span className="text-[9px] uppercase tracking-widest text-[#c9a35b] font-bold block">RGB Studio</span>
              <span className="text-white text-xs font-serif italic">Shoot Create Repeat</span>
            </div>
            <button
              onClick={scrollToBooking}
              className="bg-[#c9a35b] hover:bg-[#b08c4b] text-white text-[10px] uppercase tracking-widest font-semibold px-5 py-2.5 rounded transition-colors cursor-pointer"
            >
              Book Studio
            </button>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
