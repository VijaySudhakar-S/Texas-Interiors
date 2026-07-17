"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const values = [
  { no: "01", title: "Design First", desc: "Every project begins with a 3D concept before a single nail is driven." },
  { no: "02", title: "Honest Pricing", desc: "Itemised, pre-approved bills. No surprises, no hidden charges, ever." },
  { no: "03", title: "On-Time Delivery", desc: "Residential interiors completed in 40–45 days, on schedule." },
  { no: "04", title: "Premium Materials", desc: "Only Hafele, Hettich, Blum hardware. Moisture-resistant carcasses." },
  { no: "05", title: "Full Supervision", desc: "Dedicated site engineer at every stage. Complete accountability." },
  { no: "06", title: "Lifetime Support", desc: "Post-handover service and alignment assistance at no extra cost." },
];

const stats = [
  { value: "15+", label: "Years of Experience" },
  { value: "450+", label: "Projects Delivered" },
  { value: "2", label: "Office Locations" },
  { value: "100%", label: "Client Satisfaction" },
];

const highlights = [
  "Bespoke Concepts",
  "German & Italian Materials",
  "Vaastu-Compliant Design",
  "Complete Turnkey",
  "Site Supervision",
  "3D Walkthroughs",
];

export default function AboutPageClient() {
  return (
    <>
      {/* ── PAGE HERO — Luxury Dark ──────────────────────────── */}
      <section className="relative bg-[#080808] pt-40 pb-28 md:pt-52 md:pb-40 px-6 md:px-12 xl:px-24 overflow-hidden border-b border-white/5">
        {/* Subtle pattern grid background overlay */}
        <div
          className="absolute inset-0 opacity-[0.06] pointer-events-none"
          style={{
            backgroundImage: "url('/images/pattern-dark.avif')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        
        {/* Cinematic gradient glowing orbs */}
        <div className="absolute top-[-10%] right-[10%] w-[500px] h-[500px] rounded-full bg-[#5A189A]/10 blur-[130px] pointer-events-none" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] rounded-full bg-[#7B2CBF]/5 blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col gap-10">
            {/* Category / Sub-eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="flex items-center gap-4"
            >
              <span className="h-px w-8 bg-white/20" />
              <span className="text-[10px] uppercase tracking-[0.45em] text-white/50 font-medium"
                style={{ fontFamily: "var(--font-dm-sans)" }}>
                Texas Story &amp; Leadership
              </span>
            </motion.div>

            {/* Content layout grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-end">
              {/* Heading */}
              <div className="lg:col-span-8">
                <motion.h1
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                  className="text-white leading-[1.05] tracking-tight"
                  style={{
                    fontFamily: "var(--font-cormorant)",
                    fontSize: "clamp(2.8rem, 6.2vw, 5.8rem)",
                    fontWeight: 300,
                    letterSpacing: "-0.02em",
                  }}
                >
                  Directed by design.<br />
                  Defined by <em style={{ fontStyle: "italic", fontWeight: 500, color: "#9d4edd" }}>craftsmanship.</em>
                </motion.h1>
              </div>

              {/* Subtext Paragraph */}
              <div className="lg:col-span-4 lg:pb-3">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.9, delay: 0.2 }}
                  className="flex flex-col gap-6"
                >
                  <p className="text-white/60 text-sm md:text-base leading-relaxed font-light"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    Texas Interior &amp; Promoters has been building luxury modular kitchens, penthouses, and turnkey commercial structures since 2009. We control the complete process from architectural rendering to final key handover.
                  </p>
                  <div className="h-px w-full bg-white/10" />
                  <div className="flex gap-8">
                    <div>
                      <div className="text-xl font-medium text-white" style={{ fontFamily: "var(--font-cormorant)" }}>15+</div>
                      <div className="text-[9px] uppercase tracking-widest text-white/40">Years</div>
                    </div>
                    <div>
                      <div className="text-xl font-medium text-white" style={{ fontFamily: "var(--font-cormorant)" }}>450+</div>
                      <div className="text-[9px] uppercase tracking-widest text-white/40">Projects</div>
                    </div>
                    <div>
                      <div className="text-xl font-medium text-white" style={{ fontFamily: "var(--font-cormorant)" }}>100%</div>
                      <div className="text-[9px] uppercase tracking-widest text-white/40">Quality</div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── STORY — Cream ──────────────────────────────── */}
      <section className="bg-[#F5F0E8] py-20 md:py-28 px-6 md:px-12 xl:px-24">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="relative aspect-[4/5] overflow-hidden"
          >
            <Image
              src="/images/project-villa.avif"
              alt="Texas Interiors luxury residential project"
              fill
              className="object-cover"
              style={{ filter: "brightness(0.9)" }}
            />
            {/* Violet accent */}
            <div className="absolute top-0 left-0 w-[3px] h-full bg-gradient-to-b from-primary via-primary-light to-transparent" />
          </motion.div>

          {/* Text */}
          <div className="flex flex-col gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-[9px] uppercase tracking-[0.45em] text-[#1a1a1a]/40 flex items-center gap-3 mb-6"
                style={{ fontFamily: "var(--font-dm-sans)" }}>
                <span className="h-px w-6 bg-[#1a1a1a]/20" />
                Our Story
              </span>
              <h2
                className="text-[#1a1a1a] leading-tight mb-4"
                style={{
                  fontFamily: "var(--font-cormorant)",
                  fontSize: "clamp(2rem, 4vw, 3.5rem)",
                  fontWeight: 500,
                }}
              >
                We don't decorate.
                <br />
                <em style={{ fontStyle: "italic", color: "#5A189A" }}>We architect lives.</em>
              </h2>
              <p className="text-[#4a4040] text-sm leading-relaxed mb-4"
                style={{ fontFamily: "var(--font-dm-sans)", fontWeight: 300 }}>
                Founded in 2009, we began with a single vision: to bring European design standards to Tamil Nadu. Today, from our offices in Pudukkottai and Trichy, we deliver luxury modular kitchens, complete home interiors, high-performance commercial spaces, and full turnkey villa construction.
              </p>
              <p className="text-[#4a4040] text-sm leading-relaxed"
                style={{ fontFamily: "var(--font-dm-sans)", fontWeight: 300 }}>
                Director <strong className="text-[#1a1a1a] font-medium">Jeevanantham BE, MDIAD</strong> personally oversees each project — from concept to key handover.
              </p>
            </motion.div>

            {/* Highlights */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="flex flex-wrap gap-3 border-t border-[#1a1a1a]/10 pt-6"
            >
              {highlights.map((h: string, i: number) => (
                <span
                  key={i}
                  className="text-[9px] uppercase tracking-[0.2em] text-[#5A189A] border border-[#5A189A]/25 px-3 py-1.5"
                  style={{ fontFamily: "var(--font-dm-sans)" }}
                >
                  {h}
                </span>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── STATS — Dark ──────────────────────────────── */}
      <section className="bg-[#080808] py-16 md:py-20 px-6 md:px-12 xl:px-24 border-y border-white/5">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-0 divide-x divide-white/5">
          {stats.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.1 }}
              className="px-8 py-6 flex flex-col gap-2"
            >
              <span
                className="text-white leading-none"
                style={{ fontFamily: "var(--font-cormorant)", fontSize: "clamp(3rem, 6vw, 5rem)", fontWeight: 300 }}
              >
                {s.value}
              </span>
              <span className="text-white/30 text-[9px] uppercase tracking-[0.3em]"
                style={{ fontFamily: "var(--font-dm-sans)" }}>
                {s.label}
              </span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── VALUES — Violet Tint ───────────────────────── */}
      <section className="bg-[#160a28] py-20 md:py-28 px-6 md:px-12 xl:px-24">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <span className="text-[9px] uppercase tracking-[0.45em] text-white/30 flex items-center gap-3 mb-6"
              style={{ fontFamily: "var(--font-dm-sans)" }}>
              <span className="h-px w-6 bg-white/15" />
              Our Values
            </span>
            <h2
              className="text-white leading-none"
              style={{
                fontFamily: "var(--font-cormorant)",
                fontSize: "clamp(2.4rem, 5vw, 4.5rem)",
                fontWeight: 300,
              }}
            >
              The Texas <em style={{ fontStyle: "italic", color: "#9d4edd", fontWeight: 700 }}>Difference</em>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-0 border border-white/5">
            {values.map((v: typeof values[0], i: number) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: i * 0.07 }}
                className="group p-8 md:p-10 border-b border-r border-white/5 flex flex-col gap-4 hover:bg-primary/[0.04] transition-colors duration-300"
              >
                <span
                  className="leading-none text-white/8 select-none group-hover:text-primary/15 transition-colors"
                  style={{
                    fontFamily: "var(--font-cormorant)",
                    fontSize: "clamp(3.5rem, 7vw, 6rem)",
                    fontWeight: 700,
                    WebkitTextStroke: "1px rgba(157,78,221,0.15)",
                    color: "transparent",
                  }}
                >
                  {v.no}
                </span>
                <h3
                  className="text-white group-hover:text-primary-light transition-colors duration-300"
                  style={{ fontFamily: "var(--font-cormorant)", fontSize: "1.3rem", fontWeight: 600 }}
                >
                  {v.title}
                </h3>
                <p className="text-white/40 text-sm leading-relaxed"
                  style={{ fontFamily: "var(--font-dm-sans)", fontWeight: 300 }}>
                  {v.desc}
                </p>
                <div className="h-[2px] w-0 bg-primary-light group-hover:w-8 transition-all duration-400 mt-2" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA Strip — Cream ─────────────────────────── */}
      <section className="bg-[#F5F0E8] py-16 md:py-20 px-6 md:px-12 xl:px-24 border-t border-[#1a1a1a]/10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h3
              className="text-[#1a1a1a] mb-2"
              style={{ fontFamily: "var(--font-cormorant)", fontSize: "clamp(1.8rem, 3.5vw, 3rem)", fontWeight: 400 }}
            >
              Ready to begin your <em style={{ fontStyle: "italic", color: "#5A189A" }}>project?</em>
            </h3>
            <p className="text-[#4a4040] text-sm" style={{ fontFamily: "var(--font-dm-sans)", fontWeight: 300 }}>
              Free consultation. No pressure. Just great design.
            </p>
          </div>
          <Link
            href="/contact"
            className="group flex items-center gap-2 bg-[#1a1a1a] hover:bg-primary text-white transition-all duration-300 shrink-0"
            style={{
              fontFamily: "var(--font-dm-sans)",
              fontSize: "10px",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              fontWeight: 500,
              padding: "14px 32px",
            }}
          >
            Book Consultation
            <ArrowUpRight size={13} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
        </div>
      </section>
    </>
  );
}
