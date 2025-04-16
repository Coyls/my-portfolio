export default {
  experiences: {
    freelance: {
      career: "Développeur Full Stack",
    },
    prismo: {
      career: "Développeur Full Stack",
      status: "alternant",
      description:
        "Développement des différentes applications web de l’entreprise.",
      frontend: {
        title: "Frontend",
        features:
          "- Développement de fonctionnalités pour une application SaaS multi-tenant (Angular / Next.js)",
        integration:
          "- Intégration d’interfaces avec Next.js, Angular, Tailwind, Ant Design et MUI",
        forms: "- Conception de formulaires complexes : multi-étapes, gamifiés",
        graphics:
          "- Implémentation de graphiques et de visualisations de données",
        internationalization:
          "- Mise en place de l’internationalisation (i18n)",
      },
      backend: {
        title: "Backend",
        graphql: "- Développement de resolvers GraphQL",
        pdfTool:
          "- Création d’un outil backend de génération de PDF dynamique (CV Prismo)",
        prismaSchemas: "- Modélisation et mise en place de schémas Prisma",
      },
    },
  },
} as const;
