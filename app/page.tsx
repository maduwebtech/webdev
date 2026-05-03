import Hero from "@/components/hero";
import StatsSection from "@/components/stats-section";
import FeaturedProjects from "@/components/featured-projects";
import ServicesPreview from "@/components/services-preview";
import TestimonialsPreview from "@/components/testimonials-preview";
import CTASection from "@/components/cta-section";

export default function Home() {
  return (
    <>
      <Hero />
      <StatsSection />
      <FeaturedProjects />
      <ServicesPreview />
      <TestimonialsPreview />
      <CTASection />
    </>
  );
}
