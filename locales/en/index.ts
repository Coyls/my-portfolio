import header from "./header";
import hero from "./hero";
import about from "./about";
import experiences from "./experiences";
import projects from "./projects";
import notResponsive from "./not-responsive";

export default {
  ...header,
  ...hero,
  ...about,
  ...experiences,
  ...projects,
  "not-responsive": notResponsive,
} as const;
