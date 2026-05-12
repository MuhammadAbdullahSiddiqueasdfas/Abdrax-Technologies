import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Services | Web, App, AI & Software Development",
  description:
    "Abdrax Technologies offers professional web development, mobile app development, AI solutions, software development, and graphic designing in Pakistan.",
  keywords: [
    "web development services Pakistan",
    "mobile app development Pakistan",
    "AI solutions Pakistan",
    "software development services Pakistan",
    "graphic designing Pakistan",
    "Flutter development Pakistan",
    "React Next.js development Pakistan",
    "custom software development Pakistan",
    "digital services Pakistan",
    "affordable web development Pakistan",
  ],
  alternates: { canonical: "https://abdrax.vercel.app/services" },
  openGraph: {
    title: "Services | Abdrax Technologies Pakistan",
    description:
      "Web development, app development, AI, software, and graphic design — all under one roof in Pakistan.",
    url: "https://abdrax.vercel.app/services",
  },
};

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
