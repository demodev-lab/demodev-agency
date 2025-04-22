"use server";

import HeroSection from "@/containers/sections/hero-section";
import OutsourcingSection from "./sections/outsourcing-section";
import GuaranteeSection from "./sections/guarantee-section";
import FeatureSection from "./sections/features-section";
import PortfolioSection from "@/containers/sections/portfolio-section";
import TestimonialSection from "@/containers/sections/testimonials-section";
import ContactSection from "@/containers/sections/contact-section";
import ScrollContainerSection from "@/containers/sections/scroll-container-section";
import Footer from "@/components/footer";
import PopupNoticeWrapper from "@/containers/popup-notice-wrapper";
import GAPageView from "@/components/analytics/ga-page-view";
import EducationSection from "@/containers/sections/education-section";
import AnimationInitialize from "@/components/animation-initialize";

export default async function Index() {
  return (
    <div className="flex flex-col w-full min-h-screen overflow-x-hidden">
      <GAPageView />
      <AnimationInitialize />
      <PopupNoticeWrapper />
      <HeroSection />
      <FeatureSection />
      <OutsourcingSection />
      <GuaranteeSection />
      <ScrollContainerSection />
      <EducationSection />
      <PortfolioSection />
      <TestimonialSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
