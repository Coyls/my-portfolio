import { Button } from "@/components/ui/button";
import { getScopedI18n } from "@/locales/server";
import {
  SiGreensock,
  SiNextdotjs,
  SiPostgresql,
  SiPrisma,
  SiTailwindcss,
} from "@icons-pack/react-simple-icons";
import Link from "next/link";
import { Project } from "../utils/project";
import { Section } from "../utils/section";

export const Projects: React.FC = async () => {
  const t = await getScopedI18n("projects");

  return (
    <Section className="flex flex-col gap-8">
      <h2>projects.</h2>
      <div className="flex flex-col gap-4 px-8">
        <div className="flex flex-row gap-4">
          <Project
            className="flex-3"
            name="Septem"
            description={t("septem.description")}
            technologies={[SiNextdotjs, SiTailwindcss, SiPrisma, SiPostgresql]}
            // todo: ajouter le lien
            link="https://github.com/Coyls"
          />
        </div>

        <div className="flex flex-row gap-4">
          <Project
            className="flex-3"
            name="Wake"
            description={t("wake.description")}
            technologies={[SiNextdotjs, SiTailwindcss, SiGreensock]}
            link="https://wake-coyls.vercel.app"
            githubLink="https://github.com/Coyls/wake"
          />
          <Project
            className="flex-2"
            name="Siah"
            description={t("siah.description")}
            technologies={[SiNextdotjs, SiTailwindcss]}
            link="https://workshop-dataviz.vercel.app/"
            githubLink="https://github.com/Coyls/workshop-dataviz"
          />
        </div>
        <div className="rounded-lg bg-primary/5 p-8 text-center text-sm">
          {t("more.description")}
          <Link href="https://github.com/Coyls" target="_blank">
            <Button variant="link" className="h-auto p-0">
              Github
            </Button>{" "}
            !
          </Link>
        </div>
      </div>
    </Section>
  );
};
