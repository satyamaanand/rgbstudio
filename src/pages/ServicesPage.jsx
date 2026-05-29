import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Check, Calendar } from "lucide-react";
import { servicesData } from "../data/servicesData";

export default function ServicesPage() {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // Handle hash scroll (e.g. /services#product-photography)
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth", block: "center" });
        }, 300);
      }
    }
  }, [location]);

  const handleInquire = (serviceName) => {
    navigate("/", { state: { scrollToBooking: true, selectedPackage: serviceName } });
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
            Our Offerings
          </span>
          <h1 className="text-4xl md:text-6xl font-light font-serif mb-4 tracking-wide">
            Creative Services
          </h1>
          <div className="w-16 h-[1px] bg-[#c9a35b] mx-auto mb-6"></div>
          <p className="text-gray-400 font-light text-sm md:text-base max-w-xl mx-auto leading-relaxed">
            Professional editorial photographic production tailored to build strong visual narratives for individuals, portfolios, and brands.
          </p>
        </div>
      </div>

      {/* Services List Section */}
      <div className="py-24 px-6 md:px-12 bg-white flex-grow">
        <div className="max-w-7xl mx-auto space-y-32">
          
          {servicesData.map((service, index) => {
            const isEven = index % 2 === 0;

            return (
              <div
                key={service.id}
                id={service.id}
                className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center scroll-mt-24"
              >
                {/* Image Box */}
                <div
                  className={`lg:col-span-6 h-[350px] md:h-[450px] overflow-hidden ${
                    isEven ? "lg:order-1" : "lg:order-2"
                  }`}
                >
                  <motion.img
                    initial={{ opacity: 0, scale: 1.05 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.8 }}
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 hover:scale-102"
                  />
                </div>

                {/* Text Content Box */}
                <div
                  className={`lg:col-span-6 flex flex-col justify-center ${
                    isEven ? "lg:order-2" : "lg:order-1"
                  }`}
                >
                  <span className="text-xs font-semibold tracking-widest text-[#c9a35b] mb-2 uppercase">
                    {service.price}
                  </span>
                  
                  <h2 className="font-serif text-3xl md:text-4xl text-[#111111] mb-6 tracking-wide">
                    {service.title}
                  </h2>
                  
                  <div className="w-12 h-[1px] bg-[#c9a35b] mb-6"></div>
                  
                  <p className="text-gray-500 font-light text-sm md:text-base leading-relaxed mb-8">
                    {service.description}
                  </p>

                  {/* Features Checklist */}
                  <div className="mb-8">
                    <h4 className="text-xs uppercase tracking-widest font-semibold text-[#111111] mb-4">
                      Service Highlights
                    </h4>
                    <ul className="space-y-3">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-xs md:text-sm text-gray-600 font-light">
                          <Check size={14} className="text-[#c9a35b] mr-3 shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA button */}
                  <div>
                    <button
                      onClick={() => handleInquire(service.title)}
                      className="text-xs uppercase tracking-[0.2em] font-semibold border border-[#111111] bg-[#111111] text-white hover:bg-[#c9a35b] hover:border-[#c9a35b] px-8 py-4 transition-all duration-300 flex items-center"
                    >
                      <Calendar size={14} className="mr-2" />
                      Inquire About This Service
                    </button>
                  </div>
                </div>
              </div>
            );
          })}

        </div>
      </div>
    </motion.div>
  );
}
