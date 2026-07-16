import type { Metadata } from "next";
import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";
import StickyActions from "@/components/common/StickyActions";
import SmoothScroll from "@/components/common/SmoothScroll";
import CustomCursor from "@/components/common/CustomCursor";
import AboutPageClient from "./AboutPageClient";

export const metadata: Metadata = {
  title: "About Us | Texas Interior & Promoters — Luxury Designers in Trichy & Pudukkottai",
  description: "Learn about Texas Interior & Promoters — directed by Jeevanantham BE, MDIAD. 15+ years of luxury interior design and turnkey construction across Tamil Nadu.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <CustomCursor />
      <SmoothScroll>
        <div className="flex flex-col min-h-screen bg-[#080808] text-white selection:bg-primary selection:text-white">
          <Navbar />
          <main className="flex-grow">
            <AboutPageClient />
          </main>
          <Footer />
          <StickyActions />
        </div>
      </SmoothScroll>
    </>
  );
}
