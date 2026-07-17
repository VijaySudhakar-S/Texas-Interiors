"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { MapPin } from "lucide-react";

interface Project {
  no: string;
  title: string;
  category: string;
  image: string;
  location: string;
  year: string;
  desc: string;
}

const projects: Project[] = [
  {
    no: "01",
    title: "The Velvet Oasis Kitchen",
    category: "Modular Kitchen",
    image: "/images/project-kitchen.avif",
    location: "Trichy",
    year: "2024",
    desc: "State-of-the-art island layout with custom purple backlighting and carbon-fiber cabinetry.",
  },
  {
    no: "02",
    title: "The Monarch Executive Suite",
    category: "Commercial Office",
    image: "/images/project-office.avif",
    location: "Pudukkottai",
    year: "2024",
    desc: "Minimalist executive boardroom with bespoke walnut acoustics and warm recessed lights.",
  },
  {
    no: "03",
    title: "The Zenith Residence Villa",
    category: "Promoters / Construction",
    image: "/images/project-villa.avif",
    location: "Trichy",
    year: "2023",
    desc: "Architectural promoter layout involving custom double-height luxury villa construction.",
  },
  {
    no: "04",
    title: "The Obsidian Luxury Lounge",
    category: "Residential Design",
    image: "/images/hero-bg.avif",
    location: "Pudukkottai",
    year: "2023",
    desc: "Plush living lounge blending custom brass details with signature royal purple upholstery.",
  },
];

export default function FeaturedProjects() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section id="projects" className="relative bg-[#080808]">
      {/* Section label strip */}
      <div className="flex items-center justify-between px-8 md:px-16 xl:px-24 py-5 border-y border-white/5">
        <span className="text-[9px] font-mono uppercase tracking-[0.45em] text-white/30">03 / Portfolio</span>
        <span className="text-[9px] font-mono uppercase tracking-[0.45em] text-white/30">Hover to reveal</span>
      </div>

      <div className="relative px-8 md:px-16 xl:px-24 py-16 md:py-24">

        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16 md:mb-24"
        >
          <h2
            className="font-serif text-white leading-none"
            style={{ fontSize: "clamp(2.5rem, 6vw, 5.5rem)", fontWeight: 200 }}
          >
            Bespoke{" "}
            <span className="italic font-black text-primary-light">Creations</span>
          </h2>
        </motion.div>

        {/* Hover reveal image — floats over everything */}
        <AnimatePresence>
          {activeIndex !== null && (
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.4 }}
              className="fixed right-[5vw] top-1/2 -translate-y-1/2 w-[30vw] h-[40vh] z-30 pointer-events-none overflow-hidden shadow-2xl"
            >
              <Image
                src={projects[activeIndex].image}
                alt={projects[activeIndex].title}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-4 left-4 font-mono text-[9px] uppercase tracking-[0.3em] text-white/70">
                {projects[activeIndex].category}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Numbered project list */}
        <div className="flex flex-col">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: idx * 0.08 }}
              onMouseEnter={() => setActiveIndex(idx)}
              onMouseLeave={() => setActiveIndex(null)}
              className="group relative flex items-center justify-between py-8 md:py-10 border-b border-white/5 hover:border-white/10 transition-all duration-300 cursor-none"
              data-cursor="view"
              data-cursor-text="VIEW"
            >
              {/* Hover bg accent */}
              <div className="absolute inset-0 bg-white/[0.015] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

              {/* Left: Number + Title */}
              <div className="flex items-baseline gap-6 md:gap-10 relative z-10">
                <span
                  className="font-serif text-white/10 group-hover:text-primary/20 transition-colors duration-500 select-none leading-none"
                  style={{ fontSize: "clamp(3rem, 7vw, 7rem)", fontWeight: 900 }}
                >
                  {project.no}
                </span>
                <div className="flex flex-col gap-1">
                  <h3
                    className="font-serif text-white group-hover:text-primary-light transition-colors duration-300 leading-tight"
                    style={{ fontSize: "clamp(1.3rem, 2.5vw, 2.2rem)", fontWeight: 600 }}
                  >
                    {project.title}
                  </h3>
                  <p className="text-white/30 text-xs md:text-sm leading-relaxed max-w-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-light">
                    {project.desc}
                  </p>
                </div>
              </div>

              {/* Right: Meta */}
              <div className="hidden md:flex items-center gap-8 relative z-10 shrink-0">
                <span className="flex items-center gap-1.5 text-[9px] uppercase tracking-[0.3em] text-white/30 font-mono">
                  <MapPin size={9} className="text-primary/50" />
                  {project.location}
                </span>
                <span className="text-[9px] uppercase tracking-[0.3em] text-white/20 font-mono">{project.year}</span>
                <span className="text-[9px] uppercase tracking-[0.3em] text-white/30 font-mono border border-white/10 px-3 py-1">
                  {project.category}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex items-center gap-4 pt-10"
        >
          <a
            href="#contact"
            className="group flex items-center gap-3 text-[11px] uppercase tracking-[0.25em] text-white/40 hover:text-white transition-colors duration-300"
          >
            <span className="h-px w-8 bg-white/20 group-hover:w-16 group-hover:bg-primary-light transition-all duration-500" />
            Start Your Project
          </a>
        </motion.div>
      </div>
    </section>
  );
}
