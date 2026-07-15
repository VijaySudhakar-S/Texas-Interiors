"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star } from "lucide-react";

const reviews = [
  {
    name: "Rajesh Kannan",
    role: "Villa Owner",
    location: "Trichy Cantonment",
    review:
      "Texas Interior transformed our modular kitchen and living room into a masterclass of luxury. The attention to detail, soft-close Blum integrations, and beautiful lighting schemes were exactly what we visualized.",
    rating: 5,
  },
  {
    name: "Dr. Meenakshi Sundaram",
    role: "Residential Client",
    location: "Pudukkottai",
    review:
      "Being a doctor, I wanted a peaceful, elegant, vaastu-compliant villa layout. The promoters at Texas handled both the construction and complete turnkey interior designs. Meticulous execution and transparent billing.",
    rating: 5,
  },
  {
    name: "Senthil Kumar",
    role: "Managing Director, TechSpace",
    location: "Trichy IT Park",
    review:
      "We contracted Texas for our 4500 sq.ft commercial corporate office. They designed ergonomic workspaces, sleek conference rooms, and a stellar lobby. The acoustic wood panels and premium layout feel incredibly professional.",
    rating: 5,
  },
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const current = reviews[activeIndex];

  const next = () => setActiveIndex((prev) => (prev + 1) % reviews.length);
  const prev = () => setActiveIndex((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));

  return (
    <section id="testimonials" className="relative bg-[#080808]">
      {/* Section label strip */}
      <div className="flex items-center justify-between px-8 md:px-16 xl:px-24 py-5 border-y border-white/5">
        <span className="text-[9px] font-mono uppercase tracking-[0.45em] text-white/30">06 / Testimonials</span>
        <span className="text-[9px] font-mono uppercase tracking-[0.45em] text-white/30">
          {String(activeIndex + 1).padStart(2, "0")} / {String(reviews.length).padStart(2, "0")}
        </span>
      </div>

      <div className="relative px-8 md:px-16 xl:px-24 py-20 md:py-36 min-h-[60vh] flex flex-col justify-between gap-16">

        {/* Thin violet left stripe decoration */}
        <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-gradient-to-b from-transparent via-primary/25 to-transparent" />

        {/* Stars */}
        <motion.div
          key={activeIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="flex gap-1.5"
        >
          {[...Array(current.rating)].map((_, i) => (
            <Star key={i} size={12} className="fill-primary-light text-primary-light" />
          ))}
        </motion.div>

        {/* Giant quote — this IS the section */}
        <div className="flex-1 flex items-center">
          <AnimatePresence mode="wait">
            <motion.blockquote
              key={activeIndex}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -24 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="font-serif text-white leading-tight max-w-5xl"
              style={{
                fontSize: "clamp(1.8rem, 4.5vw, 4.5rem)",
                fontWeight: 300,
                letterSpacing: "-0.02em",
                lineHeight: 1.15,
              }}
            >
              "{current.review}"
            </motion.blockquote>
          </AnimatePresence>
        </div>

        {/* Bottom row: reviewer + controls */}
        <div className="flex items-end justify-between border-t border-white/5 pt-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 10 }}
              transition={{ duration: 0.4 }}
              className="flex flex-col gap-1"
            >
              <span className="font-serif text-white font-semibold text-lg tracking-wide">
                {current.name}
              </span>
              <span className="font-mono text-[9px] uppercase tracking-[0.35em] text-white/30">
                {current.role} · {current.location}
              </span>
            </motion.div>
          </AnimatePresence>

          {/* Controls */}
          <div className="flex items-center gap-2">
            <button
              onClick={prev}
              aria-label="Previous"
              className="w-12 h-12 border border-white/10 hover:border-primary/50 text-white/40 hover:text-white transition-all duration-300 flex items-center justify-center text-lg"
            >
              ←
            </button>
            <button
              onClick={next}
              aria-label="Next"
              className="w-12 h-12 border border-white/10 hover:border-primary/50 text-white/40 hover:text-white transition-all duration-300 flex items-center justify-center text-lg"
            >
              →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
