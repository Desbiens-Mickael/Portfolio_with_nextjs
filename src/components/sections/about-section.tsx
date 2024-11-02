"use client";

import Reveal from "@/components/animation/Reveal";
import { GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import LinkReseau from "../Link-reseau";
import SectionComponent from "./section-component";
import TitleSection from "./title-section";

export default function AboutSection() {
  const text = [
    "Je suis un développeur web passionné 💻, spécialisé dans la création de solutions digitales performantes et évolutives 🚀. Ma formation et mon expérience m'ont permis de maîtriser un large éventail de technologies telles que React, Angular, Node.js, et Spring Boot, que j'utilise pour transformer des idées en applications concrètes et utiles ✨.",
    "J'ai eu l'opportunité de travailler sur de nombreux projets variés au sein d'une agence web 🏢, ce qui m'a permis de développer une approche créative 🎨 et pragmatique du développement. Je suis toujours prêt à relever de nouveaux défis 💪, à apprendre de nouvelles technologies 📚, et à collaborer avec des équipes dynamiques 🤝 pour créer des expériences utilisateurs intuitives.",
    "Mon approche du développement est centrée sur la compréhension des besoins des utilisateurs 👥 et la création de solutions robustes et élégantes 🛠️. Je suis convaincu que la collaboration, l'écoute 👂, et l'adaptabilité 🌱 sont des valeurs clés pour réussir dans ce domaine.",
    "Toujours en quête de projets ambitieux, je souhaite mettre mes compétences, ma passion ❤️ et mon envie d'apprendre 📈 au service d'une équipe pour contribuer à sa réussite 🤗.",
  ];

  return (
    <SectionComponent id="about" className="px-5 md:px-0">
      <TitleSection text={"A propos de moi"} />
      <div className="flex flex-col justify-between">
        <div>
          <div className="float-none md:float-right w-full md:w-[300px] mb-5 md:m-5">
            <Image src="/assets/profile.jpg" width={400} height={500} alt="Mickaël Desbiens" className="w-full h-auto rounded-sm mx-auto" />
          </div>
          {text.map((t, i) => (
            <Reveal key={i} width="w-auto" className="mb-5 block">
              <p className="text-[1rem] md:text-lg dark:font-light">{t}</p>
            </Reveal>
          ))}
        </div>
        <Reveal>
          <div className="flex items-center">
            <h3 className="text-[1rem] md:text-lg text-primary">{"Mes liens ->"}</h3>
            <div className="flex gap-4 ms-5">
              <LinkReseau url={"https://github.com/Desbiens-Mickael"} title={"Github"}>
                <GitHubLogoIcon width={25} height={25} />
              </LinkReseau>

              <LinkReseau url={"https://www.linkedin.com/in/mickael-desbiens/"} title={"Linkedin"}>
                <LinkedInLogoIcon width={25} height={25} />
              </LinkReseau>
            </div>
          </div>
        </Reveal>
      </div>
    </SectionComponent>
  );
}
