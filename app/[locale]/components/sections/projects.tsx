import { Button } from "@/components/ui/button";
import { getScopedI18n } from "@/locales/server";
import {
  SiD3dotjs,
  SiDocker,
  SiExpress,
  SiGnubash,
  SiGreensock,
  SiN8n,
  SiNeo4j,
  SiNextdotjs,
  SiPrisma,
  SiTailwindcss,
  SiTraefikproxy,
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
          name={
            <>
              <span className="hidden sm:inline">My n8n Infrastructure</span>
              <span className="inline sm:hidden">My n8n Infra</span>
            </>
          }
          description={t("n8n-infra.description")}
          badges={["docker", "IA"]}
          technologies={[
            SiGnubash,
            SiDocker,
            SiTraefikproxy,
            SiN8n,
            // IconQdrant,
            // SiPostgresql,
          ]}
          link="https://github.com/Coyls/n8n-infra"
          githubLink="https://github.com/Coyls/n8n-infra"
        />

        <Project
          className="md:col-span-2"
          name="Septm"
          description={t("septem.description")}
          badges={["fullstack"]}
          technologies={[SiTypescript, SiNextdotjs, SiTailwindcss, SiPrisma]}
          link="https://septm.app"
        />

        <Project
          className="md:col-span-2"
          name="Wake"
          description={t("wake.description")}
          badges={["frontend"]}
          technologies={[SiTypescript, SiNextdotjs, SiTailwindcss, SiGreensock]}
          link="https://wake-coyls.vercel.app"
          githubLink="https://github.com/Coyls/wake"
        />

        <Project
          className="md:col-span-3"
          name={"KTK | Backend"}
          badges={["backend", "dataviz"]}
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
