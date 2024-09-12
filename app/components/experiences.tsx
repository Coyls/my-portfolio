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
    <Section className="flex flex-col gap-8">
      <h2>experiences.</h2>
      <div className="flex flex-col gap-4 px-8">
        <div className="flex flex-row justify-between">
          <div>
            <Link href="https://prismo.io/" target="_blank">
              <Button variant="link" className="p-0">
                <h3>PRISMO</h3>
              </Button>
            </Link>
            <h4>Développeur Web Full Stack</h4>
          </div>
          <div className="text-right">
            <h5>2021 - 2023</h5>
            <h5>alternant</h5>
          </div>
        </div>
        <p className="max-w-xl text-justify text-base">
          Développement des différentes applications web de l’entreprise. Aussi
          bien Front-end que Back-end. Refonte (a 2 reprise) des questionnaire
          DISC (Aura). Développement du CV Prismo.
        </p>
        <div className="flex flex-row gap-4">
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
