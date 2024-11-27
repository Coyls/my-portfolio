import { Button } from "@/components/ui/button";
import { getScopedI18n } from "@/locales/server";
import {
  SiD3dotjs,
  SiDocker,
  SiExpress,
  SiGreensock,
  SiNeo4j,
  SiNextdotjs,
  SiPostgresql,
  SiPrisma,
  SiResend,
  SiTailwindcss,
  SiTypescript,
} from "@icons-pack/react-simple-icons";
import Link from "next/link";
import { Project } from "../utils/project";
import { Section } from "../utils/section";

export const Projects: React.FC = async () => {
  const t = await getScopedI18n("projects");

  return (
    <Section className="flex flex-col gap-8">
      <h2>projects.</h2>
      <div className="grid grid-cols-1 gap-4 px-0 md:grid-cols-5 md:px-8">
        <Project
          className="md:col-span-3"
          name="Septm"
          description={t("septem.description")}
          technologies={[
            SiTypescript,
            SiNextdotjs,
            SiTailwindcss,
            SiPrisma,
            SiPostgresql,
            SiResend,
          ]}
          link="https://septm.app"
        />

        <Project
          className="md:col-span-2"
          name="Wake"
          description={t("wake.description")}
          technologies={[SiTypescript, SiNextdotjs, SiTailwindcss, SiGreensock]}
          link="https://wake-coyls.vercel.app"
          githubLink="https://github.com/Coyls/wake"
        />

        <Project
          className="md:col-span-2"
          name="Siah"
          description={t("siah.description")}
          technologies={[SiTypescript, SiNextdotjs, SiTailwindcss]}
          link="https://workshop-dataviz.vercel.app/"
          githubLink="https://github.com/Coyls/workshop-dataviz"
          responsive={false}
        />

        <Project
          className="md:col-span-3"
          name={"KTK | Backend"}
          description={t("ktk.description")}
          technologies={[SiTypescript, SiExpress, SiD3dotjs, SiNeo4j, SiDocker]}
          link="https://github.com/Coyls/ktk-dataviz-backend"
          githubLink="https://github.com/Coyls/ktk-dataviz-backend"
        />

        <div className="rounded-lg bg-primary/5 p-4 text-center text-sm md:col-span-5 md:p-8">
          <span className="hidden md:inline">
            {t("more.description.desktop")}
          </span>
          <span className="inline md:hidden">
            {t("more.description.mobile")}
          </span>
          <Link href="https://github.com/Coyls" target="_blank">
            <Button variant="link" className="h-auto p-0">
              Github
            </Button>
            <span>{" !"}</span>
          </Link>
        </div>
      </div>
    </Section>
  );
};
