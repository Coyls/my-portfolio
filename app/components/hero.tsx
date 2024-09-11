import Image from "next/image";
import { Section } from "./section";
import { ButtonGithub } from "./socials/button-github";
import { ButtonGmail } from "./socials/button-gmail";
import { ButtonLinkedin } from "./socials/button-linkedin";

export const Hero: React.FC = () => {
  return (
    <Section className="flex flex-row items-center s">
      <div className="flex flex-col gap-2 flex-[3]">
        <div className="flex flex-col ">
          <h1 className="text-5xl font-caption leading-none">loïc greco</h1>
          <p className="px-6 text-3xl font-caption">web developer freelance</p>
          {/* // ? Si envie d'ajouter ma localisation */}
          {/* <div className="px-6 flex flex-row gap-2">
            <MapPin size={18} />
            Lyon, France
          </div> */}
        </div>
        <div className="mx-6 flex flex-row gap-2">
          <ButtonGithub />
          <ButtonLinkedin />
          <ButtonGmail />
        </div>
      </div>
      <div className="flex-[1]">
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

export default Hero;
