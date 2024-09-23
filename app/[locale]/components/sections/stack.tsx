import { cn } from "@/lib/utils";
import {
  SiDocker,
  SiNextdotjs,
  SiPostgresql,
  SiPrisma,
  SiPython,
  SiReact,
  SiTailwindcss,
  SiTypescript,
} from "@icons-pack/react-simple-icons";
import { Section } from "../utils/section";
import { Skill } from "../utils/skill";

const stack = [
  {
    name: "languages",
    skills: [
      {
        name: "Typescript",
        icon: <SiTypescript className="size-10" />,
      },
      {
        name: "Python",
        icon: <SiPython className="size-10" />,
      },
    ],
  },
  {
    name: "front-end",
    skills: [
      {
        name: "React",
        icon: <SiReact className="size-10" />,
      },
      {
        name: "TailwindCSS",
        icon: <SiTailwindcss className="size-10" />,
      },
    ],
  },
  {
    name: "back-end",
    skills: [
      {
        name: "Next.js",
        icon: <SiNextdotjs className="size-10" />,
      },
      {
        name: "Prisma",
        icon: <SiPrisma className="size-10" />,
      },
      {
        name: "PostgreSQL",
        icon: <SiPostgresql className="size-10" />,
      },
      {
        name: "Docker",
        icon: <SiDocker className="size-10" />,
      },
    ],
  },
];

export const Stack: React.FC = async () => {
  return (
    <Section className="flex flex-col md:gap-8">
      <h2>favorite technologies.</h2>
      <div className="grid-col-1 grid justify-center md:grid-cols-3">
        {stack.map(({ name, skills }, id, array) => {
          const isLast = id === array.length - 1;

          return (
            <div
              key={name}
              className={cn(
                "flex flex-col items-center gap-4 p-8 md:gap-8",
                isLast ? "" : "md:border-r-[1px] md:border-r-accent",
                isLast ? "" : "border-b-[1px] border-b-accent md:border-b-0",
              )}
            >
              <h3>{name}</h3>
              <div className="my-auto grid grid-cols-2 gap-4">
                {skills.map(({ name, icon }) => (
                  <Skill key={name}>{icon}</Skill>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </Section>
  );
};
