"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import { Phone, Calendar } from "lucide-react";

export default function StickyActions() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [isVisible, setIsVisible] = useState(!isHome);

  const phoneNo = "+919750976408";
  const whatsappNo = "919750976408";
  const whatsappMsg = encodeURIComponent("Hi Texas Interior & Promoters, I am interested in a luxury interior design / promoter consultation. Please share details.");

  useEffect(() => {
    if (!isHome) {
      setIsVisible(true);
      return;
    }

    const handleScroll = () => {
      // Show when scroll is past 45% of viewport height (transition from Hero to Second section)
      if (window.scrollY > window.innerHeight * 0.45) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Initial check

    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHome]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 20 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="fixed bottom-6 right-6 z-40 flex flex-col gap-4"
        >
          {/* WhatsApp Button */}
          <motion.a
            href={`https://wa.me/${whatsappNo}?text=${whatsappMsg}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20ba5a] text-white flex items-center justify-center shadow-lg hover:scale-110 active:scale-95 transition-all group relative"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
          >
            {/* Real WhatsApp Brand SVG Logo */}
<svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 32 32"
  className="w-7 h-7"
>
  <circle cx="16" cy="16" r="16" fill="#25D366" />
  <path
    fill="#FFF"
    d="M19.11 17.21c-.27-.13-1.58-.78-1.83-.87-.24-.09-.42-.13-.6.13-.18.27-.69.87-.84 1.05-.16.18-.31.2-.58.07-.27-.13-1.13-.42-2.15-1.34-.79-.7-1.33-1.57-1.48-1.84-.16-.27-.02-.42.12-.55.12-.12.27-.31.4-.46.13-.16.18-.27.27-.45.09-.18.05-.34-.02-.46-.07-.13-.6-1.45-.82-1.98-.22-.53-.44-.46-.6-.47h-.52c-.18 0-.47.07-.71.34-.25.27-.94.92-.94 2.25 0 1.33.97 2.61 1.11 2.79.13.18 1.91 2.91 4.62 4.08.64.28 1.15.44 1.54.57.65.21 1.23.18 1.69.11.52-.08 1.6-.65 1.82-1.28.22-.63.22-1.16.16-1.28-.07-.11-.25-.18-.52-.31z"
  />
</svg>
            <span className="absolute right-16 bg-[#080808]/90 border border-white/10 text-white text-xs font-medium py-1 px-3 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-md pointer-events-none">
              WhatsApp Chat
            </span>
          </motion.a>

          {/* Floating Call Button */}
          <motion.a
            href={`tel:${phoneNo}`}
            className="w-14 h-14 rounded-full bg-primary hover:bg-[#7b2cbf] text-white flex items-center justify-center shadow-lg hover:scale-110 active:scale-95 transition-all group relative border border-primary-light/20"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.1 }}
          >
            <Phone size={24} className="fill-white/10" />
            <span className="absolute right-16 bg-[#080808]/90 border border-white/10 text-white text-xs font-medium py-1 px-3 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-md pointer-events-none">
              Call Expert
            </span>
          </motion.a>

          {/* Book Consultation Mini CTA */}
          <motion.a
            href="#contact"
            className="w-14 h-14 rounded-full bg-white hover:bg-[#F5F0E8] text-black flex items-center justify-center shadow-lg hover:scale-110 active:scale-95 transition-all group relative border border-white/20"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.2 }}
          >
            <Calendar size={22} />
            <span className="absolute right-16 bg-[#080808]/90 border border-white/10 text-white text-xs font-medium py-1 px-3 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-md pointer-events-none">
              Book Consultation
            </span>
          </motion.a>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
