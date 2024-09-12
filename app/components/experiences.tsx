import { Button } from "@/components/ui/button";
import {
  SiAngular,
  SiGraphql,
  SiNestjs,
  SiNextdotjs,
  SiPrisma,
} from "@icons-pack/react-simple-icons";
import Link from "next/link";
import { Section } from "./section";

export const Experiences: React.FC = () => {
  return (
    <Section className="flex flex-col gap-4">
      <h2 className="text-6xl font-caption">experiences.</h2>
      <div className="px-6 py-4 flex flex-col gap-2">
        <div className="flex flex-row justify-between">
          <div>
            <Link href="https://prismo.io/" target="_blank">
              <Button variant="link" className="p-0">
                <h3 className="text-3xl font-caption">PRISMO</h3>
              </Button>
            </Link>
            <h4 className="text-2xl font-caption">
              Développeur Web Full Stack
            </h4>
          </div>
          <div className="text-right">
            <h3 className="text-xl">2021 - 2023</h3>
            <h4 className="text-xl">alternant</h4>
          </div>
        </div>
        <p className="text-justify text-base max-w-xl">
          Développement des différentes applications web de l’entreprise. Aussi
          bien Front-end que Back-end. Refonte (a 2 reprise) des questionnaire
          DISC (Aura). Développement du CV Prismo.
        </p>
        <div className="flex flex-row gap-3 pt-4">
          <SiNextdotjs />
          <SiAngular />
          <SiNestjs />
          <SiPrisma />
          <SiGraphql />
        </div>
      </div>
    </Section>
  );
};
