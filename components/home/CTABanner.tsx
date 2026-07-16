"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function CTABanner() {
  return (
    <section
      className="relative overflow-hidden py-20 md:py-28 px-6 md:px-12 xl:px-24"
      style={{ background: "linear-gradient(135deg, #3c096c 0%, #160a28 50%, #5A189A 100%)" }}
    >
      {/* Generated violet pattern bg */}
      <div
        className="absolute inset-0 opacity-[0.12] pointer-events-none"
        style={{
          backgroundImage: "url('/images/pattern-violet.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* Ambient glow */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] rounded-full bg-primary/20 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10 flex flex-col md:flex-row md:items-center md:justify-between gap-10">
        
        <div className="flex flex-col gap-4 max-w-2xl">
          <span className="text-[9px] uppercase tracking-[0.5em] text-white/40 flex items-center gap-3"
            style={{ fontFamily: "var(--font-dm-sans)" }}>
            <span className="h-px w-6 bg-white/20" />
            Start a Project
          </span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-white leading-none"
            style={{
              fontFamily: "var(--font-cormorant)",
              fontSize: "clamp(2.5rem, 5.5vw, 5rem)",
              fontWeight: 300,
              letterSpacing: "-0.01em",
            }}
          >
            Ready to transform<br />
            <em style={{ fontStyle: "italic", fontWeight: 600 }}>your space?</em>
          </motion.h2>
          <p className="text-white/45 text-sm leading-relaxed max-w-md"
            style={{ fontFamily: "var(--font-dm-sans)", fontWeight: 300 }}>
            Book a free consultation. Our team will visit your site, understand your vision, and present a 3D design within days.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="flex flex-col sm:flex-row gap-4 shrink-0"
        >
          <Link
            href="/contact"
            className="group flex items-center justify-center gap-2 bg-white text-primary hover:bg-[#F5F0E8] transition-all duration-300"
            style={{
              fontFamily: "var(--font-dm-sans)",
              fontSize: "10px",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              fontWeight: 600,
              padding: "16px 36px",
            }}
          >
            Book Free Consultation
            <ArrowUpRight size={13} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
          <a
            href="tel:+919750976408"
            className="flex items-center justify-center gap-2 border border-white/20 text-white/70 hover:text-white hover:border-white/50 transition-all duration-300"
            style={{
              fontFamily: "var(--font-dm-sans)",
              fontSize: "10px",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              fontWeight: 500,
              padding: "16px 36px",
            }}
          >
            +91 97509 76408
          </a>
        </motion.div>
      </div>

      {/* Decorative number */}
      <div
        className="absolute bottom-0 right-0 text-white/[0.02] select-none pointer-events-none leading-none"
        style={{
          fontFamily: "var(--font-cormorant)",
          fontSize: "clamp(10rem, 22vw, 28rem)",
          fontWeight: 700,
          fontStyle: "italic",
          lineHeight: 0.8,
        }}
      >
        T
      </div>
    </section>
  );
}
