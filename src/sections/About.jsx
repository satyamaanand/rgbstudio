import { motion } from "framer-motion";
import studioSetup1 from "../assets/extracted/about1.jpeg";
import studioSetup2 from "../assets/extracted/about2.jpeg";

export default function About() {
  return (
    <section id="about" className="py-32 px-6 md:px-12 lg:px-24 bg-[#f4f1ed]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">

          {/* Left Column: Philosophy Copy */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 flex flex-col justify-center"
          >
            <span className="text-[10px] uppercase tracking-[0.4em] text-[#c9a35b] font-bold mb-4">
              About RGB Studio
            </span>
            <h2 className="text-4xl md:text-5xl font-serif font-light text-[#111111] mb-8 leading-[1.2] tracking-wide">
              A Breeding Ground <br />
              <span className="italic font-normal">for Creative Talents</span>
            </h2>

            <div className="w-16 h-[1px] bg-[#c9a35b] mb-8" />

            <div className="space-y-6 text-sm text-gray-600 font-light leading-relaxed max-w-xl">
              <p>
                The flexibility to work for video and photography is provided by our state-of-the-art design and space. The area is designed so that we can change a few elements and give a new look every single time.
              </p>
              <p>
                We understand how important space and presentation are to maintain creativity during a shoot. That is why we developed a location destined to become a breeding ground for talent development—a premium rental studio that fits your class, comfort, and budget.
              </p>
              <p className="border-l-2 border-[#c9a35b] pl-4 italic text-gray-700 text-sm">
                "RGB Studio provides rentable space with various backdrops and sets, as well as professional tools and lights that meet international industry requirements."
              </p>
            </div>
          </motion.div>

          {/* Right Column: Asymmetrical Editorial Image Grid */}
          <div className="lg:col-span-6 relative flex flex-col items-center">
            {/* Background decorative beige panel */}
            <div className="absolute -inset-4 bg-[#e8e1db] rounded-lg -z-10 translate-x-2 translate-y-2 opacity-50" />

            {/* Top/First Staggered Image */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="w-full max-w-[480px] aspect-[763/303] overflow-hidden shadow-md border-4 border-white z-10 self-start"
            >
              <img
                src={studioSetup1}
                alt="RGB Studio workspace"
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </motion.div>

            {/* Bottom/Second Staggered Image */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="w-full max-w-[440px] aspect-[764/268] overflow-hidden shadow-md border-4 border-white z-20 -mt-12 self-end"
            >
              <img
                src={studioSetup2}
                alt="Studio camera setup"
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
