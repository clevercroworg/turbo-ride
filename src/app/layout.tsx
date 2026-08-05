import type { Metadata, Viewport } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Turboride Supercars Bangalore | Porsche, Lamborghini & Ferrari Drive Experience in Bengaluru, India",
  description: "Looking for a supercar drive experience in Bengaluru (Bangalore)? Take the wheel of a Porsche 718 Cayman on the STRR highway. Zero security deposit, safety pilot guided. Book online at turboridesupercars.com!",
  keywords: [
    "turboride supercars bangalore",
    "supercar experience bengaluru",
    "rent porsche bangalore",
    "drive supercar in bangalore",
    "lamborghini experience bengaluru",
    "ferrari drive bangalore",
    "strr highway drive"
  ],
  authors: [{ name: "TurboRide Supercars", url: "https://turboridesupercars.com" }],
  creator: "TurboRide Supercars",
  metadataBase: new URL("https://turboridesupercars.com"),
  alternates: {
    canonical: "https://turboridesupercars.com/",
  },
  other: {
    language: "English",
    "geo.region": "IN-KA",
    "geo.placename": "Bengaluru",
  },
  openGraph: {
    type: "website",
    url: "https://turboridesupercars.com/",
    title: "Turboride Supercars Bangalore | Porsche, Lamborghini & Ferrari Drive Experience in Bengaluru, India",
    description: "Experience raw Porsche performance on the STRR Expressway. Zero security deposit, safety pilot guided, 4K media packages included. Reserve your slot now!",
    siteName: "TurboRide Supercars",
    images: [
      {
        url: "https://turboridesupercars.com/assets/og-previewporsche.jpg",
        width: 1200,
        height: 630,
        alt: "Turboride Supercars Bangalore - Porsche 718 Cayman Drive Experience",
      },
    ],
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    site: "@turboride9",
    creator: "@turboride9",
    title: "Turboride Supercars Bangalore | Porsche, Lamborghini & Ferrari Drive Experience in Bengaluru, India",
    description: "Experience raw Porsche performance on the STRR Expressway. Zero security deposit, safety pilot guided, 4K media packages included. Reserve your slot now!",
    images: ["https://turboridesupercars.com/assets/og-previewporsche.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#050505",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // LocalBusiness Structured Data (Schema JSON-LD)
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "TurboRide Supercars",
    "image": "https://turboridesupercars.com/assets/og-preview-porsche.jpg",
    "@id": "https://turboridesupercars.com",
    "url": "https://turboridesupercars.com",
    "telephone": "+916363935011",
    "email": "hello@turboridesupercars.com",
    "priceRange": "₹₹₹",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "STRR Expressway",
      "addressLocality": "Dobaspet",
      "addressRegion": "Karnataka",
      "postalCode": "562111",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 13.2389,
      "longitude": 77.2415
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
      ],
      "opens": "11:00",
      "closes": "17:00"
    },
    "sameAs": [
      "https://www.instagram.com/turboride9"
    ]
  };

  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${inter.variable} dark antialiased`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-[#050505] text-white selection:bg-[#FF2D20] selection:text-white font-body min-h-screen">
        {children}
      </body>
    </html>
  );
}
