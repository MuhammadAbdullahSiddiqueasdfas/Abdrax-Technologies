import HeroSection from "@/components/home/HeroSection";
import StatsSection from "@/components/home/StatsSection";
import ServicesPreview from "@/components/home/ServicesPreview";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import TechStack from "@/components/home/TechStack";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import CTASection from "@/components/home/CTASection";
import ContactSection from "@/components/home/ContactSection";

export default function Home() {
  return (
    <div className="pt-32">
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
