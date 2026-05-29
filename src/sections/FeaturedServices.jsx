import { useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { servicesData } from "../data/servicesData";

export default function FeaturedServices() {
  const navigate = useNavigate();

  return (
    <section id="services" className="py-24 px-6 md:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Title */}
        <div className="text-center mb-16">
          <span className="text-xs uppercase tracking-[0.3em] text-[#c9a35b] font-semibold block mb-3">
            Our Specialties
          </span>
          <h2 className="text-3xl md:text-5xl font-light tracking-wide text-[#111111] mb-4">
            Featured Services
          </h2>
          <div className="w-12 h-[1px] bg-[#c9a35b] mx-auto mb-6"></div>
          <p className="text-gray-500 font-light max-w-xl mx-auto text-sm md:text-base leading-relaxed">
            Tailored visual production solutions designed for modern luxury brands, creatives, and businesses.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {servicesData.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              onClick={() => navigate(`/services#${service.id}`)}
              className="group relative h-[420px] overflow-hidden cursor-pointer bg-black"
            >
              {/* Background Image */}
              <div
                style={{ backgroundImage: `url(${service.image})` }}
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-105"
              />

              {/* Dark Overlays */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-85 transition-opacity duration-300 group-hover:opacity-95" />

              {/* Card Content */}
              <div className="absolute inset-0 p-6 flex flex-col justify-end text-white z-10">
                <span className="text-xs font-semibold tracking-widest text-[#c9a35b] mb-2 uppercase">
                  {service.price}
                </span>
                
                <h3 className="font-serif text-xl mb-3 tracking-wide group-hover:text-[#c9a35b] transition-colors duration-300">
                  {service.title}
                </h3>
                
                <p className="text-gray-300 text-[11px] md:text-xs font-light mb-6 line-clamp-3 leading-relaxed transition-all duration-300">
                  {service.description}
                </p>

                {/* Hover CTA Button */}
                <div className="flex items-center text-[10px] uppercase tracking-widest font-semibold text-white group-hover:text-[#c9a35b] transition-colors duration-300">
                  <span className="mr-2">Explore Details</span>
                  <ArrowRight size={12} className="transform group-hover:translate-x-1.5 transition-transform duration-300" />
                </div>
              </div>

              {/* Top subtle border detail */}
              <div className="absolute top-0 left-0 w-full h-[3px] bg-[#c9a35b] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <button
            onClick={() => navigate("/services")}
            className="text-xs uppercase tracking-[0.2em] font-semibold border border-[#111111] text-[#111111] hover:bg-[#111111] hover:text-white px-8 py-4 transition-all duration-300"
          >
            View All Services
          </button>
        </div>

      </div>
    </section>
  );
}
