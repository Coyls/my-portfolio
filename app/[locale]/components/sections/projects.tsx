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
      <div className="grid grid-cols-5 gap-4 px-8">
        <Project
          className="col-span-3"
          name="Septem"
          description={t("septem.description")}
          technologies={[SiNextdotjs, SiTailwindcss, SiPrisma, SiPostgresql]}
          // todo: ajouter le lien
          link="https://github.com/Coyls"
        />

        <Project
          className="col-span-2"
          name="Wake"
          description={t("wake.description")}
          technologies={[SiNextdotjs, SiTailwindcss, SiGreensock]}
          link="https://wake-coyls.vercel.app"
          githubLink="https://github.com/Coyls/wake"
        />

        <Project
          className="col-span-2"
          name="Siah"
          description={t("siah.description")}
          technologies={[SiNextdotjs, SiTailwindcss]}
          link="https://workshop-dataviz.vercel.app/"
          githubLink="https://github.com/Coyls/workshop-dataviz"
        />

        <Project
          className="col-span-3"
          name="KTK | Back-end"
          description={t("ktk.description")}
          technologies={[SiExpress, SiD3dotjs, SiNeo4j, SiDocker]}
          link="http://vps-080d9e1e.vps.ovh.net:3100/"
          githubLink="https://github.com/Coyls/ktk-dataviz-backend"
        />

        <div className="col-span-5 rounded-lg bg-primary/5 p-8 text-center text-sm">
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
