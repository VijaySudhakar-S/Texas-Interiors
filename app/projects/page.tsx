import type { Metadata } from "next";
import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";
import StickyActions from "@/components/common/StickyActions";
import SmoothScroll from "@/components/common/SmoothScroll";
import CustomCursor from "@/components/common/CustomCursor";
import ProjectsPageClient from "./ProjectsPageClient";

export const metadata: Metadata = {
  title: "Projects | Texas Interior & Promoters — Featured Interiors in Trichy & Pudukkottai",
  description: "Browse our portfolio of luxury modular kitchens, residential villa interiors, commercial offices, and turnkey constructions across Tamil Nadu.",
  alternates: { canonical: "/projects" },
};

export default function ProjectsPage() {
  return (
    <>
      <CustomCursor />
      <SmoothScroll>
        <div className="flex flex-col min-h-screen bg-[#080808] text-white selection:bg-primary selection:text-white">
          <Navbar />
          <main className="flex-grow">
            <ProjectsPageClient />
          </main>
          <Footer />
          <StickyActions />
        </div>
      </SmoothScroll>
    </>
  );
}
