"use client";

import { motion } from "framer-motion";
import { MessageCircle, Phone, Calendar } from "lucide-react";

export default function StickyActions() {
  const phoneNo = "+919750976408";
  const whatsappNo = "919750976408";
  const whatsappMsg = encodeURIComponent("Hi Texas Interior & Promoters, I am interested in a luxury interior design / promoter consultation. Please share details.");

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-4">
      {/* WhatsApp Button */}
      <motion.a
        href={`https://wa.me/${whatsappNo}?text=${whatsappMsg}`}
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20ba5a] text-white flex items-center justify-center shadow-lg hover:scale-110 active:scale-95 transition-all group relative"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", stiffness: 260, damping: 20, delay: 1 }}
      >
        <MessageCircle size={26} className="fill-current" />
        <span className="absolute right-16 bg-bg-dark border border-white/10 text-white text-xs font-medium py-1 px-3 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-md pointer-events-none">
          WhatsApp Chat
        </span>
      </motion.a>

      {/* Floating Call Button */}
      <motion.a
        href={`tel:${phoneNo}`}
        className="w-14 h-14 rounded-full bg-primary hover:bg-secondary text-white flex items-center justify-center shadow-lg hover:scale-110 active:scale-95 transition-all group relative border border-primary-light/20"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", stiffness: 260, damping: 20, delay: 1.2 }}
      >
        <Phone size={24} className="fill-white/10" />
        <span className="absolute right-16 bg-bg-dark border border-white/10 text-white text-xs font-medium py-1 px-3 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-md pointer-events-none">
          Call Expert
        </span>
      </motion.a>

      {/* Book Consultation Mini CTA */}
      <motion.a
        href="#contact"
        className="w-14 h-14 rounded-full bg-white hover:bg-accent text-black flex items-center justify-center shadow-lg hover:scale-110 active:scale-95 transition-all group relative border border-white/20"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", stiffness: 260, damping: 20, delay: 1.4 }}
      >
        <Calendar size={22} />
        <span className="absolute right-16 bg-bg-dark border border-white/10 text-white text-xs font-medium py-1 px-3 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-md pointer-events-none">
          Book Consultation
        </span>
      </motion.a>
    </div>
  );
}
