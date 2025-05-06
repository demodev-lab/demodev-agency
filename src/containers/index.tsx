"use server";

import HeroSection from "@/containers/sections/hero-section";
import OutsourcingSection from "./sections/outsourcing-section";
import GuaranteeSection from "./sections/guarantee-section";
import FeatureSection from "./sections/features-section";
import AIToolsSection from "./sections/ai-tools-section";
import PortfolioSection from "@/containers/sections/portfolio-section";
import TestimonialSection from "@/containers/sections/testimonials-section";
import ContactSection from "@/containers/sections/contact-section";
import ScrollContainerSection from "@/containers/sections/scroll-container-section";
import Footer from "@/components/footer";
import GAPageView from "@/components/analytics/ga-page-view";
import AnimationInitialize from "@/components/animation-initialize";

export default async function Index() {
  return (
    <main className="flex flex-col w-full min-h-screen overflow-hidden bg-white">
      <GAPageView />
      <AnimationInitialize />
      <HeroSection />
      <AIToolsSection />
      <FeatureSection />
      <OutsourcingSection />
      <GuaranteeSection />
      <ScrollContainerSection />
      {/* <EducationSection /> */}
      <PortfolioSection />
      <TestimonialSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
