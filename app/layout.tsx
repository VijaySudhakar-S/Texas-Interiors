import type { Metadata, Viewport } from "next";
import { Outfit, Playfair_Display } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#080808",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Texas Interior & Promoters | Luxury Interior Designers in Trichy & Pudukkottai",
  description: "Award-winning luxury interior designers and turnkey construction company in Pudukkottai, Trichy, and across Tamil Nadu. Specializing in modular kitchens, high-end residential villas, modern offices, and property developments.",
  keywords: [
    "Interior Designers in Pudukkottai",
    "Interior Designers in Trichy",
    "Best Interior Designers in Tamil Nadu",
    "Luxury Interior Designers",
    "Modular Kitchen Designers",
    "Construction Company in Trichy",
    "Construction Company in Pudukkottai",
    "Home Renovation",
    "Villa Interior Designers",
    "Office Interior Designers",
    "Turnkey Interior Solutions"
  ],
  authors: [{ name: "Texas Interior & Promoters" }],
  creator: "Texas Interior & Promoters",
  publisher: "Texas Interior & Promoters",
  formatDetection: {
    email: false,
    address: true,
    telephone: true,
  },
  metadataBase: new URL("https://texasinteriors.in"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://texasinteriors.in",
    title: "Texas Interior & Promoters | Luxury Interior Designers in Trichy & Pudukkottai",
    description: "Premium luxury interior designers and builders in Tamil Nadu. Specializing in high-end residential, modular kitchens, offices, and turnkey construction projects.",
    siteName: "Texas Interior & Promoters",
    images: [
      {
        url: "/images/hero-preview.jpg",
        width: 1200,
        height: 630,
        alt: "Texas Interior & Promoters Luxury Interior Design",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Texas Interior & Promoters | Luxury Interior Designers in Trichy & Pudukkottai",
    description: "Premium luxury interior designers and builders in Tamil Nadu. Specializing in high-end residential, modular kitchens, offices, and turnkey construction projects.",
    images: ["/images/hero-preview.jpg"],
  },
  icons: {
    icon: "/images/TexasLogo.avif",
    shortcut: "/images/TexasLogo.avif",
    apple: "/images/TexasLogo.avif",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} ${playfair.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-bg-dark text-text-white">
        {children}
      </body>
    </html>
  );
}
