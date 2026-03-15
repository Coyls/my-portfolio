export const SiteConfig = {
  title: "Loïc Greco",
  description: "French Developer Full Stack",
  primary: "#FFAC4D",
  prodUrl: "https://loic-greco.fr",
  contactEmail: "loic.grecofr@gmail.com",
  disponibility: {
    isAvailable: true,
    poste: "CDI",
  },
  links: {
    github: "https://github.com/Coyls",
    linkedin: "https://www.linkedin.com/in/loïc-greco",
  },
  formations: {
    gobelins: {
      isVisible: true,
      hasDescription: true,
    },
    bootdev: {
      isVisible: false,
      hasDescription: false,
    },
    cocadmin: {
      isVisible: true,
      hasDescription: true,
    },
  },
  stack: false,
} as const;
