"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const services = [
  {
    no: "01",
    tag: "Kitchens",
    title: "Modular Kitchens",
    desc: "German & Italian systems. Hafele, Hettich, Blum hardware. Island to L-shape.",
    image: "/images/project-kitchen.png",
    href: "/services",
  },
  {
    no: "02",
    tag: "Residential",
    title: "Home Interiors",
    desc: "Luxury villa interiors. Custom wardrobes, false ceilings, teak paneling.",
    image: "/images/hero-bg.png",
    href: "/services",
  },
  {
    no: "03",
    tag: "Commercial",
    title: "Office & Commercial",
    desc: "Boardrooms, reception lounges, co-working spaces, acoustic panels.",
    image: "/images/project-office.png",
    href: "/services",
  },
];

export default function ServicesPreview() {
  return (
    <section className="relative bg-[#F5F0E8] py-20 md:py-28 px-6 md:px-12 xl:px-24">
      <div
        className="absolute top-0 left-0 right-0 h-25 pointer-events-none"
        style={{ background: "linear-gradient(to bottom, #000000ff, transparent)" }}
      />

      {/* Label + Heading */}
      <div className="max-w-7xl mx-auto mb-16">
        <div className="flex items-center gap-4 mb-6">
          <span className="h-px w-8 bg-[#1a1a1a]/20" />
          <span className="text-[9px] uppercase tracking-[0.45em] text-[#1a1a1a]/40"
            style={{ fontFamily: "var(--font-dm-sans)" }}>
            What We Do
          </span>
        </div>
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-[#1a1a1a] leading-none"
            style={{
              fontFamily: "var(--font-cormorant)",
              fontSize: "clamp(2.4rem, 5.5vw, 5rem)",
              fontWeight: 400,
              letterSpacing: "-0.01em",
            }}
          >
            Our <em style={{ fontStyle: "italic", color: "#5A189A" }}>Services</em>
          </motion.h2>
          <Link
            href="/services"
            className="group flex items-center gap-2 text-[#1a1a1a]/50 hover:text-[#1a1a1a] transition-colors text-[10px] uppercase tracking-[0.2em] shrink-0"
            style={{ fontFamily: "var(--font-dm-sans)" }}
          >
            View All Services
            <ArrowUpRight size={13} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
        </div>
      </div>

      {/* 3 Cards */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-px bg-[#1a1a1a]/10">
        {services.map((s: typeof services[0], i: number) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, delay: i * 0.1 }}
            className="group bg-[#F5F0E8] flex flex-col overflow-hidden"
          >
            {/* Image */}
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src={s.image}
                alt={s.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                style={{ filter: "brightness(0.85)" }}
              />
              {/* Service tag overlay */}
              <div className="absolute bottom-4 left-4">
                <span className="bg-[#5A189A] text-white text-[8px] uppercase tracking-[0.3em] px-3 py-1"
                  style={{ fontFamily: "var(--font-dm-sans)" }}>
                  {s.tag}
                </span>
              </div>
            </div>

            {/* Text */}
            <div className="p-6 flex flex-col gap-3 border-t border-[#1a1a1a]/10 flex-1">
              <h3
                className="text-[#1a1a1a] leading-tight group-hover:text-primary transition-colors duration-300"
                style={{
                  fontFamily: "var(--font-cormorant)",
                  fontSize: "clamp(1.3rem, 2vw, 1.7rem)",
                  fontWeight: 600,
                }}
              >
                {s.title}
              </h3>
              <p className="text-[#4a4040] text-sm leading-relaxed"
                style={{ fontFamily: "var(--font-dm-sans)", fontWeight: 300 }}>
                {s.desc}
              </p>
              <Link
                href={s.href}
                className="mt-auto flex items-center gap-2 text-[9px] uppercase tracking-[0.25em] text-[#1a1a1a]/40 hover:text-primary transition-colors duration-300 group/link w-fit"
                style={{ fontFamily: "var(--font-dm-sans)" }}
              >
                <span className="h-px w-6 bg-current group-hover/link:w-10 transition-all duration-400" />
                Learn More
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
