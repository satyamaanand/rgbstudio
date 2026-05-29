import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, CalendarRange, Clock4, ShieldAlert } from "lucide-react";

const categories = [
  { id: "booking", label: "Booking & Payments", icon: CalendarRange },
  { id: "usage", label: "Time & Rental Usage", icon: Clock4 },
  { id: "care", label: "Studio Policies & Care", icon: ShieldAlert }
];

const guidelineRules = [
  // Booking & Payments
  {
    category: "booking",
    title: "Booking Confirmation",
    content: "We require an advance payment equivalent to one hour's rent to confirm your booking slot. Without this advance payment, your slot remains open and may be offered to another client."
  },
  {
    category: "booking",
    title: "No Tentative Bookings",
    content: "We do not hold tentative or soft bookings. Bookings are only finalized and blocked in our calendar upon receipt of the booking confirmation advance."
  },
  {
    category: "booking",
    title: "Same-Day Payment",
    content: "Full payment of the remaining rental balance must be cleared on the same day of your shoot, prior to leaving the studio premises."
  },
  {
    category: "booking",
    title: "Cancellations & Rescheduling",
    content: "Booking reschedules or cancellations must be communicated at least 48 hours prior to your slot. Last-minute cancellations (under 48 hours) will result in the forfeiture of your booking advance."
  },
  
  // Time & Rental Usage
  {
    category: "usage",
    title: "Rental Time Calculation",
    content: "Your studio rental starts exactly at the confirmed booking start time, not from the time your crew or talent arrives or when the shoot actually begins. Please plan your arrivals accordingly."
  },
  {
    category: "usage",
    title: "Rental Duration",
    content: "Rental time is counted and billed up to the very last click of the camera, including any final shots, wraps, or final takes."
  },
  {
    category: "usage",
    title: "Setup & Pack-Up Time",
    content: "Both your initial setup and final pack-up must be fully completed within your booked hours. Any extra time used beyond the booked slot will be charged at standard hourly rates."
  },
  {
    category: "usage",
    title: "Timely Exit",
    content: "If another client has reserved the studio immediately after your slot, you are required to vacate the shooting floor promptly at the end of your booked slot."
  },
  {
    category: "usage",
    title: "Grace Period",
    content: "We allow a strict 10-minute grace period for packing up. If your pack-up extends beyond 10 minutes, an additional full hour's rent will be charged to your invoice."
  },
  {
    category: "usage",
    title: "Extra Usage Charges",
    content: "Any additional usage of lights, backdrops, or props not specified in your initial booking agreement must be settled and paid for before leaving the studio."
  },
  {
    category: "usage",
    title: "Air Conditioning Policy",
    content: "Continuous use of air conditioning beyond the booked hours (e.g. during extended wrap-ups or social downtime) will incur additional energy utility charges."
  },

  // Studio Policies & Care
  {
    category: "care",
    title: "Liability for Damages",
    content: "The booking client is fully liable and responsible for any damage caused to the studio space, equipment, props, or walls during the session, regardless of which team member caused it. Replacement/repair costs will be charged."
  },
  {
    category: "care",
    title: "Restricted Materials",
    content: "The use of paints, flour, powder, glitter, water-splashes, or any similar mess-creating substances is strictly prohibited inside the studio unless pre-approved in writing."
  },
  {
    category: "care",
    title: "No Smoking & Tobacco",
    content: "Smoking, pan masala, and tobacco consumption are strictly prohibited inside the studio premises. Designated outdoor zones are available."
  },
  {
    category: "care",
    title: "Maximum Crew Size",
    content: "Please inform us in advance if your shoot crew exceeds 10 members. Larger crews require special arrangements to ensure everyone's comfort and compliance with safety standards."
  },
  {
    category: "care",
    title: "Background Paper Usage Care",
    content: "If you plan to walk on the paper rolls sweeps, we place an protective acrylic sheet on the floor. If paper rolls are used directly on the floor without protection and get soiled/torn, an additional background charge applies."
  },
  {
    category: "care",
    title: "Music Sound Volume",
    content: "Please keep music and sound levels within a reasonable range. Loud bass or noise levels that disturb our neighbors or nearby creative spaces are not permitted."
  },
  {
    category: "care",
    title: "Parking Notice",
    content: "We do not have a dedicated private parking space at the studio. If you are bringing crew cars or heavy equipment vans, please notify us in advance so we can assist in guiding you to nearby public or valet parking options."
  }
];

