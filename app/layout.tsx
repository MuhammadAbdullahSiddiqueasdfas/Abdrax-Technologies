import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import Script from "next/script";
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

const siteUrl = "https://abdrax.vercel.app";

export const metadata: Metadata = {
  title: {
    default: "Abdrax Technologies | #1 Software House in Pakistan",
    template: "%s | Abdrax Technologies",
  },
  description:
    "Abdrax Technologies — Pakistan's trusted software house for web development, mobile app development, AI solutions, software development, and graphic designing. Based in Hassan Abdal, Wah.",
  keywords: [
    "Abdrax Technologies",
    "software house Pakistan",
    "web development Pakistan",
    "app development Pakistan",
    "mobile app development Pakistan",
    "AI solutions Pakistan",
    "software development company Pakistan",
    "graphic designing Pakistan",
    "best software house Pakistan",
    "website development Pakistan",
    "Flutter app development Pakistan",
    "React Next.js developer Pakistan",
    "custom software Pakistan",
    "Hassan Abdal software house",
    "Wah Cantt software company",
    "IT company Pakistan",
    "digital agency Pakistan",
    "web design Pakistan",
    "ecommerce development Pakistan",
    "software company Rawalpindi",
    "software company Islamabad",
    "hire web developer Pakistan",
    "affordable web development Pakistan",
    "startup software Pakistan",
  ],
  authors: [{ name: "Abdrax Technologies", url: siteUrl }],
  creator: "Abdrax Technologies",
  publisher: "Abdrax Technologies",
  metadataBase: new URL(siteUrl),
  alternates: { canonical: "/" },
  category: "technology",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Abdrax Technologies",
    title: "Abdrax Technologies | #1 Software House in Pakistan",
    description:
      "Pakistan's trusted software house. We build websites, mobile apps, AI systems & software that drive real business growth. Based in Hassan Abdal, Wah.",
    images: [
      {
        url: `${siteUrl}/logo.png`,
        width: 1200,
        height: 630,
        alt: "Abdrax Technologies - Software House Pakistan",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Abdrax Technologies | #1 Software House in Pakistan",
    description:
      "Pakistan's trusted software house. Web development, app development, AI solutions & more.",
    images: [`${siteUrl}/logo.png`],
    creator: "@abdraxtech",
  },
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
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
};

// JSON-LD Structured Data for Google
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${siteUrl}/#organization`,
      name: "Abdrax Technologies",
      url: siteUrl,
      logo: {
        "@type": "ImageObject",
        url: `${siteUrl}/logo.png`,
      },
      description:
        "Pakistan's trusted software house for web development, mobile app development, AI solutions, software development, and graphic designing.",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Hassan Abdal",
        addressLocality: "Wah",
        addressRegion: "Punjab",
        postalCode: "47040",
        addressCountry: "PK",
      },
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+92-370-137-1522",
        contactType: "customer service",
        email: "abdraxoffical@gmail.com",
        availableLanguage: ["English", "Urdu"],
      },
      sameAs: [
        "https://github.com/MuhammadAbdullahSiddiqueasdfas",
      ],
      foundingLocation: "Hassan Abdal, Pakistan",
      areaServed: "Worldwide",
      serviceType: [
        "Web Development",
        "Mobile App Development",
        "AI Solutions",
        "Software Development",
        "Graphic Designing",
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: "Abdrax Technologies",
      description: "Pakistan's trusted software house",
      publisher: { "@id": `${siteUrl}/#organization` },
      potentialAction: {
        "@type": "SearchAction",
        target: {
          "@type": "EntryPoint",
          urlTemplate: `${siteUrl}/?q={search_term_string}`,
        },
        "query-input": "required name=search_term_string",
      },
    },
    {
      "@type": "LocalBusiness",
      "@id": `${siteUrl}/#localbusiness`,
      name: "Abdrax Technologies",
      image: `${siteUrl}/logo.png`,
      url: siteUrl,
      telephone: "+92-370-137-1522",
      email: "abdraxoffical@gmail.com",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Hassan Abdal",
        addressLocality: "Wah",
        addressRegion: "Punjab",
        postalCode: "47040",
        addressCountry: "PK",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 33.8215,
        longitude: 72.6892,
      },
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
          opens: "09:00",
          closes: "19:00",
        },
      ],
      priceRange: "$$",
      currenciesAccepted: "PKR, USD",
      paymentAccepted: "Cash, Bank Transfer",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn("scroll-smooth", "font-sans", geist.variable)}>
      <head>
        <meta name="geo.region" content="PK-PB" />
        <meta name="geo.placename" content="Hassan Abdal, Wah, Pakistan" />
        <meta name="geo.position" content="33.8215;72.6892" />
        <meta name="ICBM" content="33.8215, 72.6892" />
        <meta name="language" content="English" />
        <meta name="revisit-after" content="7 days" />
        <meta name="rating" content="general" />
        <link rel="canonical" href={siteUrl} />
      </head>
      <body className="bg-black text-white antialiased overflow-x-hidden">
        <Script
          id="json-ld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <ScrollToTop />
        <Navbar />
        <main className="min-h-screen overflow-x-hidden">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
