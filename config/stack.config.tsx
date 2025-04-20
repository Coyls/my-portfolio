import {
  SiDocker,
  SiGo,
  SiNestjs,
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
      {
        name: "Go",
        icon: <SiGo className="size-10" />,
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
        name: "Nest.js",
        icon: <SiNestjs className="size-10" />,
      },

      {
        name: "Docker",
        icon: <SiDocker className="size-10" />,
      },
    ],
  },
] as const;
