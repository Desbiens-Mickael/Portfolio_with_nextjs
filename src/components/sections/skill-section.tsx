"use client";

import Reveal from "@/components/animation/Reveal";
import BadgeTechno from "../badge-techno";
import SectionComponent from "./section-component";
import TitleSection from "./title-section";

export default function SkillSection() {
  const skills = [
    { title: "Front end", technos: ["React", "Next.js", "Angular", "TypeScript", "Apollo Client", "Tailwind CSS", "Bootstrap"] },
    { title: "Back end", technos: ["Node.js", "Express.js", "MySQL", "PostgreSQL", "Java", "PHP", "Apollo Server", "Docker", "Spring Boot", "Symfony"] },
    { title: "Mobile", technos: ["React Native", "Expo"] },
    { title: "API", technos: ["GraphQL", "REST"] },
  ];

  return (
    <SectionComponent id="skills">
      <TitleSection inverse text={"Skill"} />
      <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6">
        {skills.map((skill, id) => (
          <div key={id} className="flex-1">
            <Reveal width="w-full">
              <h4 className="text-center text-xl md:text-2xl font-bold mb-5">
                <span className="inline-block bg-primary w-3 h-3 md:w-5 md:h-5 me-5 rounded-full"></span>
                {skill.title}
              </h4>
            </Reveal>
            <Reveal slideDelay={0.25} width="w-full">
              <div className="w-full flex flex-wrap gap-3 p-2">
                {skill.technos.map((techno, id) => (
                  <BadgeTechno key={id} technoName={techno} selected={false} />
                ))}
              </div>
            </Reveal>
          </div>
        ))}
      </div>
    </SectionComponent>
  );
}
