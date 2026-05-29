import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Palette } from "lucide-react";

const categories = ["all", "photography", "videography", "light modifiers", "backdrops"];

const equipmentItems = [
  { name: "Godox DP 600 III V", category: "photography", units: "3 Units", tags: ["Strobe", "Studio flash", "600W"], desc: "High-speed studio flash monolight with built-in Godox 2.4G wireless system." },
  { name: "Elinchrom FRX 400", category: "photography", units: "2 Units", tags: ["Strobe", "Studio flash", "400W"], desc: "Compact Swiss-engineered monolight with consistent power and fast recycling." },
  
  { name: "Nanlite FS-300 Bi-Colour", category: "videography", units: "2 Units", tags: ["Continuous", "COB Light", "Bi-Colour"], desc: "High-power continuous LED fixture with custom effects and modifiers support." },
  { name: "DCL 400W Bi-Colour", category: "videography", units: "1 Unit", tags: ["Continuous", "Soft Panel", "Bi-Colour"], desc: "Broad-spectrum soft fill LED panel for television broadcasts and videography." },

  { name: "Godox 95cm & 120cm Octaboxes", category: "light modifiers", units: "2 Units", tags: ["Softbox", "Octabox"], desc: "Circular diffusers for soft, wrapping portrait lighting and catchlights." },
  { name: "Godox Projection Attachment with Gobos", category: "light modifiers", units: "1 Set", tags: ["Projection", "Spotlight", "Gobo"], desc: "Optical projection attachment for crisp patterns and spotlight shapes." },
  { name: "Elinchrom Rotalux Octa 100cm", category: "light modifiers", units: "1 Unit", tags: ["Softbox", "Luxury Diffuser"], desc: "Premium quick-setup octagonal softbox with double diffusion panels." },
  { name: "Strip Boxes (with Grids)", category: "light modifiers", units: "2 Units", tags: ["Softbox", "Rim Light"], desc: "Tall, narrow modifiers for controlled rim lighting and vertical hair lights." },
  { name: "Godox Deep Umbrella 130cm", category: "light modifiers", units: "1 Unit", tags: ["Umbrella", "Deep Soft"], desc: "Parabolic reflective deep umbrella for high contrast, soft-edge lighting." },
  { name: "Beauty Dish (with Grid)", category: "light modifiers", units: "1 Unit", tags: ["Portrait Modifier"], desc: "Classic portrait reflector providing high-contrast punchy facial highlights." },
  { name: "Mini Softboxes (60cm)", category: "light modifiers", units: "2 Units", tags: ["Compact Diffuser"], desc: "Small portable softboxes for product tables and hair light control." },
  { name: "Reflectors & Diffuser Cutters", category: "light modifiers", units: "1 Set", tags: ["Bounce", "Grip"], desc: "Various 5-in-1 reflectors, black flags, and cutters to shape ambient rays." },
  { name: "Heavy Duty Boom Stands", category: "light modifiers", units: "2 Units", tags: ["Grip", "Avenger Stand"], desc: "Sturdy overhead rigging stands to hold heavy modifiers safely." }
];

const backdrops = [
  { name: "Super White", hex: "#ffffff", border: "border-gray-300" },
  { name: "Fashion Grey", hex: "#8c8d8f", border: "border-transparent" },
  { name: "Desert Beige", hex: "#d9cdb0", border: "border-transparent" },
  { name: "Crimson Red", hex: "#8f1b20", border: "border-transparent" },
  { name: "Jet Black", hex: "#111111", border: "border-transparent" },
  { name: "Sage Green", hex: "#8fa391", border: "border-transparent" },
  { name: "Deep Green", hex: "#1c3224", border: "border-transparent" }
];

