"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface MaterialItem {
  title: string;
  category: string;
  brand: string;
  image: string;
  specs: string[];
  desc: string;
  gridClass: string;
}

export default function Materials() {
  const materials: MaterialItem[] = [
    {
      title: "Marine Gurjan Plywood",
      category: "Carrying Core",
      brand: "IS:710 Marine Grade",
      image: "/images/material-plywood.png",
      specs: ["100% Gurjan wood core", "Termite & borer proofed", "High density cross-layers"],
      desc: "Boiling Water Proof (BWP) marine cores designed to withstand high humidity and moisture in modular kitchen structures.",
      gridClass: "h-[450px] md:col-span-1",
    },
    {
      title: "Premium Motion Fittings",
      category: "Hardware",
      brand: "Hettich / Blum / Hafele",
      image: "/images/material-hinge.png",
      specs: ["Soft-close tandem drawers", "Aventos folding lift-ups", "100,000 opening cycle tested"],
      desc: "German & Austrian engineered motion hardware. Ensuring silent gliding drawers, heavy load limits, and lifetime performance.",
      gridClass: "h-[380px] md:mt-12 md:col-span-1",
    },
    {
      title: "Calacatta Quartz Surfaces",
      category: "Countertops",
      brand: "Italian Quartz Slabs",
      image: "/images/material-quartz.png",
      specs: ["Non-porous quartz structure", "Zero acid/oil absorption", "Scratch-resistant sealant"],
      desc: "High-density quartz countertops reflecting Calacatta gold veins. Sealed for absolute stain-proofing and luxurious surface gloss.",
      gridClass: "h-[500px] md:-mt-10 md:col-span-1",
    },
    {
      title: "Senosan Anti-Scratch Acrylic",
      category: "Shutters",
      brand: "Senosan Austria",
      image: "/images/project-kitchen.png",
      specs: ["Anti-fingerprint matte/gloss", "Laser edge-banded seams", "Excellent UV color shield"],
      desc: "Austrian imported acrylic shutters with zero-joint edge seams. Provides a mirror-like finish that doesn’t fade or scratch.",
      gridClass: "h-[400px] md:-mt-4 md:col-span-1",
    },
    {
      title: "PU-Coated Teak Veneers",
      category: "Wall Paneling",
      brand: "Natural Veneers",
      image: "/images/project-villa.png",
      specs: ["Natural teak & walnut slices", "Polyurethane protective coat", "Seamless book-matched joints"],
      desc: "Sourced veneers layered on TV backdrops and acoustic conference rooms, hand-polished with Italian PU to show natural wood grains.",
      gridClass: "h-[500px] md:mt-8 md:col-span-1",
    },
    {
      title: "Anodized Metallic Profiles",
      category: "Accents",
      brand: "Brushed Aluminum",
      image: "/images/project-office.png",
      specs: ["Gola cabinet profile handles", "Brushed rose gold borders", "Rust-proof thermal finish"],
      desc: "Ergonomic Gola profile channels and anodized brass trim accents that create clean, handle-free cabinet facades.",
      gridClass: "h-[420px] md:-mt-12 md:col-span-1",
    },
  ];

  return (
    <section id="materials" className="relative bg-[#0c0c0c]">
      {/* Section label strip */}
      <div className="flex items-center justify-between px-8 md:px-16 xl:px-24 py-5 border-y border-white/5">
        <span className="text-[9px] font-mono uppercase tracking-[0.45em] text-white/30">06 / Materials</span>
        <span className="text-[9px] font-mono uppercase tracking-[0.45em] text-white/30">Honest Specs</span>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Editorial Title */}
        <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-8 mt-12 mb-12">
          <div className="flex flex-col gap-4">
            <h2
              className="font-serif text-white leading-none"
              style={{ fontSize: "clamp(2.5rem, 6vw, 5.5rem)", fontWeight: 200 }}
            >
              Honest Specs.{" "}
              <span className="italic font-black text-primary-light">Luxury Inside.</span>
            </h2>
          </div>
          <p className="text-white/30 text-sm max-w-md leading-relaxed font-light mb-3">
            We list every single component. What goes behind the lacquer panels or structural concrete is engineered to endure.
          </p>
        </div>

        {/* Asymmetrical staggered sample grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 items-start">
          {materials.map((mat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: idx * 0.05 }}
              className={`relative overflow-hidden rounded-3xl border border-white/5 bg-glass hover:border-primary/50 transition-all duration-500 flex flex-col justify-between p-8 md:p-10 select-none group ${mat.gridClass}`}
              data-cursor="view"
              data-cursor-text={mat.category.split(" ").slice(-1)[0].toUpperCase()}
            >
              {/* Material closeup texture background */}
              <div className="absolute inset-0 -z-10 overflow-hidden">
                <Image
                  src={mat.image}
                  alt={mat.title}
                  fill
                  className="object-cover brightness-[0.8] group-hover:brightness-[1] group-hover:scale-105 transition-all duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-bg-dark  to-transparent pointer-events-none" />
                <div className="absolute inset-0 bg-gradient-to-r  via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Glowing hover leak */}
              <div className="absolute top-0 right-0 w-28 h-28 bg-primary/20 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              {/* Tag header */}
              <div className="flex justify-between items-start relative z-10">
                <span className="text-[9px] font-bold tracking-widest uppercase text-primary-light bg-primary/15 border border-primary/25 px-3 py-1 rounded-full">
                  {mat.category}
                </span>
                <span className="text-[8px] text-text-muted mt-1 tracking-wider uppercase font-semibold">
                  {mat.brand}
                </span>
              </div>

              {/* Title & description */}
              <div className="flex flex-col gap-3 mt-12 relative z-10 justify-end flex-grow">
                <h3 className="font-serif text-2xl md:text-3xl font-bold text-white group-hover:text-primary-light transition-colors leading-tight">
                  {mat.title}
                </h3>
                <p className="text-text-muted text-xs leading-relaxed max-w-xl group-hover:text-white/85 transition-colors duration-300">
                  {mat.desc}
                </p>

                {/* Standards list reveal on hover */}
                <div className="flex flex-col gap-2 mt-4 max-h-0 opacity-0 group-hover:max-h-24 group-hover:opacity-100 overflow-hidden transition-all duration-500 ease-in-out border-t border-white/10 pt-4">
                  {mat.specs.map((spec, sIdx) => (
                    <div key={sIdx} className="flex items-center gap-2 text-[11px] text-white/95">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary-light shadow-[0_0_8px_#9d4edd] shrink-0" />
                      <span>{spec}</span>
                    </div>
                  ))}
                </div>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
      <div className="pb-16 md:pb-20" />
    </section>
  );
}
