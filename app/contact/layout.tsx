import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Get a Free Quote",
  description:
    "Contact Abdrax Technologies for a free consultation. We offer web development, app development, AI & software services in Pakistan. Based in Hassan Abdal, Wah. Reply within 24 hours.",
  keywords: [
    "contact Abdrax Technologies",
    "hire web developer Pakistan",
    "software development quote Pakistan",
    "free consultation software Pakistan",
    "app development inquiry Pakistan",
    "Hassan Abdal software company contact",
    "get website made Pakistan",
  ],
  alternates: { canonical: "https://abdrax.vercel.app/contact" },
  openGraph: {
    title: "Contact Abdrax Technologies | Free Consultation",
    description:
      "Have a project in mind? Contact Abdrax Technologies for a free consultation. We respond within 24 hours.",
    url: "https://abdrax.vercel.app/contact",
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
