"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const pillars = [
  {
    no: "01",
    title: "Signature Aesthetics",
    desc: "Every project is a custom masterpiece. We avoid templates and construct spaces tailored to reflect your exact personality and lifestyle.",
  },
  {
    no: "02",
    title: "Realistic 3D Walkthroughs",
    desc: "Visualize your home before a single brick is laid. Our 3D architectural renders provide an exact preview of materials, lighting, and layout.",
  },
  {
    no: "03",
    title: "German & Italian Standards",
    desc: "We partner directly with Hafele, Hettich, and Blum to guarantee premium fittings and high-density boiling water-resistant materials.",
  },
  {
    no: "04",
    title: "Turnkey Project Control",
    desc: "Zero coordination stress. We manage structural, design, electrical, plumbing, masonry, and carpentry under a single contract.",
  },
  {
    no: "05",
    title: "Lifetime Design Support",
    desc: "Our relationship doesn't end at keys handover. We provide comprehensive lifetime design and hardware alignment assistance.",
  },
  {
    no: "06",
    title: "Transparent Material Schedules",
    desc: "Fixed, pre-approved itemized bills. No surprise expenses, no hidden charges, and absolute material audits at every stage.",
  },
];

export default function WhyChooseUs() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section id="why-choose-us" className="relative bg-[#080808]">
      {/* Section label strip */}
      <div className="flex items-center justify-between px-8 md:px-16 xl:px-24 py-5 border-y border-white/5">
        <span className="text-[9px] font-mono uppercase tracking-[0.45em] text-white/30">04 / Why Us</span>
        <span className="text-[9px] font-mono uppercase tracking-[0.45em] text-white/30">The Signature Difference</span>
      </div>

      <div className="px-8 md:px-16 xl:px-24 py-20 md:py-32">

        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20 md:mb-28 max-w-3xl"
        >
          <h2
            className="font-serif text-white leading-none"
            style={{ fontSize: "clamp(2.5rem, 6vw, 5.5rem)", fontWeight: 200 }}
          >
            The Texas{" "}
            <span className="italic font-black text-primary-light">Difference</span>
          </h2>
          <p className="text-white/30 text-sm mt-6 leading-relaxed max-w-md font-light">
            We approach interior design and construction with a level of rigor and artistic dedication that has redefined modern living in Tamil Nadu.
          </p>
        </motion.div>

        {/* Pure typography pillar grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-0">
          {pillars.map((pillar, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: idx * 0.07 }}
              onMouseEnter={() => setActiveIndex(idx)}
              onMouseLeave={() => setActiveIndex(null)}
              className="group relative border-b border-white/5 border-r-0 md:even:border-r-0 xl:border-r border-white/5 p-8 md:p-10 flex flex-col gap-4 cursor-default overflow-hidden"
            >
              {/* Hover fill */}
              <motion.div
                className="absolute inset-0 bg-primary/[0.03] pointer-events-none"
                initial={{ opacity: 0 }}
                animate={{ opacity: activeIndex === idx ? 1 : 0 }}
                transition={{ duration: 0.3 }}
              />

              {/* Giant outlined number */}
              <span
                className="font-serif leading-none select-none transition-colors duration-500"
                style={{
                  fontSize: "clamp(4rem, 8vw, 7rem)",
                  fontWeight: 900,
                  WebkitTextStroke: activeIndex === idx ? "1px rgba(157,78,221,0.4)" : "1px rgba(255, 255, 255, 0.16)",
                  color: "transparent",
                }}
              >
                {pillar.no}
              </span>

              {/* Title */}
              <h3
                className="font-serif text-white group-hover:text-primary-light transition-colors duration-300"
                style={{ fontSize: "clamp(1rem, 1.6vw, 1.4rem)", fontWeight: 600, letterSpacing: "-0.01em" }}
              >
                {pillar.title}
              </h3>

              {/* Description — shows on hover */}
              <AnimatePresence>
                {activeIndex === idx && (
                  <motion.p
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-white/40 text-xs leading-relaxed font-light overflow-hidden"
                  >
                    {pillar.desc}
                  </motion.p>
                )}
              </AnimatePresence>

              {/* Violet underline on hover */}
              <motion.div
                className="absolute bottom-0 left-0 h-[2px] bg-primary/60"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: activeIndex === idx ? 1 : 0 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                style={{ transformOrigin: "left" }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
