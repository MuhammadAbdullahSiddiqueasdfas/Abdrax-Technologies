import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

export const metadata: Metadata = {
  title: "Abdrax Technologies | Software, Web & App Development",
  description:
    "Abdrax Technologies — Your trusted partner for web development, app development, AI solutions, graphic designing, software development, and social media management in Pakistan.",
  keywords:
    "Abdrax Technologies, web development, app development, AI solutions, software development, graphic designing, Pakistan",
  icons: {
    icon: "/favicon.png",
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
