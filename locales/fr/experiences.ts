export default {
  experiences: {
    prismo: {
      career: "Développeur Full Stack",
      status: "alternant",
      description:
        "Développement des différentes applications web de l’entreprise.",
      frontend: {
        title: "Frontend",
        features: "Développement de feature dans une Multi-Tenant SaaS",
        integration: "Intégration Frontend Complete de Aura (2 fois)",
        migrations: {
          migration1: "Migration Angular à Next.js",
          migration2: "Migration Lib UI Ant Design/Tailwind à MUI",
        },
        complexForms: "Développement de Formulaires Complexes",
        complexFormsDetails: {
          detail1: "Multi-step",
          detail2: "Gamifié",
        },
        graphics: "Intégration de Graphique et Data visualisation",
        internationalization: "Internationalisation",
      },
      backend: {
        title: "Backend",
        graphql: "Création de resolver GraphQL",
        pdfTool:
          "Création d'un outils de génération de PDF en Backend avec donnée dynamique : CV Prismo",
        prismaSchemas: "Création de schemas Prisma",
      },
    },
  },
} as const;
