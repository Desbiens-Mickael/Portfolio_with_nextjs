"use client";

import BadgeTechno from "../badge-techno";
import SectionComponent from "./section-component";
import TitleSection from "./title-section";
import Reveal from "@/components/animation/Reveal";

export default function SkillSection() {
  const frontEnd = ["React", "Next.js", "Tailwind CSS", "Bootstrap", "TypeScript", "Apollo Client"];
  const backEnd = ["Node.js", "Express.js", "MySQL", "PostgreSQL", "GraphQL", "PHP", "Symfony", "Appolo Server", "Docker"];
  const mobile = ["React Native", "Expo"];

  return (
    <SectionComponent id="skills">
      <TitleSection inverse text={"Techno"} />
      <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="flex-1">
          <Reveal width="w-full">
            <h4 className="text-center text-xl md:text-2xl font-bold mb-5">
              <span className="inline-block bg-primary w-3 h-3 md:w-5 md:h-5 me-5 rounded-full"></span>
              Front end
            </h4>
          </Reveal>
          <Reveal slideDelay={0.25} width="w-full">
            <div className="w-full flex flex-wrap gap-3 p-2">
              {frontEnd.map((techno, id) => (
                <BadgeTechno key={id} technoName={techno} selected={false} />
              ))}
            </div>
          </Reveal>
        </div>
        <div className="flex-1">
          <Reveal width="w-full">
            <h4 className="text-center text-xl md:text-2xl font-bold mb-5">
              <span className="inline-block bg-primary w-3 h-3 md:w-5 md:h-5 me-5 rounded-full"></span>
              Back end
            </h4>
          </Reveal>
          <Reveal slideDelay={0.25} width="w-full">
            <div className="w-full flex flex-wrap gap-3 p-2">
              {backEnd.map((techno, id) => (
                <BadgeTechno key={id} technoName={techno} selected={false} />
              ))}
            </div>
          </Reveal>
        </div>
        <div className="flex-1">
          <Reveal width="w-full">
            <h4 className="text-center text-xl md:text-2xl font-bold mb-5">
              <span className="inline-block bg-primary w-3 h-3 md:w-5 md:h-5 me-5 rounded-full"></span>
              Mobile
            </h4>
          </Reveal>
          <Reveal slideDelay={0.25} width="w-full">
            <div className="w-full flex flex-wrap gap-3 p-2">
              {mobile.map((techno, id) => (
                <BadgeTechno key={id} technoName={techno} selected={false} />
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </SectionComponent>
  );
}
