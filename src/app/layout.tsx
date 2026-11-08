import type { Metadata, Viewport } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import { contactEmail, whatsappNumber } from "@/lib/site-config";
import "./globals.css";

// Configure Google Fonts with CSS Variables for Space Grotesk and Inter
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
  weight: ["500", "700"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["400", "500", "600"],
});

// Define Base Site Configuration
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://kraftkilnstudio.co.ke";
const siteName = "Noockie Graphics";
const defaultTitle = "Noockie Graphics | Premium Branding & 3D Signage in Kenya";
const defaultDescription =
  "Transforming businesses in Nairobi & East Africa through world-class corporate identity design, 3D architectural signage, illuminated LED displays, and custom shopfront branding.";

// Define Viewport Parameters
export const viewport: Viewport = {
  themeColor: "#0D0D0D",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

// Next.js App Router Metadata API Configuration
export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: defaultTitle,
    template: `%s | ${siteName}`,
  },
  description: defaultDescription,
  applicationName: siteName,
  authors: [{ name: "Noockie Graphics", url: siteUrl }],
  generator: "Next.js",
  keywords: [
    "branding agency Nairobi",
    "3D signage Kenya",
    "corporate identity design Kenya",
    "LED lightboxes Nairobi",
    "storefront branding Kenya",
    "vehicle branding Nairobi",
    "large format printing Kenya",
    "architectural wayfinding Nairobi",
  ],
  referrer: "origin-when-cross-origin",

  // Canonical & Regional Alternates
  alternates: {
    canonical: siteUrl,
    languages: {
      "en-KE": siteUrl,
    },
  },

  // OpenGraph Metadata (WhatsApp, Facebook, LinkedIn previews)
  openGraph: {
    type: "website",
    locale: "en_KE",
    url: siteUrl,
    title: defaultTitle,
    description: defaultDescription,
    siteName: siteName,
    images: [
      {
        url: `${siteUrl}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "Noockie Graphics - 3D Signage & Premium Branding in Nairobi, Kenya",
        type: "image/jpeg",
      },
    ],
  },

  // Twitter Card Metadata
  twitter: {
    card: "summary_large_image",
    title: defaultTitle,
    description: defaultDescription,
    site: "@kraftkilnstudio",
    creator: "@kraftkilnstudio",
    images: [`${siteUrl}/og-image.jpg`],
  },

  // Search Engine Bot Directives
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // Favicons & Mobile Icons
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    apple: "/apple-touch-icon.png",
  },

  // Regional Meta Tags for Geo-Targeting
  other: {
    "geo.region": "KE-30",
    "geo.placename": "Nairobi",
    "geo.position": "-1.286389;36.817223",
    ICBM: "-1.286389, 36.817223",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Structured Data (JSON-LD) for Local Business & Creative Work Studio
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Noockie Graphics",
    image: `${siteUrl}/og-image.jpg`,
    "@id": siteUrl,
    url: siteUrl,
    telephone: whatsappNumber,
    email: contactEmail,
    priceRange: "KES 50,000 - KES 1,000,000+",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Westlands Commercial Center",
      addressLocality: "Nairobi",
      addressRegion: "Nairobi County",
      postalCode: "00100",
      addressCountry: "KE",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: -1.286389,
      longitude: 36.817223,
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "08:00",
      closes: "18:00",
    },
    sameAs: [
      "https://instagram.com",
      "https://linkedin.com",
      "https://twitter.com",
    ],
    areaServed: {
      "@type": "AdministrativeArea",
      name: "East Africa",
    },
  };

  return (
    <html lang="en-KE" className={`${spaceGrotesk.variable} ${inter.variable}`}>
      <head>
        {/* Inject JSON-LD Schema for Local SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-charcoal text-ivory antialiased selection:bg-accent selection:text-white">
        {children}
      </body>
    </html>
  );
}