import ProjectCard from "../project/project-card";
import SectionComponent from "./section-component";
import TitleSection from "./title-section";

export default function ProjectSection() {
  const projects = [
    {
      id: 1,
      title: "Food Buddy",
      text: `Food Buddy est un espace solidaire d'entraide et de partage, offrant la possibilité de proposer ou de participer à des repas suspendus pour les personnes dans le besoin. 
            Ce projet rassemble les commerçants engagés dans cette belle initiative. 

            Food Buddy vise à valoriser les compétences et les valeurs humaines pour redonner vie aux principes fondamentaux de solidarité et d'humanité.
            
            Conçu lors de ma formation(POEC Java/Angular) à la Wild Code School, Food Buddy est un projet d'application web qui a été réalisé en équipe de deux personnes, sur une période de six semaines en méthodologie agile.`,
      RepositoryUrl: [
        { url: "https://github.com/Desbiens-Mickael/food_buddy", title: "Repository du client Angular", textLink: "Client" },
        { url: "https://github.com/Desbiens-Mickael/food_buddy_api", title: "Repository de l'api Spring Boot", textLink: "API" },
      ],
      imagePath: "/assets/food-buddy.jpg",
      techs: ["Angular", "PostgreSQL", "Java", "Spring Boot", "Docker"],
      ProjectUrl: "https://food-buddy.mickaeldesbiens.com/",
    },
    {
      id: 2,
      title: "Green Gesture",
      text: `Green Gesture est une application dédiée aux challenges éco-responsables, où les utilisateurs peuvent remplir une liste d’éco-gestes pour gagner des points.
            Les groupes, créés par n'importe quel utilisateur, sont éphémères et existent uniquement pour la durée d’un challenge, avec des éco-gestes choisis par le créateur.

            Les membres du groupe reçoivent une notification pour participer, et les éco-gestes peuvent être validés en quelques clics, basés sur la bonne foi, avec la possibilité de fournir des preuves.
            La version gratuite permet de jouer entre amis, tandis que les entreprises peuvent souscrire à un abonnement "Partenaire" pour inviter leurs salariés, créer des challenges en équipe, et concevoir des éco-gestes sur mesure.

            L’application favorise également les interactions sociales autour des challenges avec des fonctionnalités comme les commentaires et les likes.
            
            Une application mobile à également été développée, mais n'a pas été publiée.`,

      RepositoryUrl: [{ url: "https://github.com/Desbiens-Mickael/green-gesture", title: "Repository de Green Gesture" }],
      imagePath: "/assets/green-gesture.jpg",
      techs: ["React", "Node.js", "Apollo", "PostgreSQL", "GraphQL", "Tailwind CSS", "Docker", "React Native", "Expo"],
      ProjectUrl: "https://green-gesture.mickaeldesbiens.com/",
    },
    {
      id: 3,
      title: "1283, Montbéliard,cite libre",
      text: `Montbéliard est un jeu d'Histoire en ligne développer pour un professeur de collège.
            Le jeu était déjà appliqué à ses élèves en classe, il souhaitait leur proposer en format numérique.
            
            Ce projet a été réalisé en équipe de trois personnes, sur une période de sept semaines en méthodologie agile.`,
      RepositoryUrl: [{ url: "https://github.com/Desbiens-Mickael/1283-montbeliard-cite-libre", title: "Repository de 1283 Montbéliard Cite Libre" }],
      imagePath: "/assets/montbeliart.jpg",
      techs: ["Symfony", "Twig", "Bootstrap", "MySQL"],
      ProjectUrl: "",
    },
    {
      id: 4,
      title: "BlindTest",
      text: `Le but était de créer une application, un quizz musical en utilisant une architecture MVC et procéder à une modélisation de la base de données.
            
            Nous avions des tâches à réaliser que nous avons développé dans les temps, ce qui nous a permis de rajouter des features intéressantes.
            
            Ce projet a été réalisé en équipe de quatre en trois semaines. `,
      RepositoryUrl: [{ url: "https://github.com/Desbiens-Mickael/Blind-test", title: "Repository de BlindTest" }],
      imagePath: "/assets/blind-tests.jpg",
      techs: ["PHP", "Twig", "Bootstrap", "Sass", "MySQL"],
      ProjectUrl: "",
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
