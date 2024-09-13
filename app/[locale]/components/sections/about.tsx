import { getScopedI18n } from "@/locales/server";
import { Section } from "../utils/section";

export const About: React.FC = async () => {
  const t = await getScopedI18n("about");

  return (
    <Section className="flex flex-col gap-8">
      <h2>about.</h2>
      <p className="px-8 text-justify">{t("description")}</p>
    </Section>
  );
};
