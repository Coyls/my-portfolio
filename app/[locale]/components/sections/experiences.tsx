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
          <h4 className="font-bold">{t("frontend.title")}</h4>
          <ul className="flex list-inside flex-col gap-2">
            <li>
              <span className="font-bold">{t("frontend.features")}</span>
              <ul className="list-inside list-disc px-4">
                <li>
                  <span className="font-bold">Angular</span> /{" "}
                  <span className="font-bold">Next.js</span>
                </li>
              </ul>
            </li>
            <li>
              <span className="font-bold">{t("frontend.integration")}</span>
              <ul className="list-inside list-disc px-4">
                <li>{t("frontend.migrations.migration1")}</li>
                <li>{t("frontend.migrations.migration2")}</li>
              </ul>
            </li>
            <li>
              {t("frontend.complexForms")}
              <ul className="list-inside list-disc px-4">
                <li>{t("frontend.complexFormsDetails.detail1")}</li>
                <li>{t("frontend.complexFormsDetails.detail2")}</li>
              </ul>
            </li>
            <li>{t("frontend.graphics")}</li>
            <li>{t("frontend.internationalization")}</li>
          </ul>
          <h4 className="font-bold">{t("backend.title")}</h4>
          <ul className="flex list-inside flex-col gap-2">
            <li>{t("backend.graphql")}</li>
            <li>{t("backend.pdfTool")}</li>
            <li>{t("backend.prismaSchemas")}</li>
          </ul>
          {/* ---------------------------- */}
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
