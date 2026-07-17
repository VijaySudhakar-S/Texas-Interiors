"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, PhoneCall } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isPastHero, setIsPastHero] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrolled(currentScrollY > 20);
      setIsPastHero(currentScrollY > 650);
      setIsVisible(!(currentScrollY > lastScrollY && currentScrollY > 200));
      setLastScrollY(currentScrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  // Close menu on route change
  useEffect(() => { setIsOpen(false); }, [pathname]);

  // Scroll lock when mobile drawer is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    };
  }, [isOpen]);

  const navLinks = [
    { name: "Home",     href: "/" },
    { name: "About",    href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Projects", href: "/projects" },
    { name: "Contact",  href: "/contact" },
  ];

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  const headerBg = isHome
    ? isPastHero
      ? "bg-[#080808]/95 backdrop-blur-md shadow-sm py-3"
      : isScrolled
        ? "bg-[#1a1a1a]/95 backdrop-blur-md shadow-sm py-3"
        : "bg-transparent py-6"
    : isScrolled
      ? "bg-[#080808]/95 backdrop-blur-md shadow-sm py-3"
      : "bg-transparent py-6";

  const onWhite = false;

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: isOpen ? 0 : (isVisible ? 0 : -100) }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className={`fixed top-0 left-0 right-0 z-[60] transition-all duration-300 ${headerBg}`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group select-none">
            <div className="relative w-10 h-10 transition-transform duration-300 group-hover:scale-105">
              <Image
                src="/images/TexasLogo.avif"
                alt="Texas Interior & Promoters"
                fill
                className="object-contain"
                priority
              />
            </div>
            <div className="flex flex-col leading-none">
              <span
                className={`font-serif text-lg font-bold tracking-[0.3em] transition-colors group-hover:text-primary ${
                  onWhite ? "text-[#111]" : "text-white group-hover:text-primary-light"
                }`}
                style={{ fontFamily: "var(--font-cormorant)" }}>
                TEXAS
              </span>
              <span
                className={`text-[8px] tracking-[0.22em] uppercase mt-0.5 transition-colors font-medium ${
                  onWhite ? "text-black/60" : "text-white/60"
                }`}
                style={{ fontFamily: "var(--font-dm-sans)" }}>
                Interior &amp; Promoters
              </span>
            </div>
          </Link>

          {/* Desktop Links */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link: typeof navLinks[0]) => (
              <Link
                key={link.name}
                href={link.href}
                className={`relative text-[11px] uppercase tracking-[0.18em] py-2 transition-colors duration-300 group ${
                  onWhite
                    ? isActive(link.href)
                      ? "text-black font-bold"
                      : "text-black/70 hover:text-black font-semibold"
                    : isActive(link.href)
                      ? "text-white font-semibold"
                      : "text-white/70 hover:text-white font-medium"
                }`}
                style={{ fontFamily: "var(--font-dm-sans)" }}
              >
                {link.name}
                <span className={`absolute bottom-0 left-0 h-[1.5px] transition-all duration-300 ${
                  onWhite ? "bg-primary" : "bg-primary-light"
                } ${
                  isActive(link.href) ? "w-full" : "w-0 group-hover:w-full"
                }`} />
              </Link>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden lg:flex items-center">
            <Link
              href="/contact"
              className={`flex items-center gap-2 px-5 py-2.5 text-[10px] uppercase tracking-[0.18em] font-medium transition-all duration-300 ${
                onWhite
                  ? "bg-[#111] hover:bg-primary text-white"
                  : "bg-primary hover:bg-primary-light text-white"
              }`}
              style={{ fontFamily: "var(--font-dm-sans)" }}
            >
              <PhoneCall size={12} />
              Book Consultation
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`lg:hidden transition-colors p-2 ${
              onWhite ? "text-[#111] hover:text-primary" : "text-white hover:text-primary-light"
            }`}
            aria-label="Toggle Menu"
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </motion.header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "tween", duration: 0.28 }}
            className="fixed inset-0 z-[50] lg:hidden bg-[#080808] flex flex-col justify-between p-8 pt-28"
          >
            {/* Background pattern */}
            <div
              className="absolute inset-0 opacity-5 pointer-events-none"
              style={{ backgroundImage: "url('/images/pattern-dark.avif')", backgroundSize: "cover" }}
            />
            
            <div className="flex flex-col gap-8 relative z-10">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`block font-serif text-4xl tracking-tight transition-colors duration-200 ${
                      isActive(link.href) ? "text-primary-light" : "text-white/60 hover:text-white"
                    }`}
                    style={{ fontFamily: "var(--font-cormorant)", fontWeight: 400 }}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </div>

            <div className="flex flex-col gap-4 relative z-10">
              <Link
                href="/contact"
                onClick={() => setIsOpen(false)}
                className="w-full text-center py-4 bg-primary text-white text-[10px] uppercase tracking-[0.2em] font-medium transition-all hover:bg-primary-light"
                style={{ fontFamily: "var(--font-dm-sans)" }}
              >
                Book Free Consultation
              </Link>
              <div className="text-center text-[10px] text-white/25 tracking-widest uppercase"
                style={{ fontFamily: "var(--font-dm-sans)" }}>
                Pudukkottai · Trichy · Tamil Nadu
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
