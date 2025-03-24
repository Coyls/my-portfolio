import { getCurrentLocale } from "@/locales/server";
import { AboutEn, AboutFr } from "../lang-components";
import { Section } from "../utils/section";

export const About: React.FC = async () => {
  const locale = await getCurrentLocale();

  return (
    <Section className="flex flex-col gap-8">
      <h2 id="about">about.</h2>
      <article className="flex flex-col gap-4 px-0 md:px-8">
        {locale === "fr" ? <AboutFr /> : <AboutEn />}
      </article>
    </Section>
  );
};
