import type { Metadata } from "next";
import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";
import StickyActions from "@/components/common/StickyActions";
import SmoothScroll from "@/components/common/SmoothScroll";
import CustomCursor from "@/components/common/CustomCursor";
import Contact from "@/components/home/Contact";

export const metadata: Metadata = {
  title: "Contact | Texas Interior & Promoters — Book a Free Consultation",
  description: "Contact Texas Interior & Promoters in Trichy and Pudukkottai. Book a free design consultation, get a 3D preview, and start your project today. Call +91 97509 76408.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <CustomCursor />
      <SmoothScroll>
        <div className="flex flex-col min-h-screen bg-[#080808] text-white selection:bg-primary selection:text-white">
          <Navbar />
          <main className="flex-grow">
            {/* Page Hero */}
            <section className="relative bg-[#080808] pt-32 pb-12 md:pt-44 md:pb-16 px-6 md:px-12 xl:px-24 overflow-hidden border-b border-white/5">
              <div
                className="absolute inset-0 opacity-[0.06] pointer-events-none"
                style={{ backgroundImage: "url('/images/pattern-dark.avif')", backgroundSize: "cover" }}
              />
              <div className="max-w-7xl mx-auto relative z-10">
                <div className="flex items-center gap-4 mb-6">
                  <span className="h-px w-8 bg-white/15" />
                  <span className="text-[9px] uppercase tracking-[0.45em] text-white/30"
                    style={{ fontFamily: "var(--font-dm-sans)" }}>
                    Get in Touch
                  </span>
                </div>
                <h1
                  className="text-white leading-none"
                  style={{
                    fontFamily: "var(--font-cormorant)",
                    fontSize: "clamp(3rem, 7vw, 7rem)",
                    fontWeight: 300,
                    letterSpacing: "-0.02em",
                  }}
                >
                  Let&apos;s <em style={{ fontStyle: "italic", fontWeight: 700, color: "#9d4edd" }}>Talk</em>
                </h1>
                <p
                  className="text-white/35 text-sm mt-5 max-w-md leading-relaxed"
                  style={{ fontFamily: "var(--font-dm-sans)", fontWeight: 300 }}
                >
                  Tell us about your space. We&apos;ll visit, listen, and present a 3D design within days — no strings attached.
                </p>
              </div>
            </section>

            {/* Reuse the Contact form component */}
            <Contact />
          </main>
          <Footer />
          <StickyActions />
        </div>
      </SmoothScroll>
    </>
  );
}
