"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Award, Ruler, Compass } from "lucide-react";
import Link from "next/link";

const milestones = [
  {
    no: "01",
    title: "15+ Years of Trust",
    desc: "Delivering bespoke interiors and property development in Trichy & Pudukkottai.",
    icon: <Award size={20} className="text-primary-light" />,
  },
  {
    no: "02",
    title: "Realistic 3D Renders",
    desc: "Verify every veneer texture, cabinet drawer alignment, and paint code before layout.",
    icon: <Ruler size={20} className="text-primary-light" />,
  },
  {
    no: "03",
    title: "Factory Edge-Banding",
    desc: "Automatic CNC manufacturing for zero-joint seams that resist absolute moisture.",
    icon: <Compass size={20} className="text-primary-light" />,
  },
];

export default function WhyChooseSection() {
  return (
    <section className="bg-[#160a28] py-20 md:py-28 px-6 md:px-12 xl:px-24 relative overflow-hidden">
      
      {/* Generated violet pattern bg */}
      <div
        className="absolute inset-0 opacity-[0.08] pointer-events-none"
        style={{
          backgroundImage: "url('/images/pattern-violet.avif')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Editorial Heading */}
        <div className="max-w-2xl mb-16">
          <span className="text-[9px] uppercase tracking-[0.45em] text-white/35 flex items-center gap-3 mb-6"
            style={{ fontFamily: "var(--font-dm-sans)" }}>
            <span className="h-px w-6 bg-white/20" />
            Texas Promise
          </span>
          <h2
            className="text-white leading-none mb-6"
            style={{
              fontFamily: "var(--font-cormorant)",
              fontSize: "clamp(2.5rem, 5.5vw, 4.8rem)",
              fontWeight: 300,
              letterSpacing: "-0.01em",
            }}
          >
            Why Clients <br />
            <em style={{ fontStyle: "italic", fontWeight: 700, color: "#9d4edd" }}>Choose Texas</em>
          </h2>
          <p className="text-white/40 text-sm leading-relaxed max-w-md"
            style={{ fontFamily: "var(--font-dm-sans)", fontWeight: 300 }}>
            We bring international building standards, strict factory edge banding, and modular precision control under a single unified project contract.
          </p>
        </div>

        {/* 3 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/10 border border-white/10">
          {milestones.map((m, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.1 }}
              className="bg-[#160a28] p-8 md:p-10 flex flex-col gap-5 hover:bg-primary/[0.08] transition-all duration-300 group"
            >
              <div className="flex items-center justify-between">
                {/* Icon wrapper */}
                <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                  {m.icon}
                </div>
                <span className="font-serif text-white/10 group-hover:text-primary-light/20 text-3xl font-black transition-colors"
                  style={{ fontFamily: "var(--font-cormorant)" }}>
                  {m.no}
                </span>
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-white text-lg font-semibold group-hover:text-primary-light transition-colors"
                  style={{ fontFamily: "var(--font-cormorant)" }}>
                  {m.title}
                </h3>
                <p className="text-white/40 text-xs leading-relaxed"
                  style={{ fontFamily: "var(--font-dm-sans)", fontWeight: 300 }}>
                  {m.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom strip */}
        <div className="flex items-center gap-4 mt-12 border-t border-white/5 pt-8">
          <Link
            href="/about"
            className="group flex items-center gap-2 text-white/40 hover:text-white transition-colors text-[10px] uppercase tracking-[0.2em]"
            style={{ fontFamily: "var(--font-dm-sans)" }}
          >
            Learn More About Us
            <ArrowUpRight size={12} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
        </div>

      </div>
    </section>
  );
}
