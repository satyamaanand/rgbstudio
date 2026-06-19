import { useState } from "react";
import { motion } from "framer-motion";
import LightboxModal from "../components/LightboxModal";

// Import extracted PDF images representing different studio shoots and setups
import img7 from "../assets/images/interior1.jpg";
import img8 from "../assets/images/interior2.jpg";
import img9 from "../assets/images/interior3.jpg";
import img10 from "../assets/images/interior4.jpg";
import img11 from "../assets/images/interior5.jpg";
import img12 from "../assets/images/interior6.jpg";
import img13 from "../assets/images/equipment1.jpg";
import img14 from "../assets/images/equipment2.jpg";
import img15 from "../assets/images/equipment3.jpg";
import img16 from "../assets/images/equipment4.jpg";
import img17 from "../assets/images/equipment5.jpg";
import img18 from "../assets/images/props1.jpg";
import img19 from "../assets/images/props2.jpg";
import img20 from "../assets/images/props3.jpg";
import img21 from "../assets/images/props4.jpg";
import img22 from "../assets/images/props5.jpg";
import img23 from "../assets/images/props6.jpg";
import img24 from "../assets/images/props7.jpg";
import img25 from "../assets/images/bts1.jpg";
import img26 from "../assets/images/bts2.jpg";
import img27 from "../assets/images/bts3.jpg";
import img28 from "../assets/images/bts4.jpg";
import img29 from "../assets/images/bts5.jpg";
import img30 from "../assets/images/bts6.jpg";
import img31 from "../assets/images/bts7.jpg";
import img32 from "../assets/images/bts8.jpg";
import img33 from "../assets/images/bts9.jpg";
import img34 from "../assets/images/bts10.jpg";
import img35 from "../assets/images/bts11.jpg";
import img36 from "../assets/images/bts12.jpg";
import img37 from "../assets/images/bts13.jpg";
import img38 from "../assets/images/bts14.jpg";
import img39 from "../assets/images/bts15.jpg";
import img40 from "../assets/images/bts16.jpg";
import img41 from "../assets/images/bts17.jpg";
import img42 from "../assets/images/bts18.jpg";
import img43 from "../assets/images/bts19.jpg";
import img44 from "../assets/images/bts20.jpg";

const galleryCategories = [
  "All",
  "Studio Spaces",
  "Equipments",
  "Props",
  "BTS"
];

