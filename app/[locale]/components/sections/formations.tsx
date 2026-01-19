import { SiteConfig } from "@/config/site.config";
// import { isAfterTargetDate } from "@/lib/date.utils";
import { getCurrentLocale, getScopedI18n } from "@/locales/server";
import { GobelinsEn, GobelinsFr } from "../lang-components";
import { Formation, Section } from "../utils";

export const Formations: React.FC = async () => {
  const { gobelins, bootdev } = SiteConfig.formations;
  const t = await getScopedI18n("formations");
  const locale = await getCurrentLocale();

  return (
    <Section className="flex flex-col gap-8">
      <h2>formations.</h2>
      <Formation
        title={t("bootdev.title")}
        subtitle="Boot.dev"
        date="2025 - now"
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
