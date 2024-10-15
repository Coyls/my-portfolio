// import { getScopedI18n } from "@/locales/server";
import { Section } from "../utils/section";

export const About: React.FC = async () => {
  // const t = await getScopedI18n("about");

  return (
    <Section className="flex flex-col gap-8">
      <h2>about.</h2>
      <article className="flex flex-col gap-6 px-0 md:px-8">
        <p>
          <span className="font-bold">
            Je suis ouvert aux missions freelance en tant que développeur
            Frontend,{" "}
          </span>
          <span className="font-bold">
            spécialisé en Typescript, Next.js, et React.
          </span>
        </p>
        <h4 className="font-bold">Missions recherchées :</h4>
        <p>
          <span className="font-bold">Développement Frontend</span> : J&apos;ai
          une solide maîtrise des technologies Typescript, Next.js, et React,
          que j&apos;utilise pour créer des applications web performantes.
          J&apos;interviens sur des missions de création, refonte ou ajout de
          fonctionnalités.
        </p>
        <h4 className="font-bold">Secteurs ciblés :</h4>
        <p>
          <span className="font-bold">SaaS B2B</span> : Expérience dans les SaaS
          orientés RH, avec un intérêt pour d&apos;autres secteurs proposant des
          solutions SaaS innovantes.
        </p>
        <p>
          <span className="font-bold">Startups</span> : Préférence pour des
          environnements à taille humaine.
        </p>
        <h4 className="font-bold">Compétences Back-end (en complément) :</h4>
        <p>
          <span className="font-bold">
            Bases en NestJS, API REST, GraphQL, et Prisma
          </span>
          , me permettant de collaborer efficacement sur des projets complets.
        </p>
      </article>
    </Section>
  );
};
