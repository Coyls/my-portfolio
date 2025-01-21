import {
  SiGraphql,
  SiNextdotjs,
  SiReact,
  SiShadcnui,
  SiTypescript,
} from "@icons-pack/react-simple-icons";

export const StackConfig = [
  {
    name: "languages",
    skills: [
      {
        name: "Typescript",
        icon: <SiTypescript className="size-10" />,
      },
    ],
  },
  {
    name: "frontend",
    skills: [
      {
        name: "React",
        icon: <SiReact className="size-10" />,
      },
      {
        name: "ShadcnUI",
        icon: <SiShadcnui className="size-10" />,
      },
    ],
  },
  {
    name: "backend",
    skills: [
      {
        name: "Next.js",
        icon: <SiNextdotjs className="size-10" />,
      },
      {
        name: "GraphQL",
        icon: <SiGraphql className="size-10" />,
      },
    ],
  },
] as const;
