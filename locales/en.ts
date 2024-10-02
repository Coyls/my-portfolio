export default {
  header: {
    available: "AVAILABLE FOR",
  },
  hero: {
    subtitle: "Freelance Front‑End Developer",
  },
  about: {
    description: {
      me: 'I am a versatile web developer with skills in both front-end and back-end. Always eager to learn, I enjoy acquiring new skills and exploring technologies to keep improving. Working on meaningful projects is a true source of motivation for me. My motto: "keep it simple!"',
      stack:
        "I mainly focus on Next.js and the surrounding technologies. I also have experience with NestJS and Prisma, as well as some knowledge of Python. I am also open to using other technologies depending on the project's needs.",
    },
  },
  experiences: {
    prismo: {
      career: "Full Stack Developer",
      status: "Alternant",
      description: "Development of the company's various web applications.",
    },
  },
  projects: {
    septem: {
      description:
        "Web application to count points and get statistics for the board game 7 Wonders. Goal: create a useful application and improve my stack.",
    },
    ktk: {
      description:
        "Web application for a school project. Goal: visualize data on a map. I handled the server, the database, and the charts.",
    },
    wake: {
      description:
        "Landing page for a school project. I designed the site from scratch, from Design to Development, and used GSAP for most of the animations.",
    },
    siah: {
      description:
        "Project completed in one week for a school assignment. I handled most of the site's animations and created the flip-book logic for scroll animations.",
    },
    more: {
      description: {
        desktop: "Want to see more projects? Take a look at my ",
        mobile: "More projects on my ",
      },
    },
  },
  ["not-responsive"]: "⚠️ This site isn't responsive.",
} as const;
