import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ShieldCheck, HelpCircle, Calendar } from "lucide-react";

import textiles_1 from "../assets/textiles_1.jpg";
import textiles_2 from "../assets/textiles_2.jpg";
import textiles_3 from "../assets/textiles_3.jpg";

const gearCategories = [
  {
    title: "Strobe & Lighting",
    items: [
      "3x Profoto D2 500 AirTTL Monolights",
      "1x Profoto B10 Plus 500W Battery-powered strobe",
      "Profoto Air Remote TTL (Canon, Nikon, Sony, Fujifilm triggers available)"
    ]
  },
  {
    title: "Light Modifiers",
    items: [
      "Profoto OCF Octabox 5' (with grid)",
      "2x Profoto OCF Softbox 1x3' strip box",
      "1x Profoto Softlight Beauty Dish (White, 21-inch)",
      "1x Profoto Umbrella Deep White (Large)",
      "Profoto Zoom Reflectors and grid kit"
    ]
  },
  {
    title: "Grip & Support",
    items: [
      "6x Avenger C-stands with extension arms & grip heads",
      "1x Manfrotto heavy-duty boom stand",
      "8x Professional sandbags (15lbs each)",
      "Various A-clamps and super clamps",
      "2x Matte black/white V-Flats (4x8ft foam cores)"
    ]
  },
  {
    title: "Backdrops & Scenery",
    items: [
      "Seamless paper backdrops (Colors: Super White, Jet Black, Fashion Grey, Desert Sand, Olive Green, Rose Pink)",
      "Custom textured concrete backdrop wall",
      "Exposed brick accent wall with natural distressed design",
      "Minimalist mobile staging cubes (White, concrete textures)"
    ]
  }
];

const faqs = [
  {
    q: "Is lighting equipment included in the base hourly rate?",
    a: "Yes, our base rate of $75/hour includes full usage of all standard Profoto strobes, triggers, modifiers, and stands listed. No hidden gear fees."
  },
  {
    q: "What is the minimum booking duration?",
    a: "We require a minimum booking of 2 hours for standard rentals. This ensures enough setup and pack-up buffer time for your creative crew."
  },
  {
    q: "Is there a dressing room and makeup station available?",
    a: "Absolutely. We have a private climate-controlled makeup and changing suite featuring professional Hollywood LED mirror bulbs, clothes racks, and a steamer."
  },
  {
    q: "Can we shoot with natural daylight?",
    a: "Yes! Our main studio room features massive north-facing industrial steel windows that provide diffused natural daylight throughout the day."
  }
];

