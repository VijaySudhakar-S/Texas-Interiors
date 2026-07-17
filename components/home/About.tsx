"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const highlights = [
  "Bespoke Concepts",
  "Premium Sourcing",
  "Complete Turnkey",
  "Site Supervision",
];

export default function About() {
  return (
    <section id="about" className="relative bg-[#080808] overflow-hidden">

      {/* Top border rule */}
      <div className="w-full h-px bg-white/5" />

      {/* Section label strip */}
      <div className="flex items-center justify-between px-8 md:px-16 xl:px-24 py-5 border-b border-white/5">
        <span className="text-[9px] font-mono uppercase tracking-[0.45em] text-white/30">01 / About</span>
        <span className="text-[9px] font-mono uppercase tracking-[0.45em] text-white/30">Texas Interior & Promoters</span>
      </div>

      {/* Main editorial layout */}
      <div className="px-8 md:px-16 xl:px-24 py-20 md:py-32 grid grid-cols-1 lg:grid-cols-2 gap-0">

        {/* LEFT — Big image panel, raw edge */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full aspect-[3/4] lg:aspect-auto lg:min-h-[600px] overflow-hidden"
          data-cursor="view"
          data-cursor-text="STORY"
        >
          <Image
            src="/images/project-villa.avif"
            alt="Texas Interiors luxury project"
            fill
            className="object-cover brightness-75 hover:brightness-90 transition-all duration-700"
          />
          {/* Corner annotation */}
          {/* <div className="absolute bottom-6 left-6 font-mono text-[9px] uppercase tracking-[0.35em] text-white/50 bg-black/60 backdrop-blur-sm px-3 py-1.5">
            Live Site — Cantonment, Trichy
          </div> */}
          {/* Thin violet left border accent */}
          <div className="absolute top-0 left-0 w-[3px] h-full bg-gradient-to-b from-primary via-primary-light to-transparent" />
        </motion.div>

        {/* RIGHT — Pure editorial text */}
        <div className="lg:pl-16 xl:pl-24 flex flex-col justify-center gap-12 py-12 lg:py-0">

          {/* Year badge */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-center gap-4"
          >
            <span className="font-serif text-[6rem] md:text-[8rem] font-black text-white/15 leading-none select-none -mb-4">
              5
            </span>
            <div className="flex flex-col gap-0.5">
              <span className="text-white/60 text-xs uppercase tracking-widest">Years</span>
              <span className="text-white/30 text-[10px] uppercase tracking-widest font-mono">of Excellence</span>
            </div>
          </motion.div>

          {/* Pull-quote */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          >
            <p
              className="font-serif text-white leading-tight"
              style={{ fontSize: "clamp(1.8rem, 3.8vw, 3.2rem)", fontWeight: 700 }}
            >
              We don't decorate spaces.
            </p>
            <p
              className="font-serif text-white/30 leading-tight italic mt-1"
              style={{ fontSize: "clamp(1.8rem, 3.8vw, 3.2rem)", fontWeight: 300 }}
            >
              We architect lives.
            </p>
          </motion.div>

          {/* Narrative */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-white/40 text-sm leading-relaxed max-w-md font-light"
          >
            At <strong className="text-white/70 font-medium">Texas Interior & Promoters</strong>, we craft spaces that resonate with character. Our design-build methodology unites creative vision with structural mastery — from high-gloss European modular kitchens to custom double-height luxury residences across Pudukkottai and Trichy.
          </motion.p>

          {/* Inline highlights strip */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="flex flex-wrap gap-x-6 gap-y-3 border-t border-white/5 pt-8"
          >
            {highlights.map((h, i) => (
              <span
                key={i}
                className="flex items-center gap-1.5 text-[11px] uppercase tracking-[0.2em] text-white/40 hover:text-primary-light transition-colors duration-300 cursor-default"
              >
                <ArrowRight size={10} className="shrink-0 text-primary/50" />
                {h}
              </span>
            ))}
          </motion.div>

          {/* CTA */}
          <motion.a
            href="#contact"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="group flex items-center gap-3 text-[11px] uppercase tracking-[0.25em] text-white/50 hover:text-white transition-colors duration-300 w-fit"
          >
            <span className="h-px w-8 bg-white/20 group-hover:w-16 group-hover:bg-primary-light transition-all duration-500" />
            Begin Your Project
          </motion.a>
        </div>
      </div>
    </section>
  );
}
