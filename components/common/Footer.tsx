"use client";

import { Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-bg-dark border-t border-white/5 pt-20 pb-8 relative overflow-hidden">
      {/* Grid overlay for subtle texture */}
      <div className="absolute inset-0 bg-luxury-grid opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-16">
        {/* Brand Column */}
        <div className="flex flex-col gap-6">
          <a href="#home" className="flex items-center gap-3 group select-none">
            <div className="relative w-10 h-10 overflow-hidden rounded-lg bg-white/5 border border-white/10 group-hover:border-primary transition-colors duration-300">
              <Image
                src="/images/TexasLogo.avif"
                alt="Texas Interior & Promoters Logo"
                fill
                className="object-contain p-1"
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
          <p className="text-text-muted text-sm leading-relaxed">
            Directed by <strong className="text-white">Jeevanantham BE, MDIAD</strong>. Crafting award-winning luxury spaces and turnkey developments across Pudukkottai, Trichy, and Tamil Nadu.
          </p>
          <div className="flex items-center gap-4">
            <a href="#" className="w-10 h-10 rounded-full border border-white/10 hover:border-primary flex items-center justify-center text-text-muted hover:text-white transition-colors" aria-label="Instagram">
              <svg className="w-[18px] h-[18px] fill-current" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
              </svg>
            </a>
            <a href="#" className="w-10 h-10 rounded-full border border-white/10 hover:border-primary flex items-center justify-center text-text-muted hover:text-white transition-colors" aria-label="Facebook">
              <svg className="w-[18px] h-[18px] fill-current" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </a>
            <a href="#" className="w-10 h-10 rounded-full border border-white/10 hover:border-primary flex items-center justify-center text-text-muted hover:text-white transition-colors" aria-label="LinkedIn">
              <svg className="w-[18px] h-[18px] fill-current" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Quick Links Column */}
        <div>
          <h4 className="text-white font-serif text-lg font-semibold mb-6">Explore</h4>
          <nav className="flex flex-col gap-4">
            <a href="#home" className="text-text-muted hover:text-white text-sm transition-colors">Home</a>
            <a href="#about" className="text-text-muted hover:text-white text-sm transition-colors">About Us</a>
            <a href="#services" className="text-text-muted hover:text-white text-sm transition-colors">Our Services</a>
            <a href="#projects" className="text-text-muted hover:text-white text-sm transition-colors">Featured Projects</a>
            <a href="#process" className="text-text-muted hover:text-white text-sm transition-colors">Design Process</a>
            <a href="#faq" className="text-text-muted hover:text-white text-sm transition-colors">FAQ</a>
          </nav>
        </div>

        {/* Pudukkottai Head Office Column */}
        <div>
          <h4 className="text-white font-serif text-lg font-semibold mb-6">Head Office</h4>
          <div className="flex flex-col gap-4 text-text-muted text-sm leading-relaxed">
            <div className="flex items-start gap-3">
              <MapPin size={18} className="text-primary shrink-0 mt-1" />
              <span>
                Trichy - 3
              </span>
            </div>
            <div className="flex items-center gap-3">
              <Phone size={16} className="text-primary shrink-0" />
              <a href="tel:+919750976408" className="hover:text-white transition-colors">+91 97509 76408</a>
            </div>
            <div className="flex items-center gap-3">
              <Mail size={16} className="text-primary shrink-0" />
              <a href="mailto:isquarejeeva@gmail.com" className="hover:text-white transition-colors">isquarejeeva@gmail.com</a>
            </div>
          </div>
        </div>
      </div>

      {/* Legal Bar */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-text-muted text-center md:text-left">
        <div>
          © {currentYear} Texas Interior & Promoters. All Rights Reserved.
        </div>
        <div className="flex items-center gap-6">
          {/* <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-white transition-colors">Terms of Service</a> */}
          <a href="#contact" className="hover:text-white transition-colors">Book Free Consultation</a>
        </div>
      </div>
    </footer>
  );
}
