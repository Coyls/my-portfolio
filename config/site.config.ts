export const SiteConfig = {
  title: "Loïc Greco",
  description: "French Developer Full Stack",
  primary: "#FFAC4D",
  prodUrl: "https://loic-greco.fr",
  contactEmail: "loic.grecofr@gmail.com",
  disponibility: {
    isAvailable: true,
    message: "ALTERNANCE", // "FREELANCE WORK"
  },
  links: {
    github: "https://github.com/Coyls",
    linkedin: "https://www.linkedin.com/in/loïc-greco",
    x: "https://x.com/_Coyls",
  },
  formations: {
    gobelins: {
      isVisible: true,
      hasDescription: false,
    },
    bootdev: {
      isVisible: false,
      hasDescription: false,
    },
    efrei: {
      isVisible: true,
      hasDescription: false,
    },
  },
  stack: false,
} as const;