export default function Equipments() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedBackdrop, setSelectedBackdrop] = useState(backdrops[0].name);

  const filteredItems = activeCategory === "all"
    ? equipmentItems
    : equipmentItems.filter(item => item.category === activeCategory);

  return (
    <section id="equipments" className="py-32 px-6 md:px-12 lg:px-24 bg-[#f4f1ed]">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-[10px] uppercase tracking-[0.4em] text-[#c9a35b] font-bold block mb-4">
            Professional Tools
          </span>
          <h2 className="text-4xl md:text-5xl font-serif font-light text-[#111111] mb-6 tracking-wide">
            Studio Equipment
          </h2>
          <div className="w-16 h-[1px] bg-[#c9a35b] mx-auto mb-6" />
          <p className="text-gray-500 font-light text-sm max-w-lg mx-auto leading-relaxed">
            A meticulous inventory of industry-standard photography and videography gear, completely included in the rental price.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`text-[10px] uppercase tracking-widest font-semibold px-6 py-3 border rounded transition-all duration-300 cursor-pointer ${
                activeCategory === cat
                  ? "bg-[#111111] border-[#111111] text-white"
                  : "bg-white border-[#e8e1db] text-[#111111]/70 hover:border-[#111111] hover:text-[#111111]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Equipment Grid */}
        <div className="relative min-h-[400px]">
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            <AnimatePresence mode="popLayout">
              {/* If "backdrops" is selected or we are in "all", render backdrops card */}
              {(activeCategory === "all" || activeCategory === "backdrops") && (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  className="p-8 bg-white border border-[#e8e1db] rounded flex flex-col justify-between shadow-sm md:col-span-2 lg:col-span-3 lg:flex-row items-center gap-8"
                >
                  <div className="max-w-md">
                    <div className="w-10 h-10 bg-[#c9a35b]/10 rounded-full flex items-center justify-center text-[#c9a35b] mb-6">
                      <Palette size={18} />
                    </div>
                    <h3 className="font-serif text-2xl font-normal text-[#111111] mb-3">
                      Seamless Paper Roll Backgrounds
                    </h3>
                    <p className="text-gray-500 font-light text-xs leading-relaxed mb-6">
                      We offer full-width seamless backdrop rolls. To protect the paper floor sweeps, an acrylic sheet is placed under the feet. Selected roll: <strong className="text-[#c9a35b]">{selectedBackdrop}</strong>.
                    </p>
                  </div>
                  
                  {/* Backdrop Color Swatch Grid */}
                  <div className="flex flex-col items-center lg:items-end w-full lg:w-auto">
                    <span className="text-[9px] uppercase tracking-widest font-bold text-gray-400 mb-4">Select Roll Color</span>
                    <div className="flex flex-wrap justify-center lg:justify-end gap-4 mb-6">
                      {backdrops.map((bd) => (
                        <button
                          key={bd.name}
                          onClick={() => setSelectedBackdrop(bd.name)}
                          className={`w-10 h-10 rounded-full cursor-pointer transition-all duration-300 relative ${bd.border} ${
                            selectedBackdrop === bd.name
                              ? "scale-115 ring-2 ring-[#c9a35b] ring-offset-2"
                              : "hover:scale-105"
                          }`}
                          style={{ backgroundColor: bd.hex }}
                          title={bd.name}
                          aria-label={`Select ${bd.name} backdrop`}
                        >
                          {selectedBackdrop === bd.name && (
                            <span className="absolute inset-0 flex items-center justify-center text-xs font-bold text-white mix-blend-difference">
                              ✓
                            </span>
                          )}
                        </button>
                      ))}
                    </div>
                    <div className="text-center lg:text-right">
                      <span className="text-[10px] uppercase bg-[#f4f1ed] text-gray-600 font-semibold px-3 py-1 rounded">
                        {selectedBackdrop} Backdrop Roll
                      </span>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Render Standard Equipment Items */}
              {activeCategory !== "backdrops" &&
                filteredItems.map((item) => (
                  <motion.div
                    layout
                    key={item.name}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 15 }}
                    transition={{ duration: 0.4 }}
                    className="p-8 bg-white border border-[#e8e1db] hover:border-[#c9a35b]/30 rounded transition-all duration-300 flex flex-col justify-between shadow-sm hover:shadow-md"
                  >
                    <div>
                      <div className="flex justify-between items-start mb-6">
                        <span className="text-[9px] uppercase tracking-wider bg-[#f4f1ed] text-gray-500 font-bold px-2 py-0.5 rounded">
                          {item.category === "photography" ? "Photo Strobe" : "Video Continuous"}
                        </span>
                        <span className="text-xs font-semibold text-[#c9a35b]">{item.units}</span>
                      </div>
                      <h3 className="font-serif text-lg font-medium text-[#111111] mb-2">
                        {item.name}
                      </h3>
                      <p className="text-gray-500 font-light text-xs leading-relaxed mb-6">
                        {item.desc}
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-1.5 pt-2 border-t border-gray-100">
                      {item.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-[9px] uppercase tracking-wider font-semibold text-gray-400"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                ))}
            </AnimatePresence>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
