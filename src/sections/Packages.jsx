import { useNavigate } from "react-router-dom";
import { Check, Star } from "lucide-react";
import { motion } from "framer-motion";
import { packagesData } from "../data/packagesData";

export default function Packages() {
  const navigate = useNavigate();

  const handleSelectPackage = (packageName) => {
    // Navigate to contact booking section or set selected package
    const contactSection = document.getElementById("booking");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
      // We can also trigger a custom event or set local state to preselect the package in the booking form
      const selectElement = document.getElementById("service-type");
      if (selectElement) {
        // Find matching option
        const options = Array.from(selectElement.options);
        const match = options.find(opt => opt.value.toLowerCase().includes(packageName.toLowerCase()) || packageName.toLowerCase().includes(opt.value.toLowerCase()));
        if (match) {
          selectElement.value = match.value;
          // Trigger change event to update state
          selectElement.dispatchEvent(new Event('change', { bubbles: true }));
        }
      }
    } else {
      navigate("/", { state: { scrollToBooking: true, selectedPackage: packageName } });
    }
  };

  return (
    <section id="packages" className="py-24 px-6 md:px-12 bg-[#f5f5f5]">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-xs uppercase tracking-[0.3em] text-[#c9a35b] font-semibold block mb-3">
            Investment
          </span>
          <h2 className="text-3xl md:text-5xl font-light tracking-wide text-[#111111] mb-4 font-serif">
            Pricing & Packages
          </h2>
          <div className="w-12 h-[1px] bg-[#c9a35b] mx-auto mb-6"></div>
          <p className="text-gray-500 font-light max-w-xl mx-auto text-sm md:text-base leading-relaxed">
            Transparent pricing designed for editorial standard visual productions. Choose a package tailored to your narrative.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch pt-6">
          {packagesData.map((pkg, index) => (
            <motion.div
              key={pkg.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.15 }}
              className={`relative flex flex-col bg-white p-8 md:p-10 border transition-all duration-500 ${
                pkg.recommended
                  ? "border-[#c9a35b] shadow-xl lg:-translate-y-4 z-10"
                  : "border-gray-200 hover:border-[#111111]"
              }`}
            >
              {/* Highlight Badge */}
              {pkg.recommended && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#c9a35b] text-white text-[9px] uppercase tracking-[0.25em] font-semibold py-1.5 px-4 flex items-center shadow-md">
                  <Star size={10} className="mr-1 fill-current" />
                  Most Popular
                </div>
              )}

              {/* Title & Price */}
              <div className="mb-8">
                <h3 className="font-serif text-2xl font-light text-[#111111] mb-2">{pkg.name}</h3>
                <p className="text-xs text-gray-400 italic mb-6 font-light">{pkg.tagline}</p>
                <div className="flex items-baseline space-x-1">
                  <span className="text-4xl md:text-5xl font-serif text-[#111111]">{pkg.price}</span>
                  <span className="text-xs text-gray-500 uppercase tracking-widest">/ flat</span>
                </div>
              </div>

              {/* Feature Divider */}
              <div className="gold-line opacity-20 mb-8" />

              {/* Features List */}
              <ul className="space-y-4 flex-grow mb-8">
                {pkg.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start text-xs md:text-sm text-gray-600 font-light">
                    <Check size={16} className="text-[#c9a35b] mr-3 shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <button
                onClick={() => handleSelectPackage(pkg.name)}
                className={`text-xs uppercase tracking-[0.2em] font-semibold py-4 w-full transition-all duration-300 ${
                  pkg.recommended
                    ? "bg-[#c9a35b] text-white hover:bg-[#b08c4b]"
                    : "border border-[#111111] text-[#111111] hover:bg-[#111111] hover:text-white"
                }`}
              >
                {pkg.cta}
              </button>
            </motion.div>
          ))}
        </div>

        {/* Note details */}
        <div className="text-center mt-12 text-xs text-gray-400 font-light max-w-md mx-auto">
          * Customized campaigns or corporate project scopes can be set up by choosing standard inquiry forms or talking via WhatsApp Business.
        </div>

      </div>
    </section>
  );
}
