import SmoothScroll from "@/components/common/SmoothScroll";
import CustomCursor from "@/components/common/CustomCursor";
import Navbar from "@/components/common/Navbar";
import Hero from "@/components/home/Hero";
import About from "@/components/home/About";
import Services from "@/components/home/Services";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import FeaturedProjects from "@/components/home/FeaturedProjects";
import DesignProcess from "@/components/home/DesignProcess";
import Materials from "@/components/home/Materials";
import Testimonials from "@/components/home/Testimonials";
import Statistics from "@/components/home/Statistics";
import FAQ from "@/components/home/FAQ";
import Contact from "@/components/home/Contact";
import Footer from "@/components/common/Footer";
import StickyActions from "@/components/common/StickyActions";

// Schema.org structured data for local SEO
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
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "10.3797",
    "longitude": "78.8208"
  },
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ],
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

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Interior Design and Turnkey Construction",
  "provider": {
    "@type": "LocalBusiness",
    "name": "Texas Interior & Promoters"
  },
  "areaServed": [
    {
      "@type": "AdministrativeArea",
      "name": "Pudukkottai"
    },
    {
      "@type": "AdministrativeArea",
      "name": "Trichy"
    },
    {
      "@type": "AdministrativeArea",
      "name": "Tamil Nadu"
    }
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Luxury Design Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Modular Kitchen Design"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Residential Villa Interiors"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Commercial Office Interiors"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Turnkey Property Construction"
        }
      }
    ]
  }
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What areas do you serve in Tamil Nadu?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Our head office is in Pudukkottai, and our main branch is in Cantonment, Trichy. We fully serve Pudukkottai, Trichy, Tanjore, Karaikudi, and surrounding residential layouts."
      }
    },
    {
      "@type": "Question",
      "name": "What is the starting price for a modular kitchen?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Our modular kitchens start from ₹1.5 Lakhs. Pricing depends on structural configurations, drawer systems, and finish materials."
      }
    },
    {
      "@type": "Question",
      "name": "Do you provide 3D designs before site work starts?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, absolutely. We provide a complete 3D visualization of your home or office before any physical execution starts."
      }
    }
  ]
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://texasinteriors.in"
    }
  ]
};

export default function Home() {
  return (
    <>
      {/* Inject Structured Data Schemas */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Premium Cursor */}
      <CustomCursor />

      {/* Smooth Scroll Frame */}
      <SmoothScroll>
        <div className="flex flex-col min-h-screen relative bg-bg-dark text-text-white selection:bg-primary selection:text-white">
          <Navbar />
          
          <main className="flex-grow">
            <Hero />
            <About />
            <Services />
            <WhyChooseUs />
            <FeaturedProjects />
            <DesignProcess />
            <Materials />
            <Testimonials />
            <Statistics />
            <FAQ />
            <Contact />
          </main>

          <Footer />
          
          {/* Quick contact shortcuts */}
          <StickyActions />
        </div>
      </SmoothScroll>
    </>
  );
}
