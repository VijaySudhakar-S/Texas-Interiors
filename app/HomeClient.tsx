"use client";

import { useState, useEffect, useLayoutEffect } from "react";
import SmoothScroll from "@/components/common/SmoothScroll";
import CustomCursor from "@/components/common/CustomCursor";
import Navbar from "@/components/common/Navbar";
import Hero from "@/components/home/Hero";
import ServicesPreview from "@/components/home/ServicesPreview";
import ProjectsPreview from "@/components/home/ProjectsPreview";
import MaterialsSection from "@/components/home/MaterialsSection";
import WhyChooseSection from "@/components/home/WhyChooseSection";
import CTABanner from "@/components/home/CTABanner";
import Footer from "@/components/common/Footer";
import StickyActions from "@/components/common/StickyActions";
import IntroAnimation from "@/components/common/IntroAnimation";

const useSafeLayoutEffect = typeof window !== "undefined" ? useLayoutEffect : useEffect;

export default function HomeClient() {
  const [showIntro, setShowIntro] = useState(true);

  useSafeLayoutEffect(() => {
    const hasShown = sessionStorage.getItem("introShown");
    if (hasShown) {
      setShowIntro(false);
    }
  }, []);

  // Scroll lock body and HTML when intro is active
  useEffect(() => {
    if (showIntro) {
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
  }, [showIntro]);

  return (
    <>
      <CustomCursor />

      <SmoothScroll>
        <div className="flex flex-col min-h-screen relative bg-bg-dark text-text-white selection:bg-primary selection:text-white">
          <Navbar />

          <main className="flex-grow">
            <Hero />
            <ServicesPreview />
            <ProjectsPreview />
            <MaterialsSection />
            <WhyChooseSection />
            <CTABanner />
          </main>

          <Footer />
          <StickyActions />
        </div>
      </SmoothScroll>

      {showIntro && (
        <IntroAnimation onComplete={() => {
          sessionStorage.setItem("introShown", "true");
          setShowIntro(false);
        }} />
      )}
    </>
  );
}
