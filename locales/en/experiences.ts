export default {
  experiences: {
    prismo: {
      career: "Full Stack Developer",
      status: "Alternant",
      description: "Development of the company's various web applications.",
      frontend: {
        title: "Frontend",
        features: "Feature development in a Multi-Tenant SaaS",
        integration: "Complete Frontend Integration of Aura (2 times)",
        migrations: {
          migration1: "Migration Angular to Next.js",
          migration2: "Migration Lib UI Ant Design/Tailwind to MUI",
        },
        complexForms: "Development of Complex Forms",
        complexFormsDetails: {
          detail1: "Multi-step",
          detail2: "Gamified",
        },
        graphics: "Integration of Charts and Data Visualization",
        internationalization: "Internationalization",
      },
      backend: {
        title: "Backend",
        graphql: "Creation of GraphQL resolvers",
        pdfTool:
          "Creation of a PDF generation tool in Backend with dynamic data: CV Prismo",
        prismaSchemas: "Creation of Prisma schemas",
      },
    },
  },
} as const;
