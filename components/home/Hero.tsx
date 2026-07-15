"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import Image from "next/image";
import { useRef, useState, useEffect } from "react";
import { ArrowUpRight } from "lucide-react";

export default function Hero() {
  const [mounted, setMounted] = useState(false);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => { setMounted(true); }, []);

  // Subtle parallax on image on mouse move
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const smoothX = useSpring(mouseX, { stiffness: 60, damping: 20 });
  const smoothY = useSpring(mouseY, { stiffness: 60, damping: 20 });

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const { clientX, clientY, currentTarget } = e;
    const { width, height, left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(((clientX - left) / width - 0.5) * 18);
    mouseY.set(((clientY - top) / height - 0.5) * 12);
  };

  const stats = [
    { value: "15+", label: "Yrs" },
    { value: "450+", label: "Projects" },
    { value: "Trichy", label: "& Pudukottai" },
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-[#080808]"
      onMouseMove={handleMouseMove}
    >
      {/* Full-bleed image — no rounded frame, bleeds to right */}
      <motion.div
        ref={imageRef}
        style={{ x: smoothX, y: smoothY }}
        className="absolute right-0 top-0 w-[62vw] h-full pointer-events-none"
      >
        <div className="absolute inset-0">
          <Image
            src="/images/hero-bg.png"
            alt="Luxury interior space by Texas Interior & Promoters"
            fill
            priority
            className="object-cover"
          />
          {/* Gradient mask — heavy on left so text is readable */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#080808] via-[#080808]/70 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-transparent to-[#080808]/30" />
        </div>
      </motion.div>

      {/* Main content */}
      <div className="relative z-10 min-h-screen flex flex-col justify-between pt-28 pb-12 px-8 md:px-16 xl:px-24">

        {/* Top label */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex items-center gap-4"
        >
          <span className="h-px w-10 bg-white/15" />
          <span className="text-[9px] font-mono uppercase tracking-[0.5em] text-primary-light/70">Pudukkottai · Trichy · Tamil Nadu</span>
        </motion.div>

        {/* Giant display headline — mixed weight */}
        <div className="flex-1 flex flex-col justify-center max-w-4xl mt-4">
          <div className="overflow-hidden">
            <motion.div
              initial={{ y: "110%" }}
              animate={{ y: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
            >
              <span
                className="block font-serif leading-none text-white/90 tracking-tight select-none"
                style={{ fontSize: "clamp(4.5rem, 12vw, 13rem)", fontWeight: 200, letterSpacing: "-0.02em" }}
              >
                Texas
              </span>
            </motion.div>
          </div>
          <div className="overflow-hidden -mt-2 md:-mt-4">
            <motion.div
              initial={{ y: "110%" }}
              animate={{ y: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.5 }}
            >
              <span
                className="block font-serif leading-none text-primary-light select-none"
                style={{ fontSize: "clamp(4.5rem, 12vw, 13rem)", fontWeight: 900, letterSpacing: "-0.04em" }}
              >
                Interiors
              </span>
            </motion.div>
          </div>

          {/* Descriptor + CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.9 }}
            className="flex flex-col sm:flex-row sm:items-end gap-8 mt-10 md:mt-14"
          >
            <p className="text-white/50 text-sm leading-relaxed max-w-md font-light tracking-wide">
              Designing timeless interiors, luxury residences, and premium commercial spaces across Pudukkottai, Trichy, and Tamil Nadu—where every detail reflects elegance, craftsmanship, and your vision.
            </p>
            <div className="flex gap-3 items-center shrink-0">
              <a
                href="#contact"
                className="group flex items-center gap-2 bg-primary hover:bg-primary-light text-white text-[11px] uppercase tracking-[0.2em] font-semibold px-7 py-4 transition-all duration-300"
              >
                Schedule Consultation
                <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>
          </motion.div>
        </div>

        {/* Bottom strip */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="flex items-end justify-between border-t border-white/5 pt-6"
        >
          {/* Stats — vertical strip style */}
          <div className="flex gap-10 md:gap-16">
            {stats.map((s, i) => (
              <div key={i} className="flex flex-col gap-1">
                <span className="font-serif font-black text-white text-2xl md:text-3xl tracking-tight leading-none">{s.value}</span>
                <span className="text-[9px] uppercase tracking-[0.3em] text-white/30 font-mono">{s.label}</span>
              </div>
            ))}
          </div>

          {/* Rotating badge — smaller, more refined */}
          <motion.div
            initial={{ scale: 0, rotate: -90 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ type: "spring", delay: 1.4, stiffness: 120 }}
            className="w-20 h-20 md:w-24 md:h-24 rounded-full border border-white/10 flex items-center justify-center relative"
          >
            <svg className="absolute w-full h-full animate-[spin_18s_linear_infinite]" viewBox="0 0 100 100">
              <path id="hp-circle" d="M 50,50 m -38,0 a 38,38 0 1,1 76,0 a 38,38 0 1,1 -76,0" fill="none" />
              <text className="fill-white/30" style={{ fontSize: "7px", letterSpacing: "0.14em" }}>
                <textPath href="#hp-circle">LUXURY INTERIORS · STRUCTURAL BUILDERS · </textPath>
              </text>
            </svg>
            <span className="font-serif text-white/60 text-xs tracking-widest">Texas</span>
          </motion.div>
        </motion.div>
      </div>

      {/* Thin vertical accent line */}
      <motion.div
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 1.4, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="absolute left-4 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-primary/30 to-transparent origin-top pointer-events-none"
      />
    </section>
  );
}
