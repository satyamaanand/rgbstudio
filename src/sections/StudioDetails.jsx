import { motion } from "framer-motion";
import {
  Maximize,
  MoveUp,
  Moon,
  Snowflake,
  Wifi,
  Shirt,
  Sparkles,
  Music,
  Users,
  Camera,
  Layers,
  Layout,
  CornerDownRight,
  Flame
} from "lucide-react";

const details = [
  { title: "40ft x 15ft Shooting Floor", icon: Maximize, desc: "Spacious layout with massive room for camera dolly and crew setups." },
  { title: "11.5ft Ceiling Height", icon: MoveUp, desc: "High vertical clearance for complex grid-lighting and rigging requirements." },
  { title: "100% Blackout Capability", icon: Moon, desc: "Complete light isolation control, perfect for high-key studio strobe shoots." },
  { title: "Fully Air Conditioned", icon: Snowflake, desc: "Climate-controlled environment keeping talent and crew comfortable all day." },
  { title: "High-Speed WiFi", icon: Wifi, desc: "Gigabit-speed internet for seamless tethering, uploads, and client previews." },
  { title: "Changing Area", icon: Shirt, desc: "Dedicated, private dressing room space for models and costume changes." },
  { title: "Vanity Mirrors", icon: Sparkles, desc: "Large makeup vanity mirror setup with daylight-balanced bulbs." },
  { title: "Sound System", icon: Music, desc: "Premium Bluetooth sound setup to maintain high creative energy on set." },
  { title: "Separate Washrooms", icon: Users, desc: "Dedicated, clean washroom facilities for both male and female clients." },
  { title: "Professional Equipment", icon: Camera, desc: "Rentable list of Godox, Elinchrom, and Nanlite lights and light modifiers." },
  { title: "Multiple Backdrops", icon: Layers, desc: "Wide range of seamless background rolls (White, Grey, Beige, Sage Green, etc.)." },
  { title: "European Style Wall", icon: Layout, desc: "Custom-designed classic moldings on wall panels for luxury editorial shots." },
  { title: "L-Shape Wall", icon: CornerDownRight, desc: "Corner cyclorama wall design for creative shadows and edge-free photography." },
  { title: "Smoking Zone", icon: Flame, desc: "Designated outdoor smoking area for clients and team breaks." }
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
};

export default function StudioDetails() {
  return (
    <section id="details" className="py-32 px-6 md:px-12 lg:px-24 bg-white">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-20">
          <span className="text-[10px] uppercase tracking-[0.4em] text-[#c9a35b] font-bold block mb-4">
            Space & Specifications
          </span>
          <h2 className="text-4xl md:text-5xl font-serif font-light text-[#111111] mb-6 tracking-wide">
            Studio Details
          </h2>
          <div className="w-16 h-[1px] bg-[#c9a35b] mx-auto mb-6" />
          <p className="text-gray-500 font-light text-sm max-w-lg mx-auto leading-relaxed">
            Our premium rental facility is tailored to class-leading photography and videography production needs.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {details.map((detail, idx) => {
            const Icon = detail.icon;
            return (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="group p-8 bg-[#f4f1ed] border border-[#e8e1db] hover:border-[#c9a35b]/30 rounded transition-all duration-500 flex flex-col justify-between hover:-translate-y-1 hover:shadow-lg"
              >
                <div>
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-gray-700 group-hover:text-[#c9a35b] group-hover:bg-[#c9a35b]/5 transition-colors duration-500 mb-6 shadow-sm">
                    <Icon size={20} className="stroke-[1.5]" />
                  </div>
                  <h3 className="font-serif text-lg font-medium text-[#111111] mb-2 group-hover:text-[#c9a35b] transition-colors duration-300">
                    {detail.title}
                  </h3>
                  <p className="text-gray-500 font-light text-xs leading-relaxed">
                    {detail.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}
