import { useState } from "react";
import { motion } from "framer-motion";
import LightboxModal from "../components/LightboxModal";

// Import extracted PDF images representing different studio shoots and setups
import img7 from "../assets/extracted/gallery1.jpeg";
import img8 from "../assets/extracted/heroslider2.jpeg";
import img9 from "../assets/extracted/gallery2.jpeg";
import img10 from "../assets/extracted/gallery3.jpeg";
import img11 from "../assets/extracted/gallery4.jpeg";
import img12 from "../assets/extracted/gallery5.jpeg";
import img14 from "../assets/extracted/heroslider3.jpeg";
import img15 from "../assets/extracted/gallery6.jpeg";
import img16 from "../assets/extracted/gallery7.jpeg";
import img18 from "../assets/extracted/gallery8.jpeg";
import img22 from "../assets/extracted/heroslider4.jpeg";
import img26 from "../assets/extracted/heroslider5.jpeg";
import img31 from "../assets/extracted/gallery9.jpeg";
import img33 from "../assets/extracted/gallery10.jpeg";
import img34 from "../assets/extracted/gallery11.jpeg";

const galleryItems = [
  { image: img7, title: "Editorial Portrait Campaign", category: "Fashion & Editorial", description: "Minimal high-contrast fashion portrait capturing dramatic shadows and elegant styling." },
  { image: img8, title: "Minimal Portrait Setup", category: "Fashion & Editorial", description: "Studio lighting setup for clean face and portrait campaigns." },
  { image: img9, title: "Studio Light Settings", category: "Equipment Setup", description: "Godox strobes and modifiers arranged for high-key fashion shoots." },
  { image: img10, title: "Classic European Molding Wall", category: "Studio Corners", description: "Custom European molding panels providing a timeless architectural backdrop." },
  { image: img11, title: "Cinematic Warm Editorial", category: "Fashion & Editorial", description: "Warm tonal campaign focused on textures, jewelry, and drapery." },
  { image: img12, title: "High-Contrast Fine Art Portrait", category: "Fashion & Editorial", description: "Expressive studio portrait highlighting fine-art contrast and shadows." },
  { image: img14, title: "Strobe Lighting Arrangement", category: "Equipment Setup", description: "Professional boom stands and reflector setups in the shooting floor." },
  { image: img15, title: "Minimalist Studio Prop Setup", category: "Studio Corners & Props", description: "Sutlej and custom textiles staged with minimalist modern props." },
  { image: img16, title: "Vanity Station Details", category: "Vanity & Changing Area", description: "Hollywood LED-lit mirror and makeup table for talent preparation." },
  { image: img18, title: "Textured Drapery Campaign", category: "Fashion & Editorial", description: "High-fashion campaing styling set against flowing silk textures." },
  { image: img22, title: "Fashion Lookbook Campaign", category: "Fashion & Editorial", description: "Catalogue shoot showcasing clean neutral backdrops and modern apparel." },
  { image: img26, title: "Abstract Light & Shadow", category: "Fashion & Editorial", description: "Creative lighting study casting sharp geometric silhouettes." },
  { image: img31, title: "Chiffon Flow Campaign", category: "Backdrops & Scenery", description: "Motion-oriented campaign with sheer textile backdrop flow." },
  { image: img33, title: "L-Shape Corner Setup", category: "Studio Corners", description: "Edge-free background shadows provided by our L-shape wall construction." },
  { image: img34, title: "Professional Grip Gear", category: "Equipment Setup", description: "Heavy-duty c-stands, sandbags, and studio triggers on standby." }
];

export default function StudioGallery() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImgIndex, setCurrentImgIndex] = useState(0);

  const openLightbox = (idx) => {
    setCurrentImgIndex(idx);
    setLightboxOpen(true);
  };

  const handlePrev = () => {
    setCurrentImgIndex((prev) => (prev === 0 ? galleryItems.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentImgIndex((prev) => (prev === galleryItems.length - 1 ? 0 : prev + 1));
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

        {/* Masonry Layout */}
        <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-6 space-y-6">
          {galleryItems.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: (idx % 4) * 0.05 }}
              onClick={() => openLightbox(idx)}
              className="break-inside-avoid relative overflow-hidden group cursor-zoom-in rounded border border-gray-100 shadow-sm"
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
          images={galleryItems}
          currentIndex={currentImgIndex}
          onClose={() => setLightboxOpen(false)}
          onPrev={handlePrev}
          onNext={handleNext}
        />

      </div>
    </section>
  );
}