const galleryItems = [
  // ==========================
  // STUDIO SPACES (INTERIOR)
  // ==========================

  {
    image: img7,
    title: "Natural Light Shooting Floor",
    category: "Studio Spaces",
    categories: ["Studio Spaces"],
    description: "Spacious white shooting floor designed for fashion, portrait and commercial productions."
  },

  {
    image: img8,
    title: "Signature Window Set",
    category: "Studio Spaces",
    categories: ["Studio Spaces"],
    description: "Editorial window corner featuring soft natural tones and premium styling elements."
  },

  {
    image: img9,
    title: "Lifestyle Lounge Corner",
    category: "Studio Spaces",
    categories: ["Studio Spaces"],
    description: "Warm minimalist setup ideal for lifestyle shoots and content creation."
  },

  {
    image: img10,
    title: "Architectural Arch Wall",
    category: "Studio Spaces",
    categories: ["Studio Spaces"],
    description: "Custom arch wall backdrop inspired by modern European interiors."
  },

  {
    image: img11,
    title: "Vanity & Makeup Area",
    category: "Studio Spaces",
    categories: ["Studio Spaces"],
    description: "Dedicated preparation zone with professional vanity lighting."
  },

  {
    image: img12,
    title: "Premium Editorial Corner",
    category: "Studio Spaces",
    categories: ["Studio Spaces"],
    description: "Luxury styled corner suitable for fashion editorials and portrait campaigns."
  },

  // ==========================
  // EQUIPMENTS
  // ==========================

  {
    image: img13,
    title: "Professional Strobe Kit",
    category: "Equipments",
    categories: ["Equipments"],
    description: "High-powered strobe setup designed for commercial and fashion productions."
  },

  {
    image: img14,
    title: "Lighting Modifier Setup",
    category: "Equipments",
    categories: ["Equipments"],
    description: "Professional modifiers delivering controlled and flattering light."
  },

  {
    image: img15,
    title: "Arch Wall Lighting Test",
    category: "Equipments",
    categories: ["Equipments", "Studio Spaces"],
    description: "Lighting demonstration showcasing the versatility of the studio architecture."
  },

  {
    image: img16,
    title: "Softbox Arrangement",
    category: "Equipments",
    categories: ["Equipments"],
    description: "Studio softbox configuration optimized for portraits and beauty work."
  },

  {
    image: img17,
    title: "Complete Lighting Inventory",
    category: "Equipments",
    categories: ["Equipments"],
    description: "Professional lighting ecosystem included with studio rental."
  },

  // ==========================
  // PROPS
  // ==========================

  {
    image: img18,
    title: "Bar Stool Collection",
    category: "Props",
    categories: ["Props"],
    description: "Minimalist seating prop suitable for fashion and portrait photography."
  },

  {
    image: img19,
    title: "Pedestal Display Set",
    category: "Props",
    categories: ["Props"],
    description: "Modern display cubes ideal for product and editorial shoots."
  },

  {
    image: img20,
    title: "Decorative Plant Collection",
    category: "Props",
    categories: ["Props"],
    description: "Natural styling elements adding depth and texture to creative sets."
  },

  {
    image: img21,
    title: "Persian Rug Setup",
    category: "Props",
    categories: ["Props"],
    description: "Premium rug prop commonly used in lifestyle and fashion campaigns."
  },

  {
    image: img22,
    title: "Lifestyle Styling Props",
    category: "Props",
    categories: ["Props"],
    description: "Curated decorative elements for premium storytelling visuals."
  },

  {
    image: img23,
    title: "Decor Shelf Collection",
    category: "Props",
    categories: ["Props"],
    description: "Vintage-inspired shelf styling with handcrafted decorative accents."
  },

  {
    image: img24,
    title: "Designer Wooden Chair",
    category: "Props",
    categories: ["Props"],
    description: "Statement furniture piece for editorial and portrait productions."
  },

  // ==========================
  // BTS
  // ==========================

  {
    image: img25,
    title: "Creative Workspace Setup",
    category: "BTS",
    categories: ["BTS"],
    description: "Studio workstation and lighting preparation before production."
  },

  {
    image: img26,
    title: "Product Styling Session",
    category: "BTS",
    categories: ["BTS"],
    description: "Creative styling and lighting arrangement for commercial content."
  },

  {
    image: img27,
    title: "Fashion Lighting Test",
    category: "BTS",
    categories: ["BTS"],
    description: "Lighting calibration and framing before the final campaign shoot."
  },

  {
    image: img28,
    title: "Full Studio Production Floor",
    category: "BTS",
    categories: ["BTS"],
    description: "Wide-angle view of an active production setup inside RGB Studio."
  },

  {
    image: img29,
    title: "Cinematic Portrait Setup",
    category: "BTS",
    categories: ["BTS"],
    description: "Warm-toned lighting arrangement designed for editorial portraiture."
  },

  {
    image: img30,
    title: "Pink Backdrop Campaign",
    category: "BTS",
    categories: ["BTS"],
    description: "Fashion content production using vibrant colored backdrops."
  },

  {
    image: img31,
    title: "Professional Lighting Rig",
    category: "BTS",
    categories: ["BTS"],
    description: "Multiple light sources configured for a commercial photoshoot."
  },

  {
    image: img32,
    title: "Blue Set Production",
    category: "BTS",
    categories: ["BTS"],
    description: "Creative campaign setup featuring colored seamless backdrops."
  },

  {
    image: img33,
    title: "Editorial Studio Session",
    category: "BTS",
    categories: ["BTS"],
    description: "Fashion shoot in progress with professional lighting equipment."
  },

  {
    image: img34,
    title: "Red Seamless Photoshoot",
    category: "BTS",
    categories: ["BTS"],
    description: "High-energy editorial campaign using a red backdrop environment."
  },

  {
    image: img35,
    title: "Warm Ambient Campaign",
    category: "BTS",
    categories: ["BTS"],
    description: "Creative storytelling shoot featuring cinematic warm tones."
  },

  {
    image: img36,
    title: "Orange Backdrop Editorial",
    category: "BTS",
    categories: ["BTS"],
    description: "Studio fashion production utilizing a bold orange set."
  },

  {
    image: img37,
    title: "Team Collaboration Session",
    category: "BTS",
    categories: ["BTS"],
    description: "Photographers and creatives coordinating during production."
  },

  {
    image: img38,
    title: "Large Softbox Setup",
    category: "BTS",
    categories: ["BTS"],
    description: "Soft lighting configuration designed for beauty and portrait work."
  },

  {
    image: img39,
    title: "White Cyclorama Shoot",
    category: "BTS",
    categories: ["BTS"],
    description: "Minimal studio setup ideal for catalog and e-commerce photography."
  },

  {
    image: img40,
    title: "Commercial Brand Campaign",
    category: "BTS",
    categories: ["BTS"],
    description: "Brand-focused content production utilizing colored backdrop sets."
  },

  {
    image: img41,
    title: "Architectural Light Study",
    category: "BTS",
    categories: ["BTS"],
    description: "Creative use of studio architecture and directional lighting."
  },

  {
    image: img42,
    title: "Portrait Production Setup",
    category: "BTS",
    categories: ["BTS"],
    description: "Professional portrait session captured during active production."
  },

  {
    image: img43,
    title: "Lighting Adjustment Session",
    category: "BTS",
    categories: ["BTS"],
    description: "Final lighting refinements before the photography session begins."
  },

  {
    image: img44,
    title: "Fashion Campaign In Progress",
    category: "BTS",
    categories: ["BTS"],
    description: "Editorial fashion shoot demonstrating RGB Studio's production capabilities."
  }
];

