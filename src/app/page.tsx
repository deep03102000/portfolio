import { ClosingCta } from "@/components/cta";
import { Hero } from "@/components/hero";
import {
  AboutSection,
  EducationSection,
  ResearchSection,
  ResumeSection,
  TechnologiesSection,
  WorkSection,
} from "@/components/home-sections";

export default function HomePage() {
  return (
    <>
      <Hero />
      <AboutSection />
      <WorkSection />
      <TechnologiesSection />
      <ResearchSection />
      <EducationSection />
      <ResumeSection />
      <ClosingCta />
    </>
  );
}
