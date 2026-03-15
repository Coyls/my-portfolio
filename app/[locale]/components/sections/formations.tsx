import { IconAws } from "@/components/icons/icon-aws";
import { SiteConfig } from "@/config/site.config";
import { getCurrentLocale, getScopedI18n } from "@/locales/server";
import {
  SiAnsible,
  SiDocker,
  SiGitlab,
  SiGrafana,
  SiKubernetes,
  SiPrometheus,
  SiTerraform,
} from "@icons-pack/react-simple-icons";
import { GobelinsEn, GobelinsFr } from "../lang-components";
import { Formation, Section } from "../utils";

export const Formations: React.FC = async () => {
  const { gobelins, bootdev, cocadmin } = SiteConfig.formations;
  const t = await getScopedI18n("formations");
  const locale = await getCurrentLocale();

  return (
    <Section className="flex flex-col gap-8">
      <h2>formations.</h2>
      <Formation
        title={t("cocadmin.title")}
        subtitle="Thomas Bomboh"
        date="february - march 2026"
        location="Online"
        link="https://cours.cocadmin.com/formation-devops"
        isVisible={cocadmin.isVisible}
      >
        {cocadmin.hasDescription && (
          <article className="flex flex-row gap-4 text-sm md:text-base">
            <SiAnsible />
            <IconAws />
            <SiTerraform />
            <SiDocker />
            <SiKubernetes />
            <SiPrometheus />
            <SiGrafana />
            <SiGitlab title="Gitlab CI/CD" />
          </article>
        )}
      </Formation>
      <Formation
        title={t("bootdev.title")}
        subtitle="Boot.dev"
        date="2026 - now"
        location="Online"
        link="https://boot.dev"
        isVisible={bootdev.isVisible}
      />
      <Formation
        title={t("gobelins.title")}
        subtitle="GOBELINS, L'école de l'image"
        date="2020 - 2023"
        location="Annecy"
        isVisible={gobelins.isVisible}
      >
        {gobelins.hasDescription && (
          <article className="flex flex-col gap-4 text-sm md:text-base">
            {locale === "fr" ? <GobelinsFr /> : <GobelinsEn />}
          </article>
        )}
      </Formation>
    </Section>
  );
};
