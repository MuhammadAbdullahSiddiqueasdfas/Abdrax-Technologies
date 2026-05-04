import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Work & Portfolio | Abdrax Technologies",
  description:
    "Explore Abdrax Technologies' portfolio — web apps, mobile apps, AI projects, software systems & design work delivered for clients across Pakistan and globally.",
  keywords: [
    "Abdrax Technologies portfolio",
    "software projects Pakistan",
    "web development portfolio Pakistan",
    "app development portfolio",
    "AI projects Pakistan",
    "software house portfolio Pakistan",
    "best web developer Pakistan",
    "completed projects Pakistan",
  ],
  alternates: { canonical: "https://abdrax.vercel.app/our-work" },
  openGraph: {
    title: "Portfolio | Abdrax Technologies",
    description:
      "See the projects we've built — web apps, mobile apps, AI systems & more for clients across Pakistan.",
    url: "https://abdrax.vercel.app/our-work",
  },
};

export default function OurWorkLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
