import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logoImg from "../assets/extracted/logo.PNG";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      setIsScrolled(scrollTop > 50);

      // Section highlighters
      const sections = ["hero", "about", "details", "equipments", "gallery", "guidelines", "rent", "booking"];
      const scrollPosition = window.scrollY + 120; // Detection offset

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", target: "hero" },
    { name: "Studio Details", target: "details" },
    { name: "Equipments", target: "equipments" },
    { name: "Studio Gallery", target: "gallery" },
    { name: "Guidelines", target: "guidelines" },
    { name: "Studio on Rent", target: "rent" },
    { name: "About Us", target: "about" },
  ];

  const scrollToSection = (targetId) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(targetId);
    if (element) {
      const offset = 80; // Navbar height
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

  const isTransparent = !isScrolled;

  return (
    <>
      {/* Navbar Container */}
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${isTransparent
          ? "bg-transparent py-6 text-white"
          : "bg-[#f4f1ed]/90 backdrop-blur-md py-4 text-[#111111] shadow-sm border-b border-[#e8e1db]"
          }`}
      >
        <div className="max-w-[1600px] mx-auto px-6 md:px-12 flex lg:grid lg:grid-cols-[auto_1fr_auto] justify-between items-center">
          {/* Logo */}
          <button
            onClick={() => scrollToSection("hero")}
            className="flex items-center cursor-pointer focus:outline-none justify-self-start"
            aria-label="RGB Studio Home"
          >
            <img
              src={logoImg}
              alt="RGB Studio"
              className={`h-16 md:h-22 w-auto object-contain transition-all duration-500 ${isTransparent ? "invert brightness-200 mix-blend-screen" : "mix-blend-multiply"
                }`}
            />
          </button>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center justify-center space-x-8 justify-self-center">
            {navLinks.map((link) => {
              const isActive = activeSection === link.target;
              return (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.target)}
                  className={`text-xs uppercase tracking-[0.25em] font-medium transition-all duration-300 hover:text-[#c9a35b] relative py-1 cursor-pointer focus:outline-none ${isActive
                    ? "text-[#c9a35b]"
                    : isTransparent
                      ? "text-white/80 hover:text-white"
                      : "text-[#111111]/80 hover:text-[#111111]"
                    }`}
                >
                  {link.name}
                  {isActive && (
                    <motion.div
                      layoutId="activeIndicator"
                      className="absolute bottom-0 left-0 w-full h-[1px] bg-[#c9a35b]"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </button>
              );
            })}
          </div>

          {/* Book Now Button (Desktop) */}
          <div className="hidden lg:block justify-self-end">
            <button
              onClick={() => scrollToSection("booking")}
              className={`text-xs uppercase tracking-[0.18em] font-semibold px-6 py-2.5 transition-all duration-300 border cursor-pointer ${isTransparent
                ? "border-white text-white hover:bg-white hover:text-[#111111]"
                : "border-[#111111] text-white bg-[#111111] hover:bg-[#c9a35b] hover:border-[#c9a35b]"
                }`}
            >
              Book Studio
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="block lg:hidden focus:outline-none cursor-pointer z-50 p-2"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? (
              <X size={22} className="text-white" />
            ) : (
              <Menu size={22} className={isTransparent ? "text-white" : "text-[#111111]"} />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 bg-[#111111] z-40 flex flex-col justify-center items-center text-white px-6"
          >
            {/* Logo in mobile overlay */}
            {/* <div className="absolute top-6 left-6">
              <img
                src={logoImg}
                alt="RGB Studio"
                className="h-8 w-auto object-contain invert brightness-200 mix-blend-screen"
              />
            </div> */}

            {/* Menu Links */}
            <div className="flex flex-col items-center space-y-8 text-center">
              {navLinks.map((link, idx) => {
                const isActive = activeSection === link.target;
                return (
                  <motion.button
                    key={link.name}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.05 + 0.1 }}
                    onClick={() => scrollToSection(link.target)}
                    className={`font-serif text-2xl tracking-widest hover:text-[#c9a35b] transition-colors cursor-pointer focus:outline-none ${isActive ? "text-[#c9a35b]" : "text-white/80"
                      }`}
                  >
                    {link.name}
                  </motion.button>
                );
              })}

              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navLinks.length * 0.05 + 0.1 }}
                className="pt-8"
              >
                <button
                  onClick={() => scrollToSection("booking")}
                  className="bg-[#c9a35b] text-white text-xs uppercase tracking-widest font-semibold px-8 py-3.5 hover:bg-[#b08c4b] transition-colors cursor-pointer"
                >
                  Book Studio
                </button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
