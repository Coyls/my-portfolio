export default {
  experiences: {
    freelance: {
      career: "Full Stack Developer",
    },
    prismo: {
      career: "Full Stack Developer",
      status: "Alternant",
      description: "Development of the company's various web applications.",
      frontend: {
        title: "Frontend",
        features:
          "- Feature development for a multi-tenant SaaS application (Angular / Next.js)",
        integration:
          "- UI integration with Next.js, Angular, Tailwind, Ant Design, and MUI",
        forms: "- Design of complex forms: multi-step, gamified",
        graphics: "- Implementation of charts and data visualizations",
        internationalization: "- Implementation of internationalization (i18n)",
      },
      backend: {
        title: "Backend",
        graphql: "- Development of GraphQL resolvers",
        pdfTool:
          "- Built a backend tool for dynamic PDF generation (CV Prismo)",
        prismaSchemas: "- Design and implementation of Prisma schemas",
      },
    },
  },
} as const;
