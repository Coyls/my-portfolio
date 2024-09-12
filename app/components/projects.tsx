import { Button } from "@/components/ui/button";
import {
  SiGreensock,
  SiI18next,
  SiNextdotjs,
  SiPostgresql,
  SiPrisma,
  SiTailwindcss,
} from "@icons-pack/react-simple-icons";
import Link from "next/link";
import { Project } from "./project";
import { Section } from "./section";

export const Projects: React.FC = () => {
  return (
    <Section className="flex flex-col gap-8">
      <h2>projects.</h2>
      <div className="flex flex-col gap-8 px-8">
        <Project
          name="Septem"
          description="Application Web pour compter les point et obtenir des statistiques de
          ses parties du jeu de société Seven Wonder. Objectif crée une Saas
          utile et progresser sur ma stack."
          technologies={[SiNextdotjs, SiTailwindcss, SiPrisma, SiPostgresql]}
          // todo: ajouter lien
          link="/"
        />
        <div className="flex flex-row gap-8">
          <Project
            name="Wake"
            description="Landing page pour un projet d'exposition interactive. 
            J'ai concu le site du Design au Dévelopement. J'ai utilisé GSAP pour la plus part des animations."
            technologies={[SiNextdotjs, SiTailwindcss, SiGreensock, SiI18next]}
            link="https://wake-coyls.vercel.app"
          />
          <Project
            name="Siah"
            description="Projet réaliser en une semaine pour un projet d'etude.
            Objectif realssiser un site de datavisualisation. Je me suis occupé de la plus part des animation du site.
            J'ai créé la logique Flip-book pour les animation au scroll."
            technologies={[SiNextdotjs, SiTailwindcss]}
            link="https://workshop-dataviz.vercel.app/"
          />
        </div>
        <div className="rounded-2xl bg-primary/5 p-8 text-center">
          Envie de voir plus de projets ? Jeter un oeil à mon{" "}
          <Link href="https://github.com/Coyls" target="_blank">
            <Button variant="link" className="p-0 text-base">
              Github
            </Button>{" "}
            !
          </Link>
        </div>
      </div>
    </Section>
  );
};

export default Projects;
