import { getScopedI18n } from "@/locales/server";
import { Section } from "../utils/section";

export const About: React.FC = async () => {
  const t = await getScopedI18n("about");

  return (
    <Section className="flex flex-col gap-8">
      <h2 id="about">about.</h2>
      <article className="flex flex-col gap-6 px-0 md:px-8">
        <p>{t("intro")}</p>
        <h3 className="font-caption leading-none">{t("missionsTitle")}</h3>
        <p>
          <span className="font-bold">{t("domainTitle")}</span>
          {t("missions")}
        </p>
        <h3 className="font-caption leading-none">{t("sectorsTitle")}</h3>
        <p>
          <span className="font-bold">{t("sectors.saasTitle")}</span>
          {t("sectors.saas")}
        </p>
        <p>
          <span className="font-bold">{t("sectors.startupsTitle")}</span>
          {t("sectors.startups")}
        </p>
        <h3 className="font-caption leading-none">{t("backendSkillsTitle")}</h3>
        <p>{t("backendSkills")}</p>
      </article>
    </Section>
  );
};