export default function RentPage() {
  const navigate = useNavigate();

  const handleBookRent = () => {
    navigate("/", { state: { scrollToBooking: true, selectedPackage: "Studio Rental Space" } });
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
            Production Spaces
          </span>
          <h1 className="text-4xl md:text-6xl font-light font-serif mb-4 tracking-wide">
            Studio Rental
          </h1>
          <div className="w-16 h-[1px] bg-[#c9a35b] mx-auto mb-6"></div>
          <p className="text-gray-400 font-light text-sm md:text-base max-w-xl mx-auto leading-relaxed">
            Rent our fully-equipped visual lab. Designed for commercial photographers, brands, and content creators looking for premium lighting and control.
          </p>
        </div>
      </div>

      {/* Main Details Section */}
      <div className="py-24 px-6 md:px-12 bg-white flex-grow">
        <div className="max-w-7xl mx-auto">
          
          {/* Intro Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center mb-24">
            <div className="lg:col-span-6">
              <span className="text-xs uppercase tracking-[0.25em] text-[#c9a35b] font-semibold block mb-3">
                The Lab Specification
              </span>
              <h2 className="font-serif text-3xl md:text-4xl text-[#111111] mb-6 tracking-wide">
                Daylight Loft & Visual Lab
              </h2>
              <p className="text-gray-500 font-light text-sm md:text-base leading-relaxed mb-6">
                Our 1,200 sq. ft. studio loft offers natural wood floors, high white ceiling structures, and a combination of natural daylight and complete black-out control. Whether you're shooting high-end fashion editorials or minimal product lay-flats, the studio provides the perfect backdrop.
              </p>
              
              <div className="flex items-baseline space-x-2 mb-8 bg-[#f5f5f5] p-6 max-w-sm border border-gray-100">
                <span className="text-5xl font-serif text-[#111111]">$75</span>
                <span className="text-gray-500 uppercase tracking-widest text-xs">/ Hour</span>
                <span className="text-[10px] uppercase bg-white text-[#888] font-bold px-2 py-0.5 ml-3 border border-gray-200">
                  Min 2 Hours
                </span>
              </div>

              <button
                onClick={handleBookRent}
                className="text-xs uppercase tracking-[0.2em] font-semibold bg-[#111111] text-white hover:bg-[#c9a35b] px-8 py-4 transition-all duration-300 flex items-center"
              >
                <Calendar size={14} className="mr-2" />
                Reserve Space
              </button>
            </div>
            
            {/* Visual Loft Preview Grid */}
            <div className="lg:col-span-6 grid grid-cols-2 gap-4">
              <div className="h-[200px] md:h-[280px] overflow-hidden">
                <img
                  src={textiles_1}
                  alt="Daylight Loft"
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
              <div className="h-[200px] md:h-[280px] overflow-hidden">
                <img
                  src={textiles_2}
                  alt="Strobe Gear"
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
              <div className="col-span-2 h-[220px] overflow-hidden">
                <img
                  src={textiles_3}
                  alt="Backdrop Rig"
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
            </div>
          </div>

          {/* Gold Divider */}
          <div className="gold-line opacity-25 mb-24"></div>

          {/* Full Gear Specifications */}
          <div className="mb-24">
            <div className="text-center mb-16">
              <span className="text-xs uppercase tracking-[0.3em] text-[#c9a35b] font-semibold block mb-3">
                Professional Arsenal
              </span>
              <h2 className="text-3xl font-light font-serif tracking-wide text-[#111111] mb-4">
                Equipment Inventory
              </h2>
              <p className="text-gray-500 font-light text-xs max-w-sm mx-auto">
                All of the following professional gears are included with standard studio rent booking.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
              {gearCategories.map((category, idx) => (
                <div key={idx} className="border-b border-gray-100 pb-8">
                  <h3 className="font-serif text-xl font-normal text-[#111111] mb-6 flex items-center">
                    <ShieldCheck size={18} className="text-[#c9a35b] mr-2" />
                    {category.title}
                  </h3>
                  <ul className="space-y-3">
                    {category.items.map((item, keyIdx) => (
                      <li key={keyIdx} className="text-gray-500 text-xs md:text-sm font-light flex items-start">
                        <span className="text-[#c9a35b] mr-3 shrink-0">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* FAQs Section */}
          <div>
            <div className="text-center mb-16">
              <span className="text-xs uppercase tracking-[0.3em] text-[#c9a35b] font-semibold block mb-3">
                Help & Guidelines
              </span>
              <h2 className="text-3xl font-light font-serif tracking-wide text-[#111111] mb-4">
                Rental FAQs
              </h2>
            </div>

            <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
              {faqs.map((faq, idx) => (
                <div key={idx} className="bg-[#f5f5f5] p-8 border border-gray-100 flex flex-col">
                  <h4 className="text-xs uppercase tracking-[0.15em] font-semibold text-[#111111] mb-3 flex items-start">
                    <HelpCircle size={16} className="text-[#c9a35b] mr-2 shrink-0 mt-0.5" />
                    <span>{faq.q}</span>
                  </h4>
                  <p className="text-gray-500 text-xs md:text-sm font-light leading-relaxed flex-grow">
                    {faq.a}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </motion.div>
  );
}
