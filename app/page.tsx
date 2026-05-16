import type { Metadata } from "next";
import HeroSection from "@/app/home/HeroSection";
import StatsSection from "@/app/home/StatsSection";
import ServicesPreview from "@/app/home/ServicesPreview";
import WhyChooseUs from "@/app/home/WhyChooseUs";
import TechStack from "@/app/home/TechStack";
import TestimonialsSection from "@/app/home/TestimonialsSection";
import CTASection from "@/app/home/CTASection";
import ContactSection from "@/app/home/ContactSection";

export const metadata: Metadata = {
  title: "Abdrax Technologies | #1 Software House in Pakistan",
  description:
    "Abdrax Technologies — Pakistan's #1 software house for web development, mobile app development, AI solutions, software development, and graphic designing. Get a free quote today!",
  alternates: { canonical: "https://abdrax.vercel.app" },
};

export default function Home() {
  return (
    <div className="w-full overflow-x-hidden">
      <HeroSection />
      <StatsSection />
      <ServicesPreview />
      <WhyChooseUs />
      <TechStack />
      <TestimonialsSection />
      <CTASection />
      <ContactSection />
    </div>
  );
}
