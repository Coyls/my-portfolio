import about from "./about";
import experiences from "./experiences";
import formations from "./formations";
import header from "./header";
import hero from "./hero";
import notResponsive from "./not-responsive";
import projects from "./projects";
export default {
  ...header,
  ...hero,
  ...about,
  ...experiences,
  ...projects,
  ...notResponsive,
  ...formations,
} as const;
