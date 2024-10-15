import { Button } from "@/components/ui/button";
import { getScopedI18n } from "@/locales/server";
import {
  SiAngular,
  SiGraphql,
  SiNestjs,
  SiNextdotjs,
  SiPrisma,
  SiTypescript,
} from "@icons-pack/react-simple-icons";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Section } from "../utils/section";

export const Experiences: React.FC = async () => {
  const t = await getScopedI18n("experiences");

  return (
    <Section className="flex flex-col gap-8">
      <h2>experiences.</h2>
      <div className="flex flex-col gap-4 px-0 md:px-8">
        <div className="flex flex-col justify-between md:flex-row">
          <div>
            <Link href="https://prismo.io/" target="_blank">
              <Button variant="link" className="p-0">
                <h3>PRISMO</h3>
              </Button>
            </Link>
            <h4>{t("prismo.career")}</h4>
          </div>
          <div className="flex flex-col md:text-right">
            <h5>2021 - 2023</h5>
            <h5>{t("prismo.status")}</h5>
          </div>
        </div>

        <article className="flex flex-col gap-4 text-sm md:text-base">
          <h4 className="font-bold">Frontend</h4>

          <ul className="list-inside">
            <li>
              <span className="font-bold">Développement de feature</span> dans
              une <span className="font-bold">Multi-Tenant SaaS</span>
              <ul className="list-inside list-disc px-4">
                <li>
                  <span className="font-bold">Angular</span> et{" "}
                  <span className="font-bold">Next.js</span>
                </li>
              </ul>
            </li>
            <li>
              <span className="font-bold">
                Intégration Frontend Complete de Aura
              </span>{" "}
              (2 fois)
              <ul className="list-inside list-disc px-4">
                <li>
                  Migration <span className="font-bold">Angular</span>{" "}
                  <ArrowRight className="inline-block size-4" />{" "}
                  <span className="font-bold">Next.js</span>
                </li>
                <li>
                  Migration Lib UI Ant Design/Tailwind{" "}
                  <ArrowRight className="inline-block size-4" /> MUI
                </li>
              </ul>
            </li>
            <li>
              Développement de{" "}
              <span className="font-bold">Formulaire Complexe</span>
              <ul className="list-inside list-disc px-4">
                <li>Multi-step</li>
                <li>Gamifié</li>
              </ul>
            </li>
            <li>Intégration de Graphique et Data visualisation</li>
            <li>Internationalisation</li>
          </ul>
          <h4 className="font-bold">Backend</h4>
          <ul className="list-inside">
            <li>
              Création de resolver <span className="font-bold">GraphQL</span>
            </li>
            <li>
              Création d&apos;un outils de{" "}
              <span className="font-bold">génération de PDF</span> en Backend
              avec donnée dynamique : CV Prismo
            </li>
            <li>
              Création de schemas <span className="font-bold">Prisma</span>
            </li>
          </ul>
          <p>
            <Link
              href="https://app.prismo.io/fr/profil/loic-greco/accueil"
              target="_blank"
            >
              <Button variant="link" className="p-0">
                <p className="text-base">App</p>
              </Button>
            </Link>
            {" / "}
            <Link href="https://aura.prismo.io/" target="_blank">
              <Button variant="link" className="p-0">
                <p className="text-base">Aura</p>
              </Button>
            </Link>
            {" / "}
            <Link href="https://helio.prismo.io/" target="_blank">
              <Button variant="link" className="p-0">
                <p className="text-base">Helio</p>
              </Button>
            </Link>
            {" / "}
            <Link href="https://quark.prismo.io/" target="_blank">
              <Button variant="link" className="p-0">
                <p className="text-base">Quark</p>
              </Button>
            </Link>
            {" / "}
            <Link href="https://tools.prismo.io/" target="_blank">
              <Button variant="link" className="p-0">
                <p className="text-base">Tools</p>
              </Button>
            </Link>
          </p>
        </article>

        <div className="flex flex-row gap-4">
          <SiTypescript />
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
