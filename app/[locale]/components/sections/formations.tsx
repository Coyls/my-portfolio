import { SiteConfig } from "@/config/site.config";
import { isAfterTargetDate } from "@/lib/date.utils";
import { getCurrentLocale, getScopedI18n } from "@/locales/server";
import { GobelinsEn, GobelinsFr } from "../lang-components";
import { Formation, Section } from "../utils";

export const Formations: React.FC = async () => {
  const afterAugust = isAfterTargetDate("2025-08-31");
  const dateEfrei = afterAugust ? "2025 - 2027" : "sept. 2025 - 2027";
  const { gobelins, bootdev, efrei } = SiteConfig.formations;
  const t = await getScopedI18n("formations");
  const locale = await getCurrentLocale();

  return (
    <Section className="flex flex-col gap-8">
      <h2>formations.</h2>
      {/* <Formation
        title={t("efrei.title")}
        subtitle="EFREI"
        date={dateEfrei}
        location="Bordeaux"
        isVisible={efrei.isVisible}
      /> */}
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
