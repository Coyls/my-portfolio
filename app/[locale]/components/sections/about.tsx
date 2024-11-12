import { getScopedI18n } from "@/locales/server";
import { MDXRemote } from "next-mdx-remote/rsc";
import { Section } from "../utils/section";

export const About: React.FC = async () => {
  const t = await getScopedI18n("about");

  return (
    <Section className="flex flex-col gap-8">
      <h2 id="about">about.</h2>
      <article className="mdx-container flex list-disc flex-col gap-6 px-0 md:px-8">
        <MDXRemote source={t("content")} />
      </article>
    </Section>
  );
};