export default function StudioGallery() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImgIndex, setCurrentImgIndex] = useState(0);

  const filteredItems = activeCategory === "All"
    ? galleryItems
    : galleryItems.filter(item => item.categories.includes(activeCategory));

  const openLightbox = (idx) => {
    setCurrentImgIndex(idx);
    setLightboxOpen(true);
  };

  const handlePrev = () => {
    setCurrentImgIndex((prev) => (prev === 0 ? filteredItems.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentImgIndex((prev) => (prev === filteredItems.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="gallery" className="py-32 px-6 md:px-12 lg:px-24 bg-white">
      <div className="max-w-7xl mx-auto">

        {/* Section Header */}
        <div className="text-center mb-20">
          <span className="text-[10px] uppercase tracking-[0.4em] text-[#c9a35b] font-bold block mb-4">
            Curated Visuals
          </span>
          <h2 className="text-4xl md:text-5xl font-serif font-light text-[#111111] mb-6 tracking-wide">
            Studio Gallery
          </h2>
          <div className="w-16 h-[1px] bg-[#c9a35b] mx-auto mb-6" />
          <p className="text-gray-500 font-light text-sm max-w-lg mx-auto leading-relaxed">
            Witness the real creative campaigns, setups, and corners shot directly inside the walls of RGB Studio.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {galleryCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`text-[10px] uppercase tracking-widest font-semibold px-6 py-3 border rounded transition-all duration-300 cursor-pointer ${activeCategory === cat
                ? "bg-[#111111] border-[#111111] text-white"
                : "bg-white border-[#e8e1db] text-[#111111]/70 hover:border-[#111111] hover:text-[#111111]"
                }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Masonry Layout */}
        <div className="columns-1 min-[375px]:columns-2 md:columns-3 lg:columns-4 gap-6">
          {filteredItems.map((item, idx) => (
            <motion.div
              key={item.image}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: (idx % 4) * 0.05 }}
              onClick={() => openLightbox(idx)}
              className="break-inside-avoid mb-6 relative overflow-hidden group cursor-zoom-in rounded border border-gray-100 shadow-sm"
            >
              {/* Image */}
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-auto object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                loading="lazy"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6 text-white">
                <span className="text-[9px] uppercase tracking-widest text-[#c9a35b] font-semibold mb-1">
                  {item.category}
                </span>
                <h3 className="font-serif text-sm md:text-base font-light tracking-wide">
                  {item.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Lightbox Modal */}
        <LightboxModal
          isOpen={lightboxOpen}
          images={filteredItems}
          currentIndex={currentImgIndex}
          onClose={() => setLightboxOpen(false)}
          onPrev={handlePrev}
          onNext={handleNext}
        />

      </div>
    </section>
  );
}
