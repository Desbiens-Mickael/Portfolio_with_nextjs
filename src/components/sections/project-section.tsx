import TitleSection from "./title-section";
import ProjectCard from "../project/project-card";
import SectionComponent from "./section-component";

export default function ProjectSection() {
  const projects = [
    {
      id: 1,
      title: "1283, Montbéliard,cite libre",
      text: "Montbéliard est un jeu d'Histoire en ligne développer pour un professeur de collège. Le jeu était déjà appliqué à ses élèves en classe, il souhaitait leur proposer en format numérique. Ce projet a été réalisé en équipe de trois personnes, sur une période de sept semaines en méthodologie agile.",
      RepositoryUrl: "https://github.com/Desbiens-Mickael/1283-montbeliard-cite-libre",
      imagePath: "/assets/montbeliart.jpg",
      techs: ["Symfony", "Twig", "Bootstrap", "MySQL"],
      ProjectUrl: "https://montbeliard-cite-libre.mickaeldesbiens.com/",
    },
    {
      id: 2,
      title: "BlindTest",
      text: "Ce projet a été réalisé en équipe de quatre en trois semaines. Le but était de créer une application, un quizz musical en utilisant une architecture MVC et procéder à une modélisation de la base de données. Nous avions des tâches à réaliser que nous avons développé dans les temps, ce qui nous a permis de rajouter des features intéressantes.",
      RepositoryUrl: "https://github.com/Desbiens-Mickael/Blind-test",
      imagePath: "/assets/blind-tests.jpg",
      techs: ["PHP", "Twig", "Bootstrap", "Sass", "MySQL"],
      ProjectUrl: "https://blind-test.mickaeldesbiens.com/",
    },
    {
      id: 3,
      title: "Potes'Agers",
      text: "Potes'agers est une entreprise fictive qui lutte contre le gaspillage alimentaire.Voilà le topo : des tonnes de produits sont gaspillés tous les jours, des millions de Français n’ont pas assez, d’autres souhaitent consommer mieux et s’engager. Alors chez Potes'agers on se bouge contre le gaspillage ! Lors de ce hackathon sur l'écologie organisé par la Wild Code School, nous avons conçu une application qui permet de donner et/ou récupérer de la nourriture autour de chez soi ou bien de partager son potager.",
      RepositoryUrl: "https://github.com/Desbiens-Mickael/potes_agers",
      imagePath: "/assets/potes-agers.jpg",
      techs: ["PHP", "Twig", "Bootstrap", "MySQL"],
      ProjectUrl: "https://potes-agers.mickaeldesbiens.com/",
    },
  ];

  return (
    <SectionComponent id="projects">
      <TitleSection text={"Mes Projets"} />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 justify-items-center">
        {projects.map((project) => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </div>
    </SectionComponent>
  );
}
