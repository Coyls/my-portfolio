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
      <div className="grid grid-cols-1 gap-4 px-4 md:grid-cols-5 md:px-8">
        <Project
          className="md:col-span-3"
          name="Septem"
          description={t("septem.description")}
          technologies={[SiNextdotjs, SiTailwindcss, SiPrisma, SiPostgresql]}
          // todo: ajouter le lien
          link="https://github.com/Coyls"
        />

        <Project
          className="md:col-span-2"
          name="Wake"
          description={t("wake.description")}
          technologies={[SiNextdotjs, SiTailwindcss, SiGreensock]}
          link="https://wake-coyls.vercel.app"
          githubLink="https://github.com/Coyls/wake"
        />

        <Project
          className="md:col-span-2"
          name="Siah"
          description={t("siah.description")}
          technologies={[SiNextdotjs, SiTailwindcss]}
          link="https://workshop-dataviz.vercel.app/"
          githubLink="https://github.com/Coyls/workshop-dataviz"
          responsive={false}
        />

        <Project
          className="md:col-span-3"
          name={
            <>
              KTK<span className="hidden md:inline">{" | Back-end"}</span>
            </>
          }
          description={t("ktk.description")}
          technologies={[SiExpress, SiD3dotjs, SiNeo4j, SiDocker]}
          link="http://vps-080d9e1e.vps.ovh.net:3100/"
          githubLink="https://github.com/Coyls/ktk-dataviz-backend"
          responsive={false}
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
