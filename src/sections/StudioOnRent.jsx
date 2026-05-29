import { Check, ShieldCheck, Cpu } from "lucide-react";
import { motion } from "framer-motion";

// Import extracted PDF assets
import lShapeSetup from "../assets/extracted/gallery10.jpeg";
import lightingGear from "../assets/extracted/heroslider3.jpeg";
import propsSetup from "../assets/extracted/gallery6.jpeg";

const amenities = [
  "Professional Godox & Elinchrom Strobes",
  "Wide Range of Seamless Paper Backdrops",
  "Private Vanity Mirror & Makeup Station",
  "Fully AC Studio Shooting Floor",
  "Dedicated Changing & Styling Area",
  "High-Speed Gigabit WiFi Connection",
  "Premium Bluetooth Sound System",
  "European Style & L-Shape Backdrop Walls"
];

const equipmentHighlights = [
  "Godox DP 600 III V & Elinchrom FRX 400 Strobes",
  "Nanlite FS-300 & DCL 400W Continuous Video Lights",
  "Octaboxes, Stripboxes, Gobos, and Deep Umbrellas",
  "Heavy Duty Stands, Boom Arms, and Grip Cutters",
  "Acrylic sheets for floor sweep paper protection"
];

export default function StudioOnRent() {
  const scrollToBooking = () => {
    const contactSection = document.getElementById("booking");
    if (contactSection) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = contactSection.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="rent" className="py-32 px-6 md:px-12 lg:px-24 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left Column: Visual Staggered Grid using PDF images */}
          <div className="grid grid-cols-12 gap-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="col-span-12 h-[380px] overflow-hidden rounded shadow-sm"
            >
              <img
                src={lShapeSetup}
                alt="L-Shape Backdrop Cyclorama"
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="col-span-6 h-[220px] overflow-hidden rounded shadow-sm"
            >
              <img
                src={lightingGear}
                alt="Professional Studio Lighting setup"
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="col-span-6 h-[220px] overflow-hidden rounded shadow-sm"
            >
              <img
                src={propsSetup}
                alt="Props and catalog corners setup"
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </motion.div>
          </div>

          {/* Right Column: Copywriting & Booking Pitch */}
          <div className="flex flex-col">
            <span className="text-[10px] uppercase tracking-[0.4em] text-[#c9a35b] font-bold mb-3">
              Rental Space Booking
            </span>
            <h2 className="text-4xl md:text-5xl font-serif font-light tracking-wide text-[#111111] mb-6">
              Studio on Rent
            </h2>

            {/* Price badge */}
            <div className="flex items-baseline space-x-2 mb-6">
              <span className="text-4xl font-serif text-[#111111]">₹2,500</span>
              <span className="text-gray-500 uppercase tracking-widest text-xs">/ Hour</span>
              <span className="text-[9px] uppercase bg-[#f4f1ed] text-[#888] font-bold px-2 py-1 ml-4 border border-[#e8e1db] rounded">
                Minimum 2 Hours
              </span>
            </div>

            {/* Perfect For Highlight Copy */}
            <p className="text-[#c9a35b] font-serif text-lg italic mb-6 leading-relaxed">
              “Perfect for Fashion Shoots, Commercial Projects & Content Creation”
            </p>

            <p className="text-gray-500 font-light text-sm leading-relaxed mb-8">
              Book our professional, fully-equipped 1,200 sq. ft. shooting floor. Designed with massive natural daylight windows, absolute blackout capabilities, multiple shooting backdrops (including classic European panel moldings and cycloramas), and premium dressing amenities.
            </p>

            {/* Included Amenities */}
            <div className="mb-8">
              <h3 className="text-[10px] uppercase tracking-[0.2em] font-bold text-[#111111] mb-4 flex items-center">
                <ShieldCheck size={16} className="text-[#c9a35b] mr-2" />
                Included Amenities
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {amenities.map((item, idx) => (
                  <div key={idx} className="flex items-center space-x-2">
                    <Check size={14} className="text-[#c9a35b] shrink-0" />
                    <span className="text-gray-600 text-xs font-light">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Equipment Highlights */}
            <div className="mb-10 border-t border-gray-100 pt-6">
              <h3 className="text-[10px] uppercase tracking-[0.2em] font-bold text-[#111111] mb-4 flex items-center">
                <Cpu size={16} className="text-[#c9a35b] mr-2" />
                Studio Gear Highlights
              </h3>
              <ul className="space-y-2">
                {equipmentHighlights.map((item, idx) => (
                  <li key={idx} className="text-gray-500 text-xs font-light flex items-start">
                    <span className="text-[#c9a35b] mr-2 shrink-0">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Call to Actions */}
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <button
                onClick={scrollToBooking}
                className="text-xs uppercase tracking-[0.2em] font-semibold bg-[#111111] text-white hover:bg-[#c9a35b] px-8 py-4 transition-all duration-300 w-full sm:w-auto text-center cursor-pointer shadow-sm"
              >
                Book Studio Space
              </button>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
