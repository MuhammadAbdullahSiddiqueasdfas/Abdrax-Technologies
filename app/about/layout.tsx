import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Abdrax Technologies",
  description:
    "Learn about Abdrax Technologies — Pakistan's trusted software house based in Hassan Abdal, Wah. We deliver world-class web, app, AI & software solutions.",
  keywords: [
    "about Abdrax Technologies",
    "software house Pakistan about",
    "IT company Pakistan",
    "tech company Hassan Abdal",
    "software development team Pakistan",
  ],
  alternates: { canonical: "https://abdrax.vercel.app/about" },
  openGraph: {
    title: "About Abdrax Technologies | Software House Pakistan",
    description:
      "Meet the team behind Abdrax Technologies. We build world-class digital solutions for businesses across Pakistan and beyond.",
    url: "https://abdrax.vercel.app/about",
  },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
