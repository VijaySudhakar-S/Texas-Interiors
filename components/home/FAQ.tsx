"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";

export default function FAQ() {
  const faqs = [
    {
      q: "What areas do you serve in Tamil Nadu?",
      a: "Our head office is in Pudukkottai, and our main branch is in Cantonment, Trichy. We fully serve Pudukkottai, Trichy, Tanjore, Karaikudi, and surrounding residential layouts and districts.",
    },
    {
      q: "What is the starting price for a modular kitchen?",
      a: "Our modular kitchens start from ₹1.5 Lakhs. Pricing depends on structural configurations (L-shape, Parallel, Island), drawer systems (Blum/Hettich/Hafele), and finish materials (acrylic, laminate, PU polish). We provide free transparent estimates.",
    },
    {
      q: "Do you provide 3D designs before site work starts?",
      a: "Yes, absolutely. We provide a complete 3D visualization of your home or office before any physical execution starts. This allows you to verify paint codes, cabinetry veneer colors, and light configurations.",
    },
    {
      q: "What is your standard turnaround time for home interiors?",
      a: "A standard residential layout takes between 40 to 45 working days post material approval. Custom structural construction takes longer depending on build scope, layout scale, and weather details.",
    },
    {
      q: "Do you handle building approval and promoter licenses?",
      a: "Yes, as promoters and turnkey construction builders, we handle vaastu-compliant blueprints, structural drafting, local body building plan approvals, and layout licensing in Pudukkottai and Trichy.",
    },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="relative bg-[#080808]">
      {/* Section label strip */}
      <div className="flex items-center justify-between px-8 md:px-16 xl:px-24 py-5 border-y border-white/5">
        <span className="text-[9px] font-mono uppercase tracking-[0.45em] text-white/30">08 / FAQ</span>
        <span className="text-[9px] font-mono uppercase tracking-[0.45em] text-white/30">Info & Answers</span>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Left Column: Title */}
          <div className="lg:col-span-4 lg:sticky lg:top-36 flex flex-col gap-5 select-none">
            <h2
              className="font-serif text-white leading-none"
              style={{ fontSize: "clamp(2rem, 4.5vw, 4rem)", fontWeight: 200 }}
            >
              Info &{" "}
              <span className="italic font-black text-primary-light">Answers</span>
            </h2>
            <p className="text-white/30 text-sm leading-relaxed max-w-xs font-light">
              Have other layout queries? Talk directly to our engineers via the consultation link.
            </p>
          </div>

          {/* Right Column: Borderless Accordion Grid */}
          <div className="lg:col-span-8 flex flex-col">
            {faqs.map((faq, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div
                  key={idx}
                  className="border-b border-white/10 overflow-hidden transition-all duration-300 py-6"
                >
                  <button
                    onClick={() => toggleFAQ(idx)}
                    className="w-full flex items-center justify-between text-left gap-6 group py-2"
                  >
                    <span className="font-serif text-lg md:text-xl font-bold text-white group-hover:text-primary-light transition-colors duration-300">
                      {faq.q}
                    </span>
                    
                    {/* Morphing circular toggle button */}
                    <motion.div
                      animate={{ 
                        rotate: isOpen ? 135 : 0,
                        backgroundColor: isOpen ? "rgba(90,24,154,1)" : "rgba(255,255,255,0.05)",
                        borderColor: isOpen ? "#9d4edd" : "rgba(255,255,255,0.1)"
                      }}
                      className="w-10 h-10 rounded-full border flex items-center justify-center shrink-0 text-white transition-colors"
                    >
                      <Plus size={16} />
                    </motion.div>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: "easeInOut" }}
                      >
                        <div className="pb-4 pt-4 text-text-muted text-sm md:text-base leading-relaxed max-w-2xl">
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
