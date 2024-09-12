import { Section } from "./section";

export const About: React.FC = () => {
  return (
    <Section className="flex flex-col gap-8">
      <h2>about.</h2>
      <p className="px-8 text-justify">
        I’m a passionate web developer with skills in both frontend and backend.
        I love learning new skills and exploring technologies to keep improving.
        I enjoy creating solid and tailored web solutions for each project.
        Whether it&apos;s coding client-side features or managing the server,
        I&apos;m always on the lookout for new challenges. My motto: keep it
        simple and improvable.
      </p>
    </Section>
  );
};

/*
* FR

Je m'appelle Loïc et je suis un développeur web passionné, aussi bien
à l'aise en frontend qu'en backend. J'adore apprendre de nouvelles
compétences et explorer des technologies pour toujours m'améliorer.
Mon plaisir, c'est de créer des solutions web solides et adaptées à
chaque projet. Que ce soit pour coder des fonctionnalités côté client
ou m'occuper du serveur, je suis toujours partant pour de nouveaux
défis techniques.

/* 
* EN

My name is Loïc, and I’m a passionate web developer with skills in
both frontend and backend. I love learning new skills and exploring
technologies to keep improving. I enjoy creating solid and tailored
web solutions for each project. Whether it&apos;s coding client-side
features or managing the server, I&apos;m always on the lookout for
new challenges.
 */
