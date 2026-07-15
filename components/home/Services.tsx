"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

interface ServicePanel {
  no: string;
  tag: string;
  title: string;
  description: string;
  image: string;
  details: string[];
}

const services: ServicePanel[] = [
  {
    no: "01",
    tag: "Kitchens",
    title: "German & Italian Modular Kitchens",
    description:
      "Custom modular kitchens designed for high ergonomics. Moisture-resistant carcasses, high-gloss acrylic shutters, and premium German motion hardware.",
    image: "/images/project-kitchen.png",
    details: ["Island, Parallel & L-Shaped Layouts", "Hafele & Hettich tandem boxes", "Anti-fingerprint matte surfaces"],
  },
  {
    no: "02",
    tag: "Residential",
    title: "Bespoke Residential Interiors",
    description:
      "Immersive interior solutions for luxury villas and penthouse layouts. Signature false ceiling aesthetics, custom wooden panelings, and tailored lighting.",
    image: "/images/hero-bg.png",
    details: ["Tailored modular wardrobes", "Custom false ceilings", "Teak veneer wall paneling"],
  },
  {
    no: "03",
    tag: "Commercial",
    title: "High-Performance Office Designs",
    description:
      "Ergonomic executive suites, co-working desk grids, corporate reception lounges, and premium conference spaces.",
    image: "/images/project-office.png",
    details: ["Acoustic wall wood panels", "Executive boardroom fittings", "Smart office cable trays"],
  },
  {
    no: "04",
    tag: "Planning",
    title: "Vaastu-Compliant 3D Blueprinting",
    description:
      "State-of-the-art architectural drafting, vaastu-optimized layouts, structural designs, and photographic 3D walkthrough rendering.",
    image: "/images/project-blueprint.png",
    details: ["Vaastu-compliant floor layouts", "3D exterior animations", "Structural load blueprints"],
  },
  {
    no: "05",
    tag: "Construction",
    title: "Turnkey Construction",
    description:
      "Premium villa construction from ground excavation to keys handover. Sourcing finest cement, sand, steel, and managing professional labor.",
    image: "/images/project-construction.png",
    details: ["Premium structural concrete", "Strict supervisor site audits", "Integrated plumbing & wiring"],
  },
  {
    no: "06",
    tag: "Promoters",
    title: "Joint-Venture Property Promoters",
    description:
      "Joint developments and promoter listings of DTCP/TNRERA approved residential layouts in Trichy and Pudukkottai.",
    image: "/images/project-villa.png",
    details: ["DTCP approved layouts", "Joint-venture development audits", "Clear title deeds verification"],
  },
];

function ServiceRow({ service, idx }: { service: ServicePanel; idx: number }) {
  const [hovered, setHovered] = useState(false);
  const isEven = idx % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`group grid grid-cols-1 md:grid-cols-2 border-b border-white/5 hover:border-white/10 transition-colors duration-500 ${
        isEven ? "" : "md:[direction:rtl]"
      }`}
    >
      {/* Image panel */}
      <div
        className="relative overflow-hidden aspect-[16/10] md:aspect-auto md:min-h-[420px]"
        style={{ direction: "ltr" }}
        data-cursor="view"
        data-cursor-text={service.tag.toUpperCase()}
      >
        <Image
          src={service.image}
          alt={service.title}
          fill
          className="object-cover transition-all duration-700"
          style={{
            filter: hovered ? "brightness(0.5) saturate(0.8)" : "brightness(0.55)",
            transform: hovered ? "scale(1.04)" : "scale(1)",
          }}
        />
        {/* Thin violet accent */}
        <div
          className={`absolute top-0 bottom-0 w-[3px] bg-gradient-to-b from-transparent via-primary/50 to-transparent transition-opacity duration-500 ${
            hovered ? "opacity-100" : "opacity-0"
          } ${isEven ? "left-0" : "right-0"}`}
        />
        {/* Number overlay */}
        <div className="absolute bottom-6 right-6 font-serif text-white/10 select-none leading-none"
          style={{ fontSize: "clamp(4rem, 8vw, 7rem)", fontWeight: 900 }}>
          {service.no}
        </div>
      </div>

      {/* Text panel */}
      <div
        className="flex flex-col justify-center gap-6 px-8 md:px-16 xl:px-20 py-12 md:py-16"
        style={{ direction: "ltr" }}
      >
        {/* Tag */}
        <span className="font-mono text-[9px] uppercase tracking-[0.45em] text-primary-light/70 border border-primary/20 px-3 py-1.5 w-fit">
          {service.tag}
        </span>

        {/* Title */}
        <h3
          className="font-serif text-white leading-tight transition-colors duration-300"
          style={{
            fontSize: "clamp(1.6rem, 2.8vw, 2.5rem)",
            fontWeight: 600,
            color: hovered ? "#c084fc" : "#ffffff",
          }}
        >
          {service.title}
        </h3>

        {/* Description */}
        <p className="text-white/40 text-sm leading-relaxed font-light max-w-md">{service.description}</p>

        {/* Details */}
        <ul className="flex flex-col gap-2 border-t border-white/5 pt-5">
          {service.details.map((d, i) => (
            <li key={i} className="flex items-center gap-3 text-[10px] uppercase tracking-[0.2em] text-white/30 font-mono">
              <span className="w-5 h-px bg-primary/40 shrink-0" />
              {d}
            </li>
          ))}
        </ul>

        {/* Arrow link */}
        <div className="flex items-center gap-2 pt-2">
          <motion.span
            className="h-px bg-white/15"
            animate={{ width: hovered ? "3rem" : "1.5rem" }}
            transition={{ duration: 0.4 }}
          />
          <ArrowUpRight
            size={15}
            className="transition-colors duration-300"
            style={{ color: hovered ? "#9d4edd" : "rgba(255,255,255,0.2)" }}
          />
        </div>
      </div>
    </motion.div>
  );
}

export default function Services() {
  return (
    <section id="services" className="relative bg-[#080808]">
      {/* Section label strip */}
      <div className="flex items-center justify-between px-8 md:px-16 xl:px-24 py-5 border-y border-white/5">
        <span className="text-[9px] font-mono uppercase tracking-[0.45em] text-white/30">02 / Services</span>
        <span className="text-[9px] font-mono uppercase tracking-[0.45em] text-white/30">Curated Capabilities</span>
      </div>

      {/* Section heading */}
      <div className="px-8 md:px-16 xl:px-24 py-16 md:py-24">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="font-serif text-white leading-none"
          style={{ fontSize: "clamp(2.5rem, 6vw, 5.5rem)", fontWeight: 200 }}
        >
          Curated{" "}
          <span className="italic font-black text-primary-light">Capabilities</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-white/30 text-sm mt-5 leading-relaxed max-w-md font-light"
        >
          We reject the template approach. Each service is a tailored capability crafted for Pudukkottai and Trichy's finest properties.
        </motion.p>
      </div>

      {/* Alternating service rows */}
      <div className="flex flex-col border-t border-white/5">
        {services.map((service, idx) => (
          <ServiceRow key={idx} service={service} idx={idx} />
        ))}
      </div>
    </section>
  );
}
