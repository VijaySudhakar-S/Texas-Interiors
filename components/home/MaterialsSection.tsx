"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const materials = [
  {
    name: "Wood",
    subtitle: "Teak & Walnut Veneers",
    desc: "PU-lacquered natural veneer slices for wall panels and TV backdrops.",
    image: "/images/material-wood.png",
  },
  {
    name: "Stone",
    subtitle: "Granite & Slate",
    desc: "Premium dark granite and slate surfaces for flooring and feature walls.",
    image: "/images/material-stone.png",
  },
  {
    name: "Marble",
    subtitle: "Calacatta & Carrara",
    desc: "Polished Italian marble slabs with luxury gold and grey veining.",
    image: "/images/material-marble.png",
  },
  {
    name: "Metal",
    subtitle: "Brushed & Anodized",
    desc: "Rose gold Gola profiles and brushed steel Blum/Hettich hardware.",
    image: "/images/material-metal.png",
  },
  {
    name: "Glass",
    subtitle: "Frosted & Tempered",
    desc: "Backlit frosted glass partitions and tempered architectural panels.",
    image: "/images/material-glass.png",
  },
  {
    name: "Fabrics",
    subtitle: "Velvet & Linen",
    desc: "Premium upholstery fabrics in velvet, linen, and textured weaves.",
    image: "/images/material-fabrics.png",
  },
];

export default function MaterialsSection() {
  return (
    <section className="bg-[#080808] border-t border-white/[0.06]">

      {/* ── HEADER ───────────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 xl:px-24 pt-20 md:pt-28 pb-12 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3 mb-5"
          >
            <span className="h-px w-6 bg-white/20" />
            <span
              className="text-[9px] uppercase tracking-[0.45em] text-white/35"
              style={{ fontFamily: "var(--font-dm-sans)" }}
            >
              What We Use
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-white leading-none"
            style={{
              fontFamily: "var(--font-cormorant)",
              fontSize: "clamp(2.5rem, 5vw, 4.5rem)",
              fontWeight: 300,
              letterSpacing: "-0.01em",
            }}
          >
            Materials That{" "}
            <em style={{ fontStyle: "italic", fontWeight: 700, color: "#9d4edd" }}>
              Define Excellence
            </em>
          </motion.h2>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-white/35 text-sm leading-relaxed max-w-xs md:text-right"
          style={{ fontFamily: "var(--font-dm-sans)", fontWeight: 300 }}
        >
          We use carefully selected materials and finishes that combine beauty, durability and timeless appeal.
        </motion.p>
      </div>

      {/* ── 6-CARD MATERIAL GRID ─────────────────────── */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 xl:px-24 pb-20 md:pb-28">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
          {materials.map((mat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: i * 0.08 }}
              className="group relative overflow-hidden cursor-default"
              style={{ aspectRatio: "4/3" }}
            >
              {/* Material photo */}
              <Image
                src={mat.image}
                alt={mat.name}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-107"
                style={{ filter: "brightness(0.75)", transitionTimingFunction: "cubic-bezier(0.16,1,0.3,1)" }}
              />

              {/* Always-on dark gradient from bottom */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

              {/* Hover: violet left accent bar */}
              <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-primary opacity-0 group-hover:opacity-100 transition-opacity duration-400" />

              {/* Content at bottom */}
              <div className="absolute bottom-0 left-0 right-0 p-5 flex flex-col gap-1">
                {/* Category badge */}
                <span
                  className="text-[8px] uppercase tracking-[0.3em] text-primary-light/80 mb-1"
                  style={{ fontFamily: "var(--font-dm-sans)" }}
                >
                  {mat.subtitle}
                </span>

                {/* Name */}
                <h3
                  className="text-white leading-none group-hover:text-primary-light transition-colors duration-300"
                  style={{
                    fontFamily: "var(--font-cormorant)",
                    fontSize: "clamp(1.3rem, 2.5vw, 2rem)",
                    fontWeight: 600,
                  }}
                >
                  {mat.name}
                </h3>

                {/* Description — slides in on hover */}
                <p
                  className="text-white/0 group-hover:text-white/60 text-xs leading-relaxed transition-all duration-400 max-h-0 group-hover:max-h-16 overflow-hidden mt-1"
                  style={{ fontFamily: "var(--font-dm-sans)", fontWeight: 300 }}
                >
                  {mat.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ── BOTTOM EDITORIAL STRIP ───────────────────── */}
      <div className="border-t border-white/[0.06] bg-[#F5F0E8] py-10 px-6 md:px-12 xl:px-24">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <p
            className="text-[#1a1a1a] leading-snug"
            style={{
              fontFamily: "var(--font-cormorant)",
              fontSize: "clamp(1.4rem, 2.5vw, 2rem)",
              fontWeight: 400,
              fontStyle: "italic",
            }}
          >
            &ldquo;Quality materials.{" "}
            <strong style={{ fontStyle: "normal", fontWeight: 600 }}>Finely crafted finishes.</strong>&rdquo;
          </p>
          <div className="flex flex-col gap-1 md:text-right">
            <span className="text-[#4a4040] text-xs" style={{ fontFamily: "var(--font-dm-sans)", fontWeight: 300 }}>
              BWP Gurjan Plywood (IS:710) &nbsp;·&nbsp; Senosan Austrian Acrylic
            </span>
            <span className="text-[#4a4040] text-xs" style={{ fontFamily: "var(--font-dm-sans)", fontWeight: 300 }}>
              Hafele &nbsp;·&nbsp; Blum &nbsp;·&nbsp; Hettich Hardware
            </span>
            <Link
              href="/services"
              className="group inline-flex items-center gap-1.5 text-[9px] uppercase tracking-[0.25em] text-[#5A189A] hover:text-primary mt-2 w-fit md:ml-auto transition-colors"
              style={{ fontFamily: "var(--font-dm-sans)" }}
            >
              Explore All Services
              <ArrowUpRight size={11} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </div>
        </div>
      </div>

    </section>
  );
}
