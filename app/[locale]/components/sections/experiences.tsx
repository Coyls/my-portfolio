import { Button } from "@/components/ui/button";
import { getScopedI18n } from "@/locales/server";
import {
  SiAngular,
  SiGraphql,
  SiNestjs,
  SiNextdotjs,
  SiPrisma,
} from "@icons-pack/react-simple-icons";
import Link from "next/link";
import { Section } from "../utils/section";

export const Experiences: React.FC = async () => {
  const t = await getScopedI18n("experiences");

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
            <h4>{t("prismo.career")}</h4>
          </div>
          <div className="text-right">
            <h5>2021 - 2023</h5>
            <h5>{t("prismo.status")}</h5>
          </div>
        </div>

        <p className="max-w-xl text-justify text-base">
          {t("prismo.description")} <br />
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
