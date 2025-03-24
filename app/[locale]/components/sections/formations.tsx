import { getCurrentLocale, getScopedI18n } from "@/locales/server";
import { GobelinsEn, GobelinsFr } from "../lang-components";
import { Section } from "../utils/section";

export const Formations: React.FC = async () => {
  const t = await getScopedI18n("formations");
  const locale = await getCurrentLocale();

  return (
    <Section className="flex flex-col gap-8">
      <h2>formations.</h2>
      <div className="flex flex-col gap-6 px-0 md:px-8">
        <div className="flex flex-col justify-between md:flex-row">
          <div>
            <h3>{t("gobelins.title")}</h3>
            <h4>GOBELINS, L&apos;école de l&apos;image</h4>
          </div>
          <div className="flex flex-col md:text-right">
            <h5>2020 - 2023</h5>
            <h5>Annecy</h5>
          </div>
        </div>

        <article className="flex flex-col gap-4 text-sm md:text-base">
          {locale === "fr" ? <GobelinsFr /> : <GobelinsEn />}
        </article>
      </div>
    </Section>
  );
};
