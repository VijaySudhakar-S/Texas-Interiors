"use client";

import Link from "next/link";
import Image from "next/image";
import { Mail, MapPin, Phone } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const links = [
    { name: "Home",     href: "/" },
    { name: "About",    href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Projects", href: "/projects" },
    { name: "Contact",  href: "/contact" },
  ];

  return (
    <footer className="bg-[#060606] border-t border-white/5 pt-16 pb-8 relative overflow-hidden">
      
      {/* Subtle pattern bg */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{ backgroundImage: "url('/images/pattern-dark.avif')", backgroundSize: "cover" }}
      />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
        
        {/* Brand */}
        <div className="flex flex-col gap-5">
          <Link href="/" className="flex items-center gap-3 group select-none w-fit">
            <div className="relative w-10 h-10">
              <Image
                src="/images/TexasLogo.avif"
                alt="Texas Interior & Promoters"
                fill className="object-contain"
              />
            </div>
            <div className="flex flex-col leading-none">
              <span className="font-serif text-lg font-semibold tracking-[0.3em] text-white group-hover:text-primary-light transition-colors"
                style={{ fontFamily: "var(--font-cormorant)" }}>
                TEXAS
              </span>
              <span className="text-[8px] tracking-[0.22em] text-white/40 uppercase mt-0.5"
                style={{ fontFamily: "var(--font-dm-sans)" }}>
                Interior &amp; Promoters
              </span>
            </div>
          </Link>
          <p className="text-white/35 text-sm leading-relaxed" style={{ fontFamily: "var(--font-dm-sans)" }}>
            Directed by <strong className="text-white/60 font-medium">Jeevanantham BE, MDIAD</strong>.
            Luxury interiors &amp; turnkey construction across Pudukkottai, Trichy, and Tamil Nadu.
          </p>
          {/* Social icons */}
          <div className="flex items-center gap-3">
            {[
              { label: "Instagram", href: "#", icon: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" },
              { label: "Facebook", href: "#", icon: "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" },
            ].map((s) => (
              <a
                key={s.label}
                href={s.href}
                aria-label={s.label}
                className="w-9 h-9 border border-white/10 hover:border-primary/50 flex items-center justify-center text-white/30 hover:text-white transition-all duration-300"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d={s.icon} />
                </svg>
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-white text-[10px] uppercase tracking-[0.3em] mb-6 border-b border-white/5 pb-3"
            style={{ fontFamily: "var(--font-dm-sans)" }}>
            Pages
          </h4>
          <nav className="flex flex-col gap-3">
            {links.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-white/35 hover:text-white text-sm transition-colors duration-200"
                style={{ fontFamily: "var(--font-dm-sans)" }}
              >
                {link.name}
              </Link>
            ))}
          </nav>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-white text-[10px] uppercase tracking-[0.3em] mb-6 border-b border-white/5 pb-3"
            style={{ fontFamily: "var(--font-dm-sans)" }}>
            Reach Us
          </h4>
          <div className="flex flex-col gap-4">
            <div className="flex items-start gap-3">
              <MapPin size={15} className="text-primary-light shrink-0 mt-0.5" />
              <span className="text-white/40 text-sm leading-relaxed" style={{ fontFamily: "var(--font-dm-sans)" }}>
                Trichy - 3, Tamil Nadu
              </span>
            </div>
            <div className="flex items-center gap-3">
              <Phone size={14} className="text-primary-light shrink-0" />
              <a href="tel:+919750976408"
                className="text-white/40 hover:text-white text-sm transition-colors"
                style={{ fontFamily: "var(--font-dm-sans)" }}>
                +91 97509 76408
              </a>
            </div>
            <div className="flex items-center gap-3">
              <Mail size={14} className="text-primary-light shrink-0" />
              <a href="mailto:isquarejeeva@gmail.com"
                className="text-white/40 hover:text-white text-sm transition-colors"
                style={{ fontFamily: "var(--font-dm-sans)" }}>
                isquarejeeva@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Legal */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 border-t border-white/5 pt-6 flex flex-col md:flex-row items-center justify-between gap-3">
        <span className="text-[10px] text-white/20 tracking-wider" style={{ fontFamily: "var(--font-dm-sans)" }}>
          © {currentYear} Texas Interior &amp; Promoters. All Rights Reserved.
        </span>
        <Link
          href="/contact"
          className="text-[10px] text-white/20 hover:text-primary-light tracking-wider transition-colors"
          style={{ fontFamily: "var(--font-dm-sans)" }}
        >
          Book Free Consultation →
        </Link>
      </div>
    </footer>
  );
}
