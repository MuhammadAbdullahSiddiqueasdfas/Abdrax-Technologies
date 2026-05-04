import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

export const metadata: Metadata = {
  title: {
    default: "Abdrax Technologies | Web, App & AI Development in Pakistan",
    template: "%s | Abdrax Technologies",
  },
  description:
    "Abdrax Technologies is a leading software company in Pakistan offering web development, mobile app development, AI solutions, software development, graphic designing, and social media management.",
  keywords: [
    "Abdrax Technologies",
    "web development Pakistan",
    "app development Pakistan",
    "software company Pakistan",
    "AI solutions Pakistan",
    "graphic designing Pakistan",
    "social media management Pakistan",
    "Next.js development",
    "React development",
    "mobile app development",
    "software development company",
    "Hassan Abdal tech company",
    "Wah Cantt software house",
    "best software house Pakistan",
    "website development Pakistan",
    "Flutter app development",
    "custom software Pakistan",
  ],
  authors: [{ name: "Abdrax Technologies", url: "https://abdrax.vercel.app" }],
  creator: "Abdrax Technologies",
  publisher: "Abdrax Technologies",
  metadataBase: new URL("https://abdrax.vercel.app"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://abdrax.vercel.app",
    siteName: "Abdrax Technologies",
    title: "Abdrax Technologies | Web, App & AI Development in Pakistan",
    description:
      "Transform your ideas into powerful digital solutions. Web development, app development, AI, software, graphic design & social media management in Pakistan.",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Abdrax Technologies",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Abdrax Technologies | Web, App & AI Development in Pakistan",
    description:
      "Transform your ideas into powerful digital solutions. Web development, app development, AI, software, graphic design & social media management in Pakistan.",
    images: ["/logo.png"],
    creator: "@abdraxtech",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
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
  verification: {
    google: "",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-black text-white antialiased">
        <ScrollToTop />
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
