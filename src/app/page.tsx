import AboutSection from "@/components/sections/about-section";
import ContactSection from "@/components/sections/contact-section";
import HomeSection from "@/components/sections/home-section";
import ProjectSection from "@/components/sections/project-section";
import SkillSection from "@/components/sections/skill-section";

export default function Home() {
  return (
    <div className="flex min-h-dvh flex-col items-center justify-between">
      <HomeSection />
      <AboutSection />
      <SkillSection />
      <ProjectSection />
      <ContactSection />
    </div>
  );
}
