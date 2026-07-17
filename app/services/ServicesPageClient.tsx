"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

interface Service {
  no: string;
  tag: string;
  title: string;
  desc: string;
  image: string;
  details: string[];
  bg: string;
}

const services: Service[] = [
  {
    no: "01",
    tag: "Kitchens",
    title: "German & Italian\nModular Kitchens",
    desc: "Custom modular kitchens designed for high ergonomics. Moisture-resistant carcasses, high-gloss acrylic shutters, and premium German motion hardware.",
    image: "/images/project-kitchen.avif",
    details: ["Island, Parallel & L-Shaped Layouts", "Hafele & Hettich tandem boxes", "Anti-fingerprint matte surfaces"],
    bg: "dark",
  },
  {
    no: "02",
    tag: "Residential",
    title: "Bespoke Home\nInteriors",
    desc: "Immersive interior solutions for luxury villas and apartments. Signature false ceiling aesthetics, custom wood panelings, and tailored lighting.",
    image: "/images/hero-bg.avif",
    details: ["Tailored modular wardrobes", "Custom false ceilings", "Teak veneer wall paneling"],
    bg: "cream",
  },
  {
    no: "03",
    tag: "Commercial",
    title: "Office & Commercial\nDesign",
    desc: "Ergonomic executive suites, co-working desk grids, corporate reception lounges, and premium conference rooms.",
    image: "/images/project-office.avif",
    details: ["Acoustic wall wood panels", "Executive boardroom fittings", "Smart cable management"],
    bg: "dark",
  },
  {
    no: "04",
    tag: "Planning",
    title: "Vaastu-Compliant\n3D Blueprinting",
    desc: "Architectural drafting, vaastu-optimized layouts, structural designs, and photographic 3D walkthrough rendering.",
    image: "/images/project-blueprint.avif",
    details: ["Vaastu-compliant floor layouts", "3D exterior animations", "Structural load blueprints"],
    bg: "cream",
  },
  {
    no: "05",
    tag: "Construction",
    title: "Turnkey Villa\nConstruction",
    desc: "Premium construction from ground excavation to key handover. Sourcing finest materials and managing professional labor.",
    image: "/images/project-construction.avif",
    details: ["Premium structural concrete", "Strict site supervisor audits", "Integrated plumbing & wiring"],
    bg: "dark",
  },
  {
    no: "06",
    tag: "Promoters",
    title: "Joint-Venture\nProperty Promoters",
    desc: "Joint developments and promoter listings of DTCP/TNRERA approved residential layouts in Trichy and Pudukkottai.",
    image: "/images/project-villa.avif",
    details: ["DTCP approved layouts", "Joint-venture development", "Clear title deed verification"],
    bg: "cream",
  },
];

