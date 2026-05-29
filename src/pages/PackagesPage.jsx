import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Check, Star, Info, MessageSquare } from "lucide-react";
import { packagesData } from "../data/packagesData";

const packageFAQs = [
  {
    q: "How are the final edited photos selected?",
    a: "After your session, we upload all unedited proofs to a private online gallery within 24 hours. You can review and select your favorites for final high-end editing."
  },
  {
    q: "Can I purchase additional edited images?",
    a: "Yes. Additional retouched images can be ordered for $25 per photograph."
  },
  {
    q: "What is the delivery timeline for final photos?",
    a: "Standard delivery ranges from 3 to 7 working days depending on the selected package. Express 24-hour rush editing is available for an extra charge of $150."
  },
  {
    q: "What is your booking cancellation/rescheduling policy?",
    a: "We require a 50% advance booking deposit. Bookings can be rescheduled for free up to 48 hours before the shoot session. Cancellations within 48 hours forfeit the deposit."
  }
];

export default function PackagesPage() {
  const navigate = useNavigate();

  const handleSelectPackage = (packageName) => {
    navigate("/", { state: { scrollToBooking: true, selectedPackage: packageName } });
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
            Pricing Plans
          </span>
          <h1 className="text-4xl md:text-6xl font-light font-serif mb-4 tracking-wide">
            Our Packages
          </h1>
          <div className="w-16 h-[1px] bg-[#c9a35b] mx-auto mb-6"></div>
          <p className="text-gray-400 font-light text-sm md:text-base max-w-xl mx-auto leading-relaxed">
            Choose from our pre-configured visual packages designed to deliver maximum value, styling, and editorial-standard results.
          </p>
        </div>
      </div>

      {/* Main Pricing Section */}
      <div className="py-24 px-6 md:px-12 bg-white flex-grow">
        <div className="max-w-7xl mx-auto">
          
          {/* Packages Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch pt-6 mb-24">
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

          {/* Gold Divider */}
          <div className="gold-line opacity-25 mb-24"></div>

          {/* Custom Quote Box */}
          <div className="bg-[#111111] text-white p-8 md:p-12 mb-24 border border-gray-800 flex flex-col md:flex-row md:items-center justify-between">
            <div className="mb-6 md:mb-0 max-w-xl">
              <span className="text-[10px] uppercase tracking-widest text-[#c9a35b] font-bold block mb-2">Custom Shoots</span>
              <h3 className="font-serif text-2xl font-light mb-4">Looking for a custom project scope?</h3>
              <p className="text-gray-400 text-xs md:text-sm font-light leading-relaxed">
                If you are a designer, fashion house, or corporate marketing department requiring custom setups, styling teams, multi-day shoots, or licensing terms, contact us for a personalized estimate.
              </p>
            </div>
            <button
              onClick={() => handleSelectPackage("Custom Inquiry")}
              className="text-xs uppercase tracking-[0.2em] font-semibold bg-[#c9a35b] text-white hover:bg-white hover:text-black py-4 px-8 transition-all duration-300 flex items-center shrink-0 self-start md:self-center"
            >
              <MessageSquare size={14} className="mr-2" />
              Request Custom Quote
            </button>
          </div>

          {/* FAQs Section */}
          <div>
            <div className="text-center mb-16">
              <span className="text-xs uppercase tracking-[0.3em] text-[#c9a35b] font-semibold block mb-3">
                Terms & Guidelines
              </span>
              <h2 className="text-3xl font-light font-serif tracking-wide text-[#111111] mb-4">
                Packages FAQ
              </h2>
            </div>

            <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
              {packageFAQs.map((faq, idx) => (
                <div key={idx} className="bg-[#f5f5f5] p-8 border border-gray-100 flex flex-col">
                  <h4 className="text-xs uppercase tracking-[0.15em] font-semibold text-[#111111] mb-3 flex items-start">
                    <Info size={16} className="text-[#c9a35b] mr-2 shrink-0 mt-0.5" />
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
