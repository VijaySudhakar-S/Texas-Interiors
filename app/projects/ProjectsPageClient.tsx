"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { MapPin, ArrowUpRight } from "lucide-react";

const categories = ["All", "Kitchen", "Residential", "Commercial", "Construction"];

const projects = [
  {
    no: "01",
    title: "The Velvet Oasis Kitchen",
    category: "Kitchen",
    image: "/images/project-kitchen.avif",
    location: "Trichy",
    year: "2024",
    desc: "Island layout with custom backlighting and carbon-fiber cabinetry.",
    size: "large",
  },
  {
    no: "02",
    title: "Monarch Executive Suite",
    category: "Commercial",
    image: "/images/project-office.avif",
    location: "Pudukkottai",
    year: "2024",
    desc: "Executive boardroom with bespoke walnut acoustics and warm recessed lights.",
    size: "small",
  },
  {
    no: "03",
    title: "Zenith Residence Villa",
    category: "Residential",
    image: "/images/project-villa.avif",
    location: "Trichy",
    year: "2023",
    desc: "Custom double-height luxury villa — full turnkey construction.",
    size: "small",
  },
  {
    no: "04",
    title: "The Obsidian Luxury Lounge",
    category: "Residential",
    image: "/images/hero-bg.avif",
    location: "Pudukkottai",
    year: "2023",
    desc: "Plush living lounge blending custom brass details with royal purple upholstery.",
    size: "large",
  },
  {
    no: "05",
    title: "Blueprint Estate Layout",
    category: "Construction",
    image: "/images/project-blueprint.avif",
    location: "Pudukkottai",
    year: "2022",
    desc: "Vaastu-compliant architectural blueprint for residential layout development.",
    size: "small",
  },
  {
    no: "06",
    title: "Villa Construction Site",
    category: "Construction",
    image: "/images/project-construction.avif",
    location: "Trichy",
    year: "2022",
    desc: "Ground-up luxury villa construction with premium structural materials.",
    size: "large",
  },
];

export default function ProjectsPageClient() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filtered =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <>
      {/* Page Hero — Dark */}
      <section className="relative bg-[#080808] pt-32 pb-20 md:pt-44 md:pb-24 px-6 md:px-12 xl:px-24 overflow-hidden border-b border-white/5">
        <div
          className="absolute inset-0 opacity-[0.06] pointer-events-none"
          style={{ backgroundImage: "url('/images/pattern-dark.avif')", backgroundSize: "cover" }}
        />
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="flex items-center gap-4 mb-8"
          >
            <span className="h-px w-8 bg-white/15" />
            <span className="text-[9px] uppercase tracking-[0.45em] text-white/30"
              style={{ fontFamily: "var(--font-dm-sans)" }}>
              Portfolio
            </span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="text-white leading-none"
            style={{
              fontFamily: "var(--font-cormorant)",
              fontSize: "clamp(3rem, 7vw, 7rem)",
              fontWeight: 300,
              letterSpacing: "-0.02em",
            }}
          >
            Our <em style={{ fontStyle: "italic", fontWeight: 700, color: "#9d4edd" }}>Work</em>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-white/35 text-sm mt-6 max-w-md leading-relaxed"
            style={{ fontFamily: "var(--font-dm-sans)", fontWeight: 300 }}
          >
            450+ projects delivered across Tamil Nadu. Kitchens, residences, offices, and full constructions.
          </motion.p>
        </div>
      </section>

      {/* Filter Tabs + Grid — Cream */}
      <section className="bg-[#F5F0E8] py-16 md:py-24 px-6 md:px-12 xl:px-24">
        <div className="max-w-7xl mx-auto">

          {/* Filter Bar */}
          <div className="flex flex-wrap gap-2 mb-12 border-b border-[#1a1a1a]/10 pb-6">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className="text-[9px] uppercase tracking-[0.25em] px-5 py-2.5 border transition-all duration-200"
                style={{
                  fontFamily: "var(--font-dm-sans)",
                  background: activeFilter === cat ? "#5A189A" : "transparent",
                  borderColor: activeFilter === cat ? "#5A189A" : "rgba(26,26,26,0.15)",
                  color: activeFilter === cat ? "#fff" : "rgba(26,26,26,0.4)",
                }}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Project Grid */}
          <motion.div
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-[#1a1a1a]/10"
          >
            <AnimatePresence mode="popLayout">
              {filtered.map((project, i) => (
                <motion.div
                  key={project.no}
                  layout
                  initial={{ opacity: 0, scale: 0.97 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.97 }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  className={`group relative bg-[#F5F0E8] overflow-hidden flex flex-col ${
                    project.size === "large" ? "sm:col-span-2 lg:col-span-1" : ""
                  }`}
                >
                  {/* Image */}
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-all duration-700 group-hover:scale-105"
                      style={{ filter: "brightness(0.85)" }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />

                    {/* Category tag */}
                    <div className="absolute top-4 left-4">
                      <span
                        className="bg-primary text-white text-[8px] uppercase tracking-[0.3em] px-3 py-1"
                        style={{ fontFamily: "var(--font-dm-sans)" }}
                      >
                        {project.category}
                      </span>
                    </div>

                    {/* Big number */}
                    <div
                      className="absolute bottom-4 right-4 text-white/15 select-none"
                      style={{ fontFamily: "var(--font-cormorant)", fontSize: "4rem", fontWeight: 700, lineHeight: 1 }}
                    >
                      {project.no}
                    </div>
                  </div>

                  {/* Info */}
                  <div className="p-5 flex flex-col gap-2 border-t border-[#1a1a1a]/10">
                    <h3
                      className="text-[#1a1a1a] group-hover:text-primary transition-colors duration-300 leading-snug"
                      style={{ fontFamily: "var(--font-cormorant)", fontSize: "1.25rem", fontWeight: 600 }}
                    >
                      {project.title}
                    </h3>
                    <p className="text-[#4a4040] text-xs leading-relaxed"
                      style={{ fontFamily: "var(--font-dm-sans)", fontWeight: 300 }}>
                      {project.desc}
                    </p>
                    <div className="flex items-center justify-between mt-2">
                      <span className="flex items-center gap-1.5 text-[9px] uppercase tracking-[0.25em] text-[#1a1a1a]/30"
                        style={{ fontFamily: "var(--font-dm-sans)" }}>
                        <MapPin size={9} className="text-primary/50" />
                        {project.location} · {project.year}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* CTA Strip — Dark */}
      <section className="bg-[#080808] py-16 md:py-20 px-6 md:px-12 xl:px-24 border-t border-white/5">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h3
              className="text-white mb-2"
              style={{ fontFamily: "var(--font-cormorant)", fontSize: "clamp(1.8rem, 3.5vw, 3rem)", fontWeight: 300 }}
            >
              Your project could be <em style={{ fontStyle: "italic", color: "#9d4edd", fontWeight: 700 }}>next.</em>
            </h3>
            <p className="text-white/35 text-sm" style={{ fontFamily: "var(--font-dm-sans)", fontWeight: 300 }}>
              Free consultation. 3D design preview before any work begins.
            </p>
          </div>
          <Link
            href="/contact"
            className="group flex items-center gap-2 bg-primary hover:bg-primary-light text-white transition-all duration-300 shrink-0"
            style={{
              fontFamily: "var(--font-dm-sans)",
              fontSize: "10px",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              fontWeight: 500,
              padding: "14px 32px",
            }}
          >
            Start Your Project
            <ArrowUpRight size={13} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
        </div>
      </section>
    </>
  );
}