function ServiceBlock({
  service,
  idx,
}: {
  service: Service;
  idx: number;
}) {
  const [hovered, setHovered] = useState(false);
  const isDark = service.bg === "dark";
  const isEven = idx % 2 === 0;

  return (
    <section
      className={`${isDark ? "bg-[#080808] text-white" : "bg-[#F5F0E8] text-[#1a1a1a]"}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div
        className={`max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 min-h-[60vh] ${
          !isEven ? "lg:flex-row-reverse" : ""
        }`}
      >
        {/* Image */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className={`relative overflow-hidden aspect-[16/10] lg:aspect-auto ${
            !isEven ? "lg:order-2" : ""
          }`}
        >
          <Image
            src={service.image}
            alt={service.title}
            fill
            className="object-cover transition-all duration-700"
            style={{
              filter: hovered ? "brightness(0.65) saturate(0.9)" : "brightness(0.7)",
              transform: hovered ? "scale(1.04)" : "scale(1)",
            }}
          />
          {/* Number overlay */}
          <div
            className="absolute bottom-6 right-6 select-none leading-none text-white/10"
            style={{
              fontFamily: "var(--font-cormorant)",
              fontSize: "clamp(5rem, 10vw, 9rem)",
              fontWeight: 700,
            }}
          >
            {service.no}
          </div>
          {/* Tag on image */}
          <div className="absolute top-6 left-6">
            <span
              className="bg-primary text-white text-[8px] uppercase tracking-[0.3em] px-3 py-1.5"
              style={{ fontFamily: "var(--font-dm-sans)" }}
            >
              {service.tag}
            </span>
          </div>
        </motion.div>

        {/* Text */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className={`flex flex-col justify-center gap-6 p-8 md:p-12 xl:p-16 ${
            !isEven ? "lg:order-1" : ""
          }`}
        >
          <h2
            className={`leading-tight ${isDark ? "text-white" : "text-[#1a1a1a]"}`}
            style={{
              fontFamily: "var(--font-cormorant)",
              fontSize: "clamp(1.8rem, 3vw, 2.8rem)",
              fontWeight: 600,
              whiteSpace: "pre-line",
              color: hovered ? (isDark ? "#c084fc" : "#5A189A") : undefined,
              transition: "color 0.3s ease",
            }}
          >
            {service.title}
          </h2>
          <p
            className={`text-sm leading-relaxed max-w-sm ${isDark ? "text-white/40" : "text-[#4a4040]"}`}
            style={{ fontFamily: "var(--font-dm-sans)", fontWeight: 300 }}
          >
            {service.desc}
          </p>

          {/* Details */}
          <ul className={`flex flex-col gap-2 border-t pt-5 ${isDark ? "border-white/5" : "border-[#1a1a1a]/10"}`}>
            {service.details.map((d, i) => (
              <li
                key={i}
                className={`flex items-center gap-3 text-[10px] uppercase tracking-[0.2em] ${isDark ? "text-white/30" : "text-[#1a1a1a]/35"}`}
                style={{ fontFamily: "var(--font-dm-sans)" }}
              >
                <span className="w-4 h-px bg-primary/50 shrink-0" />
                {d}
              </li>
            ))}
          </ul>

          <Link
            href="/contact"
            className={`group flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] transition-colors duration-300 w-fit mt-2 ${
              isDark ? "text-white/30 hover:text-white" : "text-[#1a1a1a]/35 hover:text-primary"
            }`}
            style={{ fontFamily: "var(--font-dm-sans)" }}
          >
            <span className="h-px w-6 bg-current group-hover:w-12 transition-all duration-400" />
            Get a Quote
            <ArrowUpRight size={12} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

export default function ServicesPageClient() {
  return (
    <>
      {/* Page Hero */}
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
              What We Offer
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
            Our <em style={{ fontStyle: "italic", fontWeight: 700, color: "#9d4edd" }}>Services</em>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-white/35 text-sm mt-6 max-w-md leading-relaxed"
            style={{ fontFamily: "var(--font-dm-sans)", fontWeight: 300 }}
          >
            Six specialised capabilities. One seamless partner. From concept to completion.
          </motion.p>
        </div>
      </section>

      {/* Service Blocks — alternating dark / cream */}
      {services.map((service: Service, idx: number) => (
        <ServiceBlock key={idx} service={service} idx={idx} />
      ))}

      {/* Bottom CTA */}
      <section
        className="relative py-20 md:py-24 px-6 md:px-12 xl:px-24 overflow-hidden"
        style={{ background: "linear-gradient(135deg, #3c096c 0%, #160a28 60%, #5A189A 100%)" }}
      >
        <div
          className="absolute inset-0 opacity-[0.1] pointer-events-none"
          style={{ backgroundImage: "url('/images/pattern-violet.avif')", backgroundSize: "cover" }}
        />
        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <h2
            className="text-white mb-4 leading-none"
            style={{ fontFamily: "var(--font-cormorant)", fontSize: "clamp(2.5rem, 5.5vw, 5rem)", fontWeight: 300 }}
          >
            Let's build <em style={{ fontStyle: "italic", fontWeight: 700 }}>your vision</em>
          </h2>
          <p className="text-white/40 text-sm mb-8 max-w-md mx-auto"
            style={{ fontFamily: "var(--font-dm-sans)", fontWeight: 300 }}>
            Free site visit. 3D design within days. Fixed transparent pricing.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-white text-primary hover:bg-[#F5F0E8] transition-all duration-300"
            style={{
              fontFamily: "var(--font-dm-sans)",
              fontSize: "10px",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              fontWeight: 600,
              padding: "16px 40px",
            }}
          >
            Book Free Consultation
            <ArrowUpRight size={13} />
          </Link>
        </div>
      </section>
    </>
  );
}
