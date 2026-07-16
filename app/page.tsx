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

// Schema.org structured data
const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Texas Interior & Promoters",
  "image": "https://texasinteriors.in/images/hero-bg.png",
  "@id": "https://texasinteriors.in/#localbusiness",
  "url": "https://texasinteriors.in",
  "telephone": "+919750976408",
  "priceRange": "$$",
  "address": [
    {
      "@type": "PostalAddress",
      "streetAddress": "12A, Ground Floor, Anna Nagar Main Road",
      "addressLocality": "Pudukkottai",
      "addressRegion": "Tamil Nadu",
      "postalCode": "622001",
      "addressCountry": "IN"
    },
    {
      "@type": "PostalAddress",
      "streetAddress": "2nd Cross Street, Cantonment",
      "addressLocality": "Trichy",
      "addressRegion": "Tamil Nadu",
      "postalCode": "620001",
      "addressCountry": "IN"
    }
  ],
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],
    "opens": "09:00",
    "closes": "20:00"
  }
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Texas Interior & Promoters",
  "url": "https://texasinteriors.in",
  "logo": "https://texasinteriors.in/favicon.ico",
  "sameAs": [
    "https://www.instagram.com/texasinteriors",
    "https://www.facebook.com/texasinteriors"
  ]
};

export default function Home() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />

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
    </>
  );
}
