import { AboutSection } from "../components/about-section";
import { HomeIntro } from "../components/home-intro";
import { ProjectsSection } from "../components/projects-section";
import { ServicesSection } from "../components/services-section";
import { SkillsSection } from "../components/skills-section";
import { TestimonialsSection } from "../components/testimonials-section";
import { WorkSection } from "../components/work-section";

export function Welcome() {
  return (
    <main>
      <HomeIntro />

      <ServicesSection />

      <AboutSection />

      <SkillsSection />

      <ProjectsSection />

      <WorkSection />

      <TestimonialsSection />
    </main>
  );
}
