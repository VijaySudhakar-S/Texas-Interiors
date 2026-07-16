"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "Velvet Oasis Kitchen",
    category: "Modular Kitchen",
    location: "Trichy",
    image: "/images/project-kitchen.png",
  },
  {
    title: "Monarch Executive Suite",
    category: "Commercial Office",
    location: "Pudukkottai",
    image: "/images/project-office.png",
  },
  {
    title: "Zenith Residence Villa",
    category: "Residential",
    location: "Trichy",
    image: "/images/project-villa.png",
  },
  {
    title: "Obsidian Luxury Lounge",
    category: "Residential Design",
    location: "Pudukkottai",
    image: "/images/hero-bg.png",
  },
];

export default function ProjectsPreview() {
  return (
    <section className="bg-[#080808] py-20 md:py-28 overflow-hidden">
      
      <div className="px-6 md:px-12 xl:px-24 mb-12 max-w-7xl mx-auto">
        <div className="flex items-center gap-4 mb-6">
          <span className="h-px w-8 bg-white/15" />
          <span className="text-[9px] uppercase tracking-[0.45em] text-white/30"
            style={{ fontFamily: "var(--font-dm-sans)" }}>
            Our Work
          </span>
        </div>
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-white leading-none"
            style={{
              fontFamily: "var(--font-cormorant)",
              fontSize: "clamp(2.4rem, 5.5vw, 5rem)",
              fontWeight: 400,
              letterSpacing: "-0.01em",
            }}
          >
            Recent <em style={{ fontStyle: "italic", color: "#9d4edd" }}>Projects</em>
          </motion.h2>
          <Link
            href="/projects"
            className="group flex items-center gap-2 text-white/30 hover:text-white transition-colors text-[10px] uppercase tracking-[0.2em] shrink-0"
            style={{ fontFamily: "var(--font-dm-sans)" }}
          >
            View All Projects
            <ArrowUpRight size={13} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
        </div>
      </div>

      {/* Horizontal scroll strip — like For·Living reference */}
      <div className="flex gap-4 px-6 md:px-12 xl:px-24 overflow-x-auto pb-4 scrollbar-none">
        {projects.map((p: typeof projects[0], i: number) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, delay: i * 0.1 }}
            className="group relative flex-none w-[72vw] sm:w-[45vw] md:w-[32vw] lg:w-[26vw] aspect-[3/4] overflow-hidden bg-[#111]"
          >
            <Image
              src={p.image}
              alt={p.title}
              fill
              className="object-cover transition-all duration-700 group-hover:scale-105"
              style={{ filter: "brightness(0.7)" }}
            />
            {/* Gradient overlay bottom */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

            {/* Info */}
            <div className="absolute bottom-0 left-0 right-0 p-5">
              <span className="text-[8px] uppercase tracking-[0.3em] text-primary-light/80 mb-2 block"
                style={{ fontFamily: "var(--font-dm-sans)" }}>
                {p.category}
              </span>
              <h3
                className="text-white leading-snug"
                style={{
                  fontFamily: "var(--font-cormorant)",
                  fontSize: "1.2rem",
                  fontWeight: 500,
                }}
              >
                {p.title}
              </h3>
              <span className="text-white/40 text-[9px] uppercase tracking-[0.25em] mt-1 block"
                style={{ fontFamily: "var(--font-dm-sans)" }}>
                {p.location}
              </span>
            </div>

            {/* Hover: violet left accent */}
            <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-primary opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
