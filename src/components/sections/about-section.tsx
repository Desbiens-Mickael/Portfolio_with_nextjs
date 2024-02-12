"use client";

import Image from "next/image";
import TitleSection from "./title-section";
import LinkReseau from "../Link-reseau";
import { GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";
import Reveal from "@/components/animation/Reveal";
import SectionComponent from "./section-component";

export default function AboutSection() {
  const text = [
    "Après 20 ans d'expérience dans le secteur de la bouche 🍽, une passion pour la création et l'innovation m'a conduit vers un nouveau défi : la technologie de l'information 💻. Cette transition m'a permis d'obtenir le titre RNCP de développeur web 👨‍💻 ainsi que celui de concepteur développeur d'application 📱, marquant ainsi le début d'une nouvelle ère dans ma carrière professionnelle.",
    "Durant cette période de reconversion, j'ai eu l'opportunité de consolider mes compétences à travers une alternance d'un an au sein d'une agence web 🏢. Cette expérience enrichissante m'a permis de travailler sur divers projets, d'affiner mes compétences techniques et de développer une approche méthodique et créative dans le développement de solutions web et d'applications.",
    "Aujourd'hui, en tant que développeur web et concepteur d'applications, je suis passionné par la possibilité de transformer les idées en réalité numérique 🚀. Ma démarche combine une solide compréhension des besoins des utilisateurs avec une expertise technique, me permettant de créer des expériences digitales intuitives et efficaces.",
    "Mes années d'expérience dans un secteur non technologique m'ont appris l'importance du travail d'équipe 🤝, de la communication 🗣 et de l'adaptabilité 🌱, des compétences que j'applique quotidiennement dans ma pratique du développement. Je suis désormais à la recherche de nouvelles opportunités pour apporter ma contribution à des projets innovants, en mettant à profit ma passion et mes compétences en développement web et conception d'applications.",
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
