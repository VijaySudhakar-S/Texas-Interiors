import HomeClient from "./HomeClient";

// Schema.org structured data
const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Texas Interior & Promoters",
  "image": "https://texasinteriors.in/images/hero-bg.avif",
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
      <HomeClient />
    </>
  );
}

