import type { Metadata } from "next";
import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";
import StickyActions from "@/components/common/StickyActions";
import SmoothScroll from "@/components/common/SmoothScroll";
import CustomCursor from "@/components/common/CustomCursor";
import ServicesPageClient from "./ServicesPageClient";

export const metadata: Metadata = {
  title: "Services | Texas Interior & Promoters — Modular Kitchens, Residential & Commercial Interiors",
  description: "Explore our full range of services: modular kitchens, residential villa interiors, commercial office design, 3D blueprinting, turnkey construction, and property development in Trichy and Pudukkottai.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <>
      <CustomCursor />
      <SmoothScroll>
        <div className="flex flex-col min-h-screen bg-[#080808] text-white selection:bg-primary selection:text-white">
          <Navbar />
          <main className="flex-grow">
            <ServicesPageClient />
          </main>
          <Footer />
          <StickyActions />
        </div>
      </SmoothScroll>
    </>
  );
}
