import type { Metadata } from "next";
import HeroSection from "@/components/home/HeroSection";
import StatsSection from "@/components/home/StatsSection";
import ServicesPreview from "@/components/home/ServicesPreview";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import TechStack from "@/components/home/TechStack";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import CTASection from "@/components/home/CTASection";
import ContactSection from "@/components/home/ContactSection";

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
