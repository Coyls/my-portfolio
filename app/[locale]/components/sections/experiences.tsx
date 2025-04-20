import { Button } from "@/components/ui/button";
import { getScopedI18n } from "@/locales/server";
import {
  SiAngular,
  SiDocker,
  SiGraphql,
  SiNestjs,
  SiNextdotjs,
  SiPrisma,
  SiReact,
  SiTypescript,
} from "@icons-pack/react-simple-icons";
import Link from "next/link";
import { Section } from "../utils/section";

export const Experiences: React.FC = async () => {
  const t = await getScopedI18n("experiences");

  return (
    <Section className="flex flex-col gap-8">
      <h2>experiences.</h2>
      <div className="flex flex-col gap-6 px-0 md:px-8">
        <div className="flex flex-col justify-between md:flex-row">
          <div>
            <h3>Freelance</h3>
            <h4>{t("freelance.career")}</h4>
          </div>
          <div className="flex flex-col md:text-right">
            <h5>2024 - 2025</h5>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-6 px-0 md:px-8">
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
          <h5 className="font-bold">{t("prismo.frontend.title")}</h5>
          <ul className="ml-4 flex flex-col">
            <li>{t("prismo.frontend.features")}</li>
            <li>{t("prismo.frontend.integration")}</li>
            <li>{t("prismo.frontend.forms")}</li>
            <li>{t("prismo.frontend.graphics")}</li>
            <li>{t("prismo.frontend.internationalization")}</li>
          </ul>
          <h5 className="font-bold">{t("prismo.backend.title")}</h5>
          <ul className="ml-4 flex flex-col">
            <li>{t("prismo.backend.graphql")}</li>
            <li>{t("prismo.backend.pdfTool")}</li>
            <li>{t("prismo.backend.prismaSchemas")}</li>
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
          <SiReact />
          <SiNextdotjs />
          <SiAngular />
          <SiNestjs />
          <SiGraphql />
          <SiPrisma />
          <SiDocker />
        </div>
      </div>
    </Section>
  );
};
