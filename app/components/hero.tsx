import Image from "next/image";
import { Section } from "./section";
import { ButtonGithub } from "./socials/button-github";
import { ButtonGmail } from "./socials/button-gmail";
import { ButtonLinkedin } from "./socials/button-linkedin";

export const Hero: React.FC = () => {
  return (
    <Section className="s flex flex-row items-center">
      <div className="flex flex-[3] flex-col">
        <h1>loïc greco</h1>
        <div className="flex flex-col pl-8">
          <h3>web developer freelance</h3>
          {/* // ? Si envie d'ajouter ma localisation */}
          {/* <div className="flex flex-row gap-4">
            <MapPin size={18} />
            Lyon, France
          </div> */}
          <div className="flex flex-row gap-4">
            <ButtonGithub />
            <ButtonLinkedin />
            <ButtonGmail />
          </div>
        </div>
      </div>
      <div className="flex-[1] pr-8">
        <Image
          src="/me.png"
          alt="Picture of Loïc Greco"
          width={400}
          height={400}
          className="rounded-full"
        />
      </div>
    </Section>
  );
};
