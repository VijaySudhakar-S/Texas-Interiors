"use client";

import { motion } from "framer-motion";

export default function Statistics() {
  const stats = [
    {
      value: "450+",
      label: "Completed projects",
      desc: "Luxury residential villas, modular kitchens, and modern office structures.",
    },
    {
      value: "15+",
      label: "Years of excellence",
      desc: "Delivering bespoke architectures and interior details across Tamil Nadu.",
    },
    {
      value: "30+",
      label: "Expert craftsmen",
      desc: "In-house modular technicians, layout planners, and project managers.",
    },
    {
      value: "100%",
      label: "Turnkey delivery",
      desc: "Sourcing, layouts, planning, construction, and finishing handled end-to-end.",
    },
  ];

  return (
    <section className="py-16 bg-[#0c0c0c] border-y border-white/5 relative overflow-hidden">

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 text-center sm:text-left">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: idx * 0.05 }}
              className="flex flex-col gap-3 relative group"
            >
              {/* Highlight bar */}
              <div className="w-12 h-1 bg-primary mb-2 rounded-full self-center sm:self-start group-hover:w-20 transition-all duration-300" />
              
              <span className="font-serif text-5xl md:text-6xl font-bold tracking-tight text-white group-hover:text-primary-light transition-colors">
                {stat.value}
              </span>
              
              <h3 className="text-white text-base font-bold uppercase tracking-wider">
                {stat.label}
              </h3>
              
              <p className="text-text-muted text-xs md:text-sm leading-relaxed max-w-xs self-center sm:self-start">
                {stat.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
