"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Play } from "lucide-react";

const BADGE_TEXT = "Luxury · Crafted · Texas · Interiors · ";

const heroImages = [
  "/images/Hero.jpg",
  "/images/hero-2.jpg",
  "/images/hero-3.jpg",
  "/images/hero-4.jpg",
  "/images/hero-5.jpg",
];

export default function Hero() {
  const [currentIdx, setCurrentIdx] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIdx((prev) => (prev + 1) % heroImages.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="home"
      className="relative w-full overflow-hidden"
      style={{
        paddingTop: "4.5rem", /* navbar height */
        background: "linear-gradient(135deg, #1a1a1a 0%, #000000 100%)",
      }}
    >
      <div
        className="absolute bottom-0 left-0 right-0 h-52 pointer-events-none"
        style={{ background: "linear-gradient(to top, #000000ff, transparent)" }}
      />
      {/* Subtle Violet Pattern Background Overlay */}
      <div
        className="absolute inset-0 z-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage: "url('/images/pattern-violet.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* ── ROUNDED IMAGE CARD (like Poliform) ─────────────── */}
      <div className="px-3 md:px-5 pt-2 pb-4 relative z-10">
        <div
          className="relative overflow-hidden"
          style={{
            height: "calc(100vh - 6rem)",
            minHeight: "520px",
            borderRadius: "20px",
            border: "1px solid rgba(255, 255, 255, 0.08)",
          }}
        >
          {/* Background image slideshow with smooth Ken Burns zoom */}
          <AnimatePresence initial={false}>
            <motion.div
              key={currentIdx}
              initial={{ opacity: 0, scale: 1.0 }}
              animate={{ opacity: 1, scale: 1.08 }}
              exit={{ opacity: 0 }}
              transition={{
                opacity: { duration: 1.0 },
                scale: { duration: 3.5, ease: "easeOut" },
              }}
              className="absolute inset-0 z-0"
            >
              <Image
                src={heroImages[currentIdx]}
                alt="Luxury interior by Texas Interiors"
                fill
                priority
                className="object-cover object-center"
                style={{ filter: "brightness(0.5)" }}
              />
            </motion.div>
          </AnimatePresence>

          {/* ── HEADLINE — bottom-left, bleeds wide ─────────── */}
          <div className="absolute bottom-[240px] sm:bottom-[190px] md:bottom-[160px] left-0 right-0 px-5 md:px-10 z-10">
            {/* Small italic line above */}
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="text-white/50 leading-none mb-0"
              style={{
                fontFamily: "var(--font-cormorant)",
                fontSize: "clamp(1rem, 2vw, 1.6rem)",
                fontWeight: 300,
                fontStyle: "italic",
                letterSpacing: "0.05em",
              }}
            >
              Crafting
            </motion.p>

            {/* Massive headline word */}
            <div className="overflow-hidden pb-5 -mb-5">
              <motion.h1
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1], delay: 0.22 }}
                className="leading-none whitespace-normal md:whitespace-nowrap break-words pb-3"
                style={{
                  fontFamily: "var(--font-cormorant)",
                  fontSize: "clamp(3rem, 12vw, 13rem)",
                  fontWeight: 700,
                  color: "rgba(255,255,255,0.97)",
                  letterSpacing: "-0.03em",
                  lineHeight: 1.0,
                }}
              >
                Tim<em style={{ fontStyle: "italic", color: "#9d4edd" }}>e</em>less{" "}
                <span style={{ color: "rgba(255,255,255,0.88)" }}>Spaces</span>
              </motion.h1>
            </div>
          </div>

          {/* ── BOTTOM ROW ─────────────────────────────────── */}
          <div className="absolute bottom-5 left-0 right-0 px-5 md:px-10 flex items-end justify-between gap-4 z-10">

            {/* LEFT — description + CTA */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="w-full sm:max-w-[340px] md:max-w-[400px] rounded-2xl p-4 flex flex-col gap-3"
              style={{
                background: "rgba(6,2,8,0.52)",
                backdropFilter: "blur(14px)",
                WebkitBackdropFilter: "blur(14px)",
                border: "1px solid rgba(255,255,255,0.09)",
              }}
            >
              <p
                className="text-white/60 text-sm md:text-md leading-relaxed"
                style={{ fontFamily: "var(--font-dm-sans)", fontWeight: 300 }}
              >
                Modular kitchens, luxury residences, and turnkey construction across Tamil Nadu.
              </p>
              <Link
                href="/projects"
                className="group inline-flex items-center gap-2 bg-white hover:bg-primary hover:text-white text-[#111] transition-all duration-300 rounded-full w-fit"
                style={{
                  fontFamily: "var(--font-dm-sans)",
                  fontSize: "10px",
                  fontWeight: 700,
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  padding: "8px 16px",
                }}
              >
                View More
                <ArrowUpRight size={10} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>
            </motion.div>

            {/* RIGHT — rotating circular badge (hidden on mobile for space) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.9 }}
              className="relative w-25 h-25 md:w-30 md:h-30 shrink-0 hidden sm:block"
            >
              <svg viewBox="0 0 100 100" className="w-full h-full animate-[spin_18s_linear_infinite]">
                <defs>
                  <path id="badgePath" d="M50,50 m-36,0 a36,36 0 1,1 72,0 a36,36 0 1,1 -72,0" />
                </defs>
                <text
                  style={{
                    fontSize: "10px",
                    letterSpacing: "0.15em",
                    fontFamily: "var(--font-dm-sans)",
                    fill: "rgba(255,255,255,0.5)",
                    fontWeight: 500,
                  }}
                >
                  <textPath href="#badgePath">{BADGE_TEXT}</textPath>
                </text>
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-primary" />
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}
