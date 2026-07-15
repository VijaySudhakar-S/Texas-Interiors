"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { Menu, X, PhoneCall } from "lucide-react";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      if (currentScrollY > lastScrollY && currentScrollY > 150) {
        setIsVisible(false); // scrolling down
      } else {
        setIsVisible(true); // scrolling up
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Projects", href: "#projects" },
    { name: "Process", href: "#process" },
    { name: "FAQ", href: "#faq" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: isVisible ? 0 : -100 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-[#080808]/80 py-4 shadow-lg backdrop-blur-md" : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-3 group select-none">
          <div className="relative w-11 h-11 transition-transform duration-300 group-hover:scale-105">
            <Image
              src="/images/TexasLogo.avif"
              alt="Texas Interior & Promoters Logo"
              fill
              className="object-contain"
              priority
            />
          </div>
          <div className="flex flex-col">
            <span className="font-serif text-xl font-bold tracking-widest text-white group-hover:text-primary transition-colors leading-none">
              TEXAS
            </span>
            <span className="text-[8px] tracking-[0.25em] text-text-muted uppercase group-hover:text-white transition-colors mt-0.5">
              Interior & Promoters
            </span>
          </div>
        </a>

        {/* Desktop Links */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-xs uppercase tracking-widest text-text-muted hover:text-white transition-colors relative group py-2"
            >
              {link.name}
              <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-primary transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        {/* Call to Action Button */}
        <div className="hidden lg:flex items-center">
          <a
            href="#contact"
            className="px-6 py-2.5 rounded-full bg-primary hover:bg-secondary text-white font-medium text-xs uppercase tracking-wider transition-all hover:scale-105 duration-300 flex items-center gap-2 border border-primary-light/20 shadow-md shadow-primary/20"
          >
            <PhoneCall size={13} />
            Book Consultation
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden text-white hover:text-primary transition-colors p-2"
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "tween", duration: 0.3 }}
            className="fixed inset-0 z-40 lg:hidden bg-bg-dark flex flex-col justify-between p-8 pt-28"
          >
            <div className="absolute top-0 right-0 w-full h-full bg-luxury-grid pointer-events-none opacity-20" />
            
            <div className="flex flex-col gap-6 relative z-10">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="font-serif text-3xl font-semibold tracking-wide text-text-muted hover:text-white transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>

            <div className="flex flex-col gap-4 relative z-10">
              <a
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="w-full text-center py-4 rounded-full bg-primary text-white font-medium tracking-wider text-xs uppercase transition-all border border-primary-light/20"
              >
                Book Free Consultation
              </a>
              <div className="text-center text-xs text-text-muted mt-2">
                Pudukkottai • Trichy • Tamil Nadu
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
