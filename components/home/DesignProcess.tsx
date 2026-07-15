"use client";

import { motion } from "framer-motion";

const steps = [
  {
    no: "01",
    title: "Discovery & Measurement",
    desc: "Meet at our Pudukkottai/Trichy office or your site. Discuss layout expectations, timelines, budgets, and take initial spatial measurements.",
  },
  {
    no: "02",
    title: "2D Layout & Concept",
    desc: "Our architects map vaastu-compliant 2D drawings and present custom mood boards to align on design style, space optimization, and materials.",
  },
  {
    no: "03",
    title: "3D Rendering & Choice",
    desc: "Experience high-fidelity 3D renderings. Review final paint codes, veneer textures, laminate sheets, and choose specific hardware details.",
  },
  {
    no: "04",
    title: "Factory Manufacturing",
    desc: "Modular designs are manufactured at our facility using advanced CNC cutting and zero-joint edge banding.",
  },
  {
    no: "05",
    title: "Installation & Assembly",
    desc: "On-site assembly under dedicated engineers. Handled by skilled carpenters, plumbers, electricians, and false ceiling teams.",
  },
  {
    no: "06",
    title: "Inspection & Handover",
    desc: "A meticulous post-work inspection checklist, followed by deep cleaning, full walkthrough, and key handover.",
  },
];

export default function DesignProcess() {
  return (
    <section id="process" className="relative bg-[#0a0a0a] overflow-hidden">
      {/* Section label strip */}
      <div className="flex items-center justify-between px-8 md:px-16 xl:px-24 py-5 border-y border-white/5">
        <span className="text-[9px] font-mono uppercase tracking-[0.45em] text-white/30">05 / Process</span>
        <span className="text-[9px] font-mono uppercase tracking-[0.45em] text-white/30">6 Step Execution Track</span>
      </div>

      <div className="px-8 md:px-16 xl:px-24 py-20 md:py-32">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20 md:mb-28"
        >
          <h2
            className="font-serif text-white leading-none"
            style={{ fontSize: "clamp(2.5rem, 6vw, 5.5rem)", fontWeight: 200 }}
          >
            The Design{" "}
            <span className="italic font-black text-primary-light">Execution Path</span>
          </h2>
          <p className="text-white/30 text-sm mt-5 leading-relaxed max-w-md font-light">
            A meticulous pipeline engineered to guarantee schedule precision, cost control, and award-winning quality.
          </p>
        </motion.div>

        {/* Horizontal step diagram — scrollable on mobile */}
        <div className="overflow-x-auto pb-8 -mx-8 md:-mx-16 xl:-mx-24 px-8 md:px-16 xl:px-24">
          <div className="relative min-w-max md:min-w-0 md:w-full">
            
            {/* Connecting horizontal line - centered exactly behind the nodes */}
            <div className="absolute left-0 right-0 h-px bg-white/10 hidden md:block" style={{ top: "16px" }} />

            <div className="grid grid-cols-6 gap-6 md:gap-8 relative">
              {steps.map((step, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.7, delay: idx * 0.1 }}
                  className="group flex flex-col gap-6 w-[200px] md:w-auto"
                >
                  {/* Step indicator node row */}
                  <div className="flex items-center gap-4 relative z-10 h-8">
                    <div className="w-8 h-8 rounded-full border border-white/15 bg-[#0a0a0a] flex items-center justify-center group-hover:border-primary-light group-hover:bg-primary/10 transition-all duration-300 shrink-0">
                      <div className="w-2 h-2 rounded-full bg-white/30 group-hover:bg-primary-light transition-colors duration-300" />
                    </div>
                    <span
                      className="font-serif text-white/10 group-hover:text-primary-light/20 transition-colors duration-500 leading-none select-none font-black text-3xl"
                    >
                      {step.no}
                    </span>
                  </div>

                  {/* Content block aligned starting at same height */}
                  <div className="flex flex-col gap-3 min-h-[140px] justify-between">
                    <div className="flex flex-col gap-2">
                      <h3 className="font-serif text-white text-base md:text-lg font-semibold leading-snug group-hover:text-primary-light transition-colors duration-300">
                        {step.title}
                      </h3>
                      <p className="text-white/45 text-xs leading-relaxed font-light">
                        {step.desc}
                      </p>
                    </div>
                    
                    {/* Bottom accent line to anchor card base */}
                    <div className="w-12 h-[2px] bg-white/10 group-hover:bg-primary-light transition-colors duration-500 mt-2" />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