export default function Guidelines() {
  const [activeTab, setActiveTab] = useState("booking");
  const [expandedIndex, setExpandedIndex] = useState(0); // Index of expanded item in current tab

  const currentRules = guidelineRules.filter(rule => rule.category === activeTab);

  const handleToggle = (idx) => {
    setExpandedIndex(expandedIndex === idx ? -1 : idx);
  };

  return (
    <section id="guidelines" className="py-32 px-6 md:px-12 lg:px-24 bg-white">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-20">
          <span className="text-[10px] uppercase tracking-[0.4em] text-[#c9a35b] font-bold block mb-4">
            Studio Regulations
          </span>
          <h2 className="text-4xl md:text-5xl font-serif font-light text-[#111111] mb-6 tracking-wide">
            Guidelines & Terms
          </h2>
          <div className="w-16 h-[1px] bg-[#c9a35b] mx-auto mb-6" />
          <p className="text-gray-500 font-light text-sm max-w-lg mx-auto leading-relaxed">
            Please review our house rules to ensure a smooth, professional, and comfortable shoot experience for everyone.
          </p>
        </div>

        {/* Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Category Tabs */}
          <div className="lg:col-span-4 flex flex-col space-y-3">
            {categories.map((cat) => {
              const Icon = cat.icon;
              const isSelected = activeTab === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => {
                    setActiveTab(cat.id);
                    setExpandedIndex(0); // Reset accordion to first item
                  }}
                  className={`flex items-center space-x-4 p-5 rounded border text-left transition-all duration-300 cursor-pointer focus:outline-none ${
                    isSelected
                      ? "bg-[#111111] border-[#111111] text-white shadow"
                      : "bg-[#f4f1ed] border-[#e8e1db] text-[#111111]/70 hover:border-[#111111]"
                  }`}
                >
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                    isSelected ? "bg-[#c9a35b]/20 text-[#c9a35b]" : "bg-white text-gray-500"
                  }`}>
                    <Icon size={16} />
                  </div>
                  <div>
                    <span className="text-xs uppercase tracking-wider font-semibold block">
                      {cat.label}
                    </span>
                    <span className="text-[9px] text-gray-400 font-light block mt-0.5">
                      {guidelineRules.filter(r => r.category === cat.id).length} rules configured
                    </span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right Column: Accordions */}
          <div className="lg:col-span-8 bg-[#f4f1ed] border border-[#e8e1db] rounded p-6 md:p-10 min-h-[420px]">
            <div className="space-y-4">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  {currentRules.map((rule, idx) => {
                    const isOpen = expandedIndex === idx;
                    return (
                      <div
                        key={rule.title}
                        className="border-b border-[#e8e1db] last:border-0 pb-4 mb-4 last:pb-0 last:mb-0"
                      >
                        <button
                          onClick={() => handleToggle(idx)}
                          className="w-full flex justify-between items-center text-left py-3 cursor-pointer focus:outline-none group"
                        >
                          <h3 className={`font-serif text-lg font-normal transition-colors duration-300 ${
                            isOpen ? "text-[#c9a35b]" : "text-[#111111] group-hover:text-[#c9a35b]"
                          }`}>
                            {rule.title}
                          </h3>
                          <ChevronDown
                            size={18}
                            className={`text-gray-400 transition-transform duration-300 ${
                              isOpen ? "rotate-180 text-[#c9a35b]" : "group-hover:text-[#111111]"
                            }`}
                          />
                        </button>
                        
                        <AnimatePresence initial={false}>
                          {isOpen && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.3, ease: "easeInOut" }}
                              className="overflow-hidden"
                            >
                              <p className="text-gray-600 text-xs md:text-sm font-light leading-relaxed pt-2 pb-4">
                                {rule.content}
                              </p>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    );
                  })}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
