import { Star, Users, CalendarDays, Camera } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    icon: Star,
    highlight: "★★★★★ 5.0",
    title: "Top Rated on Google",
    description: "Backed by 100+ five-star reviews from photographers, creators, brands, and production teams who trust RGB Studio."
  },
  {
    icon: Users,
    highlight: "100+",
    title: "Creators & Brands",
    description: "Trusted by fashion models, influencers, agencies, startups, filmmakers, photographers, and commercial production teams across Mumbai."
  },
  {
    icon: CalendarDays,
    highlight: "7 Days",
    title: "Flexible Booking",
    description: "Open throughout the week with flexible scheduling. Simply send your preferred date and time—we'll coordinate availability based on studio bookings."
  },
  {
    icon: Camera,
    highlight: "All-in-One",
    title: "Premium Studio Setup",
    description: "Professional lighting, premium backdrops, curated props, private vanity, spacious interiors, and everything needed for a seamless production."
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

export default function WhyChoose() {
  return (
    <section 
      id="why-choose" 
      className="py-32 px-6 md:px-12 lg:px-24 bg-[#f4f1ed] relative overflow-hidden border-b border-[#e8e1db]"
    >
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-20">
          <span className="text-[10px] uppercase tracking-[0.4em] text-[#c9a35b] font-bold block mb-4">
            WHY CHOOSE RGB STUDIO
          </span>
          <h2 className="text-4xl md:text-5xl font-serif font-light text-[#111111] mb-6 tracking-wide">
            Why Creators Choose RGB Studio
          </h2>
          <div className="w-16 h-[1px] bg-[#c9a35b] mx-auto mb-6" />
          <p className="text-gray-500 font-light text-xs md:text-sm max-w-2xl mx-auto leading-relaxed">
            Everything you need for a seamless photography and videography experience — trusted by creators, brands, and agencies across Mumbai.
          </p>
        </div>

        {/* Feature Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10"
        >
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={idx}
                variants={cardVariants}
                className="group bg-white border border-[#e8e1db]/80 rounded-3xl p-8 md:p-10 shadow-sm hover:shadow-lg transition-all duration-500 flex flex-col items-center text-center hover:-translate-y-1.5 cursor-default"
              >
                {/* Gold Icon */}
                <div className="w-12 h-12 bg-[#c9a35b]/5 rounded-full flex items-center justify-center text-[#c9a35b] mb-6 group-hover:scale-110 transition-transform duration-500">
                  <Icon size={22} className="stroke-[1.5]" />
                </div>

                {/* Large Highlight Stat */}
                <span className="font-serif text-3xl md:text-4xl lg:text-5xl text-[#111111] font-light block mb-3 tracking-tight group-hover:text-[#c9a35b] transition-colors duration-300">
                  {feature.highlight}
                </span>

                {/* Title */}
                <h4 className="text-xs uppercase tracking-[0.25em] font-semibold text-[#111111] mb-4">
                  {feature.title}
                </h4>

                {/* Description */}
                <p className="text-gray-500 font-light text-xs md:text-sm leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}
